n.d(t, { A: () => w });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    o = n(230109),
    d = n(821609),
    u = n(403581),
    c = n(73153),
    g = n(631670),
    m = n(974544),
    _ = n(793574),
    A = n(688810),
    h = n(512213),
    p = n(429619),
    x = n(451909),
    E = n(202639),
    T = n(400669),
    S = n(407217),
    f = n(919395),
    b = n(884546),
    C = n(287070),
    v = n(196291),
    N = n(101058),
    I = n(836602),
    y = n(814390),
    j = n(909536),
    O = n(351906),
    R = n(287809),
    L = n(954571),
    D = n(927578),
    P = n(890668),
    G = n(780207),
    M = n(652215),
    U = n(985018),
    k = n(482549);
function w() {
    let e = (0, r.bG)([R.default], () => {
            let e = R.default.getCurrentUser();
            return a()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, r.bG)([O.A], () => O.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: l,
            pendingNameplate: w,
            showNotice: V,
            ...B
        } = (0, r.cf)([I.A], () => ({ ...I.A.getPendingChanges(), showNotice: I.A.showNotice() })),
        F = (0, N.V7)({ userId: e.id, image: l }),
        z = (0, f.lw)({ pendingValue: w, userValue: e?.collectibles?.nameplate }),
        H = (0, y.A)() && null != n ? x.Ay.parse(void 0, n).content : n,
        Y = D.Ay.canUsePremiumProfileCustomization(e),
        X = (0, j.St)("edit-profile-upsell"),
        { analyticsLocations: K } = (0, A.Ay)(_.A.USER_SETTINGS_USER_PROFILE);
    s.useEffect(() => () => c.h.wait(g.IM), []);
    let [W, Z] = s.useState(!1),
        q = !Y,
        Q = s.useRef(null);
    return t
        ? (0, i.jsx)(m.A, {})
        : (0, i.jsxs)(A.f5, {
              value: K,
              children: [
                  (0, i.jsx)(p.A, {}),
                  (0, i.jsx)(b.A, {
                      profilePreview: (0, i.jsx)(C.A, {
                          user: e,
                          canUsePremiumCustomization: Y,
                          onUpsellClick: G.A,
                          pendingBio: H,
                          ...B,
                          pendingAvatar: F,
                      }),
                      nameplatePreview: (0, i.jsx)(h.A, {
                          user: e,
                          nameplate: z,
                          ...B,
                          className: null == z ? k.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, i.jsx)(P.A, {}),
                  }),
                  (0, i.jsx)(o.L, {
                      innerRef: Q,
                      onChange: (e) => Z(e),
                      threshold: 0.25,
                      active: q,
                      children: (0, i.jsx)("div", {
                          ref: Q,
                          children: (0, i.jsx)(v.A, { user: e, shouldShow: q, isVisible: W }),
                      }),
                  }),
                  q &&
                      !V &&
                      (0, i.jsx)(E.d, {
                          className: k.EL,
                          showUpsell: !W,
                          text: U.intl.format(U.t.TmfgI2, { onClick: () => (0, S.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: X
                              ? (0, i.jsx)(T.l, { size: "md", location: _.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, i.jsx)("div", {
                              className: k.Xl,
                              children: (0, i.jsx)(d.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      L.default.track(M.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          Q?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: U.intl.string(U.t.uw9zI7),
                                  icon: u.t,
                              }),
                          }),
                      }),
              ],
          });
}
