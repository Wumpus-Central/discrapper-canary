n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(913527),
    a = n.n(i),
    o = n(481060),
    s = n(925329),
    l = n(388032),
    c = n(56651);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { application: t, timestamp: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Z, {
                size: s.A.LARGE,
                game: t,
            }),
            (0, r.jsxs)("div", {
                className: c.textContainer,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: c.timestamp,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: a()(n).format("LLLL"),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "interactive-active",
                        children: l.intl.format(l.t.J3s8JC, { applicationName: t.name }),
                    }),
                ],
            }),
        ],
    });
}
function h(e) {
    let { application: t, timestamp: n, children: i } = e;
    return (0, r.jsx)(o.ua7, {
        hideOnClick: !0,
        position: "top",
        "aria-label": l.intl.string(l.t["5nMcv7"]),
        tooltipClassName: c.gameMessageTooltip,
        tooltipContentClassName: c.gameMessageTooltipContent,
        text: (0, r.jsx)(p, {
            application: t,
            timestamp: n,
        }),
        children: (e) => (0, r.jsx)(o.P3F, _(d({ tag: "span" }, e), { children: i })),
    });
}
function m(e) {
    let { application: t, timestamp: n, compact: i, children: a } = e;
    return (0, r.jsxs)(h, {
        application: t,
        timestamp: n,
        children: [
            i
                ? null
                : (0, r.jsx)(o.iWm, {
                      className: c.gameIcon,
                      size: "custom",
                      width: 14,
                      height: 14,
                  }),
            a,
        ],
    });
}
