a.d(t, { a: () => r });
var n = a(104798),
    c = a(652215);
async function r(e) {
    let t = n.A.generateNonce();
    try {
        let a = await n.A.createHandoffToken(t);
        return c.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, a, e);
    } catch {
        return `//${window.GLOBAL_ENV.DEVELOPERS_ENDPOINT}/${e}`;
    }
}
