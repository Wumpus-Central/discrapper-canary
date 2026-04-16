n.d(t, { A: () => C }), n(321073);
var i = n(627968);
n(64700);
var l = n(956793),
    a = n(401843),
    r = n(682261),
    s = n(765379),
    o = n(90644),
    d = n(61330),
    c = n(960076),
    u = n(341915),
    A = n(890687),
    h = n(710969),
    _ = n(639214),
    m = n(834615),
    g = n(139675),
    p = n(516085),
    E = n(928636),
    I = n(812808);
n(595);
var f = n(652215);
function C(e) {
    let { party: t, onChannelContextMenu: n, quest: C } = e,
        T = (0, I.G)(),
        { voiceChannels: N, currentActivities: S, partiedMembers: x, applicationStreams: v, guildContext: b } = t,
        y = (0, A.sb)(C),
        O = [],
        L = (e) => {
            let { length: t } = O;
            O.push(e);
        };
    for (let { activity: e } of (N.length > 0 &&
        N.forEach((e) => {
            let { members: t, channel: l, guild: a } = e;
            L(
                (0, i.jsx)(
                    E.A.VoiceSection,
                    {
                        guild: a,
                        channel: l,
                        members: t,
                        partySize: (function (e) {
                            let t = e.length;
                            return { knownSize: t, unknownSize: 0, totalSize: t + 0 };
                        })(t),
                        onChannelContextMenu: n,
                    },
                    `voice-${l.id}`,
                ),
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = p.Fm(e);
            if (null != t) {
                L(t);
                break;
            }
        }
    return (
        v.length > 0 &&
            T &&
            v.forEach((e) => {
                let { stream: t, streamUser: n, activity: r } = e;
                L(
                    (0, i.jsx)(
                        E.A.ApplicationStreamingSection,
                        {
                            guildId: b?.id,
                            user: n,
                            activity: r,
                            applicationStream: t,
                            onPreviewClick: () => {
                                l.default.selectVoiceChannel(t.channelId), (0, a.Nl)(t);
                            },
                        },
                        `application-stream-${t.ownerId}`,
                    ),
                );
            }),
        S.forEach((e, t) => {
            let { activity: n, game: l, playingMembers: a, activityUser: A } = e;
            if (null == n || null == n.type) return null;
            if (n.type === f.$pd.PLAYING)
                if (S.length > 1 && !(0, r.A)(n) && null != l)
                    L(
                        (0, i.jsx)(
                            E.A.GameSection,
                            {
                                icon: l.getIconURL(64),
                                name: l.name,
                                partySize: { knownSize: a.length, unknownSize: 0, totalSize: a.length },
                                members: a,
                                activity: n,
                            },
                            `game-${n.session_id ?? t}-${n.application_id ?? t}`,
                        ),
                    );
                else if ((0, s.A)(n)) {
                    let e = new Set(a.map((e) => e.id)),
                        t = N.find((e) => null != e)?.channel;
                    null != t &&
                        L(
                            (0, i.jsx)(
                                E.A.EmbeddedActivitySection,
                                { activity: n, participants: e, channel: t, guildId: t.guild_id },
                                `embedded-activity-${n.application_id}`,
                            ),
                        );
                } else
                    (0, d.A)(n)
                        ? L((0, i.jsx)(E.A.XboxSection, { title: l.name }, `xbox-${n.session_id ?? t}`))
                        : L(
                              (0, i.jsx)(
                                  E.A.RichPresenceSection,
                                  { activity: n, getAssetImage: g.uD, user: A },
                                  `rich-presence-${n.session_id ?? t}-${A.id}`,
                              ),
                          );
            else if ((0, c.A)(n)) {
                let e = N.length > 0 && N[0].members.length > 1,
                    l = a.length > 1;
                L(
                    (0, i.jsx)(
                        E.A.TwitchSection,
                        { guildId: b?.id, activity: n, user: e || l ? A : null, getAssetImage: g.uD },
                        `streaming-${n.session_id ?? t}`,
                    ),
                );
            } else
                n.type === f.$pd.LISTENING &&
                    ((0, o.A)(n)
                        ? L(
                              (0, i.jsx)(
                                  E.A.SpotifySection,
                                  {
                                      activity: n,
                                      isSolo: 1 === x.length,
                                      partySize: { knownSize: a.length, unknownSize: 0, totalSize: a.length },
                                      getAssetImage: g.uD,
                                      members: a,
                                  },
                                  `spotify-${n.session_id ?? t}-${A.id}`,
                              ),
                          )
                        : (null != n.assets || (0, r.A)(n)) &&
                          L(
                              (0, i.jsx)(
                                  E.A.RichPresenceSection,
                                  { activity: n, getAssetImage: g.uD, user: A },
                                  `rich-presence-${n.session_id ?? t}-${A.id}`,
                              ),
                          ));
            y &&
                null != C &&
                null != l &&
                (0, _.zS)(n, C) &&
                (null == C.userStatus || !(0, h.gO)(C.userStatus, u.uF.ACTIVITY_PANEL)) &&
                L((0, i.jsx)(m.A, { quest: C }, `quest-${C.id}-${n.session_id ?? t}`));
        }),
        O.length > 0 ? (0, i.jsx)(E.A.Body, { children: O }) : null
    );
}
