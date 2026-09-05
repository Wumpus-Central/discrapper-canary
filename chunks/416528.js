n.d(t, { A: () => G }), n(321073);
var i = n(477900),
    l = n(582128),
    a = n(435558),
    s = n.n(a),
    r = n(17928),
    o = n(866665),
    c = n(650809),
    d = n(192308),
    u = n(922016),
    h = n(481901),
    p = n(29540),
    m = n(793574),
    A = n(688810),
    f = n(402216),
    x = n(689874),
    g = n(872363),
    C = n(446243),
    y = n(920639),
    j = n(360729),
    I = n(51082),
    N = n(275731),
    v = n(289552),
    E = n(246356),
    b = n(977851),
    _ = n(204651),
    T = n(772475),
    S = n(481947),
    R = n(309010),
    L = n(485296),
    O = n(198052),
    P = n(546871),
    M = n(195007),
    w = n(806931),
    U = n(375708),
    D = n(977241),
    V = n(547368);
function k(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([L.A, O.A], () => {
            let e = Date.now();
            return s()(L.A.getSpeakers())
                .map((e) => O.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === w.lp.USER && e.speaking && !(0, I.Ay)(e))
                .sortBy((t) => -L.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: V.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: U.intl.formatToPlainString(U.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(S.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function G(e) {
    let {
            channel: t,
            isChatOpen: a,
            focusedApplication: s,
            shouldShowHeaderParticipants: o,
            guildRoomVisible: I,
            guildRoomVideoOverlayVisible: S,
        } = e,
        L = l.useRef(null),
        { analyticsLocations: G } = (0, A.Ay)(m.A.VOICE_CHANNEL_HEADER),
        B = t.id,
        {
            voiceParticipantsHidden: F,
            selectedParticipant: z,
            userParticipantCount: H,
        } = (0, r.cf)(
            [O.A],
            () => ({
                selectedParticipant: O.A.getSelectedParticipant(B),
                voiceParticipantsHidden: O.A.getVoiceParticipantsHidden(B),
                userParticipantCount: O.A.getUserParticipantCount(B),
            }),
            [B],
        ),
        { enabled: W, multipleRoomsEnabled: $ } = (0, j.mf)({
            guildId: t.guild_id,
            location: "ChannelCallHeaderToolbar",
        }),
        Y = (0, r.bG)([R.Ay], () => R.Ay.getVoiceChannelId() === B),
        K = t.isGuildVoiceOrThread() && !a,
        q = [];
    if (
        (W &&
            $ &&
            Y &&
            q.push(
                (0, i.jsx)(
                    _.A,
                    {
                        iconComponent: c.PaintPaletteIcon,
                        label: U.intl.string(U.t["ZrN+DT"]),
                        onClick: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("768581"), n.e("244605")]).then(
                                    n.bind(n, 77580),
                                );
                                return (n) => (0, i.jsx)(e, { ...n, channelId: t.id });
                            });
                        },
                        className: V.x6,
                    },
                    "guild-room-selector",
                ),
            ),
        o &&
            (z?.type === w.lp.STREAM
                ? q.push((0, i.jsx)(P.A, { channel: t, focusedParticipant: z }, "stream-participants"))
                : z?.type === w.lp.ACTIVITY &&
                  null != s &&
                  q.push((0, i.jsx)(P.A, { channel: t, focusedParticipant: z }, "activity-participants"))),
        F && q.push((0, i.jsx)(k, { channelId: B, guildId: t.guild_id }, "current-speaker")),
        q.push((0, i.jsx)(x.A, { className: V.x6, channelId: B }, "clips-enabled-indicator")),
        z?.type === w.lp.STREAM &&
            (q.push((0, i.jsx)(N.A, { className: V.x6, participant: z }, "warning")),
            q.push(
                (0, i.jsx)(
                    g.A,
                    { size: f.Ay.Sizes.LARGE, className: V.x6, participant: z, showQuality: !0, premiumIndicator: !1 },
                    "live-indicator",
                ),
            )),
        z?.type === w.lp.USER && q.push((0, i.jsx)(v.A, { className: V.x6, userId: z.id }, "video-warning")),
        F &&
            q.push(
                (0, i.jsx)(
                    u.Y,
                    {
                        targetElementRef: L,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(E.A, { children: (0, i.jsx)(M.A, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(T.A, {
                                ...e,
                                buttonRef: L,
                                isActive: n,
                                count: H,
                                key: "call-members",
                                className: V.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        W && Y)
    ) {
        let e = I && !S ? U.t["3jrUBj"] : D.default.f7g0DK;
        q.push(
            (0, i.jsx)(
                _.A,
                {
                    iconComponent: I && !S ? h.d : p.u,
                    label: U.intl.string(e),
                    onClick: () => {
                        if (!I) {
                            (0, C.zD)(t.id),
                                (0, y.yt)({
                                    channelId: t.id,
                                    guildId: t.guild_id,
                                    location: m.A.CHANNEL_CALL,
                                    guildRoomOpen: !0,
                                });
                            return;
                        }
                        (0, C.UV)(!S, B);
                    },
                    className: V.x6,
                },
                "guild-room-toggle",
            ),
        );
    }
    return (
        K && q.push((0, i.jsx)(b.V, { channelId: t.id, className: V.x6, disabled: a }, "chat-spacer")),
        (0, i.jsx)(A.f5, { value: G, children: q })
    );
}
