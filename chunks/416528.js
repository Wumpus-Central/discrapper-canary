n.d(t, { A: () => U }), n(321073);
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
    f = n(360729),
    C = n(51082),
    y = n(275731),
    E = n(289552),
    N = n(246356),
    j = n(977851),
    v = n(204651),
    I = n(772475),
    T = n(481947),
    _ = n(309010),
    S = n(485296),
    R = n(313961),
    P = n(546871),
    b = n(195007),
    O = n(806931),
    L = n(375708),
    D = n(662731),
    M = n(623921);
function w(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([S.A, R.A], () => {
            let e = Date.now();
            return s()(S.A.getSpeakers())
                .map((e) => R.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === O.lp.USER && e.speaking && !(0, C.Ay)(e))
                .sortBy((t) => -S.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: M.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: L.intl.formatToPlainString(L.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(T.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function U(e) {
    let { channel: t, isChatOpen: n, focusedApplication: a, shouldShowHeaderParticipants: s, guildRoomVisible: o } = e,
        C = l.useRef(null),
        { analyticsLocations: T } = (0, h.Ay)(p.A.VOICE_CHANNEL_HEADER),
        S = t.id,
        {
            voiceParticipantsHidden: U,
            selectedParticipant: V,
            userParticipantCount: k,
        } = (0, r.cf)(
            [R.A],
            () => ({
                selectedParticipant: R.A.getSelectedParticipant(S),
                voiceParticipantsHidden: R.A.getVoiceParticipantsHidden(S),
                userParticipantCount: R.A.getUserParticipantCount(S),
            }),
            [S],
        ),
        { enabled: B } = f.A.useExperiment({ guildId: t.guild_id, location: "ChannelCallHeaderToolbar" }),
        H = (0, r.bG)([_.A], () => _.A.getVoiceChannelId() === S),
        G = t.isGuildVoiceOrThread() && !n,
        F = [];
    if (
        (s &&
            (V?.type === O.lp.STREAM
                ? F.push((0, i.jsx)(P.A, { channel: t, focusedParticipant: V }, "stream-participants"))
                : V?.type === O.lp.ACTIVITY &&
                  null != a &&
                  F.push((0, i.jsx)(P.A, { channel: t, focusedParticipant: V }, "activity-participants"))),
        U && F.push((0, i.jsx)(w, { channelId: S, guildId: t.guild_id }, "current-speaker")),
        F.push((0, i.jsx)(A.A, { className: M.x6, channelId: S }, "clips-enabled-indicator")),
        V?.type === O.lp.STREAM &&
            (F.push((0, i.jsx)(y.A, { className: M.x6, participant: V }, "warning")),
            F.push(
                (0, i.jsx)(
                    x.A,
                    { size: m.Ay.Sizes.LARGE, className: M.x6, participant: V, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        V?.type === O.lp.USER && F.push((0, i.jsx)(E.A, { className: M.x6, userId: V.id }, "video-warning")),
        U &&
            F.push(
                (0, i.jsx)(
                    c.Y,
                    {
                        targetElementRef: C,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(N.A, { children: (0, i.jsx)(b.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(I.A, {
                                ...e,
                                buttonRef: C,
                                isActive: n,
                                count: k,
                                key: "call-members",
                                className: M.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        B && H)
    ) {
        let e = o ? D.default.iXldTS : D.default.zQkVWf;
        F.push(
            (0, i.jsx)(
                v.A,
                {
                    iconComponent: o ? d.d : u.u,
                    label: L.intl.string(e),
                    onClick: () => {
                        (0, g.zD)(S);
                    },
                    className: M.x6,
                },
                "guild-room-toggle",
            ),
        );
    }
    return (
        G && F.push((0, i.jsx)(j.V, { channelId: t.id, className: M.x6, disabled: n }, "chat-spacer")),
        (0, i.jsx)(h.f5, { value: T, children: F })
    );
}
