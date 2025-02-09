n.d(e, { Y: () => r });
var i = n(388032);
function r(t) {
    let { application: e, username: n, usernameOnClick: r } = t;
    return null != e
        ? i.intl.formatToParts(i.t.Tes5Oj, {
              username: n,
              applicationName: e.name,
              usernameOnClick: r
          })
        : i.intl.formatToParts(i.t.PUJtgo, {
              username: n,
              usernameOnClick: r
          });
}
