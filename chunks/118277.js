n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(317097),
    o = n(428689),
    d = n(573435),
    c = n(840432);
let u = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f];
function h(e) {
    return (0, r.Hl)(
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
    let { title: t, className: n, icon: s } = e,
        [r, u] = l.useState(h(t));
    return (
        l.useEffect(() => {
            u(h(t));
        }, [t]),
        (0, i.jsxs)("div", {
            className: a()(c.iE, n),
            children: [
                (0, i.jsx)(d.Ay, {
                    mask: d.Ay.Masks.STATUS_SCREENSHARE,
                    width: 32,
                    height: 32,
                    children:
                        null == s || 0 === s.length
                            ? (0, i.jsx)("div", {
                                  className: c.Kk,
                                  style: { backgroundColor: r },
                                  children: t[0] ?? "?",
                              })
                            : (0, i.jsx)("img", { alt: "", src: s, className: c.Kk }),
                }),
                (0, i.jsx)(o.n, { size: "md", color: "currentColor", className: c.qS }),
            ],
        })
    );
}
