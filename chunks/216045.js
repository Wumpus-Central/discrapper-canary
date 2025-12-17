n.d(t, { Z: () => H }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(622535),
    c = n(481060),
    u = n(570140),
    d = n(809206),
    f = n(497321),
    p = n(100527),
    _ = n(906732),
    m = n(475977),
    h = n(957730),
    g = n(566697),
    E = n(53691),
    b = n(267717),
    y = n(150039),
    O = n(296810),
    v = n(678135),
    S = n(610794),
    I = n(935147),
    T = n(643879),
    C = n(246946),
    A = n(25990),
    N = n(594174),
    P = n(626135),
    R = n(74538),
    w = n(413182),
    D = n(695346),
    x = n(265159),
    L = n(532495),
    j = n(981631),
    M = n(388032),
    k = n(581571);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = V(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function H() {
    var e;
    let t = (0, s.e7)([N.default], () => {
            let e = N.default.getCurrentUser();
            return o()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        n = (0, s.e7)([C.Z], () => C.Z.hidePersonalInformation),
        a = (0, s.cj)([A.Z], () => A.Z.getAllPending()),
        { pendingBio: U, pendingAvatar: Z, pendingNameplate: V } = a,
        H = B(a, ["pendingBio", "pendingAvatar", "pendingNameplate"]),
        Y = (0, T.SD)({
            userId: t.id,
            image: Z,
        }),
        W = (0, y.Ys)({
            pendingValue: V,
            userValue: null == t || null == (e = t.collectibles) ? void 0 : e.nameplate,
        }),
        K = (0, s.e7)([A.Z], () => A.Z.showNotice()),
        z = D.dN.useSetting() && null != U ? h.ZP.parse(void 0, U).content : U,
        q = R.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: Q, newestAnalyticsLocation: X } = (0, _.ZP)(p.Z.USER_SETTINGS_USER_PROFILE);
    i.useEffect(() => () => u.Z.wait(d.W3), []);
    let [J, $] = i.useState(!1),
        { showRedesign: ee } = w.b.useExperiment({ location: "profile customization" }),
        et = !q,
        en = i.useRef(null);
    return n
        ? (0, r.jsx)(f.Z, {})
        : (0, r.jsxs)(_.Gt, {
              value: Q,
              children: [
                  (0, r.jsx)(m.Z, {}),
                  (0, r.jsx)(O.Z, {
                      profilePreview: (0, r.jsx)(
                          v.Z,
                          F(
                              G(
                                  {
                                      user: t,
                                      canUsePremiumCustomization: q,
                                      onUpsellClick: x.Z,
                                      pendingBio: z,
                                  },
                                  H,
                              ),
                              { pendingAvatar: Y },
                          ),
                      ),
                      nameplatePreview: (0, r.jsx)(
                          g.Z,
                          F(
                              G(
                                  {
                                      user: t,
                                      nameplate: W,
                                  },
                                  H,
                              ),
                              {
                                  className: null == W ? k.nameplatePreviewPlaceholder : void 0,
                                  isHighlighted: !0,
                              },
                          ),
                      ),
                      children: (0, r.jsx)(L.Z, {}),
                  }),
                  ee && (0, r.jsx)(S.Z, {}),
                  (0, r.jsx)(l.$, {
                      innerRef: en,
                      onChange: (e) => $(e),
                      threshold: 0.25,
                      active: et,
                      children: (0, r.jsx)("div", {
                          ref: en,
                          children: (0, r.jsx)(I.Z, {
                              user: t,
                              shouldShow: et,
                              isVisible: J,
                          }),
                      }),
                  }),
                  et &&
                      !K &&
                      (0, r.jsx)(E.p, {
                          className: k.floatingNitroUpsell,
                          showUpsell: et && !J,
                          text: M.intl.format(M.t.TmfgI2, { onClick: () => (0, b.y)({ analyticsSource: X }) }),
                          textVariant: "heading-md/medium",
                          button: (0, r.jsx)(c.Button, {
                              variant: "expressive",
                              onClick: () => {
                                  var e;
                                  P.default.track(j.rMx.TRY_IT_OUT_PRESET_CLICKED, {
                                      cta_variant: "floating_action_button",
                                  }),
                                      null == en ||
                                          null == (e = en.current) ||
                                          e.scrollIntoView({ behavior: "smooth" });
                              },
                              text: M.intl.string(M.t.uw9zI7),
                              icon: c.SrA,
                          }),
                      }),
              ],
          });
}
