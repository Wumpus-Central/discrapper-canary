n.d(t, { Y: () => a });
var r = n(388032);
function a(e) {
    let { application: t, username: n, usernameOnClick: a } = e;
    return null != t
        ? r.intl.formatToParts(r.t.Tes5Oj, {
              username: n,
              applicationName: t.name,
              usernameOnClick: a
          })
        : r.intl.formatToParts(r.t.PUJtgo, {
              username: n,
              usernameOnClick: a
          });
}
