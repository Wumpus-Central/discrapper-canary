"use strict";
n.d(t, { A: () => u });
var l = n(627968),
    i = n(612185),
    s = n(495029),
    a = n(385945),
    r = n(272852),
    o = n(352478),
    c = n(182787);
function u() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = (0, i.Q)(),
        u = t(e.components.hero_image?.fields.image, [r.o.MEDIA]);
    return (0, l.jsxs)("div", {
        className: c.zr,
        children: [
            (0, l.jsxs)("div", {
                className: c.hQ,
                children: [
                    n,
                    (0, l.jsxs)("div", {
                        className: c.Qs,
                        children: [
                            (0, l.jsx)(a.A, {
                                component: e.components.title,
                                variant: "text-lg/medium",
                                required: !0,
                                className: c.DD,
                            }),
                            (0, l.jsx)(a.A, {
                                component: e.components.subtitle_1,
                                variant: "text-sm/normal",
                                color: "text-subtle",
                            }),
                            (0, l.jsx)(a.A, {
                                component: e.components.subtitle_2,
                                variant: "text-sm/normal",
                                color: "text-subtle",
                            }),
                            (0, l.jsx)(a.A, {
                                component: e.components.subtitle_3,
                                variant: "text-sm/normal",
                                color: "text-subtle",
                            }),
                        ],
                    }),
                ],
            }),
            null != u
                ? (0, l.jsx)("div", {
                      className: c.ZS,
                      children: (0, l.jsx)("img", { alt: "", src: u.media.url, className: o.g }),
                  })
                : (0, l.jsx)(s.A, { className: c.h2 }),
        ],
    });
}
