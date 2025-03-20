n.d(t, { Z: () => G }), n(47120);
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
    g = n(497321),
    p = n(634894),
    h = n(100527),
    f = n(906732),
    x = n(475977),
    N = n(605236),
    b = n(243778),
    _ = n(957730),
    E = n(309351),
    j = n(53691),
    C = n(267717),
    O = n(296810),
    v = n(921813),
    S = n(610794),
    T = n(935147),
    I = n(643879),
    y = n(373230),
    A = n(246946),
    P = n(25990),
    R = n(594174),
    D = n(626135),
    Z = n(74538),
    w = n(413182),
    k = n(695346),
    W = n(265159),
    L = n(532495),
    B = n(981631),
    M = n(921944),
    U = n(388032),
    V = n(355530);
function G() {
    var e, t;
    let n = (0, l.e7)([R.default], () => {
            let e = R.default.getCurrentUser();
            return a()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
        }),
        s = (0, l.e7)([A.Z], () => A.Z.hidePersonalInformation),
        G = (0, l.cj)([P.Z], () => P.Z.getAllPending()),
        { pendingBio: F, pendingAvatar: H } = G,
        z = (function (e, t) {
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
        })(G, ['pendingBio', 'pendingAvatar']),
        Y = (0, I.SD)({
            userId: n.id,
            image: H
        }),
        K = (0, l.e7)([P.Z], () => P.Z.showNotice()),
        q = k.dN.useSetting() && null != F ? _.ZP.parse(void 0, F).content : F,
        X = Z.ZP.canUsePremiumProfileCustomization(n),
        { analyticsLocations: J } = (0, f.ZP)(h.Z.PROFILE);
    !(function () {
        let e = (0, y.Tq)({ location: 'UserSettingsProfileCustomization' }),
            t = (0, N.wE)(o.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE),
            n = e && !t;
        i.useEffect(() => {
            n && (0, N.EW)(o.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE, { forceTrack: !0 });
        }, [n]);
    })(),
        (function () {
            let e = (0, E.H)('UserSettingsProfileCustomization'),
                [t, n] = (0, b.US)(e ? [o.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE] : []),
                r = t === o.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE;
            i.useEffect(() => {
                r && n(M.L.TAKE_ACTION);
            }, [r, n]);
        })(),
        i.useEffect(() => () => u.Z.wait(m.W3), []);
    let Q = 'UserSettingsProfileCustomization';
    (0, p.j)({
        location: Q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, p.j)({
            location: Q + ' auto off',
            autoTrackExposure: !1
        });
    let [$, ee] = i.useState(!1),
        { showRedesign: et } = w.b.useExperiment({ location: 'profile customization' }),
        en = !X,
        er = i.useRef(null);
    return s
        ? (0, r.jsx)(g.Z, {})
        : (0, r.jsxs)(f.Gt, {
              value: J,
              children: [
                  (0, r.jsx)(x.Z, {}),
                  (0, r.jsx)(O.Z, {
                      profilePreview: (0, r.jsx)(
                          v.Z,
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
                                  canUsePremiumCustomization: X,
                                  onUpsellClick: W.Z,
                                  pendingBio: q
                              },
                              z
                          )),
                          (t = t =
                              {
                                  pendingAvatar: Y,
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
                      children: (0, r.jsx)(L.Z, {})
                  }),
                  et && (0, r.jsx)(S.Z, {}),
                  (0, r.jsx)(c.$, {
                      onChange: (e) => ee(e),
                      threshold: 0.25,
                      active: en,
                      children: (0, r.jsx)('div', {
                          ref: er,
                          children: (0, r.jsx)(T.Z, {
                              user: n,
                              shouldShow: en,
                              isVisible: $
                          })
                      })
                  }),
                  en &&
                      !K &&
                      (0, r.jsx)(j.p, {
                          className: V.floatingNitroUpsell,
                          showUpsell: en && !$,
                          text: U.NW.format(U.t.TmfgIy, { onClick: () => (0, C.y)() }),
                          textVariant: 'heading-md/medium',
                          button: (0, r.jsxs)(d.gtL, {
                              className: V.floatingNitroButton,
                              innerClassName: V.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  D.default.track(B.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == er || null === (e = er.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
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
                                      children: U.NW.string(U.t.uw9zIy)
                                  })
                              ]
                          })
                      })
              ]
          });
}
