n.d(t, { A: () => _, V: () => h });
var i,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(827734),
    c = n(765671),
    d = n(371664),
    u = n(75753),
    h = (((i = {}).BLACK = "BLACK"), (i.GRAY = "GRAY"), i);
let m = { BLACK: u.Ql, GRAY: u.wm },
    A = { sm: 20, md: 28 };
function g(e) {
    return Math.round(e / d.K) * d.K;
}
function _(e) {
    let {
            notchBackground: t,
            progress: n,
            size: i = "md",
            gradientStart: s = o.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: h = o.A.unsafe_rawColors.GREEN_360.css,
            className: _,
            notchClassName: p,
            children: f,
        } = e,
        E = A[i],
        { ref: C, width: x } = (0, c.Ay)(),
        S = a.useMemo(() => (null != x ? g(x) : 0), [x]),
        I = a.useMemo(() => {
            let e = Math.abs(g((S * (100 - Math.max(0, Math.min(100, n)))) / 100) - S);
            return { transform: `translateX(${e}px)` };
        }, [n, S]),
        T = a.useMemo(
            () => ({ width: `${S}px`, background: n <= 0 ? "none" : `linear-gradient(to right, ${s}, ${h})` }),
            [h, s, n, S],
        );
    return (0, l.jsxs)("div", {
        className: u.iE,
        ref: C,
        style: { height: E },
        children: [
            (0, l.jsxs)("div", {
                className: r()(u.kL, _),
                style: T,
                children: [
                    (0, l.jsx)("div", { className: u.qB, style: I }),
                    0 !== S && (0, l.jsx)(d.A, { width: S, height: E, className: r()(u.DR, m[t], p) }),
                ],
            }),
            f,
        ],
    });
}
