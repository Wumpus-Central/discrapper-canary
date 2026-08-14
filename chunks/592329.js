"use strict";
n.d(t, { pD: () => es, cH: () => ea }), n(321073);
var i = n(731738),
    r = n(136722),
    a = n(17928),
    s = n(506774),
    l = n(765178),
    o = n(228366),
    d = n(308528),
    c = n(367513),
    u = n(66834),
    _ = n(264686),
    E = n(730852),
    A = n(77729),
    h = n(883600),
    I = n(963027),
    f = n(47167),
    p = n(435470),
    T = n(707592),
    m = n(741231),
    g = n(380335),
    S = n(320095),
    N = n(807393),
    C = n(535586),
    R = n(944043),
    O = n(4043),
    L = n(695515),
    D = n(976860),
    y = n(378570),
    v = n(790535),
    b = n(446600),
    M = n(747926),
    P = n(885386),
    U = n(718446),
    w = n(260509),
    G = n(734057),
    x = n(71393),
    k = n(232835),
    F = n(803224),
    V = n(576705),
    B = n(568548),
    H = n(994500),
    j = n(309010),
    W = n(461213),
    Y = n(351906),
    K = n(870570),
    $ = n(287809),
    z = n(977997),
    Z = n(174459),
    q = n(562153),
    X = n(723702),
    Q = n(427262),
    J = n(479975),
    ee = n(652215),
    et = n(988794),
    en = n(672396),
    ei = n(355097),
    er = n(375708);
