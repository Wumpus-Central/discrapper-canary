"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    r = n(123292),
    a = n(612185),
    o = n(495029),
    c = n(895790),
    u = n(385945),
    d = n(620632),
    h = n(352478),
    m = n(267941);
function p() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n, onClick: l } = (0, a.Q)(),
        p = t(e.components.hero_image?.fields.image, [d.o.MEDIA]);
    return (0, i.jsxs)("div", {
        className: m.zr,
        children: [
            (0, i.jsxs)("div", {
                className: m.rf,
                children: [
                    n,
                    (0, i.jsxs)("div", {
                        className: m.Qs,
                        children: [
                            (0, i.jsx)(u.A, {
                                component: e.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, i.jsx)(r.Q, {
                                textVariant: "text-xs/normal",
                                variant: "secondary",
                                text: "View All Stats",
                                onClick: l,
                            }),
                        ],
                    }),
                ],
            }),
            null != p
                ? (0, i.jsx)("div", {
                      className: m.Xr,
                      children: (0, i.jsx)(c.A, { media: p.media, className: s()(m.c8, h.g) }),
                  })
                : (0, i.jsx)(o.A, { className: m.pm }),
        ],
    });
}
