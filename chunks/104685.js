n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(417597),
    s = n(397927),
    a = n(965033),
    c = n(576705),
    o = n(652215),
    d = n(985018),
    u = n(993013);

function f(e) {
    let { guild: t } = e,
        n = (0, l.bG)([c.A], () => null != t && c.A.can(o.xBc.MANAGE_GUILD, t), [t]),
        f = t.features.has(o.GuildFeatures.COMMUNITY),
        [g, b] = i.useState(t.features.has(o.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        m = i.useCallback(
            async (e) => {
                b(e), await (0, a.qH)(t, e);
            },
            [t],
        );
    return f
        ? null
        : (0, r.jsx)("div", {
              className: u.k,
              children: (0, r.jsx)(s.dOG, {
                  label: d.intl.string(d.t.jDarmy),
                  description: d.intl.string(d.t["/ee7yK"]),
                  checked: g,
                  onChange: m,
                  disabled: !n,
              }),
          });
}
