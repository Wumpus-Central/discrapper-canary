n.d(t, { Z: () => E });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(399606),
    s = n(755721),
    l = n(481060),
    c = n(565138),
    u = n(623624),
    d = n(678558),
    f = n(317169),
    _ = n(430824),
    p = n(267642),
    h = n(981631),
    m = n(388032),
    g = n(737313);
let E = function (e) {
    let { className: t, guildId: n, boostingVariant: i } = e,
        E = (0, o.e7)([_.Z], () => _.Z.getGuild(n), [n]),
        b = (0, f.Z)(null == E ? void 0 : E.id).total;
    return null == E
        ? (0, r.jsx)("div", {
              className: a()(t, g.guildContainer),
              children: (0, r.jsx)("div", {
                  className: g.guildInfoContainer,
                  children: (0, r.jsx)(l.Text, {
                      variant: "text-lg/bold",
                      children: m.intl.string(m.t["6Kwwuo"]),
                  }),
              }),
          })
        : (0, r.jsxs)("div", {
              className: a()(t, g.guildContainer),
              children: [
                  (0, r.jsx)(c.Z, {
                      className: g.__invalid_guildIcon,
                      guild: E,
                      size: c.Z.Sizes.LARGER,
                  }),
                  (0, r.jsxs)("div", {
                      className: g.guildInfoContainer,
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: "text-lg/bold",
                              children: E.name,
                          }),
                          (0, r.jsxs)("div", {
                              className: g.guildBoostStatsContainer,
                              children: [
                                  (0, r.jsx)(l.Ucv, {
                                      color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: g.guildBoostBadge,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: m.intl.format(m.t["pob/cL"], { subscriptions: b }),
                                  }),
                                  (0, r.jsx)("div", { className: g.separator }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, p.nW)(E.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  i
                      ? (0, r.jsx)(d.Z, {
                            guild: E,
                            analyticsLocation: {
                                page: h.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                                section: h.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: h.qAy.BUTTON_CTA,
                                objectType: h.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: s.zx.Sizes.MEDIUM,
                            color: s.zx.Colors.PRIMARY,
                            buttonText: m.intl.string(m.t.aBHecF),
                        })
                      : (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            text: m.intl.string(m.t.KLOhbO),
                            onClick: () => {
                                (0, u.f)({
                                    guildId: E.id,
                                    location: { section: h.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                });
                            },
                        }),
              ],
          });
};
