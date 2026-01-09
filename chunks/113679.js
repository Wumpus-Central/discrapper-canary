n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(399606),
    a = n(481060),
    s = n(450377),
    o = n(496675),
    c = n(981631),
    d = n(388032),
    u = n(822809);
function g(e) {
    let { guild: t } = e,
        n = (0, l.e7)([o.Z], () => null != t && o.Z.can(c.Plq.MANAGE_GUILD, t), [t]),
        g = t.features.has(c.GuildFeatures.COMMUNITY),
        [f, m] = i.useState(t.features.has(c.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        b = i.useCallback(
            async (e) => {
                m(e), await (0, s.fp)(t, e);
            },
            [t],
        );
    return g
        ? null
        : (0, r.jsx)("div", {
              className: u.container,
              children: (0, r.jsx)(a.rsf, {
                  label: d.intl.string(d.t.jDarmy),
                  description: d.intl.string(d.t["/ee7yK"]),
                  checked: f,
                  onChange: b,
                  disabled: !n,
              }),
          });
}
