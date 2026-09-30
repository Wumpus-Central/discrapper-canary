n.d(t, { A: () => p, l: () => x });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    s = n.n(i),
    r = n(847374),
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
            tint: k,
            detail: g,
            connected: v = !1,
            connectsDown: j = !1,
            anchor: b = !1,
        } = e,
        [_, S] = a.useState(!1),
        N = a.useContext(x),
        y = a.useId(),
        M = a.useCallback(() => S((e) => !e), []),
        { text: w, phase: T } = (0, c.Q)(n),
        C = _ ? r.a : o._,
        A = null != g,
        I = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.hd, children: t }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: s()(h.qo, { [h._q]: "exit" === T, [h.GD]: "enter" === T }),
                    children: w,
                }),
                A ? (0, l.jsx)(C, { size: "xs", color: "currentColor", className: h.nD }) : null,
            ],
        }),
        P = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.$m, children: I }, `face-${N}`),
                i
                    ? (0, l.jsx)("span", { className: s()(h.$m, h.pw), "aria-hidden": !0, children: I }, `shine-${N}`)
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
        style: null != k ? { "--custom-vibegrations-shimmer-tint": k } : void 0,
        children: [
            A
                ? (0, l.jsx)(d.D, {
                      tag: "div",
                      className: s()(h.ep, h.EK),
                      "aria-expanded": _,
                      "aria-controls": y,
                      "aria-label": f.intl.formatToPlainString(m.default.s1wx5H, { activity: w }),
                      onClick: M,
                      children: P,
                  })
                : (0, l.jsx)("div", { className: h.ep, children: P }),
            (0, l.jsx)("div", { id: y, hidden: !_, className: h.BA, children: g }),
        ],
    });
}
