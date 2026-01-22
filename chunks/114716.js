n.d(t, {
    C: () => o,
});
var r = n(627968);
n(64700);
var i = n(961350),
    l = n(612181),
    a = n(642277),
    s = n(652215);

function o(e, t) {
    var n, o;
    let c =
        arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {
                  passProps: !0,
              };

    function u(n) {
        return !(0, l.wR)() && i.default.getLoginStatus() !== s.aUe.LOGGING_IN && i.default.allowLogoutRedirect()
            ? null != t
                ? (0, r.jsx)(t, {
                      renderRedirect: (0, r.jsx)(a.A, {}),
                  })
                : (0, r.jsx)(a.A, {})
            : (0, r.jsx)(
                  e,
                  (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                  }),
                              )),
                              r.forEach(function (t) {
                                  var r;
                                  (r = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                            })
                                          : (e[t] = r);
                              });
                      }
                      return e;
                  })({}, c.passProps ? n : null),
              );
    }
    return (
        (u.displayName = "Authenticated(".concat(
            null != (n = null != (o = e.displayName) ? o : e.name) ? n : "<Unknown>",
            ")",
        )),
        u
    );
}
