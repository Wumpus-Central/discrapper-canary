n.d(t, { Z: () => v });
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(367907),
    a = n(807582),
    o = n(26323),
    c = n(516129),
    d = n(813197),
    u = n(709586),
    m = n(768581),
    h = n(434404),
    g = n(981631),
    x = n(30513),
    p = n(486324),
    _ = n(200299),
    C = n(388032),
    f = n(767837);
let v = function (e) {
    let { guild: t } = e,
        v = t.hasFeature(g.oNc.BANNER),
        N = r.useCallback(
            (e, r) => {
                if (null == e || void 0 === r) {
                    h.Z.saveGuild(t.id, { homeHeader: null });
                    return;
                }
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([n.e('70687'), n.e('59732'), n.e('30258')]).then(n.bind(n, 73620));
                    return (n) =>
                        (0, i.jsx)(l, {
                            imgURI: e,
                            file: r,
                            onCrop: (e) => h.Z.saveGuild(t.id, { homeHeader: e }),
                            uploadType: p.pC.HOME_HEADER,
                            ...n
                        });
                });
            },
            [t.id]
        ),
        j = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, s.yw)(g.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: g.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: g.qAy.LEARN_MORE
                        },
                        guild_id: null == t ? void 0 : t.id,
                        location_stack: []
                    }),
                    (0, o.Z)({
                        analyticsLocations: [],
                        analyticsSourceLocation: {
                            section: g.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: g.qAy.ONBOARDING_EDIT,
                            page: g.ZY5.GUILD_SETTINGS
                        },
                        guild: t,
                        perks: (0, x.XO)()
                    });
            },
            [t]
        ),
        I = (0, i.jsx)(c.Z, {
            image: t.homeHeader,
            makeURL: (e) =>
                null != e
                    ? m.ZP.getGuildHomeHeaderURL({
                          id: t.id,
                          homeHeader: e
                      })
                    : null,
            disabled: !v,
            onChange: N,
            hint: C.intl.string(C.t.NyXznp),
            enabled: v,
            maxFileSizeBytes: _.B
        });
    return v
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: f.sectionHeader,
                      children: [
                          (0, i.jsx)(l.X6q, {
                              className: f.header,
                              variant: 'heading-lg/extrabold',
                              children: C.intl.string(C.t.BBj1nZ)
                          }),
                          (0, i.jsx)(a.Z, {
                              className: f.boostIndicator,
                              guild: t,
                              guildFeature: g.oNc.BANNER,
                              onClick: j
                          })
                      ]
                  }),
                  (0, i.jsxs)('div', {
                      className: f.section,
                      children: [
                          (0, i.jsxs)('div', {
                              className: f.homeBannerExplainer,
                              children: [
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: C.intl.string(C.t.Vwintr)
                                  }),
                                  (0, i.jsxs)(l.zxk, {
                                      color: l.Ttl.BRAND,
                                      className: f.uploadButton,
                                      children: [
                                          C.intl.string(C.t.yG2pUl),
                                          (0, i.jsx)(d.ZP, {
                                              onChange: N,
                                              maxFileSizeBytes: _.B
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', { children: I })
                      ]
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: f.sectionHeader,
                      children: [
                          (0, i.jsx)(l.X6q, {
                              className: f.header,
                              variant: 'heading-lg/extrabold',
                              children: C.intl.string(C.t.BBj1nZ)
                          }),
                          (0, i.jsx)(a.Z, {
                              className: f.boostIndicator,
                              guild: t,
                              guildFeature: g.oNc.BANNER,
                              onClick: j
                          })
                      ]
                  }),
                  (0, i.jsxs)('div', {
                      className: f.section,
                      children: [
                          (0, i.jsxs)('div', {
                              className: f.homeBannerExplainer,
                              children: [
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: C.intl.string(C.t.Vwintr)
                                  }),
                                  (0, i.jsxs)(l.gtL, {
                                      className: f.upsellButton,
                                      innerClassName: f.upsellButtonInner,
                                      color: l.zxk.Colors.GREEN,
                                      onClick: j,
                                      children: [
                                          (0, i.jsx)(u.Z, {
                                              height: 16,
                                              width: 16
                                          }),
                                          (0, i.jsx)(l.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'text-normal',
                                              children: C.intl.string(C.t['+7XY39'])
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              children: (0, i.jsx)(l.P3F, {
                                  'aria-hidden': !0,
                                  tabIndex: -1,
                                  onClick: j,
                                  children: I
                              })
                          })
                      ]
                  })
              ]
          });
};
