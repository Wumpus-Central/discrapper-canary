n.d(t, {
    p: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(56595),
    c = n(576705),
    o = n(997509),
    d = n(652215),
    u = n(985018),
    f = n(641131),
    g = n(841541);
async function b(e, t) {
    return await o.A.saveGuild(e.id, {
        moderatorReportingEnabled: t,
    });
}

function m(e) {
    let { guild: t } = e,
        n = (0, l.bG)([c.A], () => null != t && c.A.can(d.xBc.MANAGE_GUILD, t), [t]),
        o = t.features.has(d.GuildFeatures.REPORT_TO_MOD_PILOT),
        [m, p] = i.useState((0, a.A)(t) && o),
        x = i.useCallback(
            async (e) => {
                p(e), await b(t, e);
            },
            [t],
        );
    return o && n
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: g.hu,
                      children: (0, r.jsx)(s.dOG, {
                          label: u.intl.string(f.default["/xIz7G"]),
                          description: u.intl.string(f.default.uUMXyu),
                          badge: "beta",
                          checked: m,
                          onChange: x,
                          disabled: !n,
                      }),
                  }),
                  (0, r.jsx)(s.cGx, {
                      className: g.yF,
                  }),
              ],
          })
        : null;
}
