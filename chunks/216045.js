n.d(t, { Z: () => F }), n(388685);
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
    C = n(53691),
    O = n(267717),
    v = n(296810),
    S = n(678135),
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
    M = n(532495),
    B = n(981631),
    U = n(921944),
    V = n(388032),
    G = n(775274);
function F() {
    var e, t;
    let n = (0, l.e7)([R.default], () => {
            let e = R.default.getCurrentUser();
            return a()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        s = (0, l.e7)([A.Z], () => A.Z.hidePersonalInformation),
        F = (0, l.cj)([P.Z], () => P.Z.getAllPending()),
        { pendingBio: H, pendingAvatar: z, pendingNameplate: W } = F,
        Y = (function (e, t) {
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
                for (i = 0; i < s.length; i++)
                    (n = s[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(F, ["pendingBio", "pendingAvatar", "pendingNameplate"]),
        K = (0, N.SD)({
            userId: n.id,
            image: z,
        }),
        q = (0, l.e7)([P.Z], () => P.Z.showNotice()),
        X = k.dN.useSetting() && null != H ? E.ZP.parse(void 0, H).content : H,
        J = Z.ZP.canUsePremiumProfileCustomization(n),
        { analyticsLocations: Q, newestAnalyticsLocation: $ } = (0, f.ZP)(h.Z.USER_SETTINGS_USER_PROFILE),
        ee = (0, y.T)({ location: "UserSettingsProfileCustomization" }),
        et = (0, _.Nj)(o.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE),
        en = ee && !et;
    r.useEffect(() => {
        en && (0, _.Q3)(o.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE, { forceTrack: !0 });
    }, [en]);
    let [ei, er] = (0, j.US)([o.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE]),
        es = ei === o.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE;
    r.useEffect(() => {
        es && er(U.L.TAKE_ACTION);
    }, [es, er]),
        r.useEffect(() => () => m.Z.wait(p.W3), []);
    let [ea, el] = r.useState(!1),
        { showRedesign: eo } = w.b.useExperiment({ location: "profile customization" }),
        ec = !J,
        ed = r.useRef(null);
    return s
        ? (0, i.jsx)(g.Z, {})
        : (0, i.jsxs)(f.Gt, {
              value: Q,
              children: [
                  (0, i.jsx)(b.Z, {}),
                  (0, i.jsx)(v.Z, {
                      profilePreview: (0, i.jsx)(
                          S.Z,
                          ((e = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      i = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          (i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = i);
                                      });
                              }
                              return e;
                          })(
                              {
                                  user: n,
                                  canUsePremiumCustomization: J,
                                  onUpsellClick: L.Z,
                                  pendingBio: X,
                              },
                              Y,
                          )),
                          (t = t = { pendingAvatar: K }),
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
                          e),
                      ),
                      nameplatePreview: (0, i.jsx)(x.Z, {
                          user: n,
                          nameplate: W,
                          nameplateData: void 0 === W ? n.nameplate : void 0,
                          pendingGlobalName: Y.pendingGlobalName,
                          className: G.nameplatePreview,
                          isHighlighted: !0,
                      }),
                      children: (0, i.jsx)(M.Z, {}),
                  }),
                  eo && (0, i.jsx)(T.Z, {}),
                  (0, i.jsx)(c.$, {
                      innerRef: ed,
                      onChange: (e) => el(e),
                      threshold: 0.25,
                      active: ec,
                      children: (0, i.jsx)("div", {
                          ref: ed,
                          children: (0, i.jsx)(I.Z, {
                              user: n,
                              shouldShow: ec,
                              isVisible: ea,
                          }),
                      }),
                  }),
                  ec &&
                      !q &&
                      (0, i.jsx)(C.p, {
                          className: G.floatingNitroUpsell,
                          showUpsell: ec && !ea,
                          text: V.intl.format(V.t.TmfgIy, { onClick: () => (0, O.y)({ analyticsSource: $ }) }),
                          textVariant: "heading-md/medium",
                          button: (0, i.jsxs)(u.gtL, {
                              className: G.floatingNitroButton,
                              innerClassName: G.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  D.default.track(B.rMx.TRY_IT_OUT_PRESET_CLICKED, {
                                      cta_variant: "floating_action_button",
                                  }),
                                      null == ed ||
                                          null == (e = ed.current) ||
                                          e.scrollIntoView({ behavior: "smooth" });
                              },
                              color: d.zx.Colors.GREEN,
                              size: d.Ph.MEDIUM,
                              children: [
                                  (0, i.jsx)(u.SrA, {
                                      size: "sm",
                                      color: "currentColor",
                                  }),
                                  (0, i.jsx)(u.Text, {
                                      variant: "text-sm/medium",
                                      color: "currentColor",
                                      children: V.intl.string(V.t.uw9zIy),
                                  }),
                              ],
                          }),
                      }),
              ],
          });
}
