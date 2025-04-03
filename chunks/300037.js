n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(399606),
    l = n(481060),
    o = n(975298),
    c = n(565138),
    d = n(623624),
    u = n(678558),
    m = n(124570),
    g = n(317169),
    p = n(430824),
    h = n(594174),
    f = n(709586),
    b = n(267642),
    N = n(981631),
    x = n(388032),
    _ = n(939400);
let E = function (e) {
    let { className: t, guildId: n, boostingVariant: i } = e,
        E = (0, a.e7)([p.Z], () => p.Z.getGuild(n), [n]),
        j = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        { fractionalState: O } = (0, o.Z)(),
        C = (0, m.y)('guild_boosting_setting_guild_info_card', j, O),
        S = (0, g.Z)(null == E ? void 0 : E.id).total;
    return null == E
        ? (0, r.jsx)('div', {
              className: s()(t, _.guildContainer),
              children: (0, r.jsx)('div', {
                  className: _.guildInfoContainer,
                  children: (0, r.jsx)(l.Text, {
                      variant: 'text-lg/bold',
                      children: x.NW.string(x.t['6Kwwur'])
                  })
              })
          })
        : (0, r.jsxs)('div', {
              className: s()(t, _.guildContainer),
              children: [
                  (0, r.jsx)(c.Z, {
                      className: _.__invalid_guildIcon,
                      guild: E,
                      size: c.Z.Sizes.LARGER
                  }),
                  (0, r.jsxs)('div', {
                      className: _.guildInfoContainer,
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: 'text-lg/bold',
                              children: E.name
                          }),
                          (0, r.jsxs)('div', {
                              className: _.guildBoostStatsContainer,
                              children: [
                                  (0, r.jsx)(f.Z, {
                                      className: _.guildBoostBadge,
                                      width: 16,
                                      height: 16
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: x.NW.format(x.t['pob/cH'], { subscriptions: S })
                                  }),
                                  (0, r.jsx)('div', { className: _.separator }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: (0, b.nW)(E.premiumTier, { useLevels: !1 })
                                  })
                              ]
                          })
                      ]
                  }),
                  i
                      ? (0, r.jsx)(u.Z, {
                            guild: E,
                            analyticsLocation: {
                                page: N.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                                section: N.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: N.qAy.BUTTON_CTA,
                                objectType: N.Qqv.BUY
                            },
                            pauseAnimation: !0,
                            size: l.zxk.Sizes.MEDIUM,
                            color: l.zxk.Colors.PRIMARY,
                            buttonText: x.NW.string(x.t.aBHecH),
                            disabled: C
                        })
                      : (0, r.jsx)(l.zxk, {
                            color: l.zxk.Colors.PRIMARY,
                            onClick: () => {
                                (0, d.f)({
                                    guildId: E.id,
                                    location: { section: N.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA }
                                });
                            },
                            size: l.zxk.Sizes.MEDIUM,
                            disabled: C,
                            children: x.NW.string(x.t.KLOhbG)
                        })
              ]
          });
};
