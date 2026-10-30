n.d(t, { y: () => l });
var i = n(636537),
    r = n(73153),
    a = n(38405);
let s = new Map();
function l(e) {
    let t = s.get(e);
    return (null == t && ((t = o(e)), s.set(e, t)), t);
}
async function o(e) {
    try {
        let { body: t } = await i.Bo.get({ url: `${e}/.discord/csp.json`, rejectWithError: !0 });
        r.h.dispatch({ type: "EMBEDDED_APP_CSP_FETCH_SUCCESS", routerOrigin: e, policy: t });
    } catch (e) {
        throw (a.A.captureException(e), e);
    } finally {
        s.delete(e);
    }
}
