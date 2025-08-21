n.d(t, { R: () => c });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(51596),
    o = n(388032),
    s = n(886190);
function c(e) {
    let { focusSectionProps: t } = e,
        n = i.useCallback((e) => {
            (0, a.ZN)("fast-travel");
        }, []);
    return (0, r.jsx)(l.ua7, {
        "aria-label": o.intl.string(o.t["7P/+q6"]),
        tooltipContentClassName: s.navigationTooltip,
        text: (0, r.jsxs)(r.Fragment, {
            children: [
                o.intl.string(o.t["7P/+q6"]),
                (0, r.jsx)(l.M2$, {
                    shortcut: ["mod", "k"],
                }),
            ],
        }),
        children: (e) => {
            var i, a;
            return (0, r.jsxs)(
                l.P3F,
                ((i = (function (e) {
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
                })({ className: s.fastTravelButton }, e, t)),
                (a = a =
                    {
                        onClick: n,
                        children: [
                            (0, r.jsx)(l.acy, { size: "xs" }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                lineClamp: 1,
                                children: o.intl.string(o.t.ZvKwYW),
                            }),
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                i),
            );
        },
    });
}
