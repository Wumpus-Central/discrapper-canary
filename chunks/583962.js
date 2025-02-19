n.d(t, {
    PD: () => A,
    ZP: () => L,
    aR: () => D
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
    v = n(496675),
    y = n(259580),
    _ = n(267642),
    O = n(624138),
    j = n(667815),
    C = n(531572),
    x = n(26323),
    P = n(30513),
    S = n(981631),
    I = n(388032),
    N = n(331972);
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
function w(e, t) {
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
let E = (0, O.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    T = (e) => {
        let { guild: t, onSelect: n } = e,
            [l, o] = i.useState(t.premiumProgressBarEnabled),
            [a, s] = i.useState(!1),
            u = (0, c.e7)([v.Z], () => v.Z.can(S.Plq.MANAGE_GUILD, t)),
            h = async () => {
                u && (s(!0), await b.Z.saveGuild(t.id, { premiumProgressBarEnabled: !l }), o(!l), s(!1));
            };
        return (0, r.jsx)(d.v2r, {
            navId: 'progress-bar-context',
            onClose: p.Zy,
            'aria-label': I.NW.string(I.t['m85s/v']),
            onSelect: n,
            children: (0, r.jsx)(d.S89, {
                id: 'progress-bar-enabled',
                label: I.NW.string(I.t['0CJWPz']),
                checked: l,
                disabled: a,
                action: h
            })
        });
    },
    A = 57,
    D = 57 + E,
    R = {
        tension: 180,
        friction: 80
    },
    L = (e) => {
        let { guild: t, withMargin: n } = e,
            l = (0, m.Q3)('GuildBoostingSidebarDisplay'),
            { analyticsLocations: u } = (0, g.ZP)(h.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
            { premiumSubscriberCount: b, id: O } = t,
            E = (0, _.rF)(b, O),
            A = (0, _.FZ)(E, t.id),
            D = null == A,
            L = null != A ? A : E,
            M = (0, c.e7)([C.Z], () => {
                var e;
                return null !== (e = C.Z.getCountForGuild(O)) && void 0 !== e ? e : 0;
            }),
            k = (0, c.e7)([v.Z], () => v.Z.can(S.Plq.MANAGE_GUILD, t));
        i.useEffect(() => {
            M !== b && (0, j.v)(O, b);
        }, [O, M, b]);
        let G = ''.concat(Math.min(100, (b / (0, _.vn)(t.id)[L]) * 100), '%'),
            { current: B } = i.useRef(G),
            U = {
                from: { width: M === b ? B : '0%' },
                to: { width: G },
                config: R
            },
            [W, V] = (0, d.q_F)(() => U),
            F = () => {
                (0, f.yw)(S.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: { section: S.jXE.PREMIUM_GUILD_PROGRESS_BAR },
                    guild_id: O,
                    location_stack: u
                }),
                    (0, x.Z)({
                        analyticsLocations: u,
                        analyticsSourceLocation: {
                            page: S.ZY5.GUILD_CHANNEL,
                            section: S.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                            object: S.qAy.TOOLTIP
                        },
                        guild: t,
                        perks: (0, P.VF)(),
                        perkIntro: I.NW.string(I.t.ZhvSn5)
                    });
            },
            H = I.NW.formatToPlainString(I.t['2oNfMT'], { levelName: (0, _.e9)(L) }),
            z = I.NW.format(I.t.dhKnYm, {
                numBoosts: b,
                numTotal: (0, _.vn)(t.id)[L]
            });
        D && ((H = (0, _.e9)(L)), (z = I.NW.format(I.t.B2byER, { numBoosts: b }))), l && (H = H.toLocaleLowerCase());
        let q = (0, s.JA)('boosts-'.concat(t.id));
        return (0, r.jsx)('li', {
            children: (0, r.jsx)(d.ua7, {
                text: D ? I.NW.string(I.t['Y+V9go']) : I.NW.formatToPlainString(I.t.UyDKl5, { levelName: (0, _.nW)(L) }),
                color: d.ua7.Colors.BLACK,
                position: 'top',
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    (0, r.jsxs)(
                        d.P3F,
                        w(Z({}, q, e), {
                            'aria-label': void 0,
                            role: 'button',
                            focusProps: {
                                offset: {
                                    left: 10,
                                    right: 4
                                }
                            },
                            onClick: F,
                            onMouseEnter: () => {
                                var t;
                                null === (t = e.onMouseEnter) || void 0 === t || t.call(e), V(U);
                            },
                            className: o()(N.container, { [N.containerWithMargin]: n }),
                            onContextMenu: (e) => {
                                k && (0, p.vq)(e, (e) => (0, r.jsx)(T, w(Z({}, e), { guild: t })));
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
                                                children: H
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
                                                    children: z
                                                }),
                                                (0, r.jsx)(y.Z, {
                                                    className: N.count,
                                                    height: 16,
                                                    width: 16,
                                                    direction: y.Z.Directions.RIGHT
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: o()(N.progressBarContainer, { [N.progressBarContainerComplete]: D }),
                                    children: [
                                        (0, r.jsx)(a.animated.div, {
                                            className: N.progressBar,
                                            style: W
                                        }),
                                        D
                                            ? (0, r.jsx)('span', {
                                                  'aria-label': I.NW.string(I.t['7iL1q6']),
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
