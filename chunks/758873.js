i.d(t, { A: () => m, G: () => U });
var E = i(582128),
    s = i(17928),
    n = i(714114),
    r = i(87664),
    l = i(616356),
    a = i(280450),
    _ = i(734057),
    S = i(453028),
    A = i(576705),
    c = i(290863),
    o = i(994500),
    I = i(461213),
    T = i(977997),
    d = i(321191),
    R = i(343129),
    N = i(489379),
    u = i(818348),
    P = i(731854);
let h = Object.freeze([]),
    O = {
        ApplicationStreamingStore: l.A,
        MediaEngineStore: S.Ay,
        PresenceStore: c.A,
        RelationshipStore: o.A,
        SelfPresenceStore: I.A,
        UserProfileStore: d.A,
    },
    C = { ChannelStore: _.A, PermissionStore: A.A, PresenceStore: c.A, VoiceStateStore: T.A },
    D = { ...O, ...C },
    j = Object.freeze({ voiceActivity: void 0, voiceChannel: void 0, voiceState: void 0 });
function L(e) {
    let { userId: t, currentUserId: i, guildId: E } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O,
        n = null != t ? s.PresenceStore.getActivities(t) : h,
        l = (function (e) {
            let { userId: t, currentUserId: i, guildId: E } = e,
                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
            return null == t
                ? u.cl.OFFLINE
                : t === i
                  ? s.SelfPresenceStore.getStatus()
                  : s.PresenceStore.getStatus(t, E);
        })({ userId: t, currentUserId: i, guildId: E }, s);
    return {
        activities: n,
        isOffline: l === u.cl.OFFLINE || l === u.cl.INVISIBLE,
        isPrivate: null != t && s.UserProfileStore.getUserProfile(t)?.private === !0,
        stream: s.MediaEngineStore.supports(P.O5.VIDEO)
            ? (0, r.M)(t, [s.ApplicationStreamingStore, s.RelationshipStore])
            : null,
    };
}
function v(e) {
    let { userId: t, guildId: i } = e,
        E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
        s = (0, n.t$)({ userId: t, guildId: i }, E);
    return null == s.voiceChannel
        ? j
        : {
              ...s,
              voiceActivity: (function (e, t) {
                  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C;
                  if (null != e && null != t)
                      return (
                          i.PresenceStore.findActivity(e, (E) =>
                              (0, N.c)({
                                  activity: E,
                                  voiceChannelId: t,
                                  voiceStateForSession: i.VoiceStateStore.getVoiceStateForSession(e, E.session_id),
                              }),
                          ) ?? void 0
                      );
              })(t, s.voiceChannel.id, E),
          };
}
function x(e, t) {
    let { activities: i, isOffline: E, isPrivate: s, stream: n } = e,
        { voiceActivity: r, voiceChannel: l, voiceState: a } = t,
        _ = (0, R.U)(i);
    return {
        cards: E ? [] : (0, R.I)({ stream: n, live: _, voiceChannel: l, voiceActivity: r, isPrivate: s }),
        isOffline: E,
        isPrivate: s,
        live: _,
        stream: n,
        voiceActivity: r,
        voiceChannel: l,
        voiceState: a,
    };
}
function U(e) {
    let { userId: t, currentUserId: i, guildId: E } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
    return x(L({ userId: t, currentUserId: i ?? a.default.getId(), guildId: E }, s), v({ userId: t, guildId: E }, s));
}
function m(e) {
    let { userId: t, currentUserId: i, guildId: n } = e,
        r = (0, s.bG)([a.default], () => i ?? a.default.getId()),
        R = (0, s.cf)(
            [l.A, S.Ay, c.A, o.A, I.A, d.A],
            () =>
                L(
                    { userId: t, currentUserId: r, guildId: n },
                    {
                        ApplicationStreamingStore: l.A,
                        MediaEngineStore: S.Ay,
                        PresenceStore: c.A,
                        RelationshipStore: o.A,
                        SelfPresenceStore: I.A,
                        UserProfileStore: d.A,
                    },
                ),
            [r, n, t],
        ),
        N = (0, s.cf)(
            [_.A, A.A, c.A, T.A],
            () =>
                v(
                    { userId: t, guildId: n },
                    { ChannelStore: _.A, PermissionStore: A.A, PresenceStore: c.A, VoiceStateStore: T.A },
                ),
            [n, t],
        );
    return E.useMemo(() => x(R, N), [R, N]);
}
