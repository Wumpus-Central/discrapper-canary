i.d(t, { A: () => P, G: () => w });
var s = i(582128),
    n = i(17928),
    r = i(714114),
    l = i(87664),
    a = i(616356),
    c = i(280450),
    o = i(734057),
    d = i(453028),
    u = i(576705),
    h = i(290863),
    j = i(994500),
    x = i(461213),
    v = i(977997),
    m = i(321191),
    f = i(343129),
    N = i(489379),
    A = i(818348),
    g = i(731854);
let p = Object.freeze([]),
    C = {
        ApplicationStreamingStore: a.A,
        MediaEngineStore: d.Ay,
        PresenceStore: h.A,
        RelationshipStore: j.A,
        SelfPresenceStore: x.A,
        UserProfileStore: m.A,
    },
    S = { ChannelStore: o.A, PermissionStore: u.A, PresenceStore: h.A, VoiceStateStore: v.A },
    I = { ...C, ...S },
    E = Object.freeze({ voiceActivity: void 0, voiceChannel: void 0, voiceState: void 0 });
function T(e) {
    let { userId: t, currentUserId: i, guildId: s } = e,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
        r = null != t ? n.PresenceStore.getActivities(t) : p,
        a = (function (e) {
            let { userId: t, currentUserId: i, guildId: s } = e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C;
            return null == t
                ? A.cl.OFFLINE
                : t === i
                  ? n.SelfPresenceStore.getStatus()
                  : n.PresenceStore.getStatus(t, s);
        })({ userId: t, currentUserId: i, guildId: s }, n);
    return {
        activities: r,
        isOffline: a === A.cl.OFFLINE || a === A.cl.INVISIBLE,
        isPrivate: null != t && n.UserProfileStore.getUserProfile(t)?.private === !0,
        stream: n.MediaEngineStore.supports(g.O5.VIDEO)
            ? (0, l.M)(t, [n.ApplicationStreamingStore, n.RelationshipStore])
            : null,
    };
}
function _(e) {
    let { userId: t, guildId: i } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S,
        n = (0, r.t$)({ userId: t, guildId: i }, s);
    return null == n.voiceChannel
        ? E
        : {
              ...n,
              voiceActivity: (function (e, t) {
                  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S;
                  if (null != e && null != t)
                      return (
                          i.PresenceStore.findActivity(e, (s) =>
                              (0, N.c)({
                                  activity: s,
                                  voiceChannelId: t,
                                  voiceStateForSession: i.VoiceStateStore.getVoiceStateForSession(e, s.session_id),
                              }),
                          ) ?? void 0
                      );
              })(t, n.voiceChannel.id, s),
          };
}
function y(e, t) {
    let { activities: i, isOffline: s, isPrivate: n, stream: r } = e,
        { voiceActivity: l, voiceChannel: a, voiceState: c } = t,
        o = (0, f.U)(i);
    return {
        cards: s ? [] : (0, f.I)({ stream: r, live: o, voiceChannel: a, voiceActivity: l, isPrivate: n }),
        isOffline: s,
        isPrivate: n,
        live: o,
        stream: r,
        voiceActivity: l,
        voiceChannel: a,
        voiceState: c,
    };
}
function w(e) {
    let { userId: t, currentUserId: i, guildId: s } = e,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
    return y(T({ userId: t, currentUserId: i ?? c.default.getId(), guildId: s }, n), _({ userId: t, guildId: s }, n));
}
function P(e) {
    let { userId: t, currentUserId: i, guildId: r } = e,
        l = (0, n.bG)([c.default], () => i ?? c.default.getId()),
        f = (0, n.cf)(
            [a.A, d.Ay, h.A, j.A, x.A, m.A],
            () =>
                T(
                    { userId: t, currentUserId: l, guildId: r },
                    {
                        ApplicationStreamingStore: a.A,
                        MediaEngineStore: d.Ay,
                        PresenceStore: h.A,
                        RelationshipStore: j.A,
                        SelfPresenceStore: x.A,
                        UserProfileStore: m.A,
                    },
                ),
            [l, r, t],
        ),
        N = (0, n.cf)(
            [o.A, u.A, h.A, v.A],
            () =>
                _(
                    { userId: t, guildId: r },
                    { ChannelStore: o.A, PermissionStore: u.A, PresenceStore: h.A, VoiceStateStore: v.A },
                ),
            [r, t],
        );
    return s.useMemo(() => y(f, N), [f, N]);
}
