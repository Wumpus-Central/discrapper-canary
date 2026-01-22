n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(212245),
    u = n(58149),
    d = n(688810),
    f = n(151271),
    p = n(631305),
    _ = n(997509),
    h = n(931991),
    m = n(71393),
    g = n(473145),
    E = n(652215),
    b = n(874864),
    y = n(985018),
    O = n(476217);
let A = (e) => {
    let { className: t, guildId: n, channel: a, shouldTrackUpsellViewed: A, setTrackedUpsellViewed: v } = e,
        { location: S } = (0, c.p)(),
        { analyticsLocations: I } = (0, d.Ay)(),
        T = (0, o.bG)([m.A], () => m.A.getGuild(n)),
        { canManageAllExpressions: C } = (0, h.nr)(T),
        N = null != T && 0 === (0, g.aG)(T.premiumTier) && !T.features.has(E.GuildFeatures.MORE_STICKERS);
    if (
        (i.useEffect(() => {
            C &&
                N &&
                A &&
                ((0, u.zV)(E.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                    location: S,
                    guild_id: null == T ? void 0 : T.id,
                    channel_id: null == a ? void 0 : a.id,
                    type: "Expression Picker Inline Sticker Upsell",
                    location_stack: I,
                }),
                v(!0));
        }, [N, T, a, S, A, v, I, C]),
        null == T || !C)
    )
        return null;
    if (N) {
        let e = () => {
            (0, p.A)({
                analyticsLocations: I,
                analyticsSourceLocation: S,
                guild: T,
                perks: (0, b.q5)(),
            });
        };
        return (0, r.jsxs)("div", {
            className: s()(O.UX, t),
            children: [
                (0, r.jsx)(l.vRF, {
                    size: "md",
                    color: "currentColor",
                    className: O.Kk,
                }),
                (0, r.jsx)(l.Text, {
                    color: "interactive-text-default",
                    className: O.rf,
                    variant: "text-sm/normal",
                    children: y.intl.format(y.t.AXWla1, { count: (0, g.aG)(E.TVA.TIER_1) }),
                }),
                (0, r.jsx)(l.QWc, {
                    variant: "primary",
                    text: y.intl.string(y.t["Gb+BJD"]),
                    onClick: e,
                }),
            ],
        });
    }
    {
        let e = () => {
            (0, f.v8)(), _.A.open(n, E.BEX.STICKERS, S);
        };
        return (0, r.jsxs)("div", {
            className: s()(O.UX, t),
            children: [
                (0, r.jsx)(l.tEP, {
                    size: "custom",
                    color: "currentColor",
                    className: O.Kk,
                    width: 20,
                    height: 20,
                }),
                (0, r.jsx)(l.Text, {
                    color: "interactive-text-default",
                    className: O.rf,
                    variant: "text-sm/normal",
                    children: y.intl.string(y.t.S83wgh),
                }),
                (0, r.jsx)(l.QWc, {
                    variant: "primary",
                    text: y.intl.string(y.t.bwNjug),
                    onClick: e,
                }),
            ],
        });
    }
};
