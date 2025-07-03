(n.d(t, {
    PD: () => D,
    ZP: () => k,
    aR: () => L
}),
    n(388685),
    n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(405499),
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
    S = n(531572),
    x = n(651138),
    I = n(18857),
    P = n(981631),
    N = n(388032),
    w = n(93841),
    Z = n(30009);
function T(e) {
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
function A(e, t) {
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
let R = (0, j.Mg)(d.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    D = 57,
    L = 57 + R,
    M = {
        tension: 180,
        friction: 80
    },
    k = (e) => {
        let { guild: t, withMargin: n } = e,
            l = (0, C.Jh)(t.id),
            d = (0, b.Z)(t.id),
            j = (0, C.FZ)(l),
            R = null == j,
            D = null != j ? j : l,
            L = (0, c.e7)([S.Z], () => {
                var e;
                return null != (e = S.Z.getCountForGuild(t.id)) ? e : 0;
            }),
            k = (0, c.e7)([O.Z], () => O.Z.can(P.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            L !== d && (0, E.v)(t.id, d);
        }, [t.id, L, d]);
        let U = R ? '100%' : ''.concat(Math.min(100, (d / P.oCV[D]) * 100), '%'),
            { current: G } = i.useRef(U),
            [B] = (0, h.q_F)(
                () => ({
                    from: { width: L === d ? G : '0%' },
                    to: { width: U },
                    config: M
                }),
                'respect-motion-settings',
                [L, d, G, U]
            ),
            F = t.premiumTier < D && L >= P.oCV[D],
            V = (0, I.Z)(t),
            H = N.intl.formatToPlainString(N.t['2oNfMT'], { levelName: (0, C.e9)(D) }),
            z = N.intl.format(N.t.dhKnYm, {
                numBoosts: d,
                numTotal: P.oCV[D]
            });
        (R && ((H = (0, C.e9)(D)), (z = N.intl.format(N.t.B2byER, { numBoosts: d }))), (H = H.toLocaleLowerCase()));
        let W = (0, a.JA)('boosts-'.concat(t.id)),
            K = i.useRef(null),
            Y = (0, c.e7)([y.default], () => y.default.getCurrentUser()),
            q = (0, _.Z)(null == Y ? void 0 : Y.id, t.id),
            X = (0, m.W)(t.id, 'GuildBoostingSidebarDisplay'),
            Q = (null == t ? void 0 : t.premiumProgressBarEnabled) === !0,
            J = [];
        q && X && Q && J.push(u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK);
        let $ = () =>
            (0, r.jsx)(f.ZP, {
                contentTypes: J,
                children: (e) => {
                    let { visibleContent: n, markAsDismissed: i } = e;
                    return n === u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK
                        ? (0, r.jsx)(g.Z, {
                              guild: t,
                              markAsDismissed: i
                          })
                        : null;
                }
            });
        return (0, r.jsx)('li', {
            children: (0, r.jsx)(h.ua7, {
                text: F ? N.intl.formatToPlainString(w.default['9CtPjo'], { perk: (0, C.nW)(D) }) : R ? N.intl.string(N.t['Y+V9go']) : N.intl.formatToPlainString(N.t.UyDKl5, { levelName: (0, C.nW)(D) }),
                color: h.ua7.Colors.BLACK,
                position: 'top',
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    (0, r.jsx)(h.yRy, {
                        targetElementRef: K,
                        renderPopout: $,
                        position: 'right',
                        align: 'top',
                        shouldShow: !0,
                        animation: h.yRy.Animation.TRANSLATE,
                        children: (i) =>
                            (0, r.jsx)('div', {
                                ref: K,
                                children: (0, r.jsxs)(
                                    h.P3F,
                                    A(T({}, W, e, i), {
                                        'aria-label': void 0,
                                        role: 'button',
                                        focusProps: {
                                            offset: {
                                                left: 10,
                                                right: 4
                                            }
                                        },
                                        onClick: V,
                                        className: o()(Z.container, { [Z.containerWithMargin]: n }),
                                        onContextMenu: (e) => {
                                            k && (0, p.vq)(e, (e) => (0, r.jsx)(x.default, A(T({}, e), { guild: t })));
                                        },
                                        children: [
                                            (0, r.jsx)(h.nn4, { children: e['aria-label'] }),
                                            (0, r.jsxs)('div', {
                                                className: Z.textArea,
                                                children: [
                                                    (0, r.jsx)('div', {
                                                        className: Z.goalTextContainer,
                                                        children: (0, r.jsx)(h.Text, {
                                                            className: Z.goalText,
                                                            color: 'none',
                                                            variant: 'text-sm/medium',
                                                            lineClamp: 1,
                                                            children: H
                                                        })
                                                    }),
                                                    (0, r.jsxs)('div', {
                                                        className: Z.progressFraction,
                                                        children: [
                                                            (0, r.jsx)(h.Text, {
                                                                color: 'none',
                                                                variant: 'text-sm/medium',
                                                                className: Z.progressText,
                                                                lineClamp: 1,
                                                                children: z
                                                            }),
                                                            (0, r.jsx)(v.Z, {
                                                                className: Z.count,
                                                                height: 16,
                                                                width: 16,
                                                                direction: v.Z.Directions.RIGHT
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: o()(Z.progressBarContainer, { [Z.progressBarContainerComplete]: R }),
                                                children: [
                                                    (0, r.jsx)(s.animated.div, {
                                                        className: Z.progressBar,
                                                        style: B
                                                    }),
                                                    R
                                                        ? (0, r.jsx)('span', {
                                                              'aria-label': N.intl.string(N.t['7iL1q6']),
                                                              role: 'img',
                                                              className: Z.tadaIcon,
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
