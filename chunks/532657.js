n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(556638),
    c = n(80568);
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
    let {
            text: t,
            tooltipText: n,
            textVariant: a = "text-xs/medium",
            textClassName: u,
            "aria-label": f,
            icon: p,
            canTruncate: h = !0,
            hideTooltip: m = !1,
            hideText: g = !1,
        } = e,
        E = i.useRef(null),
        b = () => {
            let e = null != n ? n : t;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    p,
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "none",
                        className: o()(c.tooltipText, u),
                        children: e,
                    }),
                ],
            });
        },
        y = {
            variant: a,
            color: "none",
            className: o()(h && c.truncated, u),
        },
        O = null != t && null == n && h,
        v = !m && (null != n || O || g);
    return null == p && g
        ? null
        : v
          ? (0, r.jsx)(s.aML, {
                "data-migration-pending": !0,
                text: b(),
                "aria-label": f,
                tooltipContentClassName: o()(c.container, c.activitiesTooltip),
                delay: l.X,
                children: (e) => {
                    let { onMouseEnter: i, onMouseLeave: a } = e;
                    return (0, r.jsxs)("div", {
                        className: o()(c.container, c.textWithIconContainer),
                        onMouseEnter: () => {
                            let { current: e } = E,
                                t = null != e && e.offsetWidth < e.scrollWidth;
                            (null != n || t || g) && (null == i || i());
                        },
                        onMouseLeave: a,
                        children: [p, !g && (0, r.jsx)(s.Text, _(d({ ref: E }, y), { children: t }))],
                    });
                },
            })
          : (0, r.jsxs)(r.Fragment, {
                children: [p, !g && (0, r.jsx)(s.Text, _(d({}, y), { children: t }))],
            });
}
