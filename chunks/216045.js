n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(512722),
    a = n.n(s),
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
    O = n(74538),
    R = n(413182),
    P = n(695346),
    y = n(265159),
    B = n(532495),
    D = n(981631),
    Z = n(388032),
    L = n(95135);
function M() {
    let e = (0, l.e7)([A.default], () => {
        let e = A.default.getCurrentUser();
        return a()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    r.useEffect(() => {
        (0, u.In)(e.id);
    }, [e.id]);
    let t = (0, l.e7)([N.Z], () => N.Z.hidePersonalInformation),
        { pendingBio: n, ...s } = (0, l.cj)([v.Z], () => v.Z.getAllPending()),
        M = (0, l.e7)([v.Z], () => v.Z.showNotice()),
        k = P.dN.useSetting() && null != n ? _.ZP.parse(void 0, n).content : n,
        w = O.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: U } = (0, x.ZP)(p.Z.PROFILE);
    r.useEffect(() => () => d.Z.wait(m.W3), []);
    let F = 'UserSettingsProfileCustomization';
    (0, h.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, h.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        });
    let [V, G] = r.useState(!1),
        { showRedesign: H } = R.b.useExperiment({ location: 'profile customization' }),
        Y = !w,
        W = r.useRef(null);
    return t
        ? (0, i.jsx)(g.Z, {})
        : (0, i.jsxs)(x.Gt, {
              value: U,
              children: [
                  (0, i.jsx)(f.Z, {}),
                  (0, i.jsx)(T.Z, {
                      profilePreview: (0, i.jsx)(S.Z, {
                          user: e,
                          canUsePremiumCustomization: w,
                          onUpsellClick: y.Z,
                          pendingBio: k,
                          ...s
                      }),
                      children: (0, i.jsx)(B.Z, {})
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
                                  j.default.track(D.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == W || null === (e = W.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
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
