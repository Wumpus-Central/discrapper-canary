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
    f = n(354103),
    m = n(413682),
    b = n(981631),
    p = n(388032),
    h = n(188057);
function x() {
    let { analyticsLocations: e } = (0, s.ZP)(a.Z.GUILD_SETTINGS_BOOST_PERKS_PAGE),
        t = (0, l.e7)([d.Z], () => d.Z.getProps().guild, []),
        { isGuildAdmin: n, canManageGuild: x } = (0, l.cj)([c.Z], () => ({
            isGuildAdmin: null != t && c.Z.can(b.Plq.ADMINISTRATOR, t),
            canManageGuild: null != t && c.Z.can(b.Plq.MANAGE_GUILD, t),
        })),
        j = (0, o.g1)(null == t ? void 0 : t.id, "GuildSettingsBoostPerks");
    return null == t
        ? null
        : (0, r.jsx)(s.Gt, {
              value: e,
              children: (0, r.jsxs)("main", {
                  className: h.container,
                  children: [
                      (0, r.jsx)(i.X6q, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: p.intl.string(p.t.UKgg5N),
                      }),
                      (0, r.jsx)(m.w, {
                          canManageGuild: x,
                          premiumProgressBarEnabled: t.premiumProgressBarEnabled,
                      }),
                      (0, r.jsx)("div", { className: h.divider }),
                      (0, r.jsx)(u.A, {
                          guild: t,
                          canManageGuild: x,
                      }),
                      (0, r.jsx)("div", { className: h.divider }),
                      j
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    n &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(f.V, { guild: t }),
                                                (0, r.jsx)("div", { className: h.divider }),
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
                                                (0, r.jsx)("div", { className: h.divider }),
                                                (0, r.jsx)(f.V, { guild: t }),
                                            ],
                                        }),
                                ],
                            }),
                  ],
              }),
          });
}
