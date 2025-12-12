n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(681715),
    o = n(481060),
    c = n(185514),
    u = n(719961),
    d = n(365355),
    p = n(891304),
    f = n(388032),
    g = n(470165);
let h = c.Nx.binds["0"],
    m = c.On.binds["0"],
    b = (e) => {
        var t, n;
        let { firstElementFocusJumpSectionProps: i = {} } = e,
            { titlebarIconSize: c } = (0, u.T)({ location: "BackForwardButtons" }),
            { canGoBack: b, canGoForward: E } = (0, a.cj)([d.Z], () => ({
                canGoBack: d.Z.canGoBack,
                canGoForward: d.Z.canGoForward,
            }));
        return (0, r.jsxs)("div", {
            className: g.backForwardButtons,
            children: [
                (0, r.jsx)(s.u, {
                    ariaHidden: !0,
                    shouldShow: b,
                    text: f.intl.string(f.t.B9vzIP),
                    keyboardShortcut: h,
                    children: (0, r.jsx)(
                        o.P3F,
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
                                "aria-label": f.intl.string(f.t.B9vzIP),
                                "aria-disabled": !b,
                                className: l()(g.button, g.back, { [g.disabled]: !b }),
                                onClick: () => (0, p.Hm)("nav_button"),
                            },
                            i,
                        )),
                        (n = n =
                            {
                                children: (0, r.jsx)(o.whL, {
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
                (0, r.jsx)(s.u, {
                    ariaHidden: !0,
                    shouldShow: E,
                    text: f.intl.string(f.t["9KJ29e"]),
                    keyboardShortcut: m,
                    children: (0, r.jsx)(o.P3F, {
                        "aria-label": f.intl.string(f.t["9KJ29e"]),
                        "aria-disabled": !E,
                        className: l()(g.button, g.forward, { [g.disabled]: !E }),
                        onClick: () => (0, p.TL)("nav_button"),
                        children: (0, r.jsx)(o.ZSh, {
                            size: c,
                            color: "currentColor",
                        }),
                    }),
                }),
            ],
        });
    };
