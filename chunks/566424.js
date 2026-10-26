n.d(t, { A: () => x });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(847374),
    u = n(320448),
    d = n(834730),
    o = n(939249),
    c = n(344587),
    m = n(248675),
    f = n(105292),
    h = n(59678);
function x(e) {
    let {
            glyph: t,
            line: n,
            live: r,
            settled: x,
            tint: g,
            detail: p,
            connected: j = !1,
            connectsDown: k = !1,
            anchor: v = !1,
        } = e,
        [_, b] = a.useState(!1),
        y = a.useRef(null);
    a.useLayoutEffect(() => {
        r && y.current?.style.setProperty("--custom-conjure-shine-delay", `${-(performance.now() % 2e3)}ms`);
    }, [r]);
    let A = a.useId(),
        N = a.useCallback(() => b((e) => !e), []),
        { text: w, phase: S } = (0, c.Q)(n),
        E = _ ? s.a : u._,
        C = null != p,
        I = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.hd, children: t }),
                (0, l.jsx)(d.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: i()(h.qo, { [h._q]: "exit" === S, [h.GD]: "enter" === S }),
                    children: w,
                }),
                C ? (0, l.jsx)(E, { size: "xs", color: "currentColor", className: h.nD }) : null,
            ],
        }),
        M = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { className: h.$m, children: I }),
                r
                    ? (0, l.jsx)("span", {
                          className: h.pw,
                          "aria-hidden": !0,
                          children: (0, l.jsx)("span", { className: i()(h.$m, h.Yj), children: I }),
                      })
                    : null,
            ],
        });
    return (0, l.jsxs)("li", {
        ref: y,
        className: h.K1,
        "data-live": r,
        "data-settled": x,
        "data-connected": j,
        "data-connects-down": k,
        "data-conjure-turn-status": v ? "true" : void 0,
        style: null != g ? { "--custom-conjure-shimmer-tint": g } : void 0,
        children: [
            C
                ? (0, l.jsx)(o.D, {
                      tag: "div",
                      className: i()(h.ep, h.EK),
                      "aria-expanded": _,
                      "aria-controls": A,
                      "aria-label": f.intl.formatToPlainString(m.default.yByAPh, { activity: w }),
                      onClick: N,
                      children: M,
                  })
                : (0, l.jsx)("div", { className: h.ep, children: M }),
            (0, l.jsx)("div", { id: A, hidden: !_, "data-conjure-entrance": !0, className: h.BA, children: p }),
        ],
    });
}
