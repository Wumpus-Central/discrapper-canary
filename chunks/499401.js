n.d(e, { Y: () => i });
var l = n(388032);
function i(t) {
    let { application: e, username: n, usernameOnClick: i } = t;
    return null != e
        ? l.intl.formatToParts(l.t.Tes5Oj, {
              username: n,
              applicationName: e.name,
              usernameOnClick: i
          })
        : l.intl.formatToParts(l.t.PUJtgo, {
              username: n,
              usernameOnClick: i
          });
}
