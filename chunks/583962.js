n.d(t, {
    PD: () => D,
    ZP: () => M,
    aR: () => L
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(272573),
    a = n(91192),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    h = n(239091),
    p = n(100527),
    f = n(367907),
    g = n(906732),
    m = n(540059),
    b = n(434404),
    _ = n(151494),
    y = n(496675),
    O = n(259580),
    v = n(267642),
    C = n(624138),
    j = n(667815),
    S = n(531572),
    E = n(26323),
    x = n(30513),
    P = n(981631),
    I = n(388032),
    w = n(680278),
    N = n(30009);
function Z(e) {
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
function T(e, t) {
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
let A = (0, C.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    R = (e) => {
        let { guild: t, onSelect: n } = e,
            [l, o] = i.useState(t.premiumProgressBarEnabled),
            [s, a] = i.useState(!1),
            u = (0, c.e7)([y.Z], () => y.Z.can(P.Plq.MANAGE_GUILD, t)),
            p = async () => {
                u && (a(!0), await b.Z.saveGuild(t.id, { premiumProgressBarEnabled: !l }), o(!l), a(!1));
            };
        return (0, r.jsx)(d.v2r, {
            navId: 'progress-bar-context',
            onClose: h.Zy,
            'aria-label': I.intl.string(I.t['m85s/v']),
            onSelect: n,
            children: (0, r.jsx)(d.S89, {
                id: 'progress-bar-enabled',
                label: I.intl.string(I.t['0CJWPz']),
                checked: l,
                disabled: s,
                action: p
            })
        });
    },
    D = 57,
    L = 57 + A,
    k = {
        tension: 180,
        friction: 80
    },
    M = (e) => {
        let { guild: t, withMargin: n } = e,
            l = (0, m.Q3)('GuildBoostingSidebarDisplay'),
            { analyticsLocations: u } = (0, g.ZP)(p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
            b = (0, v.Jh)(t.id),
            C = (0, _.Z)(t.id),
            A = (0, v.FZ)(b),
            D = null == A,
            L = null != A ? A : b,
            M = (0, c.e7)([S.Z], () => {
                var e;
                return null != (e = S.Z.getCountForGuild(t.id)) ? e : 0;
            }),
            U = (0, c.e7)([y.Z], () => y.Z.can(P.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            M !== C && (0, j.v)(t.id, C);
        }, [t.id, M, C]);
        let G = D ? '100%' : ''.concat(Math.min(100, (C / P.oCV[L]) * 100), '%'),
            { current: B } = i.useRef(G),
            [V] = (0, d.q_F)(
                () => ({
                    from: { width: M === C ? B : '0%' },
                    to: { width: G },
                    config: k
                }),
                'respect-motion-settings',
                [M, C, B, G]
            ),
            H = t.premiumTier < L && M >= P.oCV[L],
            F = () => {
                (0, f.yw)(P.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: { section: P.jXE.PREMIUM_GUILD_PROGRESS_BAR },
                    guild_id: t.id,
                    location_stack: u
                }),
                    (0, E.Z)({
                        analyticsLocations: u,
                        analyticsSourceLocation: {
                            page: P.ZY5.GUILD_CHANNEL,
                            section: P.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                            object: P.qAy.TOOLTIP
                        },
                        guild: t,
                        perks: (0, x.VF)(),
                        perkIntro: I.intl.string(I.t.ZhvSn5)
                    });
            },
            z = I.intl.formatToPlainString(I.t['2oNfMT'], { levelName: (0, v.e9)(L) }),
            W = I.intl.format(I.t.dhKnYm, {
                numBoosts: C,
                numTotal: P.oCV[L]
            });
        D && ((z = (0, v.e9)(L)), (W = I.intl.format(I.t.B2byER, { numBoosts: C }))), l && (z = z.toLocaleLowerCase());
        let Y = (0, a.JA)('boosts-'.concat(t.id));
        return (0, r.jsx)('li', {
            children: (0, r.jsx)(d.ua7, {
                text: H ? I.intl.formatToPlainString(w.default['9CtPjo'], { perk: (0, v.nW)(L) }) : D ? I.intl.string(I.t['Y+V9go']) : I.intl.formatToPlainString(I.t.UyDKl5, { levelName: (0, v.nW)(L) }),
                color: d.ua7.Colors.BLACK,
                position: 'top',
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    (0, r.jsxs)(
                        d.P3F,
                        T(Z({}, Y, e), {
                            'aria-label': void 0,
                            role: 'button',
                            focusProps: {
                                offset: {
                                    left: 10,
                                    right: 4
                                }
                            },
                            onClick: F,
                            className: o()(N.container, { [N.containerWithMargin]: n }),
                            onContextMenu: (e) => {
                                U && (0, h.vq)(e, (e) => (0, r.jsx)(R, T(Z({}, e), { guild: t })));
                            },
                            children: [
                                (0, r.jsx)(d.nn4, { children: e['aria-label'] }),
                                (0, r.jsxs)('div', {
                                    className: N.textArea,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: N.goalTextContainer,
                                            children: (0, r.jsx)(d.Text, {
                                                className: N.goalText,
                                                color: l ? 'none' : 'interactive-active',
                                                variant: l ? 'text-sm/medium' : 'text-xs/bold',
                                                lineClamp: 1,
                                                children: z
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: N.progressFraction,
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    color: l ? 'none' : 'interactive-normal',
                                                    variant: l ? 'text-sm/medium' : 'text-xs/normal',
                                                    className: N.progressText,
                                                    lineClamp: 1,
                                                    children: W
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
                                    className: o()(N.progressBarContainer, { [N.progressBarContainerComplete]: D }),
                                    children: [
                                        (0, r.jsx)(s.animated.div, {
                                            className: N.progressBar,
                                            style: V
                                        }),
                                        D
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
        });
    };
