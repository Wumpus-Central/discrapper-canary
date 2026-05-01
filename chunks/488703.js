t.d(r, {
    A: () =>
        function e(r) {
            return null == r
                ? r
                : Object.keys(r).reduce((t, s) => {
                      let u = (0, c.snakeCase)(s);
                      return (
                          "object" != typeof r[s] || Array.isArray(r[s]) ? (t[u] = r[s]) : (t[u] = e(r[s])),
                          (t[u] = r[s]),
                          t
                      );
                  }, {});
        },
    W: () =>
        function e(r) {
            return null == r
                ? r
                : Object.keys(r).reduce((t, s) => {
                      let u = (0, c.camelCase)(s);
                      return "object" != typeof r[s] || Array.isArray(r[s]) ? (t[u] = r[s]) : (t[u] = e(r[s])), t;
                  }, {});
        },
});
var c = t(735438);
