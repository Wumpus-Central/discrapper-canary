n.d(t, { Z: () => y }), n(411104);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(287734),
    s = n(258609),
    o = n(703656),
    l = n(414509),
    u = n(452369),
    c = n(569471),
    d = n(346479),
    f = n(314897),
    _ = n(944486),
    p = n(979651),
    h = n(626135),
    m = n(366297),
    g = n(981631),
    E = n(110223);
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.getGuildId();
    if (null == n && !t) throw Error('VoiceChannel, transitionTo: Channel does not have a guildId');
    (0, o.uL)(g.Z5c.CHANNEL(n, e.id));
}
let y = {
    async handleVoiceConnect(e) {
        let { channel: t, connected: o, needSubscriptionToAccess: y, locked: I = !1, routeDirectlyToChannel: T = !1, bypassChangeModal: b, bypassBlockedWarningModal: S, bypassGuildIdCheck: A = !1 } = e;
        t.isThread() && (await d.Z.unarchiveThreadIfNecessary(t.id), c.Z.hasJoined(t.id) || (await d.Z.joinThread(t, 'Join Voice')));
        let N = s.Z.getRemoteSessionId(),
            C = p.Z.getVoiceStateForSession(f.default.getId(), N),
            R = (null == C ? void 0 : C.channelId) === t.id || _.Z.getChannelId() === p.Z.getCurrentClientVoiceChannelId(t.guild_id),
            O = u.Z.getBlockedUsersForVoiceChannel(t.id),
            D = u.Z.getIgnoredUsersForVoiceChannel(t.id);
        return ((0, l.B)(t.id) && (S = !0), S || I || o || (!(O.size > 0) && !(D.size > 0)))
            ? !b && !I && (0, m._)(t)
                ? new Promise((e) => {
                      (0, r.ZDy)(async () => {
                          let { default: r } = await n.e('65045').then(n.bind(n, 143782));
                          return (n) =>
                              (0, i.jsx)(r, {
                                  channel: t,
                                  onConfirm: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: o,
                                              needSubscriptionToAccess: y,
                                              routeDirectlyToChannel: T,
                                              locked: I,
                                              bypassChangeModal: !0
                                          })
                                      ),
                                  ...n
                              });
                      });
                  })
                : (I || o || a.default.selectVoiceChannel(t.id), !__OVERLAY__ && (o || R || y || T) && v(t, A), !0)
            : new Promise((e) => {
                  (0, r.ZDy)(
                      async () => {
                          let { default: r } = await n.e('12858').then(n.bind(n, 404339));
                          return (n) => {
                              let { onClose: a, transitionState: s } = n;
                              return (0, i.jsx)(r, {
                                  channelId: t.id,
                                  blockedUserIds: O,
                                  ignoredUserIds: D,
                                  transitionState: s,
                                  onClose: a,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: o,
                                              needSubscriptionToAccess: y,
                                              routeDirectlyToChannel: T,
                                              locked: I,
                                              bypassChangeModal: !0,
                                              bypassBlockedWarningModal: !0
                                          })
                                      )
                              });
                          };
                      },
                      {
                          onCloseCallback: () => {
                              h.default.track(g.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                  action: E.q.DISMISS,
                                  channel_id: t.id,
                                  blocked_user_ids: Array.from(O),
                                  ignored_user_ids: Array.from(D),
                                  warning_surface: E.fz.PRE_JOIN_MODAL
                              });
                          }
                      }
                  );
              });
    }
};
