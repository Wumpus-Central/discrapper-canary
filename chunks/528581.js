n.d(t, { A: () => m });
var i = n(477900),
    r = n(582128),
    l = n(598748),
    a = n(17928),
    s = n(486610),
    o = n(531913),
    u = n(587895),
    d = n(633075),
    c = n(946356),
    f = n(139730),
    h = n(58216),
    p = n(287809),
    g = n(58551),
    _ = n(71495);
function m(e) {
    let { applicationId: t } = e,
        n = (0, a.bG)([p.default], () => p.default.getCurrentUser());
    return null == n ? null : (0, i.jsx)(w, { applicationId: t, user: n });
}
function w(e) {
    let { applicationId: t, user: n } = e,
        p = (0, a.bG)([u.A], () => u.A.getApplication(t)),
        m = r.useMemo(() => new d.R({ applicationId: t }), [t]),
        w = (0, o.A)(n.id, t),
        E = w.surfaceConfigs,
        I = (0, g.yZ)({
            widgetTop: null != E[l.m.WIDGET_TOP],
            widgetBottom: null != E[l.m.WIDGET_BOTTOM],
            miniProfile: null != E[l.m.MINI_PROFILE],
        });
    return I.hasAny
        ? (0, i.jsx)("div", {
              className: _.$C,
              children: (0, i.jsxs)("div", {
                  className: _.PV,
                  children: [
                      I.hasMainCard
                          ? (0, i.jsx)("div", {
                                className: _.a9,
                                children: (0, i.jsx)(c.A.Overlay, {
                                    className: _.Qb,
                                    children: (0, i.jsx)(h.A, {
                                        user: n,
                                        widget: m,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      I.hasPopoutCard && null != p
                          ? (0, i.jsx)("div", {
                                className: _.ql,
                                children: (0, i.jsx)(f.A, { application: p, rendererProps: w, renderText: s.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
