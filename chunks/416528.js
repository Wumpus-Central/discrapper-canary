n.d(t, { A: () => V }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n.n(a),
    r = n(17928),
    o = n(990078),
    c = n(922016),
    d = n(481901),
    u = n(29540),
    p = n(793574),
    h = n(688810),
    m = n(402216),
    A = n(689874),
    x = n(872363),
    g = n(408822),
    f = n(920639),
    C = n(360729),
    y = n(51082),
    E = n(275731),
    N = n(289552),
    v = n(246356),
    j = n(977851),
    I = n(204651),
    T = n(772475),
    _ = n(481947),
    S = n(309010),
    R = n(485296),
    P = n(313961),
    b = n(546871),
    O = n(195007),
    L = n(806931),
    D = n(375708),
    M = n(662731),
    U = n(623921);
function w(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([R.A, P.A], () => {
            let e = Date.now();
            return s()(R.A.getSpeakers())
                .map((e) => P.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === L.lp.USER && e.speaking && !(0, y.Ay)(e))
                .sortBy((t) => -R.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: U.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: D.intl.formatToPlainString(D.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(_.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function V(e) {
    let { channel: t, isChatOpen: n, focusedApplication: a, shouldShowHeaderParticipants: s, guildRoomVisible: o } = e,
        y = l.useRef(null),
        { analyticsLocations: _ } = (0, h.Ay)(p.A.VOICE_CHANNEL_HEADER),
        R = t.id,
        {
            voiceParticipantsHidden: V,
            selectedParticipant: k,
            userParticipantCount: B,
        } = (0, r.cf)(
            [P.A],
            () => ({
                selectedParticipant: P.A.getSelectedParticipant(R),
                voiceParticipantsHidden: P.A.getVoiceParticipantsHidden(R),
                userParticipantCount: P.A.getUserParticipantCount(R),
            }),
            [R],
        ),
        { enabled: H } = C.A.useExperiment({ guildId: t.guild_id, location: "ChannelCallHeaderToolbar" }),
        G = (0, r.bG)([S.A], () => S.A.getVoiceChannelId() === R),
        F = t.isGuildVoiceOrThread() && !n,
        z = [];
    if (
        (s &&
            (k?.type === L.lp.STREAM
                ? z.push((0, i.jsx)(b.A, { channel: t, focusedParticipant: k }, "stream-participants"))
                : k?.type === L.lp.ACTIVITY &&
                  null != a &&
                  z.push((0, i.jsx)(b.A, { channel: t, focusedParticipant: k }, "activity-participants"))),
        V && z.push((0, i.jsx)(w, { channelId: R, guildId: t.guild_id }, "current-speaker")),
        z.push((0, i.jsx)(A.A, { className: U.x6, channelId: R }, "clips-enabled-indicator")),
        k?.type === L.lp.STREAM &&
            (z.push((0, i.jsx)(E.A, { className: U.x6, participant: k }, "warning")),
            z.push(
                (0, i.jsx)(
                    x.A,
                    { size: m.Ay.Sizes.LARGE, className: U.x6, participant: k, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        k?.type === L.lp.USER && z.push((0, i.jsx)(N.A, { className: U.x6, userId: k.id }, "video-warning")),
        V &&
            z.push(
                (0, i.jsx)(
                    c.Y,
                    {
                        targetElementRef: y,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(v.A, { children: (0, i.jsx)(O.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(T.A, {
                                ...e,
                                buttonRef: y,
                                isActive: n,
                                count: B,
                                key: "call-members",
                                className: U.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        H && G)
    ) {
        let e = o ? M.default.iXldTS : M.default.zQkVWf;
        z.push(
            (0, i.jsx)(
                I.A,
                {
                    iconComponent: o ? d.d : u.u,
                    label: D.intl.string(e),
                    onClick: () => {
                        (0, g.zD)(R),
                            (0, f.yt)({
                                guildId: t.guild_id,
                                channelId: R,
                                location: o ? p.A.GUILD_ROOM : p.A.CHANNEL_CALL,
                            });
                    },
                    className: U.x6,
                },
                "guild-room-toggle",
            ),
        );
    }
    return (
        F && z.push((0, i.jsx)(j.V, { channelId: t.id, className: U.x6, disabled: n }, "chat-spacer")),
        (0, i.jsx)(h.f5, { value: _, children: z })
    );
}
