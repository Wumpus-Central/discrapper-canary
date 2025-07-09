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
    b = n(709586),
    x = n(267642),
    _ = n(981631),
    j = n(388032),
    E = n(939400);
let O = function (e) {
    let { className: t, guildId: n, boostingVariant: r } = e,
        O = (0, a.e7)([h.Z], () => h.Z.getGuild(n), [n]),
        C = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
        { fractionalState: v } = (0, c.Z)(),
        S = (0, p.y)('guild_boosting_setting_guild_info_card', C, v),
        T = (0, g.Z)(null == O ? void 0 : O.id).total;
    return null == O
        ? (0, i.jsx)('div', {
              className: s()(t, E.guildContainer),
              children: (0, i.jsx)('div', {
                  className: E.guildInfoContainer,
                  children: (0, i.jsx)(o.Text, {
                      variant: 'text-lg/bold',
                      children: j.intl.string(j.t['6Kwwur'])
                  })
              })
          })
        : (0, i.jsxs)('div', {
              className: s()(t, E.guildContainer),
              children: [
                  (0, i.jsx)(d.Z, {
                      className: E.__invalid_guildIcon,
                      guild: O,
                      size: d.Z.Sizes.LARGER
                  }),
                  (0, i.jsxs)('div', {
                      className: E.guildInfoContainer,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: 'text-lg/bold',
                              children: O.name
                          }),
                          (0, i.jsxs)('div', {
                              className: E.guildBoostStatsContainer,
                              children: [
                                  (0, i.jsx)(b.Z, {
                                      className: E.guildBoostBadge,
                                      width: 16,
                                      height: 16
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: j.intl.format(j.t['pob/cH'], { subscriptions: T })
                                  }),
                                  (0, i.jsx)('div', { className: E.separator }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: (0, x.nW)(O.premiumTier, { useLevels: !1 })
                                  })
                              ]
                          })
                      ]
                  }),
                  r
                      ? (0, i.jsx)(m.Z, {
                            guild: O,
                            analyticsLocation: {
                                page: _.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                                section: _.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: _.qAy.BUTTON_CTA,
                                objectType: _.Qqv.BUY
                            },
                            pauseAnimation: !0,
                            size: l.zx.Sizes.MEDIUM,
                            color: l.zx.Colors.PRIMARY,
                            buttonText: j.intl.string(j.t.aBHecH),
                            disabled: S
                        })
                      : (0, i.jsx)(o.zxk, {
                            variant: 'secondary',
                            text: j.intl.string(j.t.KLOhbG),
                            onClick: () => {
                                (0, u.f)({
                                    guildId: O.id,
                                    location: { section: _.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA }
                                });
                            },
                            disabled: S
                        })
              ]
          });
};
