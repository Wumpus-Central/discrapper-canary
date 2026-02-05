n.d(t, { A: () => G }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    c = n(990078),
    u = n(397927),
    h = n(367513),
    A = n(793574),
    g = n(688810),
    m = n(402216),
    p = n(689874),
    _ = n(872363),
    x = n(966597),
    f = n(922281),
    E = n(51082),
    C = n(275731),
    I = n(289552),
    S = n(246356),
    b = n(977851),
    N = n(772475),
    T = n(481947),
    j = n(485296),
    v = n(313961),
    y = n(195007),
    R = n(261718),
    O = n(806931),
    L = n(985018),
    D = n(433122);
function M(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, d.yK)([j.A, v.A], () => {
            let e = Date.now();
            return o()(j.A.getSpeakers())
                .map((e) => v.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === O.lp.USER && e.speaking && !(0, E.Ay)(e))
                .sortBy((t) => -j.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: D.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      c.m,
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
function G(e) {
    let { channel: t, isChatOpen: n } = e,
        s = l.useRef(null),
        { analyticsLocations: r } = (0, g.Ay)(A.A.VOICE_CHANNEL_HEADER),
        o = t.id,
        {
            voiceParticipantsHidden: c,
            selectedParticipant: E,
            userParticipantCount: T,
            participantsListOpen: j,
        } = (0, d.cf)(
            [v.A],
            () => ({
                selectedParticipant: v.A.getSelectedParticipant(o),
                voiceParticipantsHidden: v.A.getVoiceParticipantsHidden(o),
                userParticipantCount: v.A.getUserParticipantCount(o),
                participantsListOpen: v.A.getParticipantsListOpen(o),
            }),
            [o],
        ),
        L = t.isGuildVoiceOrThread() && !n,
        { hasParticipantsPanel: G } = (0, R.A)({ location: "ChannelCallHeaderToolbar" }),
        U = !j && G && (t.isGuildVoiceOrThread() || t.isGroupDM()),
        { enabled: P, inInbox: k } = x.A.useExperiment({ location: "ChannelCallHeaderToolbar" }),
        w = [];
    return (
        c && w.push((0, i.jsx)(M, { channelId: o, guildId: t.guild_id }, "current-speaker")),
        w.push((0, i.jsx)(p.A, { className: D.x6, channelId: o }, "clips-enabled-indicator")),
        E?.type === O.lp.STREAM &&
            (w.push((0, i.jsx)(C.A, { className: D.x6, participant: E }, "warning")),
            w.push(
                (0, i.jsx)(
                    _.A,
                    { size: m.Ay.Sizes.LARGE, className: D.x6, participant: E, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        E?.type === O.lp.USER && w.push((0, i.jsx)(I.A, { className: D.x6, userId: E.id }, "video-warning")),
        c &&
            !G &&
            w.push(
                (0, i.jsx)(
                    u.YNO,
                    {
                        targetElementRef: s,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(S.A, { children: (0, i.jsx)(y.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(N.A, {
                                ...e,
                                buttonRef: s,
                                isActive: n,
                                count: T,
                                key: "call-members",
                                className: D.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        P && !k && w.push((0, i.jsx)(f.A, { className: D.x6 }, "for-later")),
        U &&
            w.push(
                (0, i.jsx)(
                    N.A,
                    { className: a()(D.x6, { [D.Lt]: n }), onClick: () => h.A.toggleParticipantsList(t.id, !j) },
                    "participants-list-button",
                ),
            ),
        L &&
            w.push(
                (0, i.jsx)(b.V, { channelId: t.id, className: a()(D.x6, { [D.Lt]: j }), disabled: n }, "chat-spacer"),
            ),
        (0, i.jsx)(g.f5, { value: r, children: w })
    );
}
