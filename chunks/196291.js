n.d(t, { A: () => w });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(403581),
    r = n(534514),
    o = n(834730),
    d = n(793574),
    u = n(688810),
    c = n(422936),
    g = n(234419),
    m = n(10368),
    _ = n(535646),
    A = n(511484),
    h = n(202639),
    p = n(811611),
    x = n(407217),
    E = n(101058),
    T = n(207803),
    S = n(84540),
    f = n(836602),
    b = n(954571),
    C = n(515718),
    v = n(927578),
    N = n(884546),
    I = n(597551),
    y = n(230084),
    j = n(180020),
    O = n(212168),
    R = n(730588),
    L = n(63675),
    D = n(253604),
    P = n(652215),
    G = n(788868),
    M = n(355097),
    U = n(985018),
    k = n(461414);
function w(e) {
    let { user: t, isVisible: n, shouldShow: w } = e,
        V = v.Ay.isPremium(t),
        B = v.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: F,
            pendingThemeColors: z,
            tryItOutThemeColors: H,
            tryItOutAvatar: Y,
            tryItOutBanner: X,
        } = (0, l.cf)([f.A], () => {
            let e = f.A.getPendingChanges(),
                t = f.A.getErrors(),
                n = f.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: K, onShuffle: W } = (0, m.A)(),
        Z = s.useRef(null);
    (0, I.A)(Z, M._F.TRY_IT_OUT);
    let { analyticsLocations: q, sourceAnalyticsLocations: Q } = (0, u.Ay)(d.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        J = (e) => {
            e &&
                (X?.startsWith("https:") === !0
                    ? fetch(X)
                          .then((e) => e.blob())
                          .then((e) => (0, C.We)(e))
                          .then((e) => {
                              (0, S.p)({ avatar: Y, themeColors: H, banner: e });
                          })
                          .catch(() => {
                              (0, S.p)({ avatar: Y, themeColors: H });
                          })
                    : null != X
                      ? (0, S.p)({ avatar: Y, themeColors: H, banner: X })
                      : (0, S.p)({ avatar: Y, themeColors: H }),
                b.default.track(P.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: K }));
        };
    s.useEffect(() => {
        n &&
            b.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
                type: G.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: P.liQ.USER_SETTINGS },
                location_stack: Q,
            });
    }, [Q, t, n]);
    let $ = (0, g.V)()?.subscription_trial?.sku_id === G.pe.TIER_2,
        ee = (0, c.O)(),
        et = (0, A.U9)(ee, G.pe.TIER_2);
    return w
        ? (0, i.jsx)(u.f5, {
              value: q,
              children: (0, i.jsxs)(O.A, {
                  ref: Z,
                  className: k.MT,
                  type: O.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(N.A, {
                          stickyPreview: !1,
                          layoutClassName: k.th,
                          profilePreviewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(a.t, { size: "md", color: "currentColor", className: k.PC }),
                                  U.intl.string(U.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(_.A, { preset: K, onShuffle: W }), (0, i.jsx)(D.A, { user: t })],
                          }),
                          children: (0, i.jsxs)("div", {
                              className: k.EN,
                              children: [
                                  (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)(r.D, {
                                              variant: "heading-xl/extrabold",
                                              children: U.intl.string(U.t["2zGdAW"]),
                                          }),
                                          (0, i.jsx)(o.E, {
                                              className: k.h_,
                                              variant: "text-sm/normal",
                                              children: U.intl.string(U.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(L.A, {
                                      className: k.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, E.V7)({ userId: t.id, image: Y ?? F }),
                                      pendingColors: H ?? z,
                                      onThemeColorsChange: T.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, i.jsx)(R.A, {
                                      className: k.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != X,
                                      onBannerChange: T.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !B &&
                                      (0, i.jsx)(y.A, {
                                          className: k.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: T.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: U.intl.string(U.t["7z0D1c"]),
                                          sectionTitle: U.intl.string(U.t.vtFfPX),
                                      }),
                                  (0, i.jsx)(j.A, { user: t, className: k.fz }),
                                  !$ &&
                                      (0, i.jsx)(o.E, {
                                          variant: "text-sm/normal",
                                          children: U.intl.string(U.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !$ &&
                          (0, i.jsx)(h.d, {
                              onSubscribeModalClose: J,
                              className: k.Kv,
                              showUpsell: !0,
                              text: U.intl.format(U.t.TmfgI2, {
                                  onClick: () => {
                                      (0, x.K)({ onSubscribeFinish: J });
                                  },
                              }),
                              button: V
                                  ? U.intl.string(U.t.AfRWI8)
                                  : et
                                    ? U.intl.formatToPlainString(U.t.bkQ4bH, { percent: ee?.discount.amount })
                                    : U.intl.string(U.t.pj0XBN),
                              position: "inline",
                          }),
                      $ &&
                          (0, i.jsxs)("div", {
                              children: [
                                  (0, i.jsx)("div", { className: k.BU }),
                                  (0, i.jsx)(p.Ay, {
                                      type: G.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: G.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
