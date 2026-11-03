n.d(t, { A: () => p });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(847374),
    u = n(320448),
    o = n(834730),
    c = n(939249),
    d = n(344587),
    f = n(809526),
    h = n(105292),
    m = n(59678);
function p(e) {
    let {
            glyph: t,
            line: n,
            live: a,
            settled: p,
            tint: g,
            detail: x,
            connected: y = !1,
            connectsDown: k = !1,
            anchor: b = !1,
        } = e,
        [v, j] = r.useState(!1),
        w = r.useRef(null);
    r.useLayoutEffect(() => {
        a && w.current?.style.setProperty("--custom-conjure-shine-delay", `${-(performance.now() % 2e3)}ms`);
    }, [a]);
    let _ = r.useId(),
        S = r.useCallback(() => j((e) => !e), []),
        { text: C, phase: A } = (0, d.Q)(n),
        P = v ? s.a : u._,
        M = null != x,
        I = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: m.hd, children: t }),
                (0, l.jsx)(o.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: i()(m.qo, { [m._q]: "exit" === A, [m.GD]: "enter" === A }),
                    children: C,
                }),
                M ? (0, l.jsx)(P, { size: "xs", color: "currentColor", className: m.nD }) : null,
            ],
        }),
        N = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: m.$m, children: I }),
                a
                    ? (0, l.jsx)("span", {
                          className: m.pw,
                          "aria-hidden": !0,
                          children: (0, l.jsx)("span", { className: i()(m.$m, m.Yj), children: I }),
                      })
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        ref: w,
        className: m.K1,
        "data-live": a,
        "data-settled": p,
        "data-connected": y,
        "data-connects-down": k,
        "data-conjure-turn-status": b ? "true" : void 0,
        style: null != g ? { "--custom-conjure-shimmer-tint": g } : void 0,
        children: [
            M
                ? (0, l.jsx)(c.D, {
                      tag: "div",
                      className: i()(m.ep, m.EK),
                      "aria-expanded": v,
                      "aria-controls": _,
                      "aria-label": h.intl.formatToPlainString(f.default.yByAPh, { activity: C }),
                      onClick: S,
                      children: N,
                  })
                : (0, l.jsx)("div", { className: m.ep, children: N }),
            (0, l.jsx)("div", { id: _, hidden: !v, "data-conjure-entrance": !0, className: m.BA, children: x }),
        ],
    });
}
