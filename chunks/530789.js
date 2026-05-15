"use strict";
n.d(t, { pD: () => er, cH: () => ei }), n(321073);
var i = n(136722),
    r = n(17928),
    s = n(506774),
    a = n(228366),
    o = n(308528),
    l = n(367513),
    u = n(66834),
    c = n(264686),
    d = n(730852),
    _ = n(77729),
    f = n(883600),
    h = n(47167),
    p = n(435470),
    E = n(707592),
    m = n(741231),
    g = n(380335),
    A = n(320095),
    I = n(535586),
    T = n(938005),
    S = n(571524),
    N = n(181370),
    y = n.n(N),
    C = n(695515),
    v = n(976860),
    O = n(378570),
    R = n(790535),
    b = n(446600),
    D = n(747926),
    L = n(885386),
    w = n(718446),
    M = n(260509),
    P = n(734057),
    x = n(71393),
    U = n(232835),
    k = n(803224),
    G = n(576705),
    F = n(222823),
    V = n(994500),
    B = n(309010),
    H = n(461213),
    j = n(351906),
    Y = n(870570),
    W = n(287809),
    K = n(977997),
    z = n(174459),
    $ = n(562153),
    q = n(723702),
    Z = n(427262),
    X = n(756876),
    Q = n(652215),
    J = n(988794),
    ee = n(672396),
    et = n(355097),
    en = n(375708);
