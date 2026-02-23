r.d(t, { a: () => s });
var i = r(104798),
    a = r(652215);
async function s(e) {
    let t = i.A.generateNonce();
    try {
        let r = await i.A.createHandoffToken(t);
        return a.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, r, e);
    } catch {
        return `//${window.GLOBAL_ENV.DEVELOPERS_ENDPOINT}/${e}`;
    }
}
