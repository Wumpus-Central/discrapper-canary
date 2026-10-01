n.d(t, { A: () => k, l: () => x });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    s = n.n(i),
    r = n(847374),
    o = n(320448),
    u = n(834730),
    d = n(939249),
    c = n(856795),
    m = n(50617),
    f = n(375708),
    h = n(13699);
let x = a.createContext(0);
function k(e) {
    let {
            glyph: t,
            line: n,
            live: i,
            settled: k,
            tint: p,
            detail: g,
            connected: v = !1,
            connectsDown: j = !1,
            anchor: b = !1,
        } = e,
        [_, S] = a.useState(!1),
        y = a.useContext(x),
        N = a.useId(),
        T = a.useCallback(() => S((e) => !e), []),
        { text: M, phase: C } = (0, c.Q)(n),
        w = _ ? r.a : o._,
        A = null != g,
        I = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.hd, children: t }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: s()(h.qo, { [h._q]: "exit" === C, [h.GD]: "enter" === C }),
                    children: M,
                }),
                A ? (0, l.jsx)(w, { size: "xs", color: "currentColor", className: h.nD }) : null,
            ],
        }),
        P = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.$m, children: I }, `face-${y}`),
                i
                    ? (0, l.jsx)("span", { className: s()(h.$m, h.pw), "aria-hidden": !0, children: I }, `shine-${y}`)
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        className: h.K1,
        "data-live": i,
        "data-settled": k,
        "data-connected": v,
        "data-connects-down": j,
        "data-vibegrations-turn-status": b ? "true" : void 0,
        style: null != p ? { "--custom-vibegrations-shimmer-tint": p } : void 0,
        children: [
            A
                ? (0, l.jsx)(d.D, {
                      tag: "div",
                      className: s()(h.ep, h.EK),
                      "aria-expanded": _,
                      "aria-controls": N,
                      "aria-label": f.intl.formatToPlainString(m.default.s1wx5H, { activity: M }),
                      onClick: T,
                      children: P,
                  })
                : (0, l.jsx)("div", { className: h.ep, children: P }),
            (0, l.jsx)("div", { id: N, hidden: !_, className: h.BA, children: g }),
        ],
    });
}
