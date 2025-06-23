n.d(t, {
    PD: () => w,
    ZP: () => A,
    aR: () => Z
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
    p = n(540059),
    f = n(151494),
    g = n(496675),
    m = n(259580),
    b = n(267642),
    O = n(624138),
    y = n(667815),
    _ = n(531572),
    v = n(651138),
    C = n(18857),
    j = n(981631),
    S = n(388032),
    x = n(93841),
    E = n(30009);
function P(e) {
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
let N = (0, O.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    w = 57,
    Z = 57 + N,
    T = {
        tension: 180,
        friction: 80
    },
    A = (e) => {
        let { guild: t, withMargin: n } = e,
            l = (0, p.Q3)('GuildBoostingSidebarDisplay'),
            u = (0, b.Jh)(t.id),
            O = (0, f.Z)(t.id),
            N = (0, b.FZ)(u),
            w = null == N,
            Z = null != N ? N : u,
            A = (0, c.e7)([_.Z], () => {
                var e;
                return null != (e = _.Z.getCountForGuild(t.id)) ? e : 0;
            }),
            R = (0, c.e7)([g.Z], () => g.Z.can(j.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            A !== O && (0, y.v)(t.id, O);
        }, [t.id, A, O]);
        let D = w ? '100%' : ''.concat(Math.min(100, (O / j.oCV[Z]) * 100), '%'),
            { current: L } = i.useRef(D),
            [M] = (0, d.q_F)(
                () => ({
                    from: { width: A === O ? L : '0%' },
                    to: { width: D },
                    config: T
                }),
                'respect-motion-settings',
                [A, O, L, D]
            ),
            k = t.premiumTier < Z && A >= j.oCV[Z],
            U = (0, C.Z)(t),
            G = S.intl.formatToPlainString(S.t['2oNfMT'], { levelName: (0, b.e9)(Z) }),
            B = S.intl.format(S.t.dhKnYm, {
                numBoosts: O,
                numTotal: j.oCV[Z]
            });
        w && ((G = (0, b.e9)(Z)), (B = S.intl.format(S.t.B2byER, { numBoosts: O }))), l && (G = G.toLocaleLowerCase());
        let V = (0, a.JA)('boosts-'.concat(t.id));
        return (0, r.jsx)('li', {
            children: (0, r.jsx)(d.ua7, {
                text: k ? S.intl.formatToPlainString(x.default['9CtPjo'], { perk: (0, b.nW)(Z) }) : w ? S.intl.string(S.t['Y+V9go']) : S.intl.formatToPlainString(S.t.UyDKl5, { levelName: (0, b.nW)(Z) }),
                color: d.ua7.Colors.BLACK,
                position: 'top',
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    (0, r.jsxs)(
                        d.P3F,
                        I(P({}, V, e), {
                            'aria-label': void 0,
                            role: 'button',
                            focusProps: {
                                offset: {
                                    left: 10,
                                    right: 4
                                }
                            },
                            onClick: U,
                            className: o()(E.container, { [E.containerWithMargin]: n }),
                            onContextMenu: (e) => {
                                R && (0, h.vq)(e, (e) => (0, r.jsx)(v.default, I(P({}, e), { guild: t })));
                            },
                            children: [
                                (0, r.jsx)(d.nn4, { children: e['aria-label'] }),
                                (0, r.jsxs)('div', {
                                    className: E.textArea,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: E.goalTextContainer,
                                            children: (0, r.jsx)(d.Text, {
                                                className: E.goalText,
                                                color: l ? 'none' : 'interactive-active',
                                                variant: l ? 'text-sm/medium' : 'text-xs/bold',
                                                lineClamp: 1,
                                                children: G
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: E.progressFraction,
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    color: l ? 'none' : 'interactive-normal',
                                                    variant: l ? 'text-sm/medium' : 'text-xs/normal',
                                                    className: E.progressText,
                                                    lineClamp: 1,
                                                    children: B
                                                }),
                                                (0, r.jsx)(m.Z, {
                                                    className: E.count,
                                                    height: 16,
                                                    width: 16,
                                                    direction: m.Z.Directions.RIGHT
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: o()(E.progressBarContainer, { [E.progressBarContainerComplete]: w }),
                                    children: [
                                        (0, r.jsx)(s.animated.div, {
                                            className: E.progressBar,
                                            style: M
                                        }),
                                        w
                                            ? (0, r.jsx)('span', {
                                                  'aria-label': S.intl.string(S.t['7iL1q6']),
                                                  role: 'img',
                                                  className: E.tadaIcon,
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
