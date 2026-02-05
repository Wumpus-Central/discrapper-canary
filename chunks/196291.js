n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(397927),
    l = n(631670),
    o = n(793574),
    c = n(688810),
    d = n(422936),
    u = n(234419),
    _ = n(10368),
    m = n(535646),
    A = n(511484),
    g = n(202639),
    E = n(811611),
    h = n(407217),
    p = n(101058),
    C = n(207803),
    x = n(836602),
    T = n(193658),
    I = n(954571),
    S = n(927578),
    f = n(884546),
    N = n(230084),
    b = n(180020),
    R = n(212168),
    v = n(730588),
    O = n(63675),
    j = n(253604),
    P = n(652215),
    y = n(788868),
    L = n(355097),
    D = n(985018),
    M = n(567567);
function G(e) {
    let { user: t, isVisible: n, shouldShow: G } = e,
        U = S.Ay.isPremium(t),
        k = S.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: B,
            pendingThemeColors: w,
            tryItOutThemeColors: H,
            tryItOutAvatar: V,
            tryItOutBanner: F,
        } = (0, r.cf)([x.A], () => {
            let e = x.A.getPendingChanges(),
                t = x.A.getErrors(),
                n = x.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: Y, onShuffle: W } = (0, _.A)(),
        z = s.useRef(null);
    (0, T.A)(z, L._F.TRY_IT_OUT);
    let {
            analyticsLocations: K,
            newestAnalyticsLocation: Z,
            sourceAnalyticsLocations: X,
        } = (0, c.Ay)(o.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        q = (e) => {
            e &&
                ((0, l.zq)(V),
                (0, C.Zz)(H),
                (0, C.Dv)(F),
                I.default.track(P.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: Y }));
        };
    s.useEffect(() => {
        n &&
            I.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
                type: y.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: P.liQ.USER_SETTINGS },
                location_stack: X,
            });
    }, [X, t, n]);
    let J = (0, u.V)()?.subscription_trial?.sku_id === y.pe.TIER_2,
        Q = (0, d.O)(),
        $ = (0, A.U9)(Q, y.pe.TIER_2);
    return G
        ? (0, i.jsx)(c.f5, {
              value: K,
              children: (0, i.jsxs)(R.A, {
                  ref: z,
                  className: M.MT,
                  type: R.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(f.A, {
                          layoutClassName: M.th,
                          profilePreviewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(a.tvc, { size: "md", color: "currentColor", className: M.PC }),
                                  D.intl.string(D.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(m.A, { preset: Y, onShuffle: W }), (0, i.jsx)(j.A, { user: t })],
                          }),
                          children: (0, i.jsxs)("div", {
                              className: M.EN,
                              children: [
                                  (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)(a.Heading, {
                                              variant: "heading-xl/extrabold",
                                              children: D.intl.string(D.t["2zGdAW"]),
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              className: M.h_,
                                              variant: "text-sm/normal",
                                              children: D.intl.string(D.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(O.A, {
                                      className: M.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, p.V7)({ userId: t.id, image: V ?? B }),
                                      pendingColors: H ?? w,
                                      onThemeColorsChange: C.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, i.jsx)(v.A, {
                                      className: M.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != F,
                                      onBannerChange: C.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !k &&
                                      (0, i.jsx)(N.A, {
                                          className: M.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: C.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: D.intl.string(D.t["7z0D1c"]),
                                          sectionTitle: D.intl.string(D.t.vtFfPX),
                                      }),
                                  (0, i.jsx)(b.A, { user: t, className: M.fz }),
                                  !J &&
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-sm/normal",
                                          children: D.intl.string(D.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !J &&
                          (0, i.jsx)(g.d, {
                              onSubscribeModalClose: q,
                              className: M.Kv,
                              showUpsell: !0,
                              text: D.intl.format(D.t.TmfgI2, {
                                  onClick: () => {
                                      (0, h.K)({ analyticsSource: Z, onSubscribeFinish: q });
                                  },
                              }),
                              button: U
                                  ? D.intl.string(D.t.AfRWI8)
                                  : $
                                    ? D.intl.formatToPlainString(D.t.bkQ4bH, { percent: Q?.discount.amount })
                                    : D.intl.string(D.t.pj0XBN),
                              position: "inline",
                          }),
                      J &&
                          (0, i.jsxs)("div", {
                              children: [
                                  (0, i.jsx)("div", { className: M.BU }),
                                  (0, i.jsx)(E.Ay, {
                                      type: y.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: y.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
