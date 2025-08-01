n.d(t, { Z: () => O });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(399606),
    l = n(755721),
    o = n(481060),
    c = n(975298),
    d = n(565138),
    u = n(623624),
    m = n(678558),
    p = n(124570),
    g = n(317169),
    h = n(430824),
    f = n(594174),
    b = n(267642),
    x = n(981631),
    _ = n(388032),
    j = n(939400);
let O = function (e) {
    let { className: t, guildId: n, boostingVariant: r } = e,
        O = (0, a.e7)([h.Z], () => h.Z.getGuild(n), [n]),
        C = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
        { fractionalState: E } = (0, c.Z)(),
        v = (0, p.y)('guild_boosting_setting_guild_info_card', C, E),
        S = (0, g.Z)(null == O ? void 0 : O.id).total;
    return null == O
        ? (0, i.jsx)('div', {
              className: s()(t, j.guildContainer),
              children: (0, i.jsx)('div', {
                  className: j.guildInfoContainer,
                  children: (0, i.jsx)(o.Text, {
                      variant: 'text-lg/bold',
                      children: _.intl.string(_.t['6Kwwur'])
                  })
              })
          })
        : (0, i.jsxs)('div', {
              className: s()(t, j.guildContainer),
              children: [
                  (0, i.jsx)(d.Z, {
                      className: j.__invalid_guildIcon,
                      guild: O,
                      size: d.Z.Sizes.LARGER
                  }),
                  (0, i.jsxs)('div', {
                      className: j.guildInfoContainer,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: 'text-lg/bold',
                              children: O.name
                          }),
                          (0, i.jsxs)('div', {
                              className: j.guildBoostStatsContainer,
                              children: [
                                  (0, i.jsx)(o.$Eu, {
                                      color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: j.guildBoostBadge
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: _.intl.format(_.t['pob/cH'], { subscriptions: S })
                                  }),
                                  (0, i.jsx)('div', { className: j.separator }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: (0, b.nW)(O.premiumTier, { useLevels: !1 })
                                  })
                              ]
                          })
                      ]
                  }),
                  r
                      ? (0, i.jsx)(m.Z, {
                            guild: O,
                            analyticsLocation: {
                                page: x.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                                section: x.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: x.qAy.BUTTON_CTA,
                                objectType: x.Qqv.BUY
                            },
                            pauseAnimation: !0,
                            size: l.zx.Sizes.MEDIUM,
                            color: l.zx.Colors.PRIMARY,
                            buttonText: _.intl.string(_.t.aBHecH),
                            disabled: v
                        })
                      : (0, i.jsx)(o.zxk, {
                            variant: 'secondary',
                            text: _.intl.string(_.t.KLOhbG),
                            onClick: () => {
                                (0, u.f)({
                                    guildId: O.id,
                                    location: { section: x.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA }
                                });
                            },
                            disabled: v
                        })
              ]
          });
};
