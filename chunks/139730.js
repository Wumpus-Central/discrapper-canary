"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(485584),
    l = n(598748),
    u = n(158954),
    c = n(619517),
    d = n(183555),
    _ = n(946356),
    f = n(985018),
    p = n(43914);
function h(e) {
    let { applicationName: t, applicationIcon: n } = e;
    return (0, r.jsxs)(u.BJc, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != n
                ? (0, r.jsx)(c.Ay, { width: 16, height: 16, src: n, className: p.In })
                : (0, r.jsx)("div", { className: p.Fi }),
            (0, r.jsx)(u.EYj, { variant: "text-xs/medium", children: t }),
        ],
    });
}
function m(e) {
    let { trackUserProfileAction: t } = (0, d.NJ)(),
        n = i.useRef(!1);
    i.useEffect(() => {
        n.current || (t({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (n.current = !0));
    }, [t, e]);
}
function E(e) {
    let { previewData: t, className: n, onClick: i } = e,
        { trackUserProfileAction: s } = (0, d.NJ)();
    return (
        m(t.application.id),
        (0, r.jsx)(u.sqX, {
            onClick: () => {
                s({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: t.application.id }), i?.();
            },
            "aria-label": t.application.name,
            children: (0, r.jsxs)(_.A.Overlay, {
                className: a()(p.kL, n),
                children: [
                    (0, r.jsxs)(u.BJc, {
                        gap: 8,
                        padding: 8,
                        className: p.Qs,
                        children: [
                            (0, r.jsx)(h, { applicationName: t.application.name, applicationIcon: t.application.icon }),
                            (0, r.jsxs)("div", {
                                className: p.P_,
                                children: [
                                    (0, r.jsxs)(u.EYj, {
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
                                                            className: p.mP,
                                                            children: (0, r.jsx)(c.Ay, {
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
                                    (0, r.jsx)(u.QWc, {
                                        textVariant: "text-xs/normal",
                                        text: f.intl.string(f.t.qI8ZP6),
                                        variant: "secondary",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: p.Pq,
                        children: (0, r.jsx)(c.Ay, {
                            src: t.previewImage.proxyUrl,
                            width: t.previewImage.width,
                            height: t.previewImage.height,
                            responsive: !0,
                            className: p.oz,
                        }),
                    }),
                ],
            }),
        })
    );
}
function g(e) {
    let { application: t, rendererProps: n, className: i, onClick: s } = e,
        { trackUserProfileAction: c } = (0, d.NJ)(),
        f = n.surfaceConfigs[l.m.MINI_PROFILE],
        E = t.id;
    return (m(E), null == f)
        ? null
        : (0, r.jsx)(u.sqX, {
              onClick: () => {
                  c({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: E }), s?.();
              },
              "aria-label": t.name,
              children: (0, r.jsx)(_.A.Overlay, {
                  className: a()(p.iW, i),
                  children: (0, r.jsx)(o.kH, {
                      surface: l.m.MINI_PROFILE,
                      surfaceConfig: f,
                      data: n.data,
                      locale: n.locale,
                      applicationAssets: n.applicationAssets,
                      localizedStrings: n.localizedStrings,
                      header: (0, r.jsx)(h, { applicationName: t.name, applicationIcon: t.getIconURL(16) }),
                  }),
              }),
          });
}
let A = function (e) {
    return "v2" === e.type ? (0, r.jsx)(g, { ...e }) : (0, r.jsx)(E, { ...e });
};
