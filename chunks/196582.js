n.d(t, { A: () => p, l: () => x });
var l = n(477900),
    a = n(582128),
    s = n(503698),
    i = n.n(s),
    r = n(847374),
    u = n(320448),
    d = n(834730),
    o = n(939249),
    c = n(856795),
    m = n(50617),
    h = n(375708),
    f = n(13699);
let x = a.createContext(0);
function p(e) {
    let {
            glyph: t,
            line: n,
            live: s,
            settled: p,
            tint: g,
            detail: k,
            connected: v = !1,
            connectsDown: b = !1,
            anchor: j = !1,
        } = e,
        [_, y] = a.useState(!1),
        w = a.useContext(x),
        N = a.useId(),
        S = a.useCallback(() => y((e) => !e), []),
        { text: M, phase: A } = (0, c.Q)(n),
        C = _ ? r.a : u._,
        T = null != k,
        I = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: f.hd, children: t }),
                (0, l.jsx)(d.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: i()(f.qo, { [f._q]: "exit" === A, [f.GD]: "enter" === A }),
                    children: M,
                }),
                T ? (0, l.jsx)(C, { size: "xs", color: "currentColor", className: f.nD }) : null,
            ],
        }),
        E = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: f.$m, children: I }, `face-${w}`),
                s
                    ? (0, l.jsx)("span", { className: i()(f.$m, f.pw), "aria-hidden": !0, children: I }, `shine-${w}`)
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        className: f.K1,
        "data-live": s,
        "data-settled": p,
        "data-connected": v,
        "data-connects-down": b,
        "data-vibegrations-turn-status": j ? "true" : void 0,
        style: null != g ? { "--custom-vibegrations-shimmer-tint": g } : void 0,
        children: [
            T
                ? (0, l.jsx)(o.D, {
                      tag: "div",
                      className: i()(f.ep, f.EK),
                      "aria-expanded": _,
                      "aria-controls": N,
                      "aria-label": h.intl.formatToPlainString(m.default.s1wx5H, { activity: M }),
                      onClick: S,
                      children: E,
                  })
                : (0, l.jsx)("div", { className: f.ep, children: E }),
            (0, l.jsx)("div", { id: N, hidden: !_, className: f.BA, children: k }),
        ],
    });
}
