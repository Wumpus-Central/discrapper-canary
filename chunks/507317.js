n.d(t, { Z: () => N });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(367907),
    l = n(807582),
    o = n(26323),
    c = n(516129),
    d = n(345861),
    u = n(709586),
    m = n(768581),
    g = n(434404),
    p = n(981631),
    h = n(30513),
    f = n(486324),
    b = n(200299),
    x = n(388032),
    j = n(773100);
let N = function (e) {
    let { guild: t } = e,
        N = t.hasFeature(p.oNc.BANNER),
        _ = i.useCallback(
            (e, i) => {
                if (null == e || void 0 === i) return void g.Z.saveGuild(t.id, { homeHeader: null });
                (0, s.ZDy)(async () => {
                    let { default: s } = await Promise.all([n.e('91689'), n.e('59732'), n.e('25005'), n.e('64989')]).then(n.bind(n, 73620));
                    return (n) =>
                        (0, r.jsx)(
                            s,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
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
                                    uploadType: f.pC.HOME_HEADER
                                },
                                n
                            )
                        );
                });
            },
            [t.id]
        ),
        v = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, a.yw)(p.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: p.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: p.qAy.LEARN_MORE
                        },
                        guild_id: null == t ? void 0 : t.id,
                        location_stack: []
                    }),
                    (0, o.Z)({
                        analyticsLocations: [],
                        analyticsSourceLocation: {
                            section: p.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: p.qAy.ONBOARDING_EDIT,
                            page: p.ZY5.GUILD_SETTINGS
                        },
                        guild: t,
                        perks: (0, h.XO)()
                    });
            },
            [t]
        ),
        C = (0, r.jsx)(c.Z, {
            image: t.homeHeader,
            makeURL: (e) =>
                null != e
                    ? m.ZP.getGuildHomeHeaderURL({
                          id: t.id,
                          homeHeader: e
                      })
                    : null,
            disabled: !N,
            onChange: _,
            hint: x.NW.string(x.t.NyXznp),
            enabled: N,
            maxFileSizeBytes: b.B
        });
    return N
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: j.sectionHeader,
                      children: [
                          (0, r.jsx)(s.X6q, {
                              className: j.header,
                              variant: 'heading-lg/extrabold',
                              children: x.NW.string(x.t.BBj1nZ)
                          }),
                          (0, r.jsx)(l.Z, {
                              className: j.boostIndicator,
                              guild: t,
                              guildFeature: p.oNc.BANNER,
                              onClick: v
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
                                      children: x.NW.string(x.t.Vwintr)
                                  }),
                                  (0, r.jsx)(d.Z, {
                                      color: s.Ttl.BRAND,
                                      className: j.uploadButton,
                                      buttonCTA: x.NW.string(x.t.yG2pUl),
                                      onChange: _,
                                      maxFileSizeBytes: b.B
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
                              children: x.NW.string(x.t.BBj1nZ)
                          }),
                          (0, r.jsx)(l.Z, {
                              className: j.boostIndicator,
                              guild: t,
                              guildFeature: p.oNc.BANNER,
                              onClick: v
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
                                      children: x.NW.string(x.t.Vwintr)
                                  }),
                                  (0, r.jsxs)(s.gtL, {
                                      className: j.upsellButton,
                                      innerClassName: j.upsellButtonInner,
                                      color: s.zxk.Colors.GREEN,
                                      onClick: v,
                                      children: [
                                          (0, r.jsx)(u.Z, {
                                              height: 16,
                                              width: 16
                                          }),
                                          (0, r.jsx)(s.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'text-normal',
                                              children: x.NW.string(x.t['+7XY39'])
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              children: (0, r.jsx)(s.P3F, {
                                  'aria-hidden': !0,
                                  tabIndex: -1,
                                  onClick: v,
                                  children: C
                              })
                          })
                      ]
                  })
              ]
          });
};
