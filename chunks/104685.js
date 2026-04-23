n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    r = n(243721),
    a = n(965033),
    o = n(576705),
    d = n(652215),
    c = n(985018),
    u = n(180984);
function m(e) {
    let { guild: t } = e,
        n = (0, s.bG)([o.A], () => null != t && o.A.can(d.xBc.MANAGE_GUILD, t), [t]),
        m = t.features.has(d.GuildFeatures.COMMUNITY),
        [g, h] = l.useState(t.features.has(d.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        x = l.useCallback(
            async (e) => {
                h(e), await (0, a.qH)(t, e);
            },
            [t],
        );
    return m
        ? null
        : (0, i.jsx)("div", {
              className: u.k,
              children: (0, i.jsx)(r.d, {
                  label: c.intl.string(c.t.jDarmy),
                  description: c.intl.string(c.t["/ee7yK"]),
                  checked: g,
                  onChange: x,
                  disabled: !n,
              }),
          });
}
