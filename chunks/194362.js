"use strict";
n.d(t, { a: () => l });
var i = n(104798),
    s = n(652215);
async function l(e) {
    let t = i.A.generateNonce();
    try {
        let n = await i.A.createHandoffToken(t);
        return s.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, n, e);
    } catch {
        return `//${window.GLOBAL_ENV.DEVELOPERS_ENDPOINT}/${e}`;
    }
}
