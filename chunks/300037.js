n.d(t, { Z: () => C });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(399606),
    a = n(481060),
    o = n(975298),
    c = n(565138),
    d = n(623624),
    u = n(678558),
    h = n(430824),
    m = n(709586),
    g = n(267642),
    x = n(981631),
    _ = n(474936),
    p = n(388032),
    E = n(688859);
let C = function (e) {
    let { className: t, guildId: n, boostingVariant: s } = e,
        C = (0, r.e7)([h.Z], () => h.Z.getGuild(n), [n]),
        { fractionalState: N } = (0, o.Z)(),
        f = N === _.a$.FP_ONLY;
    return null == C
        ? (0, i.jsx)('div', {
              className: l()(t, E.guildContainer),
              children: (0, i.jsx)('div', {
                  className: E.guildInfoContainer,
                  children: (0, i.jsx)(a.Text, {
                      variant: 'text-lg/bold',
                      children: p.intl.string(p.t['6Kwwur'])
                  })
              })
          })
        : (0, i.jsxs)('div', {
              className: l()(t, E.guildContainer),
              children: [
                  (0, i.jsx)(c.Z, {
                      className: E.__invalid_guildIcon,
                      guild: C,
                      size: c.Z.Sizes.LARGER
                  }),
                  (0, i.jsxs)('div', {
                      className: E.guildInfoContainer,
                      children: [
                          (0, i.jsx)(a.Text, {
                              variant: 'text-lg/bold',
                              children: C.name
                          }),
                          (0, i.jsxs)('div', {
                              className: E.guildBoostStatsContainer,
                              children: [
                                  (0, i.jsx)(m.Z, {
                                      className: E.guildBoostBadge,
                                      width: 16,
                                      height: 16
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: p.intl.format(p.t['pob/cH'], { subscriptions: C.premiumSubscriberCount })
                                  }),
                                  (0, i.jsx)('div', { className: E.separator }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: (0, g.nW)(C.premiumTier, { useLevels: !1 })
                                  })
                              ]
                          })
                      ]
                  }),
                  s
                      ? (0, i.jsx)(u.Z, {
                            guild: C,
                            analyticsLocation: {
                                page: x.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                                section: x.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: x.qAy.BUTTON_CTA,
                                objectType: x.Qqv.BUY
                            },
                            pauseAnimation: !0,
                            size: a.zxk.Sizes.MEDIUM,
                            color: a.zxk.Colors.PRIMARY,
                            buttonText: p.intl.string(p.t.aBHecH),
                            disabled: f
                        })
                      : (0, i.jsx)(a.zxk, {
                            color: a.zxk.Colors.PRIMARY,
                            onClick: () => {
                                (0, d.f)({
                                    guildId: C.id,
                                    location: { section: x.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA }
                                });
                            },
                            size: a.zxk.Sizes.MEDIUM,
                            disabled: f,
                            children: p.intl.string(p.t.KLOhbG)
                        })
              ]
          });
};
