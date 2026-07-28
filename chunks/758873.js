"use strict";
n.d(t, { A: () => y, G: () => L });
var i = n(64700),
    r = n(17928),
    a = n(714114),
    s = n(87664),
    l = n(616356),
    o = n(280450),
    d = n(734057),
    c = n(576705),
    u = n(290863),
    _ = n(994500),
    E = n(461213),
    A = n(977997),
    h = n(321191),
    I = n(343129),
    f = n(489379),
    p = n(818348);
let T = Object.freeze([]),
    m = {
        ApplicationStreamingStore: l.A,
        PresenceStore: u.A,
        RelationshipStore: _.A,
        SelfPresenceStore: E.A,
        UserProfileStore: h.A,
    },
    g = { ChannelStore: d.A, PermissionStore: c.A, PresenceStore: u.A, VoiceStateStore: A.A },
    S = { ...m, ...g },
    N = Object.freeze({ voiceActivity: void 0, voiceChannel: void 0, voiceState: void 0 });
function C(e) {
    let { userId: t, currentUserId: n, guildId: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m,
        a = null != t ? r.PresenceStore.getActivities(t) : T,
        l = (function (e) {
            let { userId: t, currentUserId: n, guildId: i } = e,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
            return null == t
                ? p.cl.OFFLINE
                : t === n
                  ? r.SelfPresenceStore.getStatus()
                  : r.PresenceStore.getStatus(t, i);
        })({ userId: t, currentUserId: n, guildId: i }, r);
    return {
        activities: a,
        isOffline: l === p.cl.OFFLINE || l === p.cl.INVISIBLE,
        isPrivate: null != t && r.UserProfileStore.getUserProfile(t)?.private === !0,
        stream: (0, s.M)(t, [r.ApplicationStreamingStore, r.RelationshipStore]),
    };
}
function O(e) {
    let { userId: t, guildId: n } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g,
        r = (0, a.t$)({ userId: t, guildId: n }, i);
    return null == r.voiceChannel
        ? N
        : {
              ...r,
              voiceActivity: (function (e, t) {
                  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
                  if (null != e && null != t)
                      return (
                          n.PresenceStore.findActivity(e, (i) =>
                              (0, f.c)({
                                  activity: i,
                                  voiceChannelId: t,
                                  voiceStateForSession: n.VoiceStateStore.getVoiceStateForSession(e, i.session_id),
                              }),
                          ) ?? void 0
                      );
              })(t, r.voiceChannel.id, i),
          };
}
function R(e, t) {
    let { activities: n, isOffline: i, isPrivate: r, stream: a } = e,
        { voiceActivity: s, voiceChannel: l, voiceState: o } = t,
        d = (0, I.U)(n);
    return {
        cards: i ? [] : (0, I.I)({ stream: a, live: d, voiceChannel: l, voiceActivity: s, isPrivate: r }),
        isOffline: i,
        isPrivate: r,
        live: d,
        stream: a,
        voiceActivity: s,
        voiceChannel: l,
        voiceState: o,
    };
}
function L(e) {
    let { userId: t, currentUserId: n, guildId: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
    return R(C({ userId: t, currentUserId: n ?? o.default.getId(), guildId: i }, r), O({ userId: t, guildId: i }, r));
}
function y(e) {
    let { userId: t, currentUserId: n, guildId: a } = e,
        s = (0, r.bG)([o.default], () => n ?? o.default.getId()),
        I = (0, r.cf)(
            [l.A, u.A, _.A, E.A, h.A],
            () =>
                C(
                    { userId: t, currentUserId: s, guildId: a },
                    {
                        ApplicationStreamingStore: l.A,
                        PresenceStore: u.A,
                        RelationshipStore: _.A,
                        SelfPresenceStore: E.A,
                        UserProfileStore: h.A,
                    },
                ),
            [s, a, t],
        ),
        f = (0, r.cf)(
            [d.A, c.A, u.A, A.A],
            () =>
                O(
                    { userId: t, guildId: a },
                    { ChannelStore: d.A, PermissionStore: c.A, PresenceStore: u.A, VoiceStateStore: A.A },
                ),
            [a, t],
        );
    return i.useMemo(() => R(I, f), [I, f]);
}
