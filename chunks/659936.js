"use strict";
n.d(t, { A: () => h });
var l = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(612185),
    r = n(495029),
    o = n(895790),
    c = n(272852),
    u = n(352478),
    d = n(34933);
function h(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: i } = (0, a.Q)(),
        h = i(n.components.hero_image?.fields.image, [c.o.MEDIA]);
    return (0, l.jsxs)("div", {
        className: s()(d.kL, { [d.PG]: t }),
        children: [
            (0, l.jsxs)("div", {
                className: d.Qs,
                children: [
                    (0, l.jsx)("div", { className: d.wx }),
                    (0, l.jsx)("div", { className: d.yF }),
                    (0, l.jsxs)("div", {
                        className: d.M1,
                        children: [
                            (0, l.jsx)("div", { className: d.dJ }),
                            (0, l.jsx)("div", { className: d.dJ }),
                            (0, l.jsx)("div", { className: d.dJ }),
                            (0, l.jsx)("div", { className: d.dJ }),
                            (0, l.jsx)("div", { className: d.dJ }),
                            (0, l.jsx)("div", { className: d.dJ }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: d.ZS,
                children:
                    null != h
                        ? (0, l.jsx)(o.A, { alt: "", media: h.media, className: s()(d.c8, u.g) })
                        : (0, l.jsx)(r.A, { className: d.pm }),
            }),
        ],
    });
}
