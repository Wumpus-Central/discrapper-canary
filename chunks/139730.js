a.d(i, { A: () => E });
var n = a(627968),
    t = a(64700),
    l = a(503698),
    s = a.n(l),
    c = a(485584),
    r = a(598748),
    o = a(331322),
    d = a(834730),
    p = a(890856),
    u = a(123292),
    m = a(619517),
    h = a(183555),
    f = a(946356),
    x = a(985018),
    g = a(646997);
function I(e) {
    let { applicationName: i, applicationIcon: a } = e;
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != a
                ? (0, n.jsx)(m.Ay, { width: 16, height: 16, src: a, className: g.In })
                : (0, n.jsx)("div", { className: g.Fi }),
            (0, n.jsx)(d.E, { variant: "text-xs/medium", children: i }),
        ],
    });
}
function A(e) {
    let { trackUserProfileAction: i } = (0, h.NJ)(),
        a = t.useRef(!1);
    t.useEffect(() => {
        a.current || (i({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (a.current = !0));
    }, [i, e]);
}
function j(e) {
    let { previewData: i, className: a, onClick: t } = e,
        { trackUserProfileAction: l } = (0, h.NJ)();
    return (
        A(i.application.id),
        (0, n.jsx)(p.s, {
            onClick: () => {
                l({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: i.application.id }), t?.();
            },
            "aria-label": i.application.name,
            children: (0, n.jsxs)(f.A.Overlay, {
                className: s()(g.kL, a),
                children: [
                    (0, n.jsxs)(o.B, {
                        gap: 8,
                        padding: 8,
                        className: g.Qs,
                        children: [
                            (0, n.jsx)(I, { applicationName: i.application.name, applicationIcon: i.application.icon }),
                            (0, n.jsxs)("div", {
                                className: g.P_,
                                children: [
                                    (0, n.jsxs)(d.E, {
                                        tag: "div",
                                        variant: "heading-sm/semibold",
                                        lineClamp: 2,
                                        children: [
                                            i.previewText,
                                            null != i.previewIcon &&
                                                (0, n.jsxs)(n.Fragment, {
                                                    children: [
                                                        " ",
                                                        (0, n.jsx)("div", {
                                                            className: g.mP,
                                                            children: (0, n.jsx)(m.Ay, {
                                                                src: i.previewIcon.proxyUrl,
                                                                width: i.previewIcon.width,
                                                                height: i.previewIcon.height,
                                                                responsive: !0,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    (0, n.jsx)(u.Q, {
                                        textVariant: "text-xs/normal",
                                        text: x.intl.string(x.t.qI8ZP6),
                                        variant: "secondary",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: g.Pq,
                        children: (0, n.jsx)(m.Ay, {
                            src: i.previewImage.proxyUrl,
                            width: i.previewImage.width,
                            height: i.previewImage.height,
                            responsive: !0,
                            className: g.oz,
                        }),
                    }),
                ],
            }),
        })
    );
}
function v(e) {
    let { application: i, rendererProps: a, className: t, onClick: l } = e,
        { trackUserProfileAction: o } = (0, h.NJ)(),
        d = a.surfaceConfigs[r.m.MINI_PROFILE],
        u = i.id;
    return (A(u), null == d)
        ? null
        : (0, n.jsx)(p.s, {
              onClick: () => {
                  o({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: u }), l?.();
              },
              "aria-label": i.name,
              children: (0, n.jsx)(f.A.Overlay, {
                  className: s()(g.iW, t),
                  children: (0, n.jsx)(c.kH, {
                      ...a,
                      surface: r.m.MINI_PROFILE,
                      surfaceConfig: d,
                      header: (0, n.jsx)(I, { applicationName: i.name, applicationIcon: i.getIconURL(16) }),
                  }),
              }),
          });
}
let E = function (e) {
    return "v2" === e.type ? (0, n.jsx)(v, { ...e }) : (0, n.jsx)(j, { ...e });
};
