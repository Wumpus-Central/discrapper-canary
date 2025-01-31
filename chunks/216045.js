n.d(t, { Z: () => B }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(570140),
    u = n(232567),
    m = n(809206),
    h = n(497321),
    g = n(634894),
    _ = n(100527),
    x = n(906732),
    p = n(475977),
    E = n(957730),
    C = n(53691),
    f = n(267717),
    T = n(296810),
    N = n(921813),
    I = n(610794),
    S = n(935147),
    b = n(246946),
    v = n(25990),
    j = n(594174),
    A = n(626135),
    O = n(74538),
    R = n(413182),
    P = n(695346),
    D = n(265159),
    y = n(532495),
    Z = n(981631),
    L = n(388032),
    k = n(676258);
function B() {
    let e = (0, a.e7)([j.default], () => {
        let e = j.default.getCurrentUser();
        return l()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    s.useEffect(() => {
        (0, u.In)(e.id);
    }, [e.id]);
    let t = (0, a.e7)([b.Z], () => b.Z.hidePersonalInformation),
        { pendingBio: n, ...r } = (0, a.cj)([v.Z], () => v.Z.getAllPending()),
        B = (0, a.e7)([v.Z], () => v.Z.showNotice()),
        M = P.dN.useSetting() && null != n ? E.ZP.parse(void 0, n).content : n,
        w = O.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: V } = (0, x.ZP)(_.Z.PROFILE);
    s.useEffect(() => () => d.Z.wait(m.W3), []);
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
        { showRedesign: H } = R.b.useExperiment({ location: 'profile customization' }),
        z = !w,
        Y = s.useRef(null);
    return t
        ? (0, i.jsx)(h.Z, {})
        : (0, i.jsxs)(x.Gt, {
              value: V,
              children: [
                  (0, i.jsx)(p.Z, {}),
                  (0, i.jsx)(T.Z, {
                      profilePreview: (0, i.jsx)(N.Z, {
                          user: e,
                          canUsePremiumCustomization: w,
                          onUpsellClick: D.Z,
                          pendingBio: M,
                          ...r
                      }),
                      children: (0, i.jsx)(y.Z, {})
                  }),
                  H && (0, i.jsx)(I.Z, {}),
                  (0, i.jsx)(o.$, {
                      onChange: (e) => F(e),
                      threshold: 0.25,
                      active: z,
                      children: (0, i.jsx)('div', {
                          ref: Y,
                          children: (0, i.jsx)(S.Z, {
                              user: e,
                              shouldShow: z,
                              isVisible: G
                          })
                      })
                  }),
                  z &&
                      !B &&
                      (0, i.jsx)(C.p, {
                          className: k.floatingNitroUpsell,
                          showUpsell: z && !G,
                          text: L.intl.format(L.t.TmfgIy, { onClick: () => (0, f.y)() }),
                          textVariant: 'heading-md/medium',
                          button: (0, i.jsxs)(c.gtL, {
                              className: k.floatingNitroButton,
                              innerClassName: k.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  A.default.track(Z.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == Y || null === (e = Y.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
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
