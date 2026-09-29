n.d(t, { A: () => V });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(562708),
    o = n(837381),
    d = n(17928),
    c = n(113325),
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
    g = n(594061),
    S = n(767931),
    N = n(763827),
    C = n(287809),
    O = n(977997),
    R = n(158045),
    L = n(796774),
    y = n(209932),
    D = n(453997),
    v = n(714736),
    b = n(368309),
    M = n(782618),
    P = n(980504),
    U = n(652215),
    w = n(202541),
    G = n(375708),
    x = n(454992);
function k(e) {
    let { analyticsLocations: t } = e,
        n = r.useCallback(() => {
            (0, b.p)(t);
        }, [t]),
        a = r.useMemo(() => {
            let e = (0, R.Dd)(w.PremiumTypes.TIER_2);
            return G.intl.format(G.t["tw/SSq"], { nitroTierName: e, onClick: n });
        }, [n]);
    return (0, i.jsxs)("div", {
        className: x.Sp,
        children: [
            (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: a }),
            (0, i.jsx)(m.A, {
                size: "sm",
                subscriptionTier: w.pe.TIER_2,
                buttonTextOverride: G.intl.string(G.t.pj0XBN),
                premiumModalAnalyticsLocation: {
                    section: U.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                    object: U.ZSU.BUTTON_CTA,
                },
            }),
        ],
    });
}
function F() {
    return (0, i.jsx)("ul", {
        className: x.G2,
        children: Array.from({ length: D.BE }).map((e, t) => (0, i.jsx)("li", { className: x.bP }, t)),
    });
}
function B(e) {
    let { channel: t, guildId: n, analyticsLocations: r, sounds: a } = e,
        s = (0, T.GV)(),
        l = (0, h.A)(s),
        c = (0, d.bG)([C.default], () => C.default.getCurrentUser()),
        u = (0, d.bG)([O.A], () => O.A.getVoiceState(n, c?.id ?? U.dJq)),
        _ = u?.selfDeaf || u?.mute || u?.suppress;
    return (0, i.jsx)(o.hD, {
        navigator: l,
        children: (0, i.jsx)(o.PR, {
            children: (e) => {
                let { ref: n, ...s } = e;
                return (0, i.jsx)("ul", {
                    ...s,
                    ref: n,
                    className: x.G2,
                    children: a.map((e) =>
                        (0, i.jsx)(
                            M.A,
                            {
                                channel: t,
                                interactive: !_,
                                analyticsLocations: [...r, e.analyticsLocationSection],
                                sound: e,
                                openUpsellForSound: () => (0, b.p)(r),
                            },
                            e.soundId,
                        ),
                    ),
                });
            },
        }),
    });
}
function V(e) {
    let { channel: t, guildId: n, analyticsSource: a, openFullPicker: o } = e,
        { analyticsLocations: h } = (0, f.Ay)(I.A.SOUNDBOARD_QUICK_ACCESS_POPOUT),
        { sounds: T, hasLockedSound: m, isFetching: C } = (0, D.Ay)({ channel: t, currentGuildId: n }),
        O = (0, d.bG)([N.A], () => N.A.getMediaSessionId()),
        R = (0, d.bG)([y.A], () => y.A.getFavorites().size),
        { enabled: b } = (0, v.W)(n ?? "0", "SoundboardQuickAccessSoundPicker");
    return (
        (0, p.A)({
            type: l.ImpressionTypes.POPOUT,
            name: l.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: a,
                guild_id: n,
                media_session_id: O,
                favorite_sounds_count: R,
                type: P.c4.QUICK_ACCESS,
            },
        }),
        r.useEffect(() => {
            (L.E7(), g.bW.loadIfNecessary());
        }, []),
        (0, i.jsx)(f.f5, {
            value: h,
            children: (0, i.jsxs)(c.lG, {
                children: [
                    (0, i.jsxs)("div", {
                        className: s()(x.kL, m && x.Dx),
                        children: [
                            null != n && b ? (0, i.jsx)(S.A, { guildId: n, channelId: t.id }) : null,
                            (0, i.jsxs)("div", {
                                className: x.N1,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: x.TK,
                                        children: [
                                            (0, i.jsx)(_.J, { size: "xs", color: E.A.colors.ICON_DEFAULT }),
                                            (0, i.jsx)(u.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                children: G.intl.string(G.t["1a/hIV"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(A.Q, {
                                        text: G.intl.string(G.t.hmBVph),
                                        onClick: o,
                                        size: "sm",
                                        variant: "primary",
                                        textVariant: "text-sm/medium",
                                    }),
                                ],
                            }),
                            C
                                ? (0, i.jsx)(F, {})
                                : (0, i.jsx)(B, { sounds: T, channel: t, guildId: n, analyticsLocations: h }),
                        ],
                    }),
                    m && (0, i.jsx)(k, { analyticsLocations: h }),
                ],
            }),
        })
    );
}
