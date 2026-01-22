n.d(t, {
    A: () => a,
    W: () => i,
});
var r = n(735438);
function i(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let a = (0, r.camelCase)(n);
              return "object" != typeof e[n] || Array.isArray(e[n]) ? (t[a] = e[n]) : (t[a] = i(e[n])), t;
          }, {});
}
function a(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let i = (0, r.snakeCase)(n);
              return (
                  "object" != typeof e[n] || Array.isArray(e[n]) ? (t[i] = e[n]) : (t[i] = a(e[n])), (t[i] = e[n]), t
              );
          }, {});
}
