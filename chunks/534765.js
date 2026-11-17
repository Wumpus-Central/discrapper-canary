(n.d(e, { c: () => to }), n(321073));
var i = n(350835),
    l = n(731738),
    a = n(136722),
    r = n(855986),
    o = n(506774),
    u = n(765178),
    s = n(73153),
    d = n(308528),
    c = n(367513),
    A = n(778858),
    f = n(264686),
    _ = n(597798),
    E = n(77729),
    N = n(883600),
    T = n(963027),
    I = n(47167),
    g = n(435470),
    h = n(707592),
    C = n(362280),
    S = n(380335),
    y = n(432005),
    p = n(913379),
    O = n(535586),
    m = n(411238),
    U = n(4043),
    P = n(695515),
    D = n(976860),
    R = n(378570),
    v = n(129095),
    L = n(446600),
    k = n(114129),
    G = n(747926),
    w = n(253932),
    V = n(718446),
    M = n(260509),
    F = n(734057),
    b = n(71393),
    W = n(596344),
    H = n(803224),
    Y = n(576705),
    B = n(218461),
    K = n(994500),
    x = n(309010),
    q = n(894768),
    J = n(351906),
    j = n(870570),
    X = n(287809),
    $ = n(977997),
    z = n(129230),
    Q = n(562153),
    Z = n(723702),
    tt = n(427262),
    te = n(119622),
    tn = n(652215),
    ti = n(988794),
    tl = n(672396),
    ta = n(355097),
    tr = n(792996);
let to = "message1",
    tu = E.A?.features.supports("notifications") ? 20 : 1,
    ts = "discord_dismissed_notification_shown",
    td = document.hasFocus(),
    tc = null,
    tA = new Set(),
    tf = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    t_ = new (class {
        _channels = {};
        track(t, e, n) {
            let i = this._channels[t];
            for (
                null == i && ((i = []), (this._channels[t] = i)), i.push({ notification: e, trackingProps: n });
                i.length > tu;
            ) {
                let t = i.shift();
                t?.notification?.close != null &&
                    (t.notification.close(),
                    z.default.track(tn.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...t.trackingProps }));
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e &&
                (delete this._channels[t],
                e.forEach((t) => {
                    let { notification: e, trackingProps: n } = t;
                    (e.close(), z.default.track(tn.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n }));
                }));
        }
    })();
