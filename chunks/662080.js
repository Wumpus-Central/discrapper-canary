n.d(t, { A: () => F });
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
    g = n(594061),
    S = n(763827),
    N = n(287809),
    C = n(977997),
    O = n(158045),
    R = n(796774),
    L = n(209932),
    y = n(453997),
    D = n(368309),
    v = n(782618),
    b = n(980504),
    M = n(652215),
    P = n(202541),
    U = n(375708),
    w = n(454992);
function G(e) {
    let { analyticsLocations: t } = e,
        n = r.useCallback(() => {
            (0, D.p)(t);
        }, [t]),
        a = r.useMemo(() => {
            let e = (0, O.Dd)(P.PremiumTypes.TIER_2);
            return U.intl.format(U.t["tw/SSq"], { nitroTierName: e, onClick: n });
        }, [n]);
    return (0, i.jsxs)("div", {
        className: w.Sp,
        children: [
            (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: a }),
            (0, i.jsx)(m.A, {
                size: "sm",
                subscriptionTier: P.pe.TIER_2,
                buttonTextOverride: U.intl.string(U.t.pj0XBN),
                premiumModalAnalyticsLocation: {
                    section: M.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                    object: M.ZSU.BUTTON_CTA,
                },
            }),
        ],
    });
}
function x() {
    return (0, i.jsx)("ul", {
        className: w.G2,
        children: Array.from({ length: y.BE }).map((e, t) => (0, i.jsx)("li", { className: w.bP }, t)),
    });
}
function k(e) {
    let { channel: t, guildId: n, analyticsLocations: r, sounds: a } = e,
        s = (0, T.GV)(),
        l = (0, h.A)(s),
        d = (0, c.bG)([N.default], () => N.default.getCurrentUser()),
        u = (0, c.bG)([C.A], () => C.A.getVoiceState(n, d?.id ?? M.dJq)),
        _ = u?.selfDeaf || u?.mute || u?.suppress;
    return (0, i.jsx)(o.hD, {
        navigator: l,
        children: (0, i.jsx)(o.PR, {
            children: (e) => {
                let { ref: n, ...s } = e;
                return (0, i.jsx)("ul", {
                    ...s,
                    ref: n,
                    className: w.G2,
                    children: a.map((e) =>
                        (0, i.jsx)(
                            v.A,
                            {
                                channel: t,
                                interactive: !_,
                                analyticsLocations: [...r, e.analyticsLocationSection],
                                sound: e,
                                openUpsellForSound: () => (0, D.p)(r),
                            },
                            e.soundId,
                        ),
                    ),
                });
            },
        }),
    });
}
function F(e) {
    let { channel: t, guildId: n, analyticsSource: a, openFullPicker: o } = e,
        { analyticsLocations: h } = (0, f.Ay)(I.A.SOUNDBOARD_QUICK_ACCESS_POPOUT),
        { sounds: T, hasLockedSound: m, isFetching: N } = (0, y.Ay)({ channel: t, currentGuildId: n }),
        C = (0, c.bG)([S.A], () => S.A.getMediaSessionId()),
        O = (0, c.bG)([L.A], () => L.A.getFavorites().size);
    return (
        (0, p.A)({
            type: l.ImpressionTypes.POPOUT,
            name: l.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: a,
                guild_id: n,
                media_session_id: C,
                favorite_sounds_count: O,
                type: b.c4.QUICK_ACCESS,
            },
        }),
        r.useEffect(() => {
            (R.E7(), g.bW.loadIfNecessary());
        }, []),
        (0, i.jsx)(f.f5, {
            value: h,
            children: (0, i.jsxs)(d.lG, {
                children: [
                    (0, i.jsxs)("div", {
                        className: s()(w.kL, m && w.Dx),
                        children: [
                            (0, i.jsxs)("div", {
                                className: w.N1,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: w.TK,
                                        children: [
                                            (0, i.jsx)(_.J, { size: "xs", color: E.A.colors.ICON_DEFAULT }),
                                            (0, i.jsx)(u.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                children: U.intl.string(U.t["1a/hIV"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(A.Q, {
                                        text: U.intl.string(U.t.hmBVph),
                                        onClick: o,
                                        size: "sm",
                                        variant: "primary",
                                        textVariant: "text-sm/medium",
                                    }),
                                ],
                            }),
                            N
                                ? (0, i.jsx)(x, {})
                                : (0, i.jsx)(k, { sounds: T, channel: t, guildId: n, analyticsLocations: h }),
                        ],
                    }),
                    m && (0, i.jsx)(G, { analyticsLocations: h }),
                ],
            }),
        })
    );
}
