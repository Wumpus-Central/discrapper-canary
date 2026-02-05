"use strict";
n.d(t, { A: () => er });
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
function y(e) {
    let t = e.isPrivateChannel ? "0" : "1",
        n = String(2 - (e.mentionCount > 0 ? 2 : +!!e.hasUnread)),
        r = T(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
        i = T(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
    return `${t}\0${n}\0${r}\0${i}\0${e.channelId}`;
}
let S = new i.J(I, y),
    v = null,
    C = null,
    b = !1,
    N = null,
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
function P(e) {
    return _.Ay.isChannelMuted(null, e);
}
function M(e, t, n, r, i) {
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
    if (((v = t), !S.has(t))) {
        let n = D(t),
            r = o.A.getChannel(t)?.lastMessageId ?? void 0,
            i = M(t, m.B9.MANUAL, e, n, r);
        S.set(t, i);
    }
    return !0;
}
function U(e) {
    let t = f.default.getPrivateChannelIds(),
        n = 0;
    for (let r of t) {
        if (n >= R) return;
        if (S.has(r)) continue;
        let t = o.A.getChannel(r);
        if (null == t || !t.isPrivate() || P(r) || s.A.isMessageRequest(r)) continue;
        let i = t.lastMessageId;
        if (null == i) continue;
        let a = h.default.extractTimestamp(i);
        if (e - a > O) continue;
        let l = M(r, m.B9.MANUAL, e, a, i);
        S.set(r, l), n++;
    }
}
function G() {
    let e = Date.now();
    S.clear(), (v = null), (C = e), (b = !1), (N = u.A.getChannelId() ?? null), k(e), U(e), B();
}
function V() {
    return u.A.getChannelId() ?? null;
}
function F(e) {
    if (null == e) return S.values()[0]?.channelId ?? null;
    for (let t of S.values()) if (t.channelId !== e) return t.channelId;
    return null;
}
function B() {
    let e = V();
    return null != e && !b && null == v && ((v = e), !0);
}
function j() {
    let e = V();
    return null == e ? ((N = null), !!b && ((b = !1), !0)) : N !== e && ((N = e), !!b && ((b = !1), !0));
}
function H(e) {
    let { channelId: t, source: n, lastActivityAtMs: r, lastMessageId: i } = e,
        a = S.get(t) ?? null,
        s = null == a ? r : Math.max(a.lastActivityAtMs, r),
        o = i ?? a?.lastMessageId,
        l = M(t, n, a?.addedOnMs ?? r, s, o);
    return S.set(t, l);
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
    let t = S.delete(e.channelId),
        n = !1;
    if (v === e.channelId) {
        let e = V();
        (v = F(e) ?? (b || null == e ? null : e)), (n = !0);
    }
    return t || n;
}
function z(e) {
    let { minimized: t } = e;
    if (b === t) return !1;
    if (((b = t), !t)) return B(), !0;
    let n = V();
    return null != n && v === n && (v = F(n)), !0;
}
function $(e, t) {
    if (null == e) return !1;
    null == C && (C = Date.now()), v !== e && (v = e);
    let n = V();
    if ((null != n && e === n && b && (b = !1), null != v && !S.has(v))) {
        let e = Date.now(),
            n = D(v),
            r = o.A.getChannel(v)?.lastMessageId ?? void 0,
            i = M(v, t, e, n, r);
        S.set(v, i);
    }
    return !0;
}
function q(e) {
    let { channelId: t, source: n } = e;
    return $(t ?? null, n);
}
function Z() {
    let e = j(),
        t = B();
    return e || t;
}
function Q(e) {
    let t = S.get(e);
    if (null == t) return !1;
    let n = c.Ay.getMentionCount(e),
        r = c.Ay.hasUnread(e);
    return (t.mentionCount !== n || t.hasUnread !== r) && (S.set(e, { ...t, mentionCount: n, hasUnread: r }), !0);
}
function X(e) {
    let { channelId: t } = e;
    return Q(t);
}
function J(e) {
    let { channelId: t } = e;
    return Q(t);
}
function ee(e) {
    let { channels: t } = e,
        n = !1;
    for (let { channelId: e } of t) Q(e) && (n = !0);
    return n;
}
class et extends r.Ay.Store {
    static displayName = "Overlay-v3-Text-Chat-Store";
    initialize() {
        this.waitFor(E.A, o.A, l.A, s.A, u.A, f.default, c.Ay, d.A, _.Ay), G();
    }
    getSessionEntries(e) {
        return [null != e ? S.values(e) : S.values(), S.version];
    }
    getSelectedChannelId() {
        return v;
    }
    getVoiceChatMinimized() {
        return b;
    }
}
let en = (e) => (0, g.U5)(e, "OverlayTextChatStore"),
    er = new et(
        a.h,
        __OVERLAY__ || (!A.OX && !A.ed)
            ? {}
            : {
                  OVERLAY_MOUNTED: en(Y),
                  MESSAGE_ACK: en(X),
                  CHANNEL_ACK: en(J),
                  CHANNEL_LOCAL_ACK: en(J),
                  BULK_ACK: en(ee),
                  VOICE_STATE_UPDATES: en(Z),
                  VOICE_CHANNEL_SELECT: en(Z),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: en(q),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: en(W),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: en(K),
                  OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: en(z),
              },
    );
