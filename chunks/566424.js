n.d(t, { A: () => x });
var l = n(477900),
    a = n(582128),
    s = n(503698),
    r = n.n(s),
    i = n(847374),
    u = n(320448),
    d = n(834730),
    o = n(939249),
    c = n(344587),
    m = n(809526),
    f = n(105292),
    h = n(59678);
function x(e) {
    let {
            glyph: t,
            line: n,
            live: s,
            settled: x,
            tint: p,
            detail: k,
            connected: g = !1,
            connectsDown: _ = !1,
            anchor: j = !1,
        } = e,
        [v, b] = a.useState(!1),
        y = a.useRef(null);
    a.useLayoutEffect(() => {
        s && y.current?.style.setProperty("--custom-conjure-shine-delay", `${-(performance.now() % 2e3)}ms`);
    }, [s]);
    let w = a.useId(),
        N = a.useCallback(() => b((e) => !e), []),
        { text: S, phase: A } = (0, c.Q)(n),
        C = v ? i.a : u._,
        E = null != k,
        I = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.hd, children: t }),
                (0, l.jsx)(d.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(h.qo, { [h._q]: "exit" === A, [h.GD]: "enter" === A }),
                    children: S,
                }),
                E ? (0, l.jsx)(C, { size: "xs", color: "currentColor", className: h.nD }) : null,
            ],
        }),
        T = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.$m, children: I }),
                s
                    ? (0, l.jsx)("span", {
                          className: h.pw,
                          "aria-hidden": !0,
                          children: (0, l.jsx)("span", { className: r()(h.$m, h.Yj), children: I }),
                      })
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        ref: y,
        className: h.K1,
        "data-live": s,
        "data-settled": x,
        "data-connected": g,
        "data-connects-down": _,
        "data-conjure-turn-status": j ? "true" : void 0,
        style: null != p ? { "--custom-conjure-shimmer-tint": p } : void 0,
        children: [
            E
                ? (0, l.jsx)(o.D, {
                      tag: "div",
                      className: r()(h.ep, h.EK),
                      "aria-expanded": v,
                      "aria-controls": w,
                      "aria-label": f.intl.formatToPlainString(m.default.yByAPh, { activity: S }),
                      onClick: N,
                      children: T,
                  })
                : (0, l.jsx)("div", { className: h.ep, children: T }),
            (0, l.jsx)("div", { id: w, hidden: !v, "data-conjure-entrance": !0, className: h.BA, children: k }),
        ],
    });
}
