n.d(t, { A: () => C }), n(321073);
var i = n(627968);
n(64700);
var r = n(956793),
    a = n(401843),
    l = n(682261),
    s = n(765379),
    o = n(90644),
    d = n(61330),
    c = n(960076),
    u = n(341915),
    A = n(890687),
    h = n(710969),
    _ = n(639214),
    m = n(834615),
    p = n(139675),
    g = n(516085),
    E = n(928636),
    f = n(812808);
n(595);
var I = n(652215);
function C(e) {
    let { party: t, onChannelContextMenu: n, quest: C } = e,
        N = (0, f.G)(),
        { voiceChannels: T, currentActivities: S, partiedMembers: x, applicationStreams: v, guildContext: b } = t,
        y = (0, A.sb)(C),
        L = [],
        O = (e) => {
            let { length: t } = L;
            L.push(e);
        };
    for (let { activity: e } of (T.length > 0 &&
        T.forEach((e) => {
            let { members: t, channel: r, guild: a } = e;
            O(
                (0, i.jsx)(
                    E.A.VoiceSection,
                    {
                        guild: a,
                        channel: r,
                        members: t,
                        partySize: (function (e, t) {
                            let n = e.length;
                            return { knownSize: n, unknownSize: 0, totalSize: n + 0 };
                        })(t),
                        onChannelContextMenu: n,
                    },
                    `voice-${r.id}`,
                ),
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = g.Fm(e);
            if (null != t) {
                O(t);
                break;
            }
        }
    return (
        v.length > 0 &&
            N &&
            v.forEach((e) => {
                let { stream: t, streamUser: n, activity: l } = e;
                O(
                    (0, i.jsx)(
                        E.A.ApplicationStreamingSection,
                        {
                            guildId: b?.id,
                            user: n,
                            activity: l,
                            applicationStream: t,
                            onPreviewClick: () => {
                                r.default.selectVoiceChannel(t.channelId), (0, a.Nl)(t);
                            },
                        },
                        `application-stream-${t.ownerId}`,
                    ),
                );
            }),
        S.forEach((e, t) => {
            let { activity: n, game: r, playingMembers: a, activityUser: A } = e;
            if (null == n || null == n.type) return null;
            if (n.type === I.$pd.PLAYING)
                if (S.length > 1 && !(0, l.A)(n) && null != r)
                    O(
                        (0, i.jsx)(
                            E.A.GameSection,
                            {
                                icon: r.getIconURL(64),
                                name: r.name,
                                partySize: { knownSize: a.length, unknownSize: 0, totalSize: a.length },
                                members: a,
                                activity: n,
                            },
                            `game-${n.session_id ?? t}-${n.application_id ?? t}`,
                        ),
                    );
                else if ((0, s.A)(n)) {
                    let e = new Set(a.map((e) => e.id)),
                        t = T.find((e) => null != e)?.channel;
                    null != t &&
                        O(
                            (0, i.jsx)(
                                E.A.EmbeddedActivitySection,
                                { activity: n, participants: e, channel: t, guildId: t.guild_id },
                                `embedded-activity-${n.application_id}`,
                            ),
                        );
                } else
                    (0, d.A)(n)
                        ? O((0, i.jsx)(E.A.XboxSection, { title: r.name }, `xbox-${n.session_id ?? t}`))
                        : O(
                              (0, i.jsx)(
                                  E.A.RichPresenceSection,
                                  { activity: n, getAssetImage: p.uD, user: A },
                                  `rich-presence-${n.session_id ?? t}-${A.id}`,
                              ),
                          );
            else if ((0, c.A)(n)) {
                let e = T.length > 0 && T[0].members.length > 1,
                    r = a.length > 1;
                O(
                    (0, i.jsx)(
                        E.A.TwitchSection,
                        { guildId: b?.id, activity: n, user: e || r ? A : null, getAssetImage: p.uD },
                        `streaming-${n.session_id ?? t}`,
                    ),
                );
            } else
                n.type === I.$pd.LISTENING &&
                    ((0, o.A)(n)
                        ? O(
                              (0, i.jsx)(
                                  E.A.SpotifySection,
                                  {
                                      activity: n,
                                      isSolo: 1 === x.length,
                                      partySize: { knownSize: a.length, unknownSize: 0, totalSize: a.length },
                                      getAssetImage: p.uD,
                                      members: a,
                                  },
                                  `spotify-${n.session_id ?? t}-${A.id}`,
                              ),
                          )
                        : (null != n.assets || (0, l.A)(n)) &&
                          O(
                              (0, i.jsx)(
                                  E.A.RichPresenceSection,
                                  { activity: n, getAssetImage: p.uD, user: A },
                                  `rich-presence-${n.session_id ?? t}-${A.id}`,
                              ),
                          ));
            y &&
                null != C &&
                null != r &&
                (0, _.zS)(n, C) &&
                (null == C.userStatus || !(0, h.gO)(C.userStatus, u.uF.ACTIVITY_PANEL)) &&
                O((0, i.jsx)(m.A, { quest: C }, `quest-${C.id}-${n.session_id ?? t}`));
        }),
        L.length > 0 ? (0, i.jsx)(E.A.Body, { children: L }) : null
    );
}
