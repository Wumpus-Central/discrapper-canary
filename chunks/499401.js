n.d(t, { Y: () => l });
var r = n(388032);
function l(e) {
    let { application: t, username: n, usernameOnClick: l } = e;
    return null != t
        ? r.intl.formatToParts(r.t.Tes5Oj, {
              username: n,
              applicationName: t.name,
              usernameOnClick: l
          })
        : r.intl.formatToParts(r.t.PUJtgo, {
              username: n,
              usernameOnClick: l
          });
}
