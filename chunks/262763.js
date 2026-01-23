n.d(t, {
    A: () => A,
}),
    n(65821),
    n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(956793),
    s = n(134047),
    o = n(643501),
    l = n(976860),
    c = n(158160),
    u = n(741812),
    d = n(152007),
    f = n(867455),
    p = n(961350),
    _ = n(309010),
    h = n(977997),
    m = n(954571),
    g = n(389234),
    E = n(652215),
    y = n(64175);

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

function O(e) {
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

function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.getGuildId();
    if (null == n && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
    (0, l.pX)(E.BVt.CHANNEL(n, e.id));
}
let A = {
    async handleVoiceConnect(e) {
        let {
            channel: t,
            connected: l,
            needSubscriptionToAccess: b,
            locked: A = !1,
            routeDirectlyToChannel: I = !1,
            bypassChangeModal: S,
            bypassBlockedWarningModal: T,
            bypassGuildIdCheck: C = !1,
        } = e;
        t.isThread() &&
            (await f.A.unarchiveThreadIfNecessary(t.id),
            d.A.hasJoined(t.id) || (await f.A.joinThread(t, "Join Voice")));
        let N = o.default.getRemoteSessionId(),
            R = h.A.getVoiceStateForSession(p.default.getId(), N),
            w =
                (null == R ? void 0 : R.channelId) === t.id ||
                _.A.getChannelId() === h.A.getCurrentClientVoiceChannelId(t.guild_id),
            P = u.A.getBlockedUsersForVoiceChannel(t.id),
            D = u.A.getIgnoredUsersForVoiceChannel(t.id),
            { autoNavigateChannel: x } = s.M.getConfig({
                location: "handleVoiceChannelSelect",
            });
        return ((0, c.oE)(new Set([...P, ...D])) && (T = !0), T || A || l || (!(P.size > 0) && !(D.size > 0)))
            ? !S && !A && (0, g.H)(t)
                ? new Promise((e) => {
                      (0, i.mMO)(async () => {
                          let { default: i } = await n.e("12963").then(n.bind(n, 24814));
                          return (n) =>
                              (0, r.jsx)(
                                  i,
                                  O(
                                      {
                                          channel: t,
                                          onConfirm: () =>
                                              e(
                                                  this.handleVoiceConnect({
                                                      channel: t,
                                                      connected: l,
                                                      needSubscriptionToAccess: b,
                                                      routeDirectlyToChannel: I,
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
                : (A || l || a.default.selectVoiceChannel(t.id), !__OVERLAY__ && (l || w || b || I || x) && v(t, C), !0)
            : new Promise((e) => {
                  (0, i.mMO)(
                      async () => {
                          let { default: i } = await n.e("32498").then(n.bind(n, 525828));
                          return (n) => {
                              let { onClose: a, transitionState: s } = n;
                              return (0, r.jsx)(i, {
                                  channelId: t.id,
                                  blockedUserIds: P,
                                  ignoredUserIds: D,
                                  transitionState: s,
                                  onClose: a,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: l,
                                              needSubscriptionToAccess: b,
                                              routeDirectlyToChannel: I,
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
                              m.default.track(E.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                  action: y.Qi.DISMISS,
                                  channel_id: t.id,
                                  blocked_user_ids: Array.from(P),
                                  ignored_user_ids: Array.from(D),
                                  warning_surface: y.gD.PRE_JOIN_MODAL,
                              });
                          },
                      },
                  );
              });
    },
};
