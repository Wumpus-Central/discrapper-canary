t.d(A, { p: () => i });
var r = t(627968);
t(64700);
var n = t(397927),
    l = t(426043),
    a = t(985018);
function i(e, A) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (0, l.A)({
        title: e,
        body:
            "string" == typeof A
                ? A
                : a.intl.format(
                      A,
                      (function (e) {
                          for (var A = 1; A < arguments.length; A++) {
                              var t = null != arguments[A] ? arguments[A] : {},
                                  r = Object.keys(t);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(t).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (A) {
                                      var r;
                                      (r = t[A]),
                                          A in e
                                              ? Object.defineProperty(e, A, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[A] = r);
                                  });
                          }
                          return e;
                      })(
                          {
                              highlightHook: (e) =>
                                  (0, r.jsx)(n.Text, {
                                      variant: "text-md/normal",
                                      color: "text-default",
                                      style: { display: "inline" },
                                      children: e,
                                  }),
                          },
                          t,
                      ),
                  ),
        cta: a.intl.string(a.t["NX+WJN"]),
        onConfirm: () => {},
    });
}
