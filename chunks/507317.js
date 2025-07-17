n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(755721),
    s = n(481060),
    a = n(367907),
    o = n(807582),
    c = n(26323),
    d = n(516129),
    u = n(345861),
    m = n(768581),
    g = n(434404),
    p = n(981631),
    f = n(30513),
    h = n(486324),
    x = n(200299),
    b = n(388032),
    j = n(773100);
let _ = function (e) {
    let { guild: t } = e,
        _ = t.features.has(p.oNc.BANNER),
        v = i.useCallback(
            (e, i) => {
                if (null == e || void 0 === i) return void g.Z.saveGuild(t.id, { homeHeader: null });
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
                                        return g.Z.saveGuild(t.id, { homeHeader: n });
                                    },
                                    uploadType: h.pC.HOME_HEADER
                                },
                                n
                            )
                        );
                });
            },
            [t.id]
        ),
        O = i.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    (0, a.yw)(p.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: p.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: p.qAy.LEARN_MORE
                        },
                        guild_id: null == t ? void 0 : t.id,
                        location_stack: []
                    }),
                    (0, c.Z)({
                        analyticsLocations: [],
                        analyticsSourceLocation: {
                            section: p.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: p.qAy.ONBOARDING_EDIT,
                            page: p.ZY5.GUILD_SETTINGS
                        },
                        guild: t,
                        perks: (0, f.XO)()
                    }));
            },
            [t]
        ),
        C = (0, r.jsx)(d.Z, {
            image: t.homeHeader,
            makeURL: (e) =>
                null != e
                    ? m.ZP.getGuildHomeHeaderURL({
                          id: t.id,
                          homeHeader: e
                      })
                    : null,
            disabled: !_,
            onChange: v,
            hint: b.intl.string(b.t.NyXznp),
            enabled: _,
            maxFileSizeBytes: x.B
        });
    return _
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: j.sectionHeader,
                      children: [
                          (0, r.jsx)(s.X6q, {
                              className: j.header,
                              variant: 'heading-lg/extrabold',
                              children: b.intl.string(b.t.BBj1nZ)
                          }),
                          (0, r.jsx)(o.Z, {
                              className: j.boostIndicator,
                              guild: t,
                              guildFeature: p.oNc.BANNER,
                              onClick: O
                          })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: j.section,
                      children: [
                          (0, r.jsxs)('div', {
                              className: j.homeBannerExplainer,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: b.intl.string(b.t.Vwintr)
                                  }),
                                  (0, r.jsx)(u.Z, {
                                      color: l.Tt.BRAND,
                                      className: j.uploadButton,
                                      buttonCTA: b.intl.string(b.t.yG2pUl),
                                      onChange: v,
                                      maxFileSizeBytes: x.B
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', { children: C })
                      ]
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: j.sectionHeader,
                      children: [
                          (0, r.jsx)(s.X6q, {
                              className: j.header,
                              variant: 'heading-lg/extrabold',
                              children: b.intl.string(b.t.BBj1nZ)
                          }),
                          (0, r.jsx)(o.Z, {
                              className: j.boostIndicator,
                              guild: t,
                              guildFeature: p.oNc.BANNER,
                              onClick: O
                          })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: j.section,
                      children: [
                          (0, r.jsxs)('div', {
                              className: j.homeBannerExplainer,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      className: j.bannerDescription,
                                      children: b.intl.string(b.t.Vwintr)
                                  }),
                                  (0, r.jsx)(s.zxk, {
                                      variant: 'expressive',
                                      icon: s.$Eu,
                                      text: b.intl.string(b.t['+7XY39']),
                                      onClick: O
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              children: (0, r.jsx)(s.P3F, {
                                  'aria-hidden': !0,
                                  tabIndex: -1,
                                  onClick: O,
                                  children: C
                              })
                          })
                      ]
                  })
              ]
          });
};
