n.d(t, { Z: () => X }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(622535),
    u = n(481060),
    d = n(570140),
    f = n(809206),
    _ = n(497321),
    p = n(100527),
    h = n(906732),
    m = n(475977),
    g = n(22267),
    E = n(266454),
    b = n(243778),
    y = n(957730),
    O = n(53691),
    v = n(267717),
    I = n(296810),
    T = n(678135),
    S = n(610794),
    A = n(935147),
    C = n(643879),
    N = n(373230),
    R = n(246946),
    P = n(25990),
    w = n(594174),
    D = n(626135),
    L = n(74538),
    x = n(413182),
    M = n(695346),
    j = n(265159),
    k = n(532495),
    U = n(981631),
    G = n(921944),
    B = n(388032),
    Z = n(391371);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = K(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function z() {
    let e = (0, N.T)({ location: "UserSettingsProfileCustomization" }),
        t = (0, E.Nj)(l.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE),
        n = e && !t;
    i.useEffect(() => {
        n && (0, E.Q3)(l.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE, { forceTrack: !0 });
    }, [n]);
}
function q() {
    let [e, t] = (0, b.US)([l.z.DISPLAY_NAME_STYLES_NEW_BADGE]),
        n = e === l.z.DISPLAY_NAME_STYLES_NEW_BADGE;
    i.useEffect(() => {
        n && t(G.L.TAKE_ACTION);
    }, [n, t]);
}
function X() {
    let e = (0, s.e7)([w.default], () => {
            let e = w.default.getCurrentUser();
            return o()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, s.e7)([R.Z], () => R.Z.hidePersonalInformation),
        n = (0, s.cj)([P.Z], () => P.Z.getAllPending()),
        { pendingBio: a, pendingAvatar: l, pendingNameplate: E } = n,
        b = W(n, ["pendingBio", "pendingAvatar", "pendingNameplate"]),
        N = (0, C.SD)({
            userId: e.id,
            image: l,
        }),
        G = (0, s.e7)([P.Z], () => P.Z.showNotice()),
        F = M.dN.useSetting() && null != a ? y.ZP.parse(void 0, a).content : a,
        H = L.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: K, newestAnalyticsLocation: X } = (0, h.ZP)(p.Z.USER_SETTINGS_USER_PROFILE);
    z(), q(), i.useEffect(() => () => d.Z.wait(f.W3), []);
    let [Q, J] = i.useState(!1),
        { showRedesign: $ } = x.b.useExperiment({ location: "profile customization" }),
        ee = !H,
        et = i.useRef(null);
    return t
        ? (0, r.jsx)(_.Z, {})
        : (0, r.jsxs)(h.Gt, {
              value: K,
              children: [
                  (0, r.jsx)(m.Z, {}),
                  (0, r.jsx)(I.Z, {
                      profilePreview: (0, r.jsx)(
                          T.Z,
                          Y(
                              V(
                                  {
                                      user: e,
                                      canUsePremiumCustomization: H,
                                      onUpsellClick: j.Z,
                                      pendingBio: F,
                                  },
                                  b,
                              ),
                              { pendingAvatar: N },
                          ),
                      ),
                      nameplatePreview: (0, r.jsx)(
                          g.Z,
                          Y(
                              V(
                                  {
                                      user: e,
                                      nameplate: E,
                                      nameplateData: void 0 === E ? e.nameplate : void 0,
                                  },
                                  b,
                              ),
                              {
                                  className: Z.nameplatePreview,
                                  isHighlighted: !0,
                              },
                          ),
                      ),
                      children: (0, r.jsx)(k.Z, {}),
                  }),
                  $ && (0, r.jsx)(S.Z, {}),
                  (0, r.jsx)(c.$, {
                      innerRef: et,
                      onChange: (e) => J(e),
                      threshold: 0.25,
                      active: ee,
                      children: (0, r.jsx)("div", {
                          ref: et,
                          children: (0, r.jsx)(A.Z, {
                              user: e,
                              shouldShow: ee,
                              isVisible: Q,
                          }),
                      }),
                  }),
                  ee &&
                      !G &&
                      (0, r.jsx)(O.p, {
                          className: Z.floatingNitroUpsell,
                          showUpsell: ee && !Q,
                          text: B.intl.format(B.t.TmfgIy, { onClick: () => (0, v.y)({ analyticsSource: X }) }),
                          textVariant: "heading-md/medium",
                          button: (0, r.jsx)(u.Button, {
                              variant: "expressive",
                              onClick: () => {
                                  var e;
                                  D.default.track(U.rMx.TRY_IT_OUT_PRESET_CLICKED, {
                                      cta_variant: "floating_action_button",
                                  }),
                                      null == et ||
                                          null == (e = et.current) ||
                                          e.scrollIntoView({ behavior: "smooth" });
                              },
                              text: B.intl.string(B.t.uw9zIy),
                              icon: u.SrA,
                          }),
                      }),
              ],
          });
}
