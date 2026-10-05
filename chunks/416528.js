(n.d(t, { A: () => H }), n(321073));
var i = n(477900),
    l = n(582128),
    a = n(435558),
    s = n.n(a),
    r = n(17928),
    o = n(866665),
    c = n(650809),
    d = n(192308),
    u = n(922016),
    h = n(481901),
    p = n(29540),
    m = n(793574),
    A = n(688810),
    f = n(402216),
    x = n(689874),
    g = n(872363),
    C = n(446243),
    y = n(920639),
    j = n(360729),
    I = n(51082),
    N = n(275731),
    v = n(289552),
    E = n(246356),
    b = n(977851),
    _ = n(204651),
    T = n(772475),
    S = n(669335),
    R = n(488947),
    L = n(170011),
    O = n(241606),
    P = n(637443),
    M = n(309010),
    w = n(485296),
    U = n(198052),
    D = n(546871),
    V = n(195007),
    k = n(806931),
    G = n(375708),
    B = n(270103),
    F = n(547368);
function z(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([w.A, U.A], () => {
            let e = Date.now();
            return s()(w.A.getSpeakers())
                .map((e) => U.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === k.lp.USER && e.speaking && !(0, I.Ay)(e))
                .sortBy((t) => -w.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: F.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: G.intl.formatToPlainString(G.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(S.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function H(e) {
    let {
            channel: t,
            appContext: a,
            inCall: s,
            isChatOpen: o,
            focusedApplication: I,
            shouldShowHeaderParticipants: S,
            guildRoomVisible: w,
            guildRoomVideoOverlayVisible: H,
        } = e,
        W = l.useRef(null),
        { analyticsLocations: Y } = (0, A.Ay)(m.A.VOICE_CHANNEL_HEADER),
        $ = t.id,
        {
            voiceParticipantsHidden: K,
            selectedParticipant: X,
            userParticipantCount: q,
        } = (0, r.cf)(
            [U.A],
            () => ({
                selectedParticipant: U.A.getSelectedParticipant($),
                voiceParticipantsHidden: U.A.getVoiceParticipantsHidden($),
                userParticipantCount: U.A.getUserParticipantCount($),
            }),
            [$],
        ),
        { enabled: Z, multipleRoomsEnabled: Q } = (0, j.mf)({
            guildId: t.guild_id,
            location: "ChannelCallHeaderToolbar",
        }),
        J = (0, r.bG)([M.Ay], () => M.Ay.getVoiceChannelId() === $),
        ee = (0, R.F)(a),
        et = (0, P.kM)(t) && ee,
        en = (0, P.Fh)(t, s) && ee,
        ei = (0, P.EJ)(t, s) && ee,
        el = t.isGuildVoiceOrThread() && !o,
        ea = [];
    if (
        (Z &&
            Q &&
            J &&
            ea.push(
                (0, i.jsx)(
                    _.A,
                    {
                        iconComponent: c.PaintPaletteIcon,
                        label: G.intl.string(G.t["ZrN+DT"]),
                        onClick: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("768581"), n.e("244605")]).then(
                                    n.bind(n, 77580),
                                );
                                return (n) => (0, i.jsx)(e, { ...n, channelId: t.id });
                            });
                        },
                        className: F.x6,
                    },
                    "guild-room-selector",
                ),
            ),
        S &&
            (X?.type === k.lp.STREAM
                ? ea.push((0, i.jsx)(D.A, { channel: t, focusedParticipant: X }, "stream-participants"))
                : X?.type === k.lp.ACTIVITY &&
                  null != I &&
                  ea.push((0, i.jsx)(D.A, { channel: t, focusedParticipant: X }, "activity-participants"))),
        K && ea.push((0, i.jsx)(z, { channelId: $, guildId: t.guild_id }, "current-speaker")),
        ea.push((0, i.jsx)(x.A, { className: F.x6, channelId: $ }, "clips-enabled-indicator")),
        X?.type === k.lp.STREAM &&
            (ea.push((0, i.jsx)(N.A, { className: F.x6, participant: X }, "warning")),
            ea.push(
                (0, i.jsx)(
                    g.A,
                    { size: f.Ay.Sizes.LARGE, className: F.x6, participant: X, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        X?.type === k.lp.USER && ea.push((0, i.jsx)(v.A, { className: F.x6, userId: X.id }, "video-warning")),
        K &&
            ea.push(
                (0, i.jsx)(
                    u.Y,
                    {
                        targetElementRef: W,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(E.A, { children: (0, i.jsx)(V.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(T.A, {
                                ...e,
                                buttonRef: W,
                                isActive: n,
                                count: q,
                                key: "call-members",
                                className: F.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        Z && J && !et)
    ) {
        let e = w && !H ? G.t["3jrUBj"] : B.default.f7g0DK;
        ea.push(
            (0, i.jsx)(
                _.A,
                {
                    iconComponent: w && !H ? h.d : p.u,
                    label: G.intl.string(e),
                    onClick: () => {
                        if (!w) {
                            ((0, C.zD)(t.id),
                                (0, y.yt)({
                                    channelId: t.id,
                                    guildId: t.guild_id,
                                    location: m.A.CHANNEL_CALL,
                                    guildRoomOpen: !0,
                                }));
                            return;
                        }
                        (0, C.UV)(!H, $);
                    },
                    className: F.x6,
                },
                "guild-room-toggle",
            ),
        );
    }
    return (
        en &&
            ea.push(
                (0, i.jsx)(O.A, { channel: t, returnsToRoom: Z && w, className: F.x6 }, "voice-channel-app-toggle"),
            ),
        ei && ea.push((0, i.jsx)(L.A, { channelId: t.id, className: F.x6 }, "voice-channel-app-close")),
        el && ea.push((0, i.jsx)(b.V, { channelId: t.id, className: F.x6, disabled: o }, "chat-spacer")),
        (0, i.jsx)(A.f5, { value: Y, children: ea })
    );
}
