n.d(t, { A: () => k });
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
    g = n(793574),
    _ = n(688810),
    x = n(512213),
    A = n(429619),
    h = n(451909),
    p = n(202639),
    T = n(400669),
    f = n(407217),
    S = n(919395),
    b = n(884546),
    E = n(287070),
    C = n(196291),
    N = n(101058),
    v = n(836602),
    I = n(814390),
    j = n(909536),
    y = n(351906),
    O = n(287809),
    R = n(954571),
    P = n(927578),
    L = n(890668),
    D = n(780207),
    G = n(652215),
    M = n(985018),
    U = n(21861);
function k() {
    let e = (0, r.bG)([O.default], () => {
            let e = O.default.getCurrentUser();
            return a()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, r.bG)([y.A], () => y.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: l,
            pendingNameplate: k,
            showNotice: w,
            ...V
        } = (0, r.cf)([v.A], () => ({ ...v.A.getPendingChanges(), showNotice: v.A.showNotice() })),
        B = (0, N.V7)({ userId: e.id, image: l }),
        F = (0, S.lw)({ pendingValue: k, userValue: e?.collectibles?.nameplate }),
        H = (0, I.A)() && null != n ? h.Ay.parse(void 0, n).content : n,
        z = P.Ay.canUsePremiumProfileCustomization(e),
        Y = (0, j.St)("edit-profile-upsell"),
        { analyticsLocations: X, newestAnalyticsLocation: K } = (0, _.Ay)(g.A.USER_SETTINGS_USER_PROFILE);
    s.useEffect(() => () => c.h.wait(u.IM), []);
    let [W, Z] = s.useState(!1),
        q = !z,
        Q = s.useRef(null);
    return t
        ? (0, i.jsx)(m.A, {})
        : (0, i.jsxs)(_.f5, {
              value: X,
              children: [
                  (0, i.jsx)(A.A, {}),
                  (0, i.jsx)(b.A, {
                      profilePreview: (0, i.jsx)(E.A, {
                          user: e,
                          canUsePremiumCustomization: z,
                          onUpsellClick: D.A,
                          pendingBio: H,
                          ...V,
                          pendingAvatar: B,
                      }),
                      nameplatePreview: (0, i.jsx)(x.A, {
                          user: e,
                          nameplate: F,
                          ...V,
                          className: null == F ? U.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, i.jsx)(L.A, {}),
                  }),
                  (0, i.jsx)(o.L, {
                      innerRef: Q,
                      onChange: (e) => Z(e),
                      threshold: 0.25,
                      active: q,
                      children: (0, i.jsx)("div", {
                          ref: Q,
                          children: (0, i.jsx)(C.A, { user: e, shouldShow: q, isVisible: W }),
                      }),
                  }),
                  q &&
                      !w &&
                      (0, i.jsx)(p.d, {
                          className: U.EL,
                          showUpsell: !W,
                          text: M.intl.format(M.t.TmfgI2, { onClick: () => (0, f.K)({ analyticsSource: K }) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: Y
                              ? (0, i.jsx)(T.l, { size: "sm", location: g.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, i.jsx)("div", {
                              className: U.Xl,
                              children: (0, i.jsx)(d.Button, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      R.default.track(G.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          Q?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: M.intl.string(M.t.uw9zI7),
                                  icon: d.tvc,
                              }),
                          }),
                      }),
              ],
          });
}
