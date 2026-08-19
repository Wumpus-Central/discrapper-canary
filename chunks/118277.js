"use strict";
n.d(t, { A: () => E });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(317097),
    o = n(428689),
    d = n(573435),
    c = n(35455);
let u = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f];
function _(e) {
    return (0, l.Hl)(
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
function E(e) {
    let { title: t, className: n, icon: a } = e,
        [l, u] = r.useState(_(t));
    return (
        r.useEffect(() => {
            u(_(t));
        }, [t]),
        (0, i.jsxs)("div", {
            className: s()(c.iE, n),
            children: [
                (0, i.jsx)(d.Ay, {
                    mask: d.Ay.Masks.STATUS_SCREENSHARE,
                    width: 32,
                    height: 32,
                    children:
                        null == a || 0 === a.length
                            ? (0, i.jsx)("div", {
                                  className: c.Kk,
                                  style: { backgroundColor: l },
                                  children: t[0] ?? "?",
                              })
                            : (0, i.jsx)("img", { alt: "", src: a, className: c.Kk }),
                }),
                (0, i.jsx)(o.VideoIcon, { size: "md", color: "currentColor", className: c.qS }),
            ],
        })
    );
}
