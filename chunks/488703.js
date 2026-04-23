"use strict";
n.d(t, {
    A: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, r) => {
                      let l = (0, i.snakeCase)(r);
                      return (
                          "object" != typeof t[r] || Array.isArray(t[r]) ? (n[l] = t[r]) : (n[l] = e(t[r])),
                          (n[l] = t[r]),
                          n
                      );
                  }, {});
        },
    W: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, r) => {
                      let l = (0, i.camelCase)(r);
                      return "object" != typeof t[r] || Array.isArray(t[r]) ? (n[l] = t[r]) : (n[l] = e(t[r])), n;
                  }, {});
        },
});
var i = n(735438);
