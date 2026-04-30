"use strict";
n.d(t, { A: () => p });
var l = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(123292),
    r = n(612185),
    o = n(495029),
    c = n(895790),
    u = n(385945),
    d = n(272852),
    h = n(352478),
    m = n(267941);
function p() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n, onClick: i } = (0, r.Q)(),
        p = t(e.components.hero_image?.fields.image, [d.o.MEDIA]);
    return (0, l.jsxs)("div", {
        className: m.zr,
        children: [
            (0, l.jsxs)("div", {
                className: m.rf,
                children: [
                    n,
                    (0, l.jsxs)("div", {
                        className: m.Qs,
                        children: [
                            (0, l.jsx)(u.A, {
                                component: e.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, l.jsx)(a.Q, {
                                textVariant: "text-xs/normal",
                                variant: "secondary",
                                text: "View All Stats",
                                onClick: i,
                            }),
                        ],
                    }),
                ],
            }),
            null != p
                ? (0, l.jsx)("div", {
                      className: m.Xr,
                      children: (0, l.jsx)(c.A, { media: p.media, className: s()(m.c8, h.g) }),
                  })
                : (0, l.jsx)(o.A, { className: m.pm }),
        ],
    });
}
