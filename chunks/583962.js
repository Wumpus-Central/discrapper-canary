(n.d(t, {
    PD: () => A,
    ZP: () => L,
    aR: () => R
}),
    n(388685),
    n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(695469),
    s = n(91192),
    c = n(442837),
    u = n(704215),
    d = n(477690),
    h = n(481060),
    p = n(239091),
    f = n(243778),
    g = n(538445),
    m = n(232062),
    b = n(151494),
    _ = n(496675),
    O = n(259580),
    y = n(267642),
    v = n(624138),
    C = n(667815),
    j = n(531572),
    S = n(651138),
    E = n(18857),
    x = n(981631),
    I = n(388032),
    P = n(93841),
    N = n(30009);
function w(e) {
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
function Z(e, t) {
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
let T = (0, v.Mg)(d.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    A = 57,
    R = 57 + T,
    D = {
        tension: 180,
        friction: 80
    },
    L = (e) => {
        let { guild: t, withMargin: n } = e,
            l = (0, y.Jh)(t.id),
            d = (0, b.Z)(t.id),
            v = (0, y.FZ)(l),
            T = null == v,
            A = null != v ? v : l,
            R = (0, c.e7)([j.Z], () => {
                var e;
                return null != (e = j.Z.getCountForGuild(t.id)) ? e : 0;
            }),
            L = (0, c.e7)([_.Z], () => _.Z.can(x.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            R !== d && (0, C.v)(t.id, d);
        }, [t.id, R, d]);
        let M = T ? '100%' : ''.concat(Math.min(100, (d / x.oCV[A]) * 100), '%'),
            { current: k } = i.useRef(M),
            [U] = (0, h.q_F)(
                () => ({
                    from: { width: R === d ? k : '0%' },
                    to: { width: M },
                    config: D
                }),
                'respect-motion-settings',
                [R, d, k, M]
            ),
            G = t.premiumTier < A && R >= x.oCV[A],
            B = (0, E.Z)(t),
            F = I.intl.formatToPlainString(I.t['2oNfMT'], { levelName: (0, y.e9)(A) }),
            V = I.intl.format(I.t.dhKnYm, {
                numBoosts: d,
                numTotal: x.oCV[A]
            });
        (T && ((F = (0, y.e9)(A)), (V = I.intl.format(I.t.B2byER, { numBoosts: d }))), (F = F.toLocaleLowerCase()));
        let H = (0, s.JA)('boosts-'.concat(t.id)),
            z = i.useRef(null),
            W = (0, m.W)(t.id, 'GuildBoostingSidebarDisplay'),
            K = (null == t ? void 0 : t.premiumProgressBarEnabled) === !0,
            Y = [];
        W && K && Y.push(u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK);
        let q = () =>
            (0, r.jsx)(f.ZP, {
                contentTypes: Y,
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
                text: G ? I.intl.formatToPlainString(P.default['9CtPjo'], { perk: (0, y.nW)(A) }) : T ? I.intl.string(I.t['Y+V9go']) : I.intl.formatToPlainString(I.t.UyDKl5, { levelName: (0, y.nW)(A) }),
                color: h.ua7.Colors.BLACK,
                position: 'top',
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    (0, r.jsx)(h.yRy, {
                        targetElementRef: z,
                        renderPopout: q,
                        position: 'right',
                        align: 'top',
                        shouldShow: !0,
                        animation: h.yRy.Animation.TRANSLATE,
                        children: () =>
                            (0, r.jsx)('div', {
                                ref: z,
                                children: (0, r.jsxs)(
                                    h.P3F,
                                    Z(w({}, H, e), {
                                        'aria-label': void 0,
                                        role: 'button',
                                        focusProps: {
                                            offset: {
                                                left: 10,
                                                right: 4
                                            }
                                        },
                                        onClick: B,
                                        className: o()(N.container, { [N.containerWithMargin]: n }),
                                        onContextMenu: (e) => {
                                            L && (0, p.vq)(e, (e) => (0, r.jsx)(S.default, Z(w({}, e), { guild: t })));
                                        },
                                        children: [
                                            (0, r.jsx)(h.nn4, { children: e['aria-label'] }),
                                            (0, r.jsxs)('div', {
                                                className: N.textArea,
                                                children: [
                                                    (0, r.jsx)('div', {
                                                        className: N.goalTextContainer,
                                                        children: (0, r.jsx)(h.Text, {
                                                            className: N.goalText,
                                                            color: 'none',
                                                            variant: 'text-sm/medium',
                                                            lineClamp: 1,
                                                            children: F
                                                        })
                                                    }),
                                                    (0, r.jsxs)('div', {
                                                        className: N.progressFraction,
                                                        children: [
                                                            (0, r.jsx)(h.Text, {
                                                                color: 'none',
                                                                variant: 'text-sm/medium',
                                                                className: N.progressText,
                                                                lineClamp: 1,
                                                                children: V
                                                            }),
                                                            (0, r.jsx)(O.Z, {
                                                                className: N.count,
                                                                height: 16,
                                                                width: 16,
                                                                direction: O.Z.Directions.RIGHT
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: o()(N.progressBarContainer, { [N.progressBarContainerComplete]: T }),
                                                children: [
                                                    (0, r.jsx)(a.animated.div, {
                                                        className: N.progressBar,
                                                        style: U
                                                    }),
                                                    T
                                                        ? (0, r.jsx)('span', {
                                                              'aria-label': I.intl.string(I.t['7iL1q6']),
                                                              role: 'img',
                                                              className: N.tadaIcon,
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
