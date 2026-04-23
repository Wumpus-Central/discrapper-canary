n.d(t, { A: () => p, V: () => m });
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(827734),
    u = n(765671),
    c = n(371664),
    d = n(75753),
    m = (((i = {}).BLACK = "BLACK"), (i.GRAY = "GRAY"), i);
let h = { BLACK: d.Ql, GRAY: d.wm },
    A = { sm: 20, md: 28 };
function v(e) {
    return Math.round(e / c.K) * c.K;
}
function p(e) {
    let {
            notchBackground: t,
            progress: n,
            size: i = "md",
            gradientStart: r = o.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: m = o.A.unsafe_rawColors.GREEN_360.css,
            className: p,
            notchClassName: g,
            children: T,
        } = e,
        f = A[i],
        { ref: b, width: _ } = (0, u.Ay)(),
        y = s.useMemo(() => (null != _ ? v(_) : 0), [_]),
        x = s.useMemo(() => {
            let e = Math.abs(v((y * (100 - Math.max(0, Math.min(100, n)))) / 100) - y);
            return { transform: `translateX(${e}px)` };
        }, [n, y]),
        C = s.useMemo(
            () => ({ width: `${y}px`, background: n <= 0 ? "none" : `linear-gradient(to right, ${r}, ${m})` }),
            [m, r, n, y],
        );
    return (0, l.jsxs)("div", {
        className: d.iE,
        ref: b,
        style: { height: f },
        children: [
            (0, l.jsxs)("div", {
                className: a()(d.kL, p),
                style: C,
                children: [
                    (0, l.jsx)("div", { className: d.qB, style: x }),
                    0 !== y && (0, l.jsx)(c.A, { width: y, height: f, className: a()(d.DR, h[t], g) }),
                ],
            }),
            T,
        ],
    });
}
