"use strict";
n.d(t, { A: () => K });
var i,
    r,
    a = n(17928),
    s = n(713402),
    l = n(228366),
    o = n(380335),
    d = n(567249),
    c = n(734057),
    u = n(232835),
    _ = n(763827),
    E = n(568548),
    A = n(309010),
    h = n(543465),
    I = n(645959),
    f = n(927813),
    p = n(935208),
    T = n(206885),
    m = n(41984),
    g = n(956753),
    S = n(489277),
    N = n(222506),
    C = n(614455),
    R = (((i = {}).PRIVATE_CHANNELS = "PRIVATE_CHANNELS"), (i.GUILD_CHANNELS = "GUILD_CHANNELS"), i),
    O = (((r = {})[(r.READ = 0)] = "READ"), (r[(r.UNREAD = 1)] = "UNREAD"), (r[(r.MENTION = 2)] = "MENTION"), r);
function L(e, t) {
    return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0");
}
let y = new s.J(
        function (e) {
            return [e.isPrivateChannel ? R.PRIVATE_CHANNELS : R.GUILD_CHANNELS];
        },
        function (e) {
            let t = e.isPrivateChannel ? "0" : "1",
                n = e.mentionCount > 0 ? O.MENTION : e.hasUnread ? O.UNREAD : O.READ,
                i = String(O.MENTION - n),
                r = L(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
                a = L(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
            return `${t}\0${i}\0${r}\0${a}\0${e.channelId}`;
        },
    ),
    D = null,
    v = null,
    b = !1,
    M = null,
    P = 30 * f.A.Millis.MINUTE;
function U(e) {
    let t = c.A.getChannel(e),
        n = t?.lastMessageId;
    return null != n ? p.default.extractTimestamp(n) : Date.now();
}
function w(e, t, n, i, r) {
    let a;
    return {
        channelId: e,
        source: t,
        addedOnMs: n,
        lastActivityAtMs: i,
        lastMessageId: r,
        isPrivateChannel: ((a = c.A.getChannel(e)), a?.isPrivate() ?? !1),
        mentionCount: E.Ay.getMentionCount(e),
        hasUnread: E.Ay.hasUnread(e),
    };
}
function G() {
    y.clear(), (D = null), (v = null), (b = !1), (M = null);
}
function x() {
    let e = Date.now();
    G(),
        (v = e),
        (M = _.A.getChannelId() ?? null),
        (function (e) {
            let t = A.Ay.getChannelId();
            if (null != t && null != c.A.getChannel(t)) {
                if (((D = t), !y.has(t))) {
                    let n = U(t),
                        i = c.A.getChannel(t)?.lastMessageId ?? void 0,
                        r = w(t, m.B9.MANUAL, e, n, i);
                    y.set(t, r);
                }
            }
        })(e),
        (function (e) {
            let t = I.A.getPrivateChannelIds(),
                n = 0;
            for (let i of t) {
                if (n >= 3) return;
                if (y.has(i)) continue;
                let t = c.A.getChannel(i);
                if (null == t || !t.isPrivate() || h.Ay.isChannelMuted(null, i) || o.A.isMessageRequest(i)) continue;
                let r = t.lastMessageId;
                if (null == r) continue;
                let a = p.default.extractTimestamp(r);
                if (e - a > P) continue;
                let s = w(i, m.B9.MANUAL, e, a, r);
                y.set(i, s), n++;
            }
        })(e),
        V();
}
function k() {
    return _.A.getChannelId() ?? null;
}
function F(e) {
    if (null == e) return y.values()[0]?.channelId ?? null;
    for (let t of y.values()) if (t.channelId !== e) return t.channelId;
    return null;
}
function V() {
    let e = k();
    return null != e && !b && null == D && ((D = e), !0);
}
function B() {
    let e,
        t = (function () {
            if (null == D) return !1;
            let e = k();
            return e !== D && M === D && e !== D && ((D = F(M)), !0);
        })(),
        n = null == (e = k()) ? ((M = null), !!b && ((b = !1), !0)) : M !== e && ((M = e), !!b && ((b = !1), !0)),
        i = V();
    return t || n || i;
}
function H(e) {
    let t = y.get(e);
    if (null == t) return !1;
    let n = E.Ay.getMentionCount(e),
        i = E.Ay.hasUnread(e);
    return (t.mentionCount !== n || t.hasUnread !== i) && (y.set(e, { ...t, mentionCount: n, hasUnread: i }), !0);
}
function j(e) {
    let { channelId: t } = e;
    return H(t);
}
class W extends a.Ay.Store {
    static displayName = "Overlay-v3-Text-Chat-Store";
    initialize() {
        this.waitFor(C.A, N.A, S.A, d.A, c.A, u.A, o.A, _.A, I.A, E.Ay, A.Ay, h.Ay), x();
    }
    isChannelTracked(e) {
        return y.has(e);
    }
    getSessionEntries(e) {
        return [null != e ? y.values(e) : y.values(), y.version];
    }
    getSelectedChannelId() {
        return D;
    }
    getVoiceChatMinimized() {
        return b;
    }
}
function Y(e) {
    return (0, g.U5)(e, "OverlayTextChatStore");
}
let K = new W(
    l.h,
    __OVERLAY__ || (!T.O && !T.e)
        ? {}
        : {
              OVERLAY_MOUNTED: Y(function (e) {
                  return null == v && (x(), !0);
              }),
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: Y(function () {
                  return G(), !0;
              }),
              MESSAGE_ACK: Y(function (e) {
                  let { channelId: t } = e;
                  return H(t);
              }),
              CHANNEL_ACK: Y(j),
              CHANNEL_LOCAL_ACK: Y(j),
              BULK_ACK: Y(function (e) {
                  let { channels: t } = e,
                      n = !1;
                  for (let { channelId: e } of t) H(e) && (n = !0);
                  return n;
              }),
              VOICE_STATE_UPDATES: Y(B),
              VOICE_CHANNEL_SELECT: Y(B),
              OVERLAY_TEXT_CHAT_SELECT_CHANNEL: Y(function (e) {
                  let { channelId: t, source: n } = e;
                  return (function (e, t) {
                      if (null == e) return !1;
                      null == v && (v = Date.now()), D !== e && (D = e);
                      let n = k();
                      if ((null != n && e === n && b && (b = !1), null != D && !y.has(D))) {
                          let e = Date.now(),
                              n = U(D),
                              i = c.A.getChannel(D)?.lastMessageId ?? void 0,
                              r = w(D, t, e, n, i);
                          y.set(D, r);
                      }
                      return !0;
                  })(t ?? null, n);
              }),
              OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: Y(function (e) {
                  let t = (function (e) {
                          let { channelId: t, source: n, lastActivityAtMs: i, lastMessageId: r } = e,
                              a = y.get(t) ?? null,
                              s = null == a ? i : Math.max(a.lastActivityAtMs, i),
                              l = r ?? a?.lastMessageId,
                              o = w(t, n, a?.addedOnMs ?? i, s, l);
                          return y.set(t, o);
                      })({
                          channelId: e.channelId,
                          source: e.source,
                          lastActivityAtMs: e.lastActivityAtMs,
                          lastMessageId: e.lastMessageId,
                      }),
                      n = !1;
                  return null == D && ((D = e.channelId), (n = !0)), t || n;
              }),
              OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: Y(function (e) {
                  let t = y.delete(e.channelId),
                      n = !1;
                  if (D === e.channelId) {
                      let e = k();
                      (D = F(e) ?? (b || null == e ? null : e)), (n = !0);
                  }
                  return t || n;
              }),
              OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: Y(function () {
                  let e = y.size() > 0;
                  y.clear();
                  let t = k();
                  return (D = b || null == t ? null : t), e;
              }),
              OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: Y(function (e) {
                  let { minimized: t } = e;
                  if (b === t) return !1;
                  if (((b = t), !t)) return V(), !0;
                  let n = k();
                  return null != n && D === n && (D = F(n)), !0;
              }),
          },
);
