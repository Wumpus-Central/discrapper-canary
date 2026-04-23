n.d(t, { A: () => R }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(735438),
    s = n.n(l),
    r = n(311907),
    o = n(990078),
    c = n(265872),
    d = n(793574),
    u = n(688810),
    p = n(402216),
    h = n(689874),
    _ = n(872363),
    m = n(51082),
    A = n(275731),
    x = n(289552),
    f = n(246356),
    g = n(977851),
    C = n(772475),
    y = n(481947),
    v = n(485296),
    E = n(313961),
    N = n(546871),
    I = n(195007),
    j = n(806931),
    T = n(985018),
    b = n(623921);
function S(e) {
    let { channelId: t, guildId: n } = e,
        a = (0, r.yK)([v.A, E.A], () => {
            let e = Date.now();
            return s()(v.A.getSpeakers())
                .map((e) => E.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === j.lp.USER && e.speaking && !(0, m.Ay)(e))
                .sortBy((t) => -v.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === a.length
        ? null
        : (0, i.jsx)("div", {
              className: b.$U,
              children: a.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: T.intl.formatToPlainString(T.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(y.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function R(e) {
    let { channel: t, isChatOpen: n, focusedApplication: l, shouldShowHeaderParticipants: s } = e,
        o = a.useRef(null),
        { analyticsLocations: m } = (0, u.Ay)(d.A.VOICE_CHANNEL_HEADER),
        y = t.id,
        {
            voiceParticipantsHidden: v,
            selectedParticipant: T,
            userParticipantCount: R,
        } = (0, r.cf)(
            [E.A],
            () => ({
                selectedParticipant: E.A.getSelectedParticipant(y),
                voiceParticipantsHidden: E.A.getVoiceParticipantsHidden(y),
                userParticipantCount: E.A.getUserParticipantCount(y),
            }),
            [y],
        ),
        P = t.isGuildVoiceOrThread() && !n,
        O = [];
    return (
        s &&
            (T?.type === j.lp.STREAM
                ? O.push((0, i.jsx)(N.A, { channel: t, focusedParticipant: T }, "stream-participants"))
                : T?.type === j.lp.ACTIVITY &&
                  null != l &&
                  O.push((0, i.jsx)(N.A, { channel: t, focusedParticipant: T }, "activity-participants"))),
        v && O.push((0, i.jsx)(S, { channelId: y, guildId: t.guild_id }, "current-speaker")),
        O.push((0, i.jsx)(h.A, { className: b.x6, channelId: y }, "clips-enabled-indicator")),
        T?.type === j.lp.STREAM &&
            (O.push((0, i.jsx)(A.A, { className: b.x6, participant: T }, "warning")),
            O.push(
                (0, i.jsx)(
                    _.A,
                    { size: p.Ay.Sizes.LARGE, className: b.x6, participant: T, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        T?.type === j.lp.USER && O.push((0, i.jsx)(x.A, { className: b.x6, userId: T.id }, "video-warning")),
        v &&
            O.push(
                (0, i.jsx)(
                    c.Y,
                    {
                        targetElementRef: o,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(f.A, { children: (0, i.jsx)(I.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, a.createElement)(C.A, {
                                ...e,
                                buttonRef: o,
                                isActive: n,
                                count: R,
                                key: "call-members",
                                className: b.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        P && O.push((0, i.jsx)(g.V, { channelId: t.id, className: b.x6, disabled: n }, "chat-spacer")),
        (0, i.jsx)(u.f5, { value: m, children: O })
    );
}
