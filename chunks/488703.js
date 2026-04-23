n.d(t, {
    A: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, l) => {
                      let r = (0, i.snakeCase)(l);
                      return (
                          "object" != typeof t[l] || Array.isArray(t[l]) ? (n[r] = t[l]) : (n[r] = e(t[l])),
                          (n[r] = t[l]),
                          n
                      );
                  }, {});
        },
    W: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, l) => {
                      let r = (0, i.camelCase)(l);
                      return "object" != typeof t[l] || Array.isArray(t[l]) ? (n[r] = t[l]) : (n[r] = e(t[l])), n;
                  }, {});
        },
});
var i = n(735438);
