n.d(t, { z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(953252),
    o = n(496675),
    c = n(434404),
    d = n(981631),
    u = n(388032),
    g = n(864309),
    m = n(776853);
async function p(e, t) {
    return await c.Z.saveGuild(e.id, { moderatorReportingEnabled: t });
}
function f(e) {
    let { guild: t } = e,
        n = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.MANAGE_GUILD, t), [t]),
        c = t.features.has(d.GuildFeatures.REPORT_TO_MOD_PILOT),
        [f, h] = i.useState((0, s.Z)(t) && c),
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
                      className: m.setupContainer,
                      children: (0, r.jsx)(a.rsf, {
                          label: u.intl.string(g.default["/xIz7G"]),
                          description: u.intl.string(g.default.uUMXyu),
                          badge: "beta",
                          checked: f,
                          onChange: b,
                          disabled: !n,
                      }),
                  }),
                  (0, r.jsx)(a.izJ, { className: m.divider }),
              ],
          })
        : null;
}
