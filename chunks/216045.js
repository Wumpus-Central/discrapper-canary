n.d(t, { Z: () => W }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(570140),
    u = n(232567),
    m = n(809206),
    g = n(497321),
    p = n(634894),
    h = n(100527),
    f = n(906732),
    b = n(475977),
    N = n(957730),
    x = n(53691),
    _ = n(267717),
    E = n(296810),
    j = n(921813),
    C = n(610794),
    O = n(935147),
    v = n(246946),
    S = n(25990),
    T = n(594174),
    I = n(626135),
    y = n(74538),
    A = n(413182),
    P = n(695346),
    R = n(265159),
    D = n(532495),
    Z = n(981631),
    w = n(388032),
    k = n(338881);
function W() {
    let e = (0, l.e7)([T.default], () => {
        let e = T.default.getCurrentUser();
        return a()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    i.useEffect(() => {
        (0, u.In)(e.id);
    }, [e.id]);
    let t = (0, l.e7)([v.Z], () => v.Z.hidePersonalInformation),
        n = (0, l.cj)([S.Z], () => S.Z.getAllPending()),
        { pendingBio: s } = n,
        W = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(n, ['pendingBio']),
        L = (0, l.e7)([S.Z], () => S.Z.showNotice()),
        B = P.dN.useSetting() && null != s ? N.ZP.parse(void 0, s).content : s,
        M = y.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: U } = (0, f.ZP)(h.Z.PROFILE);
    i.useEffect(() => () => d.Z.wait(m.W3), []);
    let V = 'UserSettingsProfileCustomization';
    (0, p.j)({
        location: V + ' auto on',
        autoTrackExposure: !0
    }),
        (0, p.j)({
            location: V + ' auto off',
            autoTrackExposure: !1
        });
    let [G, F] = i.useState(!1),
        { showRedesign: H } = A.b.useExperiment({ location: 'profile customization' }),
        z = !M,
        Y = i.useRef(null);
    return t
        ? (0, r.jsx)(g.Z, {})
        : (0, r.jsxs)(f.Gt, {
              value: U,
              children: [
                  (0, r.jsx)(b.Z, {}),
                  (0, r.jsx)(E.Z, {
                      profilePreview: (0, r.jsx)(
                          j.Z,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })(
                              {
                                  user: e,
                                  canUsePremiumCustomization: M,
                                  onUpsellClick: R.Z,
                                  pendingBio: B
                              },
                              W
                          )
                      ),
                      children: (0, r.jsx)(D.Z, {})
                  }),
                  H && (0, r.jsx)(C.Z, {}),
                  (0, r.jsx)(o.$, {
                      onChange: (e) => F(e),
                      threshold: 0.25,
                      active: z,
                      children: (0, r.jsx)('div', {
                          ref: Y,
                          children: (0, r.jsx)(O.Z, {
                              user: e,
                              shouldShow: z,
                              isVisible: G
                          })
                      })
                  }),
                  z &&
                      !L &&
                      (0, r.jsx)(x.p, {
                          className: k.floatingNitroUpsell,
                          showUpsell: z && !G,
                          text: w.NW.format(w.t.TmfgIy, { onClick: () => (0, _.y)() }),
                          textVariant: 'heading-md/medium',
                          button: (0, r.jsxs)(c.gtL, {
                              className: k.floatingNitroButton,
                              innerClassName: k.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  I.default.track(Z.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == Y || null === (e = Y.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
                              },
                              color: c.zxk.Colors.GREEN,
                              size: c.PhG.MEDIUM,
                              children: [
                                  (0, r.jsx)(c.SrA, {
                                      size: 'sm',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: w.NW.string(w.t.uw9zIy)
                                  })
                              ]
                          })
                      })
              ]
          });
}
