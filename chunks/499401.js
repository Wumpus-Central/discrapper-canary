n.d(t, {
    Y: function () {
        return i;
    }
});
var r = n(388032);
function i(e) {
    let { application: t, username: n, usernameOnClick: i } = e;
    return null != t
        ? r.intl.formatToParts(r.t.Tes5Oj, {
              username: n,
              applicationName: t.name,
              usernameOnClick: i
          })
        : r.intl.formatToParts(r.t.PUJtgo, {
              username: n,
              usernameOnClick: i
          });
}
