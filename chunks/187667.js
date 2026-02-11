"use strict";
n.d(t, { A: () => es });
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
    h = n(927813),
    p = n(661191),
    g = n(41984),
    E = n(956753),
    A = n(680243),
    I = n(672396);
function T(e) {
    return [e.isPrivateChannel ? "PRIVATE_CHANNELS" : "GUILD_CHANNELS"];
}
function y(e, t) {
    return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0");
}
function S(e) {
    let t = e.isPrivateChannel ? "0" : "1",
        n = String(2 - (e.mentionCount > 0 ? 2 : +!!e.hasUnread)),
        r = y(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
        i = y(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
    return `${t}\0${n}\0${r}\0${i}\0${e.channelId}`;
}
let v = new i.J(T, S),
    C = null,
    b = null,
    N = !1,
    R = null,
    O = 3,
    D = 2 * h.A.Millis.HOUR;
function L(e) {
    let t = o.A.getChannel(e),
        n = t?.lastMessageId;
    return null != n ? p.default.extractTimestamp(n) : Date.now();
}
function w(e) {
    let t = o.A.getChannel(e);
    return t?.isPrivate() ?? !1;
}
function x(e) {
    return c.Ay.getMentionCount(e);
}
function P(e) {
    return c.Ay.hasUnread(e);
}
function M(e) {
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
        hasUnread: P(e),
    };
}
function U(e) {
    let t = d.A.getChannelId();
    if (null == t || null == o.A.getChannel(t)) return !1;
    if (((C = t), !v.has(t))) {
        let n = L(t),
            r = o.A.getChannel(t)?.lastMessageId ?? void 0,
            i = k(t, g.B9.MANUAL, e, n, r);
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
        if (null == t || !t.isPrivate() || M(r) || s.A.isMessageRequest(r)) continue;
        let i = t.lastMessageId;
        if (null == i) continue;
        let a = p.default.extractTimestamp(i);
        if (e - a > D) continue;
        let l = k(r, g.B9.MANUAL, e, a, i);
        v.set(r, l), n++;
    }
}
function F() {
    let e = Date.now();
    v.clear(), (C = null), (b = e), (N = !1), (R = u.A.getChannelId() ?? null), U(e), G(e), j();
}
function V() {
    return u.A.getChannelId() ?? null;
}
function B(e) {
    if (null == e) return v.values()[0]?.channelId ?? null;
    for (let t of v.values()) if (t.channelId !== e) return t.channelId;
    return null;
}
function j() {
    let e = V();
    return null != e && !N && null == C && ((C = e), !0);
}
function H() {
    let e = V();
    return null == e ? ((R = null), !!N && ((N = !1), !0)) : R !== e && ((R = e), !!N && ((N = !1), !0));
}
function Y(e) {
    let { channelId: t, source: n, lastActivityAtMs: r, lastMessageId: i } = e,
        a = v.get(t) ?? null,
        s = null == a ? r : Math.max(a.lastActivityAtMs, r),
        o = i ?? a?.lastMessageId,
        l = k(t, n, a?.addedOnMs ?? r, s, o);
    return v.set(t, l);
}
function W(e) {
    return null == b && (F(), !0);
}
function K(e) {
    let t = Y({
            channelId: e.channelId,
            source: e.source,
            lastActivityAtMs: e.lastActivityAtMs,
            lastMessageId: e.lastMessageId,
        }),
        n = !1;
    return null == C && ((C = e.channelId), (n = !0)), t || n;
}
function $(e) {
    let t = v.delete(e.channelId),
        n = !1;
    if (C === e.channelId) {
        let e = V();
        (C = B(e) ?? (N || null == e ? null : e)), (n = !0);
    }
    return t || n;
}
function z() {
    let e = v.size() > 0;
    v.clear();
    let t = V();
    return (C = N || null == t ? null : t), e;
}
function q(e) {
    let { minimized: t } = e;
    if (N === t) return !1;
    if (((N = t), !t)) return j(), !0;
    let n = V();
    return null != n && C === n && (C = B(n)), !0;
}
function X(e, t) {
    if (null == e) return !1;
    null == b && (b = Date.now()), C !== e && (C = e);
    let n = V();
    if ((null != n && e === n && N && (N = !1), null != C && !v.has(C))) {
        let e = Date.now(),
            n = L(C),
            r = o.A.getChannel(C)?.lastMessageId ?? void 0,
            i = k(C, t, e, n, r);
        v.set(C, i);
    }
    return !0;
}
function Z(e) {
    let { channelId: t, source: n } = e;
    return X(t ?? null, n);
}
function Q() {
    if (null == C) return !1;
    let e = V();
    return e !== C && R === C && e !== C && ((C = B(R)), !0);
}
function J() {
    let e = Q(),
        t = H(),
        n = j();
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
        this.waitFor(A.A, o.A, l.A, s.A, u.A, f.default, c.Ay, d.A, _.Ay), F();
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
        return N;
    }
}
let ea = (e) => (0, E.U5)(e, "OverlayTextChatStore"),
    es = new ei(
        a.h,
        __OVERLAY__ || (!I.OX && !I.ed)
            ? {}
            : {
                  OVERLAY_MOUNTED: ea(W),
                  MESSAGE_ACK: ea(et),
                  CHANNEL_ACK: ea(en),
                  CHANNEL_LOCAL_ACK: ea(en),
                  BULK_ACK: ea(er),
                  VOICE_STATE_UPDATES: ea(J),
                  VOICE_CHANNEL_SELECT: ea(J),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: ea(Z),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: ea(K),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: ea($),
                  OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: ea(z),
                  OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: ea(q),
              },
    );
