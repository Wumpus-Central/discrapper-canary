"use strict";
n.d(t, { A: () => ea });
var r = n(311907),
    i = n(713402),
    a = n(73153),
    s = n(380335),
    o = n(734057),
    l = n(320501),
    u = n(383501),
    c = n(222823),
    d = n(309010),
    _ = n(543465),
    f = n(645959),
    p = n(927813),
    h = n(661191),
    m = n(41984),
    g = n(956753),
    E = n(680243),
    A = n(672396);
function I(e) {
    return [e.isPrivateChannel ? "PRIVATE_CHANNELS" : "GUILD_CHANNELS"];
}
function T(e, t) {
    return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0");
}
function S(e) {
    let t = e.isPrivateChannel ? "0" : "1",
        n = String(2 - (e.mentionCount > 0 ? 2 : +!!e.hasUnread)),
        r = T(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
        i = T(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
    return `${t}\0${n}\0${r}\0${i}\0${e.channelId}`;
}
let y = new i.J(I, S),
    v = null,
    C = null,
    N = !1,
    b = null,
    R = 3,
    O = 2 * p.A.Millis.HOUR;
function D(e) {
    let t = o.A.getChannel(e),
        n = t?.lastMessageId;
    return null != n ? h.default.extractTimestamp(n) : Date.now();
}
function L(e) {
    let t = o.A.getChannel(e);
    return t?.isPrivate() ?? !1;
}
function w(e) {
    return c.Ay.getMentionCount(e);
}
function x(e) {
    return c.Ay.hasUnread(e);
}
function M(e) {
    return _.Ay.isChannelMuted(null, e);
}
function P(e, t, n, r, i) {
    return {
        channelId: e,
        source: t,
        addedOnMs: n,
        lastActivityAtMs: r,
        lastMessageId: i,
        isPrivateChannel: L(e),
        mentionCount: w(e),
        hasUnread: x(e),
    };
}
function k(e) {
    let t = d.A.getChannelId();
    if (null == t || null == o.A.getChannel(t)) return !1;
    if (((v = t), !y.has(t))) {
        let n = D(t),
            r = o.A.getChannel(t)?.lastMessageId ?? void 0,
            i = P(t, m.B9.MANUAL, e, n, r);
        y.set(t, i);
    }
    return !0;
}
function U(e) {
    let t = f.default.getPrivateChannelIds(),
        n = 0;
    for (let r of t) {
        if (n >= R) return;
        if (y.has(r)) continue;
        let t = o.A.getChannel(r);
        if (null == t || !t.isPrivate() || M(r) || s.A.isMessageRequest(r)) continue;
        let i = t.lastMessageId;
        if (null == i) continue;
        let a = h.default.extractTimestamp(i);
        if (e - a > O) continue;
        let l = P(r, m.B9.MANUAL, e, a, i);
        y.set(r, l), n++;
    }
}
function G() {
    let e = Date.now();
    y.clear(), (v = null), (C = e), (N = !1), (b = u.A.getChannelId() ?? null), k(e), U(e), B();
}
function F() {
    return u.A.getChannelId() ?? null;
}
function V(e) {
    if (null == e) return y.values()[0]?.channelId ?? null;
    for (let t of y.values()) if (t.channelId !== e) return t.channelId;
    return null;
}
function B() {
    let e = F();
    return null != e && !N && null == v && ((v = e), !0);
}
function j() {
    let e = F();
    return null == e ? ((b = null), !!N && ((N = !1), !0)) : b !== e && ((b = e), !!N && ((N = !1), !0));
}
function H(e) {
    let { channelId: t, source: n, lastActivityAtMs: r, lastMessageId: i } = e,
        a = y.get(t) ?? null,
        s = null == a ? r : Math.max(a.lastActivityAtMs, r),
        o = i ?? a?.lastMessageId,
        l = P(t, n, a?.addedOnMs ?? r, s, o);
    return y.set(t, l);
}
function Y(e) {
    return null == C && (G(), !0);
}
function W(e) {
    let t = H({
            channelId: e.channelId,
            source: e.source,
            lastActivityAtMs: e.lastActivityAtMs,
            lastMessageId: e.lastMessageId,
        }),
        n = !1;
    return null == v && ((v = e.channelId), (n = !0)), t || n;
}
function K(e) {
    let t = y.delete(e.channelId),
        n = !1;
    if (v === e.channelId) {
        let e = F();
        (v = V(e) ?? (N || null == e ? null : e)), (n = !0);
    }
    return t || n;
}
function $() {
    let e = y.size() > 0;
    y.clear();
    let t = F();
    return (v = N || null == t ? null : t), e;
}
function z(e) {
    let { minimized: t } = e;
    if (N === t) return !1;
    if (((N = t), !t)) return B(), !0;
    let n = F();
    return null != n && v === n && (v = V(n)), !0;
}
function q(e, t) {
    if (null == e) return !1;
    null == C && (C = Date.now()), v !== e && (v = e);
    let n = F();
    if ((null != n && e === n && N && (N = !1), null != v && !y.has(v))) {
        let e = Date.now(),
            n = D(v),
            r = o.A.getChannel(v)?.lastMessageId ?? void 0,
            i = P(v, t, e, n, r);
        y.set(v, i);
    }
    return !0;
}
function Z(e) {
    let { channelId: t, source: n } = e;
    return q(t ?? null, n);
}
function X() {
    if (null == v) return !1;
    let e = F();
    return e !== v && b === v && e !== v && ((v = V(b)), !0);
}
function Q() {
    let e = X(),
        t = j(),
        n = B();
    return e || t || n;
}
function J(e) {
    let t = y.get(e);
    if (null == t) return !1;
    let n = c.Ay.getMentionCount(e),
        r = c.Ay.hasUnread(e);
    return (t.mentionCount !== n || t.hasUnread !== r) && (y.set(e, { ...t, mentionCount: n, hasUnread: r }), !0);
}
function ee(e) {
    let { channelId: t } = e;
    return J(t);
}
function et(e) {
    let { channelId: t } = e;
    return J(t);
}
function en(e) {
    let { channels: t } = e,
        n = !1;
    for (let { channelId: e } of t) J(e) && (n = !0);
    return n;
}
class er extends r.Ay.Store {
    static displayName = "Overlay-v3-Text-Chat-Store";
    initialize() {
        this.waitFor(E.A, o.A, l.A, s.A, u.A, f.default, c.Ay, d.A, _.Ay), G();
    }
    isChannelTracked(e) {
        return y.has(e);
    }
    getSessionEntries(e) {
        return [null != e ? y.values(e) : y.values(), y.version];
    }
    getSelectedChannelId() {
        return v;
    }
    getVoiceChatMinimized() {
        return N;
    }
}
let ei = (e) => (0, g.U5)(e, "OverlayTextChatStore"),
    ea = new er(
        a.h,
        __OVERLAY__ || (!A.OX && !A.ed)
            ? {}
            : {
                  OVERLAY_MOUNTED: ei(Y),
                  MESSAGE_ACK: ei(ee),
                  CHANNEL_ACK: ei(et),
                  CHANNEL_LOCAL_ACK: ei(et),
                  BULK_ACK: ei(en),
                  VOICE_STATE_UPDATES: ei(Q),
                  VOICE_CHANNEL_SELECT: ei(Q),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: ei(Z),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: ei(W),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: ei(K),
                  OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: ei($),
                  OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: ei(z),
              },
    );
