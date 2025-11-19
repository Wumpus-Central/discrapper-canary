n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
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
    O = n(349085);
let v = (e) => {
    let { className: t, guildId: n, channel: a, shouldTrackUpsellViewed: v, setTrackedUpsellViewed: I } = e,
        { location: T } = (0, c.O)(),
        { analyticsLocations: S } = (0, d.ZP)(),
        A = (0, s.e7)([m.Z], () => m.Z.getGuild(n)),
        { canManageAllExpressions: C } = (0, h.XJ)(A),
        N = null != A && 0 === (0, g.A3)(A.premiumTier) && !A.features.has(E.GuildFeatures.MORE_STICKERS);
    if (
        (i.useEffect(() => {
            C &&
                N &&
                v &&
                ((0, u.yw)(E.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                    location: T,
                    guild_id: null == A ? void 0 : A.id,
                    channel_id: null == a ? void 0 : a.id,
                    type: "Expression Picker Inline Sticker Upsell",
                    location_stack: S,
                }),
                I(!0));
        }, [N, A, a, T, v, I, S, C]),
        null == A || !C)
    )
        return null;
    if (N) {
        let e = () => {
            (0, _.Z)({
                analyticsLocations: S,
                analyticsSourceLocation: T,
                guild: A,
                perks: (0, b.hC)(),
            });
        };
        return (0, r.jsxs)("div", {
            className: o()(O.upsell, t),
            children: [
                (0, r.jsx)(l.$zw, {
                    size: "md",
                    color: "currentColor",
                    className: O.icon,
                }),
                (0, r.jsx)(l.Text, {
                    color: "interactive-normal",
                    className: O.body,
                    variant: "text-sm/normal",
                    children: y.intl.format(y.t.AXWla1, { count: (0, g.A3)(E.Eu4.TIER_1) }),
                }),
                (0, r.jsx)(l.Avr, {
                    variant: "primary",
                    text: y.intl.string(y.t["Gb+BJD"]),
                    onClick: e,
                }),
            ],
        });
    }
    {
        let e = () => {
            (0, f._Q)(), p.Z.open(n, E.pNK.STICKERS, T);
        };
        return (0, r.jsxs)("div", {
            className: o()(O.upsell, t),
            children: [
                (0, r.jsx)(l.SlE, {
                    size: "custom",
                    color: "currentColor",
                    className: O.icon,
                    width: 20,
                    height: 20,
                }),
                (0, r.jsx)(l.Text, {
                    color: "interactive-normal",
                    className: O.body,
                    variant: "text-sm/normal",
                    children: y.intl.string(y.t.S83wgh),
                }),
                (0, r.jsx)(l.Avr, {
                    variant: "primary",
                    text: y.intl.string(y.t.bwNjug),
                    onClick: e,
                }),
            ],
        });
    }
};
