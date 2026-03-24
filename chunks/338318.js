n.d(t, { A: () => M });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    o = n(230109),
    d = n(397927),
    c = n(73153),
    u = n(631670),
    m = n(974544),
    _ = n(793574),
    g = n(688810),
    x = n(429619),
    A = n(451909),
    h = n(550111),
    p = n(202639),
    f = n(407217),
    T = n(919395),
    S = n(884546),
    E = n(287070),
    b = n(196291),
    C = n(101058),
    v = n(836602),
    N = n(814390),
    I = n(351906),
    j = n(287809),
    y = n(954571),
    O = n(927578),
    R = n(890668),
    L = n(780207),
    P = n(652215),
    D = n(985018),
    G = n(42584);
function M() {
    let e = (0, r.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return a()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, r.bG)([I.A], () => I.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: l,
            pendingNameplate: M,
            showNotice: U,
            ...k
        } = (0, r.cf)([v.A], () => ({ ...v.A.getPendingChanges(), showNotice: v.A.showNotice() })),
        w = (0, C.V7)({ userId: e.id, image: l }),
        V = (0, T.lw)({ pendingValue: M, userValue: e?.collectibles?.nameplate }),
        B = (0, N.A)() && null != n ? A.Ay.parse(void 0, n).content : n,
        F = O.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: H, newestAnalyticsLocation: z } = (0, g.Ay)(_.A.USER_SETTINGS_USER_PROFILE);
    s.useEffect(() => () => c.h.wait(u.IM), []);
    let [Y, X] = s.useState(!1),
        K = !F,
        W = s.useRef(null);
    return t
        ? (0, i.jsx)(m.A, {})
        : (0, i.jsxs)(g.f5, {
              value: H,
              children: [
                  (0, i.jsx)(x.A, {}),
                  (0, i.jsx)(S.A, {
                      profilePreview: (0, i.jsx)(E.A, {
                          user: e,
                          canUsePremiumCustomization: F,
                          onUpsellClick: L.A,
                          pendingBio: B,
                          ...k,
                          pendingAvatar: w,
                      }),
                      nameplatePreview: (0, i.jsx)(h.A, {
                          user: e,
                          nameplate: V,
                          ...k,
                          className: null == V ? G.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, i.jsx)(R.A, {}),
                  }),
                  (0, i.jsx)(o.L, {
                      innerRef: W,
                      onChange: (e) => X(e),
                      threshold: 0.25,
                      active: K,
                      children: (0, i.jsx)("div", {
                          ref: W,
                          children: (0, i.jsx)(b.A, { user: e, shouldShow: K, isVisible: Y }),
                      }),
                  }),
                  K &&
                      !U &&
                      (0, i.jsx)(p.d, {
                          className: G.EL,
                          showUpsell: !Y,
                          text: D.intl.format(D.t.TmfgI2, { onClick: () => (0, f.K)({ analyticsSource: z }) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          button: (0, i.jsx)("div", {
                              className: G.Xl,
                              children: (0, i.jsx)(d.Button, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      y.default.track(P.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          W?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: D.intl.string(D.t.uw9zI7),
                                  icon: d.tvc,
                              }),
                          }),
                      }),
              ],
          });
}
