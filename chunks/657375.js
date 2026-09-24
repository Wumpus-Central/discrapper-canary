(n.d(t, { FW: () => _, bg: () => g, RH: () => m }), n(134528), n(947204));
var i,
    r = (((i = {}).AD_ATTRIBUTION_KIT = "aak"), i),
    s = n(626584),
    o = n(692184),
    u = n(929482),
    a = n(636537),
    l = n(38405),
    d = n(652215);
async function c(e) {
    let { metadataSealed: t, impressionId: n, specs: i, signal: r } = e;
    try {
        return (
            (
                await a.Bo.post({
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
        return (l.A.captureException(e, { tags: { app_context: "ios_attribution" } }), null);
    }
}
let C = { [r.AD_ATTRIBUTION_KIT]: { viewThroughSpec: { kind: r.AD_ATTRIBUTION_KIT } } },
    f = new s.A("IosAttribution"),
    A = new Map();
function E(e, t) {
    return A.get(e) === t;
}
function p(e, t) {
    E(e, t) && A.delete(e);
}
function I(e) {
    null != e && (0, u.bg)(e).catch(() => {});
}
function m(e) {
    let { impressionId: t, metadataSealed: n, framework: i } = e,
        r = { framework: i, token: null, signAbort: new AbortController(), registration: Promise.resolve() };
    (A.set(t, r),
        (r.registration = T({ impressionId: t, metadataSealed: n, framework: i, impression: r }).catch(() => {
            p(t, r);
        })));
}
async function T(e) {
    let { impressionId: t, metadataSealed: n, framework: i, impression: r } = e,
        s = C[i]?.viewThroughSpec;
    if (null == s) {
        (f.warn(`No strategy for ${i}; impression ${t} is unattributed`), (0, o.$8)(o.vI.NO_FRAMEWORK, i), p(t, r));
        return;
    }
    let a = await c({ metadataSealed: n, impressionId: t, specs: [s], signal: r.signAbort.signal });
    if (!E(t, r)) return;
    let l = null != a ? (a.at(0)?.payload ?? null) : null;
    if (null == l) {
        ((0, o.$8)(o.vI.SIGN_FAILED, i, t), A.delete(t));
        return;
    }
    let d = await (0, u.EO)(t, i, JSON.stringify(l));
    if (!E(t, r)) return void I(d);
    if (null == d) {
        ((0, o.$8)(o.vI.NO_TOKEN, i, t), A.delete(t));
        return;
    }
    ((0, o.$8)(o.vI.REGISTERED, i, t), (r.token = d));
}
async function h(e) {
    let t = A.get(e);
    return null == t
        ? (f.warn(`No tracked impression for ${e} at click time; store sheet will be unattributed`),
          (0, o.y9)(o.s5.NO_IMPRESSION, (0, u.BU)(), e),
          null)
        : (null == t.token && (await t.registration), E(e, t) && null != t.token)
          ? ((0, o.y9)(o.s5.ATTRIBUTED, t.framework, e), t.token)
          : (f.warn(`Impression ${e} not registered natively in time; store sheet will be unattributed`),
            (0, o.y9)(o.s5.NOT_READY, t.framework, e),
            null);
}
async function _(e) {
    let { impressionId: t } = e,
        n = (0, u.BU)();
    if (null == n || null == C[n]) return;
    let i = await h(t);
    return null != i ? { impressionToken: i } : void 0;
}
function g(e) {
    let t = A.get(e);
    null != t && (A.delete(e), t.signAbort.abort(), I(t.token));
}
