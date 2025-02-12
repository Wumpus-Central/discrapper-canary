n.d(t, { Z: () => T });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(2052),
    c = n(367907),
    d = n(906732),
    f = n(28546),
    _ = n(26323),
    p = n(434404),
    h = n(357156),
    m = n(430824),
    g = n(267642),
    E = n(981631),
    v = n(30513),
    y = n(388032),
    I = n(408246);
let T = (e) => {
    let { className: t, guildId: n, channel: a, shouldTrackUpsellViewed: T, setTrackedUpsellViewed: b } = e,
        { location: S } = (0, u.O)(),
        { analyticsLocations: A } = (0, d.ZP)(),
        N = (0, o.e7)([m.Z], () => m.Z.getGuild(n)),
        { canManageAllExpressions: C } = (0, h.XJ)(N),
        R = null != N && 0 === (0, g.A3)(N.premiumTier) && !N.hasFeature(E.oNc.MORE_STICKERS);
    if (
        (r.useEffect(() => {
            C &&
                R &&
                T &&
                ((0, c.yw)(E.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                    location: S,
                    guild_id: null == N ? void 0 : N.id,
                    channel_id: null == a ? void 0 : a.id,
                    type: 'Expression Picker Inline Sticker Upsell',
                    location_stack: A
                }),
                b(!0));
        }, [R, N, a, S, T, b, A, C]),
        null == N || !C)
    )
        return null;
    if (R) {
        let e = () => {
            (0, _.Z)({
                analyticsLocations: A,
                analyticsSourceLocation: S,
                guild: N,
                perks: (0, v.hC)()
            });
        };
        return (0, i.jsxs)('div', {
            className: s()(I.upsell, t),
            children: [
                (0, i.jsx)(l.$zw, {
                    size: 'md',
                    color: 'currentColor',
                    className: I.icon
                }),
                (0, i.jsx)(l.Text, {
                    color: 'interactive-normal',
                    className: I.body,
                    variant: 'text-sm/normal',
                    children: y.intl.format(y.t.AXWla2, { count: (0, g.A3)(E.Eu4.TIER_1) })
                }),
                (0, i.jsx)(l.zxk, {
                    look: l.zxk.Looks.LINK,
                    color: l.zxk.Colors.LINK,
                    onClick: e,
                    children: y.intl.string(y.t['Gb+BJC'])
                })
            ]
        });
    }
    {
        let e = () => {
            (0, f._Q)(), p.Z.open(n, E.pNK.STICKERS, S);
        };
        return (0, i.jsxs)('div', {
            className: s()(I.upsell, t),
            children: [
                (0, i.jsx)(l.SlE, {
                    size: 'custom',
                    color: 'currentColor',
                    className: I.icon,
                    width: 20,
                    height: 20
                }),
                (0, i.jsx)(l.Text, {
                    color: 'interactive-normal',
                    className: I.body,
                    variant: 'text-sm/normal',
                    children: y.intl.string(y.t.S83wgo)
                }),
                (0, i.jsx)(l.zxk, {
                    look: l.zxk.Looks.LINK,
                    color: l.zxk.Colors.LINK,
                    onClick: e,
                    children: y.intl.string(y.t.bwNjur)
                })
            ]
        });
    }
};
