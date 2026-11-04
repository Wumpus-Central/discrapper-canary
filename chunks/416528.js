n(321073);
var i = n(477900),
    l = n(582128),
    a = n(435558),
    s = n.n(a),
    r = n(855986),
    o = n(866665),
    d = n(650809),
    c = n(192308),
    u = n(265872),
    h = n(481901),
    p = n(29540),
    m = n(793574),
    A = n(688810),
    f = n(402216),
    g = n(689874),
    x = n(872363),
    C = n(303227),
    y = n(920639),
    j = n(360729),
    I = n(410828),
    N = n(51082),
    v = n(275731),
    E = n(289552),
    b = n(246356),
    S = n(977851),
    _ = n(693409),
    T = n(772475),
    R = n(293277),
    O = n(708416),
    P = n(488947),
    L = n(170011),
    M = n(241606),
    w = n(309010),
    U = n(485296),
    D = n(628983),
    V = n(546871),
    G = n(195007),
    k = n(806931),
    B = n(792996),
    F = n(687782),
    z = n(547368);
function H(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([U.A, D.A], () => {
            let e = Date.now();
            return s()(U.A.getSpeakers())
                .map((e) => D.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === k.lp.USER && e.speaking && !(0, N.Ay)(e))
                .sortBy((t) => -U.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: z.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: B.intl.formatToPlainString(B.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(R.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    channel: t,
                    appContext: a,
                    inCall: s,
                    isChatOpen: o,
                    isStageAudienceSidebarOpen: N,
                    focusedApplication: R,
                    shouldShowHeaderParticipants: U,
                    guildRoomVisible: W,
                    guildRoomVideoOverlayVisible: $,
                } = e,
                Y = l.useRef(null),
                { analyticsLocations: K } = (0, A.Ay)(m.A.VOICE_CHANNEL_HEADER),
                X = t.id,
                {
                    voiceParticipantsHidden: q,
                    selectedParticipant: Z,
                    userParticipantCount: Q,
                } = (0, r.cf)(
                    [D.A],
                    () => ({
                        selectedParticipant: D.A.getSelectedParticipant(X),
                        voiceParticipantsHidden: D.A.getVoiceParticipantsHidden(X),
                        userParticipantCount: D.A.getUserParticipantCount(X),
                    }),
                    [X],
                ),
                { enabled: J, multipleRoomsEnabled: ee } = (0, j.mf)({
                    guildId: t.guild_id,
                    location: "ChannelCallHeaderToolbar",
                }),
                et = J && !t.isGuildStageVoice(),
                en = (0, r.bG)([w.Ay], () => w.Ay.getVoiceChannelId() === X),
                ei = (0, P.F)(a),
                el = (0, O.kM)(t) && ei,
                ea = (0, O.Fh)(t, s) && ei,
                es = (0, O.EJ)(t, s) && ei,
                er = t.isGuildVocalOrThread() && !o,
                eo = [];
            if (
                (et &&
                    ee &&
                    en &&
                    eo.push(
                        (0, i.jsx)(
                            _.A,
                            {
                                iconComponent: d.PaintPaletteIcon,
                                label: B.intl.string(B.t["ZrN+DT"]),
                                onClick: () => {
                                    (0, c.mM)(async () => {
                                        let { default: e } = await Promise.all([n.e(768581), n.e(244605)]).then(
                                            n.bind(n, 77580),
                                        );
                                        return (n) => (0, i.jsx)(e, { ...n, channelId: t.id });
                                    });
                                },
                                className: z.x6,
                            },
                            "guild-room-selector",
                        ),
                    ),
                U &&
                    (Z?.type === k.lp.STREAM
                        ? eo.push((0, i.jsx)(V.A, { channel: t, focusedParticipant: Z }, "stream-participants"))
                        : Z?.type === k.lp.ACTIVITY &&
                          null != R &&
                          eo.push((0, i.jsx)(V.A, { channel: t, focusedParticipant: Z }, "activity-participants"))),
                q && eo.push((0, i.jsx)(H, { channelId: X, guildId: t.guild_id }, "current-speaker")),
                eo.push((0, i.jsx)(g.A, { className: z.x6, channelId: X }, "clips-enabled-indicator")),
                Z?.type === k.lp.STREAM &&
                    (eo.push((0, i.jsx)(v.A, { className: z.x6, participant: Z }, "warning")),
                    eo.push(
                        (0, i.jsx)(
                            x.A,
                            {
                                size: f.Ay.Sizes.LARGE,
                                className: z.x6,
                                participant: Z,
                                showQuality: !0,
                                premiumIndicator: !1,
                            },
                            "live-indicator",
                        ),
                    )),
                Z?.type === k.lp.USER && eo.push((0, i.jsx)(E.A, { className: z.x6, userId: Z.id }, "video-warning")),
                q &&
                    eo.push(
                        (0, i.jsx)(
                            u.Y,
                            {
                                targetElementRef: Y,
                                position: "bottom",
                                renderPopout: () => (0, i.jsx)(b.A, { children: (0, i.jsx)(G.A, { channel: t }) }),
                                children: (e, t) => {
                                    let { isShown: n } = t;
                                    return (0, l.createElement)(T.A, {
                                        ...e,
                                        buttonRef: Y,
                                        isActive: n,
                                        count: Q,
                                        key: "call-members",
                                        className: z.x6,
                                    });
                                },
                            },
                            "call-members-popout",
                        ),
                    ),
                et && en && !el)
            ) {
                let e = W && !$ ? B.t["3jrUBj"] : F.default.f7g0DK;
                eo.push(
                    (0, i.jsx)(
                        _.A,
                        {
                            iconComponent: W && !$ ? h.d : p.u,
                            label: B.intl.string(e),
                            onClick: () => {
                                if (!W) {
                                    ((0, C.zD)(t.id),
                                        (0, y.yt)({
                                            channelId: t.id,
                                            guildId: t.guild_id,
                                            location: m.A.CHANNEL_CALL,
                                            guildRoomOpen: !0,
                                        }));
                                    return;
                                }
                                (0, C.UV)(!$, X);
                            },
                            className: z.x6,
                        },
                        "guild-room-toggle",
                    ),
                );
            }
            return (
                t.isGuildStageVoice() &&
                    !N &&
                    eo.push((0, i.jsx)(I.di, { channel: t, className: z.x6 }, "stage-audience")),
                ea &&
                    eo.push(
                        (0, i.jsx)(
                            M.A,
                            { channel: t, returnsToRoom: et && W, className: z.x6 },
                            "voice-channel-app-toggle",
                        ),
                    ),
                es && eo.push((0, i.jsx)(L.A, { channelId: t.id, className: z.x6 }, "voice-channel-app-close")),
                er && eo.push((0, i.jsx)(S.V, { channelId: t.id, className: z.x6, disabled: o }, "chat-spacer")),
                (0, i.jsx)(A.f5, { value: K, children: eo })
            );
        },
    },
);
