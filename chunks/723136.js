n.d(t, { z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(481060),
    a = n(953252),
    o = n(496675),
    c = n(434404),
    d = n(981631),
    u = n(388032),
    m = n(304726),
    g = n(984734);
async function p(e, t) {
    return await c.Z.saveGuild(e.id, { moderatorReportingEnabled: t });
}
function f(e) {
    let { guild: t } = e,
        n = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.MANAGE_GUILD, t), [t]),
        c = t.features.has(d.oNc.REPORT_TO_MOD_PILOT),
        [f, h] = i.useState((0, a.Z)(t) && c),
        b = i.useCallback(
            async (e) => {
                h(e), await p(t, e);
            },
            [t],
        );
    return c && n
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: g.setupContainer,
                      children: (0, r.jsx)(s.rsf, {
                          label: u.intl.string(m.default["/xIz7O"]),
                          description: u.intl.string(m.default.uUMXys),
                          badge: "beta",
                          checked: f,
                          onChange: b,
                          disabled: !n,
                      }),
                  }),
                  (0, r.jsx)(s.izJ, { className: g.divider }),
              ],
          })
        : null;
}
