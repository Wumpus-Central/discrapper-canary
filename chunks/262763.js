"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(730852),
    a = n(643501),
    o = n(976860),
    l = n(514581),
    u = n(741812),
    c = n(152007),
    d = n(867455),
    _ = n(495544),
    h = n(309010),
    f = n(977997),
    p = n(174459),
    E = n(389234),
    m = n(652215),
    g = n(64175);
let A = {
    async handleVoiceConnect(e) {
        let {
            channel: t,
            connected: A,
            needSubscriptionToAccess: I,
            locked: T = !1,
            routeDirectlyToChannel: S = !1,
            bypassChangeModal: y,
            bypassBlockedWarningModal: N,
            bypassGuildIdCheck: v = !1,
            transitionExtras: C,
        } = e;
        t.isThread() &&
            (await d.A.unarchiveThreadIfNecessary(t.id),
            c.A.hasJoined(t.id) || (await d.A.joinThread(t, "Join Voice")));
        let R = a.default.getRemoteSessionId(),
            O = f.A.getVoiceStateForSession(_.default.getId(), R),
            b = O?.channelId === t.id || h.A.getChannelId() === f.A.getCurrentClientVoiceChannelId(t.guild_id),
            D = u.A.getBlockedUsersForVoiceChannel(t.id),
            L = u.A.getIgnoredUsersForVoiceChannel(t.id);
        return ((0, l.oE)(new Set([...D, ...L])) && (N = !0), N || T || A || (!(D.size > 0) && !(L.size > 0)))
            ? !y && !T && (0, E.H)(t)
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
                                              connected: A,
                                              needSubscriptionToAccess: I,
                                              routeDirectlyToChannel: S,
                                              locked: T,
                                              bypassChangeModal: !0,
                                          }),
                                      ),
                                  ...n,
                              });
                      });
                  })
                : (T || A || s.default.selectVoiceChannel(t.id),
                  !__OVERLAY__ &&
                      (A || b || I || S) &&
                      (function (e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                              n = arguments.length > 2 ? arguments[2] : void 0,
                              i = e.getGuildId();
                          if (null == i && !t)
                              throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                          (0, o.pX)(m.BVt.CHANNEL(i, e.id), n);
                      })(t, v, C),
                  !0)
            : new Promise((e) => {
                  (0, r.openModalLazy)(
                      async () => {
                          let { default: r } = await Promise.all([
                              n.e("76568"),
                              n.e("56533"),
                              n.e("21537"),
                              n.e("54048"),
                              n.e("93924"),
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
                                  blockedUserIds: D,
                                  ignoredUserIds: L,
                                  transitionState: a,
                                  onClose: s,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: A,
                                              needSubscriptionToAccess: I,
                                              routeDirectlyToChannel: S,
                                              locked: T,
                                              bypassChangeModal: !0,
                                              bypassBlockedWarningModal: !0,
                                          }),
                                      ),
                              });
                          };
                      },
                      {
                          onCloseCallback: () => {
                              p.default.track(m.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                  action: g.Qi.DISMISS,
                                  channel_id: t.id,
                                  blocked_user_ids: Array.from(D),
                                  ignored_user_ids: Array.from(L),
                                  warning_surface: g.gD.PRE_JOIN_MODAL,
                              });
                          },
                      },
                  );
              });
    },
};
