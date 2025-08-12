n.d(t, { Z: () => x });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(399606),
    l = n(755721),
    o = n(481060),
    c = n(565138),
    d = n(623624),
    u = n(678558),
    m = n(317169),
    p = n(430824),
    g = n(267642),
    h = n(981631),
    f = n(388032),
    b = n(13473);
let x = function (e) {
    let { className: t, guildId: n, boostingVariant: r } = e,
        x = (0, a.e7)([p.Z], () => p.Z.getGuild(n), [n]),
        _ = (0, m.Z)(null == x ? void 0 : x.id).total;
    return null == x
        ? (0, i.jsx)("div", {
              className: s()(t, b.guildContainer),
              children: (0, i.jsx)("div", {
                  className: b.guildInfoContainer,
                  children: (0, i.jsx)(o.Text, {
                      variant: "text-lg/bold",
                      children: f.intl.string(f.t["6Kwwur"]),
                  }),
              }),
          })
        : (0, i.jsxs)("div", {
              className: s()(t, b.guildContainer),
              children: [
                  (0, i.jsx)(c.Z, {
                      className: b.__invalid_guildIcon,
                      guild: x,
                      size: c.Z.Sizes.LARGER,
                  }),
                  (0, i.jsxs)("div", {
                      className: b.guildInfoContainer,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: "text-lg/bold",
                              children: x.name,
                          }),
                          (0, i.jsxs)("div", {
                              className: b.guildBoostStatsContainer,
                              children: [
                                  (0, i.jsx)(o.$Eu, {
                                      color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: b.guildBoostBadge,
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: f.intl.format(f.t["pob/cH"], { subscriptions: _ }),
                                  }),
                                  (0, i.jsx)("div", { className: b.separator }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, g.nW)(x.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  r
                      ? (0, i.jsx)(u.Z, {
                            guild: x,
                            analyticsLocation: {
                                page: h.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                                section: h.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: h.qAy.BUTTON_CTA,
                                objectType: h.Qqv.BUY,
                            },
                            pauseAnimation: !0,
                            size: l.zx.Sizes.MEDIUM,
                            color: l.zx.Colors.PRIMARY,
                            buttonText: f.intl.string(f.t.aBHecH),
                        })
                      : (0, i.jsx)(o.zxk, {
                            variant: "secondary",
                            text: f.intl.string(f.t.KLOhbG),
                            onClick: () => {
                                (0, d.f)({
                                    guildId: x.id,
                                    location: { section: h.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                });
                            },
                        }),
              ],
          });
};
