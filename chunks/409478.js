a.d(t, { A: () => m });
var r = a(477900),
    i = a(582128),
    l = a(598748),
    n = a(17928),
    u = a(486610),
    s = a(531913),
    o = a(587895),
    d = a(633075),
    c = a(946356),
    p = a(139730),
    f = a(58216),
    h = a(287809),
    w = a(238490),
    g = a(844474);
function m(e) {
    let { applicationId: t } = e,
        a = (0, n.bG)([h.default], () => h.default.getCurrentUser());
    return null == a ? null : (0, r.jsx)(A, { applicationId: t, user: a });
}
function A(e) {
    let { applicationId: t, user: a } = e,
        h = (0, n.bG)([o.A], () => o.A.getApplication(t)),
        m = i.useMemo(() => new d.R({ applicationId: t }), [t]),
        A = (0, s.A)(a.id, t),
        T = A.surfaceConfigs,
        I = (0, w.yZ)({
            widgetTop: null != T[l.m.WIDGET_TOP],
            widgetBottom: null != T[l.m.WIDGET_BOTTOM],
            miniProfile: null != T[l.m.MINI_PROFILE],
        });
    return I.hasAny
        ? (0, r.jsx)("div", {
              className: g.$C,
              children: (0, r.jsxs)("div", {
                  className: g.PV,
                  children: [
                      I.hasMainCard
                          ? (0, r.jsx)("div", {
                                className: g.a9,
                                children: (0, r.jsx)(c.A.Overlay, {
                                    className: g.Qb,
                                    children: (0, r.jsx)(f.A, {
                                        user: a,
                                        widget: m,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      I.hasPopoutCard && null != h
                          ? (0, r.jsx)("div", {
                                className: g.ql,
                                children: (0, r.jsx)(p.A, { application: h, rendererProps: A, renderText: u.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
