"use strict";
n.d(t, { A: () => T });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(956793),
    s = n(134047),
    o = n(643501),
    l = n(976860),
    u = n(158160),
    c = n(741812),
    d = n(152007),
    _ = n(867455),
    f = n(961350),
    p = n(309010),
    h = n(977997),
    m = n(954571),
    g = n(389234),
    E = n(652215),
    A = n(64175);
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.getGuildId();
    if (null == n && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
    (0, l.pX)(E.BVt.CHANNEL(n, e.id));
}
let T = {
    async handleVoiceConnect(e) {
        let {
            channel: t,
            connected: l,
            needSubscriptionToAccess: T,
            locked: y = !1,
            routeDirectlyToChannel: S = !1,
            bypassChangeModal: v,
            bypassBlockedWarningModal: C,
            bypassGuildIdCheck: b = !1,
        } = e;
        t.isThread() &&
            (await _.A.unarchiveThreadIfNecessary(t.id),
            d.A.hasJoined(t.id) || (await _.A.joinThread(t, "Join Voice")));
        let N = o.default.getRemoteSessionId(),
            R = h.A.getVoiceStateForSession(f.default.getId(), N),
            O = R?.channelId === t.id || p.A.getChannelId() === h.A.getCurrentClientVoiceChannelId(t.guild_id),
            D = c.A.getBlockedUsersForVoiceChannel(t.id),
            L = c.A.getIgnoredUsersForVoiceChannel(t.id),
            { autoNavigateChannel: w } = s.M.getConfig({ location: "handleVoiceChannelSelect" });
        return ((0, u.oE)(new Set([...D, ...L])) && (C = !0), C || y || l || (!(D.size > 0) && !(L.size > 0)))
            ? !v && !y && (0, g.H)(t)
                ? new Promise((e) => {
                      (0, i.mMO)(async () => {
                          let { default: i } = await n.e("12963").then(n.bind(n, 24814));
                          return (n) =>
                              (0, r.jsx)(i, {
                                  channel: t,
                                  onConfirm: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: l,
                                              needSubscriptionToAccess: T,
                                              routeDirectlyToChannel: S,
                                              locked: y,
                                              bypassChangeModal: !0,
                                          }),
                                      ),
                                  ...n,
                              });
                      });
                  })
                : (y || l || a.default.selectVoiceChannel(t.id), !__OVERLAY__ && (l || O || T || S || w) && I(t, b), !0)
            : new Promise((e) => {
                  (0, i.mMO)(
                      async () => {
                          let { default: i } = await n.e("32498").then(n.bind(n, 525828));
                          return (n) => {
                              let { onClose: a, transitionState: s } = n;
                              return (0, r.jsx)(i, {
                                  channelId: t.id,
                                  blockedUserIds: D,
                                  ignoredUserIds: L,
                                  transitionState: s,
                                  onClose: a,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: l,
                                              needSubscriptionToAccess: T,
                                              routeDirectlyToChannel: S,
                                              locked: y,
                                              bypassChangeModal: !0,
                                              bypassBlockedWarningModal: !0,
                                          }),
                                      ),
                              });
                          };
                      },
                      {
                          onCloseCallback: () => {
                              m.default.track(E.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                  action: A.Qi.DISMISS,
                                  channel_id: t.id,
                                  blocked_user_ids: Array.from(D),
                                  ignored_user_ids: Array.from(L),
                                  warning_surface: A.gD.PRE_JOIN_MODAL,
                              });
                          },
                      },
                  );
              });
    },
};