let ei = "message1",
    er = 0.4,
    es = _.A?.features.supports("notifications") ? 20 : 1,
    ea = "discord_dismissed_notification_shown",
    eo = document.hasFocus(),
    el = null,
    eu = new Set(),
    ec = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    ed = new (class {
        _channels = {};
        track(e, t, n) {
            let i = this._channels[e];
            for (
                null == i && ((i = []), (this._channels[e] = i)), i.push({ notification: t, trackingProps: n });
                i.length > es;
            ) {
                let e = i.shift();
                e?.notification?.close != null &&
                    (e.notification.close(),
                    z.default.track(Q.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...e.trackingProps }));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(), z.default.track(Q.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function e_() {
    return !!(
        k.A.getDesktopType() === Q.nRU.NEVER ||
        H.A.getStatus() === Q.clD.DND ||
        L.NO.getSetting() ||
        C.A.isCurrentUserInRestrictedHours()
    );
}
function ef(e) {
    return null != K.A.getVoiceStateForChannel(e);
}
class eh extends r.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(f.A, P.A, C.A, x.A, g.A, U.A, k.A, G.A, V.A, B.A, H.A, b.A, j.A, Y.A, W.default, K.A);
    }
}
new eh(
    a.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t !== Q.kCE.ENABLED ||
                      q.isPlatformEmbedded ||
                      X.A.showNotification(
                          n(705194),
                          en.intl.string(en.t.VSgOVg),
                          en.intl.string(en.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: ei,
                              volume: er,
                              tag: "hello",
                              onClick: () => {
                                  window.focus();
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              NOTIFICATION_CREATE: function (e) {
                  let { icon: t, title: n, body: i, trackingProps: r, options: s } = e;
                  return !e_() && (X.A.showNotification(t, n, i, r, s), !1);
              },
              WINDOW_FOCUS: function (e) {
                  if ((eo = e.focused)) {
                      let e = B.A.getChannelId();
                      null != e && ed.clearChannel(e);
                  }
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: i, optimistic: r } = e;
                  if (r) return !1;
                  let s = P.A.getChannel(t),
                      o = W.default.getUser(i.author?.id),
                      u = W.default.getCurrentUser();
                  if (null == s || null == o || null == u) return !1;
                  let d = (0, T.lx)(i, t, !eo),
                      _ = k.A.getNotifyMessagesInSelectedChannel() && (0, T.kY)(i, t);
                  if (
                      (!d && !_) ||
                      C.A.isCurrentUserInRestrictedHours() ||
                      Y.A.hasAction() ||
                      (i.type === Q.lAJ.CHANGELOG &&
                          (null == i.changelog_id || f.A.latestChangelogId() !== i.changelog_id))
                  )
                      return !1;
                  let h = !k.A.isSoundDisabled(ei);
                  if ((_ && (h && X.A.playNotificationSound("message3", 0.4), !eo)) || !d) return !1;
                  let p = n(773371).default,
                      E = n(592598).A;
                  if (
                      null != p.getFocusedPID() &&
                      !E.isNotificationDisabled(ee.KS.TextChat) &&
                      !j.A.disableNotifications
                  )
                      return !1;
                  let { icon: m, title: g, body: S, emoji: N } = (0, T.TB)(s, i, o),
                      v = !((e, t) => {
                          let n;
                          return (
                              null != t &&
                              ((n = y().v3(String(t))) < 0 && (n += 0x100000000), n % 0x7fffffff < 21474836.47)
                          );
                      })(0, u?.id);
                  if (
                      (a.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: s.id,
                          message: i,
                          icon: m,
                          title: g,
                          body: S,
                      }),
                      (0, I.n)(i, s.guild_id),
                      k.A.getDesktopType() === Q.nRU.NEVER)
                  )
                      return h && X.A.playNotificationSound(ei, er), !1;
                  let R = U.A.getMessage(t, i.id) ?? (0, A.rh)(i);
                  X.A.showNotification(
                      m,
                      g,
                      S,
                      {
                          notif_type: "MESSAGE_CREATE",
                          notif_user_id: i.author?.id,
                          message_id: i.id,
                          message_type: i.type,
                          channel_id: s.id,
                          channel_type: s.type,
                          guild_id: s.guild_id,
                          badge: (0, F.Wm)(R, u),
                      },
                      {
                          omitViewTracking: v,
                          tag: i.id,
                          sound: h ? ei : void 0,
                          volume: er,
                          onClick() {
                              (0, O.iN)(s.id),
                                  (s.type === Q.rbe.GUILD_VOICE || s.type === Q.rbe.GUILD_STAGE_VOICE) &&
                                      l.A.updateChatOpen(s.id, !0),
                                  c.default.clickedNotification();
                          },
                          isUserAvatar: !0,
                          messageRecord: R,
                          fallbackDeepLink: (0, X.I)(Q.BVt.CHANNEL(s.guild_id, s.id, i.id)),
                          emoji: N,
                      },
                  ).then((e) => {
                      null != e && ed.track(s.id, e.notification, e.trackingProps);
                  });
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && ed.clearChannel(t), !1;
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return ed.clearChannel(t), !1;
              },
              ACTIVITY_START: function (e) {
                  let { userId: t, activity: n } = e;
                  if (e_() || n.type !== Q.$pd.PLAYING) return !1;
                  {
                      let e = W.default.getUser(t);
                      if (null == e) return !1;
                      let i = Z.Ay.getName(e),
                          r = n.name,
                          s = e.getAvatarURL(void 0, 128),
                          a = en.intl.string(en.t.XoTWsI),
                          l = en.intl.formatToPlainString(en.t.o4Aipn, { username: i, gameName: r });
                      return (
                          X.A.showNotification(
                              s,
                              a,
                              l,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: Q.$pd.PLAYING,
                                  notif_user_id: t,
                                  activity_name: r,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      o.A.openPrivateChannel({ recipientIds: t });
                                  },
                                  isUserAvatar: !0,
                              },
                          ),
                          !1
                      );
                  }
              },
              VOICE_STATE_UPDATES: function (e) {
                  let { voiceStates: t } = e;
                  if (e_()) return;
                  let n = W.default.getCurrentUser();
                  if (null == n) return;
                  let i = t.find((e) => e.userId === n.id);
                  if (null == i) return;
                  let { channelId: r, guildId: s, suppress: a, requestToSpeakTimestamp: o } = i;
                  if (null == r || null == s || !(!a && null != o)) return;
                  let l = x.A.getGuild(s),
                      u = P.A.getChannel(r),
                      c = b.A.getStageInstanceByChannel(r);
                  null != l &&
                      null != u &&
                      null != c &&
                      X.A.showNotification(
                          (0, M.Iv)(l, 128),
                          (0, h.m1)(u, W.default, V.A),
                          en.intl.formatToPlainString(en.t.sqnsSP, {
                              channelName: (0, h.m1)(u, W.default, V.A),
                              channelTopic: c?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (e) {
                  let { instance: t } = e;
                  if (e_() || !t.send_start_notification || ef(t.channel_id)) return !1;
                  let n = W.default.getCurrentUser(),
                      r = x.A.getGuild(t.guild_id),
                      s = P.A.getChannel(t.channel_id),
                      a = W.default.getUser(t.host_id);
                  if (
                      null == n ||
                      null == s ||
                      null == r ||
                      null == a ||
                      !(0, T.Wv)(n, a, s) ||
                      !G.A.can(i.kg(Q.xBc.CONNECT, Q.xBc.VIEW_CHANNEL), s) ||
                      eu.has(t.id)
                  )
                      return !1;
                  eu.add(t.id),
                      X.A.showNotification(
                          (0, M.Iv)(r, 128),
                          en.intl.formatToPlainString(en.t.bZ4Okd, { guildName: r.name }),
                          en.intl.formatToPlainString(en.t.qTelnO, {
                              username: $.Ay.getName(r.id, s.id, a),
                              topic: t.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: r.id, channel_id: s.id },
                          {
                              onClick() {
                                  (0, R.av)(s);
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              STAGE_INSTANCE_DELETE: function (e) {
                  let { instance: t } = e;
                  eu.delete(t.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                  let { guildScheduledEvent: t } = e;
                  if (e_() || null == t.notification_type) return !1;
                  t.notification_type === J.b8.EVENT_START &&
                      (t.entity_type === J.Ps.STAGE_INSTANCE || t.entity_type === J.Ps.VOICE
                          ? (function (e) {
                                if (e_()) return;
                                let t = e.channel_id;
                                if (null == t || ef(t)) return;
                                let n = W.default.getCurrentUser(),
                                    r = x.A.getGuild(e.guild_id),
                                    s = P.A.getChannel(e.channel_id),
                                    a = W.default.getUser(e.host_id);
                                null != n &&
                                    null != s &&
                                    null != r &&
                                    null != a &&
                                    G.A.can(i.kg(Q.xBc.CONNECT, Q.xBc.VIEW_CHANNEL), s) &&
                                    X.A.showNotification(
                                        (0, M.Iv)(r, 128),
                                        en.intl.formatToPlainString(en.t.bOu6Wn, { guildName: r.name }),
                                        en.intl.formatToPlainString(en.t.GV9L8u, {
                                            topic: e.name,
                                            username: $.Ay.getName(r.id, s.id, a),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: r.id,
                                            channel_id: s.id,
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === J.Ps.STAGE_INSTANCE && (0, R.av)(s),
                                                    e.entity_type === J.Ps.VOICE && d.default.selectVoiceChannel(s.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t)
                          : t.entity_type === J.Ps.EXTERNAL &&
                            (function (e) {
                                if (e_()) return;
                                let t = W.default.getCurrentUser(),
                                    n = x.A.getGuild(e.guild_id);
                                null == t ||
                                    null == n ||
                                    X.A.showNotification(
                                        (0, M.Iv)(n, 128),
                                        en.intl.formatToPlainString(en.t.bOu6Wn, { guildName: n.name }),
                                        en.intl.formatToPlainString(en.t.mYyaRB, { topic: e.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                u.A.transitionToGuildSync(e.guild_id), (0, E.uR)({ eventId: e.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t));
              },
              THREAD_CREATE: function (e) {
                  let { channel: t, isNewlyCreated: n } = e;
                  if (e_()) return !1;
                  let i = P.A.getChannel(t.parent_id);
                  if (null == i || !Q.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, T.q1)(t, i, !eo)) return !1;
                  let { author: r, user: s } = (0, p.tY)(t);
                  if (null == s) return !1;
                  let a = x.A.getGuild(i.guild_id);
                  if (null == a) return !1;
                  let o = en.intl.formatToPlainString(en.t["2IGVl5"], {
                          channelName: (0, h.m1)(i, W.default, V.A),
                          guildName: a.name,
                      }),
                      l = en.intl.formatToPlainString(en.t.jPhTvT, {
                          channelName: (0, h.m1)(t, W.default, V.A),
                          userUsername: r?.nick ?? s?.username,
                      }),
                      u = s.getAvatarURL(void 0, 128);
                  X.A.showNotification(
                      u,
                      o,
                      l,
                      { notif_type: "THREAD_CREATE", notif_user_id: s.id },
                      {
                          onClick() {
                              (0, D.JA)(t);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                  let t,
                      { icon: n, title: i, body: r, route: s, trackingType: a, tag: o } = e;
                  if (e_() || null == i || null == r || null == a || "reactions_push_notification" === a.toLowerCase())
                      return !1;
                  X.A.showNotification(
                      n,
                      i,
                      r,
                      { notif_type: a },
                      {
                          onClick() {
                              null != s && ((0, m.A)(s), c.default.clickedNotification());
                          },
                          tag: o,
                          isUserAvatar: !1,
                      },
                  ).then((e) => {
                      null != e && null != t && ed.track(t, e.notification, e.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (e) {
                  let { icon: t, title: n, body: i, route: r, trackingType: s, message: a, reactorUserId: o } = e;
                  if (e_() || null == n || null == i || null == s) return !1;
                  let l = a.channel_id;
                  if (null == l || (B.A.getCurrentlySelectedChannelId() === l && eo)) return !1;
                  let u = P.A.getChannel(l);
                  if (null == u) return !1;
                  if (u.type === Q.rbe.GROUP_DM) {
                      let e = W.default.getCurrentUser();
                      if (
                          a.author?.id !== e?.id &&
                          !S.A.getConfig({ location: "desktopNotification" }).showSettingsToggle
                      )
                          return !1;
                  }
                  X.A.showNotification(
                      t,
                      n,
                      i,
                      { notif_type: s, notif_user_id: o, message_id: a.id },
                      {
                          onClick() {
                              null != r && ((0, m.A)(r), c.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((e) => {
                      null != e && null != l && ed.track(l, e.notification, e.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let e = (0, q.isWindows)(),
                      t = (0, q.isLinux)();
                  if (!(!s.w.get(ea, !1) && q.isPlatformEmbedded && (e || t))) return !1;
                  let i = !1;
                  return (
                      null != el && (i = ec.includes(el)),
                      !!i &&
                          (X.A.showNotification(
                              n(608598),
                              en.intl.string(en.t.VSgOVg),
                              en.intl.string(en.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, v.pX)((0, w.settingsPathToRoute)(e ? et.od.WINDOWS : et.od.LINUX));
                                  },
                                  onShown: () => {
                                      s.w.set(ea, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return s.w.remove(ea), !1;
              },
              CONNECTION_OPEN: function (e) {
                  let { countryCode: t, guilds: n } = e;
                  (el = t), eu.clear(), n.forEach((e) => e.stage_instances.forEach((e) => eu.add(e.id)));
              },
              MESSAGE_REMINDER_DUE: function (e) {
                  let { savedMessage: t } = e;
                  if (e_()) return !1;
                  let n = t.message;
                  if (null == n || null == n.author) return !1;
                  let i = P.A.getChannel(t.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: r, body: s } = (0, T.TB)(i, n, n.author);
                  X.A.showNotification(
                      r,
                      en.intl.string(en.t.IjZJB5),
                      s,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, m.A)(Q.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (e) {
                  let { title: t, subtitle: i } = e;
                  if (e_() || !k.A.screenDowntimeReminder) return !1;
                  X.A.showNotification(
                      n(608598),
                      t,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
