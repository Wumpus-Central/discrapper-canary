n.d(t, { Z: () => _ });
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
    g = n(430824),
    p = n(594174),
    h = n(709586),
    f = n(267642),
    x = n(981631),
    b = n(388032),
    N = n(935908);
let _ = function (e) {
    let { className: t, guildId: n, boostingVariant: i } = e,
        _ = (0, a.e7)([g.Z], () => g.Z.getGuild(n), [n]),
        E = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
        { fractionalState: j } = (0, o.Z)(),
        C = (0, m.y)('guild_boosting_setting_guild_info_card', E, j);
    return null == _
        ? (0, r.jsx)('div', {
              className: s()(t, N.guildContainer),
              children: (0, r.jsx)('div', {
                  className: N.guildInfoContainer,
                  children: (0, r.jsx)(l.Text, {
                      variant: 'text-lg/bold',
                      children: b.NW.string(b.t['6Kwwur'])
                  })
              })
          })
        : (0, r.jsxs)('div', {
              className: s()(t, N.guildContainer),
              children: [
                  (0, r.jsx)(c.Z, {
                      className: N.__invalid_guildIcon,
                      guild: _,
                      size: c.Z.Sizes.LARGER
                  }),
                  (0, r.jsxs)('div', {
                      className: N.guildInfoContainer,
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: 'text-lg/bold',
                              children: _.name
                          }),
                          (0, r.jsxs)('div', {
                              className: N.guildBoostStatsContainer,
                              children: [
                                  (0, r.jsx)(h.Z, {
                                      className: N.guildBoostBadge,
                                      width: 16,
                                      height: 16
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: b.NW.format(b.t['pob/cH'], { subscriptions: _.premiumSubscriberCount })
                                  }),
                                  (0, r.jsx)('div', { className: N.separator }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: (0, f.nW)(_.premiumTier, { useLevels: !1 })
                                  })
                              ]
                          })
                      ]
                  }),
                  i
                      ? (0, r.jsx)(u.Z, {
                            guild: _,
                            analyticsLocation: {
                                page: x.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                                section: x.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: x.qAy.BUTTON_CTA,
                                objectType: x.Qqv.BUY
                            },
                            pauseAnimation: !0,
                            size: l.zxk.Sizes.MEDIUM,
                            color: l.zxk.Colors.PRIMARY,
                            buttonText: b.NW.string(b.t.aBHecH),
                            disabled: C
                        })
                      : (0, r.jsx)(l.zxk, {
                            color: l.zxk.Colors.PRIMARY,
                            onClick: () => {
                                (0, d.f)({
                                    guildId: _.id,
                                    location: { section: x.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA }
                                });
                            },
                            size: l.zxk.Sizes.MEDIUM,
                            disabled: C,
                            children: b.NW.string(b.t.KLOhbG)
                        })
              ]
          });
};
