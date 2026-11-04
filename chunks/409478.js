var r = i(477900),
    a = i(582128),
    n = i(598748),
    l = i(855986),
    u = i(284460),
    o = i(531913),
    s = i(587895),
    d = i(633075),
    c = i(139730),
    p = i(591410),
    f = i(287809),
    h = i(238490),
    w = i(844474);
function g(e) {
    let { applicationId: t, user: i } = e,
        f = (0, l.bG)([s.A], () => s.A.getApplication(t)),
        g = a.useMemo(() => new d.R({ applicationId: t }), [t]),
        m = (0, o.A)(i.id, t),
        A = m.surfaceConfigs,
        T = (0, h.yZ)({
            widgetTop: null != A[n.m.WIDGET_TOP],
            widgetBottom: null != A[n.m.WIDGET_BOTTOM],
            miniProfile: null != A[n.m.MINI_PROFILE],
        });
    return T.hasAny
        ? (0, r.jsx)("div", {
              className: w.$C,
              children: (0, r.jsxs)("div", {
                  className: w.PV,
                  children: [
                      T.hasMainCard
                          ? (0, r.jsx)("div", {
                                className: w.a9,
                                children: (0, r.jsx)(p.A, {
                                    user: i,
                                    widget: g,
                                    allowEditing: !1,
                                    disableInteraction: !0,
                                    interactiveLinks: !0,
                                    disableCTAActions: !0,
                                }),
                            })
                          : null,
                      T.hasPopoutCard && null != f
                          ? (0, r.jsx)("div", {
                                className: w.ql,
                                children: (0, r.jsx)(c.A, { application: f, rendererProps: m, renderText: u.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
i.d(
    t,
    {},
    {
        A: function (e) {
            let { applicationId: t } = e,
                i = (0, l.bG)([f.default], () => f.default.getCurrentUser());
            return null == i ? null : (0, r.jsx)(g, { applicationId: t, user: i });
        },
    },
);
