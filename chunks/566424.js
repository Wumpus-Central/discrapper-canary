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
    f = n(87501),
    m = n(105292),
    p = n(59678);
function g(e) {
    let {
            glyph: t,
            line: n,
            live: i,
            settled: g,
            tint: x,
            detail: h,
            connected: j = !1,
            connectsDown: v = !1,
            anchor: b = !1,
        } = e,
        [k, y] = a.useState(!1),
        _ = a.useRef(null);
    a.useLayoutEffect(() => {
        i && _.current?.style.setProperty("--custom-conjure-shine-delay", `${-(performance.now() % 2e3)}ms`);
    }, [i]);
    let A = a.useId(),
        S = a.useCallback(() => y((e) => !e), []),
        { text: w, phase: N } = (0, c.Q)(n),
        C = k ? s.a : o._,
        I = null != h,
        E = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: p.hd, children: t }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(p.qo, { [p._q]: "exit" === N, [p.GD]: "enter" === N }),
                    children: w,
                }),
                I ? (0, l.jsx)(C, { size: "xs", color: "currentColor", className: p.nD }) : null,
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
        "data-connects-down": v,
        "data-conjure-turn-status": b ? "true" : void 0,
        style: null != x ? { "--custom-conjure-shimmer-tint": x } : void 0,
        children: [
            I
                ? (0, l.jsx)(d.D, {
                      tag: "div",
                      className: r()(p.ep, p.EK),
                      "aria-expanded": k,
                      "aria-controls": A,
                      "aria-label": m.intl.formatToPlainString(f.default.yByAPh, { activity: w }),
                      onClick: S,
                      children: P,
                  })
                : (0, l.jsx)("div", { className: p.ep, children: P }),
            (0, l.jsx)("div", { id: A, hidden: !k, "data-conjure-entrance": !0, className: p.BA, children: h }),
        ],
    });
}
