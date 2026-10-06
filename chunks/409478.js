t.d(n, { A: () => C });
var l = t(477900),
    o = t(582128),
    i = t(598748),
    a = t(17928),
    r = t(11099),
    u = t(531913),
    s = t(587895),
    d = t(633075),
    c = t(946356),
    m = t(139730),
    p = t(58216),
    h = t(287809),
    f = t(238490),
    g = t(844474);
function C(e) {
    let { applicationId: n } = e,
        t = (0, a.bG)([h.default], () => h.default.getCurrentUser());
    return null == t ? null : (0, l.jsx)(v, { applicationId: n, user: t });
}
function v(e) {
    let { applicationId: n, user: t } = e,
        h = (0, a.bG)([s.A], () => s.A.getApplication(n)),
        C = o.useMemo(() => new d.R({ applicationId: n }), [n]),
        v = (0, u.A)(t.id, n),
        x = v.surfaceConfigs,
        w = (0, f.yZ)({
            widgetTop: null != x[i.m.WIDGET_TOP],
            widgetBottom: null != x[i.m.WIDGET_BOTTOM],
            miniProfile: null != x[i.m.MINI_PROFILE],
        });
    return w.hasAny
        ? (0, l.jsx)("div", {
              className: g.$C,
              children: (0, l.jsxs)("div", {
                  className: g.PV,
                  children: [
                      w.hasMainCard
                          ? (0, l.jsx)("div", {
                                className: g.a9,
                                children: (0, l.jsx)(c.A.Overlay, {
                                    className: g.Qb,
                                    children: (0, l.jsx)(p.A, {
                                        user: t,
                                        widget: C,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      w.hasPopoutCard && null != h
                          ? (0, l.jsx)("div", {
                                className: g.ql,
                                children: (0, l.jsx)(m.A, { application: h, rendererProps: v, renderText: r.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
