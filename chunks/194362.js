n.d(t, { a: () => i });
var a = n(104798),
    l = n(652215);
async function i(e) {
    let t = a.A.generateNonce();
    try {
        let n = await a.A.createHandoffToken(t);
        return l.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, n, e);
    } catch {
        return `//${window.GLOBAL_ENV.DEVELOPERS_ENDPOINT}/${e}`;
    }
}
