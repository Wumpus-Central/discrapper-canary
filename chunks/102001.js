"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(212245),
    c = n(58149),
    d = n(688810),
    _ = n(151271),
    f = n(631305),
    p = n(997509),
    h = n(931991),
    m = n(71393),
    g = n(473145),
    E = n(652215),
    A = n(874864),
    I = n(985018),
    T = n(476217);
let y = (e) => {
    let { className: t, guildId: n, channel: a, shouldTrackUpsellViewed: y, setTrackedUpsellViewed: S } = e,
        { location: v } = (0, u.p)(),
        { analyticsLocations: C } = (0, d.Ay)(),
        b = (0, o.bG)([m.A], () => m.A.getGuild(n)),
        { canManageAllExpressions: N } = (0, h.nr)(b),
        R = null != b && 0 === (0, g.aG)(b.premiumTier) && !b.features.has(E.GuildFeatures.MORE_STICKERS);
    if (
        (i.useEffect(() => {
            N &&
                R &&
                y &&
                ((0, c.zV)(E.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                    location: v,
                    guild_id: b?.id,
                    channel_id: a?.id,
                    type: "Expression Picker Inline Sticker Upsell",
                    location_stack: C,
                }),
                S(!0));
        }, [R, b, a, v, y, S, C, N]),
        null == b || !N)
    )
        return null;
    if (R) {
        let e = () => {
            (0, f.A)({ analyticsLocations: C, analyticsSourceLocation: v, guild: b, perks: (0, A.q5)() });
        };
        return (0, r.jsxs)("div", {
            className: s()(T.UX, t),
            children: [
                (0, r.jsx)(l.vRF, { size: "md", color: "currentColor", className: T.Kk }),
                (0, r.jsx)(l.Text, {
                    color: "interactive-text-default",
                    className: T.rf,
                    variant: "text-sm/normal",
                    children: I.intl.format(I.t.AXWla1, { count: (0, g.aG)(E.TVA.TIER_1) }),
                }),
                (0, r.jsx)(l.QWc, { variant: "primary", text: I.intl.string(I.t["Gb+BJD"]), onClick: e }),
            ],
        });
    }
    {
        let e = () => {
            (0, _.v8)(), p.A.open(n, E.BEX.STICKERS, v);
        };
        return (0, r.jsxs)("div", {
            className: s()(T.UX, t),
            children: [
                (0, r.jsx)(l.tEP, { size: "custom", color: "currentColor", className: T.Kk, width: 20, height: 20 }),
                (0, r.jsx)(l.Text, {
                    color: "interactive-text-default",
                    className: T.rf,
                    variant: "text-sm/normal",
                    children: I.intl.string(I.t.S83wgh),
                }),
                (0, r.jsx)(l.QWc, { variant: "primary", text: I.intl.string(I.t.bwNjug), onClick: e }),
            ],
        });
    }
};
