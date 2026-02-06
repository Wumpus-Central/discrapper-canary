n.d(t, { A: () => O }), n(321073);
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
    m = n(872363),
    p = n(966597),
    g = n(922281),
    _ = n(51082),
    f = n(275731),
    x = n(289552),
    C = n(246356),
    E = n(977851),
    I = n(772475),
    b = n(481947),
    N = n(485296),
    S = n(313961),
    T = n(195007),
    v = n(806931),
    y = n(985018),
    j = n(433122);
function R(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([N.A, S.A], () => {
            let e = Date.now();
            return a()(N.A.getSpeakers())
                .map((e) => S.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === v.lp.USER && e.speaking && !(0, _.Ay)(e))
                .sortBy((t) => -N.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: j.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: y.intl.formatToPlainString(y.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(b.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function O(e) {
    let { channel: t, isChatOpen: n } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, u.Ay)(c.A.VOICE_CHANNEL_HEADER),
        o = t.id,
        {
            voiceParticipantsHidden: _,
            selectedParticipant: b,
            userParticipantCount: N,
        } = (0, r.cf)(
            [S.A],
            () => ({
                selectedParticipant: S.A.getSelectedParticipant(o),
                voiceParticipantsHidden: S.A.getVoiceParticipantsHidden(o),
                userParticipantCount: S.A.getUserParticipantCount(o),
            }),
            [o],
        ),
        y = t.isGuildVoiceOrThread() && !n,
        { enabled: O, inInbox: L } = p.A.useExperiment({ location: "ChannelCallHeaderToolbar" }),
        M = [];
    return (
        _ && M.push((0, i.jsx)(R, { channelId: o, guildId: t.guild_id }, "current-speaker")),
        M.push((0, i.jsx)(A.A, { className: j.x6, channelId: o }, "clips-enabled-indicator")),
        b?.type === v.lp.STREAM &&
            (M.push((0, i.jsx)(f.A, { className: j.x6, participant: b }, "warning")),
            M.push(
                (0, i.jsx)(
                    m.A,
                    { size: h.Ay.Sizes.LARGE, className: j.x6, participant: b, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        b?.type === v.lp.USER && M.push((0, i.jsx)(x.A, { className: j.x6, userId: b.id }, "video-warning")),
        _ &&
            M.push(
                (0, i.jsx)(
                    d.YNO,
                    {
                        targetElementRef: s,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(C.A, { children: (0, i.jsx)(T.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(I.A, {
                                ...e,
                                buttonRef: s,
                                isActive: n,
                                count: N,
                                key: "call-members",
                                className: j.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        O && !L && M.push((0, i.jsx)(g.A, { className: j.x6 }, "for-later")),
        y && M.push((0, i.jsx)(E.V, { channelId: t.id, className: j.x6, disabled: n }, "chat-spacer")),
        (0, i.jsx)(u.f5, { value: a, children: M })
    );
}
