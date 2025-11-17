n.d(t, { R: () => u });
var r = n(54381),
    i = n(473749),
    l = n(28664),
    a = n(481060),
    s = n(51596),
    o = n(388032),
    c = n(886190);
function u(e) {
    var t, n;
    let { focusSectionProps: u } = e,
        d = i.useCallback((e) => {
            (0, s.ZN)("fast-travel");
        }, []);
    return (0, r.jsx)(l.u, {
        "aria-label": o.intl.string(o.t["7P/+qz"]),
        asContainer: !0,
        __unsupportedReactNodeAsText: (0, r.jsxs)(r.Fragment, {
            children: [
                o.intl.string(o.t["7P/+qz"]),
                (0, r.jsx)(a.M2$, {
                    shortcut: ["mod", "k"],
                }),
            ],
        }),
        children: (0, r.jsxs)(
            a.P3F,
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
                    className: c.fastTravelButton,
                    onClick: d,
                    children: [
                        (0, r.jsx)(a.acy, { size: "xs" }),
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
