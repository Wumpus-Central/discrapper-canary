"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(64700),
    s = n(91299),
    a = n(549719);
function o(e) {
    let { percentage: t, className: n, onClick: o } = e,
        l = (0, i.useRef)(null),
        u = (0, i.useCallback)(
            (e) => {
                if (null == l.current) return;
                let t = Math.min(Math.max(((e.clientX - l.current.left) / l.current.width) * 100, 0), 100);
                o?.(t);
            },
            [o],
        ),
        c = (0, i.useCallback)(() => {
            window.removeEventListener("mousemove", u);
        }, [u]),
        d = (e) => {
            (l.current = e.currentTarget.getBoundingClientRect()),
                u(e),
                window.addEventListener("mousemove", u),
                window.addEventListener("mouseup", c, { once: !0 });
        };
    return (
        (0, i.useEffect)(
            () => () => {
                window.removeEventListener("mousemove", u), window.removeEventListener("mouseup", c);
            },
            [u, c],
        ),
        (0, r.jsx)(s.A, { className: n, onMouseDown: d, children: (0, r.jsx)(a.A, { percentage: t }) })
    );
}
