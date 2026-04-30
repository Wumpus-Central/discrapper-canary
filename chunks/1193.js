n.d(t, { A: () => x });
var i = n(17928),
    r = n(713402),
    a = n(228366),
    l = n(380335),
    s = n(567249),
    E = n(734057),
    _ = n(232835),
    o = n(763827),
    u = n(222823),
    A = n(309010),
    d = n(543465),
    c = n(567761),
    I = n(927813),
    T = n(935208),
    N = n(206885),
    S = n(41984),
    O = n(956753),
    C = n(489277),
    p = n(222506),
    R = n(680243),
    g = n(141048);
function M(e, t) {
    return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0");
}
let h = new r.J(
        function (e) {
            return [e.isPrivateChannel ? g.B.PRIVATE_CHANNELS : g.B.GUILD_CHANNELS];
        },
        function (e) {
            let t = e.isPrivateChannel ? "0" : "1",
                n = e.mentionCount > 0 ? g.G.MENTION : e.hasUnread ? g.G.UNREAD : g.G.READ,
                i = String(g.G.MENTION - n),
                r = M(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
                a = M(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
            return `${t}\0${i}\0${r}\0${a}\0${e.channelId}`;
        },
    ),
    m = null,
    L = null,
    D = !1,
    y = null,
    f = 30 * I.A.Millis.MINUTE;
function U(e) {
    let t = E.A.getChannel(e),
        n = t?.lastMessageId;
    return null != n ? T.default.extractTimestamp(n) : Date.now();
}
function P(e, t, n, i, r) {
    let a;
    return {
        channelId: e,
        source: t,
        addedOnMs: n,
        lastActivityAtMs: i,
        lastMessageId: r,
        isPrivateChannel: ((a = E.A.getChannel(e)), a?.isPrivate() ?? !1),
        mentionCount: u.Ay.getMentionCount(e),
        hasUnread: u.Ay.hasUnread(e),
    };
}
function G() {
    h.clear(), (m = null), (L = null), (D = !1), (y = null);
}
function B() {
    let e = Date.now();
    G(),
        (L = e),
        (y = o.A.getChannelId() ?? null),
        (function (e) {
            let t = A.A.getChannelId();
            if (null != t && null != E.A.getChannel(t)) {
                if (((m = t), !h.has(t))) {
                    let n = U(t),
                        i = E.A.getChannel(t)?.lastMessageId ?? void 0,
                        r = P(t, S.B9.MANUAL, e, n, i);
                    h.set(t, r);
                }
            }
        })(e),
        (function (e) {
            let t = c.default.getPrivateChannelIds(),
                n = 0;
            for (let i of t) {
                if (n >= 3) return;
                if (h.has(i)) continue;
                let t = E.A.getChannel(i);
                if (null == t || !t.isPrivate() || d.Ay.isChannelMuted(null, i) || l.A.isMessageRequest(i)) continue;
                let r = t.lastMessageId;
                if (null == r) continue;
                let a = T.default.extractTimestamp(r);
                if (e - a > f) continue;
                let s = P(i, S.B9.MANUAL, e, a, r);
                h.set(i, s), n++;
            }
        })(e),
        H();
}
function v() {
    return o.A.getChannelId() ?? null;
}
function b(e) {
    if (null == e) return h.values()[0]?.channelId ?? null;
    for (let t of h.values()) if (t.channelId !== e) return t.channelId;
    return null;
}
function H() {
    let e = v();
    return null != e && !D && null == m && ((m = e), !0);
}
function w() {
    let e,
        t = (function () {
            if (null == m) return !1;
            let e = v();
            return e !== m && y === m && e !== m && ((m = b(y)), !0);
        })(),
        n = null == (e = v()) ? ((y = null), !!D && ((D = !1), !0)) : y !== e && ((y = e), !!D && ((D = !1), !0)),
        i = H();
    return t || n || i;
}
function F(e) {
    let t = h.get(e);
    if (null == t) return !1;
    let n = u.Ay.getMentionCount(e),
        i = u.Ay.hasUnread(e);
    return (t.mentionCount !== n || t.hasUnread !== i) && (h.set(e, { ...t, mentionCount: n, hasUnread: i }), !0);
}
function V(e) {
    let { channelId: t } = e;
    return F(t);
}
class k extends i.Ay.Store {
    static displayName = "Overlay-v3-Text-Chat-Store";
    initialize() {
        this.waitFor(R.A, p.A, C.A, s.A, E.A, _.A, l.A, o.A, c.default, u.Ay, A.A, d.Ay), B();
    }
    isChannelTracked(e) {
        return h.has(e);
    }
    getSessionEntries(e) {
        return [null != e ? h.values(e) : h.values(), h.version];
    }
    getSelectedChannelId() {
        return m;
    }
    getVoiceChatMinimized() {
        return D;
    }
}
let W = (e) => (0, O.U5)(e, "OverlayTextChatStore"),
    x = new k(
        a.h,
        __OVERLAY__ || (!N.O && !N.e)
            ? {}
            : {
                  OVERLAY_MOUNTED: W(function (e) {
                      return null == L && (B(), !0);
                  }),
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: W(function () {
                      return G(), !0;
                  }),
                  MESSAGE_ACK: W(function (e) {
                      let { channelId: t } = e;
                      return F(t);
                  }),
                  CHANNEL_ACK: W(V),
                  CHANNEL_LOCAL_ACK: W(V),
                  BULK_ACK: W(function (e) {
                      let { channels: t } = e,
                          n = !1;
                      for (let { channelId: e } of t) F(e) && (n = !0);
                      return n;
                  }),
                  VOICE_STATE_UPDATES: W(w),
                  VOICE_CHANNEL_SELECT: W(w),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: W(function (e) {
                      let { channelId: t, source: n } = e;
                      return (function (e, t) {
                          if (null == e) return !1;
                          null == L && (L = Date.now()), m !== e && (m = e);
                          let n = v();
                          if ((null != n && e === n && D && (D = !1), null != m && !h.has(m))) {
                              let e = Date.now(),
                                  n = U(m),
                                  i = E.A.getChannel(m)?.lastMessageId ?? void 0,
                                  r = P(m, t, e, n, i);
                              h.set(m, r);
                          }
                          return !0;
                      })(t ?? null, n);
                  }),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: W(function (e) {
                      let t = (function (e) {
                              let { channelId: t, source: n, lastActivityAtMs: i, lastMessageId: r } = e,
                                  a = h.get(t) ?? null,
                                  l = null == a ? i : Math.max(a.lastActivityAtMs, i),
                                  s = r ?? a?.lastMessageId,
                                  E = P(t, n, a?.addedOnMs ?? i, l, s);
                              return h.set(t, E);
                          })({
                              channelId: e.channelId,
                              source: e.source,
                              lastActivityAtMs: e.lastActivityAtMs,
                              lastMessageId: e.lastMessageId,
                          }),
                          n = !1;
                      return null == m && ((m = e.channelId), (n = !0)), t || n;
                  }),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: W(function (e) {
                      let t = h.delete(e.channelId),
                          n = !1;
                      if (m === e.channelId) {
                          let e = v();
                          (m = b(e) ?? (D || null == e ? null : e)), (n = !0);
                      }
                      return t || n;
                  }),
                  OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: W(function () {
                      let e = h.size() > 0;
                      h.clear();
                      let t = v();
                      return (m = D || null == t ? null : t), e;
                  }),
                  OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: W(function (e) {
                      let { minimized: t } = e;
                      if (D === t) return !1;
                      if (((D = t), !t)) return H(), !0;
                      let n = v();
                      return null != n && m === n && (m = b(n)), !0;
                  }),
              },
    );
