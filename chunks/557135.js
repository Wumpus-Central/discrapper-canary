var i = r(411104);
var a = r(200651);
r(192379);
var o = r(481060),
    s = r(287734),
    l = r(258609),
    u = r(703656),
    c = r(414509),
    d = r(452369),
    f = r(569471),
    p = r(346479),
    h = r(314897),
    _ = r(944486),
    m = r(979651),
    g = r(626135),
    E = r(366297),
    v = r(981631),
    y = r(110223);
function b(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e.getGuildId();
    if (null == r && !n) throw Error('VoiceChannel, transitionTo: Channel does not have a guildId');
    (0, u.uL)(v.Z5c.CHANNEL(r, e.id));
}
n.Z = {
    async handleVoiceConnect(e) {
        let { channel: n, connected: i, needSubscriptionToAccess: u, locked: I = !1, routeDirectlyToChannel: T = !1, bypassChangeModal: S, bypassBlockedWarningModal: A, bypassGuildIdCheck: C = !1 } = e;
        n.isThread() && (await p.Z.unarchiveThreadIfNecessary(n.id), !f.Z.hasJoined(n.id) && (await p.Z.joinThread(n, 'Join Voice')));
        let N = l.Z.getRemoteSessionId(),
            R = m.Z.getVoiceStateForSession(h.default.getId(), N),
            O = (null == R ? void 0 : R.channelId) === n.id || _.Z.getChannelId() === m.Z.getCurrentClientVoiceChannelId(n.guild_id),
            D = d.Z.getBlockedUsersForVoiceChannel(n.id),
            x = d.Z.getIgnoredUsersForVoiceChannel(n.id);
        return ((0, c.B)(n.id) && (A = !0), A || I || i || (!(D.size > 0) && !(x.size > 0)))
            ? !S && !I && (0, E._)(n)
                ? new Promise((e) => {
                      (0, o.openModalLazy)(async () => {
                          let { default: o } = await r.e('65045').then(r.bind(r, 143782));
                          return (r) =>
                              (0, a.jsx)(o, {
                                  channel: n,
                                  onConfirm: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: n,
                                              connected: i,
                                              needSubscriptionToAccess: u,
                                              routeDirectlyToChannel: T,
                                              locked: I,
                                              bypassChangeModal: !0
                                          })
                                      ),
                                  ...r
                              });
                      });
                  })
                : (!I && !i && s.default.selectVoiceChannel(n.id), !__OVERLAY__ && (i || O || u || T) && b(n, C), !0)
            : new Promise((e) => {
                  (0, o.openModalLazy)(
                      async () => {
                          let { default: o } = await r.e('12858').then(r.bind(r, 404339));
                          return (r) => {
                              let { onClose: s, transitionState: l } = r;
                              return (0, a.jsx)(o, {
                                  channelId: n.id,
                                  blockedUserIds: D,
                                  ignoredUserIds: x,
                                  transitionState: l,
                                  onClose: s,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: n,
                                              connected: i,
                                              needSubscriptionToAccess: u,
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
                              g.default.track(v.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                  action: y.q.DISMISS,
                                  channel_id: n.id,
                                  blocked_user_ids: Array.from(D),
                                  ignored_user_ids: Array.from(x),
                                  warning_surface: y.fz.PRE_JOIN_MODAL
                              });
                          }
                      }
                  );
              });
    }
};
