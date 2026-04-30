"use strict";
n.d(t, { A: () => K });
var i,
    r,
    s = n(17928),
    a = n(713402),
    o = n(228366),
    l = n(380335),
    u = n(567249),
    c = n(734057),
    d = n(232835),
    _ = n(763827),
    f = n(222823),
    h = n(309010),
    p = n(543465),
    E = n(567761),
    m = n(927813),
    g = n(935208),
    A = n(206885),
    I = n(41984),
    T = n(956753),
    S = n(489277),
    N = n(222506),
    y = n(614455),
    C = (((i = {}).PRIVATE_CHANNELS = "PRIVATE_CHANNELS"), (i.GUILD_CHANNELS = "GUILD_CHANNELS"), i),
    v = (((r = {})[(r.READ = 0)] = "READ"), (r[(r.UNREAD = 1)] = "UNREAD"), (r[(r.MENTION = 2)] = "MENTION"), r);
function O(e, t) {
    return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0");
}
let R = new a.J(
        function (e) {
            return [e.isPrivateChannel ? C.PRIVATE_CHANNELS : C.GUILD_CHANNELS];
        },
        function (e) {
            let t = e.isPrivateChannel ? "0" : "1",
                n = e.mentionCount > 0 ? v.MENTION : e.hasUnread ? v.UNREAD : v.READ,
                i = String(v.MENTION - n),
                r = O(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
                s = O(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
            return `${t}\0${i}\0${r}\0${s}\0${e.channelId}`;
        },
    ),
    b = null,
    D = null,
    L = !1,
    w = null,
    M = 30 * m.A.Millis.MINUTE;
function P(e) {
    let t = c.A.getChannel(e),
        n = t?.lastMessageId;
    return null != n ? g.default.extractTimestamp(n) : Date.now();
}
function x(e, t, n, i, r) {
    let s;
    return {
        channelId: e,
        source: t,
        addedOnMs: n,
        lastActivityAtMs: i,
        lastMessageId: r,
        isPrivateChannel: ((s = c.A.getChannel(e)), s?.isPrivate() ?? !1),
        mentionCount: f.Ay.getMentionCount(e),
        hasUnread: f.Ay.hasUnread(e),
    };
}
function U() {
    R.clear(), (b = null), (D = null), (L = !1), (w = null);
}
function k() {
    let e = Date.now();
    U(),
        (D = e),
        (w = _.A.getChannelId() ?? null),
        (function (e) {
            let t = h.A.getChannelId();
            if (null != t && null != c.A.getChannel(t)) {
                if (((b = t), !R.has(t))) {
                    let n = P(t),
                        i = c.A.getChannel(t)?.lastMessageId ?? void 0,
                        r = x(t, I.B9.MANUAL, e, n, i);
                    R.set(t, r);
                }
            }
        })(e),
        (function (e) {
            let t = E.default.getPrivateChannelIds(),
                n = 0;
            for (let i of t) {
                if (n >= 3) return;
                if (R.has(i)) continue;
                let t = c.A.getChannel(i);
                if (null == t || !t.isPrivate() || p.Ay.isChannelMuted(null, i) || l.A.isMessageRequest(i)) continue;
                let r = t.lastMessageId;
                if (null == r) continue;
                let s = g.default.extractTimestamp(r);
                if (e - s > M) continue;
                let a = x(i, I.B9.MANUAL, e, s, r);
                R.set(i, a), n++;
            }
        })(e),
        V();
}
function G() {
    return _.A.getChannelId() ?? null;
}
function F(e) {
    if (null == e) return R.values()[0]?.channelId ?? null;
    for (let t of R.values()) if (t.channelId !== e) return t.channelId;
    return null;
}
function V() {
    let e = G();
    return null != e && !L && null == b && ((b = e), !0);
}
function B() {
    let e,
        t = (function () {
            if (null == b) return !1;
            let e = G();
            return e !== b && w === b && e !== b && ((b = F(w)), !0);
        })(),
        n = null == (e = G()) ? ((w = null), !!L && ((L = !1), !0)) : w !== e && ((w = e), !!L && ((L = !1), !0)),
        i = V();
    return t || n || i;
}
function H(e) {
    let t = R.get(e);
    if (null == t) return !1;
    let n = f.Ay.getMentionCount(e),
        i = f.Ay.hasUnread(e);
    return (t.mentionCount !== n || t.hasUnread !== i) && (R.set(e, { ...t, mentionCount: n, hasUnread: i }), !0);
}
function j(e) {
    let { channelId: t } = e;
    return H(t);
}
class Y extends s.Ay.Store {
    static displayName = "Overlay-v3-Text-Chat-Store";
    initialize() {
        this.waitFor(y.A, N.A, S.A, u.A, c.A, d.A, l.A, _.A, E.default, f.Ay, h.A, p.Ay), k();
    }
    isChannelTracked(e) {
        return R.has(e);
    }
    getSessionEntries(e) {
        return [null != e ? R.values(e) : R.values(), R.version];
    }
    getSelectedChannelId() {
        return b;
    }
    getVoiceChatMinimized() {
        return L;
    }
}
let W = (e) => (0, T.U5)(e, "OverlayTextChatStore"),
    K = new Y(
        o.h,
        __OVERLAY__ || (!A.O && !A.e)
            ? {}
            : {
                  OVERLAY_MOUNTED: W(function (e) {
                      return null == D && (k(), !0);
                  }),
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: W(function () {
                      return U(), !0;
                  }),
                  MESSAGE_ACK: W(function (e) {
                      let { channelId: t } = e;
                      return H(t);
                  }),
                  CHANNEL_ACK: W(j),
                  CHANNEL_LOCAL_ACK: W(j),
                  BULK_ACK: W(function (e) {
                      let { channels: t } = e,
                          n = !1;
                      for (let { channelId: e } of t) H(e) && (n = !0);
                      return n;
                  }),
                  VOICE_STATE_UPDATES: W(B),
                  VOICE_CHANNEL_SELECT: W(B),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: W(function (e) {
                      let { channelId: t, source: n } = e;
                      return (function (e, t) {
                          if (null == e) return !1;
                          null == D && (D = Date.now()), b !== e && (b = e);
                          let n = G();
                          if ((null != n && e === n && L && (L = !1), null != b && !R.has(b))) {
                              let e = Date.now(),
                                  n = P(b),
                                  i = c.A.getChannel(b)?.lastMessageId ?? void 0,
                                  r = x(b, t, e, n, i);
                              R.set(b, r);
                          }
                          return !0;
                      })(t ?? null, n);
                  }),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: W(function (e) {
                      let t = (function (e) {
                              let { channelId: t, source: n, lastActivityAtMs: i, lastMessageId: r } = e,
                                  s = R.get(t) ?? null,
                                  a = null == s ? i : Math.max(s.lastActivityAtMs, i),
                                  o = r ?? s?.lastMessageId,
                                  l = x(t, n, s?.addedOnMs ?? i, a, o);
                              return R.set(t, l);
                          })({
                              channelId: e.channelId,
                              source: e.source,
                              lastActivityAtMs: e.lastActivityAtMs,
                              lastMessageId: e.lastMessageId,
                          }),
                          n = !1;
                      return null == b && ((b = e.channelId), (n = !0)), t || n;
                  }),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: W(function (e) {
                      let t = R.delete(e.channelId),
                          n = !1;
                      if (b === e.channelId) {
                          let e = G();
                          (b = F(e) ?? (L || null == e ? null : e)), (n = !0);
                      }
                      return t || n;
                  }),
                  OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: W(function () {
                      let e = R.size() > 0;
                      R.clear();
                      let t = G();
                      return (b = L || null == t ? null : t), e;
                  }),
                  OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: W(function (e) {
                      let { minimized: t } = e;
                      if (L === t) return !1;
                      if (((L = t), !t)) return V(), !0;
                      let n = G();
                      return null != n && b === n && (b = F(n)), !0;
                  }),
              },
    );
