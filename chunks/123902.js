i.d(t, { A: () => x, V: () => v });
var n,
    s = i(627968),
    l = i(64700),
    a = i(503698),
    r = i.n(a),
    o = i(827734),
    c = i(319060),
    u = i(765671),
    d = i(371664),
    h = i(240248),
    m = i(477412);
let p = (0, h.xI)(c.A.GRADIENT_PROGRESS_NOTCH_WIDTH);
var v = (((n = {}).BLACK = "BLACK"), (n.GRAY = "GRAY"), n);
let g = { BLACK: m.Ql, GRAY: m.wm };
function f(e) {
    return Math.round(e / p) * p;
}
function x(e) {
    let {
            notchBackground: t,
            progress: i,
            gradientStart: n = o.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: a = o.A.unsafe_rawColors.GREEN_360.css,
            className: c,
            notchClassName: h,
            children: p,
        } = e,
        { ref: v, width: x } = (0, u.Ay)(),
        _ = l.useMemo(() => (null != x ? f(x) : 0), [x]),
        A = l.useMemo(() => {
            let e = Math.abs(f((_ * (100 - Math.max(0, Math.min(100, i)))) / 100) - _);
            return { transform: `translateX(${e}px)` };
        }, [i, _]),
        T = l.useMemo(
            () => ({ width: `${_}px`, background: i <= 0 ? "none" : `linear-gradient(to right, ${n}, ${a})` }),
            [a, n, i, _],
        );
    return (0, s.jsxs)("div", {
        className: m.iE,
        ref: v,
        children: [
            (0, s.jsxs)("div", {
                className: r()(m.kL, c),
                style: T,
                children: [
                    (0, s.jsx)("div", { className: m.qB, style: A }),
                    0 !== _ && (0, s.jsx)(d.A, { width: _, className: r()(m.DR, g[t], h) }),
                ],
            }),
            p,
        ],
    });
}
