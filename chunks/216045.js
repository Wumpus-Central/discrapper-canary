n.d(t, { Z: () => B }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(512722),
    r = n.n(l),
    a = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(570140),
    u = n(232567),
    h = n(809206),
    m = n(497321),
    g = n(634894),
    x = n(100527),
    _ = n(906732),
    p = n(475977),
    E = n(957730),
    C = n(53691),
    N = n(267717),
    f = n(296810),
    I = n(921813),
    T = n(610794),
    S = n(935147),
    j = n(246946),
    v = n(25990),
    b = n(594174),
    A = n(626135),
    O = n(74538),
    R = n(413182),
    D = n(695346),
    P = n(265159),
    y = n(532495),
    Z = n(981631),
    L = n(388032),
    k = n(518759);
function B() {
    let e = (0, a.e7)([b.default], () => {
        let e = b.default.getCurrentUser();
        return r()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    s.useEffect(() => {
        (0, u.In)(e.id);
    }, [e.id]);
    let t = (0, a.e7)([j.Z], () => j.Z.hidePersonalInformation),
        { pendingBio: n, ...l } = (0, a.cj)([v.Z], () => v.Z.getAllPending()),
        B = (0, a.e7)([v.Z], () => v.Z.showNotice()),
        M = D.dN.useSetting() && null != n ? E.ZP.parse(void 0, n).content : n,
        V = O.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: w } = (0, _.ZP)(x.Z.PROFILE);
    s.useEffect(() => () => d.Z.wait(h.W3), []);
    let U = 'UserSettingsProfileCustomization';
    (0, g.j)({
        location: U + ' auto on',
        autoTrackExposure: !0
    }),
        (0, g.j)({
            location: U + ' auto off',
            autoTrackExposure: !1
        });
    let [G, F] = s.useState(!1),
        { showRedesign: z } = R.b.useExperiment({ location: 'profile customization' }),
        Y = !V,
        H = s.useRef(null);
    return t
        ? (0, i.jsx)(m.Z, {})
        : (0, i.jsxs)(_.Gt, {
              value: w,
              children: [
                  (0, i.jsx)(p.Z, {}),
                  (0, i.jsx)(f.Z, {
                      profilePreview: (0, i.jsx)(I.Z, {
                          user: e,
                          canUsePremiumCustomization: V,
                          onUpsellClick: P.Z,
                          pendingBio: M,
                          ...l
                      }),
                      children: (0, i.jsx)(y.Z, {})
                  }),
                  z && (0, i.jsx)(T.Z, {}),
                  (0, i.jsx)(o.$, {
                      onChange: (e) => F(e),
                      threshold: 0.25,
                      active: Y,
                      children: (0, i.jsx)('div', {
                          ref: H,
                          children: (0, i.jsx)(S.Z, {
                              user: e,
                              shouldShow: Y,
                              isVisible: G
                          })
                      })
                  }),
                  Y &&
                      !B &&
                      (0, i.jsx)(C.p, {
                          className: k.floatingNitroUpsell,
                          showUpsell: Y && !G,
                          text: L.intl.format(L.t.TmfgIy, { onClick: () => (0, N.y)() }),
                          textVariant: 'heading-md/medium',
                          button: (0, i.jsxs)(c.gtL, {
                              className: k.floatingNitroButton,
                              innerClassName: k.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  A.default.track(Z.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == H || null === (e = H.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
                              },
                              color: c.zxk.Colors.GREEN,
                              size: c.PhG.MEDIUM,
                              children: [
                                  (0, i.jsx)(c.SrA, {
                                      size: 'sm',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: L.intl.string(L.t.uw9zIy)
                                  })
                              ]
                          })
                      })
              ]
          });
}
