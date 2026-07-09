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
    g = n(446243),
    f = n(920639),
    C = n(360729),
    y = n(51082),
    j = n(275731),
    E = n(289552),
    v = n(246356),
    N = n(977851),
    I = n(204651),
    _ = n(772475),
    T = n(481947),
    S = n(309010),
    R = n(485296),
    b = n(313961),
    P = n(546871),
    O = n(195007),
    L = n(806931),
    D = n(375708),
    M = n(189090),
    w = n(387633);
function U(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([R.A, b.A], () => {
            let e = Date.now();
            return s()(R.A.getSpeakers())
                .map((e) => b.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === L.lp.USER && e.speaking && !(0, y.Ay)(e))
                .sortBy((t) => -R.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: w.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: D.intl.formatToPlainString(D.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(T.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function V(e) {
    let { channel: t, isChatOpen: n, focusedApplication: a, shouldShowHeaderParticipants: s, guildRoomVisible: o } = e,
        y = l.useRef(null),
        { analyticsLocations: T } = (0, h.Ay)(p.A.VOICE_CHANNEL_HEADER),
        R = t.id,
        {
            voiceParticipantsHidden: V,
            selectedParticipant: k,
            userParticipantCount: B,
        } = (0, r.cf)(
            [b.A],
            () => ({
                selectedParticipant: b.A.getSelectedParticipant(R),
                voiceParticipantsHidden: b.A.getVoiceParticipantsHidden(R),
                userParticipantCount: b.A.getUserParticipantCount(R),
            }),
            [R],
        ),
        { enabled: G } = C.A.useExperiment({ guildId: t.guild_id, location: "ChannelCallHeaderToolbar" }),
        H = (0, r.bG)([S.A], () => S.A.getVoiceChannelId() === R),
        F = t.isGuildVoiceOrThread() && !n,
        z = [];
    if (
        (s &&
            (k?.type === L.lp.STREAM
                ? z.push((0, i.jsx)(P.A, { channel: t, focusedParticipant: k }, "stream-participants"))
                : k?.type === L.lp.ACTIVITY &&
                  null != a &&
                  z.push((0, i.jsx)(P.A, { channel: t, focusedParticipant: k }, "activity-participants"))),
        V && z.push((0, i.jsx)(U, { channelId: R, guildId: t.guild_id }, "current-speaker")),
        z.push((0, i.jsx)(A.A, { className: w.x6, channelId: R }, "clips-enabled-indicator")),
        k?.type === L.lp.STREAM &&
            (z.push((0, i.jsx)(j.A, { className: w.x6, participant: k }, "warning")),
            z.push(
                (0, i.jsx)(
                    x.A,
                    { size: m.Ay.Sizes.LARGE, className: w.x6, participant: k, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        k?.type === L.lp.USER && z.push((0, i.jsx)(E.A, { className: w.x6, userId: k.id }, "video-warning")),
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
                            return (0, l.createElement)(_.A, {
                                ...e,
                                buttonRef: y,
                                isActive: n,
                                count: B,
                                key: "call-members",
                                className: w.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        G && H)
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
                                guildRoomOpen: !o,
                                guildId: t.guild_id,
                                channelId: R,
                                location: o ? p.A.GUILD_ROOM : p.A.CHANNEL_CALL,
                            });
                    },
                    className: w.x6,
                },
                "guild-room-toggle",
            ),
        );
    }
    return (
        F && z.push((0, i.jsx)(N.V, { channelId: t.id, className: w.x6, disabled: n }, "chat-spacer")),
        (0, i.jsx)(h.f5, { value: T, children: z })
    );
}
