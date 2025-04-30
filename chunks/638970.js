n.d(t, { Z: () => L }), n(388685), n(539854);
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
    E = n(151545),
    b = n(493043),
    y = n(864141),
    O = n(228168),
    v = n(231338),
    I = n(388032),
    S = n(608459);
function T(e, t, n) {
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
function A(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = 250,
    P = 24;
function w(e, t) {
    switch (t.type) {
        case 'MEASUREMENT_COMPLETE':
            return C(A({}, e), {
                animationPhase: 'ready',
                height: t.height
            });
        case 'START_EXPAND_ANIMATION':
            return C(A({}, e), {
                animationPhase: 'animating',
                height: t.height
            });
        case 'ANIMATION_COMPLETE':
            return C(A({}, e), {
                animationPhase: 'done',
                height: 'auto'
            });
        default:
            return (0, p.vE)(t);
    }
}
let D = {
    animationPhase: 'awaitingInput',
    height: 'auto'
};
function L(e) {
    let { user: t, currentUser: n, displayProfile: o, guildId: p, onOpenUserProfileModal: T, onClose: N } = e,
        { analyticsLocations: C } = (0, d.ZP)(),
        { trackUserProfileAction: L } = (0, h.KZ)(),
        { live: x, stream: M } = (0, m.Z)(t.id),
        { voiceChannel: k, voiceActivity: j } = (0, g.Z)({
            userId: t.id,
            guildId: p
        }),
        U = t.id === n.id,
        G = (0, s.e7)([_.Z, f.Z], () => {
            let e = U ? _.Z.getStatus() : f.Z.getStatus(t.id, p);
            return e === v.Sk.OFFLINE || e === v.Sk.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: B } = (0, u.U)({ location: 'UserProfileStackedActivity' }),
        V = B && null == M && null == j && null != k,
        F = i.useRef(null),
        Z = i.useRef(null),
        H = i.useRef(null),
        Y = i.useRef(),
        [W, K] = i.useReducer(w, D),
        { height: z, animationPhase: q } = W,
        Q = 'awaitingInput' !== q,
        X = 'animating' === q || 'done' === q,
        J = [],
        $ = {
            user: t,
            currentUser: n,
            className: S.card,
            onClose: N
        };
    null != M &&
        J.push(
            (0, r.jsx)(
                b.Z,
                A(
                    {
                        location: 'UserProfileStackedActivity',
                        stream: M,
                        profileGuildId: null == o ? void 0 : o.guildId
                    },
                    $
                )
            )
        ),
        x.forEach((e) => {
            J.push(
                (0, r.jsx)(
                    E.Z,
                    A(
                        {
                            activity: e,
                            profileGuildId: null == o ? void 0 : o.guildId
                        },
                        $
                    )
                )
            );
        }),
        V && J.push((0, r.jsx)(y.Z, A({ voiceChannel: k }, $)));
    let [ee, ...et] = J,
        en = et.length > 0,
        er =
            null != T && en
                ? (0, r.jsx)(l.zxk, {
                      look: l.zxk.Looks.BLANK,
                      size: l.zxk.Sizes.NONE,
                      color: l.zxk.Colors.TRANSPARENT,
                      className: a()(S.viewAllButton, X && S.isShown),
                      onClick: () => {
                          L({
                              action: 'PRESS_VIEW_PROFILE',
                              analyticsLocations: C
                          }),
                              T({ section: O.oh.ACTIVITY });
                      },
                      children: (0, r.jsx)(l.Text, {
                          variant: 'text-xs/medium',
                          color: 'header-primary',
                          children: I.intl.string(I.t.pD1L1t)
                      })
                  })
                : null,
        ei = i.useCallback(() => {
            if (null == F.current || null == H.current) return;
            L({
                action: 'PRESS_SHOW_MORE_ACTIVITY',
                analyticsLocations: C
            });
            let e = F.current.getBoundingClientRect().height,
                t = H.current.getBoundingClientRect().height;
            K({
                type: 'MEASUREMENT_COMPLETE',
                height: e
            }),
                requestAnimationFrame(() => {
                    K({
                        type: 'START_EXPAND_ANIMATION',
                        height: e + t - P
                    }),
                        (Y.current = setTimeout(() => {
                            var e;
                            K({
                                type: 'ANIMATION_COMPLETE',
                                height: 'auto'
                            }),
                                null == (e = Z.current) || e.focus();
                        }, R));
                });
        }, [C, L]);
    if (
        ((0, c.zq)(() => {
            null != Y.current && window.clearTimeout(Y.current);
        }),
        G || 0 === J.length)
    )
        return null;
    let eo = 'en-US' === I.intl.currentLocale || 'en-GB' === I.intl.currentLocale,
        ea = I.intl.string(eo ? I.t.J6STd3 : I.t.IC5Anp);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                ref: F,
                className: S.activityContainer,
                style: { height: 'auto' !== z ? ''.concat(z, 'px') : z },
                children: [
                    (0, r.jsxs)('ul', {
                        ref: Z,
                        className: S.cardsList,
                        'aria-label': ea,
                        tabIndex: -1,
                        children: [
                            (0, r.jsxs)('li', {
                                className: a()(S.firstCardContainer, !X && et.length > 0 && S.hasShowMoreButton),
                                children: [
                                    ee,
                                    en &&
                                        'done' !== q &&
                                        (0, r.jsx)('div', {
                                            className: S.showMoreButtonContainer,
                                            children: (0, r.jsx)(l.zxk, {
                                                look: l.zxk.Looks.BLANK,
                                                size: l.zxk.Sizes.NONE,
                                                color: l.zxk.Colors.TRANSPARENT,
                                                className: a()(S.showMoreButton, X && S.isHidden),
                                                onClick: ei,
                                                children: (0, r.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'header-primary',
                                                    children: '+ '.concat(I.intl.format(I.t.O6PLYW, { activitiesCount: et.length }))
                                                })
                                            })
                                        })
                                ]
                            }),
                            en &&
                                Q &&
                                et.map((e, t) =>
                                    (0, r.jsx)(
                                        'li',
                                        {
                                            className: a()(S.remainingCardContainer, 0 === t && S.secondCardContainer, X && S.isShown),
                                            children: e
                                        },
                                        'activity-'.concat(t)
                                    )
                                )
                        ]
                    }),
                    en && Q && er
                ]
            }),
            en &&
                (0, r.jsxs)('div', {
                    ref: H,
                    className: a()(S.cardsList, S.remainingCardsCopyToMeasure),
                    children: [et, er]
                })
        ]
    });
}
