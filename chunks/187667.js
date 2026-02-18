"use strict";
n.d(t, { A: () => eo });
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
    g = n(206885),
    E = n(41984),
    A = n(956753),
    I = n(680243),
    T = n(672396);
function y(e) {
    return [e.isPrivateChannel ? "PRIVATE_CHANNELS" : "GUILD_CHANNELS"];
}
function S(e, t) {
    return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0");
}
function v(e) {
    let t = e.isPrivateChannel ? "0" : "1",
        n = String(2 - (e.mentionCount > 0 ? 2 : +!!e.hasUnread)),
        r = S(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
        i = S(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
    return `${t}\0${n}\0${r}\0${i}\0${e.channelId}`;
}
let C = new i.J(y, v),
    b = null,
    N = null,
    R = !1,
    O = null,
    D = 3,
    L = 2 * h.A.Millis.HOUR;
function w(e) {
    let t = o.A.getChannel(e),
        n = t?.lastMessageId;
    return null != n ? p.default.extractTimestamp(n) : Date.now();
}
function x(e) {
    let t = o.A.getChannel(e);
    return t?.isPrivate() ?? !1;
}
function P(e) {
    return c.Ay.getMentionCount(e);
}
function M(e) {
    return c.Ay.hasUnread(e);
}
function k(e) {
    return _.Ay.isChannelMuted(null, e);
}
function U(e, t, n, r, i) {
    return {
        channelId: e,
        source: t,
        addedOnMs: n,
        lastActivityAtMs: r,
        lastMessageId: i,
        isPrivateChannel: x(e),
        mentionCount: P(e),
        hasUnread: M(e),
    };
}
function G(e) {
    let t = d.A.getChannelId();
    if (null == t || null == o.A.getChannel(t)) return !1;
    if (((b = t), !C.has(t))) {
        let n = w(t),
            r = o.A.getChannel(t)?.lastMessageId ?? void 0,
            i = U(t, E.B9.MANUAL, e, n, r);
        C.set(t, i);
    }
    return !0;
}
function F(e) {
    let t = f.default.getPrivateChannelIds(),
        n = 0;
    for (let r of t) {
        if (n >= D) return;
        if (C.has(r)) continue;
        let t = o.A.getChannel(r);
        if (null == t || !t.isPrivate() || k(r) || s.A.isMessageRequest(r)) continue;
        let i = t.lastMessageId;
        if (null == i) continue;
        let a = p.default.extractTimestamp(i);
        if (e - a > L) continue;
        let l = U(r, E.B9.MANUAL, e, a, i);
        C.set(r, l), n++;
    }
}
function V() {
    let e = Date.now();
    C.clear(), (b = null), (N = e), (R = !1), (O = u.A.getChannelId() ?? null), G(e), F(e), H();
}
function B() {
    return u.A.getChannelId() ?? null;
}
function j(e) {
    if (null == e) return C.values()[0]?.channelId ?? null;
    for (let t of C.values()) if (t.channelId !== e) return t.channelId;
    return null;
}
function H() {
    let e = B();
    return null != e && !R && null == b && ((b = e), !0);
}
function Y() {
    let e = B();
    return null == e ? ((O = null), !!R && ((R = !1), !0)) : O !== e && ((O = e), !!R && ((R = !1), !0));
}
function W(e) {
    let { channelId: t, source: n, lastActivityAtMs: r, lastMessageId: i } = e,
        a = C.get(t) ?? null,
        s = null == a ? r : Math.max(a.lastActivityAtMs, r),
        o = i ?? a?.lastMessageId,
        l = U(t, n, a?.addedOnMs ?? r, s, o);
    return C.set(t, l);
}
function K(e) {
    return null == N && (V(), !0);
}
function $(e) {
    let t = W({
            channelId: e.channelId,
            source: e.source,
            lastActivityAtMs: e.lastActivityAtMs,
            lastMessageId: e.lastMessageId,
        }),
        n = !1;
    return null == b && ((b = e.channelId), (n = !0)), t || n;
}
function z(e) {
    let t = C.delete(e.channelId),
        n = !1;
    if (b === e.channelId) {
        let e = B();
        (b = j(e) ?? (R || null == e ? null : e)), (n = !0);
    }
    return t || n;
}
function q() {
    let e = C.size() > 0;
    C.clear();
    let t = B();
    return (b = R || null == t ? null : t), e;
}
function X(e) {
    let { minimized: t } = e;
    if (R === t) return !1;
    if (((R = t), !t)) return H(), !0;
    let n = B();
    return null != n && b === n && (b = j(n)), !0;
}
function Z(e, t) {
    if (null == e) return !1;
    null == N && (N = Date.now()), b !== e && (b = e);
    let n = B();
    if ((null != n && e === n && R && (R = !1), null != b && !C.has(b))) {
        let e = Date.now(),
            n = w(b),
            r = o.A.getChannel(b)?.lastMessageId ?? void 0,
            i = U(b, t, e, n, r);
        C.set(b, i);
    }
    return !0;
}
function Q(e) {
    let { channelId: t, source: n } = e;
    return Z(t ?? null, n);
}
function J() {
    if (null == b) return !1;
    let e = B();
    return e !== b && O === b && e !== b && ((b = j(O)), !0);
}
function ee() {
    let e = J(),
        t = Y(),
        n = H();
    return e || t || n;
}
function et(e) {
    let t = C.get(e);
    if (null == t) return !1;
    let n = c.Ay.getMentionCount(e),
        r = c.Ay.hasUnread(e);
    return (t.mentionCount !== n || t.hasUnread !== r) && (C.set(e, { ...t, mentionCount: n, hasUnread: r }), !0);
}
function en(e) {
    let { channelId: t } = e;
    return et(t);
}
function er(e) {
    let { channelId: t } = e;
    return et(t);
}
function ei(e) {
    let { channels: t } = e,
        n = !1;
    for (let { channelId: e } of t) et(e) && (n = !0);
    return n;
}
class ea extends r.Ay.Store {
    static displayName = "Overlay-v3-Text-Chat-Store";
    initialize() {
        this.waitFor(I.A, o.A, l.A, s.A, u.A, f.default, c.Ay, d.A, _.Ay), V();
    }
    isChannelTracked(e) {
        return C.has(e);
    }
    getSessionEntries(e) {
        return [null != e ? C.values(e) : C.values(), C.version];
    }
    getSelectedChannelId() {
        return b;
    }
    getVoiceChatMinimized() {
        return R;
    }
}
let es = (e) => (0, A.U5)(e, "OverlayTextChatStore"),
    eo = new ea(
        a.h,
        __OVERLAY__ || (!g.O && !T.ed)
            ? {}
            : {
                  OVERLAY_MOUNTED: es(K),
                  MESSAGE_ACK: es(en),
                  CHANNEL_ACK: es(er),
                  CHANNEL_LOCAL_ACK: es(er),
                  BULK_ACK: es(ei),
                  VOICE_STATE_UPDATES: es(ee),
                  VOICE_CHANNEL_SELECT: es(ee),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: es(Q),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: es($),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: es(z),
                  OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: es(q),
                  OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: es(X),
              },
    );
