n.d(t, { A: () => w });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(562708),
    o = n(837381),
    d = n(113325),
    c = n(17928),
    u = n(834730),
    _ = n(7807),
    E = n(661531),
    A = n(123292),
    h = n(260762),
    I = n(793574),
    f = n(688810),
    p = n(139286),
    T = n(915089),
    m = n(465794),
    g = n(763827),
    S = n(287809),
    N = n(977997),
    C = n(158045),
    O = n(209932),
    R = n(453997),
    L = n(368309),
    y = n(782618),
    D = n(980504),
    v = n(652215),
    b = n(202541),
    M = n(375708),
    P = n(454992);
function U(e) {
    let { analyticsLocations: t } = e,
        n = r.useCallback(() => {
            (0, L.p)(t);
        }, [t]),
        a = r.useMemo(() => {
            let e = (0, C.Dd)(b.PremiumTypes.TIER_2);
            return M.intl.format(M.t["tw/SSq"], { nitroTierName: e, onClick: n });
        }, [n]);
    return (0, i.jsxs)("div", {
        className: P.Sp,
        children: [
            (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: a }),
            (0, i.jsx)(m.A, {
                size: "sm",
                subscriptionTier: b.pe.TIER_2,
                buttonTextOverride: M.intl.string(M.t.pj0XBN),
                premiumModalAnalyticsLocation: {
                    section: v.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                    object: v.ZSU.BUTTON_CTA,
                },
            }),
        ],
    });
}
function w(e) {
    let { channel: t, guildId: n, analyticsSource: r, openFullPicker: a } = e,
        { analyticsLocations: m } = (0, f.Ay)(I.A.SOUNDBOARD_QUICK_ACCESS_POPOUT),
        { sounds: C, hasLockedSound: b } = (0, R.A)({ channel: t, currentGuildId: n }),
        w = (0, c.bG)([g.A], () => g.A.getMediaSessionId()),
        G = (0, c.bG)([O.A], () => O.A.getFavorites().size);
    (0, p.A)({
        type: l.ImpressionTypes.POPOUT,
        name: l.ImpressionNames.SOUNDBOARD_POPOUT,
        properties: { source: r, guild_id: n, media_session_id: w, favorite_sounds_count: G, type: D.c4.QUICK_ACCESS },
    });
    let x = (0, c.bG)([S.default], () => S.default.getCurrentUser()),
        k = (0, c.bG)([N.A], () => N.A.getVoiceState(n, x?.id ?? v.dJq)),
        F = k?.selfDeaf || k?.mute || k?.suppress,
        V = (0, T.GV)(),
        B = (0, h.A)(V);
    return (0, i.jsx)(f.f5, {
        value: m,
        children: (0, i.jsxs)(d.lG, {
            children: [
                (0, i.jsxs)("div", {
                    className: s()(P.kL, b && P.Dx),
                    children: [
                        (0, i.jsxs)("div", {
                            className: P.N1,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: P.TK,
                                    children: [
                                        (0, i.jsx)(_.J, { size: "xs", color: E.A.colors.ICON_DEFAULT }),
                                        (0, i.jsx)(u.E, {
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            children: M.intl.string(M.t["1a/hIV"]),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(A.Q, {
                                    text: M.intl.string(M.t.hmBVph),
                                    onClick: a,
                                    size: "sm",
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                }),
                            ],
                        }),
                        (0, i.jsx)(o.hD, {
                            navigator: B,
                            children: (0, i.jsx)(o.PR, {
                                children: (e) => {
                                    let { ref: n, ...r } = e;
                                    return (0, i.jsx)("ul", {
                                        ...r,
                                        ref: n,
                                        className: P.G2,
                                        children: C.map((e) =>
                                            (0, i.jsx)(
                                                y.A,
                                                {
                                                    channel: t,
                                                    interactive: !F,
                                                    analyticsLocations: [...m, e.analyticsLocationSection],
                                                    sound: e,
                                                    openUpsellForSound: () => (0, L.p)(m),
                                                },
                                                e.soundId,
                                            ),
                                        ),
                                    });
                                },
                            }),
                        }),
                    ],
                }),
                b && (0, i.jsx)(U, { analyticsLocations: m }),
            ],
        }),
    });
}
