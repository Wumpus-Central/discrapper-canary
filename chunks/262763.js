"use strict";
n.d(t, { A: () => T });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(730852),
    s = n(643501),
    l = n(976860),
    o = n(514581),
    d = n(741812),
    c = n(152007),
    u = n(867455),
    _ = n(280450),
    E = n(309010),
    A = n(977997),
    h = n(174459),
    I = n(389234),
    f = n(652215),
    p = n(64175);
let T = {
    async handleVoiceConnect(e) {
        let {
            channel: t,
            connected: T,
            needSubscriptionToAccess: m,
            locked: g = !1,
            routeDirectlyToChannel: S = !1,
            bypassChangeModal: N,
            bypassBlockedWarningModal: C,
            bypassGuildIdCheck: O = !1,
            transitionExtras: R,
        } = e;
        t.isThread() &&
            (await u.A.unarchiveThreadIfNecessary(t.id),
            c.A.hasJoined(t.id) || (await u.A.joinThread(t, "Join Voice")));
        let L = s.default.getRemoteSessionId(),
            y = A.A.getVoiceStateForSession(_.default.getId(), L),
            D = y?.channelId === t.id || E.Ay.getChannelId() === A.A.getCurrentClientVoiceChannelId(t.guild_id),
            v = d.A.getBlockedUsersForVoiceChannel(t.id),
            b = d.A.getIgnoredUsersForVoiceChannel(t.id);
        return ((0, o.oE)(new Set([...v, ...b])) && (C = !0), C || g || T || (!(v.size > 0) && !(b.size > 0)))
            ? !N && !g && (0, I.H)(t)
                ? new Promise((e) => {
                      (0, r.openModalLazy)(async () => {
                          let { default: r } = await n.e("412963").then(n.bind(n, 24814));
                          return (n) =>
                              (0, i.jsx)(r, {
                                  channel: t,
                                  onConfirm: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: T,
                                              needSubscriptionToAccess: m,
                                              routeDirectlyToChannel: S,
                                              locked: g,
                                              bypassChangeModal: !0,
                                          }),
                                      ),
                                  ...n,
                              });
                      });
                  })
                : (g || T || a.default.selectVoiceChannel(t.id),
                  !__OVERLAY__ &&
                      (T || D || m || S) &&
                      (function (e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                              n = arguments.length > 2 ? arguments[2] : void 0,
                              i = e.getGuildId();
                          if (null == i && !t)
                              throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                          (0, l.pX)(f.BVt.CHANNEL(i, e.id), n);
                      })(t, O, R),
                  !0)
            : new Promise((e) => {
                  (0, r.openModalLazy)(
                      async () => {
                          let { default: r } = await Promise.all([
                              n.e("533158"),
                              n.e("893909"),
                              n.e("524434"),
                              n.e("921327"),
                              n.e("722640"),
                              n.e("481647"),
                              n.e("418943"),
                              n.e("342234"),
                              n.e("24922"),
                              n.e("565617"),
                              n.e("420577"),
                              n.e("383792"),
                              n.e("910117"),
                          ]).then(n.bind(n, 525828));
                          return (n) => {
                              let { onClose: a, transitionState: s } = n;
                              return (0, i.jsx)(r, {
                                  channelId: t.id,
                                  blockedUserIds: v,
                                  ignoredUserIds: b,
                                  transitionState: s,
                                  onClose: a,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: T,
                                              needSubscriptionToAccess: m,
                                              routeDirectlyToChannel: S,
                                              locked: g,
                                              bypassChangeModal: !0,
                                              bypassBlockedWarningModal: !0,
                                          }),
                                      ),
                              });
                          };
                      },
                      {
                          onCloseCallback: () => {
                              h.default.track(f.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                  action: p.Qi.DISMISS,
                                  channel_id: t.id,
                                  blocked_user_ids: Array.from(v),
                                  ignored_user_ids: Array.from(b),
                                  warning_surface: p.gD.PRE_JOIN_MODAL,
                              });
                          },
                      },
                  );
              });
    },
};
