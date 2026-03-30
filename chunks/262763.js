"use strict";
n.d(t, { A: () => T });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(956793),
    a = n(134047),
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
    E = n(389234),
    g = n(652215),
    A = n(64175);
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = e.getGuildId();
    if (null == r && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
    (0, l.pX)(g.BVt.CHANNEL(r, e.id), n);
}
let T = {
    async handleVoiceConnect(e) {
        let {
            channel: t,
            connected: l,
            needSubscriptionToAccess: T,
            locked: S = !1,
            routeDirectlyToChannel: y = !1,
            bypassChangeModal: v,
            bypassBlockedWarningModal: N,
            bypassGuildIdCheck: C = !1,
            transitionExtras: R,
        } = e;
        t.isThread() &&
            (await _.A.unarchiveThreadIfNecessary(t.id),
            d.A.hasJoined(t.id) || (await _.A.joinThread(t, "Join Voice")));
        let O = o.default.getRemoteSessionId(),
            b = h.A.getVoiceStateForSession(f.default.getId(), O),
            D = b?.channelId === t.id || p.A.getChannelId() === h.A.getCurrentClientVoiceChannelId(t.guild_id),
            L = c.A.getBlockedUsersForVoiceChannel(t.id),
            w = c.A.getIgnoredUsersForVoiceChannel(t.id),
            { autoNavigateChannel: M } = a.M.getConfig({ location: "handleVoiceChannelSelect" });
        return ((0, u.oE)(new Set([...L, ...w])) && (N = !0), N || S || l || (!(L.size > 0) && !(w.size > 0)))
            ? !v && !S && (0, E.H)(t)
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
                                              routeDirectlyToChannel: y,
                                              locked: S,
                                              bypassChangeModal: !0,
                                          }),
                                      ),
                                  ...n,
                              });
                      });
                  })
                : (S || l || s.default.selectVoiceChannel(t.id),
                  !__OVERLAY__ && (l || D || T || y || M) && I(t, C, R),
                  !0)
            : new Promise((e) => {
                  (0, i.mMO)(
                      async () => {
                          let { default: i } = await n.e("32498").then(n.bind(n, 525828));
                          return (n) => {
                              let { onClose: s, transitionState: a } = n;
                              return (0, r.jsx)(i, {
                                  channelId: t.id,
                                  blockedUserIds: L,
                                  ignoredUserIds: w,
                                  transitionState: a,
                                  onClose: s,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: l,
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
                              m.default.track(g.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
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
