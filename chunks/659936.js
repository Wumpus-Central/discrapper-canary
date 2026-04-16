"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(612185),
    o = n(495029),
    l = n(895790),
    u = n(620632),
    c = n(352478),
    d = n(34933);
function _(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: i } = (0, a.Q)(),
        _ = i(n.components.hero_image?.fields.image, [u.o.MEDIA]);
    return (0, r.jsxs)("div", {
        className: s()(d.kL, { [d.PG]: t }),
        children: [
            (0, r.jsxs)("div", {
                className: d.Qs,
                children: [
                    (0, r.jsx)("div", { className: d.wx }),
                    (0, r.jsx)("div", { className: d.yF }),
                    (0, r.jsxs)("div", {
                        className: d.M1,
                        children: [
                            (0, r.jsx)("div", { className: d.dJ }),
                            (0, r.jsx)("div", { className: d.dJ }),
                            (0, r.jsx)("div", { className: d.dJ }),
                            (0, r.jsx)("div", { className: d.dJ }),
                            (0, r.jsx)("div", { className: d.dJ }),
                            (0, r.jsx)("div", { className: d.dJ }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.ZS,
                children:
                    null != _
                        ? (0, r.jsx)(l.A, { alt: "", media: _.media, className: s()(d.c8, c.g) })
                        : (0, r.jsx)(o.A, { className: d.pm }),
            }),
        ],
    });
}
