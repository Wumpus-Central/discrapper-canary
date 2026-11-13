var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(613412),
    o = n(837381),
    d = n(935399),
    c = n(855986),
    u = n(113325),
    _ = n(834730),
    E = n(7807),
    A = n(646514),
    f = n(123292),
    h = n(260762),
    I = n(793574),
    p = n(688810),
    m = n(139286),
    T = n(915089),
    g = n(465794),
    S = n(594061),
    N = n(120246),
    C = n(495867),
    O = n(287809),
    R = n(977997),
    L = n(129230),
    y = n(448645),
    D = n(796774),
    b = n(209932),
    v = n(24181),
    P = n(453997),
    M = n(37336),
    U = n(368309),
    w = n(782618),
    G = n(980504),
    x = n(652215),
    k = n(682901),
    F = n(792996),
    B = n(454992);
function V(e) {
    let { analyticsLocations: t, voiceGuildId: n } = e,
        a = v.H.useConfig({ location: "suggested_sounds_upsell" }),
        { analyticsLocations: s } = (0, p.Ay)(I.A.PREMIUM_UPSELL),
        l = r.useCallback(() => {
            (0, U.p)(t);
        }, [t]),
        o = r.useMemo(() => {
            let e = (0, y.Dd)(k.PremiumTypes.TIER_2);
            return F.intl.format(F.t["tw/SSq"], { nitroTierName: e, onClick: l });
        }, [l]);
    return ((0, d.Ay)(() => {
        L.default.track(x.HAw.PREMIUM_UPSELL_VIEWED, {
            type: k.e.SOUNDBOARD_QUICK_ACCESS_PICKER_UPSELL,
            location_stack: s,
            sku_id: y.Ay.getSkuIdForPremiumType(k.PremiumTypes.TIER_2),
            voice_guild_id: n,
        });
    }),
    a)
        ? (0, i.jsx)(M.A, { onNitroClick: l })
        : (0, i.jsxs)("div", {
              className: B.Sp,
              children: [
                  (0, i.jsx)(_.E, { variant: "body-sm/medium", color: "text-default", children: o }),
                  (0, i.jsx)(g.A, {
                      size: "sm",
                      subscriptionTier: k.pe.TIER_2,
                      buttonTextOverride: F.intl.string(F.t.pj0XBN),
                      premiumModalAnalyticsLocation: {
                          section: x.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          object: x.ZSU.BUTTON_CTA,
                      },
                  }),
              ],
          });
}
function H() {
    return (0, i.jsx)("ul", {
        className: B.G2,
        children: Array.from({ length: 6 }).map((e, t) => (0, i.jsx)("li", { className: B.bP }, t)),
    });
}
function j(e) {
    let { channel: t, guildId: n, analyticsLocations: r, sounds: a } = e,
        s = (0, T.GV)(),
        l = (0, h.A)(s),
        d = (0, c.bG)([O.default], () => O.default.getCurrentUser()),
        u = (0, c.bG)([R.A], () => R.A.getVoiceState(n, d?.id ?? "")),
        _ = u?.selfDeaf || u?.mute || u?.suppress;
    return (0, i.jsx)(o.hD, {
        navigator: l,
        children: (0, i.jsx)(o.PR, {
            children: (e) => {
                let { ref: n, ...s } = e;
                return (0, i.jsx)("ul", {
                    ...s,
                    ref: n,
                    className: B.G2,
                    children: a.map((e) =>
                        (0, i.jsx)(
                            w.A,
                            {
                                channel: t,
                                interactive: !_,
                                analyticsLocations: [...r, e.analyticsLocationSection],
                                sound: e,
                                openUpsellForSound: () => (0, U.p)(r),
                            },
                            e.soundId,
                        ),
                    ),
                });
            },
        }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channel: t, guildId: n, analyticsSource: a, openFullPicker: o, showEchoes: d = !1 } = e,
                { analyticsLocations: h } = (0, p.Ay)(I.A.SOUNDBOARD_QUICK_ACCESS_POPOUT),
                { sounds: T, hasLockedSound: g, isFetching: O } = (0, P.A)({ channel: t, currentGuildId: n }),
                R = (0, c.bG)([C.A], () => C.A.getMediaSessionId()),
                L = (0, c.bG)([b.A], () => b.A.getFavorites().size);
            return (
                (0, m.A)({
                    type: l.ImpressionTypes.POPOUT,
                    name: l.ImpressionNames.SOUNDBOARD_POPOUT,
                    properties: {
                        source: a,
                        guild_id: n,
                        media_session_id: R,
                        favorite_sounds_count: L,
                        type: G.c4.QUICK_ACCESS,
                    },
                }),
                r.useEffect(() => {
                    (D.E7(), S.bW.loadIfNecessary());
                }, []),
                (0, i.jsx)(p.f5, {
                    value: h,
                    children: (0, i.jsxs)(u.lG, {
                        children: [
                            (0, i.jsxs)("div", {
                                className: s()(B.kL, g && B.Dx),
                                children: [
                                    d && null != n ? (0, i.jsx)(N.A, { guildId: n, channelId: t.id }) : null,
                                    (0, i.jsxs)("div", {
                                        className: B.N1,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: B.TK,
                                                children: [
                                                    (0, i.jsx)(E.SoundboardIcon, {
                                                        size: "xs",
                                                        color: A.A.colors.ICON_DEFAULT,
                                                    }),
                                                    (0, i.jsx)(_.E, {
                                                        variant: "body-sm/medium",
                                                        color: "text-default",
                                                        children: F.intl.string(F.t["1a/hIV"]),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsx)(f.Q, {
                                                text: F.intl.string(F.t.hmBVph),
                                                onClick: o,
                                                size: "sm",
                                                variant: "primary",
                                                textVariant: "body-sm/medium",
                                            }),
                                        ],
                                    }),
                                    O
                                        ? (0, i.jsx)(H, {})
                                        : (0, i.jsx)(j, { sounds: T, channel: t, guildId: n, analyticsLocations: h }),
                                ],
                            }),
                            g && (0, i.jsx)(V, { analyticsLocations: h, voiceGuildId: n }),
                        ],
                    }),
                })
            );
        },
    },
);
