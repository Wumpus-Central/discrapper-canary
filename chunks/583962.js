(n.d(t, {
    PD: () => M,
    ZP: () => G,
    aR: () => k
}),
    n(388685),
    n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(71347),
    a = n(91192),
    c = n(442837),
    u = n(704215),
    d = n(477690),
    h = n(481060),
    p = n(239091),
    f = n(100527),
    g = n(243778),
    m = n(538445),
    b = n(232062),
    _ = n(151494),
    O = n(554549),
    y = n(496675),
    v = n(594174),
    C = n(259580),
    j = n(267642),
    E = n(624138),
    x = n(667815),
    S = n(531572),
    I = n(651138),
    P = n(18857),
    N = n(981631),
    w = n(921944),
    Z = n(388032),
    T = n(93841),
    A = n(30009);
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
function D(e, t) {
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
let L = (0, E.Mg)(d.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    M = 57,
    k = 57 + L,
    U = {
        tension: 180,
        friction: 80
    },
    G = (e) => {
        let { guild: t, withMargin: n } = e,
            l = (0, j.Jh)(t.id),
            d = (0, _.Z)(t.id),
            E = (0, j.FZ)(l),
            L = null == E,
            M = null != E ? E : l,
            k = (0, c.e7)([S.Z], () => {
                var e;
                return null != (e = S.Z.getCountForGuild(t.id)) ? e : 0;
            }),
            G = (0, c.e7)([y.Z], () => y.Z.can(N.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            k !== d && (0, x.v)(t.id, d);
        }, [t.id, k, d]);
        let B = L ? '100%' : ''.concat(Math.min(100, (d / N.oCV[M]) * 100), '%'),
            { current: V } = i.useRef(B),
            [F] = (0, h.q_F)(
                () => ({
                    from: { width: k === d ? V : '0%' },
                    to: { width: B },
                    config: U
                }),
                'respect-motion-settings',
                [k, d, V, B]
            ),
            H = t.premiumTier < M && k >= N.oCV[M],
            z = (0, P.Z)(t, f.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY, N.jXE.PREMIUM_GUILD_PROGRESS_BAR),
            W = Z.intl.formatToPlainString(Z.t['2oNfMT'], { levelName: (0, j.e9)(M) }),
            K = Z.intl.format(Z.t.dhKnYm, {
                numBoosts: d,
                numTotal: N.oCV[M]
            });
        (L && ((W = (0, j.e9)(M)), (K = Z.intl.format(Z.t.B2byER, { numBoosts: d }))), (W = W.toLocaleLowerCase()));
        let Y = (0, a.JA)('boosts-'.concat(t.id)),
            q = i.useRef(null),
            X = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
            Q = (0, O.Z)(null == X ? void 0 : X.id, t.id),
            J = (0, b.W)(t.id, 'GuildBoostingSidebarDisplay'),
            $ = (null == t ? void 0 : t.premiumProgressBarEnabled) === !0,
            ee = [];
        Q && J && $ && ee.push(u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK);
        let [et, en] = (0, g.US)(ee),
            er = () =>
                et === u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK
                    ? (0, r.jsx)(m.Z, {
                          guild: t,
                          markAsDismissed: en
                      })
                    : null;
        return (0, r.jsx)('li', {
            children: (0, r.jsx)(h.ua7, {
                text: H ? Z.intl.formatToPlainString(T.default['9CtPjo'], { perk: (0, j.nW)(M) }) : L ? Z.intl.string(Z.t['Y+V9go']) : Z.intl.formatToPlainString(Z.t.UyDKl5, { levelName: (0, j.nW)(M) }),
                position: 'top',
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    (0, r.jsx)(h.yRy, {
                        targetElementRef: q,
                        renderPopout: er,
                        position: 'right',
                        align: 'top',
                        shouldShow: null != et,
                        onRequestClose: () => en(w.L.INDIRECT_ACTION),
                        animation: h.yRy.Animation.TRANSLATE,
                        children: (i) =>
                            (0, r.jsx)('div', {
                                ref: q,
                                children: (0, r.jsxs)(
                                    h.P3F,
                                    D(R({}, Y, e, i), {
                                        'aria-label': void 0,
                                        role: 'button',
                                        focusProps: {
                                            offset: {
                                                left: 10,
                                                right: 4
                                            }
                                        },
                                        onClick: z,
                                        className: o()(A.container, { [A.containerWithMargin]: n }),
                                        onContextMenu: (e) => {
                                            G && (0, p.vq)(e, (e) => (0, r.jsx)(I.default, D(R({}, e), { guild: t })));
                                        },
                                        children: [
                                            (0, r.jsx)(h.nn4, { children: e['aria-label'] }),
                                            (0, r.jsxs)('div', {
                                                className: A.textArea,
                                                children: [
                                                    (0, r.jsx)('div', {
                                                        className: A.goalTextContainer,
                                                        children: (0, r.jsx)(h.Text, {
                                                            className: A.goalText,
                                                            color: 'none',
                                                            variant: 'text-sm/medium',
                                                            lineClamp: 1,
                                                            children: W
                                                        })
                                                    }),
                                                    (0, r.jsxs)('div', {
                                                        className: A.progressFraction,
                                                        children: [
                                                            (0, r.jsx)(h.Text, {
                                                                color: 'none',
                                                                variant: 'text-sm/medium',
                                                                className: A.progressText,
                                                                lineClamp: 1,
                                                                children: K
                                                            }),
                                                            (0, r.jsx)(C.Z, {
                                                                className: A.count,
                                                                height: 16,
                                                                width: 16,
                                                                direction: C.Z.Directions.RIGHT
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: o()(A.progressBarContainer, { [A.progressBarContainerComplete]: L }),
                                                children: [
                                                    (0, r.jsx)(s.animated.div, {
                                                        className: A.progressBar,
                                                        style: F
                                                    }),
                                                    L
                                                        ? (0, r.jsx)('span', {
                                                              'aria-label': Z.intl.string(Z.t['7iL1q6']),
                                                              role: 'img',
                                                              className: A.tadaIcon,
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
