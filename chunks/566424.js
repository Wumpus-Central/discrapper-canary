n.d(t, { A: () => g });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(847374),
    o = n(320448),
    u = n(834730),
    d = n(939249),
    c = n(344587),
    f = n(809526),
    m = n(105292),
    p = n(59678);
function g(e) {
    let {
            glyph: t,
            line: n,
            live: r,
            settled: g,
            tint: h,
            detail: x,
            connected: k = !1,
            connectsDown: b = !1,
            anchor: j = !1,
        } = e,
        [v, y] = a.useState(!1),
        _ = a.useRef(null);
    a.useLayoutEffect(() => {
        r && _.current?.style.setProperty("--custom-conjure-shine-delay", `${-(performance.now() % 2e3)}ms`);
    }, [r]);
    let w = a.useId(),
        S = a.useCallback(() => y((e) => !e), []),
        { text: C, phase: A } = (0, c.Q)(n),
        N = v ? s.a : o._,
        I = null != x,
        P = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: p.hd, children: t }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: i()(p.qo, { [p._q]: "exit" === A, [p.GD]: "enter" === A }),
                    children: C,
                }),
                I ? (0, l.jsx)(N, { size: "xs", color: "currentColor", className: p.nD }) : null,
            ],
        }),
        E = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: p.$m, children: P }),
                r
                    ? (0, l.jsx)("span", {
                          className: p.pw,
                          "aria-hidden": !0,
                          children: (0, l.jsx)("span", { className: i()(p.$m, p.Yj), children: P }),
                      })
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        ref: _,
        className: p.K1,
        "data-live": r,
        "data-settled": g,
        "data-connected": k,
        "data-connects-down": b,
        "data-conjure-turn-status": j ? "true" : void 0,
        style: null != h ? { "--custom-conjure-shimmer-tint": h } : void 0,
        children: [
            I
                ? (0, l.jsx)(d.D, {
                      tag: "div",
                      className: i()(p.ep, p.EK),
                      "aria-expanded": v,
                      "aria-controls": w,
                      "aria-label": m.intl.formatToPlainString(f.default.yByAPh, { activity: C }),
                      onClick: S,
                      children: E,
                  })
                : (0, l.jsx)("div", { className: p.ep, children: E }),
            (0, l.jsx)("div", { id: w, hidden: !v, "data-conjure-entrance": !0, className: p.BA, children: x }),
        ],
    });
}
