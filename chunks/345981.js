"use strict";
n.d(t, { X: () => s });
var i = n(652215),
    r = n(985018);
function s(e) {
    let { application: t, username: n, usernameHook: s = i.tEg } = e;
    return null != t
        ? r.intl.format(r.t.dXdgno, { username: n, applicationName: t.name, usernameHook: s })
        : r.intl.format(r.t.O829Uu, { username: n, usernameHook: s });
}
