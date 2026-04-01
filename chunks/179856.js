n.d(t, { A: () => p });
var i = n(627968),
    a = n(503698),
    l = n.n(a),
    s = n(158954),
    r = n(612185),
    o = n(495029),
    c = n(895790),
    d = n(385945),
    u = n(620632),
    m = n(805495),
    g = n(129556);
function p() {
    let { surfaceConfig: e, data: t, header: n, onClick: a } = (0, r.Q)(),
        p = (0, u.g)(e.components.hero_image?.fields.image, t, [u.o.UNFURLED_MEDIA]);
    return (0, i.jsxs)("div", {
        className: g.zr,
        children: [
            (0, i.jsxs)("div", {
                className: g.rf,
                children: [
                    n,
                    (0, i.jsxs)("div", {
                        className: g.Qs,
                        children: [
                            (0, i.jsx)(d.A, {
                                component: e.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, i.jsx)(s.QWc, {
                                textVariant: "text-xs/normal",
                                variant: "secondary",
                                text: "View All Stats",
                                onClick: a,
                            }),
                        ],
                    }),
                ],
            }),
            null != p
                ? (0, i.jsx)("div", {
                      className: g.Xr,
                      children: (0, i.jsx)(c.A, { media: p.media, className: l()(g.c8, m.g) }),
                  })
                : (0, i.jsx)(o.A, { className: g.pm }),
        ],
    });
}
