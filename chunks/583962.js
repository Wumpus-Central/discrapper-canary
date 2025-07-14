(n.d(t, {
    PD: () => L,
    ZP: () => U,
    aR: () => M
}),
    n(388685),
    n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(264738),
    a = n(91192),
    c = n(442837),
    u = n(704215),
    d = n(477690),
    h = n(481060),
    p = n(239091),
    f = n(243778),
    g = n(538445),
    m = n(232062),
    b = n(151494),
    _ = n(554549),
    O = n(496675),
    y = n(594174),
    v = n(259580),
    C = n(267642),
    j = n(624138),
    E = n(667815),
    x = n(531572),
    S = n(651138),
    I = n(18857),
    P = n(981631),
    N = n(921944),
    w = n(388032),
    Z = n(93841),
    T = n(30009);
function A(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = (0, j.Mg)(d.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    L = 57,
    M = 57 + D,
    k = {
        tension: 180,
        friction: 80
    },
    U = (e) => {
        let { guild: t, withMargin: n } = e,
            l = (0, C.Jh)(t.id),
            d = (0, b.Z)(t.id),
            j = (0, C.FZ)(l),
            D = null == j,
            L = null != j ? j : l,
            M = (0, c.e7)([x.Z], () => {
                var e;
                return null != (e = x.Z.getCountForGuild(t.id)) ? e : 0;
            }),
            U = (0, c.e7)([O.Z], () => O.Z.can(P.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            M !== d && (0, E.v)(t.id, d);
        }, [t.id, M, d]);
        let G = D ? '100%' : ''.concat(Math.min(100, (d / P.oCV[L]) * 100), '%'),
            { current: B } = i.useRef(G),
            [V] = (0, h.q_F)(
                () => ({
                    from: { width: M === d ? B : '0%' },
                    to: { width: G },
                    config: k
                }),
                'respect-motion-settings',
                [M, d, B, G]
            ),
            F = t.premiumTier < L && M >= P.oCV[L],
            H = (0, I.Z)(t),
            z = w.intl.formatToPlainString(w.t['2oNfMT'], { levelName: (0, C.e9)(L) }),
            W = w.intl.format(w.t.dhKnYm, {
                numBoosts: d,
                numTotal: P.oCV[L]
            });
        (D && ((z = (0, C.e9)(L)), (W = w.intl.format(w.t.B2byER, { numBoosts: d }))), (z = z.toLocaleLowerCase()));
        let K = (0, a.JA)('boosts-'.concat(t.id)),
            Y = i.useRef(null),
            q = (0, c.e7)([y.default], () => y.default.getCurrentUser()),
            X = (0, _.Z)(null == q ? void 0 : q.id, t.id),
            Q = (0, m.W)(t.id, 'GuildBoostingSidebarDisplay'),
            J = (null == t ? void 0 : t.premiumProgressBarEnabled) === !0,
            $ = [];
        X && Q && J && $.push(u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK);
        let [ee, et] = (0, f.US)($),
            en = () =>
                ee === u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK
                    ? (0, r.jsx)(g.Z, {
                          guild: t,
                          markAsDismissed: et
                      })
                    : null;
        return (0, r.jsx)('li', {
            children: (0, r.jsx)(h.ua7, {
                text: F ? w.intl.formatToPlainString(Z.default['9CtPjo'], { perk: (0, C.nW)(L) }) : D ? w.intl.string(w.t['Y+V9go']) : w.intl.formatToPlainString(w.t.UyDKl5, { levelName: (0, C.nW)(L) }),
                position: 'top',
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    (0, r.jsx)(h.yRy, {
                        targetElementRef: Y,
                        renderPopout: en,
                        position: 'right',
                        align: 'top',
                        shouldShow: null != ee,
                        onRequestClose: () => et(N.L.INDIRECT_ACTION),
                        animation: h.yRy.Animation.TRANSLATE,
                        children: (i) =>
                            (0, r.jsx)('div', {
                                ref: Y,
                                children: (0, r.jsxs)(
                                    h.P3F,
                                    R(A({}, K, e, i), {
                                        'aria-label': void 0,
                                        role: 'button',
                                        focusProps: {
                                            offset: {
                                                left: 10,
                                                right: 4
                                            }
                                        },
                                        onClick: H,
                                        className: o()(T.container, { [T.containerWithMargin]: n }),
                                        onContextMenu: (e) => {
                                            U && (0, p.vq)(e, (e) => (0, r.jsx)(S.default, R(A({}, e), { guild: t })));
                                        },
                                        children: [
                                            (0, r.jsx)(h.nn4, { children: e['aria-label'] }),
                                            (0, r.jsxs)('div', {
                                                className: T.textArea,
                                                children: [
                                                    (0, r.jsx)('div', {
                                                        className: T.goalTextContainer,
                                                        children: (0, r.jsx)(h.Text, {
                                                            className: T.goalText,
                                                            color: 'none',
                                                            variant: 'text-sm/medium',
                                                            lineClamp: 1,
                                                            children: z
                                                        })
                                                    }),
                                                    (0, r.jsxs)('div', {
                                                        className: T.progressFraction,
                                                        children: [
                                                            (0, r.jsx)(h.Text, {
                                                                color: 'none',
                                                                variant: 'text-sm/medium',
                                                                className: T.progressText,
                                                                lineClamp: 1,
                                                                children: W
                                                            }),
                                                            (0, r.jsx)(v.Z, {
                                                                className: T.count,
                                                                height: 16,
                                                                width: 16,
                                                                direction: v.Z.Directions.RIGHT
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: o()(T.progressBarContainer, { [T.progressBarContainerComplete]: D }),
                                                children: [
                                                    (0, r.jsx)(s.animated.div, {
                                                        className: T.progressBar,
                                                        style: V
                                                    }),
                                                    D
                                                        ? (0, r.jsx)('span', {
                                                              'aria-label': w.intl.string(w.t['7iL1q6']),
                                                              role: 'img',
                                                              className: T.tadaIcon,
                                                              children: '\uD83C\uDF89'
                                                          })
                                                        : null
                                                ]
                                            })
                                        ]
                                    })
                                )
                            })
                    })
            })
        });
    };
