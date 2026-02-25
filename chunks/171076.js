"use strict";
n.d(t, { A: () => j });
var r = n(684013),
    i = n(439372),
    s = n(547),
    a = n(742984),
    o = n(95701),
    l = n(734057),
    u = n(320501),
    c = n(309010),
    d = n(543465),
    _ = n(1193),
    f = n(41984),
    p = n(267355),
    h = n(956753),
    m = n(833551),
    E = n(395011),
    g = n(222506),
    A = n(897720),
    I = n(703552),
    T = n(145567),
    S = n(652215);
let y = 1e3,
    v = (e) => (0, h.U5)(e, "OverlayTextChatAutomaticLifecycleManager"),
    N = new Map(),
    C = null,
    b = !1;
function R(e) {
    if (null == e.timestamp) return Date.now();
    let t = new Date(e.timestamp).getTime();
    return Number.isFinite(t) ? t : Date.now();
}
function O(e) {
    let { channelId: t, guildId: n, messageId: r } = e;
    if (!m.default.isAnyOverlayRendering() || null == l.A.getChannel(t) || u.A.isReady(t)) return;
    let i = N.get(t);
    null != i && clearTimeout(i);
    let a = setTimeout(() => {
        N.delete(t), u.A.isReady(t) || s.A.fetchMessages({ guildId: n, channelId: t, messageId: r });
    }, y);
    N.set(t, a);
}
function D() {
    if (!m.default.isAnyOverlayRendering()) return;
    let e = _.A.getSelectedChannelId();
    if (null == e || e === C) return;
    let t = l.A.getChannel(e);
    null != t &&
        (0, o.pQ)(t.type) &&
        ((C = e), O({ channelId: e, guildId: t?.getGuildId?.() ?? t?.guild_id ?? null, messageId: null }));
}
function L(e) {
    if (!g.A.isInputLocked(E.A.getTargetPID()))
        for (let t of I.A.getNotificationsForChannel(e, A.zb.TEXT)) r.A.updateNotificationStatus(t.id, S.yFH.DISMISSED);
}
function w() {
    D();
}
function x(e) {
    let { channelId: t, message: n } = e;
    if (!m.default.isAnyOverlayRendering()) return;
    let r = l.A.getChannel(t);
    if (null == r || _.A.isChannelTracked(t)) return;
    if (r.isPrivate()) {
        if (d.Ay.isChannelMuted(null, t)) return;
    } else if (d.Ay.isChannelMuted(r.getGuildId(), t) || !(0, a.lx)(n, t, !0)) return;
    let i = r.isPrivate() ? f.B9.INCOMING_DM_MESSAGE : f.B9.INCOMING_MENTION_MESSAGE,
        s = R(n);
    (0, T.Ml)({ channelId: t, source: i, lastActivityAtMs: s, lastMessageId: n.id });
}
function M(e) {
    let { channelId: t, lastMessageId: n } = e,
        r = l.A.getChannel(t);
    O({ channelId: t, guildId: r?.getGuildId?.() ?? r?.guild_id ?? null, messageId: n ?? null });
}
function P(e) {
    let { channelId: t, guildId: n, messageId: r, source: i } = e;
    i !== f.B9.AUTOMATIC_CHANNEL_SELECT && ((b = !0), L(t)), O({ channelId: t, guildId: n, messageId: r });
}
function k(e) {
    let { channelId: t } = e,
        n = N.get(t);
    null != n && (clearTimeout(n), N.delete(t)),
        setTimeout(() => {
            let e = _.A.getSelectedChannelId();
            if ((null == e && (b = !1), null == e || e === t)) return;
            let n = l.A.getChannel(e);
            O({ channelId: e, guildId: n?.getGuildId?.() ?? n?.guild_id ?? null, messageId: null });
        }, 0);
}
function U() {
    for (let [e, t] of N) clearTimeout(t), N.delete(e);
    b = !1;
}
function G(e) {
    let { minimized: t } = e;
    if (!t) return;
    let n = _.A.getSelectedChannelId();
    if (null == n) return;
    let r = l.A.getChannel(n);
    O({ channelId: n, guildId: r?.getGuildId?.() ?? r?.guild_id ?? null, messageId: null });
}
function F(e) {
    let t = l.A.getChannel(e);
    null != t &&
        (0, o.pQ)(t.type) &&
        _.A.getSelectedChannelId() !== e &&
        (0, T.D$)({
            target: { kind: T.bB.CHANNEL, channelId: e, guildId: t.getGuildId(), messageId: null },
            source: f.B9.AUTOMATIC_CHANNEL_SELECT,
            widgetType: null,
        });
}
function V(e) {
    let { channelId: t } = e;
    !m.default.isAnyOverlayRendering() || null == t || ((0, p.isOverlayCurrentlyVisibleAndUnlocked)() && F(t));
}
function B(e) {
    if (e.locked) {
        let e = _.A.getSelectedChannelId();
        null != e && r.A.ackTextChatChannel(e);
        return;
    }
    if (!m.default.isAnyOverlayRendering()) return;
    let t = _.A.getSelectedChannelId();
    if (null != t && I.A.hasNotificationForChannel(t)) return void L(t);
    let n = null,
        i = I.A.getMostRecentNotificationChannelId();
    null != i ? (n = i) : b || (n = c.A.getChannelId() ?? null), null != n && (F(n), L(n));
}
class H extends i.A {
    actions = {
        CHANNEL_SELECT: v(V),
        SIDEBAR_VIEW_CHANNEL: v(V),
        MESSAGE_CREATE: v(x),
        VOICE_STATE_UPDATES: v(w),
        VOICE_CHANNEL_SELECT: v(w),
        OVERLAY_SET_INPUT_LOCKED: v(B),
        OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: v(M),
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: v(P),
        OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: v(k),
        OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: v(U),
        OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: v(G),
    };
}
let j = new H();
