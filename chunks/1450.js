n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
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
    v = n(427774);
let O = (e) => {
    let { className: t, guildId: n, channel: a, shouldTrackUpsellViewed: O, setTrackedUpsellViewed: I } = e,
        { location: S } = (0, c.O)(),
        { analyticsLocations: T } = (0, d.ZP)(),
        A = (0, s.e7)([m.Z], () => m.Z.getGuild(n)),
        { canManageAllExpressions: N } = (0, h.XJ)(A),
        C = null != A && 0 === (0, g.A3)(A.premiumTier) && !A.hasFeature(E.oNc.MORE_STICKERS);
    if (
        (i.useEffect(() => {
            N &&
                C &&
                O &&
                ((0, u.yw)(E.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                    location: S,
                    guild_id: null == A ? void 0 : A.id,
                    channel_id: null == a ? void 0 : a.id,
                    type: 'Expression Picker Inline Sticker Upsell',
                    location_stack: T
                }),
                I(!0));
        }, [C, A, a, S, O, I, T, N]),
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
            className: o()(v.upsell, t),
            children: [
                (0, r.jsx)(l.$zw, {
                    size: 'md',
                    color: 'currentColor',
                    className: v.icon
                }),
                (0, r.jsx)(l.Text, {
                    color: 'interactive-normal',
                    className: v.body,
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
            className: o()(v.upsell, t),
            children: [
                (0, r.jsx)(l.SlE, {
                    size: 'custom',
                    color: 'currentColor',
                    className: v.icon,
                    width: 20,
                    height: 20
                }),
                (0, r.jsx)(l.Text, {
                    color: 'interactive-normal',
                    className: v.body,
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
