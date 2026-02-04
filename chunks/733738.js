n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(311907),
    s = n(435371),
    o = n(397927),
    c = n(430086),
    u = n(545167),
    d = n(729904),
    p = n(963169),
    h = n(985018),
    g = n(88808);
let m = c.GY.binds["0"],
    f = c.M$.binds["0"],
    A = (e) => {
        var t, n;
        let { firstElementFocusJumpSectionProps: i = {} } = e,
            { titlebarIconSize: c } = (0, u.pz)({
                location: "BackForwardButtons",
            }),
            { canGoBack: A, canGoForward: _ } = (0, a.cf)([d.A], () => ({
                canGoBack: d.A.canGoBack,
                canGoForward: d.A.canGoForward,
            }));
        return (0, r.jsxs)("div", {
            className: g.y_,
            children: [
                (0, r.jsx)(s.m_, {
                    ariaHidden: !0,
                    shouldShow: A,
                    text: h.intl.string(h.t.B9vzIP),
                    keyboardShortcut: m,
                    children: (0, r.jsx)(
                        o.DUT,
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
                        })(
                            {
                                "aria-label": h.intl.string(h.t.B9vzIP),
                                "aria-disabled": !A,
                                className: l()(g.x6, g.aX, {
                                    [g.r9]: !A,
                                }),
                                onClick: () => (0, p.OE)("nav_button"),
                            },
                            i,
                        )),
                        (n = n =
                            {
                                children: (0, r.jsx)(o.rJJ, {
                                    size: c,
                                    color: "currentColor",
                                }),
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
                }),
                (0, r.jsx)(s.m_, {
                    ariaHidden: !0,
                    shouldShow: _,
                    text: h.intl.string(h.t["9KJ29e"]),
                    keyboardShortcut: f,
                    children: (0, r.jsx)(o.DUT, {
                        "aria-label": h.intl.string(h.t["9KJ29e"]),
                        "aria-disabled": !_,
                        className: l()(g.x6, g.sY, {
                            [g.r9]: !_,
                        }),
                        onClick: () => (0, p.Qb)("nav_button"),
                        children: (0, r.jsx)(o.EdP, {
                            size: c,
                            color: "currentColor",
                        }),
                    }),
                }),
            ],
        });
    };
