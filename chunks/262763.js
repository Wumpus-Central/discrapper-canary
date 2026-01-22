n.d(t, { A: () => A }), n(65821), n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(956793),
    s = n(643501),
    o = n(976860),
    l = n(158160),
    c = n(741812),
    u = n(152007),
    d = n(867455),
    f = n(961350),
    p = n(309010),
    _ = n(977997),
    h = n(954571),
    m = n(389234),
    g = n(652215),
    E = n(64175);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.getGuildId();
    if (null == n && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
    (0, o.pX)(g.BVt.CHANNEL(n, e.id));
}
let A = {
    async handleVoiceConnect(e) {
        let {
            channel: t,
            connected: o,
            needSubscriptionToAccess: b,
            locked: A = !1,
            routeDirectlyToChannel: v = !1,
            bypassChangeModal: S,
            bypassBlockedWarningModal: I,
            bypassGuildIdCheck: T = !1,
        } = e;
        t.isThread() &&
            (await d.A.unarchiveThreadIfNecessary(t.id),
            u.A.hasJoined(t.id) || (await d.A.joinThread(t, "Join Voice")));
        let C = s.default.getRemoteSessionId(),
            N = _.A.getVoiceStateForSession(f.default.getId(), C),
            R =
                (null == N ? void 0 : N.channelId) === t.id ||
                p.A.getChannelId() === _.A.getCurrentClientVoiceChannelId(t.guild_id),
            w = c.A.getBlockedUsersForVoiceChannel(t.id),
            P = c.A.getIgnoredUsersForVoiceChannel(t.id);
        return ((0, l.oE)(new Set([...w, ...P])) && (I = !0), I || A || o || (!(w.size > 0) && !(P.size > 0)))
            ? !S && !A && (0, m.H)(t)
                ? new Promise((e) => {
                      (0, i.mMO)(async () => {
                          let { default: i } = await n.e("12963").then(n.bind(n, 24814));
                          return (n) =>
                              (0, r.jsx)(
                                  i,
                                  y(
                                      {
                                          channel: t,
                                          onConfirm: () =>
                                              e(
                                                  this.handleVoiceConnect({
                                                      channel: t,
                                                      connected: o,
                                                      needSubscriptionToAccess: b,
                                                      routeDirectlyToChannel: v,
                                                      locked: A,
                                                      bypassChangeModal: !0,
                                                  }),
                                              ),
                                      },
                                      n,
                                  ),
                              );
                      });
                  })
                : (A || o || a.default.selectVoiceChannel(t.id), !__OVERLAY__ && (o || R || b || v) && O(t, T), !0)
            : new Promise((e) => {
                  (0, i.mMO)(
                      async () => {
                          let { default: i } = await n.e("32498").then(n.bind(n, 525828));
                          return (n) => {
                              let { onClose: a, transitionState: s } = n;
                              return (0, r.jsx)(i, {
                                  channelId: t.id,
                                  blockedUserIds: w,
                                  ignoredUserIds: P,
                                  transitionState: s,
                                  onClose: a,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: o,
                                              needSubscriptionToAccess: b,
                                              routeDirectlyToChannel: v,
                                              locked: A,
                                              bypassChangeModal: !0,
                                              bypassBlockedWarningModal: !0,
                                          }),
                                      ),
                              });
                          };
                      },
                      {
                          onCloseCallback: () => {
                              h.default.track(g.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                  action: E.Qi.DISMISS,
                                  channel_id: t.id,
                                  blocked_user_ids: Array.from(w),
                                  ignored_user_ids: Array.from(P),
                                  warning_surface: E.gD.PRE_JOIN_MODAL,
                              });
                          },
                      },
                  );
              });
    },
};
