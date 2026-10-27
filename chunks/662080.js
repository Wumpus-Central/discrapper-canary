n.d(t, { A: () => H });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(562708),
    o = n(837381),
    d = n(935399),
    c = n(17928),
    u = n(113325),
    _ = n(834730),
    E = n(7807),
    A = n(661531),
    h = n(123292),
    f = n(260762),
    I = n(793574),
    p = n(688810),
    T = n(139286),
    m = n(915089),
    g = n(465794),
    S = n(594061),
    N = n(665252),
    C = n(763827),
    O = n(287809),
    R = n(977997),
    L = n(174459),
    y = n(24482),
    D = n(796774),
    v = n(209932),
    b = n(453997),
    P = n(368309),
    M = n(782618),
    U = n(980504),
    w = n(652215),
    G = n(202541),
    x = n(105292),
    k = n(454992);
function F(e) {
    let { analyticsLocations: t, voiceGuildId: n } = e,
        { analyticsLocations: a } = (0, p.Ay)(I.A.PREMIUM_UPSELL),
        s = r.useCallback(() => {
            (0, P.p)(t);
        }, [t]),
        l = r.useMemo(() => {
            let e = (0, y.Dd)(G.PremiumTypes.TIER_2);
            return x.intl.format(x.t["tw/SSq"], { nitroTierName: e, onClick: s });
        }, [s]);
    return (
        (0, d.Ay)(() => {
            L.default.track(w.HAw.PREMIUM_UPSELL_VIEWED, {
                type: G.e.SOUNDBOARD_QUICK_ACCESS_PICKER_UPSELL,
                location_stack: a,
                sku_id: y.Ay.getSkuIdForPremiumType(G.PremiumTypes.TIER_2),
                voice_guild_id: n,
            });
        }),
        (0, i.jsxs)("div", {
            className: k.Sp,
            children: [
                (0, i.jsx)(_.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                (0, i.jsx)(g.A, {
                    size: "sm",
                    subscriptionTier: G.pe.TIER_2,
                    buttonTextOverride: x.intl.string(x.t.pj0XBN),
                    premiumModalAnalyticsLocation: {
                        section: w.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                        object: w.ZSU.BUTTON_CTA,
                    },
                }),
            ],
        })
    );
}
function B() {
    return (0, i.jsx)("ul", {
        className: k.G2,
        children: Array.from({ length: b.BE }).map((e, t) => (0, i.jsx)("li", { className: k.bP }, t)),
    });
}
function V(e) {
    let { channel: t, guildId: n, analyticsLocations: r, sounds: a } = e,
        s = (0, m.GV)(),
        l = (0, f.A)(s),
        d = (0, c.bG)([O.default], () => O.default.getCurrentUser()),
        u = (0, c.bG)([R.A], () => R.A.getVoiceState(n, d?.id ?? w.dJq)),
        _ = u?.selfDeaf || u?.mute || u?.suppress;
    return (0, i.jsx)(o.hD, {
        navigator: l,
        children: (0, i.jsx)(o.PR, {
            children: (e) => {
                let { ref: n, ...s } = e;
                return (0, i.jsx)("ul", {
                    ...s,
                    ref: n,
                    className: k.G2,
                    children: a.map((e) =>
                        (0, i.jsx)(
                            M.A,
                            {
                                channel: t,
                                interactive: !_,
                                analyticsLocations: [...r, e.analyticsLocationSection],
                                sound: e,
                                openUpsellForSound: () => (0, P.p)(r),
                            },
                            e.soundId,
                        ),
                    ),
                });
            },
        }),
    });
}
function H(e) {
    let { channel: t, guildId: n, analyticsSource: a, openFullPicker: o, showEchoes: d = !1 } = e,
        { analyticsLocations: f } = (0, p.Ay)(I.A.SOUNDBOARD_QUICK_ACCESS_POPOUT),
        { sounds: m, hasLockedSound: g, isFetching: O } = (0, b.Ay)({ channel: t, currentGuildId: n }),
        R = (0, c.bG)([C.A], () => C.A.getMediaSessionId()),
        L = (0, c.bG)([v.A], () => v.A.getFavorites().size);
    return (
        (0, T.A)({
            type: l.ImpressionTypes.POPOUT,
            name: l.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: a,
                guild_id: n,
                media_session_id: R,
                favorite_sounds_count: L,
                type: U.c4.QUICK_ACCESS,
            },
        }),
        r.useEffect(() => {
            (D.E7(), S.bW.loadIfNecessary());
        }, []),
        (0, i.jsx)(p.f5, {
            value: f,
            children: (0, i.jsxs)(u.lG, {
                children: [
                    (0, i.jsxs)("div", {
                        className: s()(k.kL, g && k.Dx),
                        children: [
                            d && null != n ? (0, i.jsx)(N.A, { guildId: n, channelId: t.id }) : null,
                            (0, i.jsxs)("div", {
                                className: k.N1,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: k.TK,
                                        children: [
                                            (0, i.jsx)(E.J, { size: "xs", color: A.A.colors.ICON_DEFAULT }),
                                            (0, i.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                children: x.intl.string(x.t["1a/hIV"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(h.Q, {
                                        text: x.intl.string(x.t.hmBVph),
                                        onClick: o,
                                        size: "sm",
                                        variant: "primary",
                                        textVariant: "text-sm/medium",
                                    }),
                                ],
                            }),
                            O
                                ? (0, i.jsx)(B, {})
                                : (0, i.jsx)(V, { sounds: m, channel: t, guildId: n, analyticsLocations: f }),
                        ],
                    }),
                    g && (0, i.jsx)(F, { analyticsLocations: f, voiceGuildId: n }),
                ],
            }),
        })
    );
}
