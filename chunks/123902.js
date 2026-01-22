n.d(t, {
    A: () => g,
    V: () => _,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(319060),
    c = n(765671),
    u = n(371664),
    d = n(240248),
    f = n(477412);
let p = (0, d.xI)(l.A.GRADIENT_PROGRESS_NOTCH_WIDTH);
var _ = (function (e) {
    return (e.BLACK = "BLACK"), (e.GRAY = "GRAY"), e;
})({});
let h = {
    BLACK: f.Ql,
    GRAY: f.wm,
};
function m(e) {
    return Math.round(e / p) * p;
}
function g(e) {
    let {
            notchBackground: t,
            progress: n,
            gradientStart: a = o.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: l = o.A.unsafe_rawColors.GREEN_360.css,
            className: d,
            notchClassName: p,
            children: _,
        } = e,
        { ref: g, width: E } = (0, c.Ay)(),
        b = i.useMemo(() => (null != E ? m(E) : 0), [E]),
        y = i.useMemo(() => {
            let e = Math.abs(m((b * (100 - Math.max(0, Math.min(100, n)))) / 100) - b);
            return { transform: "translateX(".concat(e, "px)") };
        }, [n, b]),
        O = i.useMemo(
            () => ({
                width: "".concat(b, "px"),
                background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(a, ", ").concat(l, ")"),
            }),
            [l, a, n, b],
        );
    return (0, r.jsxs)("div", {
        className: f.iE,
        ref: g,
        children: [
            (0, r.jsxs)("div", {
                className: s()(f.kL, d),
                style: O,
                children: [
                    (0, r.jsx)("div", {
                        className: f.qB,
                        style: y,
                    }),
                    0 !== b &&
                        (0, r.jsx)(u.A, {
                            width: b,
                            className: s()(f.DR, h[t], p),
                        }),
                ],
            }),
            _,
        ],
    });
}