let ea = "message1",
    es = 0.4,
    el = A.A?.features.supports("notifications") ? 20 : 1,
    eo = "discord_dismissed_notification_shown",
    ed = document.hasFocus(),
    ec = null,
    eu = new Set(),
    e_ = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    eE = new (class {
        _channels = {};
        track(e, t, n) {
            let i = this._channels[e];
            for (
                null == i && ((i = []), (this._channels[e] = i)), i.push({ notification: t, trackingProps: n });
                i.length > el;
            ) {
                let e = i.shift();
                e?.notification?.close != null &&
                    (e.notification.close(),
                    Z.default.track(ee.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...e.trackingProps }));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(), Z.default.track(ee.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function eA() {
    return !!(
        F.A.getDesktopType() === ee.nRU.NEVER ||
        W.A.getStatus() === ee.clD.DND ||
        P.NO.getSetting() ||
        L.A.isCurrentUserInRestrictedHours()
    );
}
function eh(e) {
    N.A.increment({
        name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
        tags: [`reason:${e ? "played" : "disabled_by_user"}`],
    });
}
function eI(e) {
    return null != z.A.getVoiceStateForChannel(e);
}
class ef extends a.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(h.A, G.A, L.A, x.A, g.A, k.A, F.A, V.A, B.Ay, H.A, j.Ay, W.A, b.A, Y.A, K.A, $.default, z.A);
    }
}
new ef(
    o.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t !== ee.kCE.ENABLED ||
                      X.isPlatformEmbedded ||
                      J.A.showNotification(
                          n(705194),
                          er.intl.string(er.t.VSgOVg),
                          er.intl.string(er.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: ea,
                              volume: es,
                              tag: "hello",
                              onClick: () => {
                                  window.focus();
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              NOTIFICATION_CREATE: function (e) {
                  let { icon: t, title: n, body: i, trackingProps: r, options: a } = e;
                  return !eA() && (J.A.showNotification(t, n, i, r, a), !1);
              },
              WINDOW_FOCUS: function (e) {
                  if ((ed = e.focused)) {
                      let e = j.Ay.getChannelId();
                      null != e && eE.clearChannel(e);
                  }
              },
              MESSAGE_CREATE: function (e) {
                  var t;
                  let { channelId: r, message: a, optimistic: s } = e;
                  if (s) return !1;
                  let d = G.A.getChannel(r),
                      u = $.default.getUser(a.author?.id),
                      E = $.default.getCurrentUser();
                  if (null == d || null == u || null == E) return !1;
                  let A = k.A.getMessage(r, a.id) ?? (0, S.rh)(a),
                      f = B.Ay.getMentionCount(r);
                  (0, B.Wm)(A, E) && f > 0 && l.O.announce((0, I.Ay)({ channel: d, mentionCount: f }));
                  let p = (0, R.lx)(a, r, !ed),
                      T = F.A.getNotifyMessagesInSelectedChannel() && (0, R.kY)(a, r);
                  if (!p && !T) return !1;
                  if (L.A.isCurrentUserInRestrictedHours())
                      return (
                          N.A.increment({
                              name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:restricted_hours"],
                          }),
                          !1
                      );
                  if (K.A.hasAction())
                      return (
                          N.A.increment({
                              name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:required_action"],
                          }),
                          !1
                      );
                  if (
                      a.type === ee.lAJ.CHANGELOG &&
                      (null == a.changelog_id || h.A.latestChangelogId() !== a.changelog_id)
                  )
                      return !1;
                  let m = !F.A.isSoundDisabled(ea);
                  if ((T && (eh(m), m && J.A.playNotificationSound("message3", 0.4), !ed)) || !p) return !1;
                  let g = n(773371).default,
                      D = n(592598).A;
                  if (
                      null != g.getFocusedPID() &&
                      !D.isNotificationDisabled(en.KS.TextChat) &&
                      !Y.A.disableNotifications
                  )
                      return !1;
                  let { icon: v, title: b, body: M, emoji: P } = (0, R.TB)(d, a, u),
                      U = !(null != (t = E?.id) && (0, O.r)(t, 0.01));
                  if (
                      (o.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: d.id,
                          message: a,
                          icon: v,
                          title: b,
                          body: M,
                      }),
                      (0, C.n)(a, d.guild_id),
                      F.A.getDesktopType() === ee.nRU.NEVER)
                  )
                      return eh(m), m && J.A.playNotificationSound(ea, es), !1;
                  eh(m),
                      J.A.showNotification(
                          v,
                          b,
                          M,
                          {
                              notif_type: "MESSAGE_CREATE",
                              notif_user_id: a.author?.id,
                              message_id: a.id,
                              message_type: a.type,
                              channel_id: d.id,
                              channel_type: d.type,
                              guild_id: d.guild_id,
                              badge: (0, B.Wm)(A, E),
                          },
                          {
                              omitViewTracking: U,
                              tag: a.id,
                              sound: m ? ea : void 0,
                              volume: es,
                              onClick() {
                                  (0, y.iN)(d.id),
                                      (d.type === ee.rbe.GUILD_VOICE || d.type === ee.rbe.GUILD_STAGE_VOICE) &&
                                          c.A.updateChatOpen(d.id, !0),
                                      _.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: A,
                              fallbackDeepLink: (0, J.I)(ee.BVt.CHANNEL(d.guild_id, d.id, a.id)),
                              emoji: P,
                          },
                      ).then((e) => {
                          null != e && eE.track(d.id, e.notification, e.trackingProps);
                      });
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && eE.clearChannel(t), !1;
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return eE.clearChannel(t), !1;
              },
              ACTIVITY_START: function (e) {
                  let { userId: t, activity: n } = e;
                  if (eA() || n.type !== ee.$pd.PLAYING) return !1;
                  {
                      let e = $.default.getUser(t);
                      if (null == e) return !1;
                      let i = Q.Ay.getName(e),
                          r = n.name,
                          a = e.getAvatarURL(void 0, 128),
                          s = er.intl.string(er.t.XoTWsI),
                          l = er.intl.formatToPlainString(er.t.o4Aipn, { username: i, gameName: r });
                      return (
                          J.A.showNotification(
                              a,
                              s,
                              l,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: ee.$pd.PLAYING,
                                  notif_user_id: t,
                                  activity_name: r,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      d.A.openPrivateChannel({ recipientIds: t });
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
                  if (eA()) return;
                  let n = $.default.getCurrentUser();
                  if (null == n) return;
                  let i = t.find((e) => e.userId === n.id);
                  if (null == i) return;
                  let { channelId: r, guildId: a, suppress: s, requestToSpeakTimestamp: l } = i;
                  if (null == r || null == a || !(!s && null != l)) return;
                  let o = x.A.getGuild(a),
                      d = G.A.getChannel(r),
                      c = b.A.getStageInstanceByChannel(r);
                  null != o &&
                      null != d &&
                      null != c &&
                      J.A.showNotification(
                          (0, w.Iv)(o, 128),
                          (0, f.m1)(d, $.default, H.A),
                          er.intl.formatToPlainString(er.t.sqnsSP, {
                              channelName: (0, f.m1)(d, $.default, H.A),
                              channelTopic: c?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (e) {
                  let { instance: t } = e;
                  if (eA() || !t.send_start_notification || eI(t.channel_id)) return !1;
                  let n = $.default.getCurrentUser(),
                      i = x.A.getGuild(t.guild_id),
                      a = G.A.getChannel(t.channel_id),
                      s = $.default.getUser(t.host_id);
                  if (
                      null == n ||
                      null == a ||
                      null == i ||
                      null == s ||
                      !(0, R.Wv)(n, s, a) ||
                      !V.A.can(r.kg(ee.xBc.CONNECT, ee.xBc.VIEW_CHANNEL), a) ||
                      eu.has(t.id)
                  )
                      return !1;
                  eu.add(t.id),
                      J.A.showNotification(
                          (0, w.Iv)(i, 128),
                          er.intl.formatToPlainString(er.t.bZ4Okd, { guildName: i.name }),
                          er.intl.formatToPlainString(er.t.qTelnO, {
                              username: q.Ay.getName(i.id, a.id, s),
                              topic: t.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: i.id, channel_id: a.id },
                          {
                              onClick() {
                                  (0, v.av)(a);
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
                  if (eA() || null == t.notification_type) return !1;
                  t.notification_type === et.b8.EVENT_START
                      ? t.entity_type === et.Ps.STAGE_INSTANCE || t.entity_type === et.Ps.VOICE
                          ? (function (e) {
                                if (eA()) return;
                                let t = e.channel_id;
                                if (null == t || eI(t)) return;
                                let n = $.default.getCurrentUser(),
                                    i = x.A.getGuild(e.guild_id),
                                    a = G.A.getChannel(e.channel_id),
                                    s = $.default.getUser(e.host_id);
                                null != n &&
                                    null != a &&
                                    null != i &&
                                    null != s &&
                                    V.A.can(r.kg(ee.xBc.CONNECT, ee.xBc.VIEW_CHANNEL), a) &&
                                    J.A.showNotification(
                                        (0, w.Iv)(i, 128),
                                        er.intl.formatToPlainString(er.t.bOu6Wn, { guildName: i.name }),
                                        er.intl.formatToPlainString(er.t.GV9L8u, {
                                            topic: e.name,
                                            username: q.Ay.getName(i.id, a.id, s),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: i.id,
                                            channel_id: a.id,
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === et.Ps.STAGE_INSTANCE && (0, v.av)(a),
                                                    e.entity_type === et.Ps.VOICE && E.default.selectVoiceChannel(a.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t)
                          : t.entity_type === et.Ps.EXTERNAL &&
                            (function (e) {
                                if (eA()) return;
                                let t = $.default.getCurrentUser(),
                                    n = x.A.getGuild(e.guild_id);
                                null == t ||
                                    null == n ||
                                    J.A.showNotification(
                                        (0, w.Iv)(n, 128),
                                        er.intl.formatToPlainString(er.t.bOu6Wn, { guildName: n.name }),
                                        er.intl.formatToPlainString(er.t.mYyaRB, { topic: e.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                u.A.transitionToGuildSync(e.guild_id), (0, T.uR)({ eventId: e.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t)
                      : t.notification_type;
              },
              THREAD_CREATE: function (e) {
                  let { channel: t, isNewlyCreated: n } = e;
                  if (eA()) return !1;
                  let i = G.A.getChannel(t.parent_id);
                  if (null == i || !ee.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, R.q1)(t, i, !ed)) return !1;
                  let { author: r, user: a } = (0, p.tY)(t);
                  if (null == a) return !1;
                  let s = x.A.getGuild(i.guild_id);
                  if (null == s) return !1;
                  let l = er.intl.formatToPlainString(er.t["2IGVl5"], {
                          channelName: (0, f.m1)(i, $.default, H.A),
                          guildName: s.name,
                      }),
                      o = er.intl.formatToPlainString(er.t.jPhTvT, {
                          channelName: (0, f.m1)(t, $.default, H.A),
                          userUsername: r?.nick ?? a?.username,
                      }),
                      d = a.getAvatarURL(void 0, 128);
                  J.A.showNotification(
                      d,
                      l,
                      o,
                      { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                      {
                          onClick() {
                              (0, M.JA)(t);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                  let t,
                      { icon: n, title: i, body: r, route: a, trackingType: s, tag: l } = e;
                  if (eA() || null == i || null == r || null == s || "reactions_push_notification" === s.toLowerCase())
                      return !1;
                  J.A.showNotification(
                      n,
                      i,
                      r,
                      { notif_type: s },
                      {
                          onClick() {
                              null != a && ((0, m.A)(a), _.default.clickedNotification());
                          },
                          tag: l,
                          isUserAvatar: !1,
                      },
                  ).then((e) => {
                      null != e && null != t && eE.track(t, e.notification, e.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (e) {
                  let { icon: t, title: n, body: i, route: r, trackingType: a, message: s, reactorUserId: l } = e;
                  if (eA() || null == n || null == i || null == a) return !1;
                  let o = s.channel_id;
                  if (null == o) return !1;
                  let d = G.A.getChannel(o);
                  if (null == d) return !1;
                  let c = $.default.getUser(l);
                  if (!(0, R.nR)({ message: s, channel: d, reactor: c, includeSelectedChannel: !ed })) return !1;
                  J.A.showNotification(
                      t,
                      n,
                      i,
                      { notif_type: a, notif_user_id: l, message_id: s.id },
                      {
                          onClick() {
                              null != r && ((0, m.A)(r), _.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((e) => {
                      null != e && null != o && eE.track(o, e.notification, e.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let e = (0, X.isWindows)(),
                      t = (0, X.isLinux)();
                  if (!(!s.w.get(eo, !1) && X.isPlatformEmbedded && (e || t))) return !1;
                  let i = !1;
                  return (
                      null != ec && (i = e_.includes(ec)),
                      !!i &&
                          (J.A.showNotification(
                              n(608598),
                              er.intl.string(er.t.VSgOVg),
                              er.intl.string(er.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, D.pX)((0, U.settingsPathToRoute)(e ? ei.od.WINDOWS : ei.od.LINUX));
                                  },
                                  onShown: () => {
                                      s.w.set(eo, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return s.w.remove(eo), !1;
              },
              CONNECTION_OPEN: function (e) {
                  let { countryCode: t, guilds: n } = e;
                  (ec = t), eu.clear(), n.forEach((e) => e.stage_instances.forEach((e) => eu.add(e.id)));
              },
              MESSAGE_REMINDER_DUE: function (e) {
                  let { savedMessage: t } = e;
                  if (eA()) return !1;
                  let n = t.message;
                  if (null == n || null == n.author) return !1;
                  let i = G.A.getChannel(t.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: r, body: a } = (0, R.TB)(i, n, n.author);
                  J.A.showNotification(
                      r,
                      er.intl.string(er.t.IjZJB5),
                      a,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, m.A)(ee.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (e) {
                  let { title: t, subtitle: i } = e;
                  if (eA() || !F.A.screenDowntimeReminder) return !1;
                  J.A.showNotification(
                      n(608598),
                      t,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
