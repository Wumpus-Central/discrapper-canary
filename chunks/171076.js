"use strict";
n.d(t, { A: () => H });
var r = n(684013),
    i = n(439372),
    s = n(547),
    a = n(742984),
    o = n(95701),
    l = n(734057),
    u = n(320501),
    c = n(309010),
    d = n(543465),
    _ = n(41984),
    f = n(956753),
    p = n(833551),
    h = n(395011),
    m = n(222506),
    E = n(897720),
    g = n(703552),
    A = n(145567),
    I = n(187667),
    T = n(652215);
let S = 1e3,
    y = (e) => (0, f.U5)(e, "OverlayTextChatAutomaticLifecycleManager"),
    v = new Map(),
    N = null,
    C = !1;
function b(e) {
    if (null == e.timestamp) return Date.now();
    let t = new Date(e.timestamp).getTime();
    return Number.isFinite(t) ? t : Date.now();
}
function R(e) {
    let { channelId: t, guildId: n, messageId: r } = e;
    if (!p.default.isAnyOverlayRendering() || null == l.A.getChannel(t) || u.A.isReady(t)) return;
    let i = v.get(t);
    null != i && clearTimeout(i);
    let a = setTimeout(() => {
        v.delete(t), u.A.isReady(t) || s.A.fetchMessages({ guildId: n, channelId: t, messageId: r });
    }, S);
    v.set(t, a);
}
function O() {
    if (!p.default.isAnyOverlayRendering()) return;
    let e = I.A.getSelectedChannelId();
    if (null == e || e === N) return;
    let t = l.A.getChannel(e);
    null != t &&
        (0, o.pQ)(t.type) &&
        ((N = e), R({ channelId: e, guildId: t?.getGuildId?.() ?? t?.guild_id ?? null, messageId: null }));
}
function D(e) {
    if (!m.A.isInputLocked(h.A.getTargetPID()))
        for (let t of g.A.getNotificationsForChannel(e, E.zb.TEXT)) r.A.updateNotificationStatus(t.id, T.yFH.DISMISSED);
}
function L() {
    O();
}
function w(e) {
    let { channelId: t, message: n } = e;
    if (!p.default.isAnyOverlayRendering()) return;
    let r = l.A.getChannel(t);
    if (null == r || I.A.isChannelTracked(t)) return;
    if (r.isPrivate()) {
        if (d.Ay.isChannelMuted(null, t)) return;
    } else if (d.Ay.isChannelMuted(r.getGuildId(), t) || !(0, a.lx)(n, t, !0)) return;
    let i = r.isPrivate() ? _.B9.INCOMING_DM_MESSAGE : _.B9.INCOMING_MENTION_MESSAGE,
        s = b(n);
    (0, A.Ml)({ channelId: t, source: i, lastActivityAtMs: s, lastMessageId: n.id });
}
function x(e) {
    let { channelId: t, lastMessageId: n } = e,
        r = l.A.getChannel(t);
    R({ channelId: t, guildId: r?.getGuildId?.() ?? r?.guild_id ?? null, messageId: n ?? null });
}
function M(e) {
    let { channelId: t, guildId: n, messageId: r, source: i } = e;
    i !== _.B9.AUTOMATIC_CHANNEL_SELECT && ((C = !0), D(t)), R({ channelId: t, guildId: n, messageId: r });
}
function P(e) {
    let { channelId: t } = e,
        n = v.get(t);
    null != n && (clearTimeout(n), v.delete(t)),
        setTimeout(() => {
            let e = I.A.getSelectedChannelId();
            if ((null == e && (C = !1), null == e || e === t)) return;
            let n = l.A.getChannel(e);
            R({ channelId: e, guildId: n?.getGuildId?.() ?? n?.guild_id ?? null, messageId: null });
        }, 0);
}
function k() {
    for (let [e, t] of v) clearTimeout(t), v.delete(e);
    C = !1;
}
function U(e) {
    let { minimized: t } = e;
    if (!t) return;
    let n = I.A.getSelectedChannelId();
    if (null == n) return;
    let r = l.A.getChannel(n);
    R({ channelId: n, guildId: r?.getGuildId?.() ?? r?.guild_id ?? null, messageId: null });
}
function G(e) {
    let t = l.A.getChannel(e);
    null != t &&
        (0, o.pQ)(t.type) &&
        I.A.getSelectedChannelId() !== e &&
        (0, A.D$)({
            target: { kind: A.bB.CHANNEL, channelId: e, guildId: t.getGuildId(), messageId: null },
            source: _.B9.AUTOMATIC_CHANNEL_SELECT,
            widgetType: null,
        });
}
function F(e) {
    let { channelId: t } = e;
    if (!p.default.isAnyOverlayRendering() || null == t) return;
    let n = h.A.getTargetPID(),
        r = h.A.isFocused(n),
        i = m.A.isInputLocked(n);
    r && !i && G(t);
}
function V(e) {
    if (e.locked || !p.default.isAnyOverlayRendering()) return;
    let t = I.A.getSelectedChannelId();
    if (null != t && g.A.hasNotificationForChannel(t)) return void D(t);
    let n = null,
        r = g.A.getMostRecentNotificationChannelId();
    null != r ? (n = r) : C || (n = c.A.getChannelId() ?? null), null != n && (G(n), D(n));
}
class B extends i.A {
    actions = {
        CHANNEL_SELECT: y(F),
        SIDEBAR_VIEW_CHANNEL: y(F),
        MESSAGE_CREATE: y(w),
        VOICE_STATE_UPDATES: y(L),
        VOICE_CHANNEL_SELECT: y(L),
        OVERLAY_SET_INPUT_LOCKED: y(V),
        OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: y(x),
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: y(M),
        OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: y(P),
        OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: y(k),
        OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: y(U),
    };
}
let H = new B();
