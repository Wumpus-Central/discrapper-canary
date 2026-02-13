i.d(t, { A: () => g, V: () => h });
var n,
    s = i(627968),
    l = i(64700),
    a = i(503698),
    r = i.n(a),
    o = i(827734),
    c = i(765671),
    d = i(371664),
    u = i(477412),
    h = (((n = {}).BLACK = "BLACK"), (n.GRAY = "GRAY"), n);
let m = { BLACK: u.Ql, GRAY: u.wm },
    p = { sm: 20, md: 28 };
function v(e) {
    return Math.round(e / d.K) * d.K;
}
function g(e) {
    let {
            notchBackground: t,
            progress: i,
            size: n = "md",
            gradientStart: a = o.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: h = o.A.unsafe_rawColors.GREEN_360.css,
            className: g,
            notchClassName: x,
            children: f,
        } = e,
        _ = p[n],
        { ref: A, width: T } = (0, c.Ay)(),
        y = l.useMemo(() => (null != T ? v(T) : 0), [T]),
        j = l.useMemo(() => {
            let e = Math.abs(v((y * (100 - Math.max(0, Math.min(100, i)))) / 100) - y);
            return { transform: `translateX(${e}px)` };
        }, [i, y]),
        C = l.useMemo(
            () => ({ width: `${y}px`, background: i <= 0 ? "none" : `linear-gradient(to right, ${a}, ${h})` }),
            [h, a, i, y],
        );
    return (0, s.jsxs)("div", {
        className: u.iE,
        ref: A,
        style: { height: _ },
        children: [
            (0, s.jsxs)("div", {
                className: r()(u.kL, g),
                style: C,
                children: [
                    (0, s.jsx)("div", { className: u.qB, style: j }),
                    0 !== y && (0, s.jsx)(d.A, { width: y, height: _, className: r()(u.DR, m[t], x) }),
                ],
            }),
            f,
        ],
    });
}
