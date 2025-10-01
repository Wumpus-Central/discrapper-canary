n.d(t, { Z: () => U }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(493773),
    u = n(833664),
    d = n(468363),
    f = n(906732),
    _ = n(313201),
    p = n(220410),
    h = n(158776),
    m = n(885110),
    g = n(823379),
    E = n(785717),
    b = n(369566),
    y = n(29899),
    O = n(510659),
    v = n(168463),
    I = n(151545),
    T = n(769140),
    S = n(864141),
    A = n(228168),
    C = n(231338),
    N = n(388032),
    R = n(923805);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = 250,
    j = 24;
function M(e, t) {
    switch (t.type) {
        case "MEASUREMENT_COMPLETE":
            return L(w({}, e), {
                animationPhase: "ready",
                height: t.height,
            });
        case "START_EXPAND_ANIMATION":
            return L(w({}, e), {
                animationPhase: "animating",
                height: t.height,
            });
        case "ANIMATION_COMPLETE":
            return L(w({}, e), {
                animationPhase: "done",
                height: "auto",
            });
        default:
            return (0, g.vE)(t);
    }
}
let k = {
    animationPhase: "awaitingInput",
    height: "auto",
};
function U(e) {
    let { user: t, currentUser: n, guildId: a, onOpenUserProfileModal: g, onClose: P } = e,
        D = (0, _.Dt)(),
        { analyticsLocations: L } = (0, f.ZP)(),
        { trackUserProfileAction: U } = (0, E.KZ)(),
        { live: G, stream: B } = (0, b.Z)(t.id),
        { voiceChannel: Z, voiceActivity: F } = (0, y.Z)({
            userId: t.id,
            guildId: a,
        }),
        V = t.id === n.id,
        H = (0, s.e7)([m.Z, h.Z], () => {
            let e = V ? m.Z.getStatus() : h.Z.getStatus(t.id, a);
            return e === C.Sk.OFFLINE || e === C.Sk.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: Y } = (0, d.U)({ location: "UserProfileStackedActivity" }),
        W = Y && null == B && null == F && null != Z,
        K = (0, O.yi)(),
        z = (null == K ? void 0 : K.interactionSource) === A.n_.ACTIVITY,
        q = i.useRef(null),
        X = i.useRef(null),
        Q = i.useRef(null),
        J = i.useRef(null),
        [$, ee] = i.useReducer(M, k),
        { height: et, animationPhase: en } = $,
        er = "awaitingInput" !== en,
        ei = "animating" === en || "done" === en,
        ea = (0, p.P6)("UserProfileStackedActivity"),
        eo = [],
        es = {
            user: t,
            currentUser: n,
            className: R.card,
            onClose: P,
        };
    null != B && eo.push((0, r.jsx)(T.Z, w({ stream: B }, es), "stream")),
        G.forEach((e, t) => {
            eo.push((0, r.jsx)(I.Z, w({ activity: e }, es), "live-".concat(t)));
        }),
        W && eo.push((0, r.jsx)(S.Z, w({ voiceChannel: Z }, es), "voice"));
    let [el, ...ec] = eo,
        eu = ec.length > 0,
        ed =
            null != g && eu
                ? (0, r.jsx)("div", {
                      className: o()(R.viewAllButton, ei && R.isShown),
                      children: (0, r.jsx)(l.Avr, {
                          onClick: () => {
                              U({
                                  action: "PRESS_VIEW_PROFILE",
                                  analyticsLocations: L,
                              }),
                                  g({ section: A.oh.ACTIVITY });
                          },
                          variant: "secondary",
                          text: N.intl.string(N.t.pD1L1t),
                          textVariant: "text-xs/medium",
                      }),
                  })
                : null,
        ef = i.useCallback(() => {
            if (null == q.current || null == Q.current) return;
            U({
                action: "PRESS_SHOW_MORE_ACTIVITY",
                analyticsLocations: L,
            });
            let e = q.current.getBoundingClientRect().height,
                t = Q.current.getBoundingClientRect().height;
            ee({
                type: "MEASUREMENT_COMPLETE",
                height: e,
            }),
                requestAnimationFrame(() => {
                    ee({
                        type: "START_EXPAND_ANIMATION",
                        height: e + t - j,
                    }),
                        (J.current = setTimeout(() => {
                            var e;
                            ee({
                                type: "ANIMATION_COMPLETE",
                                height: "auto",
                            }),
                                null == (e = X.current) || e.focus();
                        }, x));
                });
        }, [L, U]);
    if (
        ((0, c.zq)(() => {
            null != J.current && window.clearTimeout(J.current);
        }),
        H)
    )
        return null;
    let e_ = G.some((e) => (0, u.Z)(e)),
        ep = V && ea && !e_;
    return 0 === eo.length
        ? ep
            ? (0, r.jsx)(v.Z, {})
            : null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  ep && (0, r.jsx)(v.Z, {}),
                  (0, r.jsxs)("section", {
                      "aria-labelledby": D,
                      children: [
                          (0, r.jsx)(l.nn4, {
                              children: (0, r.jsx)(l.H, {
                                  id: D,
                                  children: N.intl.string(N.t.J6STd3),
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              ref: q,
                              className: R.activityContainer,
                              style: { height: "auto" !== et ? "".concat(et, "px") : et },
                              children: [
                                  (0, r.jsxs)("ul", {
                                      ref: X,
                                      className: R.cardsList,
                                      "aria-labelledby": D,
                                      tabIndex: -1,
                                      children: [
                                          (0, r.jsxs)("li", {
                                              className: o()(
                                                  R.firstCardContainer,
                                                  !ei && ec.length > 0 && R.hasShowMoreButton,
                                                  z && R.isInteracting,
                                              ),
                                              children: [
                                                  el,
                                                  eu &&
                                                      "done" !== en &&
                                                      (0, r.jsx)("div", {
                                                          className: R.showMoreButtonContainer,
                                                          children: (0, r.jsx)(l.P3F, {
                                                              className: o()(R.showMoreButton, ei && R.isHidden),
                                                              onClick: ef,
                                                              children: (0, r.jsx)(l.Text, {
                                                                  variant: "text-xs/medium",
                                                                  color: "none",
                                                                  children: N.intl.format(N.t.wv8Q7u, {
                                                                      activitiesCount: ec.length,
                                                                  }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          eu &&
                                              er &&
                                              ec.map((e, t) =>
                                                  (0, r.jsx)(
                                                      "li",
                                                      {
                                                          className: o()(R.remainingCardContainer, ei && R.isShown),
                                                          children: e,
                                                      },
                                                      "activity-".concat(t),
                                                  ),
                                              ),
                                      ],
                                  }),
                                  eu && er && ed,
                              ],
                          }),
                          eu &&
                              (0, r.jsxs)("div", {
                                  ref: Q,
                                  className: o()(R.cardsList, R.remainingCardsCopyToMeasure),
                                  children: [ec, ed],
                              }),
                      ],
                  }),
              ],
          });
}
