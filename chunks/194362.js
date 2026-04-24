"use strict";
n.d(t, { a: () => l });
var a = n(104798),
    i = n(652215);
async function l(e) {
    let t = a.A.generateNonce();
    try {
        let n = await a.A.createHandoffToken(t);
        return i.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, n, e);
    } catch {
        return `//${window.GLOBAL_ENV.DEVELOPERS_ENDPOINT}/${e}`;
    }
}
