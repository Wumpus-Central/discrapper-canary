(n.d(t, { Z: () => M }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(493773),
    d = n(468363),
    _ = n(906732),
    f = n(313201),
    p = n(158776),
    h = n(885110),
    m = n(823379),
    g = n(785717),
    E = n(369566),
    b = n(29899),
    y = n(510659),
    O = n(151545),
    v = n(493043),
    I = n(864141),
    T = n(228168),
    S = n(231338),
    A = n(388032),
    N = n(608459);
function C(e, t, n) {
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
function R(e) {
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
                C(e, t, n[t]);
            }));
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = 250,
    L = 24;
function x(e, t) {
    switch (t.type) {
        case 'MEASUREMENT_COMPLETE':
            return w(R({}, e), {
                animationPhase: 'ready',
                height: t.height
            });
        case 'START_EXPAND_ANIMATION':
            return w(R({}, e), {
                animationPhase: 'animating',
                height: t.height
            });
        case 'ANIMATION_COMPLETE':
            return w(R({}, e), {
                animationPhase: 'done',
                height: 'auto'
            });
        default:
            return (0, m.vE)(t);
    }
}
let k = {
    animationPhase: 'awaitingInput',
    height: 'auto'
};
function M(e) {
    let { user: t, currentUser: n, displayProfile: a, guildId: m, onOpenUserProfileModal: C, onClose: P } = e,
        w = (0, f.Dt)(),
        { analyticsLocations: M } = (0, _.ZP)(),
        { trackUserProfileAction: j } = (0, g.KZ)(),
        { live: U, stream: G } = (0, E.Z)(t.id),
        { voiceChannel: B, voiceActivity: V } = (0, b.Z)({
            userId: t.id,
            guildId: m
        }),
        F = t.id === n.id,
        Z = (0, s.e7)([h.Z, p.Z], () => {
            let e = F ? h.Z.getStatus() : p.Z.getStatus(t.id, m);
            return e === S.Sk.OFFLINE || e === S.Sk.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: H } = (0, d.U)({ location: 'UserProfileStackedActivity' }),
        Y = H && null == G && null == V && null != B,
        W = (0, y.yi)(),
        K = (null == W ? void 0 : W.interactionSource) === T.n_.ACTIVITY,
        z = i.useRef(null),
        q = i.useRef(null),
        X = i.useRef(null),
        Q = i.useRef(null),
        [J, $] = i.useReducer(x, k),
        { height: ee, animationPhase: et } = J,
        en = 'awaitingInput' !== et,
        er = 'animating' === et || 'done' === et,
        ei = [],
        ea = {
            user: t,
            currentUser: n,
            className: N.card,
            onClose: P
        };
    (null != G &&
        ei.push(
            (0, r.jsx)(
                v.Z,
                R(
                    {
                        location: 'UserProfileStackedActivity',
                        stream: G,
                        profileGuildId: null == a ? void 0 : a.guildId
                    },
                    ea
                ),
                'stream'
            )
        ),
        U.forEach((e, t) => {
            ei.push(
                (0, r.jsx)(
                    O.Z,
                    R(
                        {
                            activity: e,
                            profileGuildId: null == a ? void 0 : a.guildId
                        },
                        ea
                    ),
                    'live-'.concat(t)
                )
            );
        }),
        Y && ei.push((0, r.jsx)(I.Z, R({ voiceChannel: B }, ea), 'voice')));
    let [eo, ...es] = ei,
        el = es.length > 0,
        ec =
            null != C && el
                ? (0, r.jsx)(l.zx, {
                      look: l.zx.Looks.BLANK,
                      size: l.zx.Sizes.NONE,
                      color: l.zx.Colors.TRANSPARENT,
                      className: o()(N.viewAllButton, er && N.isShown),
                      onClick: () => {
                          (j({
                              action: 'PRESS_VIEW_PROFILE',
                              analyticsLocations: M
                          }),
                              C({ section: T.oh.ACTIVITY }));
                      },
                      children: (0, r.jsx)(c.Text, {
                          variant: 'text-xs/medium',
                          color: 'header-primary',
                          children: A.intl.string(A.t.pD1L1t)
                      })
                  })
                : null,
        eu = i.useCallback(() => {
            if (null == z.current || null == X.current) return;
            j({
                action: 'PRESS_SHOW_MORE_ACTIVITY',
                analyticsLocations: M
            });
            let e = z.current.getBoundingClientRect().height,
                t = X.current.getBoundingClientRect().height;
            ($({
                type: 'MEASUREMENT_COMPLETE',
                height: e
            }),
                requestAnimationFrame(() => {
                    ($({
                        type: 'START_EXPAND_ANIMATION',
                        height: e + t - L
                    }),
                        (Q.current = setTimeout(() => {
                            var e;
                            ($({
                                type: 'ANIMATION_COMPLETE',
                                height: 'auto'
                            }),
                                null == (e = q.current) || e.focus());
                        }, D)));
                }));
        }, [M, j]);
    return ((0, u.zq)(() => {
        null != Q.current && window.clearTimeout(Q.current);
    }),
    Z || 0 === ei.length)
        ? null
        : (0, r.jsxs)('section', {
              'aria-labelledby': w,
              children: [
                  (0, r.jsx)(c.nn4, {
                      children: (0, r.jsx)(c.H, {
                          id: w,
                          children: A.intl.string(A.t.J6STd3)
                      })
                  }),
                  (0, r.jsxs)('div', {
                      ref: z,
                      className: N.activityContainer,
                      style: { height: 'auto' !== ee ? ''.concat(ee, 'px') : ee },
                      children: [
                          (0, r.jsxs)('ul', {
                              ref: q,
                              className: N.cardsList,
                              'aria-labelledby': w,
                              tabIndex: -1,
                              children: [
                                  (0, r.jsxs)('li', {
                                      className: o()(N.firstCardContainer, !er && es.length > 0 && N.hasShowMoreButton, K && N.isInteracting),
                                      children: [
                                          eo,
                                          el &&
                                              'done' !== et &&
                                              (0, r.jsx)('div', {
                                                  className: N.showMoreButtonContainer,
                                                  children: (0, r.jsx)(l.zx, {
                                                      look: l.zx.Looks.BLANK,
                                                      size: l.zx.Sizes.NONE,
                                                      color: l.zx.Colors.TRANSPARENT,
                                                      className: o()(N.showMoreButton, er && N.isHidden),
                                                      onClick: eu,
                                                      children: (0, r.jsx)(c.Text, {
                                                          variant: 'text-xs/medium',
                                                          color: 'none',
                                                          children: A.intl.format(A.t.wv8Q7u, { activitiesCount: es.length })
                                                      })
                                                  })
                                              })
                                      ]
                                  }),
                                  el &&
                                      en &&
                                      es.map((e, t) =>
                                          (0, r.jsx)(
                                              'li',
                                              {
                                                  className: o()(N.remainingCardContainer, er && N.isShown),
                                                  children: e
                                              },
                                              'activity-'.concat(t)
                                          )
                                      )
                              ]
                          }),
                          el && en && ec
                      ]
                  }),
                  el &&
                      (0, r.jsxs)('div', {
                          ref: X,
                          className: o()(N.cardsList, N.remainingCardsCopyToMeasure),
                          children: [es, ec]
                      })
              ]
          });
}
