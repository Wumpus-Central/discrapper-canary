var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(481060),
    c = r(2052),
    d = r(367907),
    f = r(906732),
    _ = r(28546),
    h = r(26323),
    p = r(434404),
    m = r(357156),
    g = r(430824),
    E = r(267642),
    v = r(981631),
    I = r(30513),
    T = r(388032),
    b = r(395399);
let y = (e) => {
    let { className: n, guildId: r, channel: s, shouldTrackUpsellViewed: y, setTrackedUpsellViewed: S } = e,
        { location: A } = (0, c.O)(),
        { analyticsLocations: N } = (0, f.ZP)(),
        C = (0, l.e7)([g.Z], () => g.Z.getGuild(r)),
        { canManageAllExpressions: R } = (0, m.XJ)(C),
        O = null != C && 0 === (0, E.A3)(C.premiumTier) && !C.hasFeature(v.oNc.MORE_STICKERS);
    if (
        (a.useEffect(() => {
            R &&
                O &&
                y &&
                ((0, d.yw)(v.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                    location: A,
                    guild_id: null == C ? void 0 : C.id,
                    channel_id: null == s ? void 0 : s.id,
                    type: 'Expression Picker Inline Sticker Upsell',
                    location_stack: N
                }),
                S(!0));
        }, [O, C, s, A, y, S, N, R]),
        null == C || !R)
    )
        return null;
    if (O) {
        let e = () => {
            (0, h.Z)({
                analyticsLocations: N,
                analyticsSourceLocation: A,
                guild: C,
                perks: (0, I.hC)()
            });
        };
        return (0, i.jsxs)('div', {
            className: o()(b.upsell, n),
            children: [
                (0, i.jsx)(u.BoostTier2SimpleIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: b.icon
                }),
                (0, i.jsx)(u.Text, {
                    color: 'interactive-normal',
                    className: b.body,
                    variant: 'text-sm/normal',
                    children: T.intl.format(T.t.AXWla2, { count: (0, E.A3)(v.Eu4.TIER_1) })
                }),
                (0, i.jsx)(u.Button, {
                    look: u.Button.Looks.LINK,
                    color: u.Button.Colors.LINK,
                    onClick: e,
                    children: T.intl.string(T.t['Gb+BJC'])
                })
            ]
        });
    }
    {
        let e = () => {
            (0, _._Q)(), p.Z.open(r, v.pNK.STICKERS, A);
        };
        return (0, i.jsxs)('div', {
            className: o()(b.upsell, n),
            children: [
                (0, i.jsx)(u.StickerIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: b.icon,
                    width: 20,
                    height: 20
                }),
                (0, i.jsx)(u.Text, {
                    color: 'interactive-normal',
                    className: b.body,
                    variant: 'text-sm/normal',
                    children: T.intl.string(T.t.S83wgo)
                }),
                (0, i.jsx)(u.Button, {
                    look: u.Button.Looks.LINK,
                    color: u.Button.Colors.LINK,
                    onClick: e,
                    children: T.intl.string(T.t.bwNjur)
                })
            ]
        });
    }
};
n.Z = y;
