n.d(t, { A: () => P }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n.n(a),
    r = n(17928),
    o = n(990078),
    c = n(922016),
    d = n(793574),
    u = n(688810),
    h = n(402216),
    p = n(689874),
    m = n(872363),
    A = n(51082),
    x = n(275731),
    g = n(289552),
    C = n(246356),
    f = n(977851),
    E = n(772475),
    y = n(481947),
    N = n(485296),
    j = n(313961),
    v = n(546871),
    I = n(195007),
    T = n(806931),
    _ = n(375708),
    R = n(623921);
function S(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([N.A, j.A], () => {
            let e = Date.now();
            return s()(N.A.getSpeakers())
                .map((e) => j.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === T.lp.USER && e.speaking && !(0, A.Ay)(e))
                .sortBy((t) => -N.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: R.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: _.intl.formatToPlainString(_.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(y.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function P(e) {
    let { channel: t, isChatOpen: n, focusedApplication: a, shouldShowHeaderParticipants: s } = e,
        o = l.useRef(null),
        { analyticsLocations: A } = (0, u.Ay)(d.A.VOICE_CHANNEL_HEADER),
        y = t.id,
        {
            voiceParticipantsHidden: N,
            selectedParticipant: _,
            userParticipantCount: P,
        } = (0, r.cf)(
            [j.A],
            () => ({
                selectedParticipant: j.A.getSelectedParticipant(y),
                voiceParticipantsHidden: j.A.getVoiceParticipantsHidden(y),
                userParticipantCount: j.A.getUserParticipantCount(y),
            }),
            [y],
        ),
        O = t.isGuildVoiceOrThread() && !n,
        b = [];
    return (
        s &&
            (_?.type === T.lp.STREAM
                ? b.push((0, i.jsx)(v.A, { channel: t, focusedParticipant: _ }, "stream-participants"))
                : _?.type === T.lp.ACTIVITY &&
                  null != a &&
                  b.push((0, i.jsx)(v.A, { channel: t, focusedParticipant: _ }, "activity-participants"))),
        N && b.push((0, i.jsx)(S, { channelId: y, guildId: t.guild_id }, "current-speaker")),
        b.push((0, i.jsx)(p.A, { className: R.x6, channelId: y }, "clips-enabled-indicator")),
        _?.type === T.lp.STREAM &&
            (b.push((0, i.jsx)(x.A, { className: R.x6, participant: _ }, "warning")),
            b.push(
                (0, i.jsx)(
                    m.A,
                    { size: h.Ay.Sizes.LARGE, className: R.x6, participant: _, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        _?.type === T.lp.USER && b.push((0, i.jsx)(g.A, { className: R.x6, userId: _.id }, "video-warning")),
        N &&
            b.push(
                (0, i.jsx)(
                    c.Y,
                    {
                        targetElementRef: o,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(C.A, { children: (0, i.jsx)(I.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(E.A, {
                                ...e,
                                buttonRef: o,
                                isActive: n,
                                count: P,
                                key: "call-members",
                                className: R.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        O && b.push((0, i.jsx)(f.V, { channelId: t.id, className: R.x6, disabled: n }, "chat-spacer")),
        (0, i.jsx)(u.f5, { value: A, children: b })
    );
}
