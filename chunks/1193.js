n.d(t, { A: () => W });
var i = n(17928),
    r = n(713402),
    a = n(228366),
    l = n(380335),
    s = n(567249),
    o = n(734057),
    u = n(232835),
    _ = n(763827),
    E = n(222823),
    A = n(309010),
    c = n(543465),
    d = n(567761),
    I = n(927813),
    T = n(935208),
    N = n(206885),
    S = n(41984),
    p = n(956753),
    O = n(489277),
    C = n(222506),
    g = n(680243),
    R = n(141048);
function m(e, t) {
    return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0");
}
let h = new r.J(
        function (e) {
            return [e.isPrivateChannel ? R.B.PRIVATE_CHANNELS : R.B.GUILD_CHANNELS];
        },
        function (e) {
            let t = e.isPrivateChannel ? "0" : "1",
                n = e.mentionCount > 0 ? R.G.MENTION : e.hasUnread ? R.G.UNREAD : R.G.READ,
                i = String(R.G.MENTION - n),
                r = m(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
                a = m(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
            return `${t}\0${i}\0${r}\0${a}\0${e.channelId}`;
        },
    ),
    M = null,
    f = null,
    L = !1,
    y = null,
    D = 30 * I.A.Millis.MINUTE;
function U(e) {
    let t = o.A.getChannel(e),
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
        isPrivateChannel: ((a = o.A.getChannel(e)), a?.isPrivate() ?? !1),
        mentionCount: E.Ay.getMentionCount(e),
        hasUnread: E.Ay.hasUnread(e),
    };
}
function G() {
    h.clear(), (M = null), (f = null), (L = !1), (y = null);
}
function v() {
    let e = Date.now();
    G(),
        (f = e),
        (y = _.A.getChannelId() ?? null),
        (function (e) {
            let t = A.A.getChannelId();
            if (null != t && null != o.A.getChannel(t)) {
                if (((M = t), !h.has(t))) {
                    let n = U(t),
                        i = o.A.getChannel(t)?.lastMessageId ?? void 0,
                        r = P(t, S.B9.MANUAL, e, n, i);
                    h.set(t, r);
                }
            }
        })(e),
        (function (e) {
            let t = d.default.getPrivateChannelIds(),
                n = 0;
            for (let i of t) {
                if (n >= 3) return;
                if (h.has(i)) continue;
                let t = o.A.getChannel(i);
                if (null == t || !t.isPrivate() || c.Ay.isChannelMuted(null, i) || l.A.isMessageRequest(i)) continue;
                let r = t.lastMessageId;
                if (null == r) continue;
                let a = T.default.extractTimestamp(r);
                if (e - a > D) continue;
                let s = P(i, S.B9.MANUAL, e, a, r);
                h.set(i, s), n++;
            }
        })(e),
        w();
}
function B() {
    return _.A.getChannelId() ?? null;
}
function b(e) {
    if (null == e) return h.values()[0]?.channelId ?? null;
    for (let t of h.values()) if (t.channelId !== e) return t.channelId;
    return null;
}
function w() {
    let e = B();
    return null != e && !L && null == M && ((M = e), !0);
}
function H() {
    let e,
        t = (function () {
            if (null == M) return !1;
            let e = B();
            return e !== M && y === M && e !== M && ((M = b(y)), !0);
        })(),
        n = null == (e = B()) ? ((y = null), !!L && ((L = !1), !0)) : y !== e && ((y = e), !!L && ((L = !1), !0)),
        i = w();
    return t || n || i;
}
function F(e) {
    let t = h.get(e);
    if (null == t) return !1;
    let n = E.Ay.getMentionCount(e),
        i = E.Ay.hasUnread(e);
    return (t.mentionCount !== n || t.hasUnread !== i) && (h.set(e, { ...t, mentionCount: n, hasUnread: i }), !0);
}
function V(e) {
    let { channelId: t } = e;
    return F(t);
}
class k extends i.Ay.Store {
    static displayName = "Overlay-v3-Text-Chat-Store";
    initialize() {
        this.waitFor(g.A, C.A, O.A, s.A, o.A, u.A, l.A, _.A, d.default, E.Ay, A.A, c.Ay), v();
    }
    isChannelTracked(e) {
        return h.has(e);
    }
    getSessionEntries(e) {
        return [null != e ? h.values(e) : h.values(), h.version];
    }
    getSelectedChannelId() {
        return M;
    }
    getVoiceChatMinimized() {
        return L;
    }
}
let x = (e) => (0, p.U5)(e, "OverlayTextChatStore"),
    W = new k(
        a.h,
        __OVERLAY__ || (!N.O && !N.e)
            ? {}
            : {
                  OVERLAY_MOUNTED: x(function (e) {
                      return null == f && (v(), !0);
                  }),
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: x(function () {
                      return G(), !0;
                  }),
                  MESSAGE_ACK: x(function (e) {
                      let { channelId: t } = e;
                      return F(t);
                  }),
                  CHANNEL_ACK: x(V),
                  CHANNEL_LOCAL_ACK: x(V),
                  BULK_ACK: x(function (e) {
                      let { channels: t } = e,
                          n = !1;
                      for (let { channelId: e } of t) F(e) && (n = !0);
                      return n;
                  }),
                  VOICE_STATE_UPDATES: x(H),
                  VOICE_CHANNEL_SELECT: x(H),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: x(function (e) {
                      let { channelId: t, source: n } = e;
                      return (function (e, t) {
                          if (null == e) return !1;
                          null == f && (f = Date.now()), M !== e && (M = e);
                          let n = B();
                          if ((null != n && e === n && L && (L = !1), null != M && !h.has(M))) {
                              let e = Date.now(),
                                  n = U(M),
                                  i = o.A.getChannel(M)?.lastMessageId ?? void 0,
                                  r = P(M, t, e, n, i);
                              h.set(M, r);
                          }
                          return !0;
                      })(t ?? null, n);
                  }),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: x(function (e) {
                      let t = (function (e) {
                              let { channelId: t, source: n, lastActivityAtMs: i, lastMessageId: r } = e,
                                  a = h.get(t) ?? null,
                                  l = null == a ? i : Math.max(a.lastActivityAtMs, i),
                                  s = r ?? a?.lastMessageId,
                                  o = P(t, n, a?.addedOnMs ?? i, l, s);
                              return h.set(t, o);
                          })({
                              channelId: e.channelId,
                              source: e.source,
                              lastActivityAtMs: e.lastActivityAtMs,
                              lastMessageId: e.lastMessageId,
                          }),
                          n = !1;
                      return null == M && ((M = e.channelId), (n = !0)), t || n;
                  }),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: x(function (e) {
                      let t = h.delete(e.channelId),
                          n = !1;
                      if (M === e.channelId) {
                          let e = B();
                          (M = b(e) ?? (L || null == e ? null : e)), (n = !0);
                      }
                      return t || n;
                  }),
                  OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: x(function () {
                      let e = h.size() > 0;
                      h.clear();
                      let t = B();
                      return (M = L || null == t ? null : t), e;
                  }),
                  OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: x(function (e) {
                      let { minimized: t } = e;
                      if (L === t) return !1;
                      if (((L = t), !t)) return w(), !0;
                      let n = B();
                      return null != n && M === n && (M = b(n)), !0;
                  }),
              },
    );
