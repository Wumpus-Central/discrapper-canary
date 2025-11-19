n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(456935),
    c = n(259580),
    d = n(981631),
    u = n(388032),
    g = n(298392);
function m(e) {
    let { guild: t } = e,
        l = t.verificationLevel,
        m = i.useMemo(() => (0, o.I9)(l), [l]);
    return (0, r.jsxs)(s.P3F, {
        onClick: () =>
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e("72458").then(n.bind(n, 694278));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
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
                        })({}, n)),
                        (l = l =
                            {
                                guild: t,
                                hideColors: !0,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i),
                    );
                };
            }),
        className: a()(g.simpleItemWrapper, g.clickable),
        children: [
            (0, r.jsxs)("div", {
                className: g.itemContent,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: u.intl.string(u.t.DpRdYK),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: u.intl.string(u.t.mA17eD),
                    }),
                    (0, r.jsx)("div", {
                        className: g.__invalid_pillRow,
                        children: (0, r.jsxs)(s.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            className: g.valuePill,
                            children: [
                                l === d.sFg.VERY_HIGH
                                    ? (0, r.jsx)(s.AtH, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                      })
                                    : (0, r.jsx)(s._XJ, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                      }),
                                m,
                            ],
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(c.Z, {
                height: 24,
                width: 24,
                direction: c.Z.Directions.RIGHT,
                className: g.caret,
            }),
        ],
    });
}
