n.d(e, { pD: () => tr, cH: () => ta }), n(321073);
var i = n(731738),
    l = n(136722),
    a = n(17928),
    r = n(506774),
    o = n(765178),
    u = n(228366),
    s = n(308528),
    d = n(367513),
    c = n(66834),
    A = n(264686),
    f = n(730852),
    _ = n(77729),
    E = n(883600),
    N = n(963027),
    T = n(47167),
    g = n(435470),
    I = n(707592),
    h = n(741231),
    C = n(380335),
    S = n(320095),
    p = n(807393),
    O = n(535586),
    m = n(944043),
    y = n(4043),
    U = n(695515),
    P = n(976860),
    D = n(378570),
    R = n(790535),
    v = n(446600),
    L = n(747926),
    k = n(885386),
    G = n(718446),
    w = n(260509),
    V = n(734057),
    M = n(71393),
    b = n(232835),
    F = n(803224),
    W = n(576705),
    H = n(568548),
    Y = n(994500),
    B = n(309010),
    x = n(461213),
    K = n(351906),
    q = n(870570),
    J = n(287809),
    j = n(977997),
    X = n(174459),
    $ = n(562153),
    z = n(723702),
    Q = n(427262),
    Z = n(479975),
    tt = n(652215),
    te = n(988794),
    tn = n(672396),
    ti = n(355097),
    tl = n(375708);
