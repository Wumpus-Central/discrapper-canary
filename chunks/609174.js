n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(185514),
    c = n(719961),
    u = n(365355),
    d = n(891304),
    p = n(388032),
    f = n(861265);
function h(e) {
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
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = s.Nx.binds["0"],
    b = s.On.binds["0"],
    _ = (e) => {
        let { firstElementFocusJumpSectionProps: t = {} } = e,
            { titlebarIconSize: n } = (0, c.T)({ location: "BackForwardButtons" }),
            { canGoBack: i, canGoForward: s } = (0, a.cj)([u.Z], () => ({
                canGoBack: u.Z.canGoBack,
                canGoForward: u.Z.canGoForward,
            }));
        return (0, r.jsxs)("div", {
            className: f.backForwardButtons,
            children: [
                (0, r.jsx)(o.ua7, {
                    "aria-label": p.intl.string(p.t.B9vzIC),
                    tooltipContentClassName: f.navigationTooltip,
                    shouldShow: i,
                    text: (0, r.jsxs)(r.Fragment, {
                        children: [p.intl.string(p.t.B9vzIC), (0, r.jsx)(o.M2$, { shortcut: m })],
                    }),
                    children: (e) =>
                        (0, r.jsx)(
                            o.P3F,
                            g(
                                h(
                                    g(h({}, e), {
                                        "aria-disabled": !i,
                                        className: l()(f.button, f.back, { [f.disabled]: !i }),
                                        onClick: () => (0, d.Hm)("nav_button"),
                                    }),
                                    t,
                                ),
                                {
                                    children: (0, r.jsx)(o.whL, {
                                        size: n,
                                        color: "currentColor",
                                    }),
                                },
                            ),
                        ),
                }),
                (0, r.jsx)(o.ua7, {
                    "aria-label": p.intl.string(p.t["9KJ29f"]),
                    tooltipContentClassName: f.navigationTooltip,
                    shouldShow: s,
                    text: (0, r.jsxs)(r.Fragment, {
                        children: [p.intl.string(p.t["9KJ29f"]), (0, r.jsx)(o.M2$, { shortcut: b })],
                    }),
                    children: (e) =>
                        (0, r.jsx)(
                            o.P3F,
                            g(h({}, e), {
                                "aria-disabled": !s,
                                className: l()(f.button, f.forward, { [f.disabled]: !s }),
                                onClick: () => (0, d.TL)("nav_button"),
                                children: (0, r.jsx)(o.ZSh, {
                                    size: n,
                                    color: "currentColor",
                                }),
                            }),
                        ),
                }),
            ],
        });
    };
