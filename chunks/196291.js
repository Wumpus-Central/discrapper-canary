n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(793574),
    o = n(688810),
    d = n(422936),
    c = n(234419),
    u = n(10368),
    _ = n(535646),
    m = n(511484),
    g = n(202639),
    A = n(811611),
    x = n(407217),
    h = n(101058),
    p = n(207803),
    T = n(84540),
    E = n(836602),
    S = n(954571),
    f = n(515718),
    C = n(927578),
    b = n(919395),
    N = n(884546),
    I = n(597551),
    v = n(230084),
    j = n(180020),
    y = n(212168),
    R = n(730588),
    O = n(63675),
    L = n(253604),
    D = n(652215),
    P = n(788868),
    M = n(355097),
    G = n(985018),
    U = n(219501);
function k(e) {
    let { user: t, isVisible: n, shouldShow: k } = e,
        V = C.Ay.isPremium(t),
        w = C.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: B,
            pendingThemeColors: H,
            tryItOutThemeColors: F,
            tryItOutAvatar: Y,
            tryItOutBanner: z,
        } = (0, l.cf)([E.A], () => {
            let e = E.A.getPendingChanges(),
                t = E.A.getErrors(),
                n = E.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: X, onShuffle: W } = (0, u.A)(),
        K = s.useRef(null);
    (0, I.A)(K, M._F.TRY_IT_OUT);
    let {
            analyticsLocations: Z,
            newestAnalyticsLocation: q,
            sourceAnalyticsLocations: J,
        } = (0, o.Ay)(r.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        Q = (e) => {
            e &&
                (z?.startsWith("https:") === !0
                    ? fetch(z)
                          .then((e) => e.blob())
                          .then((e) => (0, f.We)(e))
                          .then((e) => {
                              (0, T.p)({ avatar: Y, themeColors: F, banner: e });
                          })
                          .catch(() => {
                              (0, T.p)({ avatar: Y, themeColors: F });
                          })
                    : null != z
                      ? (0, T.p)({ avatar: Y, themeColors: F, banner: z })
                      : (0, T.p)({ avatar: Y, themeColors: F }),
                (0, b.WU)(Y),
                S.default.track(D.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: X }));
        };
    s.useEffect(() => {
        n &&
            S.default.track(D.HAw.PREMIUM_UPSELL_VIEWED, {
                type: P.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: D.liQ.USER_SETTINGS },
                location_stack: J,
            });
    }, [J, t, n]);
    let $ = (0, c.V)()?.subscription_trial?.sku_id === P.pe.TIER_2,
        ee = (0, d.O)(),
        et = (0, m.U9)(ee, P.pe.TIER_2);
    return k
        ? (0, i.jsx)(o.f5, {
              value: Z,
              children: (0, i.jsxs)(y.A, {
                  ref: K,
                  className: U.MT,
                  type: y.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(N.A, {
                          stickyPreview: !1,
                          layoutClassName: U.th,
                          profilePreviewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(a.tvc, { size: "md", color: "currentColor", className: U.PC }),
                                  G.intl.string(G.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(_.A, { preset: X, onShuffle: W }), (0, i.jsx)(L.A, { user: t })],
                          }),
                          children: (0, i.jsxs)("div", {
                              className: U.EN,
                              children: [
                                  (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)(a.Heading, {
                                              variant: "heading-xl/extrabold",
                                              children: G.intl.string(G.t["2zGdAW"]),
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              className: U.h_,
                                              variant: "text-sm/normal",
                                              children: G.intl.string(G.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(O.A, {
                                      className: U.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, h.V7)({ userId: t.id, image: Y ?? B }),
                                      pendingColors: F ?? H,
                                      onThemeColorsChange: p.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, i.jsx)(R.A, {
                                      className: U.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != z,
                                      onBannerChange: p.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !w &&
                                      (0, i.jsx)(v.A, {
                                          className: U.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: p.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: G.intl.string(G.t["7z0D1c"]),
                                          sectionTitle: G.intl.string(G.t.vtFfPX),
                                      }),
                                  (0, i.jsx)(j.A, { user: t, className: U.fz }),
                                  !$ &&
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-sm/normal",
                                          children: G.intl.string(G.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !$ &&
                          (0, i.jsx)(g.d, {
                              onSubscribeModalClose: Q,
                              className: U.Kv,
                              showUpsell: !0,
                              text: G.intl.format(G.t.TmfgI2, {
                                  onClick: () => {
                                      (0, x.K)({ analyticsSource: q, onSubscribeFinish: Q });
                                  },
                              }),
                              button: V
                                  ? G.intl.string(G.t.AfRWI8)
                                  : et
                                    ? G.intl.formatToPlainString(G.t.bkQ4bH, { percent: ee?.discount.amount })
                                    : G.intl.string(G.t.pj0XBN),
                              position: "inline",
                          }),
                      $ &&
                          (0, i.jsxs)("div", {
                              children: [
                                  (0, i.jsx)("div", { className: U.BU }),
                                  (0, i.jsx)(A.Ay, {
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
