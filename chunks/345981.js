n.d(t, { X: () => a });
var r = n(652215),
    i = n(985018);
function a(e) {
    let { application: t, username: n, usernameHook: a = r.tEg } = e;
    return null != t
        ? i.intl.format(i.t.dXdgno, {
              username: n,
              applicationName: t.name,
              usernameHook: a,
          })
        : i.intl.format(i.t.O829Uu, {
              username: n,
              usernameHook: a,
          });
}
