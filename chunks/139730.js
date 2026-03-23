"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(619517),
    u = n(183555),
    c = n(946356),
    d = n(985018),
    _ = n(208952);
function f(e) {
    let { previewData: t, className: n, onClick: s } = e,
        { trackUserProfileAction: f } = (0, u.NJ)(),
        p = i.useRef(!1);
    return (
        i.useEffect(() => {
            p.current ||
                (f({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: t.application.id }), (p.current = !0));
        }, [f, t.application.id]),
        (0, r.jsx)(o.sqX, {
            onClick: () => {
                f({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: t.application.id }), s?.();
            },
            "aria-label": t.application.name,
            children: (0, r.jsxs)(c.A.Overlay, {
                className: a()(_.kL, n),
                children: [
                    (0, r.jsxs)(o.BJc, {
                        gap: 8,
                        padding: 8,
                        className: _.Qs,
                        children: [
                            (0, r.jsxs)(o.BJc, {
                                direction: "horizontal",
                                gap: 4,
                                children: [
                                    (0, r.jsx)(l.Ay, {
                                        width: 16,
                                        height: 16,
                                        src: t.application.icon,
                                        className: _.In,
                                    }),
                                    (0, r.jsx)(o.EYj, { variant: "text-xs/medium", children: t.application.name }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: _.P_,
                                children: [
                                    (0, r.jsxs)(o.EYj, {
                                        tag: "div",
                                        variant: "heading-sm/semibold",
                                        lineClamp: 2,
                                        children: [
                                            t.previewText,
                                            null != t.previewIcon &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        " ",
                                                        (0, r.jsx)("div", {
                                                            className: _.mP,
                                                            children: (0, r.jsx)(l.Ay, {
                                                                src: t.previewIcon.proxyUrl,
                                                                width: t.previewIcon.width,
                                                                height: t.previewIcon.height,
                                                                responsive: !0,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)(o.QWc, {
                                        textVariant: "text-xs/normal",
                                        text: d.intl.string(d.t.qI8ZP6),
                                        variant: "secondary",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: _.Pq,
                        children: (0, r.jsx)(l.Ay, {
                            src: t.previewImage.proxyUrl,
                            width: t.previewImage.width,
                            height: t.previewImage.height,
                            responsive: !0,
                            className: _.oz,
                        }),
                    }),
                ],
            }),
        })
    );
}
