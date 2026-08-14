"use strict";
n.d(t, { A: () => v, G: () => y });
var i = n(582128),
    r = n(17928),
    a = n(714114),
    s = n(87664),
    l = n(616356),
    o = n(280450),
    d = n(734057),
    c = n(626822),
    u = n(576705),
    _ = n(290863),
    E = n(994500),
    A = n(461213),
    h = n(977997),
    I = n(321191),
    f = n(343129),
    p = n(489379),
    T = n(818348),
    m = n(731854);
let g = Object.freeze([]),
    S = {
        ApplicationStreamingStore: l.A,
        MediaEngineStore: c.Ay,
        PresenceStore: _.A,
        RelationshipStore: E.A,
        SelfPresenceStore: A.A,
        UserProfileStore: I.A,
    },
    N = { ChannelStore: d.A, PermissionStore: u.A, PresenceStore: _.A, VoiceStateStore: h.A },
    C = { ...S, ...N },
    R = Object.freeze({ voiceActivity: void 0, voiceChannel: void 0, voiceState: void 0 });
function O(e) {
    let { userId: t, currentUserId: n, guildId: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S,
        a = null != t ? r.PresenceStore.getActivities(t) : g,
        l = (function (e) {
            let { userId: t, currentUserId: n, guildId: i } = e,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
            return null == t
                ? T.cl.OFFLINE
                : t === n
                  ? r.SelfPresenceStore.getStatus()
                  : r.PresenceStore.getStatus(t, i);
        })({ userId: t, currentUserId: n, guildId: i }, r);
    return {
        activities: a,
        isOffline: l === T.cl.OFFLINE || l === T.cl.INVISIBLE,
        isPrivate: null != t && r.UserProfileStore.getUserProfile(t)?.private === !0,
        stream: r.MediaEngineStore.supports(m.O5.VIDEO)
            ? (0, s.M)(t, [r.ApplicationStreamingStore, r.RelationshipStore])
            : null,
    };
}
function L(e) {
    let { userId: t, guildId: n } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N,
        r = (0, a.t$)({ userId: t, guildId: n }, i);
    return null == r.voiceChannel
        ? R
        : {
              ...r,
              voiceActivity: (function (e, t) {
                  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N;
                  if (null != e && null != t)
                      return (
                          n.PresenceStore.findActivity(e, (i) =>
                              (0, p.c)({
                                  activity: i,
                                  voiceChannelId: t,
                                  voiceStateForSession: n.VoiceStateStore.getVoiceStateForSession(e, i.session_id),
                              }),
                          ) ?? void 0
                      );
              })(t, r.voiceChannel.id, i),
          };
}
function D(e, t) {
    let { activities: n, isOffline: i, isPrivate: r, stream: a } = e,
        { voiceActivity: s, voiceChannel: l, voiceState: o } = t,
        d = (0, f.U)(n);
    return {
        cards: i ? [] : (0, f.I)({ stream: a, live: d, voiceChannel: l, voiceActivity: s, isPrivate: r }),
        isOffline: i,
        isPrivate: r,
        live: d,
        stream: a,
        voiceActivity: s,
        voiceChannel: l,
        voiceState: o,
    };
}
function y(e) {
    let { userId: t, currentUserId: n, guildId: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C;
    return D(O({ userId: t, currentUserId: n ?? o.default.getId(), guildId: i }, r), L({ userId: t, guildId: i }, r));
}
function v(e) {
    let { userId: t, currentUserId: n, guildId: a } = e,
        s = (0, r.bG)([o.default], () => n ?? o.default.getId()),
        f = (0, r.cf)(
            [l.A, c.Ay, _.A, E.A, A.A, I.A],
            () =>
                O(
                    { userId: t, currentUserId: s, guildId: a },
                    {
                        ApplicationStreamingStore: l.A,
                        MediaEngineStore: c.Ay,
                        PresenceStore: _.A,
                        RelationshipStore: E.A,
                        SelfPresenceStore: A.A,
                        UserProfileStore: I.A,
                    },
                ),
            [s, a, t],
        ),
        p = (0, r.cf)(
            [d.A, u.A, _.A, h.A],
            () =>
                L(
                    { userId: t, guildId: a },
                    { ChannelStore: d.A, PermissionStore: u.A, PresenceStore: _.A, VoiceStateStore: h.A },
                ),
            [a, t],
        );
    return i.useMemo(() => D(f, p), [f, p]);
}
