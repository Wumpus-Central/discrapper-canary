n.d(t, {
    A: () => M,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(631670),
    o = n(793574),
    c = n(688810),
    d = n(422936),
    u = n(234419),
    _ = n(10368),
    p = n(535646),
    m = n(511484),
    g = n(202639),
    A = n(811611),
    f = n(407217),
    h = n(101058),
    b = n(207803),
    E = n(193658),
    x = n(752319),
    O = n(954571),
    C = n(927578),
    I = n(884546),
    T = n(230084),
    S = n(180020),
    j = n(212168),
    v = n(730588),
    N = n(63675),
    y = n(253604),
    P = n(652215),
    R = n(788868),
    D = n(355097),
    w = n(985018),
    L = n(567567);

function M(e) {
    var t, n;
    let { user: M, isVisible: U, shouldShow: G } = e,
        k = C.Ay.isPremium(M),
        V = C.Ay.canUseAnimatedAvatar(M),
        {
            pendingAvatar: H,
            pendingThemeColors: B,
            tryItOutThemeColors: F,
            tryItOutAvatar: Y,
            tryItOutBanner: W,
        } = (0, l.cf)([x.A], () => {
            var e, t;
            let n = x.A.getAllPending(),
                r = x.A.getErrors();
            return (
                (e = (function (e) {
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
                })({}, n, x.A.getAllTryItOut())),
                (t = t =
                    {
                        errors: r,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e
            );
        }),
        { preset: z, onShuffle: K } = (0, _.A)(),
        Z = i.useRef(null);
    (0, E.A)(Z, D._F.TRY_IT_OUT);
    let {
            analyticsLocations: X,
            newestAnalyticsLocation: q,
            sourceAnalyticsLocations: J,
        } = (0, c.Ay)(o.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        Q = (e) => {
            e &&
                ((0, a.zq)(Y),
                (0, b.Zz)(F),
                (0, b.Dv)(W),
                O.default.track(P.HAw.TRY_IT_OUT_PRESET_SELECTED, {
                    preset: z,
                }));
        };
    i.useEffect(() => {
        U &&
            O.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
                type: R.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: {
                    page: P.liQ.USER_SETTINGS,
                },
                location_stack: J,
            });
    }, [J, M, U]);
    let $ = (null == (n = (0, u.V)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === R.pe.TIER_2,
        ee = (0, d.O)(),
        et = (0, m.U9)(ee, R.pe.TIER_2);
    return G
        ? (0, r.jsx)(c.f5, {
              value: X,
              children: (0, r.jsxs)(j.A, {
                  ref: Z,
                  className: L.MT,
                  type: j.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, r.jsx)(I.A, {
                          layoutClassName: L.th,
                          profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(s.tvc, {
                                      size: "md",
                                      color: "currentColor",
                                      className: L.PC,
                                  }),
                                  w.intl.string(w.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(p.A, {
                                      preset: z,
                                      onShuffle: K,
                                  }),
                                  (0, r.jsx)(y.A, {
                                      user: M,
                                  }),
                              ],
                          }),
                          children: (0, r.jsxs)("div", {
                              className: L.EN,
                              children: [
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(s.Heading, {
                                              variant: "heading-xl/extrabold",
                                              children: w.intl.string(w.t["2zGdAW"]),
                                          }),
                                          (0, r.jsx)(s.Text, {
                                              className: L.h_,
                                              variant: "text-sm/normal",
                                              children: w.intl.string(w.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(N.A, {
                                      className: L.fz,
                                      user: M,
                                      pendingAvatarSrc: (0, h.V7)({
                                          userId: M.id,
                                          image: null != Y ? Y : H,
                                      }),
                                      pendingColors: null != F ? F : B,
                                      onThemeColorsChange: b.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, r.jsx)(v.A, {
                                      className: L.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != W,
                                      onBannerChange: b.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !V &&
                                      (0, r.jsx)(T.A, {
                                          className: L.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: b.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: w.intl.string(w.t["7z0D1c"]),
                                          sectionTitle: w.intl.string(w.t.vtFfPX),
                                      }),
                                  (0, r.jsx)(S.A, {
                                      user: M,
                                      className: L.fz,
                                  }),
                                  !$ &&
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-sm/normal",
                                          children: w.intl.string(w.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !$ &&
                          (0, r.jsx)(g.d, {
                              onSubscribeModalClose: Q,
                              className: L.Kv,
                              showUpsell: !0,
                              text: w.intl.format(w.t.TmfgI2, {
                                  onClick: () => {
                                      (0, f.K)({
                                          analyticsSource: q,
                                          onSubscribeFinish: Q,
                                      });
                                  },
                              }),
                              button: k
                                  ? w.intl.string(w.t.AfRWI8)
                                  : et
                                    ? w.intl.formatToPlainString(w.t.bkQ4bH, {
                                          percent: null == ee ? void 0 : ee.discount.amount,
                                      })
                                    : w.intl.string(w.t.pj0XBN),
                              position: "inline",
                          }),
                      $ &&
                          (0, r.jsxs)("div", {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: L.BU,
                                  }),
                                  (0, r.jsx)(A.Ay, {
                                      type: R.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: R.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
