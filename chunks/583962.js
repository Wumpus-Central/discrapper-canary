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
    s = n(200100),
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
    y = n(151494),
    _ = n(496675),
    O = n(259580),
    v = n(267642),
    C = n(624138),
    j = n(667815),
    S = n(531572),
    x = n(26323),
    E = n(30513),
    I = n(981631),
    N = n(388032),
    P = n(680278),
    w = n(30009);
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
            u = (0, c.e7)([_.Z], () => _.Z.can(I.Plq.MANAGE_GUILD, t)),
            p = async () => {
                u && (a(!0), await b.Z.saveGuild(t.id, { premiumProgressBarEnabled: !l }), o(!l), a(!1));
            };
        return (0, r.jsx)(d.v2r, {
            navId: 'progress-bar-context',
            onClose: h.Zy,
            'aria-label': N.NW.string(N.t['m85s/v']),
            onSelect: n,
            children: (0, r.jsx)(d.S89, {
                id: 'progress-bar-enabled',
                label: N.NW.string(N.t['0CJWPz']),
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
            C = (0, y.Z)(t.id),
            A = (0, v.FZ)(b),
            D = null == A,
            L = null != A ? A : b,
            M = (0, c.e7)([S.Z], () => {
                var e;
                return null != (e = S.Z.getCountForGuild(t.id)) ? e : 0;
            }),
            U = (0, c.e7)([_.Z], () => _.Z.can(I.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            M !== C && (0, j.v)(t.id, C);
        }, [t.id, M, C]);
        let G = ''.concat(Math.min(100, (C / I.oCV[L]) * 100), '%'),
            { current: B } = i.useRef(G),
            [W] = (0, d.q_F)(
                () => ({
                    from: { width: M === C ? B : '0%' },
                    to: { width: G },
                    config: k
                }),
                'respect-motion-settings',
                [M, C, B, G]
            ),
            V = t.premiumTier < L && M >= I.oCV[L],
            F = () => {
                (0, f.yw)(I.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: { section: I.jXE.PREMIUM_GUILD_PROGRESS_BAR },
                    guild_id: t.id,
                    location_stack: u
                }),
                    (0, x.Z)({
                        analyticsLocations: u,
                        analyticsSourceLocation: {
                            page: I.ZY5.GUILD_CHANNEL,
                            section: I.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                            object: I.qAy.TOOLTIP
                        },
                        guild: t,
                        perks: (0, E.VF)(),
                        perkIntro: N.NW.string(N.t.ZhvSn5)
                    });
            },
            H = N.NW.formatToPlainString(N.t['2oNfMT'], { levelName: (0, v.e9)(L) }),
            z = N.NW.format(N.t.dhKnYm, {
                numBoosts: C,
                numTotal: I.oCV[L]
            });
        D && ((H = (0, v.e9)(L)), (z = N.NW.format(N.t.B2byER, { numBoosts: C }))), l && (H = H.toLocaleLowerCase());
        let Y = (0, a.JA)('boosts-'.concat(t.id));
        return (0, r.jsx)('li', {
            children: (0, r.jsx)(d.ua7, {
                text: V ? N.NW.formatToPlainString(P.Z['9CtPjo'], { perk: (0, v.nW)(L) }) : D ? N.NW.string(N.t['Y+V9go']) : N.NW.formatToPlainString(N.t.UyDKl5, { levelName: (0, v.nW)(L) }),
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
                            className: o()(w.container, { [w.containerWithMargin]: n }),
                            onContextMenu: (e) => {
                                U && (0, h.vq)(e, (e) => (0, r.jsx)(R, T(Z({}, e), { guild: t })));
                            },
                            children: [
                                (0, r.jsx)(d.nn4, { children: e['aria-label'] }),
                                (0, r.jsxs)('div', {
                                    className: w.textArea,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: w.goalTextContainer,
                                            children: (0, r.jsx)(d.Text, {
                                                className: w.goalText,
                                                color: l ? 'none' : 'interactive-active',
                                                variant: l ? 'text-sm/medium' : 'text-xs/bold',
                                                lineClamp: 1,
                                                children: H
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: w.progressFraction,
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    color: l ? 'none' : 'interactive-normal',
                                                    variant: l ? 'text-sm/medium' : 'text-xs/normal',
                                                    className: w.progressText,
                                                    lineClamp: 1,
                                                    children: z
                                                }),
                                                (0, r.jsx)(O.Z, {
                                                    className: w.count,
                                                    height: 16,
                                                    width: 16,
                                                    direction: O.Z.Directions.RIGHT
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: o()(w.progressBarContainer, { [w.progressBarContainerComplete]: D }),
                                    children: [
                                        (0, r.jsx)(s.animated.div, {
                                            className: w.progressBar,
                                            style: W
                                        }),
                                        D
                                            ? (0, r.jsx)('span', {
                                                  'aria-label': N.NW.string(N.t['7iL1q6']),
                                                  role: 'img',
                                                  className: w.tadaIcon,
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
