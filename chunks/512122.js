n.d(t, { p: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(243721),
    a = n(404778),
    o = n(56595),
    d = n(576705),
    c = n(997509),
    u = n(652215),
    m = n(985018),
    g = n(221314),
    h = n(312042);
async function x(e, t) {
    return await c.A.saveGuild(e.id, { moderatorReportingEnabled: t });
}
function _(e) {
    let { guild: t } = e,
        n = (0, s.bG)([d.A], () => null != t && d.A.can(u.xBc.MANAGE_GUILD, t), [t]),
        c = t.features.has(u.GuildFeatures.REPORT_TO_MOD_PILOT),
        [_, p] = l.useState((0, o.A)(t) && c),
        A = l.useCallback(
            async (e) => {
                p(e), await x(t, e);
            },
            [t],
        );
    return c && n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", {
                      className: h.hu,
                      children: (0, i.jsx)(r.d, {
                          label: m.intl.string(g.default["/xIz7G"]),
                          description: m.intl.string(g.default.uUMXyu),
                          badge: "beta",
                          checked: _,
                          onChange: A,
                          disabled: !n,
                      }),
                  }),
                  (0, i.jsx)(a.c, { className: h.yF }),
              ],
          })
        : null;
}
