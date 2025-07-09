n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    l = n(755721),
    s = n(481060),
    a = n(367907),
    o = n(807582),
    c = n(26323),
    d = n(516129),
    u = n(345861),
    m = n(709586),
    g = n(768581),
    p = n(434404),
    f = n(981631),
    h = n(30513),
    x = n(486324),
    b = n(200299),
    j = n(388032),
    _ = n(773100);
let v = function (e) {
    let { guild: t } = e,
        v = t.features.has(f.oNc.BANNER),
        O = i.useCallback(
            (e, i) => {
                if (null == e || void 0 === i) return void p.Z.saveGuild(t.id, { homeHeader: null });
                (0, s.ZDy)(async () => {
                    let { default: l } = await Promise.all([n.e('91689'), n.e('59732'), n.e('77942')]).then(n.bind(n, 712451));
                    return (n) =>
                        (0, r.jsx)(
                            l,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })(
                                {
                                    imageUri: e,
                                    file: i,
                                    onCrop: (e) => {
                                        let { imageUri: n } = e;
                                        return p.Z.saveGuild(t.id, { homeHeader: n });
                                    },
                                    uploadType: x.pC.HOME_HEADER
                                },
                                n
                            )
                        );
                });
            },
            [t.id]
        ),
        C = i.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    (0, a.yw)(f.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: f.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: f.qAy.LEARN_MORE
                        },
                        guild_id: null == t ? void 0 : t.id,
                        location_stack: []
                    }),
                    (0, c.Z)({
                        analyticsLocations: [],
                        analyticsSourceLocation: {
                            section: f.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: f.qAy.ONBOARDING_EDIT,
                            page: f.ZY5.GUILD_SETTINGS
                        },
                        guild: t,
                        perks: (0, h.XO)()
                    }));
            },
            [t]
        ),
        y = (0, r.jsx)(d.Z, {
            image: t.homeHeader,
            makeURL: (e) =>
                null != e
                    ? g.ZP.getGuildHomeHeaderURL({
                          id: t.id,
                          homeHeader: e
                      })
                    : null,
            disabled: !v,
            onChange: O,
            hint: j.intl.string(j.t.NyXznp),
            enabled: v,
            maxFileSizeBytes: b.B
        });
    return v
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: _.sectionHeader,
                      children: [
                          (0, r.jsx)(s.X6q, {
                              className: _.header,
                              variant: 'heading-lg/extrabold',
                              children: j.intl.string(j.t.BBj1nZ)
                          }),
                          (0, r.jsx)(o.Z, {
                              className: _.boostIndicator,
                              guild: t,
                              guildFeature: f.oNc.BANNER,
                              onClick: C
                          })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: _.section,
                      children: [
                          (0, r.jsxs)('div', {
                              className: _.homeBannerExplainer,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: j.intl.string(j.t.Vwintr)
                                  }),
                                  (0, r.jsx)(u.Z, {
                                      color: l.Tt.BRAND,
                                      className: _.uploadButton,
                                      buttonCTA: j.intl.string(j.t.yG2pUl),
                                      onChange: O,
                                      maxFileSizeBytes: b.B
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', { children: y })
                      ]
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: _.sectionHeader,
                      children: [
                          (0, r.jsx)(s.X6q, {
                              className: _.header,
                              variant: 'heading-lg/extrabold',
                              children: j.intl.string(j.t.BBj1nZ)
                          }),
                          (0, r.jsx)(o.Z, {
                              className: _.boostIndicator,
                              guild: t,
                              guildFeature: f.oNc.BANNER,
                              onClick: C
                          })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: _.section,
                      children: [
                          (0, r.jsxs)('div', {
                              className: _.homeBannerExplainer,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: j.intl.string(j.t.Vwintr)
                                  }),
                                  (0, r.jsxs)(s.gtL, {
                                      className: _.upsellButton,
                                      innerClassName: _.upsellButtonInner,
                                      color: l.zx.Colors.GREEN,
                                      onClick: C,
                                      children: [
                                          (0, r.jsx)(m.Z, {
                                              height: 16,
                                              width: 16
                                          }),
                                          j.intl.string(j.t['+7XY39'])
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              children: (0, r.jsx)(s.P3F, {
                                  'aria-hidden': !0,
                                  tabIndex: -1,
                                  onClick: C,
                                  children: y
                              })
                          })
                      ]
                  })
              ]
          });
};