let ta = "message1",
    tr = 0.4,
    to = _.A?.features.supports("notifications") ? 20 : 1,
    tu = "discord_dismissed_notification_shown",
    ts = document.hasFocus(),
    td = null,
    tc = new Set(),
    tA = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    tf = new (class {
        _channels = {};
        track(t, e, n) {
            let i = this._channels[t];
            for (
                null == i && ((i = []), (this._channels[t] = i)), i.push({ notification: e, trackingProps: n });
                i.length > to;
            ) {
                let t = i.shift();
                t?.notification?.close != null &&
                    (t.notification.close(),
                    X.default.track(tt.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...t.trackingProps }));
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e &&
                (delete this._channels[t],
                e.forEach((t) => {
                    let { notification: e, trackingProps: n } = t;
                    e.close(), X.default.track(tt.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function t_() {
    return !!(
        F.A.getDesktopType() === tt.nRU.NEVER ||
        x.A.getStatus() === tt.clD.DND ||
        k.NO.getSetting() ||
        U.A.isCurrentUserInRestrictedHours()
    );
}
function tE(t) {
    p.A.increment({
        name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
        tags: [`reason:${t ? "played" : "disabled_by_user"}`],
    });
}
function tN(t) {
    return null != j.A.getVoiceStateForChannel(t);
}
class tT extends a.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(E.A, V.A, U.A, M.A, C.A, b.A, F.A, W.A, H.Ay, Y.A, B.Ay, x.A, v.A, K.A, q.A, J.default, j.A);
    }
}
new tT(
    u.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                  let { enabled: e } = t;
                  e !== tt.kCE.ENABLED ||
                      z.isPlatformEmbedded ||
                      Z.A.showNotification(
                          n(705194),
                          tl.intl.string(tl.t.VSgOVg),
                          tl.intl.string(tl.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: ta,
                              volume: tr,
                              tag: "hello",
                              onClick: () => {
                                  window.focus();
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              NOTIFICATION_CREATE: function (t) {
                  let { icon: e, title: n, body: i, trackingProps: l, options: a } = t;
                  return !t_() && (Z.A.showNotification(e, n, i, l, a), !1);
              },
              WINDOW_FOCUS: function (t) {
                  if ((ts = t.focused)) {
                      let t = B.Ay.getChannelId();
                      null != t && tf.clearChannel(t);
                  }
              },
              MESSAGE_CREATE: function (t) {
                  var e;
                  let { channelId: l, message: a, optimistic: r } = t;
                  if (r) return !1;
                  let s = V.A.getChannel(l),
                      c = J.default.getUser(a.author?.id),
                      f = J.default.getCurrentUser();
                  if (null == s || null == c || null == f) return !1;
                  let _ = b.A.getMessage(l, a.id) ?? (0, S.rh)(a),
                      T = H.Ay.getMentionCount(l);
                  (0, H.Wm)(_, f) && T > 0 && o.O.announce((0, N.Ay)({ channel: s, mentionCount: T }));
                  let g = (0, m.lx)(a, l, !ts),
                      I = F.A.getNotifyMessagesInSelectedChannel() && (0, m.kY)(a, l);
                  if (!g && !I) return !1;
                  if (U.A.isCurrentUserInRestrictedHours())
                      return (
                          p.A.increment({
                              name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:restricted_hours"],
                          }),
                          !1
                      );
                  if (q.A.hasAction())
                      return (
                          p.A.increment({
                              name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:required_action"],
                          }),
                          !1
                      );
                  if (
                      a.type === tt.lAJ.CHANGELOG &&
                      (null == a.changelog_id || E.A.latestChangelogId() !== a.changelog_id)
                  )
                      return !1;
                  let h = !F.A.isSoundDisabled(ta);
                  if ((I && (tE(h), h && Z.A.playNotificationSound("message3", 0.4), !ts)) || !g) return !1;
                  let C = n(773371).default,
                      P = n(592598).A;
                  if (
                      null != C.getFocusedPID() &&
                      !P.isNotificationDisabled(tn.KS.TextChat) &&
                      !K.A.disableNotifications
                  )
                      return !1;
                  let { icon: R, title: v, body: L, emoji: k } = (0, m.TB)(s, a, c),
                      G = !(null != (e = f?.id) && (0, y.r)(e, 0.01));
                  if (
                      (u.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: s.id,
                          message: a,
                          icon: R,
                          title: v,
                          body: L,
                      }),
                      (0, O.n)(a, s.guild_id),
                      F.A.getDesktopType() === tt.nRU.NEVER)
                  )
                      return tE(h), h && Z.A.playNotificationSound(ta, tr), !1;
                  tE(h),
                      Z.A.showNotification(
                          R,
                          v,
                          L,
                          {
                              notif_type: "MESSAGE_CREATE",
                              notif_user_id: a.author?.id,
                              message_id: a.id,
                              message_type: a.type,
                              channel_id: s.id,
                              channel_type: s.type,
                              guild_id: s.guild_id,
                              badge: (0, H.Wm)(_, f),
                          },
                          {
                              omitViewTracking: G,
                              tag: a.id,
                              sound: h ? ta : void 0,
                              volume: tr,
                              onClick() {
                                  (0, D.iN)(s.id),
                                      (s.type === tt.rbe.GUILD_VOICE || s.type === tt.rbe.GUILD_STAGE_VOICE) &&
                                          d.A.updateChatOpen(s.id, !0),
                                      A.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: _,
                              fallbackDeepLink: (0, Z.I)(tt.BVt.CHANNEL(s.guild_id, s.id, a.id)),
                              emoji: k,
                          },
                      ).then((t) => {
                          null != t && tf.track(s.id, t.notification, t.trackingProps);
                      });
              },
              CHANNEL_SELECT: function (t) {
                  let { channelId: e } = t;
                  return null != e && tf.clearChannel(e), !1;
              },
              MESSAGE_ACK: function (t) {
                  let { channelId: e } = t;
                  return tf.clearChannel(e), !1;
              },
              ACTIVITY_START: function (t) {
                  let { userId: e, activity: n } = t;
                  if (t_() || n.type !== tt.$pd.PLAYING) return !1;
                  {
                      let t = J.default.getUser(e);
                      if (null == t) return !1;
                      let i = Q.Ay.getName(t),
                          l = n.name,
                          a = t.getAvatarURL(void 0, 128),
                          r = tl.intl.string(tl.t.XoTWsI),
                          o = tl.intl.formatToPlainString(tl.t.o4Aipn, { username: i, gameName: l });
                      return (
                          Z.A.showNotification(
                              a,
                              r,
                              o,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: tt.$pd.PLAYING,
                                  notif_user_id: e,
                                  activity_name: l,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      s.A.openPrivateChannel({ recipientIds: e });
                                  },
                                  isUserAvatar: !0,
                              },
                          ),
                          !1
                      );
                  }
              },
              VOICE_STATE_UPDATES: function (t) {
                  let { voiceStates: e } = t;
                  if (t_()) return;
                  let n = J.default.getCurrentUser();
                  if (null == n) return;
                  let i = e.find((t) => t.userId === n.id);
                  if (null == i) return;
                  let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                  if (null == l || null == a || !(!r && null != o)) return;
                  let u = M.A.getGuild(a),
                      s = V.A.getChannel(l),
                      d = v.A.getStageInstanceByChannel(l);
                  null != u &&
                      null != s &&
                      null != d &&
                      Z.A.showNotification(
                          (0, w.Iv)(u, 128),
                          (0, T.m1)(s, J.default, Y.A),
                          tl.intl.formatToPlainString(tl.t.sqnsSP, {
                              channelName: (0, T.m1)(s, J.default, Y.A),
                              channelTopic: d?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (t) {
                  let { instance: e } = t;
                  if (t_() || !e.send_start_notification || tN(e.channel_id)) return !1;
                  let n = J.default.getCurrentUser(),
                      i = M.A.getGuild(e.guild_id),
                      a = V.A.getChannel(e.channel_id),
                      r = J.default.getUser(e.host_id);
                  if (
                      null == n ||
                      null == a ||
                      null == i ||
                      null == r ||
                      !(0, m.Wv)(n, r, a) ||
                      !W.A.can(l.kg(tt.xBc.CONNECT, tt.xBc.VIEW_CHANNEL), a) ||
                      tc.has(e.id)
                  )
                      return !1;
                  tc.add(e.id),
                      Z.A.showNotification(
                          (0, w.Iv)(i, 128),
                          tl.intl.formatToPlainString(tl.t.bZ4Okd, { guildName: i.name }),
                          tl.intl.formatToPlainString(tl.t.qTelnO, {
                              username: $.Ay.getName(i.id, a.id, r),
                              topic: e.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: i.id, channel_id: a.id },
                          {
                              onClick() {
                                  (0, R.av)(a);
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              STAGE_INSTANCE_DELETE: function (t) {
                  let { instance: e } = t;
                  tc.delete(e.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                  let { guildScheduledEvent: e } = t;
                  if (t_() || null == e.notification_type) return !1;
                  e.notification_type === te.b8.EVENT_START
                      ? e.entity_type === te.Ps.STAGE_INSTANCE || e.entity_type === te.Ps.VOICE
                          ? (function (t) {
                                if (t_()) return;
                                let e = t.channel_id;
                                if (null == e || tN(e)) return;
                                let n = J.default.getCurrentUser(),
                                    i = M.A.getGuild(t.guild_id),
                                    a = V.A.getChannel(t.channel_id),
                                    r = J.default.getUser(t.host_id);
                                null != n &&
                                    null != a &&
                                    null != i &&
                                    null != r &&
                                    W.A.can(l.kg(tt.xBc.CONNECT, tt.xBc.VIEW_CHANNEL), a) &&
                                    Z.A.showNotification(
                                        (0, w.Iv)(i, 128),
                                        tl.intl.formatToPlainString(tl.t.bOu6Wn, { guildName: i.name }),
                                        tl.intl.formatToPlainString(tl.t.GV9L8u, {
                                            topic: t.name,
                                            username: $.Ay.getName(i.id, a.id, r),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: i.id,
                                            channel_id: a.id,
                                        },
                                        {
                                            onClick() {
                                                t.entity_type === te.Ps.STAGE_INSTANCE && (0, R.av)(a),
                                                    t.entity_type === te.Ps.VOICE && f.default.selectVoiceChannel(a.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e)
                          : e.entity_type === te.Ps.EXTERNAL &&
                            (function (t) {
                                if (t_()) return;
                                let e = J.default.getCurrentUser(),
                                    n = M.A.getGuild(t.guild_id);
                                null == e ||
                                    null == n ||
                                    Z.A.showNotification(
                                        (0, w.Iv)(n, 128),
                                        tl.intl.formatToPlainString(tl.t.bOu6Wn, { guildName: n.name }),
                                        tl.intl.formatToPlainString(tl.t.mYyaRB, { topic: t.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                c.A.transitionToGuildSync(t.guild_id), (0, I.uR)({ eventId: t.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e)
                      : e.notification_type;
              },
              THREAD_CREATE: function (t) {
                  let { channel: e, isNewlyCreated: n } = t;
                  if (t_()) return !1;
                  let i = V.A.getChannel(e.parent_id);
                  if (null == i || !tt.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, m.q1)(e, i, !ts)) return !1;
                  let { author: l, user: a } = (0, g.tY)(e);
                  if (null == a) return !1;
                  let r = M.A.getGuild(i.guild_id);
                  if (null == r) return !1;
                  let o = tl.intl.formatToPlainString(tl.t["2IGVl5"], {
                          channelName: (0, T.m1)(i, J.default, Y.A),
                          guildName: r.name,
                      }),
                      u = tl.intl.formatToPlainString(tl.t.jPhTvT, {
                          channelName: (0, T.m1)(e, J.default, Y.A),
                          userUsername: l?.nick ?? a?.username,
                      }),
                      s = a.getAvatarURL(void 0, 128);
                  Z.A.showNotification(
                      s,
                      o,
                      u,
                      { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                      {
                          onClick() {
                              (0, L.JA)(e);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                  let e,
                      { icon: n, title: i, body: l, route: a, trackingType: r, tag: o } = t;
                  if (t_() || null == i || null == l || null == r || "reactions_push_notification" === r.toLowerCase())
                      return !1;
                  Z.A.showNotification(
                      n,
                      i,
                      l,
                      { notif_type: r },
                      {
                          onClick() {
                              null != a && ((0, h.A)(a), A.default.clickedNotification());
                          },
                          tag: o,
                          isUserAvatar: !1,
                      },
                  ).then((t) => {
                      null != t && null != e && tf.track(e, t.notification, t.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (t) {
                  let { icon: e, title: n, body: i, route: l, trackingType: a, message: r, reactorUserId: o } = t;
                  if (t_() || null == n || null == i || null == a) return !1;
                  let u = r.channel_id;
                  if (null == u) return !1;
                  let s = V.A.getChannel(u);
                  if (null == s) return !1;
                  let d = J.default.getUser(o);
                  if (!(0, m.nR)({ message: r, channel: s, reactor: d, includeSelectedChannel: !ts })) return !1;
                  Z.A.showNotification(
                      e,
                      n,
                      i,
                      { notif_type: a, notif_user_id: o, message_id: r.id },
                      {
                          onClick() {
                              null != l && ((0, h.A)(l), A.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((t) => {
                      null != t && null != u && tf.track(u, t.notification, t.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let t = (0, z.isWindows)(),
                      e = (0, z.isLinux)();
                  if (!(!r.w.get(tu, !1) && z.isPlatformEmbedded && (t || e))) return !1;
                  let i = !1;
                  return (
                      null != td && (i = tA.includes(td)),
                      !!i &&
                          (Z.A.showNotification(
                              n(608598),
                              tl.intl.string(tl.t.VSgOVg),
                              tl.intl.string(tl.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, P.pX)((0, G.settingsPathToRoute)(t ? ti.od.WINDOWS : ti.od.LINUX));
                                  },
                                  onShown: () => {
                                      r.w.set(tu, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return r.w.remove(tu), !1;
              },
              CONNECTION_OPEN: function (t) {
                  let { countryCode: e, guilds: n } = t;
                  (td = e), tc.clear(), n.forEach((t) => t.stage_instances.forEach((t) => tc.add(t.id)));
              },
              MESSAGE_REMINDER_DUE: function (t) {
                  let { savedMessage: e } = t;
                  if (t_()) return !1;
                  let n = e.message;
                  if (null == n || null == n.author) return !1;
                  let i = V.A.getChannel(e.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: a } = (0, m.TB)(i, n, n.author);
                  Z.A.showNotification(
                      l,
                      tl.intl.string(tl.t.IjZJB5),
                      a,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, h.A)(tt.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (t) {
                  let { title: e, subtitle: i } = t;
                  if (t_() || !F.A.screenDowntimeReminder) return !1;
                  Z.A.showNotification(
                      n(608598),
                      e,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
