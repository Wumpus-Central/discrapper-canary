n.d(t, {
    A: () => el,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(713402),
    o = n(73153),
    s = n(380335),
    l = n(734057),
    c = n(320501),
    u = n(383501),
    d = n(222823),
    f = n(309010),
    p = n(543465),
    _ = n(645959),
    h = n(927813),
    m = n(661191),
    g = n(41984),
    E = n(956753),
    y = n(680243),
    b = n(672396);

function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}

function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function S(e) {
    return [e.isPrivateChannel ? "PRIVATE_CHANNELS" : "GUILD_CHANNELS"];
}

function T(e, t) {
    return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0");
}

function C(e) {
    let t = e.isPrivateChannel ? "0" : "1",
        n = String(2 - (e.mentionCount > 0 ? 2 : +!!e.hasUnread)),
        r = T(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
        i = T(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
    return "".concat(t, "\0").concat(n, "\0").concat(r, "\0").concat(i, "\0").concat(e.channelId);
}
let N = new a.J(S, C),
    w = null,
    R = null,
    P = !1,
    D = null,
    L = 3,
    x = 2 * h.A.Millis.HOUR;

function M(e) {
    let t = l.A.getChannel(e),
        n = null == t ? void 0 : t.lastMessageId;
    return null != n ? m.default.extractTimestamp(n) : Date.now();
}

function j(e) {
    var t;
    let n = l.A.getChannel(e);
    return null != (t = null == n ? void 0 : n.isPrivate()) && t;
}

function k(e) {
    return d.Ay.getMentionCount(e);
}

function U(e) {
    return d.Ay.hasUnread(e);
}

function G(e) {
    return p.Ay.isChannelMuted(null, e);
}

function V(e, t, n, r, i) {
    return {
        channelId: e,
        source: t,
        addedOnMs: n,
        lastActivityAtMs: r,
        lastMessageId: i,
        isPrivateChannel: j(e),
        mentionCount: k(e),
        hasUnread: U(e),
    };
}

function F(e) {
    let t = f.A.getChannelId();
    if (null == t || null == l.A.getChannel(t)) return !1;
    if (((w = t), !N.has(t))) {
        var n, r;
        let i = M(t),
            a = null != (n = null == (r = l.A.getChannel(t)) ? void 0 : r.lastMessageId) ? n : void 0,
            o = V(t, g.B9.MANUAL, e, i, a);
        N.set(t, o);
    }
    return !0;
}

function B(e) {
    let t = _.A.getPrivateChannelIds(),
        n = 0;
    for (let r of t) {
        if (n >= L) return;
        if (N.has(r)) continue;
        let t = l.A.getChannel(r);
        if (null == t || !t.isPrivate() || G(r) || s.A.isMessageRequest(r)) continue;
        let i = t.lastMessageId;
        if (null == i) continue;
        let a = m.default.extractTimestamp(i);
        if (e - a > x) continue;
        let o = V(r, g.B9.MANUAL, e, a, i);
        N.set(r, o), n++;
    }
}

function H() {
    var e;
    let t = Date.now();
    N.clear(), (w = null), (R = t), (P = !1), (D = null != (e = u.A.getChannelId()) ? e : null), F(t), B(t), K();
}

function Y() {
    var e;
    return null != (e = u.A.getChannelId()) ? e : null;
}

function W(e) {
    if (null == e) {
        var t, n;
        return null != (t = null == (n = N.values()[0]) ? void 0 : n.channelId) ? t : null;
    }
    for (let t of N.values()) if (t.channelId !== e) return t.channelId;
    return null;
}

function K() {
    let e = Y();
    return null != e && !P && null == w && ((w = e), !0);
}

function z() {
    let e = Y();
    return null == e ? ((D = null), !!P && ((P = !1), !0)) : D !== e && ((D = e), !!P && ((P = !1), !0));
}

function q(e) {
    var t, n;
    let { channelId: r, source: i, lastActivityAtMs: a, lastMessageId: o } = e,
        s = null != (t = N.get(r)) ? t : null,
        l = null == s ? a : Math.max(s.lastActivityAtMs, a),
        c = null != o ? o : null == s ? void 0 : s.lastMessageId,
        u = V(r, i, null != (n = null == s ? void 0 : s.addedOnMs) ? n : a, l, c);
    return N.set(r, u);
}

function Z(e) {
    return null == R && (H(), !0);
}

function Q(e) {
    let t = q({
            channelId: e.channelId,
            source: e.source,
            lastActivityAtMs: e.lastActivityAtMs,
            lastMessageId: e.lastMessageId,
        }),
        n = !1;
    return null == w && ((w = e.channelId), (n = !0)), t || n;
}

function X(e) {
    let t = N.delete(e.channelId),
        n = !1;
    if (w === e.channelId) {
        let e = Y(),
            t = W(e);
        (w = null != t ? t : P || null == e ? null : e), (n = !0);
    }
    return t || n;
}

function J(e) {
    let { minimized: t } = e;
    if (P === t) return !1;
    if (((P = t), !t)) return K(), !0;
    let n = Y();
    return null != n && w === n && (w = W(n)), !0;
}

function $(e, t) {
    if (null == e) return !1;
    null == R && (R = Date.now()), w !== e && (w = e);
    let n = Y();
    if ((null != n && e === n && P && (P = !1), null != w && !N.has(w))) {
        var r, i;
        let e = Date.now(),
            n = M(w),
            a = null != (r = null == (i = l.A.getChannel(w)) ? void 0 : i.lastMessageId) ? r : void 0,
            o = V(w, t, e, n, a);
        N.set(w, o);
    }
    return !0;
}

function ee(e) {
    let { channelId: t, source: n } = e;
    return $(null != t ? t : null, n);
}

function et() {
    let e = z(),
        t = K();
    return e || t;
}

function en(e) {
    let t = N.get(e);
    if (null == t) return !1;
    let n = d.Ay.getMentionCount(e),
        r = d.Ay.hasUnread(e);
    return (
        (t.mentionCount !== n || t.hasUnread !== r) &&
        (N.set(
            e,
            I(v({}, t), {
                mentionCount: n,
                hasUnread: r,
            }),
        ),
        !0)
    );
}

function er(e) {
    let { channelId: t } = e;
    return en(t);
}

function ei(e) {
    let { channelId: t } = e;
    return en(t);
}

function ea(e) {
    let { channels: t } = e,
        n = !1;
    for (let { channelId: e } of t) en(e) && (n = !0);
    return n;
}
class eo extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(y.A, l.A, c.A, s.A, u.A, _.A, d.Ay, f.A, p.Ay), H();
    }
    getSessionEntries(e) {
        return [null != e ? N.values(e) : N.values(), N.version];
    }
    getSelectedChannelId() {
        return w;
    }
    getVoiceChatMinimized() {
        return P;
    }
}
O(eo, "displayName", "Overlay-v3-Text-Chat-Store");
let es = (e) => (0, E.U)(e, "OverlayTextChatStore"),
    el = new eo(
        o.h,
        __OVERLAY__ || (!b.OX && !b.ed)
            ? {}
            : {
                  OVERLAY_MOUNTED: es(Z),
                  MESSAGE_ACK: es(er),
                  CHANNEL_ACK: es(ei),
                  CHANNEL_LOCAL_ACK: es(ei),
                  BULK_ACK: es(ea),
                  VOICE_STATE_UPDATES: es(et),
                  VOICE_CHANNEL_SELECT: es(et),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: es(ee),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: es(Q),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: es(X),
                  OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: es(J),
              },
    );
