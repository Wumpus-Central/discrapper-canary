n.d(t, {
    H: () => h,
});
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(311907),
    s = n(793574),
    a = n(688810),
    c = n(840120),
    o = n(576705),
    d = n(555337),
    u = n(988921),
    f = n(365044),
    g = n(423418),
    b = n(989860),
    m = n(652215),
    p = n(985018),
    x = n(632275);

function h() {
    let { analyticsLocations: e } = (0, a.Ay)(s.A.GUILD_SETTINGS_BOOST_PERKS_PAGE),
        t = (0, l.bG)([d.A], () => d.A.getProps().guild, []),
        { isGuildAdmin: n, canManageGuild: h } = (0, l.cf)([o.A], () => ({
            isGuildAdmin: null != t && o.A.can(m.xBc.ADMINISTRATOR, t),
            canManageGuild: null != t && o.A.can(m.xBc.MANAGE_GUILD, t),
        })),
        j = (0, c.M5)(null == t ? void 0 : t.id, "GuildSettingsBoostPerks");
    return null == t
        ? null
        : (0, r.jsx)(a.f5, {
              value: e,
              children: (0, r.jsxs)("main", {
                  className: x.k,
                  children: [
                      (0, r.jsx)(i.DZT, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: p.intl.string(p.t.UKgg5N),
                      }),
                      (0, r.jsx)(b.I, {
                          canManageGuild: h,
                          premiumProgressBarEnabled: t.premiumProgressBarEnabled,
                      }),
                      (0, r.jsx)("div", {
                          className: x.y,
                      }),
                      (0, r.jsx)(u.l, {
                          guild: t,
                          canManageGuild: h,
                      }),
                      (0, r.jsx)("div", {
                          className: x.y,
                      }),
                      j
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    n &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(g.u, {
                                                    guild: t,
                                                }),
                                                (0, r.jsx)("div", {
                                                    className: x.y,
                                                }),
                                            ],
                                        }),
                                    (0, r.jsx)(f.I, {
                                        guild: t,
                                        canManageGuild: h,
                                    }),
                                ],
                            })
                          : (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(f.I, {
                                        guild: t,
                                        canManageGuild: h,
                                    }),
                                    n &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: x.y,
                                                }),
                                                (0, r.jsx)(g.u, {
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
