n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    s = n(367907),
    a = n(807582),
    o = n(26323),
    c = n(516129),
    u = n(345861),
    d = n(768581),
    g = n(434404),
    m = n(981631),
    p = n(30513),
    f = n(486324),
    h = n(200299),
    x = n(388032),
    b = n(197530);
let j = function (e) {
    let { guild: t } = e,
        j = t.features.has(m.GuildFeatures.BANNER),
        _ = i.useCallback(
            (e, i) => {
                if (null == e || void 0 === i) return void g.Z.saveGuild(t.id, { homeHeader: null });
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([n.e("91689"), n.e("59732"), n.e("7016")]).then(
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
                                        return g.Z.saveGuild(t.id, { homeHeader: n });
                                    },
                                    uploadType: f.pC.HOME_HEADER,
                                },
                                n,
                            ),
                        );
                });
            },
            [t.id],
        ),
        v = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, s.yw)(m.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: m.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: m.qAy.LEARN_MORE,
                        },
                        guild_id: null == t ? void 0 : t.id,
                        location_stack: [],
                    }),
                    (0, o.Z)({
                        analyticsLocations: [],
                        analyticsSourceLocation: {
                            section: m.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: m.qAy.ONBOARDING_EDIT,
                            page: m.ZY5.GUILD_SETTINGS,
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
                    ? d.ZP.getGuildHomeHeaderURL({
                          id: t.id,
                          homeHeader: e,
                      })
                    : null,
            disabled: !j,
            onChange: _,
            hint: x.intl.string(x.t.NyXznh),
            enabled: j,
            maxFileSizeBytes: h.B,
        });
    return j
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: b.sectionHeader,
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: b.header,
                              variant: "heading-lg/extrabold",
                              children: x.intl.string(x.t.BBj1nY),
                          }),
                          (0, r.jsx)(a.Z, {
                              className: b.boostIndicator,
                              guild: t,
                              guildFeature: m.GuildFeatures.BANNER,
                              onClick: v,
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: b.section,
                      children: [
                          (0, r.jsxs)("div", {
                              className: b.homeBannerExplainer,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: x.intl.string(x.t.Vwintv),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: b.uploadButton,
                                      children: (0, r.jsx)(u.Z, {
                                          onChange: _,
                                          maxFileSizeBytes: h.B,
                                          text: x.intl.string(x.t.yG2pUi),
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
                      className: b.sectionHeader,
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: b.header,
                              variant: "heading-lg/extrabold",
                              children: x.intl.string(x.t.BBj1nY),
                          }),
                          (0, r.jsx)(a.Z, {
                              className: b.boostIndicator,
                              guild: t,
                              guildFeature: m.GuildFeatures.BANNER,
                              onClick: v,
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: b.section,
                      children: [
                          (0, r.jsxs)("div", {
                              className: b.homeBannerExplainer,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      className: b.bannerDescription,
                                      children: x.intl.string(x.t.Vwintv),
                                  }),
                                  (0, r.jsx)(l.Button, {
                                      variant: "expressive",
                                      icon: l.Ucv,
                                      text: x.intl.string(x.t["+7XY31"]),
                                      onClick: v,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              children: (0, r.jsx)(l.P3F, {
                                  "aria-hidden": !0,
                                  tabIndex: -1,
                                  onClick: v,
                                  children: O,
                              }),
                          }),
                      ],
                  }),
              ],
          });
};
