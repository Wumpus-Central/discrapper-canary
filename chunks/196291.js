n.d(t, { A: () => V }), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(631670),
    l = n(793574),
    c = n(688810),
    u = n(422936),
    d = n(234419),
    f = n(10368),
    p = n(535646),
    _ = n(511484),
    h = n(202639),
    m = n(811611),
    g = n(407217),
    E = n(101058),
    b = n(207803),
    y = n(193658),
    O = n(752319),
    A = n(954571),
    v = n(927578),
    S = n(884546),
    I = n(230084),
    T = n(180020),
    C = n(212168),
    N = n(730588),
    R = n(63675),
    w = n(253604),
    P = n(652215),
    D = n(788868),
    x = n(355097),
    L = n(985018),
    j = n(567567);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e) {
    var t, n;
    let { user: M, isVisible: U, shouldShow: V } = e,
        F = v.Ay.isPremium(M),
        B = v.Ay.canUseAnimatedAvatar(M),
        {
            pendingAvatar: H,
            pendingThemeColors: Y,
            tryItOutThemeColors: W,
            tryItOutAvatar: K,
            tryItOutBanner: z,
        } = (0, a.cf)([O.A], () => {
            let e = O.A.getAllPending(),
                t = O.A.getErrors();
            return G(k({}, e, O.A.getAllTryItOut()), { errors: t });
        }),
        { preset: q, onShuffle: X } = (0, f.A)(),
        Z = i.useRef(null);
    (0, y.A)(Z, x._F.TRY_IT_OUT);
    let {
            analyticsLocations: Q,
            newestAnalyticsLocation: $,
            sourceAnalyticsLocations: J,
        } = (0, c.Ay)(l.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        ee = (e) => {
            e &&
                ((0, o.zq)(K),
                (0, b.Zz)(W),
                (0, b.Dv)(z),
                A.default.track(P.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: q }));
        };
    i.useEffect(() => {
        U &&
            A.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
                type: D.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: P.liQ.USER_SETTINGS },
                location_stack: J,
            });
    }, [J, M, U]);
    let et = (null == (n = (0, d.V)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === D.pe.TIER_2,
        en = (0, u.O)(),
        er = (0, _.U9)(en, D.pe.TIER_2),
        ei = () =>
            F
                ? L.intl.string(L.t.AfRWI8)
                : er
                  ? L.intl.formatToPlainString(L.t.bkQ4bH, { percent: null == en ? void 0 : en.discount.amount })
                  : L.intl.string(L.t.pj0XBN);
    return V
        ? (0, r.jsx)(c.f5, {
              value: Q,
              children: (0, r.jsxs)(C.A, {
                  ref: Z,
                  className: j.MT,
                  type: C.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, r.jsx)(S.A, {
                          layoutClassName: j.th,
                          profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(s.tvc, {
                                      size: "md",
                                      color: "currentColor",
                                      className: j.PC,
                                  }),
                                  L.intl.string(L.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(p.A, {
                                      preset: q,
                                      onShuffle: X,
                                  }),
                                  (0, r.jsx)(w.A, { user: M }),
                              ],
                          }),
                          children: (0, r.jsxs)("div", {
                              className: j.EN,
                              children: [
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(s.Heading, {
                                              variant: "heading-xl/extrabold",
                                              children: L.intl.string(L.t["2zGdAW"]),
                                          }),
                                          (0, r.jsx)(s.Text, {
                                              className: j.h_,
                                              variant: "text-sm/normal",
                                              children: L.intl.string(L.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(R.A, {
                                      className: j.fz,
                                      user: M,
                                      pendingAvatarSrc: (0, E.V7)({
                                          userId: M.id,
                                          image: null != K ? K : H,
                                      }),
                                      pendingColors: null != W ? W : Y,
                                      onThemeColorsChange: b.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, r.jsx)(N.A, {
                                      className: j.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != z,
                                      onBannerChange: b.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !B &&
                                      (0, r.jsx)(I.A, {
                                          className: j.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: b.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: L.intl.string(L.t["7z0D1c"]),
                                          sectionTitle: L.intl.string(L.t.vtFfPX),
                                      }),
                                  (0, r.jsx)(T.A, {
                                      user: M,
                                      className: j.fz,
                                  }),
                                  !et &&
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-sm/normal",
                                          children: L.intl.string(L.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !et &&
                          (0, r.jsx)(h.d, {
                              onSubscribeModalClose: ee,
                              className: j.Kv,
                              showUpsell: !0,
                              text: L.intl.format(L.t.TmfgI2, {
                                  onClick: () => {
                                      (0, g.K)({
                                          analyticsSource: $,
                                          onSubscribeFinish: ee,
                                      });
                                  },
                              }),
                              button: ei(),
                              position: "inline",
                          }),
                      et &&
                          (0, r.jsxs)("div", {
                              children: [
                                  (0, r.jsx)("div", { className: j.BU }),
                                  (0, r.jsx)(m.Ay, {
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
