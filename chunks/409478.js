i.d(t, { A: () => m });
var a = i(477900),
    r = i(582128),
    n = i(598748),
    l = i(17928),
    u = i(486610),
    o = i(531913),
    s = i(587895),
    d = i(633075),
    c = i(946356),
    p = i(139730),
    f = i(58216),
    h = i(287809),
    w = i(238490),
    g = i(844474);
function m(e) {
    let { applicationId: t } = e,
        i = (0, l.bG)([h.default], () => h.default.getCurrentUser());
    return null == i ? null : (0, a.jsx)(b, { applicationId: t, user: i });
}
function b(e) {
    let { applicationId: t, user: i } = e,
        h = (0, l.bG)([s.A], () => s.A.getApplication(t)),
        m = r.useMemo(() => new d.R({ applicationId: t }), [t]),
        b = (0, o.A)(i.id, t),
        v = b.surfaceConfigs,
        A = (0, w.yZ)({
            widgetTop: null != v[n.m.WIDGET_TOP],
            widgetBottom: null != v[n.m.WIDGET_BOTTOM],
            miniProfile: null != v[n.m.MINI_PROFILE],
        });
    return A.hasAny
        ? (0, a.jsx)("div", {
              className: g.$C,
              children: (0, a.jsxs)("div", {
                  className: g.PV,
                  children: [
                      A.hasMainCard
                          ? (0, a.jsx)("div", {
                                className: g.a9,
                                children: (0, a.jsx)(c.A.Overlay, {
                                    className: g.Qb,
                                    children: (0, a.jsx)(f.A, {
                                        user: i,
                                        widget: m,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      A.hasPopoutCard && null != h
                          ? (0, a.jsx)("div", {
                                className: g.ql,
                                children: (0, a.jsx)(p.A, { application: h, rendererProps: b, renderText: u.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
