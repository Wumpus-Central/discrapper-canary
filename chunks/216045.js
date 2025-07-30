(n.d(t, { Z: () => H }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(622535),
    d = n(755721),
    u = n(481060),
    m = n(570140),
    p = n(809206),
    g = n(497321),
    h = n(100527),
    f = n(906732),
    b = n(475977),
    x = n(22267),
    _ = n(266454),
    j = n(243778),
    E = n(957730),
    O = n(53691),
    C = n(267717),
    v = n(296810),
    S = n(678135),
    T = n(610794),
    N = n(935147),
    I = n(643879),
    y = n(373230),
    A = n(726525),
    P = n(246946),
    R = n(25990),
    D = n(594174),
    Z = n(626135),
    w = n(74538),
    k = n(413182),
    L = n(695346),
    B = n(265159),
    M = n(532495),
    U = n(981631),
    V = n(921944),
    G = n(388032),
    F = n(775274);
function H() {
    var e, t;
    let n = (0, l.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return (a()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e);
        }),
        s = (0, l.e7)([P.Z], () => P.Z.hidePersonalInformation),
        H = (0, l.cj)([R.Z], () => R.Z.getAllPending()),
        { pendingBio: W, pendingAvatar: z, pendingNameplate: Y } = H,
        K = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(H, ['pendingBio', 'pendingAvatar', 'pendingNameplate']),
        q = (0, I.SD)({
            userId: n.id,
            image: z
        }),
        X = (0, l.e7)([R.Z], () => R.Z.showNotice()),
        J = L.dN.useSetting() && null != W ? E.ZP.parse(void 0, W).content : W,
        Q = w.ZP.canUsePremiumProfileCustomization(n),
        { analyticsLocations: $, newestAnalyticsLocation: ee } = (0, f.ZP)(h.Z.USER_SETTINGS_USER_PROFILE),
        et = (0, y.T)({ location: 'UserSettingsProfileCustomization' }),
        en = (0, _.Nj)(o.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE),
        ei = et && !en;
    r.useEffect(() => {
        ei && (0, _.Q3)(o.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE, { forceTrack: !0 });
    }, [ei]);
    let [er, es] = (0, j.US)([o.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE]),
        ea = er === o.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE;
    (r.useEffect(() => {
        ea && es(V.L.TAKE_ACTION);
    }, [ea, es]),
        r.useEffect(() => () => m.Z.wait(p.W3), []));
    let [el, eo] = r.useState(!1),
        { showRedesign: ec } = k.b.useExperiment({ location: 'profile customization' }),
        ed = (0, A.q)({ location: 'UserSettingsProfileCustomization' }),
        eu = !Q,
        em = r.useRef(null);
    return s
        ? (0, i.jsx)(g.Z, {})
        : (0, i.jsxs)(f.Gt, {
              value: $,
              children: [
                  (0, i.jsx)(b.Z, {}),
                  (0, i.jsx)(v.Z, {
                      showViewFullProfileButton: ed,
                      profilePreview: (0, i.jsx)(
                          S.Z,
                          ((e = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      i = Object.keys(n);
                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          ((i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = i));
                                      }));
                              }
                              return e;
                          })(
                              {
                                  user: n,
                                  canUsePremiumCustomization: Q,
                                  onUpsellClick: B.Z,
                                  pendingBio: J
                              },
                              K
                          )),
                          (t = t =
                              {
                                  pendingAvatar: q,
                                  showViewFullProfileButton: ed
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
                      nameplatePreview: (0, i.jsx)(x.Z, {
                          user: n,
                          nameplate: Y,
                          nameplateData: void 0 === Y ? n.nameplate : void 0,
                          pendingGlobalName: K.pendingGlobalName,
                          className: F.nameplatePreview,
                          isHighlighted: !0
                      }),
                      children: (0, i.jsx)(M.Z, {})
                  }),
                  ec && (0, i.jsx)(T.Z, {}),
                  (0, i.jsx)(c.$, {
                      innerRef: em,
                      onChange: (e) => eo(e),
                      threshold: 0.25,
                      active: eu,
                      children: (0, i.jsx)('div', {
                          ref: em,
                          children: (0, i.jsx)(N.Z, {
                              user: n,
                              shouldShow: eu,
                              isVisible: el
                          })
                      })
                  }),
                  eu &&
                      !X &&
                      (0, i.jsx)(O.p, {
                          className: F.floatingNitroUpsell,
                          showUpsell: eu && !el,
                          text: G.intl.format(G.t.TmfgIy, { onClick: () => (0, C.y)({ analyticsSource: ee }) }),
                          textVariant: 'heading-md/medium',
                          button: (0, i.jsxs)(u.gtL, {
                              className: F.floatingNitroButton,
                              innerClassName: F.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  (Z.default.track(U.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == em || null == (e = em.current) || e.scrollIntoView({ behavior: 'smooth' }));
                              },
                              color: d.zx.Colors.GREEN,
                              size: d.Ph.MEDIUM,
                              children: [
                                  (0, i.jsx)(u.SrA, {
                                      size: 'sm',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(u.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: G.intl.string(G.t.uw9zIy)
                                  })
                              ]
                          })
                      })
              ]
          });
}
