n.d(t, { Z: () => N });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(367907),
    l = n(807582),
    o = n(26323),
    c = n(516129),
    d = n(813197),
    u = n(709586),
    m = n(768581),
    p = n(434404),
    g = n(981631),
    h = n(30513),
    f = n(486324),
    b = n(200299),
    x = n(388032),
    j = n(339945);
let N = function (e) {
    let { guild: t } = e,
        N = t.hasFeature(g.oNc.BANNER),
        v = i.useCallback(
            (e, i) => {
                if (null == e || void 0 === i) {
                    p.Z.saveGuild(t.id, { homeHeader: null });
                    return;
                }
                (0, s.ZDy)(async () => {
                    let { default: s } = await Promise.all([n.e('91689'), n.e('59732'), n.e('25005'), n.e('29166')]).then(n.bind(n, 73620));
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
                                        return p.Z.saveGuild(t.id, { homeHeader: n });
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
        _ = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, a.yw)(g.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
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
                        perks: (0, h.XO)()
                    });
            },
            [t]
        ),
        O = (0, r.jsx)(c.Z, {
            image: t.homeHeader,
            makeURL: (e) =>
                null != e
                    ? m.ZP.getGuildHomeHeaderURL({
                          id: t.id,
                          homeHeader: e
                      })
                    : null,
            disabled: !N,
            onChange: v,
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
                              guildFeature: g.oNc.BANNER,
                              onClick: _
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
                                  (0, r.jsxs)(s.zxk, {
                                      color: s.Ttl.BRAND,
                                      className: j.uploadButton,
                                      children: [
                                          x.NW.string(x.t.yG2pUl),
                                          (0, r.jsx)(d.ZP, {
                                              onChange: v,
                                              maxFileSizeBytes: b.B
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', { children: O })
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
                              guildFeature: g.oNc.BANNER,
                              onClick: _
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
                                      onClick: _,
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
                                  onClick: _,
                                  children: O
                              })
                          })
                      ]
                  })
              ]
          });
};
