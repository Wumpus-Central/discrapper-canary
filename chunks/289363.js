"use strict";
n.r(t), n.d(t, { default: () => u });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(397927),
    s = n(769015),
    c = n(287809),
    o = n(486020),
    d = n(472701);
let u = a.memo(function (e) {
    let { application: t } = e,
        n = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        a = o.Ay.getUserAvatarURL(n);
    return (0, l.jsxs)("div", {
        className: d.Y,
        children: [
            (0, l.jsx)(s.A, { className: d.my, game: t, size: s.M.MEDIUM, "aria-label": t.name }),
            (0, l.jsxs)("div", {
                className: d.I5,
                children: [
                    (0, l.jsx)("div", { className: d.pw }),
                    (0, l.jsx)("div", { className: d.pw }),
                    (0, l.jsx)("div", { className: d.pw }),
                ],
            }),
            (0, l.jsx)(r.euF, { className: d.my, src: a, size: r._3J.SIZE_48, "aria-label": n.username }),
        ],
    });
});
