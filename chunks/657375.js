n.d(t, { FW: () => _, bg: () => S, RH: () => p }), n(134528), n(947204);
var i,
    r = (((i = {}).AD_ATTRIBUTION_KIT = "aak"), i),
    s = n(626584),
    o = n(692184),
    a = n(929482),
    l = n(636537),
    u = n(38405),
    d = n(652215);
async function c(e) {
    let { metadataSealed: t, impressionId: n, specs: i, signal: r } = e;
    try {
        return (
            (
                await l.Bo.post({
                    url: d.Rsh.ADS_IOS_ATTRIBUTION_SIGN_PAYLOAD,
                    body: { metadata_sealed: t, impression_id: n, specs: i },
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !0,
                    timeout: 5e3,
                    signal: r,
                })
            ).body.payloads ?? null
        );
    } catch (e) {
        return u.A.captureException(e, { tags: { app_context: "ios_attribution" } }), null;
    }
}
let C = { [r.AD_ATTRIBUTION_KIT]: { viewThroughSpec: { kind: r.AD_ATTRIBUTION_KIT } } },
    f = new s.A("IosAttribution"),
    E = new Map();
function m(e, t) {
    return E.get(e) === t;
}
function A(e, t) {
    m(e, t) && E.delete(e);
}
function T(e) {
    null != e && (0, a.bg)(e).catch(() => {});
}
function p(e) {
    let { impressionId: t, metadataSealed: n, framework: i } = e,
        r = { framework: i, token: null, signAbort: new AbortController(), registration: Promise.resolve() };
    E.set(t, r),
        (r.registration = I({ impressionId: t, metadataSealed: n, framework: i, impression: r }).catch(() => {
            A(t, r);
        }));
}
async function I(e) {
    let { impressionId: t, metadataSealed: n, framework: i, impression: r } = e,
        s = C[i]?.viewThroughSpec;
    if (null == s) {
        f.warn(`No strategy for ${i}; impression ${t} is unattributed`), (0, o.$8)(o.vI.NO_FRAMEWORK, i), A(t, r);
        return;
    }
    let l = await c({ metadataSealed: n, impressionId: t, specs: [s], signal: r.signAbort.signal });
    if (!m(t, r)) return;
    let u = null != l ? (l.at(0)?.payload ?? null) : null;
    if (null == u) {
        (0, o.$8)(o.vI.SIGN_FAILED, i, t), E.delete(t);
        return;
    }
    let d = await (0, a.EO)(t, i, JSON.stringify(u));
    if (!m(t, r)) return void T(d);
    if (null == d) {
        (0, o.$8)(o.vI.NO_TOKEN, i, t), E.delete(t);
        return;
    }
    (0, o.$8)(o.vI.REGISTERED, i, t), (r.token = d);
}
async function h(e) {
    let t = E.get(e);
    return null == t
        ? (f.warn(`No tracked impression for ${e} at click time; store sheet will be unattributed`),
          (0, o.y9)(o.s5.NO_IMPRESSION, (0, a.BU)(), e),
          null)
        : (null == t.token && (await t.registration), m(e, t) && null != t.token)
          ? ((0, o.y9)(o.s5.ATTRIBUTED, t.framework, e), t.token)
          : (f.warn(`Impression ${e} not registered natively in time; store sheet will be unattributed`),
            (0, o.y9)(o.s5.NOT_READY, t.framework, e),
            null);
}
async function _(e) {
    let { impressionId: t } = e,
        n = (0, a.BU)();
    if (null == n || null == C[n]) return;
    let i = await h(t);
    return null != i ? { impressionToken: i } : void 0;
}
function S(e) {
    let t = E.get(e);
    null != t && (E.delete(e), t.signAbort.abort(), T(t.token));
}
