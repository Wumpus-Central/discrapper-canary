n.d(t, { A: () => d });
var i = n(627968),
    a = n(612185),
    l = n(495029),
    s = n(385945),
    r = n(620632),
    o = n(805495),
    c = n(911148);
function d() {
    let { surfaceConfig: e, data: t, header: n } = (0, a.Q)(),
        d = (0, r.g)(e.components.hero_image?.fields.image, t, [r.o.UNFURLED_MEDIA]);
    return (0, i.jsxs)("div", {
        className: c.zr,
        children: [
            (0, i.jsxs)("div", {
                className: c.hQ,
                children: [
                    n,
                    (0, i.jsxs)("div", {
                        className: c.Qs,
                        children: [
                            (0, i.jsx)(s.A, {
                                component: e.components.title,
                                variant: "text-lg/medium",
                                required: !0,
                                className: c.DD,
                            }),
                            (0, i.jsx)(s.A, {
                                component: e.components.subtitle_1,
                                variant: "text-sm/normal",
                                color: "text-subtle",
                            }),
                            (0, i.jsx)(s.A, {
                                component: e.components.subtitle_2,
                                variant: "text-sm/normal",
                                color: "text-subtle",
                            }),
                            (0, i.jsx)(s.A, {
                                component: e.components.subtitle_3,
                                variant: "text-sm/normal",
                                color: "text-subtle",
                            }),
                        ],
                    }),
                ],
            }),
            null != d
                ? (0, i.jsx)("div", {
                      className: c.ZS,
                      children: (0, i.jsx)("img", { alt: "", src: d.media.url, className: o.g }),
                  })
                : (0, i.jsx)(l.A, { className: c.h2 }),
        ],
    });
}
