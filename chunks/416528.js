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
    _ = n(872363),
    m = n(123973),
    g = n(51082),
    p = n(275731),
    f = n(289552),
    x = n(246356),
    E = n(977851),
    I = n(772475),
    C = n(481947),
    N = n(485296),
    T = n(313961),
    S = n(546871),
    b = n(195007),
    y = n(806931),
    v = n(985018),
    j = n(435745);
function R(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([N.A, T.A], () => {
            let e = Date.now();
            return a()(N.A.getSpeakers())
                .map((e) => T.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === y.lp.USER && e.speaking && !(0, g.Ay)(e))
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
                          text: v.intl.formatToPlainString(v.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(C.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function O(e) {
    let { channel: t, isChatOpen: n, focusedApplication: s, shouldShowHeaderParticipants: a } = e,
        o = l.useRef(null),
        { analyticsLocations: g } = (0, u.Ay)(c.A.VOICE_CHANNEL_HEADER),
        C = t.id,
        {
            voiceParticipantsHidden: N,
            selectedParticipant: v,
            userParticipantCount: O,
        } = (0, r.cf)(
            [T.A],
            () => ({
                selectedParticipant: T.A.getSelectedParticipant(C),
                voiceParticipantsHidden: T.A.getVoiceParticipantsHidden(C),
                userParticipantCount: T.A.getUserParticipantCount(C),
            }),
            [C],
        ),
        L = t.isGuildVoiceOrThread() && !n,
        M = [],
        D = (0, m.$F)(t);
    return (
        a &&
            D &&
            (v?.type === y.lp.STREAM
                ? M.push((0, i.jsx)(S.A, { channel: t, focusedParticipant: v }, "stream-participants"))
                : v?.type === y.lp.ACTIVITY &&
                  null != s &&
                  M.push((0, i.jsx)(S.A, { channel: t, focusedParticipant: v }, "activity-participants"))),
        N && M.push((0, i.jsx)(R, { channelId: C, guildId: t.guild_id }, "current-speaker")),
        M.push((0, i.jsx)(A.A, { className: j.x6, channelId: C }, "clips-enabled-indicator")),
        v?.type === y.lp.STREAM &&
            (M.push((0, i.jsx)(p.A, { className: j.x6, participant: v }, "warning")),
            M.push(
                (0, i.jsx)(
                    _.A,
                    { size: h.Ay.Sizes.LARGE, className: j.x6, participant: v, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        v?.type === y.lp.USER && M.push((0, i.jsx)(f.A, { className: j.x6, userId: v.id }, "video-warning")),
        N &&
            M.push(
                (0, i.jsx)(
                    d.YNO,
                    {
                        targetElementRef: o,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(x.A, { children: (0, i.jsx)(b.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(I.A, {
                                ...e,
                                buttonRef: o,
                                isActive: n,
                                count: O,
                                key: "call-members",
                                className: j.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        L && M.push((0, i.jsx)(E.V, { channelId: t.id, className: j.x6, disabled: n }, "chat-spacer")),
        (0, i.jsx)(u.f5, { value: g, children: M })
    );
}
