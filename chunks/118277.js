"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(317097),
    o = n(397927),
    c = n(573435),
    d = n(143245);
let u = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f];
function h(e) {
    return (0, a.Hl)(
        u[
            (function (e) {
                let t = 5381,
                    n = 0;
                for (; n < e.length; ) t = (33 * t) ^ e.charCodeAt(n++);
                return t >>> 0;
            })(e) % u.length
        ],
    );
}
function A(e) {
    let { title: t, className: n, icon: l } = e,
        [a, u] = s.useState(h(t));
    return (
        s.useEffect(() => {
            u(h(t));
        }, [t]),
        (0, i.jsxs)("div", {
            className: r()(d.iE, n),
            children: [
                (0, i.jsx)(c.Ay, {
                    mask: c.Ay.Masks.STATUS_SCREENSHARE,
                    width: 32,
                    height: 32,
                    children:
                        null == l || 0 === l.length
                            ? (0, i.jsx)("div", {
                                  className: d.Kk,
                                  style: { backgroundColor: a },
                                  children: t[0] ?? "?",
                              })
                            : (0, i.jsx)("img", { alt: "", src: l, className: d.Kk }),
                }),
                (0, i.jsx)(o.npA, { size: "md", color: "currentColor", className: d.qS }),
            ],
        })
    );
}
