n.d(t, {
    PD: () => N,
    ZP: () => T,
    aR: () => w
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(524979),
    a = n(91192),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    h = n(239091),
    p = n(151494),
    f = n(496675),
    g = n(259580),
    m = n(267642),
    b = n(624138),
    _ = n(667815),
    O = n(531572),
    y = n(651138),
    v = n(18857),
    C = n(981631),
    j = n(388032),
    E = n(93841),
    S = n(30009);
function x(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function I(e, t) {
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
let P = (0, b.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    N = 57,
    w = 57 + P,
    Z = {
        tension: 180,
        friction: 80
    },
    T = (e) => {
        let { guild: t, withMargin: n } = e,
            l = (0, m.Jh)(t.id),
            u = (0, p.Z)(t.id),
            b = (0, m.FZ)(l),
            P = null == b,
            N = null != b ? b : l,
            w = (0, c.e7)([O.Z], () => {
                var e;
                return null != (e = O.Z.getCountForGuild(t.id)) ? e : 0;
            }),
            T = (0, c.e7)([f.Z], () => f.Z.can(C.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            w !== u && (0, _.v)(t.id, u);
        }, [t.id, w, u]);
        let A = P ? '100%' : ''.concat(Math.min(100, (u / C.oCV[N]) * 100), '%'),
            { current: R } = i.useRef(A),
            [D] = (0, d.q_F)(
                () => ({
                    from: { width: w === u ? R : '0%' },
                    to: { width: A },
                    config: Z
                }),
                'respect-motion-settings',
                [w, u, R, A]
            ),
            L = t.premiumTier < N && w >= C.oCV[N],
            M = (0, v.Z)(t),
            k = j.intl.formatToPlainString(j.t['2oNfMT'], { levelName: (0, m.e9)(N) }),
            U = j.intl.format(j.t.dhKnYm, {
                numBoosts: u,
                numTotal: C.oCV[N]
            });
        P && ((k = (0, m.e9)(N)), (U = j.intl.format(j.t.B2byER, { numBoosts: u }))), (k = k.toLocaleLowerCase());
        let G = (0, a.JA)('boosts-'.concat(t.id));
        return (0, r.jsx)('li', {
            children: (0, r.jsx)(d.ua7, {
                text: L ? j.intl.formatToPlainString(E.default['9CtPjo'], { perk: (0, m.nW)(N) }) : P ? j.intl.string(j.t['Y+V9go']) : j.intl.formatToPlainString(j.t.UyDKl5, { levelName: (0, m.nW)(N) }),
                color: d.ua7.Colors.BLACK,
                position: 'top',
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    (0, r.jsxs)(
                        d.P3F,
                        I(x({}, G, e), {
                            'aria-label': void 0,
                            role: 'button',
                            focusProps: {
                                offset: {
                                    left: 10,
                                    right: 4
                                }
                            },
                            onClick: M,
                            className: o()(S.container, { [S.containerWithMargin]: n }),
                            onContextMenu: (e) => {
                                T && (0, h.vq)(e, (e) => (0, r.jsx)(y.default, I(x({}, e), { guild: t })));
                            },
                            children: [
                                (0, r.jsx)(d.nn4, { children: e['aria-label'] }),
                                (0, r.jsxs)('div', {
                                    className: S.textArea,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: S.goalTextContainer,
                                            children: (0, r.jsx)(d.Text, {
                                                className: S.goalText,
                                                color: 'none',
                                                variant: 'text-sm/medium',
                                                lineClamp: 1,
                                                children: k
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: S.progressFraction,
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    color: 'none',
                                                    variant: 'text-sm/medium',
                                                    className: S.progressText,
                                                    lineClamp: 1,
                                                    children: U
                                                }),
                                                (0, r.jsx)(g.Z, {
                                                    className: S.count,
                                                    height: 16,
                                                    width: 16,
                                                    direction: g.Z.Directions.RIGHT
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: o()(S.progressBarContainer, { [S.progressBarContainerComplete]: P }),
                                    children: [
                                        (0, r.jsx)(s.animated.div, {
                                            className: S.progressBar,
                                            style: D
                                        }),
                                        P
                                            ? (0, r.jsx)('span', {
                                                  'aria-label': j.intl.string(j.t['7iL1q6']),
                                                  role: 'img',
                                                  className: S.tadaIcon,
                                                  children: '\uD83C\uDF89'
                                              })
                                            : null
                                    ]
                                })
                            ]
                        })
                    )
            })
        });
    };
