"use strict";
n.d(t, { A: () => ea });
var r = n(311907),
    i = n(713402),
    s = n(73153),
    a = n(380335),
    o = n(734057),
    l = n(320501),
    u = n(383501),
    c = n(222823),
    d = n(309010),
    _ = n(543465),
    f = n(645959),
    p = n(927813),
    h = n(661191),
    m = n(206885),
    E = n(41984),
    g = n(956753),
    A = n(680243),
    I = n(672396);
function T(e) {
    return [e.isPrivateChannel ? "PRIVATE_CHANNELS" : "GUILD_CHANNELS"];
}
function S(e, t) {
    return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0");
}
function y(e) {
    let t = e.isPrivateChannel ? "0" : "1",
        n = String(2 - (e.mentionCount > 0 ? 2 : +!!e.hasUnread)),
        r = S(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
        i = S(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
    return `${t}\0${n}\0${r}\0${i}\0${e.channelId}`;
}
let v = new i.J(T, y),
    N = null,
    C = null,
    b = !1,
    R = null,
    O = 3,
    D = 30 * p.A.Millis.MINUTE;
function L(e) {
    let t = o.A.getChannel(e),
        n = t?.lastMessageId;
    return null != n ? h.default.extractTimestamp(n) : Date.now();
}
function w(e) {
    let t = o.A.getChannel(e);
    return t?.isPrivate() ?? !1;
}
function x(e) {
    return c.Ay.getMentionCount(e);
}
function M(e) {
    return c.Ay.hasUnread(e);
}
function P(e) {
    return _.Ay.isChannelMuted(null, e);
}
function k(e, t, n, r, i) {
    return {
        channelId: e,
        source: t,
        addedOnMs: n,
        lastActivityAtMs: r,
        lastMessageId: i,
        isPrivateChannel: w(e),
        mentionCount: x(e),
        hasUnread: M(e),
    };
}
function U(e) {
    let t = d.A.getChannelId();
    if (null == t || null == o.A.getChannel(t)) return !1;
    if (((N = t), !v.has(t))) {
        let n = L(t),
            r = o.A.getChannel(t)?.lastMessageId ?? void 0,
            i = k(t, E.B9.MANUAL, e, n, r);
        v.set(t, i);
    }
    return !0;
}
function G(e) {
    let t = f.default.getPrivateChannelIds(),
        n = 0;
    for (let r of t) {
        if (n >= O) return;
        if (v.has(r)) continue;
        let t = o.A.getChannel(r);
        if (null == t || !t.isPrivate() || P(r) || a.A.isMessageRequest(r)) continue;
        let i = t.lastMessageId;
        if (null == i) continue;
        let s = h.default.extractTimestamp(i);
        if (e - s > D) continue;
        let l = k(r, E.B9.MANUAL, e, s, i);
        v.set(r, l), n++;
    }
}
function F() {
    let e = Date.now();
    v.clear(), (N = null), (C = e), (b = !1), (R = u.A.getChannelId() ?? null), U(e), G(e), H();
}
function V() {
    return u.A.getChannelId() ?? null;
}
function B(e) {
    if (null == e) return v.values()[0]?.channelId ?? null;
    for (let t of v.values()) if (t.channelId !== e) return t.channelId;
    return null;
}
function H() {
    let e = V();
    return null != e && !b && null == N && ((N = e), !0);
}
function j() {
    let e = V();
    return null == e ? ((R = null), !!b && ((b = !1), !0)) : R !== e && ((R = e), !!b && ((b = !1), !0));
}
function Y(e) {
    let { channelId: t, source: n, lastActivityAtMs: r, lastMessageId: i } = e,
        s = v.get(t) ?? null,
        a = null == s ? r : Math.max(s.lastActivityAtMs, r),
        o = i ?? s?.lastMessageId,
        l = k(t, n, s?.addedOnMs ?? r, a, o);
    return v.set(t, l);
}
function W(e) {
    return null == C && (F(), !0);
}
function K(e) {
    let t = Y({
            channelId: e.channelId,
            source: e.source,
            lastActivityAtMs: e.lastActivityAtMs,
            lastMessageId: e.lastMessageId,
        }),
        n = !1;
    return null == N && ((N = e.channelId), (n = !0)), t || n;
}
function z(e) {
    let t = v.delete(e.channelId),
        n = !1;
    if (N === e.channelId) {
        let e = V();
        (N = B(e) ?? (b || null == e ? null : e)), (n = !0);
    }
    return t || n;
}
function $() {
    let e = v.size() > 0;
    v.clear();
    let t = V();
    return (N = b || null == t ? null : t), e;
}
function q(e) {
    let { minimized: t } = e;
    if (b === t) return !1;
    if (((b = t), !t)) return H(), !0;
    let n = V();
    return null != n && N === n && (N = B(n)), !0;
}
function Z(e, t) {
    if (null == e) return !1;
    null == C && (C = Date.now()), N !== e && (N = e);
    let n = V();
    if ((null != n && e === n && b && (b = !1), null != N && !v.has(N))) {
        let e = Date.now(),
            n = L(N),
            r = o.A.getChannel(N)?.lastMessageId ?? void 0,
            i = k(N, t, e, n, r);
        v.set(N, i);
    }
    return !0;
}
function X(e) {
    let { channelId: t, source: n } = e;
    return Z(t ?? null, n);
}
function Q() {
    if (null == N) return !1;
    let e = V();
    return e !== N && R === N && e !== N && ((N = B(R)), !0);
}
function J() {
    let e = Q(),
        t = j(),
        n = H();
    return e || t || n;
}
function ee(e) {
    let t = v.get(e);
    if (null == t) return !1;
    let n = c.Ay.getMentionCount(e),
        r = c.Ay.hasUnread(e);
    return (t.mentionCount !== n || t.hasUnread !== r) && (v.set(e, { ...t, mentionCount: n, hasUnread: r }), !0);
}
function et(e) {
    let { channelId: t } = e;
    return ee(t);
}
function en(e) {
    let { channelId: t } = e;
    return ee(t);
}
function er(e) {
    let { channels: t } = e,
        n = !1;
    for (let { channelId: e } of t) ee(e) && (n = !0);
    return n;
}
class ei extends r.Ay.Store {
    static displayName = "Overlay-v3-Text-Chat-Store";
    initialize() {
        this.waitFor(A.A, o.A, l.A, a.A, u.A, f.default, c.Ay, d.A, _.Ay), F();
    }
    isChannelTracked(e) {
        return v.has(e);
    }
    getSessionEntries(e) {
        return [null != e ? v.values(e) : v.values(), v.version];
    }
    getSelectedChannelId() {
        return N;
    }
    getVoiceChatMinimized() {
        return b;
    }
}
let es = (e) => (0, g.U5)(e, "OverlayTextChatStore"),
    ea = new ei(
        s.h,
        __OVERLAY__ || (!m.O && !I.ed)
            ? {}
            : {
                  OVERLAY_MOUNTED: es(W),
                  MESSAGE_ACK: es(et),
                  CHANNEL_ACK: es(en),
                  CHANNEL_LOCAL_ACK: es(en),
                  BULK_ACK: es(er),
                  VOICE_STATE_UPDATES: es(J),
                  VOICE_CHANNEL_SELECT: es(J),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: es(X),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: es(K),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: es(z),
                  OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: es($),
                  OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: es(q),
              },
    );
