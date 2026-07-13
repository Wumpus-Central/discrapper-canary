"use strict";
n.d(t, { pD: () => el, cH: () => es }), n(321073);
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
    O = n(944043),
    R = n(181370),
    L = n.n(R),
    D = n(695515),
    y = n(976860),
    v = n(378570),
    b = n(790535),
    M = n(446600),
    P = n(747926),
    U = n(885386),
    w = n(718446),
    G = n(260509),
    x = n(734057),
    k = n(71393),
    F = n(232835),
    V = n(803224),
    B = n(576705),
    H = n(568548),
    j = n(994500),
    W = n(309010),
    Y = n(461213),
    K = n(351906),
    $ = n(870570),
    z = n(287809),
    q = n(977997),
    Z = n(174459),
    X = n(562153),
    Q = n(723702),
    J = n(427262),
    ee = n(479975),
    et = n(652215),
    en = n(988794),
    ei = n(672396),
    er = n(355097),
    ea = n(375708);
let es = "message1",
    el = 0.4,
    eo = A.A?.features.supports("notifications") ? 20 : 1,
    ed = "discord_dismissed_notification_shown",
    ec = document.hasFocus(),
    eu = null,
    e_ = new Set(),
    eE = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    eA = new (class {
        _channels = {};
        track(e, t, n) {
            let i = this._channels[e];
            for (
                null == i && ((i = []), (this._channels[e] = i)), i.push({ notification: t, trackingProps: n });
                i.length > eo;
            ) {
                let e = i.shift();
                e?.notification?.close != null &&
                    (e.notification.close(),
                    Z.default.track(et.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...e.trackingProps }));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(), Z.default.track(et.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function eh() {
    return !!(
        V.A.getDesktopType() === et.nRU.NEVER ||
        Y.A.getStatus() === et.clD.DND ||
        U.NO.getSetting() ||
        D.A.isCurrentUserInRestrictedHours()
    );
}
function eI(e) {
    N.A.increment({
        name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
        tags: [`reason:${e ? "played" : "disabled_by_user"}`],
    });
}
function ef(e) {
    return null != q.A.getVoiceStateForChannel(e);
}
class ep extends a.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(h.A, x.A, D.A, k.A, g.A, F.A, V.A, B.A, H.Ay, j.A, W.A, Y.A, M.A, K.A, $.A, z.default, q.A);
    }
}
new ep(
    o.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t !== et.kCE.ENABLED ||
                      Q.isPlatformEmbedded ||
                      ee.A.showNotification(
                          n(705194),
                          ea.intl.string(ea.t.VSgOVg),
                          ea.intl.string(ea.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: es,
                              volume: el,
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
                  return !eh() && (ee.A.showNotification(t, n, i, r, a), !1);
              },
              WINDOW_FOCUS: function (e) {
                  if ((ec = e.focused)) {
                      let e = W.A.getChannelId();
                      null != e && eA.clearChannel(e);
                  }
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: r, optimistic: a } = e;
                  if (a) return !1;
                  let s = x.A.getChannel(t),
                      d = z.default.getUser(r.author?.id),
                      u = z.default.getCurrentUser();
                  if (null == s || null == d || null == u) return !1;
                  let E = F.A.getMessage(t, r.id) ?? (0, S.rh)(r),
                      A = H.Ay.getMentionCount(t);
                  (0, H.Wm)(E, u) && A > 0 && l.O.announce((0, I.Ay)({ channel: s, mentionCount: A }));
                  let f = (0, O.lx)(r, t, !ec),
                      p = V.A.getNotifyMessagesInSelectedChannel() && (0, O.kY)(r, t);
                  if (!f && !p) return !1;
                  if (D.A.isCurrentUserInRestrictedHours())
                      return (
                          N.A.increment({
                              name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:restricted_hours"],
                          }),
                          !1
                      );
                  if ($.A.hasAction())
                      return (
                          N.A.increment({
                              name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:required_action"],
                          }),
                          !1
                      );
                  if (
                      r.type === et.lAJ.CHANGELOG &&
                      (null == r.changelog_id || h.A.latestChangelogId() !== r.changelog_id)
                  )
                      return !1;
                  let T = !V.A.isSoundDisabled(es);
                  if ((p && (eI(T), T && ee.A.playNotificationSound("message3", 0.4), !ec)) || !f) return !1;
                  let m = n(773371).default,
                      g = n(592598).A;
                  if (
                      null != m.getFocusedPID() &&
                      !g.isNotificationDisabled(ei.KS.TextChat) &&
                      !K.A.disableNotifications
                  )
                      return !1;
                  let { icon: R, title: y, body: b, emoji: M } = (0, O.TB)(s, r, d),
                      P = !(function (e) {
                          let t;
                          return (
                              null != e &&
                              ((t = L().v3(String(e))) < 0 && (t += 0x100000000), t % 0x7fffffff < 21474836.47)
                          );
                      })(u?.id);
                  if (
                      (o.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: s.id,
                          message: r,
                          icon: R,
                          title: y,
                          body: b,
                      }),
                      (0, C.n)(r, s.guild_id),
                      V.A.getDesktopType() === et.nRU.NEVER)
                  )
                      return eI(T), T && ee.A.playNotificationSound(es, el), !1;
                  eI(T),
                      ee.A.showNotification(
                          R,
                          y,
                          b,
                          {
                              notif_type: "MESSAGE_CREATE",
                              notif_user_id: r.author?.id,
                              message_id: r.id,
                              message_type: r.type,
                              channel_id: s.id,
                              channel_type: s.type,
                              guild_id: s.guild_id,
                              badge: (0, H.Wm)(E, u),
                          },
                          {
                              omitViewTracking: P,
                              tag: r.id,
                              sound: T ? es : void 0,
                              volume: el,
                              onClick() {
                                  (0, v.iN)(s.id),
                                      (s.type === et.rbe.GUILD_VOICE || s.type === et.rbe.GUILD_STAGE_VOICE) &&
                                          c.A.updateChatOpen(s.id, !0),
                                      _.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: E,
                              fallbackDeepLink: (0, ee.I)(et.BVt.CHANNEL(s.guild_id, s.id, r.id)),
                              emoji: M,
                          },
                      ).then((e) => {
                          null != e && eA.track(s.id, e.notification, e.trackingProps);
                      });
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && eA.clearChannel(t), !1;
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return eA.clearChannel(t), !1;
              },
              ACTIVITY_START: function (e) {
                  let { userId: t, activity: n } = e;
                  if (eh() || n.type !== et.$pd.PLAYING) return !1;
                  {
                      let e = z.default.getUser(t);
                      if (null == e) return !1;
                      let i = J.Ay.getName(e),
                          r = n.name,
                          a = e.getAvatarURL(void 0, 128),
                          s = ea.intl.string(ea.t.XoTWsI),
                          l = ea.intl.formatToPlainString(ea.t.o4Aipn, { username: i, gameName: r });
                      return (
                          ee.A.showNotification(
                              a,
                              s,
                              l,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: et.$pd.PLAYING,
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
                  if (eh()) return;
                  let n = z.default.getCurrentUser();
                  if (null == n) return;
                  let i = t.find((e) => e.userId === n.id);
                  if (null == i) return;
                  let { channelId: r, guildId: a, suppress: s, requestToSpeakTimestamp: l } = i;
                  if (null == r || null == a || !(!s && null != l)) return;
                  let o = k.A.getGuild(a),
                      d = x.A.getChannel(r),
                      c = M.A.getStageInstanceByChannel(r);
                  null != o &&
                      null != d &&
                      null != c &&
                      ee.A.showNotification(
                          (0, G.Iv)(o, 128),
                          (0, f.m1)(d, z.default, j.A),
                          ea.intl.formatToPlainString(ea.t.sqnsSP, {
                              channelName: (0, f.m1)(d, z.default, j.A),
                              channelTopic: c?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (e) {
                  let { instance: t } = e;
                  if (eh() || !t.send_start_notification || ef(t.channel_id)) return !1;
                  let n = z.default.getCurrentUser(),
                      i = k.A.getGuild(t.guild_id),
                      a = x.A.getChannel(t.channel_id),
                      s = z.default.getUser(t.host_id);
                  if (
                      null == n ||
                      null == a ||
                      null == i ||
                      null == s ||
                      !(0, O.Wv)(n, s, a) ||
                      !B.A.can(r.kg(et.xBc.CONNECT, et.xBc.VIEW_CHANNEL), a) ||
                      e_.has(t.id)
                  )
                      return !1;
                  e_.add(t.id),
                      ee.A.showNotification(
                          (0, G.Iv)(i, 128),
                          ea.intl.formatToPlainString(ea.t.bZ4Okd, { guildName: i.name }),
                          ea.intl.formatToPlainString(ea.t.qTelnO, {
                              username: X.Ay.getName(i.id, a.id, s),
                              topic: t.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: i.id, channel_id: a.id },
                          {
                              onClick() {
                                  (0, b.av)(a);
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              STAGE_INSTANCE_DELETE: function (e) {
                  let { instance: t } = e;
                  e_.delete(t.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                  let { guildScheduledEvent: t } = e;
                  if (eh() || null == t.notification_type) return !1;
                  t.notification_type === en.b8.EVENT_START
                      ? t.entity_type === en.Ps.STAGE_INSTANCE || t.entity_type === en.Ps.VOICE
                          ? (function (e) {
                                if (eh()) return;
                                let t = e.channel_id;
                                if (null == t || ef(t)) return;
                                let n = z.default.getCurrentUser(),
                                    i = k.A.getGuild(e.guild_id),
                                    a = x.A.getChannel(e.channel_id),
                                    s = z.default.getUser(e.host_id);
                                null != n &&
                                    null != a &&
                                    null != i &&
                                    null != s &&
                                    B.A.can(r.kg(et.xBc.CONNECT, et.xBc.VIEW_CHANNEL), a) &&
                                    ee.A.showNotification(
                                        (0, G.Iv)(i, 128),
                                        ea.intl.formatToPlainString(ea.t.bOu6Wn, { guildName: i.name }),
                                        ea.intl.formatToPlainString(ea.t.GV9L8u, {
                                            topic: e.name,
                                            username: X.Ay.getName(i.id, a.id, s),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: i.id,
                                            channel_id: a.id,
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === en.Ps.STAGE_INSTANCE && (0, b.av)(a),
                                                    e.entity_type === en.Ps.VOICE && E.default.selectVoiceChannel(a.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t)
                          : t.entity_type === en.Ps.EXTERNAL &&
                            (function (e) {
                                if (eh()) return;
                                let t = z.default.getCurrentUser(),
                                    n = k.A.getGuild(e.guild_id);
                                null == t ||
                                    null == n ||
                                    ee.A.showNotification(
                                        (0, G.Iv)(n, 128),
                                        ea.intl.formatToPlainString(ea.t.bOu6Wn, { guildName: n.name }),
                                        ea.intl.formatToPlainString(ea.t.mYyaRB, { topic: e.name }),
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
                  if (eh()) return !1;
                  let i = x.A.getChannel(t.parent_id);
                  if (null == i || !et.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, O.q1)(t, i, !ec)) return !1;
                  let { author: r, user: a } = (0, p.tY)(t);
                  if (null == a) return !1;
                  let s = k.A.getGuild(i.guild_id);
                  if (null == s) return !1;
                  let l = ea.intl.formatToPlainString(ea.t["2IGVl5"], {
                          channelName: (0, f.m1)(i, z.default, j.A),
                          guildName: s.name,
                      }),
                      o = ea.intl.formatToPlainString(ea.t.jPhTvT, {
                          channelName: (0, f.m1)(t, z.default, j.A),
                          userUsername: r?.nick ?? a?.username,
                      }),
                      d = a.getAvatarURL(void 0, 128);
                  ee.A.showNotification(
                      d,
                      l,
                      o,
                      { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                      {
                          onClick() {
                              (0, P.JA)(t);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                  let t,
                      { icon: n, title: i, body: r, route: a, trackingType: s, tag: l } = e;
                  if (eh() || null == i || null == r || null == s || "reactions_push_notification" === s.toLowerCase())
                      return !1;
                  ee.A.showNotification(
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
                      null != e && null != t && eA.track(t, e.notification, e.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (e) {
                  let { icon: t, title: n, body: i, route: r, trackingType: a, message: s, reactorUserId: l } = e;
                  if (eh() || null == n || null == i || null == a) return !1;
                  let o = s.channel_id;
                  if (null == o) return !1;
                  let d = x.A.getChannel(o);
                  if (null == d) return !1;
                  let c = z.default.getUser(l);
                  if (!(0, O.nR)({ message: s, channel: d, reactor: c, includeSelectedChannel: !ec })) return !1;
                  ee.A.showNotification(
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
                      null != e && null != o && eA.track(o, e.notification, e.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let e = (0, Q.isWindows)(),
                      t = (0, Q.isLinux)();
                  if (!(!s.w.get(ed, !1) && Q.isPlatformEmbedded && (e || t))) return !1;
                  let i = !1;
                  return (
                      null != eu && (i = eE.includes(eu)),
                      !!i &&
                          (ee.A.showNotification(
                              n(608598),
                              ea.intl.string(ea.t.VSgOVg),
                              ea.intl.string(ea.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, y.pX)((0, w.settingsPathToRoute)(e ? er.od.WINDOWS : er.od.LINUX));
                                  },
                                  onShown: () => {
                                      s.w.set(ed, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return s.w.remove(ed), !1;
              },
              CONNECTION_OPEN: function (e) {
                  let { countryCode: t, guilds: n } = e;
                  (eu = t), e_.clear(), n.forEach((e) => e.stage_instances.forEach((e) => e_.add(e.id)));
              },
              MESSAGE_REMINDER_DUE: function (e) {
                  let { savedMessage: t } = e;
                  if (eh()) return !1;
                  let n = t.message;
                  if (null == n || null == n.author) return !1;
                  let i = x.A.getChannel(t.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: r, body: a } = (0, O.TB)(i, n, n.author);
                  ee.A.showNotification(
                      r,
                      ea.intl.string(ea.t.IjZJB5),
                      a,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, m.A)(et.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (e) {
                  let { title: t, subtitle: i } = e;
                  if (eh() || !V.A.screenDowntimeReminder) return !1;
                  ee.A.showNotification(
                      n(608598),
                      t,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
