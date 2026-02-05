"use strict";
n.d(t, { A: () => w });
var r = n(439372),
    i = n(547),
    a = n(742984),
    s = n(95701),
    o = n(734057),
    l = n(320501),
    u = n(543465),
    c = n(41984),
    d = n(956753),
    _ = n(833551),
    f = n(395011),
    p = n(222506),
    h = n(145567),
    m = n(187667);
let g = 1e3,
    E = (e) => (0, d.U5)(e, "OverlayTextChatAutomaticLifecycleManager"),
    A = new Map(),
    I = null;
function T(e) {
    if (null == e.timestamp) return Date.now();
    let t = new Date(e.timestamp).getTime();
    return Number.isFinite(t) ? t : Date.now();
}
function y(e) {
    let { channelId: t, guildId: n, messageId: r } = e;
    if (!_.default.isAnyOverlayRendering() || null == o.A.getChannel(t) || l.A.isReady(t)) return;
    let a = A.get(t);
    null != a && clearTimeout(a);
    let s = setTimeout(() => {
        A.delete(t), l.A.isReady(t) || i.A.fetchMessages({ guildId: n, channelId: t, messageId: r });
    }, g);
    A.set(t, s);
}
function S() {
    if (!_.default.isAnyOverlayRendering()) return;
    let e = m.A.getSelectedChannelId();
    if (null == e || e === I) return;
    let t = o.A.getChannel(e);
    null != t &&
        (0, s.pQ)(t.type) &&
        ((I = e), y({ channelId: e, guildId: t?.getGuildId?.() ?? t?.guild_id ?? null, messageId: null }));
}
function v() {
    S();
}
function C(e) {
    let { channelId: t, message: n } = e;
    if (!_.default.isAnyOverlayRendering()) return;
    let r = o.A.getChannel(t);
    if (null == r) return;
    let i = m.A.getSelectedChannelId() === t;
    if (r.isPrivate()) {
        if (u.Ay.isChannelMuted(null, t)) return;
    } else if (!i && (u.Ay.isChannelMuted(r.getGuildId(), t) || !(0, a.lx)(n, t, !0, !0))) return;
    let s = r.isPrivate() ? c.B9.INCOMING_DM_MESSAGE : c.B9.INCOMING_MENTION_MESSAGE,
        l = T(n);
    (0, h.Ml)({ channelId: t, source: s, lastActivityAtMs: l, lastMessageId: n.id });
}
function b(e) {
    let { channelId: t, lastMessageId: n } = e,
        r = o.A.getChannel(t);
    y({ channelId: t, guildId: r?.getGuildId?.() ?? r?.guild_id ?? null, messageId: n ?? null });
}
function N(e) {
    let { channelId: t, guildId: n, messageId: r } = e;
    y({ channelId: t, guildId: n, messageId: r });
}
function R(e) {
    let { channelId: t } = e,
        n = A.get(t);
    null != n && (clearTimeout(n), A.delete(t)),
        setTimeout(() => {
            let e = m.A.getSelectedChannelId();
            if (null == e || e === t) return;
            let n = o.A.getChannel(e);
            y({ channelId: e, guildId: n?.getGuildId?.() ?? n?.guild_id ?? null, messageId: null });
        }, 0);
}
function O(e) {
    let { minimized: t } = e;
    if (!t) return;
    let n = m.A.getSelectedChannelId();
    if (null == n) return;
    let r = o.A.getChannel(n);
    y({ channelId: n, guildId: r?.getGuildId?.() ?? r?.guild_id ?? null, messageId: null });
}
function D(e) {
    let { channelId: t } = e;
    if (!_.default.isAnyOverlayRendering() || null == t) return;
    let n = f.A.getTargetPID(),
        r = f.A.isFocused(n),
        i = p.A.isInputLocked(n);
    if (!r || i) return;
    let a = o.A.getChannel(t);
    null != a &&
        (0, s.pQ)(a.type) &&
        m.A.getSelectedChannelId() !== t &&
        (0, h.D$)({
            target: { kind: h.bB.CHANNEL, channelId: t, guildId: a.getGuildId(), messageId: null },
            source: c.B9.AUTOMATIC_CHANNEL_SELECT,
            widgetType: null,
        });
}
class L extends r.A {
    actions = {
        CHANNEL_SELECT: E(D),
        SIDEBAR_VIEW_CHANNEL: E(D),
        MESSAGE_CREATE: E(C),
        VOICE_STATE_UPDATES: E(v),
        VOICE_CHANNEL_SELECT: E(v),
        OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: E(b),
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: E(N),
        OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: E(R),
        OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: E(O),
    };
}
let w = new L();
