n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(185514),
    s = n(703656),
    c = n(388032),
    u = n(861265);
function d(e) {
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
function p(e, t) {
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
let f = o.Nx.binds["0"],
    h = o.On.binds["0"],
    g = (e) => {
        let { firstElementFocusJumpSectionProps: t = {} } = e;
        return (0, r.jsxs)("div", {
            className: u.backForwardButtons,
            children: [
                (0, r.jsx)(a.ua7, {
                    "aria-label": c.intl.string(c.t.B9vzIC),
                    tooltipContentClassName: u.navigationTooltip,
                    text: (0, r.jsxs)(r.Fragment, {
                        children: [c.intl.string(c.t.B9vzIC), (0, r.jsx)(a.M2$, { shortcut: f })],
                    }),
                    children: (e) =>
                        (0, r.jsx)(
                            a.P3F,
                            p(
                                d(
                                    p(d({}, e), {
                                        className: l()(u.button, u.back),
                                        onClick: s.op,
                                    }),
                                    t,
                                ),
                                {
                                    children: (0, r.jsx)(a.whL, {
                                        size: "sm",
                                        color: "currentColor",
                                    }),
                                },
                            ),
                        ),
                }),
                (0, r.jsx)(a.ua7, {
                    "aria-label": c.intl.string(c.t["9KJ29f"]),
                    tooltipContentClassName: u.navigationTooltip,
                    text: (0, r.jsxs)(r.Fragment, {
                        children: [c.intl.string(c.t["9KJ29f"]), (0, r.jsx)(a.M2$, { shortcut: h })],
                    }),
                    children: (e) =>
                        (0, r.jsx)(
                            a.P3F,
                            p(d({}, e), {
                                className: l()(u.button, u.forward),
                                onClick: s.eH,
                                children: (0, r.jsx)(a.ZSh, {
                                    size: "sm",
                                    color: "currentColor",
                                }),
                            }),
                        ),
                }),
            ],
        });
    };
