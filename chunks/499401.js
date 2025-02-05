n.d(t, { Y: () => r });
var i = n(388032);
function r(e) {
    let { application: t, username: n, usernameOnClick: r } = e;
    return null != t
        ? i.intl.formatToParts(i.t.Tes5Oj, {
              username: n,
              applicationName: t.name,
              usernameOnClick: r
          })
        : i.intl.formatToParts(i.t.PUJtgo, {
              username: n,
              usernameOnClick: r
          });
}
