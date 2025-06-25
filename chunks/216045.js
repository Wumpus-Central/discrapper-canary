n.d(t, { Z: () => G }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(512722),
    l = n.n(s),
    a = n(442837),
    o = n(704215),
    c = n(622535),
    d = n(481060),
    u = n(570140),
    m = n(809206),
    g = n(497321),
    p = n(634894),
    h = n(100527),
    f = n(906732),
    b = n(475977),
    _ = n(605236),
    x = n(243778),
    E = n(957730),
    j = n(53691),
    C = n(267717),
    O = n(296810),
    S = n(678135),
    v = n(610794),
    T = n(935147),
    N = n(643879),
    I = n(373230),
    y = n(246946),
    A = n(25990),
    P = n(594174),
    R = n(626135),
    D = n(74538),
    Z = n(413182),
    w = n(695346),
    k = n(265159),
    L = n(532495),
    B = n(981631),
    M = n(921944),
    U = n(388032),
    V = n(775274);
function G() {
    var e, t;
    let n = (0, a.e7)([P.default], () => {
            let e = P.default.getCurrentUser();
            return l()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
        }),
        s = (0, a.e7)([y.Z], () => y.Z.hidePersonalInformation),
        G = (0, a.cj)([A.Z], () => A.Z.getAllPending()),
        { pendingBio: F, pendingAvatar: H } = G,
        z = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(G, ['pendingBio', 'pendingAvatar']),
        Y = (0, N.SD)({
            userId: n.id,
            image: H
        }),
        W = (0, a.e7)([A.Z], () => A.Z.showNotice()),
        K = w.dN.useSetting() && null != F ? E.ZP.parse(void 0, F).content : F,
        q = D.ZP.canUsePremiumProfileCustomization(n),
        { analyticsLocations: X, newestAnalyticsLocation: J } = (0, f.ZP)(h.Z.USER_SETTINGS_USER_PROFILE),
        Q = (0, I.T)({ location: 'UserSettingsProfileCustomization' }),
        $ = (0, _.wE)(o.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE),
        ee = Q && !$;
    r.useEffect(() => {
        ee && (0, _.EW)(o.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE, { forceTrack: !0 });
    }, [ee]);
    let [et, en] = (0, x.US)([o.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE]),
        ei = et === o.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE;
    r.useEffect(() => {
        ei && en(M.L.TAKE_ACTION);
    }, [ei, en]),
        r.useEffect(() => () => u.Z.wait(m.W3), []);
    let er = 'UserSettingsProfileCustomization';
    (0, p.j)({
        location: er + ' auto on',
        autoTrackExposure: !0
    }),
        (0, p.j)({
            location: er + ' auto off',
            autoTrackExposure: !1
        });
    let [es, el] = r.useState(!1),
        { showRedesign: ea } = Z.b.useExperiment({ location: 'profile customization' }),
        eo = !q,
        ec = r.useRef(null);
    return s
        ? (0, i.jsx)(g.Z, {})
        : (0, i.jsxs)(f.Gt, {
              value: X,
              children: [
                  (0, i.jsx)(b.Z, {}),
                  (0, i.jsx)(O.Z, {
                      profilePreview: (0, i.jsx)(
                          S.Z,
                          ((e = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      i = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          (i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = i);
                                      });
                              }
                              return e;
                          })(
                              {
                                  user: n,
                                  canUsePremiumCustomization: q,
                                  onUpsellClick: k.Z,
                                  pendingBio: K
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
                                        var i = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(t)).forEach(function (n) {
                                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                }),
                          e)
                      ),
                      children: (0, i.jsx)(L.Z, {})
                  }),
                  ea && (0, i.jsx)(v.Z, {}),
                  (0, i.jsx)(c.$, {
                      innerRef: ec,
                      onChange: (e) => el(e),
                      threshold: 0.25,
                      active: eo,
                      children: (0, i.jsx)('div', {
                          ref: ec,
                          children: (0, i.jsx)(T.Z, {
                              user: n,
                              shouldShow: eo,
                              isVisible: es
                          })
                      })
                  }),
                  eo &&
                      !W &&
                      (0, i.jsx)(j.p, {
                          className: V.floatingNitroUpsell,
                          showUpsell: eo && !es,
                          text: U.intl.format(U.t.TmfgIy, { onClick: () => (0, C.y)({ analyticsSource: J }) }),
                          textVariant: 'heading-md/medium',
                          button: (0, i.jsxs)(d.gtL, {
                              className: V.floatingNitroButton,
                              innerClassName: V.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  R.default.track(B.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == ec || null == (e = ec.current) || e.scrollIntoView({ behavior: 'smooth' });
                              },
                              color: d.zxk.Colors.GREEN,
                              size: d.PhG.MEDIUM,
                              children: [
                                  (0, i.jsx)(d.SrA, {
                                      size: 'sm',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: U.intl.string(U.t.uw9zIy)
                                  })
                              ]
                          })
                      })
              ]
          });
}
