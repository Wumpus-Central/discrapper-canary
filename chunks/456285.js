"use strict";
n.d(t, { A: () => w });
var i = n(627968),
    r = n(64700),
    s = n(688810),
    a = n(183555),
    o = n(17928),
    l = n(714114),
    u = n(87664),
    c = n(616356),
    d = n(495544),
    _ = n(734057),
    h = n(576705),
    f = n(290863),
    p = n(994500),
    E = n(461213),
    m = n(977997),
    g = n(841595),
    A = n(343129),
    I = n(489379),
    T = n(818348);
let S = Object.freeze([]),
    y = {
        ApplicationStreamingStore: c.A,
        PresenceStore: f.A,
        RelationshipStore: p.A,
        SelfPresenceStore: E.A,
        UserProfileStore: g.A,
    },
    C = { ChannelStore: _.A, PermissionStore: h.A, PresenceStore: f.A, VoiceStateStore: m.A };
({ ...y, ...C });
let N = Object.freeze({ voiceActivity: void 0, voiceChannel: void 0, voiceState: void 0 });
var v = n(80330),
    R = n(402857),
    O = n(64622),
    b = n(986712),
    D = n(518477),
    L = n(375708);
function w(e) {
    let { user: t, currentUser: n, guildId: w, onOpenUserProfileModal: M, onClose: P } = e,
        { analyticsLocations: x } = (0, s.Ay)(),
        { trackUserProfileAction: k } = (0, a.NJ)(),
        { cards: U, isOffline: G } = (function (e) {
            let { userId: t, currentUserId: n, guildId: i } = e,
                s = (0, o.bG)([d.default], () => n ?? d.default.getId()),
                a = (0, o.cf)(
                    [c.A, f.A, p.A, E.A, g.A],
                    () =>
                        (function (e) {
                            let { userId: t, currentUserId: n, guildId: i } = e,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y,
                                s = null != t ? r.PresenceStore.getActivities(t) : S,
                                a = (function (e) {
                                    let { userId: t, currentUserId: n, guildId: i } = e,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                                    return null == t
                                        ? T.cl.OFFLINE
                                        : t === n
                                          ? r.SelfPresenceStore.getStatus()
                                          : r.PresenceStore.getStatus(t, i);
                                })({ userId: t, currentUserId: n, guildId: i }, r);
                            return {
                                activities: s,
                                isOffline: a === T.cl.OFFLINE || a === T.cl.INVISIBLE,
                                isPrivate: null != t && r.UserProfileStore.getUserProfile(t)?.private === !0,
                                stream: (0, u.M)(t, [r.ApplicationStreamingStore, r.RelationshipStore]),
                            };
                        })(
                            { userId: t, currentUserId: s, guildId: i },
                            {
                                ApplicationStreamingStore: c.A,
                                PresenceStore: f.A,
                                RelationshipStore: p.A,
                                SelfPresenceStore: E.A,
                                UserProfileStore: g.A,
                            },
                        ),
                    [s, i, t],
                ),
                v = (0, o.cf)(
                    [_.A, h.A, f.A, m.A],
                    () =>
                        (function (e) {
                            let { userId: t, guildId: n } = e,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
                                r = (0, l.t$)({ userId: t, guildId: n }, i);
                            return null == r.voiceChannel
                                ? N
                                : {
                                      ...r,
                                      voiceActivity: (function (e, t) {
                                          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C;
                                          if (null != e && null != t)
                                              return (
                                                  n.PresenceStore.findActivity(e, (i) =>
                                                      (0, I.c)({
                                                          activity: i,
                                                          voiceChannelId: t,
                                                          voiceStateForSession:
                                                              n.VoiceStateStore.getVoiceStateForSession(
                                                                  e,
                                                                  i.session_id,
                                                              ),
                                                      }),
                                                  ) ?? void 0
                                              );
                                      })(t, r.voiceChannel.id, i),
                                  };
                        })(
                            { userId: t, guildId: i },
                            { ChannelStore: _.A, PermissionStore: h.A, PresenceStore: f.A, VoiceStateStore: m.A },
                        ),
                    [i, t],
                );
            return r.useMemo(
                () =>
                    (function (e, t) {
                        let { activities: n, isOffline: i, isPrivate: r, stream: s } = e,
                            { voiceActivity: a, voiceChannel: o, voiceState: l } = t,
                            u = (0, A.U)(n);
                        return {
                            cards: i
                                ? []
                                : (0, A.I)({ stream: s, live: u, voiceChannel: o, voiceActivity: a, isPrivate: r }),
                            isOffline: i,
                            isPrivate: r,
                            live: u,
                            stream: s,
                            voiceActivity: a,
                            voiceChannel: o,
                            voiceState: l,
                        };
                    })(a, v),
                [a, v],
            );
        })({ userId: t.id, currentUserId: n.id, guildId: w }),
        F = r.useCallback(
            (e) => {
                let r = { ...e, user: t, currentUser: n, onClose: P };
                return U.map((e, t) =>
                    (function (e, t, n) {
                        switch (e.type) {
                            case "stream":
                                return (0, i.jsx)(O.A, { stream: e.stream, ...n }, "stream");
                            case "live":
                                return (0, i.jsx)(R.A, { activity: e.activity, ...n }, `live-${t}`);
                            case "voice":
                                return (0, i.jsx)(b.A, { voiceChannel: e.voiceChannel, ...n }, "voice");
                        }
                    })(e, t, r),
                );
            },
            [U, n, P, t],
        );
    return G
        ? null
        : (0, i.jsx)(v.A, {
              renderCards: F,
              heading: L.intl.string(L.t.J6STd9),
              onExpand: () => {
                  k({ action: "PRESS_SHOW_MORE_ACTIVITY", analyticsLocations: x }), M?.({ tabSection: D.RP.ACTIVITY });
              },
          });
}
