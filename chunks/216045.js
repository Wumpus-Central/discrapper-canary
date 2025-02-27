n.d(t, { Z: () => W }), n(47120);
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
    O = n(643879),
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
    var e, t;
    let n = (0, l.e7)([T.default], () => {
            let e = T.default.getCurrentUser();
            return a()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
        }),
        s = (0, l.e7)([v.Z], () => v.Z.hidePersonalInformation),
        W = (0, l.cj)([S.Z], () => S.Z.getAllPending()),
        { pendingBio: L, pendingAvatarV2: B } = W,
        M = (function (e, t) {
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
        })(W, ['pendingBio', 'pendingAvatarV2']),
        U = (0, O.SD)({
            userId: n.id,
            image: B
        }),
        V = (0, l.e7)([S.Z], () => S.Z.showNotice()),
        G = P.dN.useSetting() && null != L ? b.ZP.parse(void 0, L).content : L,
        F = y.ZP.canUsePremiumProfileCustomization(n),
        { analyticsLocations: H } = (0, h.ZP)(p.Z.PROFILE);
    i.useEffect(() => () => d.Z.wait(u.W3), []);
    let z = 'UserSettingsProfileCustomization';
    (0, g.j)({
        location: z + ' auto on',
        autoTrackExposure: !0
    }),
        (0, g.j)({
            location: z + ' auto off',
            autoTrackExposure: !1
        });
    let [Y, K] = i.useState(!1),
        { showRedesign: q } = A.b.useExperiment({ location: 'profile customization' }),
        X = !F,
        J = i.useRef(null);
    return s
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsxs)(h.Gt, {
              value: H,
              children: [
                  (0, r.jsx)(f.Z, {}),
                  (0, r.jsx)(_.Z, {
                      profilePreview: (0, r.jsx)(
                          E.Z,
                          ((e = (function (e) {
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
                                  user: n,
                                  canUsePremiumCustomization: F,
                                  onUpsellClick: R.Z,
                                  pendingBio: G
                              },
                              M
                          )),
                          (t = t = { pendingAvatar: U }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(t)).forEach(function (n) {
                                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                }),
                          e)
                      ),
                      children: (0, r.jsx)(D.Z, {})
                  }),
                  q && (0, r.jsx)(j.Z, {}),
                  (0, r.jsx)(o.$, {
                      onChange: (e) => K(e),
                      threshold: 0.25,
                      active: X,
                      children: (0, r.jsx)('div', {
                          ref: J,
                          children: (0, r.jsx)(C.Z, {
                              user: n,
                              shouldShow: X,
                              isVisible: Y
                          })
                      })
                  }),
                  X &&
                      !V &&
                      (0, r.jsx)(N.p, {
                          className: k.floatingNitroUpsell,
                          showUpsell: X && !Y,
                          text: w.NW.format(w.t.TmfgIy, { onClick: () => (0, x.y)() }),
                          textVariant: 'heading-md/medium',
                          button: (0, r.jsxs)(c.gtL, {
                              className: k.floatingNitroButton,
                              innerClassName: k.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  I.default.track(Z.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == J || null === (e = J.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
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
