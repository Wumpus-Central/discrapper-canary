n.d(t, { A: () => p, l: () => x });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(847374),
    o = n(320448),
    u = n(834730),
    d = n(939249),
    c = n(856795),
    m = n(759967),
    f = n(375708),
    h = n(13699);
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
            connectsDown: b = !1,
            anchor: j = !1,
        } = e,
        [_, S] = a.useState(!1),
        y = a.useContext(x),
        N = a.useId(),
        M = a.useCallback(() => S((e) => !e), []),
        { text: w, phase: T } = (0, c.Q)(n),
        C = _ ? s.a : o._,
        A = null != k,
        I = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.hd, children: t }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(h.qo, { [h._q]: "exit" === T, [h.GD]: "enter" === T }),
                    children: w,
                }),
                A ? (0, l.jsx)(C, { size: "xs", color: "currentColor", className: h.nD }) : null,
            ],
        }),
        P = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.$m, children: I }, `face-${y}`),
                i
                    ? (0, l.jsx)("span", { className: r()(h.$m, h.pw), "aria-hidden": !0, children: I }, `shine-${y}`)
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        className: h.K1,
        "data-live": i,
        "data-settled": p,
        "data-connected": v,
        "data-connects-down": b,
        "data-vibegrations-turn-status": j ? "true" : void 0,
        style: null != g ? { "--custom-vibegrations-shimmer-tint": g } : void 0,
        children: [
            A
                ? (0, l.jsx)(d.D, {
                      tag: "div",
                      className: r()(h.ep, h.EK),
                      "aria-expanded": _,
                      "aria-controls": N,
                      "aria-label": f.intl.formatToPlainString(m.default.s1wx5H, { activity: w }),
                      onClick: M,
                      children: P,
                  })
                : (0, l.jsx)("div", { className: h.ep, children: P }),
            (0, l.jsx)("div", { id: N, hidden: !_, className: h.BA, children: k }),
        ],
    });
}
