n.d(t, { A: () => G }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(435558),
    s = n.n(a),
    r = n(17928),
    o = n(866665),
    c = n(650809),
    d = n(192308),
    u = n(481901),
    p = n(29540),
    h = n(922016),
    m = n(793574),
    A = n(688810),
    f = n(402216),
    x = n(689874),
    g = n(872363),
    C = n(446243),
    y = n(920639),
    j = n(360729),
    v = n(51082),
    E = n(275731),
    N = n(289552),
    I = n(246356),
    T = n(977851),
    b = n(204651),
    _ = n(772475),
    R = n(481947),
    S = n(309010),
    P = n(485296),
    L = n(313961),
    O = n(546871),
    w = n(195007),
    M = n(806931),
    D = n(375708),
    U = n(662731),
    k = n(622073);
function V(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([P.A, L.A], () => {
            let e = Date.now();
            return s()(P.A.getSpeakers())
                .map((e) => L.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === M.lp.USER && e.speaking && !(0, v.Ay)(e))
                .sortBy((t) => -P.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: k.$U,
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
    let { channel: t, isChatOpen: a, focusedApplication: s, shouldShowHeaderParticipants: o, guildRoomVisible: v } = e,
        R = l.useRef(null),
        { analyticsLocations: P } = (0, A.Ay)(m.A.VOICE_CHANNEL_HEADER),
        G = t.id,
        {
            voiceParticipantsHidden: B,
            selectedParticipant: H,
            userParticipantCount: F,
        } = (0, r.cf)(
            [L.A],
            () => ({
                selectedParticipant: L.A.getSelectedParticipant(G),
                voiceParticipantsHidden: L.A.getVoiceParticipantsHidden(G),
                userParticipantCount: L.A.getUserParticipantCount(G),
            }),
            [G],
        ),
        { enabled: z, multipleRoomsEnabled: W } = j.A.useExperiment({
            guildId: t.guild_id,
            location: "ChannelCallHeaderToolbar",
        }),
        Y = (0, r.bG)([S.Ay], () => S.Ay.getVoiceChannelId() === G),
        K = t.isGuildVoiceOrThread() && !a,
        X = [];
    if (
        (z &&
            W &&
            Y &&
            X.push(
                (0, i.jsx)(
                    b.A,
                    {
                        iconComponent: c.B,
                        label: D.intl.string(D.t["ZrN+DT"]),
                        onClick: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("35454"), n.e("44605")]).then(
                                    n.bind(n, 77580),
                                );
                                return (n) => (0, i.jsx)(e, { ...n, channelId: t.id });
                            });
                        },
                        className: k.x6,
                    },
                    "guild-room-selector",
                ),
            ),
        z && Y)
    ) {
        let e = v ? U.default.iXldTS : U.default.zQkVWf;
        X.push(
            (0, i.jsx)(
                b.A,
                {
                    iconComponent: v ? u.d : p.u,
                    label: D.intl.string(e),
                    onClick: () => {
                        (0, C.zD)(G),
                            (0, y.yt)({
                                guildRoomOpen: !v,
                                guildId: t.guild_id,
                                channelId: G,
                                location: v ? m.A.GUILD_ROOM : m.A.CHANNEL_CALL,
                            });
                    },
                    className: k.x6,
                },
                "guild-room-toggle",
            ),
        );
    }
    return (
        o &&
            (H?.type === M.lp.STREAM
                ? X.push((0, i.jsx)(O.A, { channel: t, focusedParticipant: H }, "stream-participants"))
                : H?.type === M.lp.ACTIVITY &&
                  null != s &&
                  X.push((0, i.jsx)(O.A, { channel: t, focusedParticipant: H }, "activity-participants"))),
        B && X.push((0, i.jsx)(V, { channelId: G, guildId: t.guild_id }, "current-speaker")),
        X.push((0, i.jsx)(x.A, { className: k.x6, channelId: G }, "clips-enabled-indicator")),
        H?.type === M.lp.STREAM &&
            (X.push((0, i.jsx)(E.A, { className: k.x6, participant: H }, "warning")),
            X.push(
                (0, i.jsx)(
                    g.A,
                    { size: f.Ay.Sizes.LARGE, className: k.x6, participant: H, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        H?.type === M.lp.USER && X.push((0, i.jsx)(N.A, { className: k.x6, userId: H.id }, "video-warning")),
        B &&
            X.push(
                (0, i.jsx)(
                    h.Y,
                    {
                        targetElementRef: R,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(I.A, { children: (0, i.jsx)(w.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(_.A, {
                                ...e,
                                buttonRef: R,
                                isActive: n,
                                count: F,
                                key: "call-members",
                                className: k.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        K && X.push((0, i.jsx)(T.V, { channelId: t.id, className: k.x6, disabled: a }, "chat-spacer")),
        (0, i.jsx)(A.f5, { value: P, children: X })
    );
}
