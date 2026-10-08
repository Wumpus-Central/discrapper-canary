n.d(t, { A: () => B });
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
    f = n(793574),
    I = n(688810),
    p = n(139286),
    T = n(915089),
    m = n(465794),
    g = n(594061),
    S = n(665252),
    N = n(763827),
    C = n(287809),
    O = n(977997),
    R = n(158045),
    L = n(796774),
    y = n(209932),
    D = n(453997),
    v = n(368309),
    b = n(782618),
    M = n(980504),
    P = n(652215),
    U = n(202541),
    w = n(660183),
    G = n(454992);
function x(e) {
    let { analyticsLocations: t } = e,
        n = r.useCallback(() => {
            (0, v.p)(t);
        }, [t]),
        a = r.useMemo(() => {
            let e = (0, R.Dd)(U.PremiumTypes.TIER_2);
            return w.intl.format(w.t["tw/SSq"], { nitroTierName: e, onClick: n });
        }, [n]);
    return (0, i.jsxs)("div", {
        className: G.Sp,
        children: [
            (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: a }),
            (0, i.jsx)(m.A, {
                size: "sm",
                subscriptionTier: U.pe.TIER_2,
                buttonTextOverride: w.intl.string(w.t.pj0XBN),
                premiumModalAnalyticsLocation: {
                    section: P.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                    object: P.ZSU.BUTTON_CTA,
                },
            }),
        ],
    });
}
function k() {
    return (0, i.jsx)("ul", {
        className: G.G2,
        children: Array.from({ length: D.BE }).map((e, t) => (0, i.jsx)("li", { className: G.bP }, t)),
    });
}
function F(e) {
    let { channel: t, guildId: n, analyticsLocations: r, sounds: a } = e,
        s = (0, T.GV)(),
        l = (0, h.A)(s),
        c = (0, d.bG)([C.default], () => C.default.getCurrentUser()),
        u = (0, d.bG)([O.A], () => O.A.getVoiceState(n, c?.id ?? P.dJq)),
        _ = u?.selfDeaf || u?.mute || u?.suppress;
    return (0, i.jsx)(o.hD, {
        navigator: l,
        children: (0, i.jsx)(o.PR, {
            children: (e) => {
                let { ref: n, ...s } = e;
                return (0, i.jsx)("ul", {
                    ...s,
                    ref: n,
                    className: G.G2,
                    children: a.map((e) =>
                        (0, i.jsx)(
                            b.A,
                            {
                                channel: t,
                                interactive: !_,
                                analyticsLocations: [...r, e.analyticsLocationSection],
                                sound: e,
                                openUpsellForSound: () => (0, v.p)(r),
                            },
                            e.soundId,
                        ),
                    ),
                });
            },
        }),
    });
}
function B(e) {
    let { channel: t, guildId: n, analyticsSource: a, openFullPicker: o, showEchoes: h = !1 } = e,
        { analyticsLocations: T } = (0, I.Ay)(f.A.SOUNDBOARD_QUICK_ACCESS_POPOUT),
        { sounds: m, hasLockedSound: C, isFetching: O } = (0, D.Ay)({ channel: t, currentGuildId: n }),
        R = (0, d.bG)([N.A], () => N.A.getMediaSessionId()),
        v = (0, d.bG)([y.A], () => y.A.getFavorites().size);
    return (
        (0, p.A)({
            type: l.ImpressionTypes.POPOUT,
            name: l.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: a,
                guild_id: n,
                media_session_id: R,
                favorite_sounds_count: v,
                type: M.c4.QUICK_ACCESS,
            },
        }),
        r.useEffect(() => {
            (L.E7(), g.bW.loadIfNecessary());
        }, []),
        (0, i.jsx)(I.f5, {
            value: T,
            children: (0, i.jsxs)(c.lG, {
                children: [
                    (0, i.jsxs)("div", {
                        className: s()(G.kL, C && G.Dx),
                        children: [
                            h && null != n ? (0, i.jsx)(S.A, { guildId: n, channelId: t.id }) : null,
                            (0, i.jsxs)("div", {
                                className: G.N1,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: G.TK,
                                        children: [
                                            (0, i.jsx)(_.J, { size: "xs", color: E.A.colors.ICON_DEFAULT }),
                                            (0, i.jsx)(u.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                children: w.intl.string(w.t["1a/hIV"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(A.Q, {
                                        text: w.intl.string(w.t.hmBVph),
                                        onClick: o,
                                        size: "sm",
                                        variant: "primary",
                                        textVariant: "text-sm/medium",
                                    }),
                                ],
                            }),
                            O
                                ? (0, i.jsx)(k, {})
                                : (0, i.jsx)(F, { sounds: m, channel: t, guildId: n, analyticsLocations: T }),
                        ],
                    }),
                    C && (0, i.jsx)(x, { analyticsLocations: T }),
                ],
            }),
        })
    );
}
