(n.d(t, { Z: () => x }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(493773),
    u = n(468363),
    d = n(906732),
    f = n(158776),
    _ = n(885110),
    p = n(823379),
    h = n(785717),
    m = n(369566),
    g = n(29899),
    E = n(510659),
    b = n(151545),
    y = n(493043),
    O = n(864141),
    v = n(228168),
    I = n(231338),
    T = n(388032),
    S = n(608459);
function A(e, t, n) {
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
function N(e) {
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
                A(e, t, n[t]);
            }));
    }
    return e;
}
function C(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = 250,
    w = 24;
function D(e, t) {
    switch (t.type) {
        case 'MEASUREMENT_COMPLETE':
            return R(N({}, e), {
                animationPhase: 'ready',
                height: t.height
            });
        case 'START_EXPAND_ANIMATION':
            return R(N({}, e), {
                animationPhase: 'animating',
                height: t.height
            });
        case 'ANIMATION_COMPLETE':
            return R(N({}, e), {
                animationPhase: 'done',
                height: 'auto'
            });
        default:
            return (0, p.vE)(t);
    }
}
let L = {
    animationPhase: 'awaitingInput',
    height: 'auto'
};
function x(e) {
    let { user: t, currentUser: n, displayProfile: a, guildId: p, onOpenUserProfileModal: A, onClose: C } = e,
        { analyticsLocations: R } = (0, d.ZP)(),
        { trackUserProfileAction: x } = (0, h.KZ)(),
        { live: M, stream: k } = (0, m.Z)(t.id),
        { voiceChannel: j, voiceActivity: U } = (0, g.Z)({
            userId: t.id,
            guildId: p
        }),
        G = t.id === n.id,
        B = (0, s.e7)([_.Z, f.Z], () => {
            let e = G ? _.Z.getStatus() : f.Z.getStatus(t.id, p);
            return e === I.Sk.OFFLINE || e === I.Sk.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: V } = (0, u.U)({ location: 'UserProfileStackedActivity' }),
        F = V && null == k && null == U && null != j,
        Z = (0, E.yi)(),
        H = (null == Z ? void 0 : Z.interactionSource) === v.n_.ACTIVITY,
        Y = i.useRef(null),
        W = i.useRef(null),
        K = i.useRef(null),
        z = i.useRef(null),
        [q, X] = i.useReducer(D, L),
        { height: Q, animationPhase: J } = q,
        $ = 'awaitingInput' !== J,
        ee = 'animating' === J || 'done' === J,
        et = [],
        en = {
            user: t,
            currentUser: n,
            className: S.card,
            onClose: C
        };
    (null != k &&
        et.push(
            (0, r.jsx)(
                y.Z,
                N(
                    {
                        location: 'UserProfileStackedActivity',
                        stream: k,
                        profileGuildId: null == a ? void 0 : a.guildId
                    },
                    en
                ),
                'stream'
            )
        ),
        M.forEach((e, t) => {
            et.push(
                (0, r.jsx)(
                    b.Z,
                    N(
                        {
                            activity: e,
                            profileGuildId: null == a ? void 0 : a.guildId
                        },
                        en
                    ),
                    'live-'.concat(t)
                )
            );
        }),
        F && et.push((0, r.jsx)(O.Z, N({ voiceChannel: j }, en), 'voice')));
    let [er, ...ei] = et,
        ea = ei.length > 0,
        eo =
            null != A && ea
                ? (0, r.jsx)(l.zxk, {
                      look: l.zxk.Looks.BLANK,
                      size: l.zxk.Sizes.NONE,
                      color: l.zxk.Colors.TRANSPARENT,
                      className: o()(S.viewAllButton, ee && S.isShown),
                      onClick: () => {
                          (x({
                              action: 'PRESS_VIEW_PROFILE',
                              analyticsLocations: R
                          }),
                              A({ section: v.oh.ACTIVITY }));
                      },
                      children: (0, r.jsx)(l.Text, {
                          variant: 'text-xs/medium',
                          color: 'header-primary',
                          children: T.intl.string(T.t.pD1L1t)
                      })
                  })
                : null,
        es = i.useCallback(() => {
            if (null == Y.current || null == K.current) return;
            x({
                action: 'PRESS_SHOW_MORE_ACTIVITY',
                analyticsLocations: R
            });
            let e = Y.current.getBoundingClientRect().height,
                t = K.current.getBoundingClientRect().height;
            (X({
                type: 'MEASUREMENT_COMPLETE',
                height: e
            }),
                requestAnimationFrame(() => {
                    (X({
                        type: 'START_EXPAND_ANIMATION',
                        height: e + t - w
                    }),
                        (z.current = setTimeout(() => {
                            var e;
                            (X({
                                type: 'ANIMATION_COMPLETE',
                                height: 'auto'
                            }),
                                null == (e = W.current) || e.focus());
                        }, P)));
                }));
        }, [R, x]);
    return ((0, c.zq)(() => {
        null != z.current && window.clearTimeout(z.current);
    }),
    B || 0 === et.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      ref: Y,
                      className: S.activityContainer,
                      style: { height: 'auto' !== Q ? ''.concat(Q, 'px') : Q },
                      children: [
                          (0, r.jsxs)('ul', {
                              ref: W,
                              className: S.cardsList,
                              'aria-label': T.intl.string(T.t.J6STd3),
                              tabIndex: -1,
                              children: [
                                  (0, r.jsxs)('li', {
                                      className: o()(S.firstCardContainer, !ee && ei.length > 0 && S.hasShowMoreButton, H && S.isInteracting),
                                      children: [
                                          er,
                                          ea &&
                                              'done' !== J &&
                                              (0, r.jsx)('div', {
                                                  className: S.showMoreButtonContainer,
                                                  children: (0, r.jsx)(l.zxk, {
                                                      look: l.zxk.Looks.BLANK,
                                                      size: l.zxk.Sizes.NONE,
                                                      color: l.zxk.Colors.TRANSPARENT,
                                                      className: o()(S.showMoreButton, ee && S.isHidden),
                                                      onClick: es,
                                                      children: (0, r.jsx)(l.Text, {
                                                          variant: 'text-xs/medium',
                                                          color: 'none',
                                                          children: T.intl.format(T.t.wv8Q7u, { activitiesCount: ei.length })
                                                      })
                                                  })
                                              })
                                      ]
                                  }),
                                  ea &&
                                      $ &&
                                      ei.map((e, t) =>
                                          (0, r.jsx)(
                                              'li',
                                              {
                                                  className: o()(S.remainingCardContainer, ee && S.isShown),
                                                  children: e
                                              },
                                              'activity-'.concat(t)
                                          )
                                      )
                              ]
                          }),
                          ea && $ && eo
                      ]
                  }),
                  ea &&
                      (0, r.jsxs)('div', {
                          ref: K,
                          className: o()(S.cardsList, S.remainingCardsCopyToMeasure),
                          children: [ei, eo]
                      })
              ]
          });
}
