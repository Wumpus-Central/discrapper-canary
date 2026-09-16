(n.d(t, { A: () => z }), n(321073));
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
    S = n(481947),
    R = n(488947),
    L = n(241606),
    O = n(637443),
    P = n(309010),
    M = n(485296),
    w = n(198052),
    U = n(546871),
    D = n(195007),
    V = n(806931),
    k = n(375708),
    G = n(270103),
    B = n(547368);
function F(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([M.A, w.A], () => {
            let e = Date.now();
            return s()(M.A.getSpeakers())
                .map((e) => w.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === V.lp.USER && e.speaking && !(0, I.Ay)(e))
                .sortBy((t) => -M.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: B.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: k.intl.formatToPlainString(k.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(S.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function z(e) {
    let {
            channel: t,
            appContext: a,
            inCall: s,
            isChatOpen: o,
            focusedApplication: I,
            shouldShowHeaderParticipants: S,
            guildRoomVisible: M,
            guildRoomVideoOverlayVisible: z,
        } = e,
        H = l.useRef(null),
        { analyticsLocations: W } = (0, A.Ay)(m.A.VOICE_CHANNEL_HEADER),
        Y = t.id,
        {
            voiceParticipantsHidden: $,
            selectedParticipant: K,
            userParticipantCount: X,
        } = (0, r.cf)(
            [w.A],
            () => ({
                selectedParticipant: w.A.getSelectedParticipant(Y),
                voiceParticipantsHidden: w.A.getVoiceParticipantsHidden(Y),
                userParticipantCount: w.A.getUserParticipantCount(Y),
            }),
            [Y],
        ),
        { enabled: q, multipleRoomsEnabled: Z } = (0, j.mf)({
            guildId: t.guild_id,
            location: "ChannelCallHeaderToolbar",
        }),
        Q = (0, r.bG)([P.Ay], () => P.Ay.getVoiceChannelId() === Y),
        J = (0, R.F)(a),
        ee = (0, O.kM)(t) && J,
        et = (0, O.Fh)(t, s) && J,
        en = t.isGuildVoiceOrThread() && !o,
        ei = [];
    if (
        (q &&
            Z &&
            Q &&
            ei.push(
                (0, i.jsx)(
                    _.A,
                    {
                        iconComponent: c.PaintPaletteIcon,
                        label: k.intl.string(k.t["ZrN+DT"]),
                        onClick: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("768581"), n.e("244605")]).then(
                                    n.bind(n, 77580),
                                );
                                return (n) => (0, i.jsx)(e, { ...n, channelId: t.id });
                            });
                        },
                        className: B.x6,
                    },
                    "guild-room-selector",
                ),
            ),
        S &&
            (K?.type === V.lp.STREAM
                ? ei.push((0, i.jsx)(U.A, { channel: t, focusedParticipant: K }, "stream-participants"))
                : K?.type === V.lp.ACTIVITY &&
                  null != I &&
                  ei.push((0, i.jsx)(U.A, { channel: t, focusedParticipant: K }, "activity-participants"))),
        $ && ei.push((0, i.jsx)(F, { channelId: Y, guildId: t.guild_id }, "current-speaker")),
        ei.push((0, i.jsx)(x.A, { className: B.x6, channelId: Y }, "clips-enabled-indicator")),
        K?.type === V.lp.STREAM &&
            (ei.push((0, i.jsx)(N.A, { className: B.x6, participant: K }, "warning")),
            ei.push(
                (0, i.jsx)(
                    g.A,
                    { size: f.Ay.Sizes.LARGE, className: B.x6, participant: K, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        K?.type === V.lp.USER && ei.push((0, i.jsx)(v.A, { className: B.x6, userId: K.id }, "video-warning")),
        $ &&
            ei.push(
                (0, i.jsx)(
                    u.Y,
                    {
                        targetElementRef: H,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(E.A, { children: (0, i.jsx)(D.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(T.A, {
                                ...e,
                                buttonRef: H,
                                isActive: n,
                                count: X,
                                key: "call-members",
                                className: B.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        q && Q && !ee)
    ) {
        let e = M && !z ? k.t["3jrUBj"] : G.default.f7g0DK;
        ei.push(
            (0, i.jsx)(
                _.A,
                {
                    iconComponent: M && !z ? h.d : p.u,
                    label: k.intl.string(e),
                    onClick: () => {
                        if (!M) {
                            ((0, C.zD)(t.id),
                                (0, y.yt)({
                                    channelId: t.id,
                                    guildId: t.guild_id,
                                    location: m.A.CHANNEL_CALL,
                                    guildRoomOpen: !0,
                                }));
                            return;
                        }
                        (0, C.UV)(!z, Y);
                    },
                    className: B.x6,
                },
                "guild-room-toggle",
            ),
        );
    }
    return (
        et &&
            ei.push(
                (0, i.jsx)(L.A, { channel: t, returnsToRoom: q && M, className: B.x6 }, "voice-channel-app-toggle"),
            ),
        en && ei.push((0, i.jsx)(b.V, { channelId: t.id, className: B.x6, disabled: o }, "chat-spacer")),
        (0, i.jsx)(A.f5, { value: W, children: ei })
    );
}
