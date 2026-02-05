"use strict";
n.d(t, { H: () => p });
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(311907),
    r = n(793574),
    a = n(688810),
    o = n(840120),
    d = n(576705),
    c = n(555337),
    u = n(988921),
    m = n(365044),
    g = n(423418),
    x = n(989860),
    h = n(652215),
    _ = n(985018),
    A = n(632275);
function p() {
    let { analyticsLocations: e } = (0, a.Ay)(r.A.GUILD_SETTINGS_BOOST_PERKS_PAGE),
        t = (0, l.bG)([c.A], () => c.A.getProps().guild, []),
        { isGuildAdmin: n, canManageGuild: p } = (0, l.cf)([d.A], () => ({
            isGuildAdmin: null != t && d.A.can(h.xBc.ADMINISTRATOR, t),
            canManageGuild: null != t && d.A.can(h.xBc.MANAGE_GUILD, t),
        })),
        f = (0, o.M5)(t?.id, "GuildSettingsBoostPerks");
    return null == t
        ? null
        : (0, i.jsx)(a.f5, {
              value: e,
              children: (0, i.jsxs)("main", {
                  className: A.k,
                  children: [
                      (0, i.jsx)(s.DZT, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: _.intl.string(_.t.UKgg5N),
                      }),
                      (0, i.jsx)(x.I, {
                          guildId: t?.id,
                          canManageGuild: p,
                          premiumProgressBarEnabled: t.premiumProgressBarEnabled,
                      }),
                      (0, i.jsx)("div", { className: A.y }),
                      (0, i.jsx)(u.l, { guild: t, canManageGuild: p }),
                      (0, i.jsx)("div", { className: A.y }),
                      f
                          ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                    n &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(g.u, { guild: t }),
                                                (0, i.jsx)("div", { className: A.y }),
                                            ],
                                        }),
                                    (0, i.jsx)(m.I, { guild: t, canManageGuild: p }),
                                ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(m.I, { guild: t, canManageGuild: p }),
                                    n &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)("div", { className: A.y }),
                                                (0, i.jsx)(g.u, { guild: t }),
                                            ],
                                        }),
                                ],
                            }),
                  ],
              }),
          });
}
