(n.d(t, { FW: () => O, bg: () => m, RH: () => C }), n(134528), n(947204));
var r,
    u = (((r = {}).AD_ATTRIBUTION_KIT = "aak"), r),
    l = n(626584),
    i = n(692184),
    o = n(929482),
    s = n(636537),
    a = n(38405),
    c = n(652215);
async function d(e) {
    let { metadataSealed: t, impressionId: n, specs: r, signal: u } = e;
    try {
        return (
            (
                await s.Bo.post({
                    url: c.Rsh.ADS_IOS_ATTRIBUTION_SIGN_PAYLOAD,
                    body: { metadata_sealed: t, impression_id: n, specs: r },
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !0,
                    timeout: 5e3,
                    signal: u,
                })
            ).body.payloads ?? null
        );
    } catch (e) {
        return (a.A.captureException(e, { tags: { app_context: "ios_attribution" } }), null);
    }
}
let f = { [u.AD_ATTRIBUTION_KIT]: { viewThroughSpec: { kind: u.AD_ATTRIBUTION_KIT } } },
    A = new l.A("IosAttribution"),
    E = new Map();
function T(e, t) {
    return E.get(e) === t;
}
function _(e, t) {
    T(e, t) && E.delete(e);
}
function I(e) {
    null != e && (0, o.bg)(e).catch(() => {});
}
function C(e) {
    let { impressionId: t, metadataSealed: n, framework: r } = e,
        u = { framework: r, token: null, signAbort: new AbortController(), registration: Promise.resolve() };
    (E.set(t, u),
        (u.registration = p({ impressionId: t, metadataSealed: n, framework: r, impression: u }).catch(() => {
            _(t, u);
        })));
}
async function p(e) {
    let { impressionId: t, metadataSealed: n, framework: r, impression: u } = e,
        l = f[r]?.viewThroughSpec;
    if (null == l) {
        (A.warn(`No strategy for ${r}; impression ${t} is unattributed`), (0, i.$8)(i.vI.NO_FRAMEWORK, r), _(t, u));
        return;
    }
    let s = await d({ metadataSealed: n, impressionId: t, specs: [l], signal: u.signAbort.signal });
    if (!T(t, u)) return;
    let a = null != s ? (s.at(0)?.payload ?? null) : null;
    if (null == a) {
        ((0, i.$8)(i.vI.SIGN_FAILED, r, t), E.delete(t));
        return;
    }
    let c = await (0, o.EO)(t, r, JSON.stringify(a));
    if (!T(t, u)) return void I(c);
    if (null == c) {
        ((0, i.$8)(i.vI.NO_TOKEN, r, t), E.delete(t));
        return;
    }
    ((0, i.$8)(i.vI.REGISTERED, r, t), (u.token = c));
}
async function S(e) {
    let t = E.get(e);
    return null == t
        ? (A.warn(`No tracked impression for ${e} at click time; store sheet will be unattributed`),
          (0, i.y9)(i.s5.NO_IMPRESSION, (0, o.BU)(), e),
          null)
        : (null == t.token && (await t.registration), T(e, t) && null != t.token)
          ? ((0, i.y9)(i.s5.ATTRIBUTED, t.framework, e), t.token)
          : (A.warn(`Impression ${e} not registered natively in time; store sheet will be unattributed`),
            (0, i.y9)(i.s5.NOT_READY, t.framework, e),
            null);
}
async function O(e) {
    let { impressionId: t } = e,
        n = (0, o.BU)();
    if (null == n || null == f[n]) return;
    let r = await S(t);
    return null != r ? { impressionToken: r } : void 0;
}
function m(e) {
    let t = E.get(e);
    null != t && (E.delete(e), t.signAbort.abort(), I(t.token));
}
