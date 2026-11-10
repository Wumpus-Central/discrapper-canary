(n.d(t, { bg: () => p, FW: () => I, RH: () => C }), n(134528), n(947204));
var r,
    u = (((r = {}).AD_ATTRIBUTION_KIT = "aak"), r),
    i = n(626584),
    l = n(692184),
    o = n(929482),
    a = n(620632),
    s = n(856383),
    c = n(652215);
let d = { [u.AD_ATTRIBUTION_KIT]: { viewThroughSpec: { kind: u.AD_ATTRIBUTION_KIT } } },
    f = new i.A("IosAttribution"),
    A = new Map();
function E(e, t) {
    return A.get(e) === t;
}
function T(e, t) {
    E(e, t) && A.delete(e);
}
function _(e) {
    null != e && (0, o.bg)(e).catch(() => {});
}
function C(e) {
    let { impressionId: t, metadataSealed: n, framework: r } = e,
        u = { framework: r, token: null, signAbort: new AbortController(), registration: Promise.resolve() };
    (A.set(t, u),
        (u.registration = (async function (e) {
            let { impressionId: t, metadataSealed: n, framework: r, impression: u } = e,
                i = d[r]?.viewThroughSpec;
            if (null == i) {
                (f.warn(`No strategy for ${r}; impression ${t} is unattributed`),
                    (0, l.$8)(l.vI.NO_FRAMEWORK, r),
                    T(t, u));
                return;
            }
            let C = await (async function (e) {
                let { metadataSealed: t, impressionId: n, specs: r, signal: u } = e;
                try {
                    return (
                        (
                            await a.Bo.post({
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
                    return (s.A.captureException(e, { tags: { app_context: "ios_attribution" } }), null);
                }
            })({ metadataSealed: n, impressionId: t, specs: [i], signal: u.signAbort.signal });
            if (!E(t, u)) return;
            let I = null != C ? (C.at(0)?.payload ?? null) : null;
            if (null == I) {
                ((0, l.$8)(l.vI.SIGN_FAILED, r, t), A.delete(t));
                return;
            }
            let p = await (0, o.EO)(t, r, JSON.stringify(I));
            if (!E(t, u)) return void _(p);
            if (null == p) {
                ((0, l.$8)(l.vI.NO_TOKEN, r, t), A.delete(t));
                return;
            }
            ((0, l.$8)(l.vI.REGISTERED, r, t), (u.token = p));
        })({ impressionId: t, metadataSealed: n, framework: r, impression: u }).catch(() => {
            T(t, u);
        })));
}
async function I(e) {
    let { impressionId: t } = e,
        n = (0, o.BU)();
    if (null == n || null == d[n]) return;
    let r = await (async function (e) {
        let t = A.get(e);
        return null == t
            ? (f.warn(`No tracked impression for ${e} at click time; store sheet will be unattributed`),
              (0, l.y9)(l.s5.NO_IMPRESSION, (0, o.BU)(), e),
              null)
            : (null == t.token && (await t.registration), E(e, t) && null != t.token)
              ? ((0, l.y9)(l.s5.ATTRIBUTED, t.framework, e), t.token)
              : (f.warn(`Impression ${e} not registered natively in time; store sheet will be unattributed`),
                (0, l.y9)(l.s5.NOT_READY, t.framework, e),
                null);
    })(t);
    return null != r ? { impressionToken: r } : void 0;
}
function p(e) {
    let t = A.get(e);
    null != t && (A.delete(e), t.signAbort.abort(), _(t.token));
}
