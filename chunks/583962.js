n.d(t, {
    PD: function () {
        return A;
    },
    aR: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(752877),
    s = n(91192),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    h = n(239091),
    p = n(100527),
    f = n(367907),
    m = n(906732),
    g = n(540059),
    v = n(434404),
    C = n(496675),
    x = n(259580),
    I = n(267642),
    _ = n(624138),
    Z = n(667815),
    b = n(531572),
    S = n(26323),
    N = n(30513),
    E = n(981631),
    y = n(388032),
    j = n(976019);
let T = (0, _.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    P = (e) => {
        let { guild: t, onSelect: n } = e,
            [r, a] = l.useState(t.premiumProgressBarEnabled),
            [o, s] = l.useState(!1),
            u = (0, c.e7)([C.Z], () => C.Z.can(E.Plq.MANAGE_GUILD, t)),
            p = async () => {
                if (!!u) s(!0), await v.Z.saveGuild(t.id, { premiumProgressBarEnabled: !r }), a(!r), s(!1);
            };
        return (0, i.jsx)(d.Menu, {
            navId: 'progress-bar-context',
            onClose: h.Zy,
            'aria-label': y.intl.string(y.t['m85s/v']),
            onSelect: n,
            children: (0, i.jsx)(d.MenuCheckboxItem, {
                id: 'progress-bar-enabled',
                label: y.intl.string(y.t['0CJWPz']),
                checked: r,
                disabled: o,
                action: p
            })
        });
    },
    A = 57,
    w = 57 + T,
    M = {
        tension: 180,
        friction: 80
    };
t.ZP = (e) => {
    let { guild: t, withMargin: n } = e,
        r = (0, g.Q3)('GuildBoostingSidebarDisplay'),
        { analyticsLocations: u } = (0, m.ZP)(p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
        { premiumSubscriberCount: v, id: _ } = t,
        T = (0, I.rF)(v, _),
        A = (0, I.FZ)(T, t.id),
        w = null == A,
        L = null != A ? A : T,
        R = (0, c.e7)([b.Z], () => {
            var e;
            return null !== (e = b.Z.getCountForGuild(_)) && void 0 !== e ? e : 0;
        }),
        D = (0, c.e7)([C.Z], () => C.Z.can(E.Plq.MANAGE_GUILD, t));
    l.useEffect(() => {
        R !== v && (0, Z.v)(_, v);
    }, [_, R, v]);
    let G = ''.concat(Math.min(100, (v / (0, I.vn)(t.id)[L]) * 100), '%'),
        { current: B } = l.useRef(G),
        k = {
            from: { width: R === v ? B : '0%' },
            to: { width: G },
            config: M
        },
        [U, O] = (0, d.useSpring)(() => k),
        V = () => {
            (0, f.yw)(E.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                location: { section: E.jXE.PREMIUM_GUILD_PROGRESS_BAR },
                guild_id: _,
                location_stack: u
            }),
                (0, S.Z)({
                    analyticsLocations: u,
                    analyticsSourceLocation: {
                        page: E.ZY5.GUILD_CHANNEL,
                        section: E.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                        object: E.qAy.TOOLTIP
                    },
                    guild: t,
                    perks: (0, N.VF)(),
                    perkIntro: y.intl.string(y.t.ZhvSn5)
                });
        },
        H = y.intl.formatToPlainString(y.t['2oNfMT'], { levelName: (0, I.e9)(L) }),
        F = y.intl.format(y.t.dhKnYm, {
            numBoosts: v,
            numTotal: (0, I.vn)(t.id)[L]
        });
    w && ((H = (0, I.e9)(L)), (F = y.intl.format(y.t.B2byER, { numBoosts: v }))), r && (H = H.toLocaleLowerCase());
    let W = (0, s.JA)('boosts-'.concat(t.id));
    return (0, i.jsx)('li', {
        children: (0, i.jsx)(d.Tooltip, {
            text: w ? y.intl.string(y.t['Y+V9go']) : y.intl.formatToPlainString(y.t.UyDKl5, { levelName: (0, I.nW)(L) }),
            color: d.Tooltip.Colors.BLACK,
            position: 'top',
            delay: 200,
            hideOnClick: !0,
            children: (e) =>
                (0, i.jsxs)(d.Clickable, {
                    ...W,
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
                        null === (t = e.onMouseEnter) || void 0 === t || t.call(e), O(k);
                    },
                    className: a()(j.container, { [j.containerWithMargin]: n }),
                    onContextMenu: (e) => {
                        D &&
                            (0, h.vq)(e, (e) =>
                                (0, i.jsx)(P, {
                                    ...e,
                                    guild: t
                                })
                            );
                    },
                    children: [
                        (0, i.jsx)(d.HiddenVisually, { children: e['aria-label'] }),
                        (0, i.jsxs)('div', {
                            className: j.textArea,
                            children: [
                                (0, i.jsx)('div', {
                                    className: j.goalTextContainer,
                                    children: (0, i.jsx)(d.Text, {
                                        className: j.goalText,
                                        color: r ? 'none' : 'interactive-active',
                                        variant: r ? 'text-sm/medium' : 'text-xs/bold',
                                        children: H
                                    })
                                }),
                                (0, i.jsxs)('div', {
                                    className: j.progressFraction,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            color: r ? 'none' : 'interactive-normal',
                                            variant: r ? 'text-sm/medium' : 'text-xs/normal',
                                            className: j.progressText,
                                            children: F
                                        }),
                                        (0, i.jsx)(x.Z, {
                                            className: j.count,
                                            height: 16,
                                            width: 16,
                                            direction: x.Z.Directions.RIGHT
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: a()(j.progressBarContainer, { [j.progressBarContainerComplete]: w }),
                            children: [
                                (0, i.jsx)(o.animated.div, {
                                    className: j.progressBar,
                                    style: U
                                }),
                                w
                                    ? (0, i.jsx)('span', {
                                          'aria-label': y.intl.string(y.t['7iL1q6']),
                                          role: 'img',
                                          className: j.tadaIcon,
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
