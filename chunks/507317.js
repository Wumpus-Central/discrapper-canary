n.d(t, { Z: () => j });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(367907),
    s = n(807582),
    o = n(26323),
    c = n(516129),
    d = n(345861),
    u = n(768581),
    m = n(434404),
    g = n(981631),
    p = n(30513),
    h = n(486324),
    f = n(200299),
    b = n(388032),
    x = n(359449);
let j = function (e) {
    let { guild: t } = e,
        j = t.features.has(g.oNc.BANNER),
        v = i.useCallback(
            (e, i) => {
                if (null == e || void 0 === i) return void m.Z.saveGuild(t.id, { homeHeader: null });
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([n.e("91689"), n.e("59732"), n.e("63188")]).then(
                        n.bind(n, 712451),
                    );
                    return (n) =>
                        (0, r.jsx)(
                            l,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
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
                                        return m.Z.saveGuild(t.id, { homeHeader: n });
                                    },
                                    uploadType: h.pC.HOME_HEADER,
                                },
                                n,
                            ),
                        );
                });
            },
            [t.id],
        ),
        _ = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, a.yw)(g.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: g.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: g.qAy.LEARN_MORE,
                        },
                        guild_id: null == t ? void 0 : t.id,
                        location_stack: [],
                    }),
                    (0, o.Z)({
                        analyticsLocations: [],
                        analyticsSourceLocation: {
                            section: g.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: g.qAy.ONBOARDING_EDIT,
                            page: g.ZY5.GUILD_SETTINGS,
                        },
                        guild: t,
                        perks: (0, p.XO)(),
                    });
            },
            [t],
        ),
        O = (0, r.jsx)(c.Z, {
            image: t.homeHeader,
            makeURL: (e) =>
                null != e
                    ? u.ZP.getGuildHomeHeaderURL({
                          id: t.id,
                          homeHeader: e,
                      })
                    : null,
            disabled: !j,
            onChange: v,
            hint: b.intl.string(b.t.NyXznp),
            enabled: j,
            maxFileSizeBytes: f.B,
        });
    return j
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: x.sectionHeader,
                      children: [
                          (0, r.jsx)(l.X6q, {
                              className: x.header,
                              variant: "heading-lg/extrabold",
                              children: b.intl.string(b.t.BBj1nZ),
                          }),
                          (0, r.jsx)(s.Z, {
                              className: x.boostIndicator,
                              guild: t,
                              guildFeature: g.oNc.BANNER,
                              onClick: _,
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: x.section,
                      children: [
                          (0, r.jsxs)("div", {
                              className: x.homeBannerExplainer,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "header-secondary",
                                      children: b.intl.string(b.t.Vwintr),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: x.uploadButton,
                                      children: (0, r.jsx)(d.Z, {
                                          onChange: v,
                                          maxFileSizeBytes: f.B,
                                          text: b.intl.string(b.t.yG2pUl),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", { children: O }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: x.sectionHeader,
                      children: [
                          (0, r.jsx)(l.X6q, {
                              className: x.header,
                              variant: "heading-lg/extrabold",
                              children: b.intl.string(b.t.BBj1nZ),
                          }),
                          (0, r.jsx)(s.Z, {
                              className: x.boostIndicator,
                              guild: t,
                              guildFeature: g.oNc.BANNER,
                              onClick: _,
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: x.section,
                      children: [
                          (0, r.jsxs)("div", {
                              className: x.homeBannerExplainer,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "header-secondary",
                                      className: x.bannerDescription,
                                      children: b.intl.string(b.t.Vwintr),
                                  }),
                                  (0, r.jsx)(l.zxk, {
                                      variant: "expressive",
                                      icon: l.$Eu,
                                      text: b.intl.string(b.t["+7XY39"]),
                                      onClick: _,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              children: (0, r.jsx)(l.P3F, {
                                  "aria-hidden": !0,
                                  tabIndex: -1,
                                  onClick: _,
                                  children: O,
                              }),
                          }),
                      ],
                  }),
              ],
          });
};
