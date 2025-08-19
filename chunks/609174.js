n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(185514),
    c = n(365355),
    u = n(891304),
    d = n(388032),
    p = n(861265);
function f(e) {
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
function h(e, t) {
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
let g = s.Nx.binds["0"],
    m = s.On.binds["0"],
    b = (e) => {
        let { firstElementFocusJumpSectionProps: t = {} } = e,
            n = (0, a.e7)([c.Z], () => c.Z.canGoBack),
            i = (0, a.e7)([c.Z], () => c.Z.canGoForward);
        return (0, r.jsxs)("div", {
            className: p.backForwardButtons,
            children: [
                (0, r.jsx)(o.ua7, {
                    "aria-label": d.intl.string(d.t.B9vzIC),
                    tooltipContentClassName: p.navigationTooltip,
                    shouldShow: n,
                    text: (0, r.jsxs)(r.Fragment, {
                        children: [d.intl.string(d.t.B9vzIC), (0, r.jsx)(o.M2$, { shortcut: g })],
                    }),
                    children: (e) =>
                        (0, r.jsx)(
                            o.P3F,
                            h(
                                f(
                                    h(f({}, e), {
                                        "aria-disabled": !n,
                                        className: l()(p.button, p.back, { [p.disabled]: !n }),
                                        onClick: () => (0, u.Hm)("arrow"),
                                    }),
                                    t,
                                ),
                                {
                                    children: (0, r.jsx)(o.whL, {
                                        size: "sm",
                                        color: "currentColor",
                                    }),
                                },
                            ),
                        ),
                }),
                (0, r.jsx)(o.ua7, {
                    "aria-label": d.intl.string(d.t["9KJ29f"]),
                    tooltipContentClassName: p.navigationTooltip,
                    shouldShow: i,
                    text: (0, r.jsxs)(r.Fragment, {
                        children: [d.intl.string(d.t["9KJ29f"]), (0, r.jsx)(o.M2$, { shortcut: m })],
                    }),
                    children: (e) =>
                        (0, r.jsx)(
                            o.P3F,
                            h(f({}, e), {
                                "aria-disabled": !i,
                                className: l()(p.button, p.forward, { [p.disabled]: !i }),
                                onClick: () => (0, u.TL)("arrow"),
                                children: (0, r.jsx)(o.ZSh, {
                                    size: "sm",
                                    color: "currentColor",
                                }),
                            }),
                        ),
                }),
            ],
        });
    };
