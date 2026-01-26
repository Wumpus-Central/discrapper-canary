n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(619517),
    c = n(183555),
    u = n(946356),
    d = n(985018),
    f = n(208952);

function p(e) {
    let { previewData: t, className: n, onClick: a } = e,
        { trackUserProfileAction: p } = (0, c.NJ)(),
        _ = i.useRef(!1);
    return (
        i.useEffect(() => {
            _.current ||
                (p({
                    action: "VIEW_APPLICATION_WIDGET_PREVIEW",
                    applicationId: t.application.id,
                }),
                (_.current = !0));
        }, [p, t.application.id]),
        (0, r.jsx)(o.sqX, {
            onClick: () => {
                p({
                    action: "PRESS_APPLICATION_WIDGET_PREVIEW",
                    applicationId: t.application.id,
                }),
                    null == a || a();
            },
            "aria-label": t.application.name,
            children: (0, r.jsxs)(u.A.Overlay, {
                className: s()(f.kL, n),
                children: [
                    (0, r.jsxs)(o.BJc, {
                        gap: 8,
                        padding: 8,
                        className: f.Qs,
                        children: [
                            (0, r.jsxs)(o.BJc, {
                                direction: "horizontal",
                                gap: 4,
                                children: [
                                    (0, r.jsx)(l.Ay, {
                                        width: 16,
                                        height: 16,
                                        src: t.application.icon,
                                        className: f.In,
                                    }),
                                    (0, r.jsx)(o.EYj, {
                                        variant: "text-xs/medium",
                                        children: t.application.name,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: f.P_,
                                children: [
                                    (0, r.jsxs)(o.DZT, {
                                        variant: "heading-sm/semibold",
                                        lineClamp: 2,
                                        children: [
                                            t.previewText,
                                            null != t.previewIcon &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        " ",
                                                        (0, r.jsx)("div", {
                                                            className: f.mP,
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
                        className: f.Pq,
                        children: (0, r.jsx)(l.Ay, {
                            src: t.previewImage.proxyUrl,
                            width: t.previewImage.width,
                            height: t.previewImage.height,
                            responsive: !0,
                            className: f.oz,
                        }),
                    }),
                ],
            }),
        })
    );
}
