n.d(t, { I: () => x });
var r = n(54381);
n(473749);
var i = n(793030),
    l = n(442837),
    a = n(100527),
    s = n(906732),
    o = n(158638),
    c = n(496675),
    d = n(999382),
    u = n(565849),
    g = n(787612),
    m = n(354103),
    p = n(413682),
    f = n(981631),
    h = n(388032),
    b = n(596583);
function x() {
    let { analyticsLocations: e } = (0, s.ZP)(a.Z.GUILD_SETTINGS_BOOST_PERKS_PAGE),
        t = (0, l.e7)([d.Z], () => d.Z.getProps().guild, []),
        { isGuildAdmin: n, canManageGuild: x } = (0, l.cj)([c.Z], () => ({
            isGuildAdmin: null != t && c.Z.can(f.Plq.ADMINISTRATOR, t),
            canManageGuild: null != t && c.Z.can(f.Plq.MANAGE_GUILD, t),
        })),
        j = (0, o.g1)(null == t ? void 0 : t.id, "GuildSettingsBoostPerks");
    return null == t
        ? null
        : (0, r.jsx)(s.Gt, {
              value: e,
              children: (0, r.jsxs)("main", {
                  className: b.container,
                  children: [
                      (0, r.jsx)(i.X6q, {
                          variant: "heading-lg/semibold",
                          color: "header-primary",
                          children: h.intl.string(h.t.UKgg5N),
                      }),
                      (0, r.jsx)(p.w, {
                          canManageGuild: x,
                          premiumProgressBarEnabled: t.premiumProgressBarEnabled,
                      }),
                      (0, r.jsx)("div", { className: b.divider }),
                      (0, r.jsx)(u.A, {
                          guild: t,
                          canManageGuild: x,
                      }),
                      (0, r.jsx)("div", { className: b.divider }),
                      j
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    n &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(m.V, { guild: t }),
                                                (0, r.jsx)("div", { className: b.divider }),
                                            ],
                                        }),
                                    (0, r.jsx)(g.A, {
                                        guild: t,
                                        canManageGuild: x,
                                    }),
                                ],
                            })
                          : (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(g.A, {
                                        guild: t,
                                        canManageGuild: x,
                                    }),
                                    n &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)("div", { className: b.divider }),
                                                (0, r.jsx)(m.V, { guild: t }),
                                            ],
                                        }),
                                ],
                            }),
                  ],
              }),
          });
}
