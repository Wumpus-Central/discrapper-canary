n.d(t, { Z: () => Q }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(622535),
    u = n(481060),
    d = n(570140),
    f = n(809206),
    p = n(497321),
    _ = n(100527),
    m = n(906732),
    h = n(475977),
    g = n(266454),
    E = n(243778),
    b = n(957730),
    y = n(566697),
    O = n(53691),
    v = n(267717),
    S = n(150039),
    I = n(296810),
    T = n(678135),
    A = n(610794),
    C = n(935147),
    N = n(643879),
    P = n(373230),
    R = n(246946),
    w = n(25990),
    D = n(594174),
    x = n(626135),
    L = n(74538),
    j = n(413182),
    M = n(695346),
    k = n(265159),
    U = n(532495),
    G = n(981631),
    Z = n(921944),
    B = n(388032),
    F = n(391371);
function V(e, t, n) {
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
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = z(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function q() {
    let e = (0, P.T)({ location: "UserSettingsProfileCustomization" }),
        t = (0, g.Nj)(l.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE),
        n = e && !t;
    i.useEffect(() => {
        n && (0, g.Q3)(l.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE, { forceTrack: !0 });
    }, [n]);
}
function X() {
    let [e, t] = (0, E.US)([l.z.DISPLAY_NAME_STYLES_NEW_BADGE]),
        n = e === l.z.DISPLAY_NAME_STYLES_NEW_BADGE;
    i.useEffect(() => {
        n && t(Z.L.TAKE_ACTION);
    }, [n, t]);
}
function Q() {
    var e;
    let t = (0, s.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return o()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        n = (0, s.e7)([R.Z], () => R.Z.hidePersonalInformation),
        a = (0, s.cj)([w.Z], () => w.Z.getAllPending()),
        { pendingBio: l, pendingAvatar: g, pendingNameplate: E } = a,
        P = K(a, ["pendingBio", "pendingAvatar", "pendingNameplate"]),
        Z = (0, N.SD)({
            userId: t.id,
            image: g,
        }),
        V = (0, S.Ys)({
            pendingValue: E,
            userValue: null == t || null == (e = t.collectibles) ? void 0 : e.nameplate,
        }),
        Y = (0, s.e7)([w.Z], () => w.Z.showNotice()),
        z = M.dN.useSetting() && null != l ? b.ZP.parse(void 0, l).content : l,
        Q = L.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: J, newestAnalyticsLocation: $ } = (0, m.ZP)(_.Z.USER_SETTINGS_USER_PROFILE);
    q(), X(), i.useEffect(() => () => d.Z.wait(f.W3), []);
    let [ee, et] = i.useState(!1),
        { showRedesign: en } = j.b.useExperiment({ location: "profile customization" }),
        er = !Q,
        ei = i.useRef(null);
    return n
        ? (0, r.jsx)(p.Z, {})
        : (0, r.jsxs)(m.Gt, {
              value: J,
              children: [
                  (0, r.jsx)(h.Z, {}),
                  (0, r.jsx)(I.Z, {
                      profilePreview: (0, r.jsx)(
                          T.Z,
                          W(
                              H(
                                  {
                                      user: t,
                                      canUsePremiumCustomization: Q,
                                      onUpsellClick: k.Z,
                                      pendingBio: z,
                                  },
                                  P,
                              ),
                              { pendingAvatar: Z },
                          ),
                      ),
                      nameplatePreview: (0, r.jsx)(
                          y.Z,
                          W(
                              H(
                                  {
                                      user: t,
                                      nameplate: V,
                                  },
                                  P,
                              ),
                              {
                                  className: null == V ? F.nameplatePreviewPlaceholder : void 0,
                                  isHighlighted: !0,
                              },
                          ),
                      ),
                      children: (0, r.jsx)(U.Z, {}),
                  }),
                  en && (0, r.jsx)(A.Z, {}),
                  (0, r.jsx)(c.$, {
                      innerRef: ei,
                      onChange: (e) => et(e),
                      threshold: 0.25,
                      active: er,
                      children: (0, r.jsx)("div", {
                          ref: ei,
                          children: (0, r.jsx)(C.Z, {
                              user: t,
                              shouldShow: er,
                              isVisible: ee,
                          }),
                      }),
                  }),
                  er &&
                      !Y &&
                      (0, r.jsx)(O.p, {
                          className: F.floatingNitroUpsell,
                          showUpsell: er && !ee,
                          text: B.intl.format(B.t.TmfgI2, { onClick: () => (0, v.y)({ analyticsSource: $ }) }),
                          textVariant: "heading-md/medium",
                          button: (0, r.jsx)(u.Button, {
                              variant: "expressive",
                              onClick: () => {
                                  var e;
                                  x.default.track(G.rMx.TRY_IT_OUT_PRESET_CLICKED, {
                                      cta_variant: "floating_action_button",
                                  }),
                                      null == ei ||
                                          null == (e = ei.current) ||
                                          e.scrollIntoView({ behavior: "smooth" });
                              },
                              text: B.intl.string(B.t.uw9zI7),
                              icon: u.SrA,
                          }),
                      }),
              ],
          });
}
