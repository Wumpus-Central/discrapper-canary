n.d(t, {
    A: () => er,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(713402),
    o = n(73153),
    s = n(380335),
    l = n(742984),
    c = n(734057),
    u = n(320501),
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
    P = 3,
    D = 2 * h.A.Millis.HOUR;

function L(e) {
    let t = c.A.getChannel(e),
        n = null == t ? void 0 : t.lastMessageId;
    return null != n ? m.default.extractTimestamp(n) : Date.now();
}

function x(e) {
    var t;
    let n = c.A.getChannel(e);
    return null != (t = null == n ? void 0 : n.isPrivate()) && t;
}

function M(e) {
    return d.Ay.getMentionCount(e);
}

function j(e) {
    return d.Ay.hasUnread(e);
}

function k(e) {
    let t = c.A.getChannel(e);
    return null != t && p.Ay.isChannelMuted(t.getGuildId(), e);
}

function U(e) {
    return p.Ay.isChannelMuted(null, e);
}

function G(e, t, n, r, i) {
    return {
        channelId: e,
        source: t,
        addedOnMs: n,
        lastActivityAtMs: r,
        lastMessageId: i,
        isPrivateChannel: x(e),
        mentionCount: M(e),
        hasUnread: j(e),
    };
}

function V(e) {
    let t = f.A.getChannelId();
    if (null == t || null == c.A.getChannel(t)) return !1;
    if (((w = t), !N.has(t))) {
        var n, r;
        let i = L(t),
            a = null != (n = null == (r = c.A.getChannel(t)) ? void 0 : r.lastMessageId) ? n : void 0,
            o = G(t, g.B9.MANUAL, e, i, a);
        N.set(t, o);
    }
    return !0;
}

function F(e) {
    let t = _.A.getPrivateChannelIds(),
        n = 0;
    for (let r of t) {
        if (n >= P) return;
        if (N.has(r)) continue;
        let t = c.A.getChannel(r);
        if (null == t || !t.isPrivate() || U(r) || s.A.isMessageRequest(r)) continue;
        let i = t.lastMessageId;
        if (null == i) continue;
        let a = m.default.extractTimestamp(i);
        if (e - a > D) continue;
        let o = G(r, g.B9.MANUAL, e, a, i);
        N.set(r, o), n++;
    }
}

function B() {
    let e = Date.now();
    N.clear(), (w = null), (R = e), V(e), F(e);
}

function H(e) {
    if (null == e.timestamp) return Date.now();
    let t = new Date(e.timestamp).getTime();
    return Number.isFinite(t) ? t : Date.now();
}

function Y(e) {
    var t, n;
    let { channelId: r, source: i, lastActivityAtMs: a, lastMessageId: o } = e,
        s = null != (t = N.get(r)) ? t : null,
        l = null == s ? a : Math.max(s.lastActivityAtMs, a),
        c = null != o ? o : null == s ? void 0 : s.lastMessageId,
        u = G(r, i, null != (n = null == s ? void 0 : s.addedOnMs) ? n : a, l, c);
    return N.set(r, u);
}

function W(e) {
    return null == R && (B(), !0);
}

function K(e) {
    let t = Y({
            channelId: e.channelId,
            source: e.source,
            lastActivityAtMs: e.lastActivityAtMs,
            lastMessageId: e.lastMessageId,
        }),
        n = !1;
    return null == w && ((w = e.channelId), (n = !0)), t || n;
}

function z(e) {
    let t = N.delete(e.channelId),
        n = !1;
    if (w === e.channelId) {
        var r;
        let e = null == (r = N.values()[0]) ? void 0 : r.channelId;
        (w = null != e ? e : null), (n = !0);
    }
    return t || n;
}

function q(e, t) {
    if (null == e) return !1;
    if ((null == R && (R = Date.now()), w !== e && (w = e), null != w && !N.has(w))) {
        var n, r;
        let e = Date.now(),
            i = L(w),
            a = null != (n = null == (r = c.A.getChannel(w)) ? void 0 : r.lastMessageId) ? n : void 0,
            o = G(w, t, e, i, a);
        N.set(w, o);
    }
    return !0;
}

function Z(e) {
    let { channelId: t, source: n } = e;
    return q(null != t ? t : null, n);
}

function Q(e) {
    let { channelId: t, message: n } = e;
    if (null == R) return !1;
    let r = c.A.getChannel(t);
    if (null == r) return !1;
    let i = w === t;
    if (r.isPrivate()) {
        if (U(t)) return !1;
    } else if (!i && (k(t) || !(0, l.lx)(n, t, !0, !0))) return !1;
    return (
        Y({
            channelId: t,
            source: r.isPrivate() ? g.B9.INCOMING_DM_MESSAGE : g.B9.INCOMING_MENTION_MESSAGE,
            lastActivityAtMs: H(n),
            lastMessageId: n.id,
        }),
        null == w && (w = t),
        !0
    );
}

function X(e) {
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

function J(e) {
    let { channelId: t } = e;
    return X(t);
}

function $(e) {
    let { channelId: t } = e;
    return X(t);
}

function ee(e) {
    let { channels: t } = e,
        n = !1;
    for (let { channelId: e } of t) X(e) && (n = !0);
    return n;
}
class et extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(y.A, c.A, u.A, s.A, _.A, d.Ay, f.A, p.Ay), B();
    }
    getSessionEntries(e) {
        return [null != e ? N.values(e) : N.values(), N.version];
    }
    getSelectedChannelId() {
        return w;
    }
}
O(et, "displayName", "Overlay-v3-Text-Chat-Store");
let en = (e) => (0, E.U)(e, "OverlayTextChatStore"),
    er = new et(
        o.h,
        __OVERLAY__ || (!b.OX && !b.ed)
            ? {}
            : {
                  OVERLAY_MOUNTED: en(W),
                  MESSAGE_CREATE: en(Q),
                  MESSAGE_ACK: en(J),
                  CHANNEL_ACK: en($),
                  CHANNEL_LOCAL_ACK: en($),
                  BULK_ACK: en(ee),
                  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: en(Z),
                  OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: en(K),
                  OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: en(z),
              },
    );
