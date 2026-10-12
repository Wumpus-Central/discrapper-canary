n.d(t, { A: () => g });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(847374),
    o = n(320448),
    d = n(834730),
    u = n(939249),
    c = n(344587),
    f = n(248675),
    m = n(660183),
    h = n(59678);
function g(e) {
    let {
            glyph: t,
            line: n,
            live: i,
            settled: g,
            tint: p,
            detail: x,
            connected: k = !1,
            connectsDown: b = !1,
            anchor: v = !1,
        } = e,
        [j, y] = a.useState(!1),
        w = a.useRef(null);
    a.useLayoutEffect(() => {
        i && w.current?.style.setProperty("--custom-conjure-shine-delay", `${-(performance.now() % 2e3)}ms`);
    }, [i]);
    let _ = a.useId(),
        S = a.useCallback(() => y((e) => !e), []),
        { text: N, phase: A } = (0, c.Q)(n),
        I = j ? s.a : o._,
        M = null != x,
        T = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.hd, children: t }),
                (0, l.jsx)(d.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(h.qo, { [h._q]: "exit" === A, [h.GD]: "enter" === A }),
                    children: N,
                }),
                M ? (0, l.jsx)(I, { size: "xs", color: "currentColor", className: h.nD }) : null,
            ],
        }),
        E = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.$m, children: T }),
                i
                    ? (0, l.jsx)("span", {
                          className: h.pw,
                          "aria-hidden": !0,
                          children: (0, l.jsx)("span", { className: r()(h.$m, h.Yj), children: T }),
                      })
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        ref: w,
        className: h.K1,
        "data-live": i,
        "data-settled": g,
        "data-connected": k,
        "data-connects-down": b,
        "data-conjure-turn-status": v ? "true" : void 0,
        style: null != p ? { "--custom-conjure-shimmer-tint": p } : void 0,
        children: [
            M
                ? (0, l.jsx)(u.D, {
                      tag: "div",
                      className: r()(h.ep, h.EK),
                      "aria-expanded": j,
                      "aria-controls": _,
                      "aria-label": m.intl.formatToPlainString(f.default.yByAPh, { activity: N }),
                      onClick: S,
                      children: E,
                  })
                : (0, l.jsx)("div", { className: h.ep, children: E }),
            (0, l.jsx)("div", { id: _, hidden: !j, "data-conjure-entrance": !0, className: h.BA, children: x }),
        ],
    });
}
