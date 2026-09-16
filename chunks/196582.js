l.d(t, { A: () => p, l: () => x });
var n = l(477900),
    a = l(582128),
    s = l(503698),
    i = l.n(s),
    r = l(847374),
    u = l(320448),
    d = l(834730),
    o = l(939249),
    c = l(856795),
    m = l(50617),
    f = l(375708),
    h = l(13699);
let x = a.createContext(0);
function p(e) {
    let {
            glyph: t,
            line: l,
            live: s,
            settled: p,
            tint: g,
            detail: k,
            connected: v = !1,
            connectsDown: j = !1,
            anchor: b = !1,
        } = e,
        [_, y] = a.useState(!1),
        N = a.useContext(x),
        w = a.useId(),
        S = a.useCallback(() => y((e) => !e), []),
        { text: M, phase: C } = (0, c.Q)(l),
        A = _ ? r.a : u._,
        T = null != k,
        I = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("span", { className: h.hd, children: t }),
                (0, n.jsx)(d.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: i()(h.qo, { [h._q]: "exit" === C, [h.GD]: "enter" === C }),
                    children: M,
                }),
                T ? (0, n.jsx)(A, { size: "xs", color: "currentColor", className: h.nD }) : null,
            ],
        }),
        E = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("span", { className: h.$m, children: I }, `face-${N}`),
                s
                    ? (0, n.jsx)("span", { className: i()(h.$m, h.pw), "aria-hidden": !0, children: I }, `shine-${N}`)
                    : null,
            ],
        });
    return (0, n.jsxs)("li", {
        className: h.K1,
        "data-live": s,
        "data-settled": p,
        "data-connected": v,
        "data-connects-down": j,
        "data-vibegrations-turn-status": b ? "true" : void 0,
        style: null != g ? { "--custom-vibegrations-shimmer-tint": g } : void 0,
        children: [
            T
                ? (0, n.jsx)(o.D, {
                      tag: "div",
                      className: i()(h.ep, h.EK),
                      "aria-expanded": _,
                      "aria-controls": w,
                      "aria-label": f.intl.formatToPlainString(m.default.s1wx5H, { activity: M }),
                      onClick: S,
                      children: E,
                  })
                : (0, n.jsx)("div", { className: h.ep, children: E }),
            (0, n.jsx)("div", { id: w, hidden: !_, className: h.BA, children: k }),
        ],
    });
}
