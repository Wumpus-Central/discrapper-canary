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
    p = n(26323),
    _ = n(434404),
    m = n(357156),
    h = n(430824),
    g = n(267642),
    E = n(981631),
    b = n(30513),
    y = n(388032),
    O = n(349085);
let v = (e) => {
    let { className: t, guildId: n, channel: a, shouldTrackUpsellViewed: v, setTrackedUpsellViewed: S } = e,
        { location: I } = (0, c.O)(),
        { analyticsLocations: T } = (0, d.ZP)(),
        C = (0, s.e7)([h.Z], () => h.Z.getGuild(n)),
        { canManageAllExpressions: A } = (0, m.XJ)(C),
        N = null != C && 0 === (0, g.A3)(C.premiumTier) && !C.features.has(E.GuildFeatures.MORE_STICKERS);
    if (
        (i.useEffect(() => {
            A &&
                N &&
                v &&
                ((0, u.yw)(E.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                    location: I,
                    guild_id: null == C ? void 0 : C.id,
                    channel_id: null == a ? void 0 : a.id,
                    type: "Expression Picker Inline Sticker Upsell",
                    location_stack: T,
                }),
                S(!0));
        }, [N, C, a, I, v, S, T, A]),
        null == C || !A)
    )
        return null;
    if (N) {
        let e = () => {
            (0, p.Z)({
                analyticsLocations: T,
                analyticsSourceLocation: I,
                guild: C,
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
                    color: "interactive-text-default",
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
            (0, f._Q)(), _.Z.open(n, E.pNK.STICKERS, I);
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
                    color: "interactive-text-default",
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
