"use strict";
n.d(t, { A: () => Y });
var r = n(311907),
    i = n(713402),
    s = n(73153),
    a = n(380335),
    o = n(87001),
    l = n(734057),
    u = n(320501),
    d = n(383501),
    c = n(222823),
    _ = n(309010),
    f = n(543465),
    E = n(645959),
    h = n(927813),
    p = n(661191),
    m = n(206885),
    g = n(41984),
    A = n(956753),
    I = n(395011),
    T = n(222506),
    S = n(680243),
    y = n(141048);
function N(e, t) {
    return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0");
}
let O = new i.J(
        function (e) {
            return [e.isPrivateChannel ? y.B.PRIVATE_CHANNELS : y.B.GUILD_CHANNELS];
        },
        function (e) {
            let t = e.isPrivateChannel ? "0" : "1",
                n = e.mentionCount > 0 ? y.G.MENTION : e.hasUnread ? y.G.UNREAD : y.G.READ,
                r = String(y.G.MENTION - n),
                i = N(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
                s = N(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
            return `${t}\0${r}\0${i}\0${s}\0${e.channelId}`;
        },
    ),
    R = null,
    v = null,
    C = !1,
    b = null,
    D = 30 * h.A.Millis.MINUTE;
function L(e) {
    let t = l.A.getChannel(e),
        n = t?.lastMessageId;
    return null != n ? p.default.extractTimestamp(n) : Date.now();
}
function w(e, t, n, r, i) {
    let s;
    return {
        channelId: e,
        source: t,
        addedOnMs: n,
        lastActivityAtMs: r,
        lastMessageId: i,
        isPrivateChannel: ((s = l.A.getChannel(e)), s?.isPrivate() ?? !1),
        mentionCount: c.Ay.getMentionCount(e),
        hasUnread: c.Ay.hasUnread(e),
    };
}
function M() {
    O.clear(), (R = null), (v = null), (C = !1), (b = null);
}
function P() {
    let e = Date.now();
    M(),
        (v = e),
        (b = d.A.getChannelId() ?? null),
        (function (e) {
            let t = _.A.getChannelId();
            if (null != t && null != l.A.getChannel(t)) {
                if (((R = t), !O.has(t))) {
                    let n = L(t),
                        r = l.A.getChannel(t)?.lastMessageId ?? void 0,
                        i = w(t, g.B9.MANUAL, e, n, r);
                    O.set(t, i);
                }
            }
        })(e),
        (function (e) {
            let t = E.default.getPrivateChannelIds(),
                n = 0;
            for (let r of t) {
                if (n >= 3) return;
                if (O.has(r)) continue;
                let t = l.A.getChannel(r);
                if (null == t || !t.isPrivate() || f.Ay.isChannelMuted(null, r) || a.A.isMessageRequest(r)) continue;
                let i = t.lastMessageId;
                if (null == i) continue;
                let s = p.default.extractTimestamp(i);
                if (e - s > D) continue;
                let o = w(r, g.B9.MANUAL, e, s, i);
                O.set(r, o), n++;
            }
        })(e),
        x();
}
function U() {
    return d.A.getChannelId() ?? null;
}
function k(e) {
    if (null == e) return O.values()[0]?.channelId ?? null;
    for (let t of O.values()) if (t.channelId !== e) return t.channelId;
    return null;
}
function x() {
    let e = U();
    return null != e && !C && null == R && ((R = e), !0);
}
function G() {
    let e,
        t = (function () {
            if (null == R) return !1;
            let e = U();
            return e !== R && b === R && e !== R && ((R = k(b)), !0);
        })(),
        n = null == (e = U()) ? ((b = null), !!C && ((C = !1), !0)) : b !== e && ((b = e), !!C && ((C = !1), !0)),
        r = x();
    return t || n || r;
}
function V(e) {
    let t = O.get(e);
    if (null == t) return !1;
    let n = c.Ay.getMentionCount(e),
        r = c.Ay.hasUnread(e);
    return (t.mentionCount !== n || t.hasUnread !== r) && (O.set(e, { ...t, mentionCount: n, hasUnread: r }), !0);
}
function F(e) {
    let { channelId: t } = e;
    return V(t);
}
class B extends r.Ay.Store {
    static displayName = "Overlay-v3-Text-Chat-Store";
    initialize() {
        this.waitFor(S.A, T.A, I.A, o.A, l.A, u.A, a.A, d.A, E.default, c.Ay, _.A, f.Ay), P();
    }
    isChannelTracked(e) {
        return O.has(e);
    }
    getSessionEntries(e) {
        return [null != e ? O.values(e) : O.values(), O.version];
    }
    getSelectedChannelId() {
        return R;
    }
    getVoiceChatMinimized() {
        return C;
    }
}
let H = (e) => (0, A.U5)(e, "OverlayTextChatStore"),
    Y = new B(
        s.h,
        __OVERLAY__ || (!m.O && !m.e)
            ? {}
            : {
                  OVERLAY_MOUNTED: H(function (e) {
                      return null == v && (P(), !0);
                  }),
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: H(function () {
                      return M(), !0;
                  }),
                  MESSAGE_ACK: H(function (e) {
                      let { channelId: t } = e;
                      return V(t);
                  }),
                  CHANNEL_ACK: H(F),
                  CHANNEL_LOCAL_ACK: H(F),
                  BULK_ACK: H(function (e) {
                      let { channels: t } = e,
                          n = !1;
                      for (let { channelId: e } of t) V(e) && (n = !0);
                      return n;
                  }),
                  VOICE_STATE_UPDATES: H(G),
                  VOICE_CHANNEL_SELECT: H(G),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: H(function (e) {
                      let { channelId: t, source: n } = e;
                      return (function (e, t) {
                          if (null == e) return !1;
                          null == v && (v = Date.now()), R !== e && (R = e);
                          let n = U();
                          if ((null != n && e === n && C && (C = !1), null != R && !O.has(R))) {
                              let e = Date.now(),
                                  n = L(R),
                                  r = l.A.getChannel(R)?.lastMessageId ?? void 0,
                                  i = w(R, t, e, n, r);
                              O.set(R, i);
                          }
                          return !0;
                      })(t ?? null, n);
                  }),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: H(function (e) {
                      let t = (function (e) {
                              let { channelId: t, source: n, lastActivityAtMs: r, lastMessageId: i } = e,
                                  s = O.get(t) ?? null,
                                  a = null == s ? r : Math.max(s.lastActivityAtMs, r),
                                  o = i ?? s?.lastMessageId,
                                  l = w(t, n, s?.addedOnMs ?? r, a, o);
                              return O.set(t, l);
                          })({
                              channelId: e.channelId,
                              source: e.source,
                              lastActivityAtMs: e.lastActivityAtMs,
                              lastMessageId: e.lastMessageId,
                          }),
                          n = !1;
                      return null == R && ((R = e.channelId), (n = !0)), t || n;
                  }),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: H(function (e) {
                      let t = O.delete(e.channelId),
                          n = !1;
                      if (R === e.channelId) {
                          let e = U();
                          (R = k(e) ?? (C || null == e ? null : e)), (n = !0);
                      }
                      return t || n;
                  }),
                  OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: H(function () {
                      let e = O.size() > 0;
                      O.clear();
                      let t = U();
                      return (R = C || null == t ? null : t), e;
                  }),
                  OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: H(function (e) {
                      let { minimized: t } = e;
                      if (C === t) return !1;
                      if (((C = t), !t)) return x(), !0;
                      let n = U();
                      return null != n && R === n && (R = k(n)), !0;
                  }),
              },
    );
