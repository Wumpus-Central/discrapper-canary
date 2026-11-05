var l = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(847374),
    u = n(320448),
    o = n(834730),
    d = n(939249),
    c = n(344587),
    m = n(191850),
    f = n(792996),
    h = n(59678);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    glyph: t,
                    line: n,
                    live: r,
                    settled: p,
                    tint: k,
                    detail: x,
                    connected: g = !1,
                    connectsDown: _ = !1,
                    anchor: j = !1,
                } = e,
                [b, v] = a.useState(!1),
                y = a.useRef(null);
            a.useLayoutEffect(() => {
                r && y.current?.style.setProperty("--custom-conjure-shine-delay", `${-(performance.now() % 2e3)}ms`);
            }, [r]);
            let w = a.useId(),
                S = a.useCallback(() => v((e) => !e), []),
                { text: N, phase: C } = (0, c.Q)(n),
                A = b ? i.ChevronSmallDownIcon : u.ChevronSmallRightIcon,
                I = null != x,
                E = (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("span", { className: h.hd, children: t }),
                        (0, l.jsx)(o.E, {
                            tag: "span",
                            variant: "body-md/normal",
                            color: "currentColor",
                            className: s()(h.qo, { [h._q]: "exit" === C, [h.GD]: "enter" === C }),
                            children: N,
                        }),
                        I ? (0, l.jsx)(A, { size: "xs", color: "currentColor", className: h.nD }) : null,
                    ],
                }),
                T = (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("span", { className: h.$m, children: E }),
                        r
                            ? (0, l.jsx)("span", {
                                  className: h.pw,
                                  "aria-hidden": !0,
                                  children: (0, l.jsx)("span", { className: s()(h.$m, h.Yj), children: E }),
                              })
                            : null,
                    ],
                });
            return (0, l.jsxs)("li", {
                ref: y,
                className: h.K1,
                "data-live": r,
                "data-settled": p,
                "data-connected": g,
                "data-connects-down": _,
                "data-conjure-turn-status": j ? "true" : void 0,
                style: null != k ? { "--custom-conjure-shimmer-tint": k } : void 0,
                children: [
                    I
                        ? (0, l.jsx)(d.D, {
                              tag: "div",
                              className: s()(h.ep, h.EK),
                              "aria-expanded": b,
                              "aria-controls": w,
                              "aria-label": f.intl.formatToPlainString(m.default.yByAPh, { activity: N }),
                              onClick: S,
                              children: T,
                          })
                        : (0, l.jsx)("div", { className: h.ep, children: T }),
                    (0, l.jsx)("div", { id: w, hidden: !b, "data-conjure-entrance": !0, className: h.BA, children: x }),
                ],
            });
        },
    },
);
