n.d(t, { F: () => u });
var r = n(627968),
    i = n(64700),
    l = n(990078),
    a = n(397927),
    s = n(793322),
    o = n(985018),
    c = n(168221);
function u(e) {
    var t, n;
    let { focusSectionProps: u } = e,
        d = i.useCallback((e) => {
            (0, s.L$)("fast-travel");
        }, []);
    return (0, r.jsx)(l.m, {
        "aria-label": o.intl.string(o.t["7P/+qz"]),
        asContainer: !0,
        __unsupportedReactNodeAsText: (0, r.jsxs)(r.Fragment, {
            children: [
                o.intl.string(o.t["7P/+qz"]),
                (0, r.jsx)(a.e7I, {
                    shortcut: ["mod", "k"],
                }),
            ],
        }),
        children: (0, r.jsxs)(
            a.DUT,
            ((t = (function (e) {
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
            })({}, u)),
            (n = n =
                {
                    className: c.F,
                    onClick: d,
                    children: [
                        (0, r.jsx)(a.txs, { size: "xs" }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            lineClamp: 1,
                            children: o.intl.string(o.t.ZvKwYa),
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        ),
    });
}
