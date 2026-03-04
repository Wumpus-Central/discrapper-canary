n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(397927),
    r = n(631670),
    o = n(793574),
    c = n(688810),
    d = n(422936),
    u = n(234419),
    _ = n(10368),
    m = n(535646),
    A = n(511484),
    g = n(202639),
    h = n(811611),
    x = n(407217),
    p = n(101058),
    E = n(207803),
    C = n(836602),
    T = n(193658),
    S = n(954571),
    I = n(927578),
    f = n(884546),
    N = n(230084),
    b = n(180020),
    j = n(212168),
    v = n(730588),
    O = n(63675),
    R = n(253604),
    y = n(652215),
    P = n(788868),
    L = n(355097),
    D = n(985018),
    M = n(567567);
function G(e) {
    let { user: t, isVisible: n, shouldShow: G } = e,
        U = I.Ay.isPremium(t),
        k = I.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: V,
            pendingThemeColors: w,
            tryItOutThemeColors: H,
            tryItOutAvatar: B,
            tryItOutBanner: Y,
        } = (0, a.cf)([C.A], () => {
            let e = C.A.getPendingChanges(),
                t = C.A.getErrors(),
                n = C.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: F, onShuffle: z } = (0, _.A)(),
        W = s.useRef(null);
    (0, T.A)(W, L._F.TRY_IT_OUT);
    let {
            analyticsLocations: K,
            newestAnalyticsLocation: Z,
            sourceAnalyticsLocations: q,
        } = (0, c.Ay)(o.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        X = (e) => {
            e &&
                ((0, r.zq)(B),
                (0, E.Zz)(H),
                (0, E.Dv)(Y),
                S.default.track(y.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: F }));
        };
    s.useEffect(() => {
        n &&
            S.default.track(y.HAw.PREMIUM_UPSELL_VIEWED, {
                type: P.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: y.liQ.USER_SETTINGS },
                location_stack: q,
            });
    }, [q, t, n]);
    let Q = (0, u.V)()?.subscription_trial?.sku_id === P.pe.TIER_2,
        J = (0, d.O)(),
        $ = (0, A.U9)(J, P.pe.TIER_2);
    return G
        ? (0, i.jsx)(c.f5, {
              value: K,
              children: (0, i.jsxs)(j.A, {
                  ref: W,
                  className: M.MT,
                  type: j.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(f.A, {
                          stickyPreview: !1,
                          layoutClassName: M.th,
                          profilePreviewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(l.tvc, { size: "md", color: "currentColor", className: M.PC }),
                                  D.intl.string(D.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(m.A, { preset: F, onShuffle: z }), (0, i.jsx)(R.A, { user: t })],
                          }),
                          children: (0, i.jsxs)("div", {
                              className: M.EN,
                              children: [
                                  (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)(l.Heading, {
                                              variant: "heading-xl/extrabold",
                                              children: D.intl.string(D.t["2zGdAW"]),
                                          }),
                                          (0, i.jsx)(l.Text, {
                                              className: M.h_,
                                              variant: "text-sm/normal",
                                              children: D.intl.string(D.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(O.A, {
                                      className: M.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, p.V7)({ userId: t.id, image: B ?? V }),
                                      pendingColors: H ?? w,
                                      onThemeColorsChange: E.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, i.jsx)(v.A, {
                                      className: M.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != Y,
                                      onBannerChange: E.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !k &&
                                      (0, i.jsx)(N.A, {
                                          className: M.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: E.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: D.intl.string(D.t["7z0D1c"]),
                                          sectionTitle: D.intl.string(D.t.vtFfPX),
                                      }),
                                  (0, i.jsx)(b.A, { user: t, className: M.fz }),
                                  !Q &&
                                      (0, i.jsx)(l.Text, {
                                          variant: "text-sm/normal",
                                          children: D.intl.string(D.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !Q &&
                          (0, i.jsx)(g.d, {
                              onSubscribeModalClose: X,
                              className: M.Kv,
                              showUpsell: !0,
                              text: D.intl.format(D.t.TmfgI2, {
                                  onClick: () => {
                                      (0, x.K)({ analyticsSource: Z, onSubscribeFinish: X });
                                  },
                              }),
                              button: U
                                  ? D.intl.string(D.t.AfRWI8)
                                  : $
                                    ? D.intl.formatToPlainString(D.t.bkQ4bH, { percent: J?.discount.amount })
                                    : D.intl.string(D.t.pj0XBN),
                              position: "inline",
                          }),
                      Q &&
                          (0, i.jsxs)("div", {
                              children: [
                                  (0, i.jsx)("div", { className: M.BU }),
                                  (0, i.jsx)(h.Ay, {
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
