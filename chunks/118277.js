n.d(t, { A: () => u });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(317097),
    o = n(428689),
    d = n(573435),
    c = n(840432);
let _ = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f];
function E(e) {
    return (0, l.Hl)(
        _[
            (function (e) {
                let t = 5381,
                    n = 0;
                for (; n < e.length; ) t = (33 * t) ^ e.charCodeAt(n++);
                return t >>> 0;
            })(e) % _.length
        ],
    );
}
function u(e) {
    let { title: t, className: n, icon: r } = e,
        [l, _] = a.useState(E(t));
    return (
        a.useEffect(() => {
            _(E(t));
        }, [t]),
        (0, i.jsxs)("div", {
            className: s()(c.iE, n),
            children: [
                (0, i.jsx)(d.Ay, {
                    mask: d.Ay.Masks.STATUS_SCREENSHARE,
                    width: 32,
                    height: 32,
                    children:
                        null == r || 0 === r.length
                            ? (0, i.jsx)("div", {
                                  className: c.Kk,
                                  style: { backgroundColor: l },
                                  children: t[0] ?? "?",
                              })
                            : (0, i.jsx)("img", { alt: "", src: r, className: c.Kk }),
                }),
                (0, i.jsx)(o.n, { size: "md", color: "currentColor", className: c.qS }),
            ],
        })
    );
}
