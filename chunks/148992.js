n.d(t, { A: () => p, l: () => x });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(847374),
    u = n(320448),
    d = n(834730),
    o = n(939249),
    c = n(88205),
    m = n(248675),
    f = n(375708),
    h = n(508769);
let x = a.createContext(0);
function p(e) {
    let {
            glyph: t,
            line: n,
            live: i,
            settled: p,
            tint: g,
            detail: k,
            connected: v = !1,
            connectsDown: j = !1,
            anchor: b = !1,
        } = e,
        [_, y] = a.useState(!1),
        S = a.useContext(x),
        N = a.useId(),
        A = a.useCallback(() => y((e) => !e), []),
        { text: T, phase: w } = (0, c.Q)(n),
        M = _ ? s.a : u._,
        C = null != k,
        I = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.hd, children: t }),
                (0, l.jsx)(d.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(h.qo, { [h._q]: "exit" === w, [h.GD]: "enter" === w }),
                    children: T,
                }),
                C ? (0, l.jsx)(M, { size: "xs", color: "currentColor", className: h.nD }) : null,
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
        "data-settled": p,
        "data-connected": v,
        "data-connects-down": j,
        "data-vibegrations-turn-status": b ? "true" : void 0,
        style: null != g ? { "--custom-vibegrations-shimmer-tint": g } : void 0,
        children: [
            C
                ? (0, l.jsx)(o.D, {
                      tag: "div",
                      className: r()(h.ep, h.EK),
                      "aria-expanded": _,
                      "aria-controls": N,
                      "aria-label": f.intl.formatToPlainString(m.default.s1wx5H, { activity: T }),
                      onClick: A,
                      children: P,
                  })
                : (0, l.jsx)("div", { className: h.ep, children: P }),
            (0, l.jsx)("div", { id: N, hidden: !_, className: h.BA, children: k }),
        ],
    });
}
