i.d(t, { A: () => U, G: () => M });
var s = i(582128),
    n = i(17928),
    r = i(714114),
    l = i(87664),
    a = i(616356),
    c = i(280450),
    d = i(734057),
    o = i(360906),
    h = i(576705),
    u = i(290863),
    j = i(994500),
    x = i(461213),
    v = i(977997),
    m = i(321191),
    f = i(343129),
    g = i(489379),
    N = i(818348),
    A = i(731854);
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
    let { userId: t, currentUserId: i, guildId: s } = e,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w,
        r = null != t ? n.PresenceStore.getActivities(t) : p,
        a = (function (e) {
            let { userId: t, currentUserId: i, guildId: s } = e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
            return null == t
                ? N.cl.OFFLINE
                : t === i
                  ? n.SelfPresenceStore.getStatus()
                  : n.PresenceStore.getStatus(t, s);
        })({ userId: t, currentUserId: i, guildId: s }, n);
    return {
        activities: r,
        isOffline: a === N.cl.OFFLINE || a === N.cl.INVISIBLE,
        isPrivate: null != t && n.UserProfileStore.getUserProfile(t)?.private === !0,
        stream: n.MediaEngineStore.supports(A.O5.VIDEO)
            ? (0, l.M)(t, [n.ApplicationStreamingStore, n.RelationshipStore])
            : null,
    };
}
function I(e) {
    let { userId: t, guildId: i } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S,
        n = (0, r.t$)({ userId: t, guildId: i }, s);
    return null == n.voiceChannel
        ? b
        : {
              ...n,
              voiceActivity: (function (e, t) {
                  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S;
                  if (null != e && null != t)
                      return (
                          i.PresenceStore.findActivity(e, (s) =>
                              (0, g.c)({
                                  activity: s,
                                  voiceChannelId: t,
                                  voiceStateForSession: i.VoiceStateStore.getVoiceStateForSession(e, s.session_id),
                              }),
                          ) ?? void 0
                      );
              })(t, n.voiceChannel.id, s),
          };
}
function P(e, t) {
    let { activities: i, isOffline: s, isPrivate: n, stream: r } = e,
        { voiceActivity: l, voiceChannel: a, voiceState: c } = t,
        d = (0, f.U)(i);
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
    let { userId: t, currentUserId: i, guildId: s } = e,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
    return P(C({ userId: t, currentUserId: i ?? c.default.getId(), guildId: s }, n), I({ userId: t, guildId: s }, n));
}
function U(e) {
    let { userId: t, currentUserId: i, guildId: r } = e,
        l = (0, n.bG)([c.default], () => i ?? c.default.getId()),
        f = (0, n.cf)(
            [a.A, o.Ay, u.A, j.A, x.A, m.A],
            () =>
                C(
                    { userId: t, currentUserId: l, guildId: r },
                    {
                        ApplicationStreamingStore: a.A,
                        MediaEngineStore: o.Ay,
                        PresenceStore: u.A,
                        RelationshipStore: j.A,
                        SelfPresenceStore: x.A,
                        UserProfileStore: m.A,
                    },
                ),
            [l, r, t],
        ),
        g = (0, n.cf)(
            [d.A, h.A, u.A, v.A],
            () =>
                I(
                    { userId: t, guildId: r },
                    { ChannelStore: d.A, PermissionStore: h.A, PresenceStore: u.A, VoiceStateStore: v.A },
                ),
            [r, t],
        );
    return s.useMemo(() => P(f, g), [f, g]);
}
