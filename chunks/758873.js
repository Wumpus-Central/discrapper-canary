n.d(t, { A: () => j, G: () => p });
var i = n(582128),
    s = n(17928),
    a = n(714114),
    l = n(87664),
    r = n(616356),
    E = n(280450),
    o = n(734057),
    c = n(453028),
    d = n(576705),
    _ = n(290863),
    S = n(994500),
    u = n(461213),
    A = n(977997),
    I = n(321191),
    h = n(343129),
    T = n(489379),
    R = n(818348),
    N = n(731854);
let m = Object.freeze([]),
    C = {
        ApplicationStreamingStore: r.A,
        MediaEngineStore: c.Ay,
        PresenceStore: _.A,
        RelationshipStore: S.A,
        SelfPresenceStore: u.A,
        UserProfileStore: I.A,
    },
    P = { ChannelStore: o.A, PermissionStore: d.A, PresenceStore: _.A, VoiceStateStore: A.A },
    O = { ...C, ...P },
    x = Object.freeze({ voiceActivity: void 0, voiceChannel: void 0, voiceState: void 0 });
function f(e) {
    let { userId: t, currentUserId: n, guildId: i } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
        a = null != t ? s.PresenceStore.getActivities(t) : m,
        r = (function (e) {
            let { userId: t, currentUserId: n, guildId: i } = e,
                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C;
            return null == t
                ? R.cl.OFFLINE
                : t === n
                  ? s.SelfPresenceStore.getStatus()
                  : s.PresenceStore.getStatus(t, i);
        })({ userId: t, currentUserId: n, guildId: i }, s);
    return {
        activities: a,
        isOffline: r === R.cl.OFFLINE || r === R.cl.INVISIBLE,
        isPrivate: null != t && s.UserProfileStore.getUserProfile(t)?.private === !0,
        stream: s.MediaEngineStore.supports(N.O5.VIDEO)
            ? (0, l.M)(t, [s.ApplicationStreamingStore, s.RelationshipStore])
            : null,
    };
}
function v(e) {
    let { userId: t, guildId: n } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P,
        s = (0, a.t$)({ userId: t, guildId: n }, i);
    return null == s.voiceChannel
        ? x
        : {
              ...s,
              voiceActivity: (function (e, t) {
                  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P;
                  if (null != e && null != t)
                      return (
                          n.PresenceStore.findActivity(e, (i) =>
                              (0, T.c)({
                                  activity: i,
                                  voiceChannelId: t,
                                  voiceStateForSession: n.VoiceStateStore.getVoiceStateForSession(e, i.session_id),
                              }),
                          ) ?? void 0
                      );
              })(t, s.voiceChannel.id, i),
          };
}
function g(e, t) {
    let { activities: n, isOffline: i, isPrivate: s, stream: a } = e,
        { voiceActivity: l, voiceChannel: r, voiceState: E } = t,
        o = (0, h.U)(n);
    return {
        cards: i ? [] : (0, h.I)({ stream: a, live: o, voiceChannel: r, voiceActivity: l, isPrivate: s }),
        isOffline: i,
        isPrivate: s,
        live: o,
        stream: a,
        voiceActivity: l,
        voiceChannel: r,
        voiceState: E,
    };
}
function p(e) {
    let { userId: t, currentUserId: n, guildId: i } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
    return g(f({ userId: t, currentUserId: n ?? E.default.getId(), guildId: i }, s), v({ userId: t, guildId: i }, s));
}
function j(e) {
    let { userId: t, currentUserId: n, guildId: a } = e,
        l = (0, s.bG)([E.default], () => n ?? E.default.getId()),
        h = (0, s.cf)(
            [r.A, c.Ay, _.A, S.A, u.A, I.A],
            () =>
                f(
                    { userId: t, currentUserId: l, guildId: a },
                    {
                        ApplicationStreamingStore: r.A,
                        MediaEngineStore: c.Ay,
                        PresenceStore: _.A,
                        RelationshipStore: S.A,
                        SelfPresenceStore: u.A,
                        UserProfileStore: I.A,
                    },
                ),
            [l, a, t],
        ),
        T = (0, s.cf)(
            [o.A, d.A, _.A, A.A],
            () =>
                v(
                    { userId: t, guildId: a },
                    { ChannelStore: o.A, PermissionStore: d.A, PresenceStore: _.A, VoiceStateStore: A.A },
                ),
            [a, t],
        );
    return i.useMemo(() => g(h, T), [h, T]);
}
