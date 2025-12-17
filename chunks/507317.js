n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(367907),
    s = n(807582),
    o = n(26323),
    c = n(516129),
    d = n(345861),
    u = n(768581),
    g = n(434404),
    f = n(981631),
    m = n(30513),
    b = n(486324),
    p = n(200299),
    h = n(388032),
    x = n(551952);
let j = function (e) {
    let { guild: t } = e,
        j = t.features.has(f.GuildFeatures.BANNER),
        v = i.useCallback(
            (e, i) => {
                if (null == e || void 0 === i) return void g.Z.saveGuild(t.id, { homeHeader: null });
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([
                        n.e("30409"),
                        n.e("91689"),
                        n.e("59732"),
                        n.e("76543"),
                    ]).then(n.bind(n, 712451));
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
                                    uploadType: b.pC.HOME_HEADER,
                                },
                                n,
                            ),
                        );
                });
            },
            [t.id],
        ),
        O = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, a.yw)(f.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: f.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: f.qAy.LEARN_MORE,
                        },
                        guild_id: null == t ? void 0 : t.id,
                        location_stack: [],
                    }),
                    (0, o.Z)({
                        analyticsLocations: [],
                        analyticsSourceLocation: {
                            section: f.jXE.GUILD_SETTINGS_ONBOARDING,
                            object: f.qAy.ONBOARDING_EDIT,
                            page: f.ZY5.GUILD_SETTINGS,
                        },
                        guild: t,
                        perks: (0, m.XO)(),
                    });
            },
            [t],
        ),
        C = (0, r.jsx)(c.Z, {
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
            hint: h.intl.string(h.t.NyXznh),
            enabled: j,
            maxFileSizeBytes: p.B,
        });
    return j
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: x.sectionHeader,
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: x.header,
                              variant: "heading-lg/extrabold",
                              children: h.intl.string(h.t.BBj1nY),
                          }),
                          (0, r.jsx)(s.Z, {
                              className: x.boostIndicator,
                              guild: t,
                              guildFeature: f.GuildFeatures.BANNER,
                              onClick: O,
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
                                      color: "text-default",
                                      children: h.intl.string(h.t.Vwintv),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: x.uploadButton,
                                      children: (0, r.jsx)(d.Z, {
                                          onChange: v,
                                          maxFileSizeBytes: p.B,
                                          text: h.intl.string(h.t.yG2pUi),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", { children: C }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: x.sectionHeader,
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: x.header,
                              variant: "heading-lg/extrabold",
                              children: h.intl.string(h.t.BBj1nY),
                          }),
                          (0, r.jsx)(s.Z, {
                              className: x.boostIndicator,
                              guild: t,
                              guildFeature: f.GuildFeatures.BANNER,
                              onClick: O,
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
                                      color: "text-default",
                                      className: x.bannerDescription,
                                      children: h.intl.string(h.t.Vwintv),
                                  }),
                                  (0, r.jsx)(l.Button, {
                                      variant: "expressive",
                                      icon: l.Ucv,
                                      text: h.intl.string(h.t["+7XY31"]),
                                      onClick: O,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              children: (0, r.jsx)(l.P3F, {
                                  "aria-hidden": !0,
                                  tabIndex: -1,
                                  onClick: O,
                                  children: C,
                              }),
                          }),
                      ],
                  }),
              ],
          });
};