function tE() {
    return !!(
        H.A.getDesktopType() === tn.nRU.NEVER ||
        q.A.getStatus() === tn.clD.DND ||
        w.NO.getSetting() ||
        P.A.isCurrentUserInRestrictedHours()
    );
}
function tN(t) {
    p.A.increment({
        name: l.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
        tags: [`reason:${t ? "played" : "disabled_by_user"}`],
    });
}
function tT(t) {
    return null != $.A.getVoiceStateForChannel(t);
}
class tI extends r.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(N.A, F.A, P.A, b.A, S.A, W.A, H.A, Y.A, B.Ay, K.A, x.Ay, q.A, L.A, J.A, j.A, X.default, $.A);
    }
}
new tI(
    s.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                  let { enabled: e } = t;
                  e !== tn.kCE.ENABLED ||
                      Z.isPlatformEmbedded ||
                      te.Ay.showNotification(
                          n(705194),
                          tr.intl.string(tr.t.VSgOVg),
                          tr.intl.string(tr.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: to,
                              volume: 0.4,
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
                  return !tE() && (te.Ay.showNotification(e, n, i, l, a), !1);
              },
              WINDOW_FOCUS: function (t) {
                  if ((td = t.focused)) {
                      let t = x.Ay.getChannelId();
                      null != t && t_.clearChannel(t);
                  }
              },
              MESSAGE_CREATE: function (t) {
                  var e;
                  let { channelId: i, message: a, optimistic: r } = t;
                  if (r) return !1;
                  let o = F.A.getChannel(i),
                      d = X.default.getUser(a.author?.id),
                      A = X.default.getCurrentUser();
                  if (null == o || null == d || null == A) return !1;
                  let _ = W.A.getMessage(i, a.id) ?? (0, y.rh)(a),
                      E = B.Ay.getMentionCount(i);
                  (0, B.Wm)(_, A) && E > 0 && u.O.announce((0, T.Ay)({ channel: o, mentionCount: E }));
                  let I = (0, m.lx)(a, i, !td),
                      g = H.A.getNotifyMessagesInSelectedChannel() && (0, m.kY)(a, i);
                  if (!I && !g) return !1;
                  if (P.A.isCurrentUserInRestrictedHours())
                      return (
                          p.A.increment({
                              name: l.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:restricted_hours"],
                          }),
                          !1
                      );
                  if (j.A.hasAction())
                      return (
                          p.A.increment({
                              name: l.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:required_action"],
                          }),
                          !1
                      );
                  if (
                      a.type === tn.lAJ.CHANGELOG &&
                      (null == a.changelog_id || N.A.latestChangelogId() !== a.changelog_id)
                  )
                      return !1;
                  let h = !H.A.isSoundDisabled(to);
                  if ((g && (tN(h), h && te.Ay.playNotificationSound("message3", 0.4), !td)) || !I) return !1;
                  let C = n(228342).default,
                      S = n(592598).A;
                  if (
                      null != C.getFocusedPID() &&
                      !S.isNotificationDisabled(tl.KS.TextChat) &&
                      !J.A.disableNotifications
                  )
                      return !1;
                  let { icon: D, title: v, body: L, emoji: G } = (0, m.TB)(o, a, d),
                      w = !(null != (e = A?.id) && (0, U.r)(e, 0.01));
                  if (
                      (s.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: o.id,
                          message: a,
                          icon: D,
                          title: v,
                          body: L,
                      }),
                      (0, O.n)(a, o.guild_id),
                      H.A.getDesktopType() === tn.nRU.NEVER)
                  )
                      return (tN(h), h && te.Ay.playNotificationSound(to, 0.4), !1);
                  (tN(h),
                      te.Ay.showNotification(
                          D,
                          v,
                          L,
                          {
                              notif_type: "MESSAGE_CREATE",
                              notif_user_id: a.author?.id,
                              message_id: a.id,
                              message_type: a.type,
                              channel_id: o.id,
                              channel_type: o.type,
                              guild_id: o.guild_id,
                              badge: (0, B.Wm)(_, A),
                          },
                          {
                              omitViewTracking: w,
                              tag: a.id,
                              sound: h ? to : void 0,
                              volume: 0.4,
                              onClick() {
                                  ((0, k.KV)(o.id, "notification") || (0, R.iN)(o.id),
                                      (o.type === tn.rbe.GUILD_VOICE || o.type === tn.rbe.GUILD_STAGE_VOICE) &&
                                          c.A.updateChatOpen(o.id, !0),
                                      f.default.clickedNotification());
                              },
                              isUserAvatar: !0,
                              messageRecord: _,
                              fallbackDeepLink: (0, te.Id)(tn.BVt.CHANNEL(o.guild_id, o.id, a.id)),
                              emoji: G,
                          },
                      ).then((t) => {
                          null != t && t_.track(o.id, t.notification, t.trackingProps);
                      }));
              },
              CHANNEL_SELECT: function (t) {
                  let { channelId: e } = t;
                  return (null != e && t_.clearChannel(e), !1);
              },
              MESSAGE_ACK: function (t) {
                  let { channelId: e } = t;
                  return (t_.clearChannel(e), !1);
              },
              ACTIVITY_START: function (t) {
                  let { userId: e, activity: n } = t;
                  if (tE() || n.type !== i.$.PLAYING) return !1;
                  {
                      let t = X.default.getUser(e);
                      if (null == t) return !1;
                      let l = tt.Ay.getName(t),
                          a = n.name,
                          r = t.getAvatarURL(void 0, 128),
                          o = tr.intl.string(tr.t.XoTWsI),
                          u = tr.intl.formatToPlainString(tr.t.o4Aipn, { username: l, gameName: a });
                      return (
                          te.Ay.showNotification(
                              r,
                              o,
                              u,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: i.$.PLAYING,
                                  notif_user_id: e,
                                  activity_name: a,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      d.A.openPrivateChannel({ recipientIds: e });
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
                  if (tE()) return;
                  let n = X.default.getCurrentUser();
                  if (null == n) return;
                  let i = e.find((t) => t.userId === n.id);
                  if (null == i) return;
                  let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                  if (null == l || null == a || !(!r && null != o)) return;
                  let u = b.A.getGuild(a),
                      s = F.A.getChannel(l),
                      d = L.A.getStageInstanceByChannel(l);
                  null != u &&
                      null != s &&
                      null != d &&
                      te.Ay.showNotification(
                          (0, M.Iv)(u, 128),
                          (0, I.m1)(s, X.default, K.A),
                          tr.intl.formatToPlainString(tr.t.sqnsSP, {
                              channelName: (0, I.m1)(s, X.default, K.A),
                              channelTopic: d?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (t) {
                  let { instance: e } = t;
                  if (tE() || !e.send_start_notification || tT(e.channel_id)) return !1;
                  let n = X.default.getCurrentUser(),
                      i = b.A.getGuild(e.guild_id),
                      l = F.A.getChannel(e.channel_id),
                      r = X.default.getUser(e.host_id);
                  if (
                      null == n ||
                      null == l ||
                      null == i ||
                      null == r ||
                      !(0, m.Wv)(n, r, l) ||
                      !Y.A.can(a.kg(tn.xBc.CONNECT, tn.xBc.VIEW_CHANNEL), l) ||
                      tA.has(e.id)
                  )
                      return !1;
                  (tA.add(e.id),
                      te.Ay.showNotification(
                          (0, M.Iv)(i, 128),
                          tr.intl.formatToPlainString(tr.t.bZ4Okd, { guildName: i.name }),
                          tr.intl.formatToPlainString(tr.t.qTelnO, {
                              username: Q.Ay.getName(i.id, l.id, r),
                              topic: e.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: i.id, channel_id: l.id },
                          {
                              onClick() {
                                  (0, v.av)(l);
                              },
                              isUserAvatar: !1,
                          },
                      ));
              },
              STAGE_INSTANCE_DELETE: function (t) {
                  let { instance: e } = t;
                  tA.delete(e.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                  let { guildScheduledEvent: e } = t;
                  if (tE() || null == e.notification_type) return !1;
                  e.notification_type === ti.b8.EVENT_START
                      ? e.entity_type === ti.Ps.STAGE_INSTANCE || e.entity_type === ti.Ps.VOICE
                          ? (function (t) {
                                if (tE()) return;
                                let e = t.channel_id;
                                if (null == e || tT(e)) return;
                                let n = X.default.getCurrentUser(),
                                    i = b.A.getGuild(t.guild_id),
                                    l = F.A.getChannel(t.channel_id),
                                    r = X.default.getUser(t.host_id);
                                null != n &&
                                    null != l &&
                                    null != i &&
                                    null != r &&
                                    Y.A.can(a.kg(tn.xBc.CONNECT, tn.xBc.VIEW_CHANNEL), l) &&
                                    te.Ay.showNotification(
                                        (0, M.Iv)(i, 128),
                                        tr.intl.formatToPlainString(tr.t.bOu6Wn, { guildName: i.name }),
                                        tr.intl.formatToPlainString(tr.t.GV9L8u, {
                                            topic: t.name,
                                            username: Q.Ay.getName(i.id, l.id, r),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: i.id,
                                            channel_id: l.id,
                                        },
                                        {
                                            onClick() {
                                                (t.entity_type === ti.Ps.STAGE_INSTANCE && (0, v.av)(l),
                                                    t.entity_type === ti.Ps.VOICE &&
                                                        _.default.selectVoiceChannel(l.id));
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e)
                          : e.entity_type === ti.Ps.EXTERNAL &&
                            (function (t) {
                                if (tE()) return;
                                let e = X.default.getCurrentUser(),
                                    n = b.A.getGuild(t.guild_id);
                                null == e ||
                                    null == n ||
                                    te.Ay.showNotification(
                                        (0, M.Iv)(n, 128),
                                        tr.intl.formatToPlainString(tr.t.bOu6Wn, { guildName: n.name }),
                                        tr.intl.formatToPlainString(tr.t.mYyaRB, { topic: t.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                (A.A.transitionToGuildSync(t.guild_id), (0, h.uR)({ eventId: t.id }));
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e)
                      : e.notification_type;
              },
              THREAD_CREATE: function (t) {
                  let { channel: e, isNewlyCreated: n } = t;
                  if (tE()) return !1;
                  let i = F.A.getChannel(e.parent_id);
                  if (null == i || !tn.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, m.q1)(e, i, !td)) return !1;
                  let { author: l, user: a } = (0, g.tY)(e);
                  if (null == a) return !1;
                  let r = b.A.getGuild(i.guild_id);
                  if (null == r) return !1;
                  let o = tr.intl.formatToPlainString(tr.t["2IGVl5"], {
                          channelName: (0, I.m1)(i, X.default, K.A),
                          guildName: r.name,
                      }),
                      u = tr.intl.formatToPlainString(tr.t.jPhTvT, {
                          channelName: (0, I.m1)(e, X.default, K.A),
                          userUsername: l?.nick ?? a?.username,
                      }),
                      s = a.getAvatarURL(void 0, 128);
                  te.Ay.showNotification(
                      s,
                      o,
                      u,
                      { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                      {
                          onClick() {
                              (0, G.JA)(e);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                  let e,
                      { icon: n, title: i, body: l, route: a, trackingType: r, tag: o } = t;
                  if (tE() || null == i || null == l || null == r || "reactions_push_notification" === r.toLowerCase())
                      return !1;
                  te.Ay.showNotification(
                      n,
                      i,
                      l,
                      { notif_type: r },
                      {
                          onClick() {
                              null != a && ((0, C.A)(a), f.default.clickedNotification());
                          },
                          tag: o,
                          isUserAvatar: !1,
                      },
                  ).then((t) => {
                      null != t && null != e && t_.track(e, t.notification, t.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (t) {
                  let { icon: e, title: n, body: i, route: l, trackingType: a, message: r, reactorUserId: o } = t;
                  if (tE() || null == n || null == i || null == a) return !1;
                  let u = r.channel_id;
                  if (null == u) return !1;
                  let s = F.A.getChannel(u);
                  if (null == s) return !1;
                  let d = X.default.getUser(o);
                  if (!(0, m.nR)({ message: r, channel: s, reactor: d, includeSelectedChannel: !td })) return !1;
                  te.Ay.showNotification(
                      e,
                      n,
                      i,
                      { notif_type: a, notif_user_id: o, message_id: r.id },
                      {
                          onClick() {
                              null != l && ((0, C.A)(l), f.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((t) => {
                      null != t && null != u && t_.track(u, t.notification, t.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let t = (0, Z.uF)(),
                      e = (0, Z.j9)();
                  if (!(!o.w.get(ts, !1) && Z.isPlatformEmbedded && (t || e))) return !1;
                  let i = !1;
                  return (
                      null != tc && (i = tf.includes(tc)),
                      !!i &&
                          (te.Ay.showNotification(
                              n(608598),
                              tr.intl.string(tr.t.VSgOVg),
                              tr.intl.string(tr.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, D.pX)((0, V.T)(t ? ta.od.WINDOWS : ta.od.LINUX));
                                  },
                                  onShown: () => {
                                      o.w.set(ts, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return (o.w.remove(ts), !1);
              },
              CONNECTION_OPEN: function (t) {
                  let { countryCode: e, guilds: n } = t;
                  ((tc = e), tA.clear(), n.forEach((t) => t.stage_instances.forEach((t) => tA.add(t.id))));
              },
              MESSAGE_REMINDER_DUE: function (t) {
                  let { savedMessage: e } = t;
                  if (tE()) return !1;
                  let n = e.message;
                  if (null == n || null == n.author) return !1;
                  let i = F.A.getChannel(e.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: a } = (0, m.TB)(i, n, n.author);
                  te.Ay.showNotification(
                      l,
                      tr.intl.string(tr.t.IjZJB5),
                      a,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, C.A)(tn.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (t) {
                  let { title: e, subtitle: i } = t;
                  if (tE() || !H.A.screenDowntimeReminder) return !1;
                  te.Ay.showNotification(
                      n(608598),
                      e,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
