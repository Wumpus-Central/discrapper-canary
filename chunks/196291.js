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
    b = n(515718),
    E = n(927578),
    C = n(884546),
    N = n(597551),
    v = n(230084),
    I = n(180020),
    j = n(212168),
    y = n(730588),
    O = n(63675),
    R = n(253604),
    L = n(652215),
    P = n(788868),
    D = n(355097),
    G = n(985018),
    M = n(63261);
function U(e) {
    let { user: t, isVisible: n, shouldShow: U } = e,
        k = E.Ay.isPremium(t),
        w = E.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: V,
            pendingThemeColors: B,
            tryItOutThemeColors: F,
            tryItOutAvatar: H,
            tryItOutBanner: z,
        } = (0, l.cf)([f.A], () => {
            let e = f.A.getPendingChanges(),
                t = f.A.getErrors(),
                n = f.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: Y, onShuffle: X } = (0, u.A)(),
        K = s.useRef(null);
    (0, N.A)(K, D._F.TRY_IT_OUT);
    let { analyticsLocations: W, sourceAnalyticsLocations: Z } = (0, o.Ay)(r.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        q = (e) => {
            e &&
                (z?.startsWith("https:") === !0
                    ? fetch(z)
                          .then((e) => e.blob())
                          .then((e) => (0, b.We)(e))
                          .then((e) => {
                              (0, T.p)({ avatar: H, themeColors: F, banner: e });
                          })
                          .catch(() => {
                              (0, T.p)({ avatar: H, themeColors: F });
                          })
                    : null != z
                      ? (0, T.p)({ avatar: H, themeColors: F, banner: z })
                      : (0, T.p)({ avatar: H, themeColors: F }),
                S.default.track(L.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: Y }));
        };
    s.useEffect(() => {
        n &&
            S.default.track(L.HAw.PREMIUM_UPSELL_VIEWED, {
                type: P.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: L.liQ.USER_SETTINGS },
                location_stack: Z,
            });
    }, [Z, t, n]);
    let Q = (0, c.V)()?.subscription_trial?.sku_id === P.pe.TIER_2,
        J = (0, d.O)(),
        $ = (0, g.U9)(J, P.pe.TIER_2);
    return U
        ? (0, i.jsx)(o.f5, {
              value: W,
              children: (0, i.jsxs)(j.A, {
                  ref: K,
                  className: M.MT,
                  type: j.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(C.A, {
                          stickyPreview: !1,
                          layoutClassName: M.th,
                          profilePreviewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(a.tvc, { size: "md", color: "currentColor", className: M.PC }),
                                  G.intl.string(G.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(m.A, { preset: Y, onShuffle: X }), (0, i.jsx)(R.A, { user: t })],
                          }),
                          children: (0, i.jsxs)("div", {
                              className: M.EN,
                              children: [
                                  (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)(a.Heading, {
                                              variant: "heading-xl/extrabold",
                                              children: G.intl.string(G.t["2zGdAW"]),
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              className: M.h_,
                                              variant: "text-sm/normal",
                                              children: G.intl.string(G.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(O.A, {
                                      className: M.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, h.V7)({ userId: t.id, image: H ?? V }),
                                      pendingColors: F ?? B,
                                      onThemeColorsChange: p.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, i.jsx)(y.A, {
                                      className: M.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != z,
                                      onBannerChange: p.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !w &&
                                      (0, i.jsx)(v.A, {
                                          className: M.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: p.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: G.intl.string(G.t["7z0D1c"]),
                                          sectionTitle: G.intl.string(G.t.vtFfPX),
                                      }),
                                  (0, i.jsx)(I.A, { user: t, className: M.fz }),
                                  !Q &&
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-sm/normal",
                                          children: G.intl.string(G.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !Q &&
                          (0, i.jsx)(_.d, {
                              onSubscribeModalClose: q,
                              className: M.Kv,
                              showUpsell: !0,
                              text: G.intl.format(G.t.TmfgI2, {
                                  onClick: () => {
                                      (0, A.K)({ onSubscribeFinish: q });
                                  },
                              }),
                              button: k
                                  ? G.intl.string(G.t.AfRWI8)
                                  : $
                                    ? G.intl.formatToPlainString(G.t.bkQ4bH, { percent: J?.discount.amount })
                                    : G.intl.string(G.t.pj0XBN),
                              position: "inline",
                          }),
                      Q &&
                          (0, i.jsxs)("div", {
                              children: [
                                  (0, i.jsx)("div", { className: M.BU }),
                                  (0, i.jsx)(x.Ay, {
                                      type: P.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: P.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
