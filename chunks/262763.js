"use strict";
n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(730852),
    a = n(134047),
    o = n(643501),
    l = n(976860),
    u = n(514581),
    c = n(741812),
    d = n(152007),
    _ = n(867455),
    h = n(495544),
    f = n(309010),
    p = n(977997),
    E = n(174459),
    m = n(389234),
    g = n(652215),
    A = n(64175);
let I = {
    async handleVoiceConnect(e) {
        let {
            channel: t,
            connected: I,
            needSubscriptionToAccess: T,
            locked: S = !1,
            routeDirectlyToChannel: y = !1,
            bypassChangeModal: N,
            bypassBlockedWarningModal: v,
            bypassGuildIdCheck: C = !1,
            transitionExtras: R,
        } = e;
        t.isThread() &&
            (await _.A.unarchiveThreadIfNecessary(t.id),
            d.A.hasJoined(t.id) || (await _.A.joinThread(t, "Join Voice")));
        let O = o.default.getRemoteSessionId(),
            b = p.A.getVoiceStateForSession(h.default.getId(), O),
            D = b?.channelId === t.id || f.A.getChannelId() === p.A.getCurrentClientVoiceChannelId(t.guild_id),
            L = c.A.getBlockedUsersForVoiceChannel(t.id),
            w = c.A.getIgnoredUsersForVoiceChannel(t.id),
            { autoNavigateChannel: M } = a.M.getConfig({ location: "handleVoiceChannelSelect" });
        return ((0, u.oE)(new Set([...L, ...w])) && (v = !0), v || S || I || (!(L.size > 0) && !(w.size > 0)))
            ? !N && !S && (0, m.H)(t)
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
                                              connected: I,
                                              needSubscriptionToAccess: T,
                                              routeDirectlyToChannel: y,
                                              locked: S,
                                              bypassChangeModal: !0,
                                          }),
                                      ),
                                  ...n,
                              });
                      });
                  })
                : (S || I || s.default.selectVoiceChannel(t.id),
                  !__OVERLAY__ &&
                      (I || D || T || y || M) &&
                      (function (e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                              n = arguments.length > 2 ? arguments[2] : void 0,
                              i = e.getGuildId();
                          if (null == i && !t)
                              throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                          (0, l.pX)(g.BVt.CHANNEL(i, e.id), n);
                      })(t, C, R),
                  !0)
            : new Promise((e) => {
                  (0, r.openModalLazy)(
                      async () => {
                          let { default: r } = await Promise.all([
                              n.e("1944"),
                              n.e("81113"),
                              n.e("21537"),
                              n.e("54048"),
                              n.e("18943"),
                              n.e("42234"),
                              n.e("65617"),
                              n.e("20577"),
                              n.e("83792"),
                              n.e("10117"),
                          ]).then(n.bind(n, 525828));
                          return (n) => {
                              let { onClose: s, transitionState: a } = n;
                              return (0, i.jsx)(r, {
                                  channelId: t.id,
                                  blockedUserIds: L,
                                  ignoredUserIds: w,
                                  transitionState: a,
                                  onClose: s,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: I,
                                              needSubscriptionToAccess: T,
                                              routeDirectlyToChannel: y,
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
                              E.default.track(g.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                  action: A.Qi.DISMISS,
                                  channel_id: t.id,
                                  blocked_user_ids: Array.from(L),
                                  ignored_user_ids: Array.from(w),
                                  warning_surface: A.gD.PRE_JOIN_MODAL,
                              });
                          },
                      },
                  );
              });
    },
};
