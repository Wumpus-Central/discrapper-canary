n.d(t, {
    A: () => b,
    V: () => g,
});
var r,
    i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    c = n(319060),
    u = n(765671),
    d = n(371664),
    p = n(240248),
    f = n(477412);
let m = (0, p.xI)(c.A.GRADIENT_PROGRESS_NOTCH_WIDTH);
var g = (((r = {}).BLACK = "BLACK"), (r.GRAY = "GRAY"), r);
let y = {
    BLACK: f.Ql,
    GRAY: f.wm,
};

function _(e) {
    return Math.round(e / m) * m;
}

function b(e) {
    let {
            notchBackground: t,
            progress: n,
            gradientStart: r = o.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: a = o.A.unsafe_rawColors.GREEN_360.css,
            className: c,
            notchClassName: p,
            children: m,
        } = e,
        { ref: g, width: b } = (0, u.Ay)(),
        A = l.useMemo(() => (null != b ? _(b) : 0), [b]),
        h = l.useMemo(() => {
            let e = Math.abs(_((A * (100 - Math.max(0, Math.min(100, n)))) / 100) - A);
            return {
                transform: "translateX(".concat(e, "px)"),
            };
        }, [n, A]),
        v = l.useMemo(
            () => ({
                width: "".concat(A, "px"),
                background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(r, ", ").concat(a, ")"),
            }),
            [a, r, n, A],
        );
    return (0, i.jsxs)("div", {
        className: f.iE,
        ref: g,
        children: [
            (0, i.jsxs)("div", {
                className: s()(f.kL, c),
                style: v,
                children: [
                    (0, i.jsx)("div", {
                        className: f.qB,
                        style: h,
                    }),
                    0 !== A &&
                        (0, i.jsx)(d.A, {
                            width: A,
                            className: s()(f.DR, y[t], p),
                        }),
                ],
            }),
            m,
        ],
    });
}
