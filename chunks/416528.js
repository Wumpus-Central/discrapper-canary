n.d(t, { A: () => j }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(793574),
    u = n(688810),
    h = n(402216),
    A = n(689874),
    _ = n(872363),
    m = n(51082),
    g = n(275731),
    p = n(289552),
    f = n(246356),
    x = n(977851),
    E = n(772475),
    I = n(481947),
    C = n(485296),
    N = n(313961),
    T = n(195007),
    S = n(806931),
    b = n(985018),
    y = n(435745);
function v(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([C.A, N.A], () => {
            let e = Date.now();
            return a()(C.A.getSpeakers())
                .map((e) => N.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === S.lp.USER && e.speaking && !(0, m.Ay)(e))
                .sortBy((t) => -C.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: y.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: b.intl.formatToPlainString(b.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(I.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function j(e) {
    let { channel: t, isChatOpen: n } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, u.Ay)(d.A.VOICE_CHANNEL_HEADER),
        o = t.id,
        {
            voiceParticipantsHidden: m,
            selectedParticipant: I,
            userParticipantCount: C,
        } = (0, r.cf)(
            [N.A],
            () => ({
                selectedParticipant: N.A.getSelectedParticipant(o),
                voiceParticipantsHidden: N.A.getVoiceParticipantsHidden(o),
                userParticipantCount: N.A.getUserParticipantCount(o),
            }),
            [o],
        ),
        b = t.isGuildVoiceOrThread() && !n,
        j = [];
    return (
        m && j.push((0, i.jsx)(v, { channelId: o, guildId: t.guild_id }, "current-speaker")),
        j.push((0, i.jsx)(A.A, { className: y.x6, channelId: o }, "clips-enabled-indicator")),
        I?.type === S.lp.STREAM &&
            (j.push((0, i.jsx)(g.A, { className: y.x6, participant: I }, "warning")),
            j.push(
                (0, i.jsx)(
                    _.A,
                    { size: h.Ay.Sizes.LARGE, className: y.x6, participant: I, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        I?.type === S.lp.USER && j.push((0, i.jsx)(p.A, { className: y.x6, userId: I.id }, "video-warning")),
        m &&
            j.push(
                (0, i.jsx)(
                    c.YNO,
                    {
                        targetElementRef: s,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(f.A, { children: (0, i.jsx)(T.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(E.A, {
                                ...e,
                                buttonRef: s,
                                isActive: n,
                                count: C,
                                key: "call-members",
                                className: y.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        b && j.push((0, i.jsx)(x.V, { channelId: t.id, className: y.x6, disabled: n }, "chat-spacer")),
        (0, i.jsx)(u.f5, { value: a, children: j })
    );
}
