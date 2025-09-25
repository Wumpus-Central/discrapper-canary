n.d(t, { z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(481060),
    a = n(688465),
    o = n(953252),
    c = n(496675),
    d = n(434404),
    u = n(981631),
    m = n(388032),
    g = n(764295),
    p = n(776853);
async function f(e, t) {
    return await d.Z.saveGuild(e.id, { moderatorReportingEnabled: t });
}
function h(e) {
    let { guild: t } = e,
        n = (0, l.e7)([c.Z], () => null != t && c.Z.can(u.Plq.MANAGE_GUILD, t), [t]),
        d = t.features.has(u.oNc.REPORT_TO_MOD_PILOT),
        [h, x] = i.useState((0, o.Z)(t) && d),
        b = i.useCallback(
            async (e) => {
                x(e), await f(t, e);
            },
            [t],
        );
    return d && n
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: p.setupContainer,
                      children: (0, r.jsx)(s.j7V, {
                          value: h,
                          onChange: b,
                          className: p.switchItem,
                          disabled: !n,
                          hideBorder: !0,
                          children: (0, r.jsxs)("div", {
                              className: p.switchItemTextContent,
                              children: [
                                  (0, r.jsxs)(s.Text, {
                                      color: "header-primary",
                                      variant: "text-md/semibold",
                                      children: [
                                          m.intl.string(g.default["/xIz7O"]),
                                          (0, r.jsx)(a.Z, { className: p.betaTag }),
                                      ],
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      color: "header-secondary",
                                      variant: "text-sm/normal",
                                      children: m.intl.string(g.default.uUMXys),
                                  }),
                              ],
                          }),
                      }),
                  }),
                  (0, r.jsx)(s.$i$, { className: p.divider }),
              ],
          })
        : null;
}
