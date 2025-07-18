(n.d(t, {
    PD: () => A,
    ZP: () => L,
    aR: () => R
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(42133),
    a = n(91192),
    c = n(442837),
    u = n(704215),
    d = n(477690),
    h = n(481060),
    p = n(239091),
    f = n(100527),
    g = n(243778),
    m = n(538445),
    b = n(151494),
    _ = n(496675),
    O = n(259580),
    y = n(267642),
    v = n(624138),
    C = n(667815),
    j = n(531572),
    E = n(18857),
    x = n(981631),
    S = n(921944),
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
    L = i.memo((e) => {
        let { guild: t, tooltipTypes: l, withMargin: d } = e,
            v = (0, y.Jh)(t.id),
            T = (0, b.Z)(t.id),
            A = (0, y.FZ)(v),
            R = null == A,
            L = null != A ? A : v,
            M = (0, c.e7)([j.Z], () => {
                var e;
                return null != (e = j.Z.getCountForGuild(t.id)) ? e : 0;
            }),
            k = (0, c.e7)([_.Z], () => _.Z.can(x.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            M !== T && (0, C.v)(t.id, T);
        }, [t.id, M, T]);
        let U = R ? '100%' : ''.concat(Math.min(100, (T / x.oCV[L]) * 100), '%'),
            { current: G } = i.useRef(U),
            [B] = (0, h.q_F)(
                () => ({
                    from: { width: M === T ? G : '0%' },
                    to: { width: U },
                    config: D
                }),
                'respect-motion-settings',
                [M, T, G, U]
            ),
            V = t.premiumTier < L && M >= x.oCV[L],
            F = (0, E.Z)(t, f.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY, x.jXE.PREMIUM_GUILD_PROGRESS_BAR),
            H = I.intl.formatToPlainString(I.t['2oNfMT'], { levelName: (0, y.e9)(L) }),
            z = I.intl.format(I.t.dhKnYm, {
                numBoosts: T,
                numTotal: x.oCV[L]
            });
        (R && ((H = (0, y.e9)(L)), (z = I.intl.format(I.t.B2byER, { numBoosts: T }))), (H = H.toLocaleLowerCase()));
        let W = (0, a.JA)('boosts-'.concat(t.id)),
            K = i.useRef(null),
            [Y, q] = (0, g.US)(l),
            X = () =>
                Y === u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK
                    ? (0, r.jsx)(m.Z, {
                          guild: t,
                          markAsDismissed: q
                      })
                    : null,
            Q = (e, i) =>
                (0, r.jsxs)(
                    h.P3F,
                    Z(w({}, W, e, i), {
                        'aria-label': void 0,
                        role: 'button',
                        focusProps: {
                            offset: {
                                left: 10,
                                right: 4
                            }
                        },
                        onClick: () => {
                            var t, n;
                            (null == e || null == (t = e.onClick) || t.call(e), null == i || null == (n = i.onClick) || n.call(i), F());
                        },
                        className: o()(N.container, { [N.containerWithMargin]: d }),
                        onContextMenu: (e) => {
                            k &&
                                (0, p.jW)(e, async () => {
                                    let { default: e } = await n.e('8570').then(n.bind(n, 651138));
                                    return (n) => (0, r.jsx)(e, Z(w({}, n), { guild: t }));
                                });
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
                                            children: H
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
                                                children: z
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
                                className: o()(N.progressBarContainer, { [N.progressBarContainerComplete]: R }),
                                children: [
                                    (0, r.jsx)(s.animated.div, {
                                        className: N.progressBar,
                                        style: B
                                    }),
                                    R
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
                );
        return (0, r.jsx)('li', {
            children: (0, r.jsx)(h.ua7, {
                text: V ? I.intl.formatToPlainString(P.default['9CtPjo'], { perk: (0, y.nW)(L) }) : R ? I.intl.string(I.t['Y+V9go']) : I.intl.formatToPlainString(I.t.UyDKl5, { levelName: (0, y.nW)(L) }),
                position: 'top',
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    null != Y
                        ? (0, r.jsx)(h.yRy, {
                              targetElementRef: K,
                              renderPopout: X,
                              position: 'right',
                              align: 'top',
                              shouldShow: !0,
                              closeOnScroll: !0,
                              onRequestClose: () => q(S.L.INDIRECT_ACTION),
                              animation: h.yRy.Animation.TRANSLATE,
                              children: (t) =>
                                  (0, r.jsx)('div', {
                                      ref: K,
                                      children: Q(e, t)
                                  })
                          })
                        : Q(e)
            })
        });
    });
