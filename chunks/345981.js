"use strict";
n.d(t, { X: () => l });
var i = n(652215),
    r = n(985018);
function l(e) {
    let { application: t, username: n, usernameHook: l = i.tEg } = e;
    return null != t
        ? r.intl.format(r.t.dXdgno, { username: n, applicationName: t.name, usernameHook: l })
        : r.intl.format(r.t.O829Uu, { username: n, usernameHook: l });
}
