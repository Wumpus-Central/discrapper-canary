n.d(t, { A: () => x });
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
function x(e) {
    let {
            glyph: t,
            line: n,
            live: r,
            settled: x,
            tint: g,
            detail: h,
            connected: j = !1,
            connectsDown: v = !1,
            anchor: b = !1,
        } = e,
        [k, y] = a.useState(!1),
        _ = a.useRef(null);
    a.useLayoutEffect(() => {
        r && _.current?.style.setProperty("--custom-conjure-shine-delay", `${-(performance.now() % 2e3)}ms`);
    }, [r]);
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
                    className: i()(p.qo, { [p._q]: "exit" === N, [p.GD]: "enter" === N }),
                    children: w,
                }),
                I ? (0, l.jsx)(C, { size: "xs", color: "currentColor", className: p.nD }) : null,
            ],
        }),
        P = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: p.$m, children: E }),
                r
                    ? (0, l.jsx)("span", {
                          className: p.pw,
                          "aria-hidden": !0,
                          children: (0, l.jsx)("span", { className: i()(p.$m, p.Yj), children: E }),
                      })
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        ref: _,
        className: p.K1,
        "data-live": r,
        "data-settled": x,
        "data-connected": j,
        "data-connects-down": v,
        "data-conjure-turn-status": b ? "true" : void 0,
        style: null != g ? { "--custom-conjure-shimmer-tint": g } : void 0,
        children: [
            I
                ? (0, l.jsx)(d.D, {
                      tag: "div",
                      className: i()(p.ep, p.EK),
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
