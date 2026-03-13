"use strict";
n.d(t, { A: () => Y });
var r = n(684013),
    i = n(439372),
    s = n(547),
    a = n(742984),
    o = n(95701),
    l = n(734057),
    u = n(320501),
    c = n(309010),
    d = n(543465),
    _ = n(287809),
    f = n(1193),
    p = n(41984),
    h = n(267355),
    m = n(956753),
    E = n(833551),
    g = n(395011),
    A = n(222506),
    I = n(897720),
    T = n(703552),
    S = n(145567),
    y = n(652215);
let v = 1e3,
    N = (e) => (0, m.U5)(e, "OverlayTextChatAutomaticLifecycleManager"),
    C = new Map(),
    R = null,
    O = !1;
function b(e) {
    if (null == e.timestamp) return Date.now();
    let t = new Date(e.timestamp).getTime();
    return Number.isFinite(t) ? t : Date.now();
}
function D(e) {
    let { channelId: t, guildId: n, messageId: r } = e;
    if (!E.default.isAnyOverlayRendering() || null == l.A.getChannel(t) || u.A.isReady(t)) return;
    let i = C.get(t);
    null != i && clearTimeout(i);
    let a = setTimeout(() => {
        C.delete(t), u.A.isReady(t) || s.A.fetchMessages({ guildId: n, channelId: t, messageId: r });
    }, v);
    C.set(t, a);
}
function L() {
    if (!E.default.isAnyOverlayRendering()) return;
    let e = f.A.getSelectedChannelId();
    if (null == e || e === R) return;
    let t = l.A.getChannel(e);
    null != t &&
        (0, o.pQ)(t.type) &&
        ((R = e), D({ channelId: e, guildId: t?.getGuildId?.() ?? t?.guild_id ?? null, messageId: null }));
}
function w(e) {
    if (!A.A.isInputLocked(g.A.getTargetPID()))
        for (let t of T.A.getNotificationsForChannel(e, I.zb.TEXT)) r.A.updateNotificationStatus(t.id, y.yFH.DISMISSED);
}
function M() {
    L();
}
function x(e) {
    let { channelId: t, message: n } = e;
    if (!E.default.isAnyOverlayRendering()) return;
    let r = l.A.getChannel(t);
    if (null == r) return;
    let i = _.default.getCurrentUser()?.id;
    if ((null != i && n.author?.id === i && w(t), f.A.isChannelTracked(t))) return;
    if (r.isPrivate()) {
        if (d.Ay.isChannelMuted(null, t)) return;
    } else if (d.Ay.isChannelMuted(r.getGuildId(), t) || !(0, a.lx)(n, t, !0)) return;
    let s = r.isPrivate() ? p.B9.INCOMING_DM_MESSAGE : p.B9.INCOMING_MENTION_MESSAGE,
        o = b(n);
    (0, S.Ml)({ channelId: t, source: s, lastActivityAtMs: o, lastMessageId: n.id });
}
function P(e) {
    let { channelId: t, lastMessageId: n } = e,
        r = l.A.getChannel(t);
    D({ channelId: t, guildId: r?.getGuildId?.() ?? r?.guild_id ?? null, messageId: n ?? null });
}
function k(e) {
    let { channelId: t, guildId: n, messageId: r, source: i } = e;
    i !== p.B9.AUTOMATIC_CHANNEL_SELECT && ((O = !0), w(t)), D({ channelId: t, guildId: n, messageId: r });
}
function U(e) {
    let { channelId: t } = e,
        n = C.get(t);
    null != n && (clearTimeout(n), C.delete(t)),
        setTimeout(() => {
            let e = f.A.getSelectedChannelId();
            if ((null == e && (O = !1), null == e || e === t)) return;
            let n = l.A.getChannel(e);
            D({ channelId: e, guildId: n?.getGuildId?.() ?? n?.guild_id ?? null, messageId: null });
        }, 0);
}
function G() {
    for (let [e, t] of C) clearTimeout(t), C.delete(e);
    O = !1;
}
function F(e) {
    let { minimized: t } = e;
    if (!t) return;
    let n = f.A.getSelectedChannelId();
    if (null == n) return;
    let r = l.A.getChannel(n);
    D({ channelId: n, guildId: r?.getGuildId?.() ?? r?.guild_id ?? null, messageId: null });
}
function V(e) {
    let t = l.A.getChannel(e);
    null != t &&
        (0, o.pQ)(t.type) &&
        f.A.getSelectedChannelId() !== e &&
        (0, S.D$)({
            target: { kind: S.bB.CHANNEL, channelId: e, guildId: t.getGuildId(), messageId: null },
            source: p.B9.AUTOMATIC_CHANNEL_SELECT,
            widgetType: null,
        });
}
function B(e) {
    let { channelId: t } = e;
    !E.default.isAnyOverlayRendering() || null == t || ((0, h.isOverlayCurrentlyVisibleAndUnlocked)() && V(t));
}
function H(e) {
    if (e.locked) {
        let e = f.A.getSelectedChannelId();
        null != e && r.A.ackTextChatChannel(e);
        return;
    }
    if (!E.default.isAnyOverlayRendering()) return;
    let t = f.A.getSelectedChannelId();
    if (null != t && T.A.hasNotificationForChannel(t)) return;
    let n = null,
        i = T.A.getMostRecentNotificationChannelId();
    null != i ? (n = i) : O || (n = c.A.getChannelId() ?? null), null != n && (V(n), w(n));
}
class j extends i.A {
    actions = {
        CHANNEL_SELECT: N(B),
        SIDEBAR_VIEW_CHANNEL: N(B),
        MESSAGE_CREATE: N(x),
        VOICE_STATE_UPDATES: N(M),
        VOICE_CHANNEL_SELECT: N(M),
        OVERLAY_SET_INPUT_LOCKED: N(H),
        OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: N(P),
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: N(k),
        OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: N(U),
        OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: N(G),
        OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: N(F),
    };
}
let Y = new j();
