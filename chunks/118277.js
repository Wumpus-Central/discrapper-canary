"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(317097),
    l = n(428689),
    u = n(573435),
    c = n(840432);
let d = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f];
function _(e) {
    return (0, o.Hl)(
        d[
            (function (e) {
                let t = 5381,
                    n = 0;
                for (; n < e.length; ) t = (33 * t) ^ e.charCodeAt(n++);
                return t >>> 0;
            })(e) % d.length
        ],
    );
}
function f(e) {
    let { title: t, className: n, icon: s } = e,
        [o, d] = r.useState(_(t));
    return (
        r.useEffect(() => {
            d(_(t));
        }, [t]),
        (0, i.jsxs)("div", {
            className: a()(c.iE, n),
            children: [
                (0, i.jsx)(u.Ay, {
                    mask: u.Ay.Masks.STATUS_SCREENSHARE,
                    width: 32,
                    height: 32,
                    children:
                        null == s || 0 === s.length
                            ? (0, i.jsx)("div", {
                                  className: c.Kk,
                                  style: { backgroundColor: o },
                                  children: t[0] ?? "?",
                              })
                            : (0, i.jsx)("img", { alt: "", src: s, className: c.Kk }),
                }),
                (0, i.jsx)(l.n, { size: "md", color: "currentColor", className: c.qS }),
            ],
        })
    );
}
