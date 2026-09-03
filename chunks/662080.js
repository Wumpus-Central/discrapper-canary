n.d(t, { A: () => b });
var i = n(477900),
    r = n(582128),
    a = n(562708),
    s = n(837381),
    l = n(113325),
    o = n(17928),
    d = n(7807),
    c = n(661531),
    u = n(834730),
    _ = n(123292),
    E = n(260762),
    A = n(793574),
    h = n(688810),
    I = n(139286),
    f = n(915089),
    p = n(2181),
    T = n(763827),
    m = n(287809),
    g = n(977997),
    S = n(158045),
    N = n(209932),
    C = n(453997),
    O = n(782618),
    R = n(980504),
    L = n(652215),
    y = n(202541),
    D = n(375708),
    v = n(454992);
function b(e) {
    let { channel: t, guildId: n, analyticsSource: b, openFullPicker: M, onClose: P } = e,
        { analyticsLocations: U } = (0, h.Ay)(A.A.SOUNDBOARD_QUICK_ACCESS_POPOUT),
        { sounds: w } = (0, C.A)({ channel: t, currentGuildId: n }),
        G = (0, o.bG)([T.A], () => T.A.getMediaSessionId()),
        x = (0, o.bG)([N.A], () => N.A.getFavorites().size);
    (0, I.A)({
        type: a.ImpressionTypes.POPOUT,
        name: a.ImpressionNames.SOUNDBOARD_POPOUT,
        properties: { source: b, guild_id: n, media_session_id: G, favorite_sounds_count: x, type: R.c4.QUICK_ACCESS },
    });
    let k = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        F = (0, o.bG)([g.A], () => g.A.getVoiceState(n, k?.id ?? L.dJq)),
        V = F?.selfDeaf || F?.mute || F?.suppress,
        [B, H] = r.useState(null),
        j = (0, f.GV)(),
        W = (0, E.A)(j);
    return (0, i.jsx)(h.f5, {
        value: U,
        children: (0, i.jsxs)(l.lG, {
            className: v.kL,
            children: [
                null != B
                    ? (0, i.jsx)(p.A, {
                          title: D.intl.string(D.t.jGDYF0),
                          description: D.intl.string(D.t["grL/hg"]),
                          analyticsLocationSection: L.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: y.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...U, object: L.ZSU.SOUNDBOARD_SOUND },
                              location_stack: U,
                              sku_id: S.Ay.getSkuIdForPremiumType(y.PremiumTypes.TIER_2),
                          },
                          onClose: () => H(null),
                          onUpsellClicked: P,
                      })
                    : null,
                (0, i.jsxs)("div", {
                    className: v.N1,
                    children: [
                        (0, i.jsxs)("div", {
                            className: v.TK,
                            children: [
                                (0, i.jsx)(d.J, { size: "xs", color: c.A.colors.ICON_MUTED }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: D.intl.string(D.t["1a/hIV"]),
                                }),
                            ],
                        }),
                        (0, i.jsx)(_.Q, {
                            text: D.intl.string(D.t.hmBVph),
                            onClick: M,
                            size: "sm",
                            variant: "primary",
                            textVariant: "text-sm/medium",
                        }),
                    ],
                }),
                (0, i.jsx)(s.hD, {
                    navigator: W,
                    children: (0, i.jsx)(s.PR, {
                        children: (e) => {
                            let { ref: n, ...r } = e;
                            return (0, i.jsx)("ul", {
                                ...r,
                                ref: n,
                                className: v.G2,
                                children: w.map((e) =>
                                    (0, i.jsx)(
                                        O.A,
                                        {
                                            channel: t,
                                            interactive: !V,
                                            analyticsLocations: [...U, e.analyticsLocationSection],
                                            sound: e,
                                            openUpsellForSound: () => H(e),
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
    });
}
