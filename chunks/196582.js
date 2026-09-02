n.d(t, { A: () => x, l: () => g });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    s = n.n(i),
    r = n(847374),
    d = n(320448),
    u = n(834730),
    o = n(939249),
    c = n(856795),
    m = n(50617),
    h = n(375708),
    f = n(13699);
let g = a.createContext(0);
function x(e) {
    let {
            glyph: t,
            line: n,
            live: i,
            settled: x,
            tint: p,
            detail: k,
            connected: v = !1,
            connectsDown: j = !1,
            anchor: b = !1,
        } = e,
        [_, y] = a.useState(!1),
        w = a.useContext(g),
        N = a.useId(),
        S = a.useCallback(() => y((e) => !e), []),
        { text: C, phase: A } = (0, c.Q)(n),
        M = _ ? r.a : d._,
        T = null != k,
        D = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: f.hd, children: t }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: s()(f.qo, { [f._q]: "exit" === A, [f.GD]: "enter" === A }),
                    children: C,
                }),
                T ? (0, l.jsx)(M, { size: "xs", color: "currentColor", className: f.nD }) : null,
            ],
        }),
        I = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: f.$m, children: D }, `face-${w}`),
                i
                    ? (0, l.jsx)("span", { className: s()(f.$m, f.pw), "aria-hidden": !0, children: D }, `shine-${w}`)
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        className: f.K1,
        "data-live": i,
        "data-settled": x,
        "data-connected": v,
        "data-connects-down": j,
        "data-vibegrations-turn-status": b ? "true" : void 0,
        style: null != p ? { "--custom-vibegrations-shimmer-tint": p } : void 0,
        children: [
            T
                ? (0, l.jsx)(o.D, {
                      tag: "div",
                      className: s()(f.ep, f.EK),
                      "aria-expanded": _,
                      "aria-controls": N,
                      "aria-label": h.intl.formatToPlainString(m.default.s1wx5H, { activity: C }),
                      onClick: S,
                      children: I,
                  })
                : (0, l.jsx)("div", { className: f.ep, children: I }),
            (0, l.jsx)("div", { id: N, hidden: !_, className: f.BA, children: k }),
        ],
    });
}
