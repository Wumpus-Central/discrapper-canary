n.d(t, { A: () => x, l: () => f });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    s = n.n(i),
    r = n(847374),
    d = n(320448),
    u = n(834730),
    o = n(939249),
    c = n(856795),
    m = n(759967),
    g = n(375708),
    h = n(13699);
let f = a.createContext(0);
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
        S = a.useContext(f),
        w = a.useId(),
        N = a.useCallback(() => y((e) => !e), []),
        { text: C, phase: M } = (0, c.Q)(n),
        A = _ ? r.a : d._,
        T = null != k,
        D = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.hd, children: t }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: s()(h.qo, { [h._q]: "exit" === M, [h.GD]: "enter" === M }),
                    children: C,
                }),
                T ? (0, l.jsx)(A, { size: "xs", color: "currentColor", className: h.nD }) : null,
            ],
        }),
        I = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.$m, children: D }, `face-${S}`),
                i
                    ? (0, l.jsx)("span", { className: s()(h.$m, h.pw), "aria-hidden": !0, children: D }, `shine-${S}`)
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        className: h.K1,
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
                      className: s()(h.ep, h.EK),
                      "aria-expanded": _,
                      "aria-controls": w,
                      "aria-label": g.intl.formatToPlainString(m.default.s1wx5H, { activity: C }),
                      onClick: N,
                      children: I,
                  })
                : (0, l.jsx)("div", { className: h.ep, children: I }),
            (0, l.jsx)("div", { id: w, hidden: !_, className: h.BA, children: k }),
        ],
    });
}
