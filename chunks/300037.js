var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(399606),
    l = n(481060),
    o = n(975298),
    c = n(565138),
    d = n(623624),
    u = n(678558),
    m = n(430824),
    g = n(709586),
    h = n(267642),
    p = n(981631),
    x = n(474936),
    f = n(388032),
    E = n(719721);
t.Z = function (e) {
    let { className: t, guildId: n, boostingVariant: r } = e,
        _ = (0, a.e7)([m.Z], () => m.Z.getGuild(n), [n]),
        { fractionalState: C } = (0, o.Z)(),
        T = C === x.a$.FP_ONLY;
    return null == _
        ? (0, i.jsx)('div', {
              className: s()(t, E.guildContainer),
              children: (0, i.jsx)('div', {
                  className: E.guildInfoContainer,
                  children: (0, i.jsx)(l.Text, {
                      variant: 'text-lg/bold',
                      children: f.intl.string(f.t['6Kwwur'])
                  })
              })
          })
        : (0, i.jsxs)('div', {
              className: s()(t, E.guildContainer),
              children: [
                  (0, i.jsx)(c.Z, {
                      className: E.__invalid_guildIcon,
                      guild: _,
                      size: c.Z.Sizes.LARGER
                  }),
                  (0, i.jsxs)('div', {
                      className: E.guildInfoContainer,
                      children: [
                          (0, i.jsx)(l.Text, {
                              variant: 'text-lg/bold',
                              children: _.name
                          }),
                          (0, i.jsxs)('div', {
                              className: E.guildBoostStatsContainer,
                              children: [
                                  (0, i.jsx)(g.Z, {
                                      className: E.guildBoostBadge,
                                      width: 16,
                                      height: 16
                                  }),
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: f.intl.format(f.t['pob/cH'], { subscriptions: _.premiumSubscriberCount })
                                  }),
                                  (0, i.jsx)('div', { className: E.separator }),
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: (0, h.nW)(_.premiumTier, { useLevels: !1 })
                                  })
                              ]
                          })
                      ]
                  }),
                  r
                      ? (0, i.jsx)(u.Z, {
                            guild: _,
                            analyticsLocation: {
                                page: p.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                                section: p.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: p.qAy.BUTTON_CTA,
                                objectType: p.Qqv.BUY
                            },
                            pauseAnimation: !0,
                            size: l.Button.Sizes.MEDIUM,
                            color: l.Button.Colors.PRIMARY,
                            buttonText: f.intl.string(f.t.aBHecH),
                            disabled: T
                        })
                      : (0, i.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            onClick: () => {
                                (0, d.f)({
                                    guildId: _.id,
                                    location: { section: p.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA }
                                });
                            },
                            size: l.Button.Sizes.MEDIUM,
                            disabled: T,
                            children: f.intl.string(f.t.KLOhbG)
                        })
              ]
          });
};
