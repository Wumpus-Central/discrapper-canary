"use strict";
n.d(t, { A: () => ed });
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
    m = n(661191),
    E = n(206885),
    g = n(41984),
    A = n(956753),
    I = n(395011),
    T = n(222506),
    S = n(680243),
    y = n(141048);
function v(e) {
    return [e.isPrivateChannel ? y.B.PRIVATE_CHANNELS : y.B.GUILD_CHANNELS];
}
function N(e, t) {
    return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0");
}
function C(e) {
    let t = e.isPrivateChannel ? "0" : "1",
        n = e.mentionCount > 0 ? y.G.MENTION : e.hasUnread ? y.G.UNREAD : y.G.READ,
        r = String(y.G.MENTION - n),
        i = N(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
        s = N(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
    return `${t}\0${r}\0${i}\0${s}\0${e.channelId}`;
}
let b = new i.J(v, C),
    R = null,
    O = null,
    D = !1,
    L = null,
    w = 3,
    x = 30 * h.A.Millis.MINUTE;
function M(e) {
    let t = l.A.getChannel(e),
        n = t?.lastMessageId;
    return null != n ? m.default.extractTimestamp(n) : Date.now();
}
function P(e) {
    let t = l.A.getChannel(e);
    return t?.isPrivate() ?? !1;
}
function k(e) {
    return d.Ay.getMentionCount(e);
}
function U(e) {
    return d.Ay.hasUnread(e);
}
function G(e) {
    return f.Ay.isChannelMuted(null, e);
}
function F(e, t, n, r, i) {
    return {
        channelId: e,
        source: t,
        addedOnMs: n,
        lastActivityAtMs: r,
        lastMessageId: i,
        isPrivateChannel: P(e),
        mentionCount: k(e),
        hasUnread: U(e),
    };
}
function V(e) {
    let t = _.A.getChannelId();
    if (null == t || null == l.A.getChannel(t)) return !1;
    if (((R = t), !b.has(t))) {
        let n = M(t),
            r = l.A.getChannel(t)?.lastMessageId ?? void 0,
            i = F(t, g.B9.MANUAL, e, n, r);
        b.set(t, i);
    }
    return !0;
}
function B(e) {
    let t = p.default.getPrivateChannelIds(),
        n = 0;
    for (let r of t) {
        if (n >= w) return;
        if (b.has(r)) continue;
        let t = l.A.getChannel(r);
        if (null == t || !t.isPrivate() || G(r) || a.A.isMessageRequest(r)) continue;
        let i = t.lastMessageId;
        if (null == i) continue;
        let s = m.default.extractTimestamp(i);
        if (e - s > x) continue;
        let o = F(r, g.B9.MANUAL, e, s, i);
        b.set(r, o), n++;
    }
}
function H() {
    b.clear(), (R = null), (O = null), (D = !1), (L = null);
}
function j() {
    let e = Date.now();
    H(), (O = e), (L = c.A.getChannelId() ?? null), V(e), B(e), K();
}
function Y() {
    return c.A.getChannelId() ?? null;
}
function W(e) {
    if (null == e) return b.values()[0]?.channelId ?? null;
    for (let t of b.values()) if (t.channelId !== e) return t.channelId;
    return null;
}
function K() {
    let e = Y();
    return null != e && !D && null == R && ((R = e), !0);
}
function z() {
    let e = Y();
    return null == e ? ((L = null), !!D && ((D = !1), !0)) : L !== e && ((L = e), !!D && ((D = !1), !0));
}
function $(e) {
    let { channelId: t, source: n, lastActivityAtMs: r, lastMessageId: i } = e,
        s = b.get(t) ?? null,
        a = null == s ? r : Math.max(s.lastActivityAtMs, r),
        o = i ?? s?.lastMessageId,
        l = F(t, n, s?.addedOnMs ?? r, a, o);
    return b.set(t, l);
}
function q() {
    return H(), !0;
}
function Z(e) {
    return null == O && (j(), !0);
}
function X(e) {
    let t = $({
            channelId: e.channelId,
            source: e.source,
            lastActivityAtMs: e.lastActivityAtMs,
            lastMessageId: e.lastMessageId,
        }),
        n = !1;
    return null == R && ((R = e.channelId), (n = !0)), t || n;
}
function Q(e) {
    let t = b.delete(e.channelId),
        n = !1;
    if (R === e.channelId) {
        let e = Y();
        (R = W(e) ?? (D || null == e ? null : e)), (n = !0);
    }
    return t || n;
}
function J() {
    let e = b.size() > 0;
    b.clear();
    let t = Y();
    return (R = D || null == t ? null : t), e;
}
function ee(e) {
    let { minimized: t } = e;
    if (D === t) return !1;
    if (((D = t), !t)) return K(), !0;
    let n = Y();
    return null != n && R === n && (R = W(n)), !0;
}
function et(e, t) {
    if (null == e) return !1;
    null == O && (O = Date.now()), R !== e && (R = e);
    let n = Y();
    if ((null != n && e === n && D && (D = !1), null != R && !b.has(R))) {
        let e = Date.now(),
            n = M(R),
            r = l.A.getChannel(R)?.lastMessageId ?? void 0,
            i = F(R, t, e, n, r);
        b.set(R, i);
    }
    return !0;
}
function en(e) {
    let { channelId: t, source: n } = e;
    return et(t ?? null, n);
}
function er() {
    if (null == R) return !1;
    let e = Y();
    return e !== R && L === R && e !== R && ((R = W(L)), !0);
}
function ei() {
    let e = er(),
        t = z(),
        n = K();
    return e || t || n;
}
function es(e) {
    let t = b.get(e);
    if (null == t) return !1;
    let n = d.Ay.getMentionCount(e),
        r = d.Ay.hasUnread(e);
    return (t.mentionCount !== n || t.hasUnread !== r) && (b.set(e, { ...t, mentionCount: n, hasUnread: r }), !0);
}
function ea(e) {
    let { channelId: t } = e;
    return es(t);
}
function eo(e) {
    let { channelId: t } = e;
    return es(t);
}
function el(e) {
    let { channels: t } = e,
        n = !1;
    for (let { channelId: e } of t) es(e) && (n = !0);
    return n;
}
class eu extends r.Ay.Store {
    static displayName = "Overlay-v3-Text-Chat-Store";
    initialize() {
        this.waitFor(S.A, T.A, I.A, o.A, l.A, u.A, a.A, c.A, p.default, d.Ay, _.A, f.Ay), j();
    }
    isChannelTracked(e) {
        return b.has(e);
    }
    getSessionEntries(e) {
        return [null != e ? b.values(e) : b.values(), b.version];
    }
    getSelectedChannelId() {
        return R;
    }
    getVoiceChatMinimized() {
        return D;
    }
}
let ec = (e) => (0, A.U5)(e, "OverlayTextChatStore"),
    ed = new eu(
        s.h,
        __OVERLAY__ || (!E.O && !E.e)
            ? {}
            : {
                  OVERLAY_MOUNTED: ec(Z),
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: ec(q),
                  MESSAGE_ACK: ec(ea),
                  CHANNEL_ACK: ec(eo),
                  CHANNEL_LOCAL_ACK: ec(eo),
                  BULK_ACK: ec(el),
                  VOICE_STATE_UPDATES: ec(ei),
                  VOICE_CHANNEL_SELECT: ec(ei),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: ec(en),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: ec(X),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: ec(Q),
                  OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: ec(J),
                  OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: ec(ee),
              },
    );
