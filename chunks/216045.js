n.d(t, { Z: () => k }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(570140),
    u = n(809206),
    m = n(497321),
    g = n(634894),
    p = n(100527),
    h = n(906732),
    f = n(475977),
    b = n(957730),
    N = n(53691),
    x = n(267717),
    _ = n(296810),
    E = n(921813),
    j = n(610794),
    C = n(935147),
    O = n(246946),
    v = n(25990),
    S = n(594174),
    T = n(626135),
    I = n(74538),
    y = n(413182),
    A = n(695346),
    P = n(265159),
    R = n(532495),
    D = n(981631),
    Z = n(388032),
    w = n(338881);
function k() {
    let e = (0, l.e7)([S.default], () => {
            let e = S.default.getCurrentUser();
            return a()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
        }),
        t = (0, l.e7)([O.Z], () => O.Z.hidePersonalInformation),
        n = (0, l.cj)([v.Z], () => v.Z.getAllPending()),
        { pendingBio: s } = n,
        k = (function (e, t) {
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
        W = (0, l.e7)([v.Z], () => v.Z.showNotice()),
        L = A.dN.useSetting() && null != s ? b.ZP.parse(void 0, s).content : s,
        B = I.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: M } = (0, h.ZP)(p.Z.PROFILE);
    i.useEffect(() => () => d.Z.wait(u.W3), []);
    let U = 'UserSettingsProfileCustomization';
    (0, g.j)({
        location: U + ' auto on',
        autoTrackExposure: !0
    }),
        (0, g.j)({
            location: U + ' auto off',
            autoTrackExposure: !1
        });
    let [V, G] = i.useState(!1),
        { showRedesign: F } = y.b.useExperiment({ location: 'profile customization' }),
        H = !B,
        z = i.useRef(null);
    return t
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)(h.Gt, {
              value: M,
              children: [
                  (0, r.jsx)(f.Z, {}),
                  (0, r.jsx)(_.Z, {
                      profilePreview: (0, r.jsx)(
                          E.Z,
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
                                  canUsePremiumCustomization: B,
                                  onUpsellClick: P.Z,
                                  pendingBio: L
                              },
                              k
                          )
                      ),
                      children: (0, r.jsx)(R.Z, {})
                  }),
                  F && (0, r.jsx)(j.Z, {}),
                  (0, r.jsx)(o.$, {
                      onChange: (e) => G(e),
                      threshold: 0.25,
                      active: H,
                      children: (0, r.jsx)('div', {
                          ref: z,
                          children: (0, r.jsx)(C.Z, {
                              user: e,
                              shouldShow: H,
                              isVisible: V
                          })
                      })
                  }),
                  H &&
                      !W &&
                      (0, r.jsx)(N.p, {
                          className: w.floatingNitroUpsell,
                          showUpsell: H && !V,
                          text: Z.NW.format(Z.t.TmfgIy, { onClick: () => (0, x.y)() }),
                          textVariant: 'heading-md/medium',
                          button: (0, r.jsxs)(c.gtL, {
                              className: w.floatingNitroButton,
                              innerClassName: w.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  T.default.track(D.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == z || null === (e = z.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
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
                                      children: Z.NW.string(Z.t.uw9zIy)
                                  })
                              ]
                          })
                      })
              ]
          });
}
