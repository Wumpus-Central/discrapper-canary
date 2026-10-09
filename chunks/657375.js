(n.d(t, { FW: () => S, bg: () => O, RH: () => p }), n(134528), n(947204));
var r,
    u = (((r = {}).AD_ATTRIBUTION_KIT = "aak"), r),
    i = n(626584),
    o = n(692184),
    l = n(929482),
    s = n(636537),
    a = n(38405),
    d = n(652215);
async function c(e) {
    let { metadataSealed: t, impressionId: n, specs: r, signal: u } = e;
    try {
        return (
            (
                await s.Bo.post({
                    url: d.Rsh.ADS_IOS_ATTRIBUTION_SIGN_PAYLOAD,
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
    A = new i.A("IosAttribution"),
    E = new Map();
function _(e, t) {
    return E.get(e) === t;
}
function C(e, t) {
    _(e, t) && E.delete(e);
}
function I(e) {
    null != e && (0, l.bg)(e).catch(() => {});
}
function p(e) {
    let { impressionId: t, metadataSealed: n, framework: r } = e,
        u = { framework: r, token: null, signAbort: new AbortController(), registration: Promise.resolve() };
    (E.set(t, u),
        (u.registration = T({ impressionId: t, metadataSealed: n, framework: r, impression: u }).catch(() => {
            C(t, u);
        })));
}
async function T(e) {
    let { impressionId: t, metadataSealed: n, framework: r, impression: u } = e,
        i = f[r]?.viewThroughSpec;
    if (null == i) {
        (A.warn(`No strategy for ${r}; impression ${t} is unattributed`), (0, o.$8)(o.vI.NO_FRAMEWORK, r), C(t, u));
        return;
    }
    let s = await c({ metadataSealed: n, impressionId: t, specs: [i], signal: u.signAbort.signal });
    if (!_(t, u)) return;
    let a = null != s ? (s.at(0)?.payload ?? null) : null;
    if (null == a) {
        ((0, o.$8)(o.vI.SIGN_FAILED, r, t), E.delete(t));
        return;
    }
    let d = await (0, l.EO)(t, r, JSON.stringify(a));
    if (!_(t, u)) return void I(d);
    if (null == d) {
        ((0, o.$8)(o.vI.NO_TOKEN, r, t), E.delete(t));
        return;
    }
    ((0, o.$8)(o.vI.REGISTERED, r, t), (u.token = d));
}
async function m(e) {
    let t = E.get(e);
    return null == t
        ? (A.warn(`No tracked impression for ${e} at click time; store sheet will be unattributed`),
          (0, o.y9)(o.s5.NO_IMPRESSION, (0, l.BU)(), e),
          null)
        : (null == t.token && (await t.registration), _(e, t) && null != t.token)
          ? ((0, o.y9)(o.s5.ATTRIBUTED, t.framework, e), t.token)
          : (A.warn(`Impression ${e} not registered natively in time; store sheet will be unattributed`),
            (0, o.y9)(o.s5.NOT_READY, t.framework, e),
            null);
}
async function S(e) {
    let { impressionId: t } = e,
        n = (0, l.BU)();
    if (null == n || null == f[n]) return;
    let r = await m(t);
    return null != r ? { impressionToken: r } : void 0;
}
function O(e) {
    let t = E.get(e);
    null != t && (E.delete(e), t.signAbort.abort(), I(t.token));
}
