"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(956793),
    a = n(134047),
    o = n(643501),
    l = n(976860),
    _ = n(514581),
    d = n(741812),
    u = n(152007),
    c = n(867455),
    E = n(495544),
    h = n(309010),
    m = n(977997),
    f = n(954571),
    g = n(389234),
    I = n(652215),
    A = n(64175);
let p = {
    async handleVoiceConnect(e) {
        let {
            channel: t,
            connected: p,
            needSubscriptionToAccess: T,
            locked: S = !1,
            routeDirectlyToChannel: N = !1,
            bypassChangeModal: O,
            bypassBlockedWarningModal: R,
            bypassGuildIdCheck: C = !1,
            transitionExtras: y,
        } = e;
        t.isThread() &&
            (await c.A.unarchiveThreadIfNecessary(t.id),
            u.A.hasJoined(t.id) || (await c.A.joinThread(t, "Join Voice")));
        let D = o.default.getRemoteSessionId(),
            L = m.A.getVoiceStateForSession(E.default.getId(), D),
            v = L?.channelId === t.id || h.A.getChannelId() === m.A.getCurrentClientVoiceChannelId(t.guild_id),
            w = d.A.getBlockedUsersForVoiceChannel(t.id),
            P = d.A.getIgnoredUsersForVoiceChannel(t.id),
            { autoNavigateChannel: b } = a.M.getConfig({ location: "handleVoiceChannelSelect" });
        return ((0, _.oE)(new Set([...w, ...P])) && (R = !0), R || S || p || (!(w.size > 0) && !(P.size > 0)))
            ? !O && !S && (0, g.H)(t)
                ? new Promise((e) => {
                      (0, r.openModalLazy)(async () => {
                          let { default: r } = await n.e("12963").then(n.bind(n, 24814));
                          return (n) =>
                              (0, i.jsx)(r, {
                                  channel: t,
                                  onConfirm: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: p,
                                              needSubscriptionToAccess: T,
                                              routeDirectlyToChannel: N,
                                              locked: S,
                                              bypassChangeModal: !0,
                                          }),
                                      ),
                                  ...n,
                              });
                      });
                  })
                : (S || p || s.default.selectVoiceChannel(t.id),
                  !__OVERLAY__ &&
                      (p || v || T || N || b) &&
                      (function (e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                              n = arguments.length > 2 ? arguments[2] : void 0,
                              i = e.getGuildId();
                          if (null == i && !t)
                              throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                          (0, l.pX)(I.BVt.CHANNEL(i, e.id), n);
                      })(t, C, y),
                  !0)
            : new Promise((e) => {
                  (0, r.openModalLazy)(
                      async () => {
                          let { default: r } = await Promise.all([
                              n.e("61748"),
                              n.e("19364"),
                              n.e("21537"),
                              n.e("18943"),
                              n.e("65617"),
                              n.e("42234"),
                              n.e("20577"),
                              n.e("83792"),
                              n.e("10117"),
                          ]).then(n.bind(n, 525828));
                          return (n) => {
                              let { onClose: s, transitionState: a } = n;
                              return (0, i.jsx)(r, {
                                  channelId: t.id,
                                  blockedUserIds: w,
                                  ignoredUserIds: P,
                                  transitionState: a,
                                  onClose: s,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: p,
                                              needSubscriptionToAccess: T,
                                              routeDirectlyToChannel: N,
                                              locked: S,
                                              bypassChangeModal: !0,
                                              bypassBlockedWarningModal: !0,
                                          }),
                                      ),
                              });
                          };
                      },
                      {
                          onCloseCallback: () => {
                              f.default.track(I.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                  action: A.Qi.DISMISS,
                                  channel_id: t.id,
                                  blocked_user_ids: Array.from(w),
                                  ignored_user_ids: Array.from(P),
                                  warning_surface: A.gD.PRE_JOIN_MODAL,
                              });
                          },
                      },
                  );
              });
    },
};
