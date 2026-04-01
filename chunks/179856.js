"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(612185),
    l = n(495029),
    u = n(895790),
    c = n(385945),
    d = n(620632),
    _ = n(317742),
    f = n(101941);
function p() {
    let { surfaceConfig: e, data: t, header: n, onClick: i } = (0, o.Q)(),
        p = (0, d.g)(e.components.hero_image?.fields.image, t, [d.o.UNFURLED_MEDIA]);
    return (0, r.jsxs)("div", {
        className: f.zr,
        children: [
            (0, r.jsxs)("div", {
                className: f.rf,
                children: [
                    n,
                    (0, r.jsxs)("div", {
                        className: f.Qs,
                        children: [
                            (0, r.jsx)(c.A, {
                                component: e.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, r.jsx)(a.QWc, {
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
                ? (0, r.jsx)("div", {
                      className: f.Xr,
                      children: (0, r.jsx)(u.A, { media: p.media, className: s()(f.c8, _.g) }),
                  })
                : (0, r.jsx)(l.A, { className: f.pm }),
        ],
    });
}
