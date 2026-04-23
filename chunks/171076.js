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
    _ = n(287809),
    f = n(728458),
    p = n(1193),
    h = n(41984),
    E = n(267355),
    m = n(956753),
    g = n(833551),
    A = n(395011),
    I = n(222506),
    T = n(897720),
    S = n(145567),
    y = n(652215);
let N = (e) => (0, m.U5)(e, "OverlayTextChatAutomaticLifecycleManager"),
    v = new Map(),
    C = null,
    O = !1;
async function R() {
    try {
        return (
            await Promise.all([n.e("99011"), n.e("87306"), n.e("70233"), n.e("94432"), n.e("39417")]).then(
                n.bind(n, 703552),
            )
        ).default;
    } catch (e) {
        return f.A.captureException(e), null;
    }
}
function b(e) {
    let { channelId: t, guildId: n, messageId: r } = e;
    if (!g.default.isAnyOverlayRendering() || null == l.A.getChannel(t) || u.A.isReady(t)) return;
    let i = v.get(t);
    null != i && clearTimeout(i);
    let a = setTimeout(() => {
        v.delete(t), u.A.isReady(t) || s.A.fetchMessages({ guildId: n, channelId: t, messageId: r });
    }, 1e3);
    v.set(t, a);
}
async function D(e) {
    let t = await R();
    if (!(null == t || I.A.isInputLocked(A.A.getTargetPID())))
        for (let n of t.getNotificationsForChannel(e, T.zb.TEXT)) r.A.updateNotificationStatus(n.id, y.yFH.DISMISSED);
}
function L() {
    !(function () {
        if (!g.default.isAnyOverlayRendering()) return;
        let e = p.A.getSelectedChannelId();
        if (null == e || e === C) return;
        let t = l.A.getChannel(e);
        null != t &&
            (0, o.pQ)(t.type) &&
            ((C = e), b({ channelId: e, guildId: t?.getGuildId?.() ?? t?.guild_id ?? null, messageId: null }));
    })();
}
function w(e) {
    let { channelId: t, message: n } = e;
    if (!g.default.isAnyOverlayRendering()) return;
    let r = l.A.getChannel(t);
    if (null == r) return;
    let i = _.default.getCurrentUser()?.id;
    if ((null != i && n.author?.id === i && D(t), p.A.isChannelTracked(t))) return;
    if (r.isPrivate()) {
        if (d.Ay.isChannelMuted(null, t)) return;
    } else if (d.Ay.isChannelMuted(r.getGuildId(), t) || !(0, a.lx)(n, t, !0)) return;
    let s = r.isPrivate() ? h.B9.INCOMING_DM_MESSAGE : h.B9.INCOMING_MENTION_MESSAGE,
        o = (function (e) {
            if (null == e.timestamp) return Date.now();
            let t = new Date(e.timestamp).getTime();
            return Number.isFinite(t) ? t : Date.now();
        })(n);
    (0, S.Ml)({ channelId: t, source: s, lastActivityAtMs: o, lastMessageId: n.id });
}
function M(e) {
    let { channelId: t, lastMessageId: n } = e,
        r = l.A.getChannel(t);
    b({ channelId: t, guildId: r?.getGuildId?.() ?? r?.guild_id ?? null, messageId: n ?? null });
}
function P(e) {
    let { channelId: t, guildId: n, messageId: r, source: i } = e;
    i !== h.B9.AUTOMATIC_CHANNEL_SELECT && ((O = !0), D(t)), b({ channelId: t, guildId: n, messageId: r });
}
function x(e) {
    let { channelId: t } = e,
        n = v.get(t);
    null != n && (clearTimeout(n), v.delete(t)),
        setTimeout(() => {
            let e = p.A.getSelectedChannelId();
            if ((null == e && (O = !1), null == e || e === t)) return;
            let n = l.A.getChannel(e);
            b({ channelId: e, guildId: n?.getGuildId?.() ?? n?.guild_id ?? null, messageId: null });
        }, 0);
}
function k() {
    for (let [e, t] of v) clearTimeout(t), v.delete(e);
    O = !1;
}
function U(e) {
    let { minimized: t } = e;
    if (!t) return;
    let n = p.A.getSelectedChannelId();
    if (null == n) return;
    let r = l.A.getChannel(n);
    b({ channelId: n, guildId: r?.getGuildId?.() ?? r?.guild_id ?? null, messageId: null });
}
function G(e) {
    let t = l.A.getChannel(e);
    null != t &&
        (0, o.pQ)(t.type) &&
        p.A.getSelectedChannelId() !== e &&
        (0, S.D$)({
            target: { kind: S.bB.CHANNEL, channelId: e, guildId: t.getGuildId(), messageId: null },
            source: h.B9.AUTOMATIC_CHANNEL_SELECT,
            widgetType: null,
        });
}
function F(e) {
    let { channelId: t } = e;
    !g.default.isAnyOverlayRendering() || null == t || ((0, E.isOverlayCurrentlyVisibleAndUnlocked)() && G(t));
}
async function V(e) {
    if (e.locked) {
        let e = p.A.getSelectedChannelId();
        null != e && r.A.ackTextChatChannel(e);
        return;
    }
    let t = await R();
    if (null == t || !g.default.isAnyOverlayRendering()) return;
    let n = p.A.getSelectedChannelId();
    if (null != n && t.hasNotificationForChannel(n)) return;
    let i = null,
        s = t.getMostRecentNotificationChannelId();
    null != s ? (i = s) : O || (i = c.A.getChannelId() ?? null), null != i && (G(i), D(i));
}
class B extends i.A {
    actions = {
        CHANNEL_SELECT: N(F),
        SIDEBAR_VIEW_CHANNEL: N(F),
        MESSAGE_CREATE: N(w),
        VOICE_STATE_UPDATES: N(L),
        VOICE_CHANNEL_SELECT: N(L),
        OVERLAY_SET_INPUT_LOCKED: N(V),
        OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: N(M),
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: N(P),
        OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: N(x),
        OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: N(k),
        OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: N(U),
    };
}
let H = new B();
