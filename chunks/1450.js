n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(2052),
    u = n(367907),
    d = n(906732),
    f = n(28546),
    _ = n(26323),
    p = n(434404),
    h = n(357156),
    m = n(430824),
    g = n(267642),
    E = n(981631),
    b = n(30513),
    y = n(388032),
    O = n(427774);
let v = (e) => {
    let { className: t, guildId: n, channel: o, shouldTrackUpsellViewed: v, setTrackedUpsellViewed: I } = e,
        { location: S } = (0, c.O)(),
        { analyticsLocations: T } = (0, d.ZP)(),
        A = (0, s.e7)([m.Z], () => m.Z.getGuild(n)),
        { canManageAllExpressions: N } = (0, h.XJ)(A),
        C = null != A && 0 === (0, g.A3)(A.premiumTier) && !A.hasFeature(E.oNc.MORE_STICKERS);
    if (
        (i.useEffect(() => {
            N &&
                C &&
                v &&
                ((0, u.yw)(E.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                    location: S,
                    guild_id: null == A ? void 0 : A.id,
                    channel_id: null == o ? void 0 : o.id,
                    type: 'Expression Picker Inline Sticker Upsell',
                    location_stack: T
                }),
                I(!0));
        }, [C, A, o, S, v, I, T, N]),
        null == A || !N)
    )
        return null;
    if (C) {
        let e = () => {
            (0, _.Z)({
                analyticsLocations: T,
                analyticsSourceLocation: S,
                guild: A,
                perks: (0, b.hC)()
            });
        };
        return (0, r.jsxs)('div', {
            className: a()(O.upsell, t),
            children: [
                (0, r.jsx)(l.$zw, {
                    size: 'md',
                    color: 'currentColor',
                    className: O.icon
                }),
                (0, r.jsx)(l.Text, {
                    color: 'interactive-normal',
                    className: O.body,
                    variant: 'text-sm/normal',
                    children: y.intl.format(y.t.AXWla2, { count: (0, g.A3)(E.Eu4.TIER_1) })
                }),
                (0, r.jsx)(l.zxk, {
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
        return (0, r.jsxs)('div', {
            className: a()(O.upsell, t),
            children: [
                (0, r.jsx)(l.SlE, {
                    size: 'custom',
                    color: 'currentColor',
                    className: O.icon,
                    width: 20,
                    height: 20
                }),
                (0, r.jsx)(l.Text, {
                    color: 'interactive-normal',
                    className: O.body,
                    variant: 'text-sm/normal',
                    children: y.intl.string(y.t.S83wgo)
                }),
                (0, r.jsx)(l.zxk, {
                    look: l.zxk.Looks.LINK,
                    color: l.zxk.Colors.LINK,
                    onClick: e,
                    children: y.intl.string(y.t.bwNjur)
                })
            ]
        });
    }
};
