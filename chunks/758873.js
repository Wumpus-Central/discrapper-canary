i.d(t, { A: () => P, G: () => F });
var s = i(582128),
    n = i(17928),
    r = i(714114),
    a = i(87664),
    l = i(616356),
    c = i(280450),
    o = i(734057),
    d = i(916546),
    h = i(576705),
    u = i(290863),
    j = i(994500),
    x = i(461213),
    v = i(977997),
    f = i(321191),
    m = i(343129),
    A = i(489379),
    N = i(818348),
    g = i(731854);
let p = Object.freeze([]),
    C = {
        ApplicationStreamingStore: l.A,
        MediaEngineStore: d.Ay,
        PresenceStore: u.A,
        RelationshipStore: j.A,
        SelfPresenceStore: x.A,
        UserProfileStore: f.A,
    },
    E = { ChannelStore: o.A, PermissionStore: h.A, PresenceStore: u.A, VoiceStateStore: v.A },
    I = { ...C, ...E },
    S = Object.freeze({ voiceActivity: void 0, voiceChannel: void 0, voiceState: void 0 });
function _(e) {
    let { userId: t, currentUserId: i, guildId: s } = e,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
        r = null != t ? n.PresenceStore.getActivities(t) : p,
        l = (function (e) {
            let { userId: t, currentUserId: i, guildId: s } = e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C;
            return null == t
                ? N.cl.OFFLINE
                : t === i
                  ? n.SelfPresenceStore.getStatus()
                  : n.PresenceStore.getStatus(t, s);
        })({ userId: t, currentUserId: i, guildId: s }, n);
    return {
        activities: r,
        isOffline: l === N.cl.OFFLINE || l === N.cl.INVISIBLE,
        isPrivate: null != t && n.UserProfileStore.getUserProfile(t)?.private === !0,
        stream: n.MediaEngineStore.supports(g.O5.VIDEO)
            ? (0, a.M)(t, [n.ApplicationStreamingStore, n.RelationshipStore])
            : null,
    };
}
function T(e) {
    let { userId: t, guildId: i } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E,
        n = (0, r.t$)({ userId: t, guildId: i }, s);
    return null == n.voiceChannel
        ? S
        : {
              ...n,
              voiceActivity: (function (e, t) {
                  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E;
                  if (null != e && null != t)
                      return (
                          i.PresenceStore.findActivity(e, (s) =>
                              (0, A.c)({
                                  activity: s,
                                  voiceChannelId: t,
                                  voiceStateForSession: i.VoiceStateStore.getVoiceStateForSession(e, s.session_id),
                              }),
                          ) ?? void 0
                      );
              })(t, n.voiceChannel.id, s),
          };
}
function w(e, t) {
    let { activities: i, isOffline: s, isPrivate: n, stream: r } = e,
        { voiceActivity: a, voiceChannel: l, voiceState: c } = t,
        o = (0, m.U)(i);
    return {
        cards: s ? [] : (0, m.I)({ stream: r, live: o, voiceChannel: l, voiceActivity: a, isPrivate: n }),
        isOffline: s,
        isPrivate: n,
        live: o,
        stream: r,
        voiceActivity: a,
        voiceChannel: l,
        voiceState: c,
    };
}
function F(e) {
    let { userId: t, currentUserId: i, guildId: s } = e,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
    return w(_({ userId: t, currentUserId: i ?? c.default.getId(), guildId: s }, n), T({ userId: t, guildId: s }, n));
}
function P(e) {
    let { userId: t, currentUserId: i, guildId: r } = e,
        a = (0, n.bG)([c.default], () => i ?? c.default.getId()),
        m = (0, n.cf)(
            [l.A, d.Ay, u.A, j.A, x.A, f.A],
            () =>
                _(
                    { userId: t, currentUserId: a, guildId: r },
                    {
                        ApplicationStreamingStore: l.A,
                        MediaEngineStore: d.Ay,
                        PresenceStore: u.A,
                        RelationshipStore: j.A,
                        SelfPresenceStore: x.A,
                        UserProfileStore: f.A,
                    },
                ),
            [a, r, t],
        ),
        A = (0, n.cf)(
            [o.A, h.A, u.A, v.A],
            () =>
                T(
                    { userId: t, guildId: r },
                    { ChannelStore: o.A, PermissionStore: h.A, PresenceStore: u.A, VoiceStateStore: v.A },
                ),
            [r, t],
        );
    return s.useMemo(() => w(m, A), [m, A]);
}
