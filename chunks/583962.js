n.d(t, {
    PD: () => P,
    ZP: () => L,
    aR: () => R
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(642128),
    s = n(91192),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    h = n(239091),
    p = n(100527),
    m = n(367907),
    g = n(906732),
    f = n(540059),
    _ = n(434404),
    v = n(496675),
    C = n(259580),
    x = n(267642),
    I = n(624138),
    Z = n(667815),
    b = n(531572),
    S = n(26323),
    N = n(30513),
    E = n(981631),
    j = n(388032),
    y = n(422047);
let T = (0, I.Mg)(d.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    A = (e) => {
        let { guild: t, onSelect: n } = e,
            [r, a] = l.useState(t.premiumProgressBarEnabled),
            [o, s] = l.useState(!1),
            d = (0, c.e7)([v.Z], () => v.Z.can(E.Plq.MANAGE_GUILD, t)),
            p = async () => {
                d && (s(!0), await _.Z.saveGuild(t.id, { premiumProgressBarEnabled: !r }), a(!r), s(!1));
            };
        return (0, i.jsx)(u.v2r, {
            navId: 'progress-bar-context',
            onClose: h.Zy,
            'aria-label': j.intl.string(j.t['m85s/v']),
            onSelect: n,
            children: (0, i.jsx)(u.S89, {
                id: 'progress-bar-enabled',
                label: j.intl.string(j.t['0CJWPz']),
                checked: r,
                disabled: o,
                action: p
            })
        });
    },
    P = 57,
    R = 57 + T,
    w = {
        tension: 180,
        friction: 80
    },
    L = (e) => {
        let { guild: t, withMargin: n } = e,
            r = (0, f.Q3)('GuildBoostingSidebarDisplay'),
            { analyticsLocations: d } = (0, g.ZP)(p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
            { premiumSubscriberCount: _, id: I } = t,
            T = (0, x.rF)(_, I),
            P = (0, x.FZ)(T, t.id),
            R = null == P,
            L = null != P ? P : T,
            M = (0, c.e7)([b.Z], () => {
                var e;
                return null !== (e = b.Z.getCountForGuild(I)) && void 0 !== e ? e : 0;
            }),
            D = (0, c.e7)([v.Z], () => v.Z.can(E.Plq.MANAGE_GUILD, t));
        l.useEffect(() => {
            M !== _ && (0, Z.v)(I, _);
        }, [I, M, _]);
        let G = ''.concat(Math.min(100, (_ / (0, x.vn)(t.id)[L]) * 100), '%'),
            { current: k } = l.useRef(G),
            B = {
                from: { width: M === _ ? k : '0%' },
                to: { width: G },
                config: w
            },
            [O, U] = (0, u.q_F)(() => B),
            V = () => {
                (0, m.yw)(E.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: { section: E.jXE.PREMIUM_GUILD_PROGRESS_BAR },
                    guild_id: I,
                    location_stack: d
                }),
                    (0, S.Z)({
                        analyticsLocations: d,
                        analyticsSourceLocation: {
                            page: E.ZY5.GUILD_CHANNEL,
                            section: E.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                            object: E.qAy.TOOLTIP
                        },
                        guild: t,
                        perks: (0, N.VF)(),
                        perkIntro: j.intl.string(j.t.ZhvSn5)
                    });
            },
            F = j.intl.formatToPlainString(j.t['2oNfMT'], { levelName: (0, x.e9)(L) }),
            H = j.intl.format(j.t.dhKnYm, {
                numBoosts: _,
                numTotal: (0, x.vn)(t.id)[L]
            });
        R && ((F = (0, x.e9)(L)), (H = j.intl.format(j.t.B2byER, { numBoosts: _ }))), r && (F = F.toLocaleLowerCase());
        let z = (0, s.JA)('boosts-'.concat(t.id));
        return (0, i.jsx)('li', {
            children: (0, i.jsx)(u.ua7, {
                text: R ? j.intl.string(j.t['Y+V9go']) : j.intl.formatToPlainString(j.t.UyDKl5, { levelName: (0, x.nW)(L) }),
                color: u.ua7.Colors.BLACK,
                position: 'top',
                delay: 200,
                hideOnClick: !0,
                children: (e) =>
                    (0, i.jsxs)(u.P3F, {
                        ...z,
                        ...e,
                        'aria-label': void 0,
                        role: 'button',
                        focusProps: {
                            offset: {
                                left: 10,
                                right: 4
                            }
                        },
                        onClick: V,
                        onMouseEnter: () => {
                            var t;
                            null === (t = e.onMouseEnter) || void 0 === t || t.call(e), U(B);
                        },
                        className: a()(y.container, { [y.containerWithMargin]: n }),
                        onContextMenu: (e) => {
                            D &&
                                (0, h.vq)(e, (e) =>
                                    (0, i.jsx)(A, {
                                        ...e,
                                        guild: t
                                    })
                                );
                        },
                        children: [
                            (0, i.jsx)(u.nn4, { children: e['aria-label'] }),
                            (0, i.jsxs)('div', {
                                className: y.textArea,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: y.goalTextContainer,
                                        children: (0, i.jsx)(u.Text, {
                                            className: y.goalText,
                                            color: r ? 'none' : 'interactive-active',
                                            variant: r ? 'text-sm/medium' : 'text-xs/bold',
                                            lineClamp: 1,
                                            children: F
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: y.progressFraction,
                                        children: [
                                            (0, i.jsx)(u.Text, {
                                                color: r ? 'none' : 'interactive-normal',
                                                variant: r ? 'text-sm/medium' : 'text-xs/normal',
                                                className: y.progressText,
                                                lineClamp: 1,
                                                children: H
                                            }),
                                            (0, i.jsx)(C.Z, {
                                                className: y.count,
                                                height: 16,
                                                width: 16,
                                                direction: C.Z.Directions.RIGHT
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: a()(y.progressBarContainer, { [y.progressBarContainerComplete]: R }),
                                children: [
                                    (0, i.jsx)(o.animated.div, {
                                        className: y.progressBar,
                                        style: O
                                    }),
                                    R
                                        ? (0, i.jsx)('span', {
                                              'aria-label': j.intl.string(j.t['7iL1q6']),
                                              role: 'img',
                                              className: y.tadaIcon,
                                              children: '\uD83C\uDF89'
                                          })
                                        : null
                                ]
                            })
                        ]
                    })
            })
        });
    };
