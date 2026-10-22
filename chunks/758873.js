t.d(i, { A: () => U, G: () => M });
var s = t(582128),
    n = t(17928),
    r = t(714114),
    l = t(87664),
    a = t(616356),
    c = t(280450),
    d = t(734057),
    o = t(360906),
    h = t(576705),
    u = t(290863),
    j = t(994500),
    x = t(461213),
    v = t(977997),
    m = t(321191),
    f = t(343129),
    g = t(489379),
    N = t(818348),
    A = t(731854);
let p = Object.freeze([]),
    w = {
        ApplicationStreamingStore: a.A,
        MediaEngineStore: o.Ay,
        PresenceStore: u.A,
        RelationshipStore: j.A,
        SelfPresenceStore: x.A,
        UserProfileStore: m.A,
    },
    S = { ChannelStore: d.A, PermissionStore: h.A, PresenceStore: u.A, VoiceStateStore: v.A },
    y = { ...w, ...S },
    b = Object.freeze({ voiceActivity: void 0, voiceChannel: void 0, voiceState: void 0 });
function C(e) {
    let { userId: i, currentUserId: t, guildId: s } = e,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w,
        r = null != i ? n.PresenceStore.getActivities(i) : p,
        a = (function (e) {
            let { userId: i, currentUserId: t, guildId: s } = e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
            return null == i
                ? N.cl.OFFLINE
                : i === t
                  ? n.SelfPresenceStore.getStatus()
                  : n.PresenceStore.getStatus(i, s);
        })({ userId: i, currentUserId: t, guildId: s }, n);
    return {
        activities: r,
        isOffline: a === N.cl.OFFLINE || a === N.cl.INVISIBLE,
        isPrivate: null != i && n.UserProfileStore.getUserProfile(i)?.private === !0,
        stream: n.MediaEngineStore.supports(A.O5.VIDEO)
            ? (0, l.M)(i, [n.ApplicationStreamingStore, n.RelationshipStore])
            : null,
    };
}
function I(e) {
    let { userId: i, guildId: t } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S,
        n = (0, r.t$)({ userId: i, guildId: t }, s);
    return null == n.voiceChannel
        ? b
        : {
              ...n,
              voiceActivity: (function (e, i) {
                  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S;
                  if (null != e && null != i)
                      return (
                          t.PresenceStore.findActivity(e, (s) =>
                              (0, g.c)({
                                  activity: s,
                                  voiceChannelId: i,
                                  voiceStateForSession: t.VoiceStateStore.getVoiceStateForSession(e, s.session_id),
                              }),
                          ) ?? void 0
                      );
              })(i, n.voiceChannel.id, s),
          };
}
function P(e, i) {
    let { activities: t, isOffline: s, isPrivate: n, stream: r } = e,
        { voiceActivity: l, voiceChannel: a, voiceState: c } = i,
        d = (0, f.U)(t);
    return {
        cards: s ? [] : (0, f.I)({ stream: r, live: d, voiceChannel: a, voiceActivity: l, isPrivate: n }),
        isOffline: s,
        isPrivate: n,
        live: d,
        stream: r,
        voiceActivity: l,
        voiceChannel: a,
        voiceState: c,
    };
}
function M(e) {
    let { userId: i, currentUserId: t, guildId: s } = e,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
    return P(C({ userId: i, currentUserId: t ?? c.default.getId(), guildId: s }, n), I({ userId: i, guildId: s }, n));
}
function U(e) {
    let { userId: i, currentUserId: t, guildId: r } = e,
        l = (0, n.bG)([c.default], () => t ?? c.default.getId()),
        f = (0, n.cf)(
            [a.A, o.Ay, u.A, j.A, x.A, m.A],
            () =>
                C(
                    { userId: i, currentUserId: l, guildId: r },
                    {
                        ApplicationStreamingStore: a.A,
                        MediaEngineStore: o.Ay,
                        PresenceStore: u.A,
                        RelationshipStore: j.A,
                        SelfPresenceStore: x.A,
                        UserProfileStore: m.A,
                    },
                ),
            [l, r, i],
        ),
        g = (0, n.cf)(
            [d.A, h.A, u.A, v.A],
            () =>
                I(
                    { userId: i, guildId: r },
                    { ChannelStore: d.A, PermissionStore: h.A, PresenceStore: u.A, VoiceStateStore: v.A },
                ),
            [r, i],
        );
    return s.useMemo(() => P(f, g), [f, g]);
}
