n.d(t, { A: () => U });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(793574),
    o = n(688810),
    d = n(422936),
    c = n(234419),
    u = n(10368),
    m = n(535646),
    g = n(511484),
    _ = n(202639),
    x = n(811611),
    A = n(407217),
    h = n(101058),
    p = n(207803),
    T = n(84540),
    f = n(836602),
    S = n(954571),
    E = n(515718),
    b = n(927578),
    C = n(919395),
    N = n(884546),
    v = n(597551),
    I = n(230084),
    j = n(180020),
    y = n(212168),
    O = n(730588),
    R = n(63675),
    P = n(253604),
    L = n(652215),
    D = n(788868),
    G = n(355097),
    M = n(985018),
    k = n(686294);
function U(e) {
    let { user: t, isVisible: n, shouldShow: U } = e,
        w = b.Ay.isPremium(t),
        V = b.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: B,
            pendingThemeColors: F,
            tryItOutThemeColors: H,
            tryItOutAvatar: z,
            tryItOutBanner: Y,
        } = (0, l.cf)([f.A], () => {
            let e = f.A.getPendingChanges(),
                t = f.A.getErrors(),
                n = f.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: X, onShuffle: K } = (0, u.A)(),
        W = s.useRef(null);
    (0, v.A)(W, G._F.TRY_IT_OUT);
    let {
            analyticsLocations: Z,
            newestAnalyticsLocation: q,
            sourceAnalyticsLocations: Q,
        } = (0, o.Ay)(r.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        J = (e) => {
            e &&
                (Y?.startsWith("https:") === !0
                    ? fetch(Y)
                          .then((e) => e.blob())
                          .then((e) => (0, E.We)(e))
                          .then((e) => {
                              (0, T.p)({ avatar: z, themeColors: H, banner: e });
                          })
                          .catch(() => {
                              (0, T.p)({ avatar: z, themeColors: H });
                          })
                    : null != Y
                      ? (0, T.p)({ avatar: z, themeColors: H, banner: Y })
                      : (0, T.p)({ avatar: z, themeColors: H }),
                (0, C.WU)(z),
                S.default.track(L.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: X }));
        };
    s.useEffect(() => {
        n &&
            S.default.track(L.HAw.PREMIUM_UPSELL_VIEWED, {
                type: D.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: L.liQ.USER_SETTINGS },
                location_stack: Q,
            });
    }, [Q, t, n]);
    let $ = (0, c.V)()?.subscription_trial?.sku_id === D.pe.TIER_2,
        ee = (0, d.O)(),
        et = (0, g.U9)(ee, D.pe.TIER_2);
    return U
        ? (0, i.jsx)(o.f5, {
              value: Z,
              children: (0, i.jsxs)(y.A, {
                  ref: W,
                  className: k.MT,
                  type: y.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(N.A, {
                          stickyPreview: !1,
                          layoutClassName: k.th,
                          profilePreviewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(a.tvc, { size: "md", color: "currentColor", className: k.PC }),
                                  M.intl.string(M.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(m.A, { preset: X, onShuffle: K }), (0, i.jsx)(P.A, { user: t })],
                          }),
                          children: (0, i.jsxs)("div", {
                              className: k.EN,
                              children: [
                                  (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)(a.Heading, {
                                              variant: "heading-xl/extrabold",
                                              children: M.intl.string(M.t["2zGdAW"]),
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              className: k.h_,
                                              variant: "text-sm/normal",
                                              children: M.intl.string(M.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(R.A, {
                                      className: k.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, h.V7)({ userId: t.id, image: z ?? B }),
                                      pendingColors: H ?? F,
                                      onThemeColorsChange: p.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, i.jsx)(O.A, {
                                      className: k.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != Y,
                                      onBannerChange: p.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !V &&
                                      (0, i.jsx)(I.A, {
                                          className: k.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: p.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: M.intl.string(M.t["7z0D1c"]),
                                          sectionTitle: M.intl.string(M.t.vtFfPX),
                                      }),
                                  (0, i.jsx)(j.A, { user: t, className: k.fz }),
                                  !$ &&
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-sm/normal",
                                          children: M.intl.string(M.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !$ &&
                          (0, i.jsx)(_.d, {
                              onSubscribeModalClose: J,
                              className: k.Kv,
                              showUpsell: !0,
                              text: M.intl.format(M.t.TmfgI2, {
                                  onClick: () => {
                                      (0, A.K)({ analyticsSource: q, onSubscribeFinish: J });
                                  },
                              }),
                              button: w
                                  ? M.intl.string(M.t.AfRWI8)
                                  : et
                                    ? M.intl.formatToPlainString(M.t.bkQ4bH, { percent: ee?.discount.amount })
                                    : M.intl.string(M.t.pj0XBN),
                              position: "inline",
                          }),
                      $ &&
                          (0, i.jsxs)("div", {
                              children: [
                                  (0, i.jsx)("div", { className: k.BU }),
                                  (0, i.jsx)(x.Ay, {
                                      type: D.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: D.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
