n.d(t, { Z: () => J }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(622535),
    u = n(755721),
    d = n(481060),
    f = n(570140),
    _ = n(809206),
    p = n(497321),
    h = n(100527),
    m = n(906732),
    g = n(475977),
    E = n(22267),
    b = n(266454),
    y = n(243778),
    O = n(957730),
    v = n(53691),
    I = n(267717),
    T = n(296810),
    S = n(678135),
    A = n(610794),
    C = n(935147),
    N = n(643879),
    R = n(373230),
    P = n(246946),
    w = n(25990),
    D = n(594174),
    x = n(626135),
    L = n(74538),
    j = n(413182),
    M = n(695346),
    k = n(265159),
    U = n(532495),
    G = n(981631),
    B = n(921944),
    Z = n(388032),
    V = n(391371);
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
                F(e, t, n[t]);
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
    let e = (0, R.T)({ location: "UserSettingsProfileCustomization" }),
        t = (0, b.Nj)(l.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE),
        n = e && !t;
    i.useEffect(() => {
        n && (0, b.Q3)(l.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE, { forceTrack: !0 });
    }, [n]);
}
function X() {
    let [e, t] = (0, y.US)([l.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE]),
        n = e === l.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE;
    i.useEffect(() => {
        n && t(B.L.TAKE_ACTION);
    }, [n, t]);
}
function Q() {
    let [e, t] = (0, y.US)([l.z.DISPLAY_NAME_STYLES_NEW_BADGE]),
        n = e === l.z.DISPLAY_NAME_STYLES_NEW_BADGE;
    i.useEffect(() => {
        n && t(B.L.TAKE_ACTION);
    }, [n, t]);
}
function J() {
    let e = (0, s.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return o()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, s.e7)([P.Z], () => P.Z.hidePersonalInformation),
        n = (0, s.cj)([w.Z], () => w.Z.getAllPending()),
        { pendingBio: a, pendingAvatar: l, pendingNameplate: b } = n,
        y = K(n, ["pendingBio", "pendingAvatar", "pendingNameplate"]),
        R = (0, N.SD)({
            userId: e.id,
            image: l,
        }),
        B = (0, s.e7)([w.Z], () => w.Z.showNotice()),
        F = M.dN.useSetting() && null != a ? O.ZP.parse(void 0, a).content : a,
        Y = L.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: z, newestAnalyticsLocation: J } = (0, m.ZP)(h.Z.USER_SETTINGS_USER_PROFILE);
    q(), X(), Q(), i.useEffect(() => () => f.Z.wait(_.W3), []);
    let [$, ee] = i.useState(!1),
        { showRedesign: et } = j.b.useExperiment({ location: "profile customization" }),
        en = !Y,
        er = i.useRef(null);
    return t
        ? (0, r.jsx)(p.Z, {})
        : (0, r.jsxs)(m.Gt, {
              value: z,
              children: [
                  (0, r.jsx)(g.Z, {}),
                  (0, r.jsx)(T.Z, {
                      profilePreview: (0, r.jsx)(
                          S.Z,
                          W(
                              H(
                                  {
                                      user: e,
                                      canUsePremiumCustomization: Y,
                                      onUpsellClick: k.Z,
                                      pendingBio: F,
                                  },
                                  y,
                              ),
                              { pendingAvatar: R },
                          ),
                      ),
                      nameplatePreview: (0, r.jsx)(
                          E.Z,
                          W(
                              H(
                                  {
                                      user: e,
                                      nameplate: b,
                                      nameplateData: void 0 === b ? e.nameplate : void 0,
                                  },
                                  y,
                              ),
                              {
                                  className: V.nameplatePreview,
                                  isHighlighted: !0,
                              },
                          ),
                      ),
                      children: (0, r.jsx)(U.Z, {}),
                  }),
                  et && (0, r.jsx)(A.Z, {}),
                  (0, r.jsx)(c.$, {
                      innerRef: er,
                      onChange: (e) => ee(e),
                      threshold: 0.25,
                      active: en,
                      children: (0, r.jsx)("div", {
                          ref: er,
                          children: (0, r.jsx)(C.Z, {
                              user: e,
                              shouldShow: en,
                              isVisible: $,
                          }),
                      }),
                  }),
                  en &&
                      !B &&
                      (0, r.jsx)(v.p, {
                          className: V.floatingNitroUpsell,
                          showUpsell: en && !$,
                          text: Z.intl.format(Z.t.TmfgIy, { onClick: () => (0, I.y)({ analyticsSource: J }) }),
                          textVariant: "heading-md/medium",
                          button: (0, r.jsxs)(d.gtL, {
                              className: V.floatingNitroButton,
                              innerClassName: V.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  x.default.track(G.rMx.TRY_IT_OUT_PRESET_CLICKED, {
                                      cta_variant: "floating_action_button",
                                  }),
                                      null == er ||
                                          null == (e = er.current) ||
                                          e.scrollIntoView({ behavior: "smooth" });
                              },
                              color: u.zx.Colors.GREEN,
                              size: u.Ph.MEDIUM,
                              children: [
                                  (0, r.jsx)(d.SrA, {
                                      size: "sm",
                                      color: "currentColor",
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      variant: "text-sm/medium",
                                      color: "currentColor",
                                      children: Z.intl.string(Z.t.uw9zIy),
                                  }),
                              ],
                          }),
                      }),
              ],
          });
}
