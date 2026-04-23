"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    r = n(612185),
    a = n(495029),
    o = n(895790),
    c = n(620632),
    u = n(352478),
    d = n(34933);
function h(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: l } = (0, r.Q)(),
        h = l(n.components.hero_image?.fields.image, [c.o.MEDIA]);
    return (0, i.jsxs)("div", {
        className: s()(d.kL, { [d.PG]: t }),
        children: [
            (0, i.jsxs)("div", {
                className: d.Qs,
                children: [
                    (0, i.jsx)("div", { className: d.wx }),
                    (0, i.jsx)("div", { className: d.yF }),
                    (0, i.jsxs)("div", {
                        className: d.M1,
                        children: [
                            (0, i.jsx)("div", { className: d.dJ }),
                            (0, i.jsx)("div", { className: d.dJ }),
                            (0, i.jsx)("div", { className: d.dJ }),
                            (0, i.jsx)("div", { className: d.dJ }),
                            (0, i.jsx)("div", { className: d.dJ }),
                            (0, i.jsx)("div", { className: d.dJ }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: d.ZS,
                children:
                    null != h
                        ? (0, i.jsx)(o.A, { alt: "", media: h.media, className: s()(d.c8, u.g) })
                        : (0, i.jsx)(a.A, { className: d.pm }),
            }),
        ],
    });
}
