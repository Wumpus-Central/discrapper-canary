n.d(t, {
    PD: () => R,
    ZP: () => M,
    aR: () => L
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(200100),
    s = n(91192),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    p = n(239091),
    h = n(100527),
    f = n(367907),
    g = n(906732),
    m = n(540059),
    b = n(434404),
    _ = n(151494),
    y = n(496675),
    v = n(259580),
    O = n(267642),
    j = n(624138),
    C = n(667815),
    x = n(531572),
    S = n(26323),
    P = n(30513),
    I = n(981631),
    N = n(388032),
    Z = n(680278),
    E = n(30009);
function w(e) {
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
let A = (0, j.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    D = (e) => {
        let { guild: t, onSelect: n } = e,
            [l, o] = i.useState(t.premiumProgressBarEnabled),
            [a, s] = i.useState(!1),
            u = (0, c.e7)([y.Z], () => y.Z.can(I.Plq.MANAGE_GUILD, t)),
            h = async () => {
                u && (s(!0), await b.Z.saveGuild(t.id, { premiumProgressBarEnabled: !l }), o(!l), s(!1));
            };
        return (0, r.jsx)(d.v2r, {
            navId: 'progress-bar-context',
            onClose: p.Zy,
            'aria-label': N.NW.string(N.t['m85s/v']),
            onSelect: n,
            children: (0, r.jsx)(d.S89, {
                id: 'progress-bar-enabled',
                label: N.NW.string(N.t['0CJWPz']),
                checked: l,
                disabled: a,
                action: h
            })
        });
    },
    R = 57,
    L = 57 + A,
    k = {
        tension: 180,
        friction: 80
    },
    M = (e) => {
        let { guild: t, withMargin: n } = e,
            l = (0, m.Q3)('GuildBoostingSidebarDisplay'),
            { analyticsLocations: u } = (0, g.ZP)(h.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
            b = (0, O.Jh)(t.id),
            j = (0, _.Z)(t.id),
            A = (0, O.FZ)(b),
            R = null == A,
            L = null != A ? A : b,
            M = (0, c.e7)([x.Z], () => {
                var e;
                return null != (e = x.Z.getCountForGuild(t.id)) ? e : 0;
            }),
            G = (0, c.e7)([y.Z], () => y.Z.can(I.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            M !== j && (0, C.v)(t.id, j);
        }, [t.id, M, j]);
        let B = ''.concat(Math.min(100, (j / I.oCV[L]) * 100), '%'),
            { current: U } = i.useRef(B),
            [W] = (0, d.q_F)(
                () => ({
                    from: { width: M === j ? U : '0%' },
                    to: { width: B },
                    config: k
                }),
                'respect-motion-settings',
                [M, j, U, B]
            ),
            V = t.premiumTier < L && M >= I.oCV[L],
            F = () => {
                (0, f.yw)(I.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: { section: I.jXE.PREMIUM_GUILD_PROGRESS_BAR },
                    guild_id: t.id,
                    location_stack: u
                }),
                    (0, S.Z)({
                        analyticsLocations: u,
                        analyticsSourceLocation: {
                            page: I.ZY5.GUILD_CHANNEL,
                            section: I.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                            object: I.qAy.TOOLTIP
                        },
                        guild: t,
                        perks: (0, P.VF)(),
                        perkIntro: N.NW.string(N.t.ZhvSn5)
                    });
            },
            H = N.NW.formatToPlainString(N.t['2oNfMT'], { levelName: (0, O.e9)(L) }),
            z = N.NW.format(N.t.dhKnYm, {
                numBoosts: j,
                numTotal: I.oCV[L]
            });
        R && ((H = (0, O.e9)(L)), (z = N.NW.format(N.t.B2byER, { numBoosts: j }))), l && (H = H.toLocaleLowerCase());
        let Y = (0, s.JA)('boosts-'.concat(t.id));
        return (0, r.jsx)('li', {
            children: (0, r.jsx)(d.ua7, {
                text: V ? N.NW.formatToPlainString(Z.Z['9CtPjo'], { perk: (0, O.nW)(L) }) : R ? N.NW.string(N.t['Y+V9go']) : N.NW.formatToPlainString(N.t.UyDKl5, { levelName: (0, O.nW)(L) }),
                color: d.ua7.Colors.BLACK,
                position: 'top',
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    (0, r.jsxs)(
                        d.P3F,
                        T(w({}, Y, e), {
                            'aria-label': void 0,
                            role: 'button',
                            focusProps: {
                                offset: {
                                    left: 10,
                                    right: 4
                                }
                            },
                            onClick: F,
                            className: o()(E.container, { [E.containerWithMargin]: n }),
                            onContextMenu: (e) => {
                                G && (0, p.vq)(e, (e) => (0, r.jsx)(D, T(w({}, e), { guild: t })));
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
                                                children: H
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
                                                    children: z
                                                }),
                                                (0, r.jsx)(v.Z, {
                                                    className: E.count,
                                                    height: 16,
                                                    width: 16,
                                                    direction: v.Z.Directions.RIGHT
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: o()(E.progressBarContainer, { [E.progressBarContainerComplete]: R }),
                                    children: [
                                        (0, r.jsx)(a.animated.div, {
                                            className: E.progressBar,
                                            style: W
                                        }),
                                        R
                                            ? (0, r.jsx)('span', {
                                                  'aria-label': N.NW.string(N.t['7iL1q6']),
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
