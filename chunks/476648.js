n.d(t, {
    A: () => u,
    f: () => c,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(877272),
    l = n(834450);
let c = 400;
function u(e) {
    let { className: t, textClassName: n, text: a, variant: u, delay: d } = e,
        f = (0, i.useRef)(0),
        p = (0, i.useRef)(0),
        [_, h] = (0, i.useState)("");
    return (
        (0, i.useEffect)(() => {
            let e = () => {
                let t = Date.now() - f.current,
                    n = Math.max(Math.min(t / c, 1), 0);
                h(a.substring(0, Math.floor(n * a.length))), t < c && (p.current = window.requestAnimationFrame(e));
            };
            return (
                (f.current = Date.now() + (null != d ? d : 0)),
                (p.current = window.requestAnimationFrame(e)),
                () => cancelAnimationFrame(p.current)
            );
        }, [d, a]),
        (0, r.jsxs)("div", {
            className: s()(t, l.kL),
            children: [
                (0, r.jsx)(o.A, {
                    "aria-hidden": !0,
                    className: s()(l.CZ, n),
                    variant: u,
                    children: a,
                }),
                (0, r.jsx)(o.A, {
                    className: s()(l.Hi, n),
                    variant: u,
                    children: _,
                }),
            ],
        })
    );
}
