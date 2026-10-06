t.d(n, { A: () => x });
var l = t(477900),
    o = t(582128),
    i = t(598748),
    a = t(17928),
    s = t(11099),
    r = t(531913),
    u = t(587895),
    d = t(633075),
    c = t(946356),
    m = t(139730),
    p = t(58216),
    h = t(287809),
    g = t(238490),
    C = t(844474);
function x(e) {
    let { applicationId: n } = e,
        t = (0, a.bG)([h.default], () => h.default.getCurrentUser());
    return null == t ? null : (0, l.jsx)(T, { applicationId: n, user: t });
}
function T(e) {
    let { applicationId: n, user: t } = e,
        h = (0, a.bG)([u.A], () => u.A.getApplication(n)),
        x = o.useMemo(() => new d.R({ applicationId: n }), [n]),
        T = (0, r.A)(t.id, n),
        v = T.surfaceConfigs,
        I = (0, g.yZ)({
            widgetTop: null != v[i.m.WIDGET_TOP],
            widgetBottom: null != v[i.m.WIDGET_BOTTOM],
            miniProfile: null != v[i.m.MINI_PROFILE],
        });
    return I.hasAny
        ? (0, l.jsx)("div", {
              className: C.$C,
              children: (0, l.jsxs)("div", {
                  className: C.PV,
                  children: [
                      I.hasMainCard
                          ? (0, l.jsx)("div", {
                                className: C.a9,
                                children: (0, l.jsx)(c.A.Overlay, {
                                    className: C.Qb,
                                    children: (0, l.jsx)(p.A, {
                                        user: t,
                                        widget: x,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      I.hasPopoutCard && null != h
                          ? (0, l.jsx)("div", {
                                className: C.ql,
                                children: (0, l.jsx)(m.A, { application: h, rendererProps: T, renderText: s.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
