n.d(t, { A: () => g });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(847374),
    u = n(320448),
    o = n(834730),
    d = n(939249),
    c = n(344587),
    m = n(248675),
    f = n(660183),
    h = n(59678);
function g(e) {
    let {
            glyph: t,
            line: n,
            live: r,
            settled: g,
            tint: p,
            detail: x,
            connected: k = !1,
            connectsDown: j = !1,
            anchor: v = !1,
        } = e,
        [b, _] = a.useState(!1),
        y = a.useRef(null);
    a.useLayoutEffect(() => {
        r && y.current?.style.setProperty("--custom-conjure-shine-delay", `${-(performance.now() % 2e3)}ms`);
    }, [r]);
    let N = a.useId(),
        S = a.useCallback(() => _((e) => !e), []),
        { text: A, phase: w } = (0, c.Q)(n),
        T = b ? s.a : u._,
        I = null != x,
        M = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.hd, children: t }),
                (0, l.jsx)(o.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: i()(h.qo, { [h._q]: "exit" === w, [h.GD]: "enter" === w }),
                    children: A,
                }),
                I ? (0, l.jsx)(T, { size: "xs", color: "currentColor", className: h.nD }) : null,
            ],
        }),
        C = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.$m, children: M }),
                r
                    ? (0, l.jsx)("span", {
                          className: h.pw,
                          "aria-hidden": !0,
                          children: (0, l.jsx)("span", { className: i()(h.$m, h.Yj), children: M }),
                      })
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        ref: y,
        className: h.K1,
        "data-live": r,
        "data-settled": g,
        "data-connected": k,
        "data-connects-down": j,
        "data-conjure-turn-status": v ? "true" : void 0,
        style: null != p ? { "--custom-conjure-shimmer-tint": p } : void 0,
        children: [
            I
                ? (0, l.jsx)(d.D, {
                      tag: "div",
                      className: i()(h.ep, h.EK),
                      "aria-expanded": b,
                      "aria-controls": N,
                      "aria-label": f.intl.formatToPlainString(m.default.yByAPh, { activity: A }),
                      onClick: S,
                      children: C,
                  })
                : (0, l.jsx)("div", { className: h.ep, children: C }),
            (0, l.jsx)("div", { id: N, hidden: !b, "data-conjure-entrance": !0, className: h.BA, children: x }),
        ],
    });
}
