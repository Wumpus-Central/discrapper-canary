n.d(t, { A: () => g, l: () => x });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(847374),
    u = n(320448),
    o = n(834730),
    d = n(939249),
    c = n(856795),
    m = n(50617),
    f = n(375708),
    h = n(13699);
let x = a.createContext(0);
function g(e) {
    let {
            glyph: t,
            line: n,
            live: i,
            settled: g,
            tint: p,
            detail: k,
            connected: v = !1,
            connectsDown: b = !1,
            anchor: j = !1,
        } = e,
        [_, y] = a.useState(!1),
        S = a.useContext(x),
        w = a.useId(),
        N = a.useCallback(() => y((e) => !e), []),
        { text: M, phase: T } = (0, c.Q)(n),
        A = _ ? s.a : u._,
        C = null != k,
        I = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.hd, children: t }),
                (0, l.jsx)(o.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(h.qo, { [h._q]: "exit" === T, [h.GD]: "enter" === T }),
                    children: M,
                }),
                C ? (0, l.jsx)(A, { size: "xs", color: "currentColor", className: h.nD }) : null,
            ],
        }),
        P = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.$m, children: I }, `face-${S}`),
                i
                    ? (0, l.jsx)("span", { className: r()(h.$m, h.pw), "aria-hidden": !0, children: I }, `shine-${S}`)
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        className: h.K1,
        "data-live": i,
        "data-settled": g,
        "data-connected": v,
        "data-connects-down": b,
        "data-vibegrations-turn-status": j ? "true" : void 0,
        style: null != p ? { "--custom-vibegrations-shimmer-tint": p } : void 0,
        children: [
            C
                ? (0, l.jsx)(d.D, {
                      tag: "div",
                      className: r()(h.ep, h.EK),
                      "aria-expanded": _,
                      "aria-controls": w,
                      "aria-label": f.intl.formatToPlainString(m.default.s1wx5H, { activity: M }),
                      onClick: N,
                      children: P,
                  })
                : (0, l.jsx)("div", { className: h.ep, children: P }),
            (0, l.jsx)("div", { id: w, hidden: !_, className: h.BA, children: k }),
        ],
    });
}
