var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(481060),
    c = r(2052),
    d = r(367907),
    f = r(906732),
    p = r(28546),
    h = r(26323),
    _ = r(434404),
    m = r(357156),
    g = r(430824),
    E = r(267642),
    v = r(981631),
    y = r(30513),
    b = r(388032),
    I = r(395399);
let T = (e) => {
    let { className: n, guildId: r, channel: o, shouldTrackUpsellViewed: T, setTrackedUpsellViewed: S } = e,
        { location: A } = (0, c.O)(),
        { analyticsLocations: C } = (0, f.ZP)(),
        N = (0, l.e7)([g.Z], () => g.Z.getGuild(r)),
        { canManageAllExpressions: R } = (0, m.XJ)(N),
        O = null != N && 0 === (0, E.A3)(N.premiumTier) && !N.hasFeature(v.oNc.MORE_STICKERS);
    if (
        (a.useEffect(() => {
            R &&
                O &&
                T &&
                ((0, d.yw)(v.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                    location: A,
                    guild_id: null == N ? void 0 : N.id,
                    channel_id: null == o ? void 0 : o.id,
                    type: 'Expression Picker Inline Sticker Upsell',
                    location_stack: C
                }),
                S(!0));
        }, [O, N, o, A, T, S, C, R]),
        null == N || !R)
    )
        return null;
    if (O) {
        let e = () => {
            (0, h.Z)({
                analyticsLocations: C,
                analyticsSourceLocation: A,
                guild: N,
                perks: (0, y.hC)()
            });
        };
        return (0, i.jsxs)('div', {
            className: s()(I.upsell, n),
            children: [
                (0, i.jsx)(u.BoostTier2SimpleIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: I.icon
                }),
                (0, i.jsx)(u.Text, {
                    color: 'interactive-normal',
                    className: I.body,
                    variant: 'text-sm/normal',
                    children: b.intl.format(b.t.AXWla2, { count: (0, E.A3)(v.Eu4.TIER_1) })
                }),
                (0, i.jsx)(u.Button, {
                    look: u.Button.Looks.LINK,
                    color: u.Button.Colors.LINK,
                    onClick: e,
                    children: b.intl.string(b.t['Gb+BJC'])
                })
            ]
        });
    }
    {
        let e = () => {
            (0, p._Q)(), _.Z.open(r, v.pNK.STICKERS, A);
        };
        return (0, i.jsxs)('div', {
            className: s()(I.upsell, n),
            children: [
                (0, i.jsx)(u.StickerIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: I.icon,
                    width: 20,
                    height: 20
                }),
                (0, i.jsx)(u.Text, {
                    color: 'interactive-normal',
                    className: I.body,
                    variant: 'text-sm/normal',
                    children: b.intl.string(b.t.S83wgo)
                }),
                (0, i.jsx)(u.Button, {
                    look: u.Button.Looks.LINK,
                    color: u.Button.Colors.LINK,
                    onClick: e,
                    children: b.intl.string(b.t.bwNjur)
                })
            ]
        });
    }
};
n.Z = T;
