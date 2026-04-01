"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(397927),
    a = n(965033),
    o = n(576705),
    d = n(652215),
    c = n(985018),
    u = n(79176);
function m(e) {
    let { guild: t } = e,
        n = (0, l.bG)([o.A], () => null != t && o.A.can(d.xBc.MANAGE_GUILD, t), [t]),
        m = t.features.has(d.GuildFeatures.COMMUNITY),
        [g, x] = s.useState(t.features.has(d.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        h = s.useCallback(
            async (e) => {
                x(e), await (0, a.qH)(t, e);
            },
            [t],
        );
    return m
        ? null
        : (0, i.jsx)("div", {
              className: u.k,
              children: (0, i.jsx)(r.dOG, {
                  label: c.intl.string(c.t.jDarmy),
                  description: c.intl.string(c.t["/ee7yK"]),
                  checked: g,
                  onChange: h,
                  disabled: !n,
              }),
          });
}
