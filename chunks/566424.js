n.d(t, { A: () => g });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(847374),
    o = n(320448),
    u = n(834730),
    d = n(939249),
    c = n(344587),
    f = n(248675),
    m = n(105292),
    p = n(59678);
function g(e) {
    let {
            glyph: t,
            line: n,
            live: i,
            settled: g,
            tint: h,
            detail: x,
            connected: j = !1,
            connectsDown: k = !1,
            anchor: v = !1,
        } = e,
        [y, b] = a.useState(!1),
        _ = a.useRef(null);
    a.useLayoutEffect(() => {
        i && _.current?.style.setProperty("--custom-conjure-shine-delay", `${-(performance.now() % 2e3)}ms`);
    }, [i]);
    let w = a.useId(),
        S = a.useCallback(() => b((e) => !e), []),
        { text: A, phase: C } = (0, c.Q)(n),
        N = y ? s.a : o._,
        I = null != x,
        E = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: p.hd, children: t }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(p.qo, { [p._q]: "exit" === C, [p.GD]: "enter" === C }),
                    children: A,
                }),
                I ? (0, l.jsx)(N, { size: "xs", color: "currentColor", className: p.nD }) : null,
            ],
        }),
        P = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: p.$m, children: E }),
                i
                    ? (0, l.jsx)("span", {
                          className: p.pw,
                          "aria-hidden": !0,
                          children: (0, l.jsx)("span", { className: r()(p.$m, p.Yj), children: E }),
                      })
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        ref: _,
        className: p.K1,
        "data-live": i,
        "data-settled": g,
        "data-connected": j,
        "data-connects-down": k,
        "data-conjure-turn-status": v ? "true" : void 0,
        style: null != h ? { "--custom-conjure-shimmer-tint": h } : void 0,
        children: [
            I
                ? (0, l.jsx)(d.D, {
                      tag: "div",
                      className: r()(p.ep, p.EK),
                      "aria-expanded": y,
                      "aria-controls": w,
                      "aria-label": m.intl.formatToPlainString(f.default.yByAPh, { activity: A }),
                      onClick: S,
                      children: P,
                  })
                : (0, l.jsx)("div", { className: p.ep, children: P }),
            (0, l.jsx)("div", { id: w, hidden: !y, "data-conjure-entrance": !0, className: p.BA, children: x }),
        ],
    });
}
