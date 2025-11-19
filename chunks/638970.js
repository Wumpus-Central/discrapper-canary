n.d(t, { Z: () => M }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(493773),
    u = n(468363),
    d = n(906732),
    f = n(313201),
    _ = n(158776),
    p = n(885110),
    h = n(823379),
    m = n(785717),
    g = n(369566),
    E = n(29899),
    b = n(510659),
    y = n(151545),
    O = n(769140),
    v = n(864141),
    I = n(228168),
    T = n(231338),
    S = n(388032),
    A = n(31948);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = 250,
    w = 24;
function L(e, t) {
    switch (t.type) {
        case "MEASUREMENT_COMPLETE":
            return P(N({}, e), {
                animationPhase: "ready",
                height: t.height,
            });
        case "START_EXPAND_ANIMATION":
            return P(N({}, e), {
                animationPhase: "animating",
                height: t.height,
            });
        case "ANIMATION_COMPLETE":
            return P(N({}, e), {
                animationPhase: "done",
                height: "auto",
            });
        default:
            return (0, h.vE)(t);
    }
}
let x = {
    animationPhase: "awaitingInput",
    height: "auto",
};
function M(e) {
    let { user: t, currentUser: n, guildId: a, onOpenUserProfileModal: h, onClose: C } = e,
        R = (0, f.Dt)(),
        { analyticsLocations: P } = (0, d.ZP)(),
        { trackUserProfileAction: M } = (0, m.KZ)(),
        { live: k, stream: j } = (0, g.Z)(t.id),
        { voiceChannel: U, voiceActivity: G } = (0, E.Z)({
            userId: t.id,
            guildId: a,
        }),
        B = t.id === n.id,
        Z = (0, s.e7)([p.Z, _.Z], () => {
            let e = B ? p.Z.getStatus() : _.Z.getStatus(t.id, a);
            return e === T.Sk.OFFLINE || e === T.Sk.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: F } = (0, u.U)({ location: "UserProfileStackedActivity" }),
        V = F && null == j && null == G && null != U,
        H = (0, b.yi)(),
        Y = (null == H ? void 0 : H.interactionSource) === I.n_.ACTIVITY,
        W = i.useRef(null),
        K = i.useRef(null),
        z = i.useRef(null),
        q = i.useRef(null),
        [X, Q] = i.useReducer(L, x),
        { height: J, animationPhase: $ } = X,
        ee = "awaitingInput" !== $,
        et = "animating" === $ || "done" === $,
        en = [],
        er = {
            user: t,
            currentUser: n,
            className: A.card,
            onClose: C,
        };
    null != j && en.push((0, r.jsx)(O.Z, N({ stream: j }, er), "stream")),
        k.forEach((e, t) => {
            en.push((0, r.jsx)(y.Z, N({ activity: e }, er), "live-".concat(t)));
        }),
        V && en.push((0, r.jsx)(v.Z, N({ voiceChannel: U }, er), "voice"));
    let [ei, ...ea] = en,
        eo = ea.length > 0,
        es =
            null != h && eo
                ? (0, r.jsx)("div", {
                      className: o()(A.viewAllButton, et && A.isShown),
                      children: (0, r.jsx)(l.Avr, {
                          onClick: () => {
                              M({
                                  action: "PRESS_VIEW_PROFILE",
                                  analyticsLocations: P,
                              }),
                                  h({ section: I.oh.ACTIVITY });
                          },
                          variant: "secondary",
                          text: S.intl.string(S.t.pD1L1u),
                          textVariant: "text-xs/medium",
                      }),
                  })
                : null,
        el = i.useCallback(() => {
            if (null == W.current || null == z.current) return;
            M({
                action: "PRESS_SHOW_MORE_ACTIVITY",
                analyticsLocations: P,
            });
            let e = W.current.getBoundingClientRect().height,
                t = z.current.getBoundingClientRect().height;
            Q({
                type: "MEASUREMENT_COMPLETE",
                height: e,
            }),
                requestAnimationFrame(() => {
                    Q({
                        type: "START_EXPAND_ANIMATION",
                        height: e + t - w,
                    }),
                        (q.current = setTimeout(() => {
                            var e;
                            Q({
                                type: "ANIMATION_COMPLETE",
                                height: "auto",
                            }),
                                null == (e = K.current) || e.focus();
                        }, D));
                });
        }, [P, M]);
    return ((0, c.zq)(() => {
        null != q.current && window.clearTimeout(q.current);
    }),
    Z || 0 === en.length)
        ? null
        : (0, r.jsxs)("section", {
              "aria-labelledby": R,
              children: [
                  (0, r.jsx)(l.nn4, {
                      children: (0, r.jsx)(l.H, {
                          id: R,
                          children: S.intl.string(S.t.J6STd9),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      ref: W,
                      className: A.activityContainer,
                      style: { height: "auto" !== J ? "".concat(J, "px") : J },
                      children: [
                          (0, r.jsxs)("ul", {
                              ref: K,
                              className: A.cardsList,
                              "aria-labelledby": R,
                              tabIndex: -1,
                              children: [
                                  (0, r.jsxs)("li", {
                                      className: o()(
                                          A.firstCardContainer,
                                          !et && ea.length > 0 && A.hasShowMoreButton,
                                          Y && A.isInteracting,
                                      ),
                                      children: [
                                          ei,
                                          eo &&
                                              "done" !== $ &&
                                              (0, r.jsx)("div", {
                                                  className: A.showMoreButtonContainer,
                                                  children: (0, r.jsx)(l.P3F, {
                                                      className: o()(A.showMoreButton, et && A.isHidden),
                                                      onClick: el,
                                                      children: (0, r.jsx)(l.Text, {
                                                          variant: "text-xs/medium",
                                                          color: "none",
                                                          children: S.intl.format(S.t.wv8Q7k, {
                                                              activitiesCount: ea.length,
                                                          }),
                                                      }),
                                                  }),
                                              }),
                                      ],
                                  }),
                                  eo &&
                                      ee &&
                                      ea.map((e, t) =>
                                          (0, r.jsx)(
                                              "li",
                                              {
                                                  className: o()(A.remainingCardContainer, et && A.isShown),
                                                  children: e,
                                              },
                                              "activity-".concat(t),
                                          ),
                                      ),
                              ],
                          }),
                          eo && ee && es,
                      ],
                  }),
                  eo &&
                      (0, r.jsxs)("div", {
                          ref: z,
                          className: o()(A.cardsList, A.remainingCardsCopyToMeasure),
                          children: [ea, es],
                      }),
              ],
          });
}
