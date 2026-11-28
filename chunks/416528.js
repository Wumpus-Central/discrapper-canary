n(321073);
var i = n(477900),
    l = n(582128),
    a = n(435558),
    s = n.n(a),
    r = n(855986),
    o = n(866665),
    c = n(650809),
    d = n(192308),
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
    I = n(360729),
    j = n(410828),
    v = n(51082),
    N = n(275731),
    E = n(289552),
    b = n(246356),
    S = n(977851),
    T = n(693409),
    _ = n(772475),
    R = n(481947),
    O = n(708416),
    L = n(488947),
    P = n(170011),
    w = n(241606),
    M = n(46653),
    U = n(309010),
    D = n(485296),
    V = n(628983),
    G = n(546871),
    k = n(195007),
    B = n(806931),
    F = n(792996),
    z = n(467160),
    H = n(547368);
function W(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([D.A, V.A, M.default], () => {
            let e = Date.now(),
                n = M.default.getId();
            return s()(D.A.getSpeakers())
                .filter((e) => e !== n)
                .map((e) => V.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === B.lp.USER && e.speaking && !(0, v.Ay)(e))
                .sortBy((t) => -D.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: H.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: F.intl.formatToPlainString(F.t.JjdizN, { username: e.user.username }),
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
                    isStageAudienceSidebarOpen: v,
                    focusedApplication: R,
                    shouldShowHeaderParticipants: M,
                    guildRoomVisible: D,
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
                    [V.A],
                    () => ({
                        selectedParticipant: V.A.getSelectedParticipant(X),
                        voiceParticipantsHidden: V.A.getVoiceParticipantsHidden(X),
                        userParticipantCount: V.A.getUserParticipantCount(X),
                    }),
                    [X],
                ),
                { enabled: J, multipleRoomsEnabled: ee } = (0, I.mf)({
                    guildId: t.guild_id,
                    location: "ChannelCallHeaderToolbar",
                }),
                et = J && !t.isGuildStageVoice(),
                en = (0, r.bG)([U.Ay], () => U.Ay.getVoiceChannelId() === X),
                ei = (0, L.F)(a),
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
                            T.A,
                            {
                                iconComponent: c.PaintPaletteIcon,
                                label: F.intl.string(F.t["ZrN+DT"]),
                                onClick: () => {
                                    (0, d.mM)(async () => {
                                        let { default: e } = await Promise.all([n.e(768581), n.e(244605)]).then(
                                            n.bind(n, 77580),
                                        );
                                        return (n) => (0, i.jsx)(e, { ...n, channelId: t.id });
                                    });
                                },
                                className: H.x6,
                            },
                            "guild-room-selector",
                        ),
                    ),
                M &&
                    (Z?.type === B.lp.STREAM
                        ? eo.push((0, i.jsx)(G.A, { channel: t, focusedParticipant: Z }, "stream-participants"))
                        : Z?.type === B.lp.ACTIVITY &&
                          null != R &&
                          eo.push((0, i.jsx)(G.A, { channel: t, focusedParticipant: Z }, "activity-participants"))),
                q && eo.push((0, i.jsx)(W, { channelId: X, guildId: t.guild_id }, "current-speaker")),
                eo.push((0, i.jsx)(g.A, { className: H.x6, channelId: X }, "clips-enabled-indicator")),
                Z?.type === B.lp.STREAM &&
                    (eo.push((0, i.jsx)(N.A, { className: H.x6, participant: Z }, "warning")),
                    eo.push(
                        (0, i.jsx)(
                            x.A,
                            {
                                size: f.Ay.Sizes.LARGE,
                                className: H.x6,
                                participant: Z,
                                showQuality: !0,
                                premiumIndicator: !1,
                            },
                            "live-indicator",
                        ),
                    )),
                Z?.type === B.lp.USER && eo.push((0, i.jsx)(E.A, { className: H.x6, userId: Z.id }, "video-warning")),
                q &&
                    eo.push(
                        (0, i.jsx)(
                            u.Y,
                            {
                                targetElementRef: Y,
                                position: "bottom",
                                renderPopout: () => (0, i.jsx)(b.A, { children: (0, i.jsx)(k.A, { channel: t }) }),
                                children: (e, t) => {
                                    let { isShown: n } = t;
                                    return (0, l.createElement)(_.A, {
                                        ...e,
                                        buttonRef: Y,
                                        isActive: n,
                                        count: Q,
                                        key: "call-members",
                                        className: H.x6,
                                    });
                                },
                            },
                            "call-members-popout",
                        ),
                    ),
                et && en && !el)
            ) {
                let e = D && !$ ? F.t["3jrUBj"] : z.default.f7g0DK;
                eo.push(
                    (0, i.jsx)(
                        T.A,
                        {
                            iconComponent: D && !$ ? h.GridSquareIcon : p.ExperimentalCouchIcon,
                            label: F.intl.string(e),
                            onClick: () => {
                                if (!D) {
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
                            className: H.x6,
                        },
                        "guild-room-toggle",
                    ),
                );
            }
            return (
                t.isGuildStageVoice() &&
                    !v &&
                    eo.push((0, i.jsx)(j.di, { channel: t, className: H.x6 }, "stage-audience")),
                ea &&
                    eo.push(
                        (0, i.jsx)(
                            w.A,
                            { channel: t, returnsToRoom: et && D, className: H.x6 },
                            "voice-channel-app-toggle",
                        ),
                    ),
                es && eo.push((0, i.jsx)(P.A, { channelId: t.id, className: H.x6 }, "voice-channel-app-close")),
                er && eo.push((0, i.jsx)(S.V, { channelId: t.id, className: H.x6, disabled: o }, "chat-spacer")),
                (0, i.jsx)(A.f5, { value: K, children: eo })
            );
        },
    },
);
