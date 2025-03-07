n.d(t, { Z: () => M }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(622535),
    d = n(481060),
    u = n(570140),
    m = n(809206),
    p = n(497321),
    g = n(634894),
    h = n(100527),
    f = n(906732),
    b = n(475977),
    N = n(605236),
    x = n(957730),
    _ = n(53691),
    E = n(267717),
    j = n(296810),
    C = n(921813),
    O = n(610794),
    v = n(935147),
    S = n(643879),
    T = n(373230),
    I = n(246946),
    y = n(25990),
    A = n(594174),
    P = n(626135),
    R = n(74538),
    D = n(413182),
    Z = n(695346),
    w = n(265159),
    k = n(532495),
    W = n(981631),
    L = n(388032),
    B = n(355530);
function M() {
    var e, t;
    let n = (0, l.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return a()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
        }),
        s = (0, l.e7)([I.Z], () => I.Z.hidePersonalInformation),
        M = (0, l.cj)([y.Z], () => y.Z.getAllPending()),
        { pendingBio: U, pendingAvatarV2: V } = M,
        G = (function (e, t) {
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
        })(M, ['pendingBio', 'pendingAvatarV2']),
        F = (0, S.SD)({
            userId: n.id,
            image: V
        }),
        H = (0, l.e7)([y.Z], () => y.Z.showNotice()),
        z = Z.dN.useSetting() && null != U ? x.ZP.parse(void 0, U).content : U,
        Y = R.ZP.canUsePremiumProfileCustomization(n),
        { analyticsLocations: K } = (0, f.ZP)(h.Z.PROFILE);
    !(function () {
        let e = (0, T.Tq)({ location: 'UserSettingsProfileCustomization' }),
            t = (0, N.wE)(o.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE),
            n = e && !t;
        i.useEffect(() => {
            n && (0, N.EW)(o.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE, { forceTrack: !0 });
        }, [n]);
    })(),
        i.useEffect(() => () => u.Z.wait(m.W3), []);
    let q = 'UserSettingsProfileCustomization';
    (0, g.j)({
        location: q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, g.j)({
            location: q + ' auto off',
            autoTrackExposure: !1
        });
    let [X, J] = i.useState(!1),
        { showRedesign: Q } = D.b.useExperiment({ location: 'profile customization' }),
        $ = !Y,
        ee = i.useRef(null);
    return s
        ? (0, r.jsx)(p.Z, {})
        : (0, r.jsxs)(f.Gt, {
              value: K,
              children: [
                  (0, r.jsx)(b.Z, {}),
                  (0, r.jsx)(j.Z, {
                      profilePreview: (0, r.jsx)(
                          C.Z,
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
                                  canUsePremiumCustomization: Y,
                                  onUpsellClick: w.Z,
                                  pendingBio: z
                              },
                              G
                          )),
                          (t = t =
                              {
                                  pendingAvatar: F,
                                  showNameplatePreview: !0
                              }),
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
                      children: (0, r.jsx)(k.Z, {})
                  }),
                  Q && (0, r.jsx)(O.Z, {}),
                  (0, r.jsx)(c.$, {
                      onChange: (e) => J(e),
                      threshold: 0.25,
                      active: $,
                      children: (0, r.jsx)('div', {
                          ref: ee,
                          children: (0, r.jsx)(v.Z, {
                              user: n,
                              shouldShow: $,
                              isVisible: X
                          })
                      })
                  }),
                  $ &&
                      !H &&
                      (0, r.jsx)(_.p, {
                          className: B.floatingNitroUpsell,
                          showUpsell: $ && !X,
                          text: L.NW.format(L.t.TmfgIy, { onClick: () => (0, E.y)() }),
                          textVariant: 'heading-md/medium',
                          button: (0, r.jsxs)(d.gtL, {
                              className: B.floatingNitroButton,
                              innerClassName: B.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  P.default.track(W.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == ee || null === (e = ee.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
                              },
                              color: d.zxk.Colors.GREEN,
                              size: d.PhG.MEDIUM,
                              children: [
                                  (0, r.jsx)(d.SrA, {
                                      size: 'sm',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: L.NW.string(L.t.uw9zIy)
                                  })
                              ]
                          })
                      })
              ]
          });
}
