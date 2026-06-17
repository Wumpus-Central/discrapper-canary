"use strict";
n.d(t, { A: () => O, G: () => R });
var i = n(64700),
    r = n(17928),
    s = n(714114),
    a = n(87664),
    o = n(616356),
    l = n(495544),
    u = n(734057),
    c = n(576705),
    d = n(290863),
    _ = n(994500),
    h = n(461213),
    f = n(977997),
    p = n(841595),
    E = n(343129),
    m = n(489379),
    g = n(818348);
let A = Object.freeze([]),
    I = {
        ApplicationStreamingStore: o.A,
        PresenceStore: d.A,
        RelationshipStore: _.A,
        SelfPresenceStore: h.A,
        UserProfileStore: p.A,
    },
    T = { ChannelStore: u.A, PermissionStore: c.A, PresenceStore: d.A, VoiceStateStore: f.A },
    S = { ...I, ...T },
    y = Object.freeze({ voiceActivity: void 0, voiceChannel: void 0, voiceState: void 0 });
function C(e) {
    let { userId: t, currentUserId: n, guildId: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I,
        s = null != t ? r.PresenceStore.getActivities(t) : A,
        o = (function (e) {
            let { userId: t, currentUserId: n, guildId: i } = e,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
            return null == t
                ? g.cl.OFFLINE
                : t === n
                  ? r.SelfPresenceStore.getStatus()
                  : r.PresenceStore.getStatus(t, i);
        })({ userId: t, currentUserId: n, guildId: i }, r);
    return {
        activities: s,
        isOffline: o === g.cl.OFFLINE || o === g.cl.INVISIBLE,
        isPrivate: null != t && r.UserProfileStore.getUserProfile(t)?.private === !0,
        stream: (0, a.M)(t, [r.ApplicationStreamingStore, r.RelationshipStore]),
    };
}
function N(e) {
    let { userId: t, guildId: n } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T,
        r = (0, s.t$)({ userId: t, guildId: n }, i);
    return null == r.voiceChannel
        ? y
        : {
              ...r,
              voiceActivity: (function (e, t) {
                  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T;
                  if (null != e && null != t)
                      return (
                          n.PresenceStore.findActivity(e, (i) =>
                              (0, m.c)({
                                  activity: i,
                                  voiceChannelId: t,
                                  voiceStateForSession: n.VoiceStateStore.getVoiceStateForSession(e, i.session_id),
                              }),
                          ) ?? void 0
                      );
              })(t, r.voiceChannel.id, i),
          };
}
function v(e, t) {
    let { activities: n, isOffline: i, isPrivate: r, stream: s } = e,
        { voiceActivity: a, voiceChannel: o, voiceState: l } = t,
        u = (0, E.U)(n);
    return {
        cards: i ? [] : (0, E.I)({ stream: s, live: u, voiceChannel: o, voiceActivity: a, isPrivate: r }),
        isOffline: i,
        isPrivate: r,
        live: u,
        stream: s,
        voiceActivity: a,
        voiceChannel: o,
        voiceState: l,
    };
}
function R(e) {
    let { userId: t, currentUserId: n, guildId: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
    return v(C({ userId: t, currentUserId: n ?? l.default.getId(), guildId: i }, r), N({ userId: t, guildId: i }, r));
}
function O(e) {
    let { userId: t, currentUserId: n, guildId: s } = e,
        a = (0, r.bG)([l.default], () => n ?? l.default.getId()),
        E = (0, r.cf)(
            [o.A, d.A, _.A, h.A, p.A],
            () =>
                C(
                    { userId: t, currentUserId: a, guildId: s },
                    {
                        ApplicationStreamingStore: o.A,
                        PresenceStore: d.A,
                        RelationshipStore: _.A,
                        SelfPresenceStore: h.A,
                        UserProfileStore: p.A,
                    },
                ),
            [a, s, t],
        ),
        m = (0, r.cf)(
            [u.A, c.A, d.A, f.A],
            () =>
                N(
                    { userId: t, guildId: s },
                    { ChannelStore: u.A, PermissionStore: c.A, PresenceStore: d.A, VoiceStateStore: f.A },
                ),
            [s, t],
        );
    return i.useMemo(() => v(E, m), [E, m]);
}
