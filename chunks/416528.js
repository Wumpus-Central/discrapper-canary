n.d(t, { A: () => j }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(793574),
    u = n(688810),
    h = n(402216),
    A = n(689874),
    _ = n(872363),
    m = n(51082),
    p = n(275731),
    g = n(289552),
    f = n(246356),
    E = n(977851),
    x = n(772475),
    I = n(481947),
    C = n(485296),
    N = n(313961),
    T = n(546871),
    S = n(195007),
    b = n(806931),
    y = n(985018),
    v = n(623921);
function R(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([C.A, N.A], () => {
            let e = Date.now();
            return a()(C.A.getSpeakers())
                .map((e) => N.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === b.lp.USER && e.speaking && !(0, m.Ay)(e))
                .sortBy((t) => -C.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: v.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: y.intl.formatToPlainString(y.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(I.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function j(e) {
    let { channel: t, isChatOpen: n, focusedApplication: s, shouldShowHeaderParticipants: a } = e,
        o = l.useRef(null),
        { analyticsLocations: m } = (0, u.Ay)(c.A.VOICE_CHANNEL_HEADER),
        I = t.id,
        {
            voiceParticipantsHidden: C,
            selectedParticipant: y,
            userParticipantCount: j,
        } = (0, r.cf)(
            [N.A],
            () => ({
                selectedParticipant: N.A.getSelectedParticipant(I),
                voiceParticipantsHidden: N.A.getVoiceParticipantsHidden(I),
                userParticipantCount: N.A.getUserParticipantCount(I),
            }),
            [I],
        ),
        O = t.isGuildVoiceOrThread() && !n,
        L = [];
    return (
        a &&
            (y?.type === b.lp.STREAM
                ? L.push((0, i.jsx)(T.A, { channel: t, focusedParticipant: y }, "stream-participants"))
                : y?.type === b.lp.ACTIVITY &&
                  null != s &&
                  L.push((0, i.jsx)(T.A, { channel: t, focusedParticipant: y }, "activity-participants"))),
        C && L.push((0, i.jsx)(R, { channelId: I, guildId: t.guild_id }, "current-speaker")),
        L.push((0, i.jsx)(A.A, { className: v.x6, channelId: I }, "clips-enabled-indicator")),
        y?.type === b.lp.STREAM &&
            (L.push((0, i.jsx)(p.A, { className: v.x6, participant: y }, "warning")),
            L.push(
                (0, i.jsx)(
                    _.A,
                    { size: h.Ay.Sizes.LARGE, className: v.x6, participant: y, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        y?.type === b.lp.USER && L.push((0, i.jsx)(g.A, { className: v.x6, userId: y.id }, "video-warning")),
        C &&
            L.push(
                (0, i.jsx)(
                    d.YNO,
                    {
                        targetElementRef: o,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(f.A, { children: (0, i.jsx)(S.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(x.A, {
                                ...e,
                                buttonRef: o,
                                isActive: n,
                                count: j,
                                key: "call-members",
                                className: v.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        O && L.push((0, i.jsx)(E.V, { channelId: t.id, className: v.x6, disabled: n }, "chat-spacer")),
        (0, i.jsx)(u.f5, { value: m, children: L })
    );
}
