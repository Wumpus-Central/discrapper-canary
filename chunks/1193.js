"use strict";
n.d(t, { A: () => j });
var r = n(311907),
    i = n(713402),
    s = n(73153),
    a = n(380335),
    o = n(87001),
    l = n(734057),
    u = n(320501),
    c = n(383501),
    d = n(222823),
    _ = n(309010),
    f = n(543465),
    p = n(645959),
    h = n(927813),
    E = n(661191),
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
let v = new i.J(
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
    C = null,
    O = null,
    R = !1,
    b = null,
    D = 30 * h.A.Millis.MINUTE;
function L(e) {
    let t = l.A.getChannel(e),
        n = t?.lastMessageId;
    return null != n ? E.default.extractTimestamp(n) : Date.now();
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
        mentionCount: d.Ay.getMentionCount(e),
        hasUnread: d.Ay.hasUnread(e),
    };
}
function M() {
    v.clear(), (C = null), (O = null), (R = !1), (b = null);
}
function P() {
    let e = Date.now();
    M(),
        (O = e),
        (b = c.A.getChannelId() ?? null),
        (function (e) {
            let t = _.A.getChannelId();
            if (null != t && null != l.A.getChannel(t)) {
                if (((C = t), !v.has(t))) {
                    let n = L(t),
                        r = l.A.getChannel(t)?.lastMessageId ?? void 0,
                        i = w(t, g.B9.MANUAL, e, n, r);
                    v.set(t, i);
                }
            }
        })(e),
        (function (e) {
            let t = p.default.getPrivateChannelIds(),
                n = 0;
            for (let r of t) {
                if (n >= 3) return;
                if (v.has(r)) continue;
                let t = l.A.getChannel(r);
                if (null == t || !t.isPrivate() || f.Ay.isChannelMuted(null, r) || a.A.isMessageRequest(r)) continue;
                let i = t.lastMessageId;
                if (null == i) continue;
                let s = E.default.extractTimestamp(i);
                if (e - s > D) continue;
                let o = w(r, g.B9.MANUAL, e, s, i);
                v.set(r, o), n++;
            }
        })(e),
        U();
}
function x() {
    return c.A.getChannelId() ?? null;
}
function k(e) {
    if (null == e) return v.values()[0]?.channelId ?? null;
    for (let t of v.values()) if (t.channelId !== e) return t.channelId;
    return null;
}
function U() {
    let e = x();
    return null != e && !R && null == C && ((C = e), !0);
}
function G() {
    let e,
        t = (function () {
            if (null == C) return !1;
            let e = x();
            return e !== C && b === C && e !== C && ((C = k(b)), !0);
        })(),
        n = null == (e = x()) ? ((b = null), !!R && ((R = !1), !0)) : b !== e && ((b = e), !!R && ((R = !1), !0)),
        r = U();
    return t || n || r;
}
function F(e) {
    let t = v.get(e);
    if (null == t) return !1;
    let n = d.Ay.getMentionCount(e),
        r = d.Ay.hasUnread(e);
    return (t.mentionCount !== n || t.hasUnread !== r) && (v.set(e, { ...t, mentionCount: n, hasUnread: r }), !0);
}
function V(e) {
    let { channelId: t } = e;
    return F(t);
}
class B extends r.Ay.Store {
    static displayName = "Overlay-v3-Text-Chat-Store";
    initialize() {
        this.waitFor(S.A, T.A, I.A, o.A, l.A, u.A, a.A, c.A, p.default, d.Ay, _.A, f.Ay), P();
    }
    isChannelTracked(e) {
        return v.has(e);
    }
    getSessionEntries(e) {
        return [null != e ? v.values(e) : v.values(), v.version];
    }
    getSelectedChannelId() {
        return C;
    }
    getVoiceChatMinimized() {
        return R;
    }
}
let H = (e) => (0, A.U5)(e, "OverlayTextChatStore"),
    j = new B(
        s.h,
        __OVERLAY__ || (!m.O && !m.e)
            ? {}
            : {
                  OVERLAY_MOUNTED: H(function (e) {
                      return null == O && (P(), !0);
                  }),
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: H(function () {
                      return M(), !0;
                  }),
                  MESSAGE_ACK: H(function (e) {
                      let { channelId: t } = e;
                      return F(t);
                  }),
                  CHANNEL_ACK: H(V),
                  CHANNEL_LOCAL_ACK: H(V),
                  BULK_ACK: H(function (e) {
                      let { channels: t } = e,
                          n = !1;
                      for (let { channelId: e } of t) F(e) && (n = !0);
                      return n;
                  }),
                  VOICE_STATE_UPDATES: H(G),
                  VOICE_CHANNEL_SELECT: H(G),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: H(function (e) {
                      let { channelId: t, source: n } = e;
                      return (function (e, t) {
                          if (null == e) return !1;
                          null == O && (O = Date.now()), C !== e && (C = e);
                          let n = x();
                          if ((null != n && e === n && R && (R = !1), null != C && !v.has(C))) {
                              let e = Date.now(),
                                  n = L(C),
                                  r = l.A.getChannel(C)?.lastMessageId ?? void 0,
                                  i = w(C, t, e, n, r);
                              v.set(C, i);
                          }
                          return !0;
                      })(t ?? null, n);
                  }),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: H(function (e) {
                      let t = (function (e) {
                              let { channelId: t, source: n, lastActivityAtMs: r, lastMessageId: i } = e,
                                  s = v.get(t) ?? null,
                                  a = null == s ? r : Math.max(s.lastActivityAtMs, r),
                                  o = i ?? s?.lastMessageId,
                                  l = w(t, n, s?.addedOnMs ?? r, a, o);
                              return v.set(t, l);
                          })({
                              channelId: e.channelId,
                              source: e.source,
                              lastActivityAtMs: e.lastActivityAtMs,
                              lastMessageId: e.lastMessageId,
                          }),
                          n = !1;
                      return null == C && ((C = e.channelId), (n = !0)), t || n;
                  }),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: H(function (e) {
                      let t = v.delete(e.channelId),
                          n = !1;
                      if (C === e.channelId) {
                          let e = x();
                          (C = k(e) ?? (R || null == e ? null : e)), (n = !0);
                      }
                      return t || n;
                  }),
                  OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: H(function () {
                      let e = v.size() > 0;
                      v.clear();
                      let t = x();
                      return (C = R || null == t ? null : t), e;
                  }),
                  OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: H(function (e) {
                      let { minimized: t } = e;
                      if (R === t) return !1;
                      if (((R = t), !t)) return U(), !0;
                      let n = x();
                      return null != n && C === n && (C = k(n)), !0;
                  }),
              },
    );
