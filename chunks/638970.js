n.d(t, { Z: () => x }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
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
    S = n(388032),
    T = n(608459);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
    let { user: t, currentUser: n, displayProfile: o, guildId: p, onOpenUserProfileModal: A, onClose: C } = e,
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
        z = i.useRef(),
        [q, Q] = i.useReducer(D, L),
        { height: X, animationPhase: J } = q,
        $ = 'awaitingInput' !== J,
        ee = 'animating' === J || 'done' === J,
        et = [],
        en = {
            user: t,
            currentUser: n,
            className: T.card,
            onClose: C
        };
    null != k &&
        et.push(
            (0, r.jsx)(
                y.Z,
                N(
                    {
                        location: 'UserProfileStackedActivity',
                        stream: k,
                        profileGuildId: null == o ? void 0 : o.guildId
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
                            profileGuildId: null == o ? void 0 : o.guildId
                        },
                        en
                    ),
                    'live-'.concat(t)
                )
            );
        }),
        F && et.push((0, r.jsx)(O.Z, N({ voiceChannel: j }, en), 'voice'));
    let [er, ...ei] = et,
        eo = ei.length > 0,
        ea =
            null != A && eo
                ? (0, r.jsx)(l.zxk, {
                      look: l.zxk.Looks.BLANK,
                      size: l.zxk.Sizes.NONE,
                      color: l.zxk.Colors.TRANSPARENT,
                      className: a()(T.viewAllButton, ee && T.isShown),
                      onClick: () => {
                          x({
                              action: 'PRESS_VIEW_PROFILE',
                              analyticsLocations: R
                          }),
                              A({ section: v.oh.ACTIVITY });
                      },
                      children: (0, r.jsx)(l.Text, {
                          variant: 'text-xs/medium',
                          color: 'header-primary',
                          children: S.intl.string(S.t.pD1L1t)
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
            Q({
                type: 'MEASUREMENT_COMPLETE',
                height: e
            }),
                requestAnimationFrame(() => {
                    Q({
                        type: 'START_EXPAND_ANIMATION',
                        height: e + t - w
                    }),
                        (z.current = setTimeout(() => {
                            var e;
                            Q({
                                type: 'ANIMATION_COMPLETE',
                                height: 'auto'
                            }),
                                null == (e = W.current) || e.focus();
                        }, P));
                });
        }, [R, x]);
    if (
        ((0, c.zq)(() => {
            null != z.current && window.clearTimeout(z.current);
        }),
        B || 0 === et.length)
    )
        return null;
    let el = 'en-US' === S.intl.currentLocale || 'en-GB' === S.intl.currentLocale,
        ec = S.intl.string(el ? S.t.J6STd3 : S.t.IC5Anp);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                ref: Y,
                className: T.activityContainer,
                style: { height: 'auto' !== X ? ''.concat(X, 'px') : X },
                children: [
                    (0, r.jsxs)('ul', {
                        ref: W,
                        className: T.cardsList,
                        'aria-label': ec,
                        tabIndex: -1,
                        children: [
                            (0, r.jsxs)('li', {
                                className: a()(T.firstCardContainer, !ee && ei.length > 0 && T.hasShowMoreButton, H && T.isInteracting),
                                children: [
                                    er,
                                    eo &&
                                        'done' !== J &&
                                        (0, r.jsx)('div', {
                                            className: T.showMoreButtonContainer,
                                            children: (0, r.jsx)(l.zxk, {
                                                look: l.zxk.Looks.BLANK,
                                                size: l.zxk.Sizes.NONE,
                                                color: l.zxk.Colors.TRANSPARENT,
                                                className: a()(T.showMoreButton, ee && T.isHidden),
                                                onClick: es,
                                                children: (0, r.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'header-primary',
                                                    children: '+ '.concat(S.intl.format(S.t.O6PLYW, { activitiesCount: ei.length }))
                                                })
                                            })
                                        })
                                ]
                            }),
                            eo &&
                                $ &&
                                ei.map((e, t) =>
                                    (0, r.jsx)(
                                        'li',
                                        {
                                            className: a()(T.remainingCardContainer, ee && T.isShown),
                                            children: e
                                        },
                                        'activity-'.concat(t)
                                    )
                                )
                        ]
                    }),
                    eo && $ && ea
                ]
            }),
            eo &&
                (0, r.jsxs)('div', {
                    ref: K,
                    className: a()(T.cardsList, T.remainingCardsCopyToMeasure),
                    children: [ei, ea]
                })
        ]
    });
}
