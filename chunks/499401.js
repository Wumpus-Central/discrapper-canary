n.d(e, { Y: () => l });
var r = n(388032);
function l(t) {
    let { application: e, username: n, usernameOnClick: l } = t;
    return null != e
        ? r.intl.formatToParts(r.t.Tes5Oj, {
              username: n,
              applicationName: e.name,
              usernameOnClick: l
          })
        : r.intl.formatToParts(r.t.PUJtgo, {
              username: n,
              usernameOnClick: l
          });
}
