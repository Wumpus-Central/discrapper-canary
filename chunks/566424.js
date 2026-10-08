n.d(t, { A: () => x, E: () => g });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(847374),
    u = n(320448),
    o = n(834730),
    d = n(939249),
    c = n(344587),
    m = n(261425),
    f = n(660183),
    h = n(59678);
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
        S = a.useContext(g),
        N = a.useId(),
        A = a.useCallback(() => y((e) => !e), []),
        { text: T, phase: w } = (0, c.Q)(n),
        I = _ ? s.a : u._,
        C = null != k,
        M = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.hd, children: t }),
                (0, l.jsx)(o.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(h.qo, { [h._q]: "exit" === w, [h.GD]: "enter" === w }),
                    children: T,
                }),
                C ? (0, l.jsx)(I, { size: "xs", color: "currentColor", className: h.nD }) : null,
            ],
        }),
        P = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.$m, children: M }, `face-${S}`),
                i
                    ? (0, l.jsx)("span", { className: r()(h.$m, h.pw), "aria-hidden": !0, children: M }, `shine-${S}`)
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        className: h.K1,
        "data-live": i,
        "data-settled": x,
        "data-connected": v,
        "data-connects-down": j,
        "data-conjure-turn-status": b ? "true" : void 0,
        style: null != p ? { "--custom-conjure-shimmer-tint": p } : void 0,
        children: [
            C
                ? (0, l.jsx)(d.D, {
                      tag: "div",
                      className: r()(h.ep, h.EK),
                      "aria-expanded": _,
                      "aria-controls": N,
                      "aria-label": f.intl.formatToPlainString(m.default.yByAPh, { activity: T }),
                      onClick: A,
                      children: P,
                  })
                : (0, l.jsx)("div", { className: h.ep, children: P }),
            (0, l.jsx)("div", { id: N, hidden: !_, className: h.BA, children: k }),
        ],
    });
}
