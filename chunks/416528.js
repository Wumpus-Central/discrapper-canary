n.d(t, { A: () => G }), n(321073);
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
    E = n(289552),
    v = n(246356),
    b = n(977851),
    T = n(204651),
    _ = n(772475),
    R = n(481947),
    S = n(309010),
    L = n(485296),
    O = n(198052),
    P = n(546871),
    M = n(195007),
    w = n(806931),
    D = n(375708),
    U = n(1195),
    V = n(547368);
function k(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([L.A, O.A], () => {
            let e = Date.now();
            return s()(L.A.getSpeakers())
                .map((e) => O.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === w.lp.USER && e.speaking && !(0, I.Ay)(e))
                .sortBy((t) => -L.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: V.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: D.intl.formatToPlainString(D.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(R.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function G(e) {
    let {
            channel: t,
            isChatOpen: a,
            focusedApplication: s,
            shouldShowHeaderParticipants: o,
            guildRoomVisible: I,
            guildRoomVideoOverlayVisible: R,
        } = e,
        L = l.useRef(null),
        { analyticsLocations: G } = (0, A.Ay)(m.A.VOICE_CHANNEL_HEADER),
        B = t.id,
        {
            voiceParticipantsHidden: F,
            selectedParticipant: H,
            userParticipantCount: z,
        } = (0, r.cf)(
            [O.A],
            () => ({
                selectedParticipant: O.A.getSelectedParticipant(B),
                voiceParticipantsHidden: O.A.getVoiceParticipantsHidden(B),
                userParticipantCount: O.A.getUserParticipantCount(B),
            }),
            [B],
        ),
        { enabled: W, multipleRoomsEnabled: $ } = j.A.useExperiment({
            guildId: t.guild_id,
            location: "ChannelCallHeaderToolbar",
        }),
        Y = (0, r.bG)([S.Ay], () => S.Ay.getVoiceChannelId() === B),
        K = t.isGuildVoiceOrThread() && !a,
        q = [];
    if (
        (W &&
            $ &&
            Y &&
            q.push(
                (0, i.jsx)(
                    T.A,
                    {
                        iconComponent: c.PaintPaletteIcon,
                        label: D.intl.string(D.t["ZrN+DT"]),
                        onClick: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("768581"), n.e("244605")]).then(
                                    n.bind(n, 77580),
                                );
                                return (n) => (0, i.jsx)(e, { ...n, channelId: t.id });
                            });
                        },
                        className: V.x6,
                    },
                    "guild-room-selector",
                ),
            ),
        o &&
            (H?.type === w.lp.STREAM
                ? q.push((0, i.jsx)(P.A, { channel: t, focusedParticipant: H }, "stream-participants"))
                : H?.type === w.lp.ACTIVITY &&
                  null != s &&
                  q.push((0, i.jsx)(P.A, { channel: t, focusedParticipant: H }, "activity-participants"))),
        F && q.push((0, i.jsx)(k, { channelId: B, guildId: t.guild_id }, "current-speaker")),
        q.push((0, i.jsx)(x.A, { className: V.x6, channelId: B }, "clips-enabled-indicator")),
        H?.type === w.lp.STREAM &&
            (q.push((0, i.jsx)(N.A, { className: V.x6, participant: H }, "warning")),
            q.push(
                (0, i.jsx)(
                    g.A,
                    { size: f.Ay.Sizes.LARGE, className: V.x6, participant: H, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        H?.type === w.lp.USER && q.push((0, i.jsx)(E.A, { className: V.x6, userId: H.id }, "video-warning")),
        F &&
            q.push(
                (0, i.jsx)(
                    u.Y,
                    {
                        targetElementRef: L,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(v.A, { children: (0, i.jsx)(M.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(_.A, {
                                ...e,
                                buttonRef: L,
                                isActive: n,
                                count: z,
                                key: "call-members",
                                className: V.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        W && Y)
    ) {
        let e = I && !R ? D.t["3jrUBj"] : U.default.f7g0DK;
        q.push(
            (0, i.jsx)(
                T.A,
                {
                    iconComponent: I && !R ? h.d : p.u,
                    label: D.intl.string(e),
                    onClick: () => {
                        if (!I) {
                            (0, C.zD)(t.id),
                                (0, y.yt)({
                                    channelId: t.id,
                                    guildId: t.guild_id,
                                    location: m.A.CHANNEL_CALL,
                                    guildRoomOpen: !0,
                                });
                            return;
                        }
                        (0, C.UV)(!R, B);
                    },
                    className: V.x6,
                },
                "guild-room-toggle",
            ),
        );
    }
    return (
        K && q.push((0, i.jsx)(b.V, { channelId: t.id, className: V.x6, disabled: a }, "chat-spacer")),
        (0, i.jsx)(A.f5, { value: G, children: q })
    );
}
