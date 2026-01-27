n.d(t, {
    A: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, i) => {
                      let l = (0, r.snakeCase)(i);
                      return (
                          "object" != typeof t[i] || Array.isArray(t[i]) ? (n[l] = t[i]) : (n[l] = e(t[i])),
                          (n[l] = t[i]),
                          n
                      );
                  }, {});
        },
    W: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, i) => {
                      let l = (0, r.camelCase)(i);
                      return "object" != typeof t[i] || Array.isArray(t[i]) ? (n[l] = t[i]) : (n[l] = e(t[i])), n;
                  }, {});
        },
});
var r = n(735438);
