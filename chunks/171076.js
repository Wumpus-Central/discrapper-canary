"use strict";
n.d(t, { A: () => k });
var r = n(439372),
    i = n(547),
    a = n(742984),
    s = n(95701),
    o = n(734057),
    l = n(320501),
    u = n(309010),
    c = n(543465),
    d = n(41984),
    _ = n(956753),
    f = n(833551),
    p = n(395011),
    h = n(222506),
    m = n(145567),
    g = n(187667);
let E = 1e3,
    A = (e) => (0, _.U5)(e, "OverlayTextChatAutomaticLifecycleManager"),
    I = new Map(),
    T = null;
function S(e) {
    if (null == e.timestamp) return Date.now();
    let t = new Date(e.timestamp).getTime();
    return Number.isFinite(t) ? t : Date.now();
}
function y(e) {
    let { channelId: t, guildId: n, messageId: r } = e;
    if (!f.default.isAnyOverlayRendering() || null == o.A.getChannel(t) || l.A.isReady(t)) return;
    let a = I.get(t);
    null != a && clearTimeout(a);
    let s = setTimeout(() => {
        I.delete(t), l.A.isReady(t) || i.A.fetchMessages({ guildId: n, channelId: t, messageId: r });
    }, E);
    I.set(t, s);
}
function v() {
    if (!f.default.isAnyOverlayRendering()) return;
    let e = g.A.getSelectedChannelId();
    if (null == e || e === T) return;
    let t = o.A.getChannel(e);
    null != t &&
        (0, s.pQ)(t.type) &&
        ((T = e), y({ channelId: e, guildId: t?.getGuildId?.() ?? t?.guild_id ?? null, messageId: null }));
}
function C() {
    v();
}
function N(e) {
    let { channelId: t, message: n } = e;
    if (!f.default.isAnyOverlayRendering()) return;
    let r = o.A.getChannel(t);
    if (null == r || g.A.isChannelTracked(t)) return;
    if (r.isPrivate()) {
        if (c.Ay.isChannelMuted(null, t)) return;
    } else if (c.Ay.isChannelMuted(r.getGuildId(), t) || !(0, a.lx)(n, t, !0)) return;
    let i = r.isPrivate() ? d.B9.INCOMING_DM_MESSAGE : d.B9.INCOMING_MENTION_MESSAGE,
        s = S(n);
    (0, m.Ml)({ channelId: t, source: i, lastActivityAtMs: s, lastMessageId: n.id });
}
function b(e) {
    let { channelId: t, lastMessageId: n } = e,
        r = o.A.getChannel(t);
    y({ channelId: t, guildId: r?.getGuildId?.() ?? r?.guild_id ?? null, messageId: n ?? null });
}
function R(e) {
    let { channelId: t, guildId: n, messageId: r } = e;
    y({ channelId: t, guildId: n, messageId: r });
}
function O(e) {
    let { channelId: t } = e,
        n = I.get(t);
    null != n && (clearTimeout(n), I.delete(t)),
        setTimeout(() => {
            let e = g.A.getSelectedChannelId();
            if (null == e || e === t) return;
            let n = o.A.getChannel(e);
            y({ channelId: e, guildId: n?.getGuildId?.() ?? n?.guild_id ?? null, messageId: null });
        }, 0);
}
function D() {
    for (let [e, t] of I) clearTimeout(t), I.delete(e);
}
function L(e) {
    let { minimized: t } = e;
    if (!t) return;
    let n = g.A.getSelectedChannelId();
    if (null == n) return;
    let r = o.A.getChannel(n);
    y({ channelId: n, guildId: r?.getGuildId?.() ?? r?.guild_id ?? null, messageId: null });
}
function w(e) {
    let t = o.A.getChannel(e);
    null != t &&
        (0, s.pQ)(t.type) &&
        g.A.getSelectedChannelId() !== e &&
        (0, m.D$)({
            target: { kind: m.bB.CHANNEL, channelId: e, guildId: t.getGuildId(), messageId: null },
            source: d.B9.AUTOMATIC_CHANNEL_SELECT,
            widgetType: null,
        });
}
function x(e) {
    let { channelId: t } = e;
    if (!f.default.isAnyOverlayRendering() || null == t) return;
    let n = p.A.getTargetPID(),
        r = p.A.isFocused(n),
        i = h.A.isInputLocked(n);
    r && !i && w(t);
}
function M(e) {
    if (e.locked || !f.default.isAnyOverlayRendering()) return;
    let t = u.A.getChannelId();
    null != t && w(t);
}
class P extends r.A {
    actions = {
        CHANNEL_SELECT: A(x),
        SIDEBAR_VIEW_CHANNEL: A(x),
        MESSAGE_CREATE: A(N),
        VOICE_STATE_UPDATES: A(C),
        VOICE_CHANNEL_SELECT: A(C),
        OVERLAY_SET_INPUT_LOCKED: A(M),
        OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: A(b),
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: A(R),
        OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: A(O),
        OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: A(D),
        OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: A(L),
    };
}
let k = new P();
