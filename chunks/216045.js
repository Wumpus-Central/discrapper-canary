n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(512722),
    a = n.n(r),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(570140),
    u = n(232567),
    m = n(809206),
    g = n(497321),
    h = n(634894),
    p = n(100527),
    x = n(906732),
    f = n(475977),
    _ = n(957730),
    E = n(53691),
    C = n(267717),
    T = n(296810),
    S = n(921813),
    b = n(610794),
    I = n(935147),
    N = n(246946),
    v = n(25990),
    A = n(594174),
    j = n(626135),
    R = n(74538),
    O = n(413182),
    P = n(695346),
    y = n(265159),
    D = n(532495),
    B = n(981631),
    Z = n(388032),
    L = n(676258);
function M() {
    let e = (0, l.e7)([A.default], () => {
        let e = A.default.getCurrentUser();
        return a()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    s.useEffect(() => {
        (0, u.In)(e.id);
    }, [e.id]);
    let t = (0, l.e7)([N.Z], () => N.Z.hidePersonalInformation),
        { pendingBio: n, ...r } = (0, l.cj)([v.Z], () => v.Z.getAllPending()),
        M = (0, l.e7)([v.Z], () => v.Z.showNotice()),
        k = P.dN.useSetting() && null != n ? _.ZP.parse(void 0, n).content : n,
        w = R.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: F } = (0, x.ZP)(p.Z.PROFILE);
    s.useEffect(() => () => d.Z.wait(m.W3), []);
    let U = 'UserSettingsProfileCustomization';
    (0, h.j)({
        location: U + ' auto on',
        autoTrackExposure: !0
    }),
        (0, h.j)({
            location: U + ' auto off',
            autoTrackExposure: !1
        });
    let [V, G] = s.useState(!1),
        { showRedesign: H } = O.b.useExperiment({ location: 'profile customization' }),
        Y = !w,
        W = s.useRef(null);
    return t
        ? (0, i.jsx)(g.Z, {})
        : (0, i.jsxs)(x.Gt, {
              value: F,
              children: [
                  (0, i.jsx)(f.Z, {}),
                  (0, i.jsx)(T.Z, {
                      profilePreview: (0, i.jsx)(S.Z, {
                          user: e,
                          canUsePremiumCustomization: w,
                          onUpsellClick: y.Z,
                          pendingBio: k,
                          ...r
                      }),
                      children: (0, i.jsx)(D.Z, {})
                  }),
                  H && (0, i.jsx)(b.Z, {}),
                  (0, i.jsx)(o.$, {
                      onChange: (e) => G(e),
                      threshold: 0.25,
                      active: Y,
                      children: (0, i.jsx)('div', {
                          ref: W,
                          children: (0, i.jsx)(I.Z, {
                              user: e,
                              shouldShow: Y,
                              isVisible: V
                          })
                      })
                  }),
                  Y &&
                      !M &&
                      (0, i.jsx)(E.p, {
                          className: L.floatingNitroUpsell,
                          showUpsell: Y && !V,
                          text: Z.intl.format(Z.t.TmfgIy, { onClick: () => (0, C.openPremiumTryItOutProfileUpsell)() }),
                          textVariant: 'heading-md/medium',
                          button: (0, i.jsxs)(c.ShinyButton, {
                              className: L.floatingNitroButton,
                              innerClassName: L.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  j.default.track(B.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == W || null === (e = W.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
                              },
                              color: c.Button.Colors.GREEN,
                              size: c.ButtonSizes.MEDIUM,
                              children: [
                                  (0, i.jsx)(c.NitroWheelIcon, {
                                      size: 'sm',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: Z.intl.string(Z.t.uw9zIy)
                                  })
                              ]
                          })
                      })
              ]
          });
}
