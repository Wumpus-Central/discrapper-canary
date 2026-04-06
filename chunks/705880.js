"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(612185),
    s = n(495029),
    a = n(385945),
    o = n(620632),
    l = n(317742),
    u = n(285331);
function c() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = (0, i.Q)(),
        c = t(e.components.hero_image?.fields.image, [o.o.MEDIA]);
    return (0, r.jsxs)("div", {
        className: u.zr,
        children: [
            (0, r.jsxs)("div", {
                className: u.hQ,
                children: [
                    n,
                    (0, r.jsxs)("div", {
                        className: u.Qs,
                        children: [
                            (0, r.jsx)(a.A, {
                                component: e.components.title,
                                variant: "text-lg/medium",
                                required: !0,
                                className: u.DD,
                            }),
                            (0, r.jsx)(a.A, {
                                component: e.components.subtitle_1,
                                variant: "text-sm/normal",
                                color: "text-subtle",
                            }),
                            (0, r.jsx)(a.A, {
                                component: e.components.subtitle_2,
                                variant: "text-sm/normal",
                                color: "text-subtle",
                            }),
                            (0, r.jsx)(a.A, {
                                component: e.components.subtitle_3,
                                variant: "text-sm/normal",
                                color: "text-subtle",
                            }),
                        ],
                    }),
                ],
            }),
            null != c
                ? (0, r.jsx)("div", {
                      className: u.ZS,
                      children: (0, r.jsx)("img", { alt: "", src: c.media.url, className: l.g }),
                  })
                : (0, r.jsx)(s.A, { className: u.h2 }),
        ],
    });
}
