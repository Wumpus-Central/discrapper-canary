n.d(t, { A: () => L }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n.n(a),
    r = n(17928),
    o = n(990078),
    c = n(922016),
    d = n(26430),
    u = n(367513),
    h = n(793574),
    p = n(688810),
    m = n(402216),
    A = n(689874),
    x = n(872363),
    g = n(51082),
    C = n(275731),
    f = n(289552),
    E = n(246356),
    N = n(977851),
    y = n(204651),
    j = n(772475),
    v = n(481947),
    I = n(485296),
    T = n(313961),
    _ = n(546871),
    R = n(195007),
    S = n(806931),
    P = n(375708),
    O = n(623921);
function b(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([I.A, T.A], () => {
            let e = Date.now();
            return s()(I.A.getSpeakers())
                .map((e) => T.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === S.lp.USER && e.speaking && !(0, g.Ay)(e))
                .sortBy((t) => -I.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: O.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: P.intl.formatToPlainString(P.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(v.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function L(e) {
    let { channel: t, isChatOpen: n, focusedApplication: a, shouldShowHeaderParticipants: s } = e,
        o = l.useRef(null),
        { analyticsLocations: d } = (0, p.Ay)(h.A.VOICE_CHANNEL_HEADER),
        u = t.id,
        {
            voiceParticipantsHidden: g,
            selectedParticipant: y,
            userParticipantCount: v,
        } = (0, r.cf)(
            [T.A],
            () => ({
                selectedParticipant: T.A.getSelectedParticipant(u),
                voiceParticipantsHidden: T.A.getVoiceParticipantsHidden(u),
                userParticipantCount: T.A.getUserParticipantCount(u),
            }),
            [u],
        ),
        I = t.isGuildVoiceOrThread() && !n,
        P = [];
    return (
        s &&
            (y?.type === S.lp.STREAM
                ? P.push((0, i.jsx)(_.A, { channel: t, focusedParticipant: y }, "stream-participants"))
                : y?.type === S.lp.ACTIVITY &&
                  null != a &&
                  P.push((0, i.jsx)(_.A, { channel: t, focusedParticipant: y }, "activity-participants"))),
        g && P.push((0, i.jsx)(b, { channelId: u, guildId: t.guild_id }, "current-speaker")),
        P.push((0, i.jsx)(A.A, { className: O.x6, channelId: u }, "clips-enabled-indicator")),
        y?.type === S.lp.STREAM &&
            (P.push((0, i.jsx)(C.A, { className: O.x6, participant: y }, "warning")),
            P.push(
                (0, i.jsx)(
                    x.A,
                    { size: m.Ay.Sizes.LARGE, className: O.x6, participant: y, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        y?.type === S.lp.USER && P.push((0, i.jsx)(f.A, { className: O.x6, userId: y.id }, "video-warning")),
        g &&
            P.push(
                (0, i.jsx)(
                    c.Y,
                    {
                        targetElementRef: o,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(E.A, { children: (0, i.jsx)(R.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(j.A, {
                                ...e,
                                buttonRef: o,
                                isActive: n,
                                count: v,
                                key: "call-members",
                                className: O.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        I && P.push((0, i.jsx)(N.V, { channelId: t.id, className: O.x6, disabled: n }, "chat-spacer")),
        t.isVocalThread() && P.push((0, i.jsx)(M, { channelId: t.id, className: O.x6 }, "text-view-toggle")),
        (0, i.jsx)(p.f5, { value: d, children: P })
    );
}
function M(e) {
    let { channelId: t, className: n } = e,
        a = (0, r.bG)([T.A], () => T.A.getForceTextView(t), [t]),
        s = l.useCallback(() => {
            u.A.updateForceTextView(t, !a);
        }, [t, a]);
    return (0, i.jsx)(y.A, {
        iconComponent: d._,
        label: P.intl.string(P.t.Fbo88g),
        onClick: s,
        isActive: a,
        className: n,
    });
}
