n.d(t, { Z: () => F }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(512722),
    l = n.n(s),
    a = n(442837),
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
    _ = n(605236),
    x = n(243778),
    E = n(957730),
    j = n(442933),
    C = n(53691),
    O = n(267717),
    S = n(296810),
    v = n(678135),
    T = n(610794),
    I = n(935147),
    N = n(643879),
    y = n(373230),
    A = n(246946),
    P = n(25990),
    R = n(594174),
    D = n(626135),
    Z = n(74538),
    w = n(413182),
    k = n(695346),
    L = n(265159),
    B = n(532495),
    M = n(981631),
    U = n(921944),
    V = n(388032),
    G = n(775274);
function F() {
    var e, t;
    let n = (0, a.e7)([R.default], () => {
            let e = R.default.getCurrentUser();
            return l()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
        }),
        s = (0, a.e7)([A.Z], () => A.Z.hidePersonalInformation),
        F = (0, a.cj)([P.Z], () => P.Z.getAllPending()),
        { pendingBio: H, pendingAvatar: z } = F,
        W = (function (e, t) {
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
        })(F, ['pendingBio', 'pendingAvatar']),
        Y = (0, N.SD)({
            userId: n.id,
            image: z
        }),
        K = (0, a.e7)([P.Z], () => P.Z.showNotice()),
        q = k.dN.useSetting() && null != H ? E.ZP.parse(void 0, H).content : H,
        X = Z.ZP.canUsePremiumProfileCustomization(n),
        { analyticsLocations: Q, newestAnalyticsLocation: J } = (0, f.ZP)(h.Z.USER_SETTINGS_USER_PROFILE),
        $ = (0, y.T)({ location: 'UserSettingsProfileCustomization' }),
        ee = (0, _.wE)(o.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE),
        et = $ && !ee;
    r.useEffect(() => {
        et && (0, _.EW)(o.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE, { forceTrack: !0 });
    }, [et]);
    let en = (0, j.H)('UserSettingsProfileCustomization'),
        [ei, er] = (0, x.US)(en ? [o.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE] : []),
        es = ei === o.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE;
    r.useEffect(() => {
        es && er(U.L.TAKE_ACTION);
    }, [es, er]),
        r.useEffect(() => () => u.Z.wait(m.W3), []);
    let el = 'UserSettingsProfileCustomization';
    (0, g.j)({
        location: el + ' auto on',
        autoTrackExposure: !0
    }),
        (0, g.j)({
            location: el + ' auto off',
            autoTrackExposure: !1
        });
    let [ea, eo] = r.useState(!1),
        { showRedesign: ec } = w.b.useExperiment({ location: 'profile customization' }),
        ed = !X,
        eu = r.useRef(null);
    return s
        ? (0, i.jsx)(p.Z, {})
        : (0, i.jsxs)(f.Gt, {
              value: Q,
              children: [
                  (0, i.jsx)(b.Z, {}),
                  (0, i.jsx)(S.Z, {
                      profilePreview: (0, i.jsx)(
                          v.Z,
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
                                  canUsePremiumCustomization: X,
                                  onUpsellClick: L.Z,
                                  pendingBio: q
                              },
                              W
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
                      children: (0, i.jsx)(B.Z, {})
                  }),
                  ec && (0, i.jsx)(T.Z, {}),
                  (0, i.jsx)(c.$, {
                      innerRef: eu,
                      onChange: (e) => eo(e),
                      threshold: 0.25,
                      active: ed,
                      children: (0, i.jsx)('div', {
                          ref: eu,
                          children: (0, i.jsx)(I.Z, {
                              user: n,
                              shouldShow: ed,
                              isVisible: ea
                          })
                      })
                  }),
                  ed &&
                      !K &&
                      (0, i.jsx)(C.p, {
                          className: G.floatingNitroUpsell,
                          showUpsell: ed && !ea,
                          text: V.intl.format(V.t.TmfgIy, { onClick: () => (0, O.y)({ analyticsSource: J }) }),
                          textVariant: 'heading-md/medium',
                          button: (0, i.jsxs)(d.gtL, {
                              className: G.floatingNitroButton,
                              innerClassName: G.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  D.default.track(M.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == eu || null == (e = eu.current) || e.scrollIntoView({ behavior: 'smooth' });
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
                                      children: V.intl.string(V.t.uw9zIy)
                                  })
                              ]
                          })
                      })
              ]
          });
}
