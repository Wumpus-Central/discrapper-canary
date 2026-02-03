n.d(t, {
    H: () => x,
});
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(311907),
    s = n(793574),
    a = n(688810),
    o = n(840120),
    c = n(576705),
    d = n(555337),
    u = n(988921),
    g = n(365044),
    m = n(423418),
    p = n(989860),
    f = n(652215),
    h = n(985018),
    b = n(632275);

function x() {
    let { analyticsLocations: e } = (0, a.Ay)(s.A.GUILD_SETTINGS_BOOST_PERKS_PAGE),
        t = (0, l.bG)([d.A], () => d.A.getProps().guild, []),
        { isGuildAdmin: n, canManageGuild: x } = (0, l.cf)([c.A], () => ({
            isGuildAdmin: null != t && c.A.can(f.xBc.ADMINISTRATOR, t),
            canManageGuild: null != t && c.A.can(f.xBc.MANAGE_GUILD, t),
        })),
        j = (0, o.M5)(null == t ? void 0 : t.id, "GuildSettingsBoostPerks");
    return null == t
        ? null
        : (0, r.jsx)(a.f5, {
              value: e,
              children: (0, r.jsxs)("main", {
                  className: b.k,
                  children: [
                      (0, r.jsx)(i.DZT, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: h.intl.string(h.t.UKgg5N),
                      }),
                      (0, r.jsx)(p.I, {
                          guildId: null == t ? void 0 : t.id,
                          canManageGuild: x,
                          premiumProgressBarEnabled: t.premiumProgressBarEnabled,
                      }),
                      (0, r.jsx)("div", {
                          className: b.y,
                      }),
                      (0, r.jsx)(u.l, {
                          guild: t,
                          canManageGuild: x,
                      }),
                      (0, r.jsx)("div", {
                          className: b.y,
                      }),
                      j
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    n &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(m.u, {
                                                    guild: t,
                                                }),
                                                (0, r.jsx)("div", {
                                                    className: b.y,
                                                }),
                                            ],
                                        }),
                                    (0, r.jsx)(g.I, {
                                        guild: t,
                                        canManageGuild: x,
                                    }),
                                ],
                            })
                          : (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(g.I, {
                                        guild: t,
                                        canManageGuild: x,
                                    }),
                                    n &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: b.y,
                                                }),
                                                (0, r.jsx)(m.u, {
                                                    guild: t,
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                  ],
              }),
          });
}
