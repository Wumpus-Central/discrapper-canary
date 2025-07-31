(n.d(t, { z: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(688465),
    o = n(953252),
    c = n(496675),
    d = n(434404),
    u = n(981631),
    m = n(388032),
    g = n(130883),
    p = n(576583);
async function h(e, t) {
    return await d.Z.saveGuild(e.id, { moderatorReportingEnabled: t });
}
function f(e) {
    let { guild: t } = e,
        n = (0, l.e7)([c.Z], () => null != t && c.Z.can(u.Plq.MANAGE_GUILD, t), [t]),
        d = t.features.has(u.oNc.REPORT_TO_MOD_PILOT),
        [f, x] = i.useState((0, o.Z)(t) && d),
        b = i.useCallback(
            async (e) => {
                (x(e), await h(t, e));
            },
            [t]
        );
    return d && n
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      className: p.setupContainer,
                      children: (0, r.jsx)(a.j7V, {
                          value: f,
                          onChange: b,
                          className: p.switchItem,
                          disabled: !n,
                          hideBorder: !0,
                          children: (0, r.jsxs)('div', {
                              className: p.switchItemTextContent,
                              children: [
                                  (0, r.jsxs)(a.Text, {
                                      color: 'header-primary',
                                      variant: 'text-md/semibold',
                                      children: [m.intl.string(g.default['/xIz7O']), (0, r.jsx)(s.Z, { className: p.betaTag })]
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: m.intl.string(g.default.uUMXys)
                                  })
                              ]
                          })
                      })
                  }),
                  (0, r.jsx)(a.$i$, { className: p.divider })
              ]
          })
        : null;
}
