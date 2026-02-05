n.d(t, { X: () => a });
var i = n(652215),
    l = n(985018);
function a(e) {
    let { application: t, username: n, usernameHook: a = i.tEg } = e;
    return null != t
        ? l.intl.format(l.t.dXdgno, { username: n, applicationName: t.name, usernameHook: a })
        : l.intl.format(l.t.O829Uu, { username: n, usernameHook: a });
}
