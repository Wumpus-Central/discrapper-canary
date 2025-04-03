n.d(t, {
    PD: () => D,
    ZP: () => k,
    aR: () => R
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(642128),
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
    y = n(151494),
    _ = n(496675),
    v = n(259580),
    O = n(267642),
    j = n(624138),
    x = n(667815),
    C = n(531572),
    S = n(26323),
    P = n(30513),
    I = n(981631),
    N = n(388032),
    Z = n(30009);
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
function E(e, t) {
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
let T = (0, j.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    A = (e) => {
        let { guild: t, onSelect: n } = e,
            [l, o] = i.useState(t.premiumProgressBarEnabled),
            [a, s] = i.useState(!1),
            u = (0, c.e7)([_.Z], () => _.Z.can(I.Plq.MANAGE_GUILD, t)),
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
    D = 57,
    R = 57 + T,
    L = {
        tension: 180,
        friction: 80
    },
    k = (e) => {
        let { guild: t, withMargin: n } = e,
            l = (0, m.Q3)('GuildBoostingSidebarDisplay'),
            { analyticsLocations: u } = (0, g.ZP)(h.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
            b = (0, O.Jh)(t.id),
            j = (0, y.Z)(t.id),
            T = (0, O.FZ)(b),
            D = null == T,
            R = null != T ? T : b,
            k = (0, c.e7)([C.Z], () => {
                var e;
                return null != (e = C.Z.getCountForGuild(t.id)) ? e : 0;
            }),
            M = (0, c.e7)([_.Z], () => _.Z.can(I.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            k !== j && (0, x.v)(t.id, j);
        }, [t.id, k, j]);
        let G = ''.concat(Math.min(100, (j / I.oCV[R]) * 100), '%'),
            { current: B } = i.useRef(G),
            [U] = (0, d.q_F)(
                () => ({
                    from: { width: k === j ? B : '0%' },
                    to: { width: G },
                    config: L
                }),
                'respect-motion-settings',
                [k, j, B, G]
            ),
            W = () => {
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
            V = N.NW.formatToPlainString(N.t['2oNfMT'], { levelName: (0, O.e9)(R) }),
            F = N.NW.format(N.t.dhKnYm, {
                numBoosts: j,
                numTotal: I.oCV[R]
            });
        D && ((V = (0, O.e9)(R)), (F = N.NW.format(N.t.B2byER, { numBoosts: j }))), l && (V = V.toLocaleLowerCase());
        let H = (0, s.JA)('boosts-'.concat(t.id));
        return (0, r.jsx)('li', {
            children: (0, r.jsx)(d.ua7, {
                text: D ? N.NW.string(N.t['Y+V9go']) : N.NW.formatToPlainString(N.t.UyDKl5, { levelName: (0, O.nW)(R) }),
                color: d.ua7.Colors.BLACK,
                position: 'top',
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    (0, r.jsxs)(
                        d.P3F,
                        E(w({}, H, e), {
                            'aria-label': void 0,
                            role: 'button',
                            focusProps: {
                                offset: {
                                    left: 10,
                                    right: 4
                                }
                            },
                            onClick: W,
                            className: o()(Z.container, { [Z.containerWithMargin]: n }),
                            onContextMenu: (e) => {
                                M && (0, p.vq)(e, (e) => (0, r.jsx)(A, E(w({}, e), { guild: t })));
                            },
                            children: [
                                (0, r.jsx)(d.nn4, { children: e['aria-label'] }),
                                (0, r.jsxs)('div', {
                                    className: Z.textArea,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: Z.goalTextContainer,
                                            children: (0, r.jsx)(d.Text, {
                                                className: Z.goalText,
                                                color: l ? 'none' : 'interactive-active',
                                                variant: l ? 'text-sm/medium' : 'text-xs/bold',
                                                lineClamp: 1,
                                                children: V
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: Z.progressFraction,
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    color: l ? 'none' : 'interactive-normal',
                                                    variant: l ? 'text-sm/medium' : 'text-xs/normal',
                                                    className: Z.progressText,
                                                    lineClamp: 1,
                                                    children: F
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
                                    className: o()(Z.progressBarContainer, { [Z.progressBarContainerComplete]: D }),
                                    children: [
                                        (0, r.jsx)(a.animated.div, {
                                            className: Z.progressBar,
                                            style: U
                                        }),
                                        D
                                            ? (0, r.jsx)('span', {
                                                  'aria-label': N.NW.string(N.t['7iL1q6']),
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
        });
    };
