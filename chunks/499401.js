n.d(e, { Y: () => a });
var i = n(388032);
function a(t) {
    let { application: e, username: n, usernameOnClick: a } = t;
    return null != e
        ? i.intl.formatToParts(i.t.Tes5Oj, {
              username: n,
              applicationName: e.name,
              usernameOnClick: a
          })
        : i.intl.formatToParts(i.t.PUJtgo, {
              username: n,
              usernameOnClick: a
          });
}
