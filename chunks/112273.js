n.d(t, { A: () => I }), n(321073);
var i = n(627968);
n(64700);
var s = n(956793),
    l = n(401843),
    a = n(682261),
    r = n(765379),
    o = n(90644),
    c = n(61330),
    d = n(960076),
    u = n(341915),
    m = n(890687),
    A = n(710969),
    h = n(639214),
    x = n(834615),
    p = n(139675),
    g = n(516085),
    N = n(928636),
    f = n(812808);
n(595);
var _ = n(652215);
function I(e) {
    let { party: t, onChannelContextMenu: n, quest: I } = e,
        v = (0, f.G)(),
        { voiceChannels: j, currentActivities: C, partiedMembers: y, applicationStreams: S, guildContext: E } = t,
        T = (0, m.sb)(I),
        b = [],
        P = (e) => {
            let { length: t } = b;
            b.push(e);
        };
    for (let { activity: e } of (j.length > 0 &&
        j.forEach((e) => {
            let { members: t, channel: s, guild: l } = e;
            P(
                (0, i.jsx)(
                    N.A.VoiceSection,
                    {
                        guild: l,
                        channel: s,
                        members: t,
                        partySize: (function (e) {
                            let t = e.length;
                            return { knownSize: t, unknownSize: 0, totalSize: t + 0 };
                        })(t),
                        onChannelContextMenu: n,
                    },
                    `voice-${s.id}`,
                ),
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = g.Fm(e);
            if (null != t) {
                P(t);
                break;
            }
        }
    return (
        S.length > 0 &&
            v &&
            S.forEach((e) => {
                let { stream: t, streamUser: n, activity: a } = e;
                P(
                    (0, i.jsx)(
                        N.A.ApplicationStreamingSection,
                        {
                            guildId: E?.id,
                            user: n,
                            activity: a,
                            applicationStream: t,
                            onPreviewClick: () => {
                                s.default.selectVoiceChannel(t.channelId), (0, l.Nl)(t);
                            },
                        },
                        `application-stream-${t.ownerId}`,
                    ),
                );
            }),
        C.forEach((e, t) => {
            let { activity: n, game: s, playingMembers: l, activityUser: m } = e;
            if (null == n || null == n.type) return null;
            if (n.type === _.$pd.PLAYING)
                if (C.length > 1 && !(0, a.A)(n) && null != s)
                    P(
                        (0, i.jsx)(
                            N.A.GameSection,
                            {
                                icon: s.getIconURL(64),
                                name: s.name,
                                partySize: { knownSize: l.length, unknownSize: 0, totalSize: l.length },
                                members: l,
                                activity: n,
                            },
                            `game-${n.session_id ?? t}-${n.application_id ?? t}`,
                        ),
                    );
                else if ((0, r.A)(n)) {
                    let e = new Set(l.map((e) => e.id)),
                        t = j.find((e) => null != e)?.channel;
                    null != t &&
                        P(
                            (0, i.jsx)(
                                N.A.EmbeddedActivitySection,
                                { activity: n, participants: e, channel: t, guildId: t.guild_id },
                                `embedded-activity-${n.application_id}`,
                            ),
                        );
                } else
                    (0, c.A)(n)
                        ? P((0, i.jsx)(N.A.XboxSection, { title: s.name }, `xbox-${n.session_id ?? t}`))
                        : P(
                              (0, i.jsx)(
                                  N.A.RichPresenceSection,
                                  { activity: n, getAssetImage: p.uD, user: m },
                                  `rich-presence-${n.session_id ?? t}-${m.id}`,
                              ),
                          );
            else if ((0, d.A)(n)) {
                let e = j.length > 0 && j[0].members.length > 1,
                    s = l.length > 1;
                P(
                    (0, i.jsx)(
                        N.A.TwitchSection,
                        { guildId: E?.id, activity: n, user: e || s ? m : null, getAssetImage: p.uD },
                        `streaming-${n.session_id ?? t}`,
                    ),
                );
            } else
                n.type === _.$pd.LISTENING &&
                    ((0, o.A)(n)
                        ? P(
                              (0, i.jsx)(
                                  N.A.SpotifySection,
                                  {
                                      activity: n,
                                      isSolo: 1 === y.length,
                                      partySize: { knownSize: l.length, unknownSize: 0, totalSize: l.length },
                                      getAssetImage: p.uD,
                                      members: l,
                                  },
                                  `spotify-${n.session_id ?? t}-${m.id}`,
                              ),
                          )
                        : (null != n.assets || (0, a.A)(n)) &&
                          P(
                              (0, i.jsx)(
                                  N.A.RichPresenceSection,
                                  { activity: n, getAssetImage: p.uD, user: m },
                                  `rich-presence-${n.session_id ?? t}-${m.id}`,
                              ),
                          ));
            T &&
                null != I &&
                null != s &&
                (0, h.zS)(n, I) &&
                (null == I.userStatus || !(0, A.gO)(I.userStatus, u.uF.ACTIVITY_PANEL)) &&
                P((0, i.jsx)(x.A, { quest: I }, `quest-${I.id}-${n.session_id ?? t}`));
        }),
        b.length > 0 ? (0, i.jsx)(N.A.Body, { children: b }) : null
    );
}
