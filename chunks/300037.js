n.d(t, { Z: () => j });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(399606),
    a = n(481060),
    o = n(975298),
    c = n(565138),
    d = n(623624),
    u = n(678558),
    m = n(124570),
    p = n(317169),
    g = n(430824),
    h = n(594174),
    f = n(709586),
    b = n(267642),
    _ = n(981631),
    x = n(388032),
    E = n(939400);
let j = function (e) {
    let { className: t, guildId: n, boostingVariant: r } = e,
        j = (0, l.e7)([g.Z], () => g.Z.getGuild(n), [n]),
        C = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        { fractionalState: O } = (0, o.Z)(),
        S = (0, m.y)('guild_boosting_setting_guild_info_card', C, O),
        v = (0, p.Z)(null == j ? void 0 : j.id).total;
    return null == j
        ? (0, i.jsx)('div', {
              className: s()(t, E.guildContainer),
              children: (0, i.jsx)('div', {
                  className: E.guildInfoContainer,
                  children: (0, i.jsx)(a.Text, {
                      variant: 'text-lg/bold',
                      children: x.intl.string(x.t['6Kwwur'])
                  })
              })
          })
        : (0, i.jsxs)('div', {
              className: s()(t, E.guildContainer),
              children: [
                  (0, i.jsx)(c.Z, {
                      className: E.__invalid_guildIcon,
                      guild: j,
                      size: c.Z.Sizes.LARGER
                  }),
                  (0, i.jsxs)('div', {
                      className: E.guildInfoContainer,
                      children: [
                          (0, i.jsx)(a.Text, {
                              variant: 'text-lg/bold',
                              children: j.name
                          }),
                          (0, i.jsxs)('div', {
                              className: E.guildBoostStatsContainer,
                              children: [
                                  (0, i.jsx)(f.Z, {
                                      className: E.guildBoostBadge,
                                      width: 16,
                                      height: 16
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: x.intl.format(x.t['pob/cH'], { subscriptions: v })
                                  }),
                                  (0, i.jsx)('div', { className: E.separator }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: (0, b.nW)(j.premiumTier, { useLevels: !1 })
                                  })
                              ]
                          })
                      ]
                  }),
                  r
                      ? (0, i.jsx)(u.Z, {
                            guild: j,
                            analyticsLocation: {
                                page: _.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                                section: _.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: _.qAy.BUTTON_CTA,
                                objectType: _.Qqv.BUY
                            },
                            pauseAnimation: !0,
                            size: a.zxk.Sizes.MEDIUM,
                            color: a.zxk.Colors.PRIMARY,
                            buttonText: x.intl.string(x.t.aBHecH),
                            disabled: S
                        })
                      : (0, i.jsx)(a.zxk, {
                            color: a.zxk.Colors.PRIMARY,
                            onClick: () => {
                                (0, d.f)({
                                    guildId: j.id,
                                    location: { section: _.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA }
                                });
                            },
                            size: a.zxk.Sizes.MEDIUM,
                            disabled: S,
                            children: x.intl.string(x.t.KLOhbG)
                        })
              ]
          });
};
