(n.d(t, { Z: () => k }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(493773),
    d = n(468363),
    f = n(906732),
    _ = n(158776),
    p = n(885110),
    h = n(823379),
    m = n(785717),
    g = n(369566),
    E = n(29899),
    b = n(510659),
    y = n(151545),
    O = n(493043),
    v = n(864141),
    I = n(228168),
    T = n(231338),
    S = n(388032),
    A = n(608459);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            }));
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
let w = 250,
    D = 24;
function L(e, t) {
    switch (t.type) {
        case 'MEASUREMENT_COMPLETE':
            return P(C({}, e), {
                animationPhase: 'ready',
                height: t.height
            });
        case 'START_EXPAND_ANIMATION':
            return P(C({}, e), {
                animationPhase: 'animating',
                height: t.height
            });
        case 'ANIMATION_COMPLETE':
            return P(C({}, e), {
                animationPhase: 'done',
                height: 'auto'
            });
        default:
            return (0, h.vE)(t);
    }
}
let x = {
    animationPhase: 'awaitingInput',
    height: 'auto'
};
function k(e) {
    let { user: t, currentUser: n, displayProfile: a, guildId: h, onOpenUserProfileModal: N, onClose: R } = e,
        { analyticsLocations: P } = (0, f.ZP)(),
        { trackUserProfileAction: k } = (0, m.KZ)(),
        { live: M, stream: j } = (0, g.Z)(t.id),
        { voiceChannel: U, voiceActivity: G } = (0, E.Z)({
            userId: t.id,
            guildId: h
        }),
        B = t.id === n.id,
        V = (0, s.e7)([p.Z, _.Z], () => {
            let e = B ? p.Z.getStatus() : _.Z.getStatus(t.id, h);
            return e === T.Sk.OFFLINE || e === T.Sk.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: F } = (0, d.U)({ location: 'UserProfileStackedActivity' }),
        Z = F && null == j && null == G && null != U,
        H = (0, b.yi)(),
        Y = (null == H ? void 0 : H.interactionSource) === I.n_.ACTIVITY,
        W = i.useRef(null),
        K = i.useRef(null),
        z = i.useRef(null),
        q = i.useRef(null),
        [X, Q] = i.useReducer(L, x),
        { height: J, animationPhase: $ } = X,
        ee = 'awaitingInput' !== $,
        et = 'animating' === $ || 'done' === $,
        en = [],
        er = {
            user: t,
            currentUser: n,
            className: A.card,
            onClose: R
        };
    (null != j &&
        en.push(
            (0, r.jsx)(
                O.Z,
                C(
                    {
                        location: 'UserProfileStackedActivity',
                        stream: j,
                        profileGuildId: null == a ? void 0 : a.guildId
                    },
                    er
                ),
                'stream'
            )
        ),
        M.forEach((e, t) => {
            en.push(
                (0, r.jsx)(
                    y.Z,
                    C(
                        {
                            activity: e,
                            profileGuildId: null == a ? void 0 : a.guildId
                        },
                        er
                    ),
                    'live-'.concat(t)
                )
            );
        }),
        Z && en.push((0, r.jsx)(v.Z, C({ voiceChannel: U }, er), 'voice')));
    let [ei, ...ea] = en,
        eo = ea.length > 0,
        es =
            null != N && eo
                ? (0, r.jsx)(l.zx, {
                      look: l.zx.Looks.BLANK,
                      size: l.zx.Sizes.NONE,
                      color: l.zx.Colors.TRANSPARENT,
                      className: o()(A.viewAllButton, et && A.isShown),
                      onClick: () => {
                          (k({
                              action: 'PRESS_VIEW_PROFILE',
                              analyticsLocations: P
                          }),
                              N({ section: I.oh.ACTIVITY }));
                      },
                      children: (0, r.jsx)(c.Text, {
                          variant: 'text-xs/medium',
                          color: 'header-primary',
                          children: S.intl.string(S.t.pD1L1t)
                      })
                  })
                : null,
        el = i.useCallback(() => {
            if (null == W.current || null == z.current) return;
            k({
                action: 'PRESS_SHOW_MORE_ACTIVITY',
                analyticsLocations: P
            });
            let e = W.current.getBoundingClientRect().height,
                t = z.current.getBoundingClientRect().height;
            (Q({
                type: 'MEASUREMENT_COMPLETE',
                height: e
            }),
                requestAnimationFrame(() => {
                    (Q({
                        type: 'START_EXPAND_ANIMATION',
                        height: e + t - D
                    }),
                        (q.current = setTimeout(() => {
                            var e;
                            (Q({
                                type: 'ANIMATION_COMPLETE',
                                height: 'auto'
                            }),
                                null == (e = K.current) || e.focus());
                        }, w)));
                }));
        }, [P, k]);
    return ((0, u.zq)(() => {
        null != q.current && window.clearTimeout(q.current);
    }),
    V || 0 === en.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      ref: W,
                      className: A.activityContainer,
                      style: { height: 'auto' !== J ? ''.concat(J, 'px') : J },
                      children: [
                          (0, r.jsxs)('ul', {
                              ref: K,
                              className: A.cardsList,
                              'aria-label': S.intl.string(S.t.J6STd3),
                              tabIndex: -1,
                              children: [
                                  (0, r.jsxs)('li', {
                                      className: o()(A.firstCardContainer, !et && ea.length > 0 && A.hasShowMoreButton, Y && A.isInteracting),
                                      children: [
                                          ei,
                                          eo &&
                                              'done' !== $ &&
                                              (0, r.jsx)('div', {
                                                  className: A.showMoreButtonContainer,
                                                  children: (0, r.jsx)(l.zx, {
                                                      look: l.zx.Looks.BLANK,
                                                      size: l.zx.Sizes.NONE,
                                                      color: l.zx.Colors.TRANSPARENT,
                                                      className: o()(A.showMoreButton, et && A.isHidden),
                                                      onClick: el,
                                                      children: (0, r.jsx)(c.Text, {
                                                          variant: 'text-xs/medium',
                                                          color: 'none',
                                                          children: S.intl.format(S.t.wv8Q7u, { activitiesCount: ea.length })
                                                      })
                                                  })
                                              })
                                      ]
                                  }),
                                  eo &&
                                      ee &&
                                      ea.map((e, t) =>
                                          (0, r.jsx)(
                                              'li',
                                              {
                                                  className: o()(A.remainingCardContainer, et && A.isShown),
                                                  children: e
                                              },
                                              'activity-'.concat(t)
                                          )
                                      )
                              ]
                          }),
                          eo && ee && es
                      ]
                  }),
                  eo &&
                      (0, r.jsxs)('div', {
                          ref: z,
                          className: o()(A.cardsList, A.remainingCardsCopyToMeasure),
                          children: [ea, es]
                      })
              ]
          });
}
