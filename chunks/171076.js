"use strict";
n.d(t, { A: () => H });
var i = n(684013),
    r = n(439372),
    s = n(547),
    a = n(938005),
    o = n(95701),
    l = n(734057),
    d = n(232835),
    _ = n(309010),
    u = n(543465),
    c = n(287809),
    E = n(38405),
    h = n(1193),
    m = n(41984),
    f = n(267355),
    g = n(956753),
    p = n(833551),
    A = n(489277),
    I = n(222506),
    T = n(897720),
    S = n(145567),
    N = n(652215);
let C = (e) => (0, g.U5)(e, "OverlayTextChatAutomaticLifecycleManager"),
    R = new Map(),
    O = null,
    y = !1;
async function v() {
    try {
        return (
            await Promise.all([n.e("99011"), n.e("27752"), n.e("92847"), n.e("25013"), n.e("15933")]).then(
                n.bind(n, 21076),
            )
        ).default;
    } catch (e) {
        return E.A.captureException(e), null;
    }
}
function D(e) {
    let { channelId: t, guildId: n, messageId: i } = e;
    if (!p.default.isAnyOverlayRendering() || null == l.A.getChannel(t) || d.A.isReady(t)) return;
    let r = R.get(t);
    null != r && clearTimeout(r);
    let a = setTimeout(() => {
        R.delete(t), d.A.isReady(t) || s.A.fetchMessages({ guildId: n, channelId: t, messageId: i });
    }, 1e3);
    R.set(t, a);
}
async function L(e) {
    let t = await v();
    if (!(null == t || I.A.isInputLocked(A.A.getTargetPID())))
        for (let n of t.getNotificationsForChannel(e, T.zb.TEXT)) i.A.updateNotificationStatus(n.id, N.yFH.DISMISSED);
}
function b() {
    !(function () {
        if (!p.default.isAnyOverlayRendering()) return;
        let e = h.A.getSelectedChannelId();
        if (null == e || e === O) return;
        let t = l.A.getChannel(e);
        null != t &&
            (0, o.pQ)(t.type) &&
            ((O = e), D({ channelId: e, guildId: t?.getGuildId?.() ?? t?.guild_id ?? null, messageId: null }));
    })();
}
function w(e) {
    let { channelId: t, message: n } = e;
    if (!p.default.isAnyOverlayRendering()) return;
    let i = l.A.getChannel(t);
    if (null == i) return;
    let r = c.default.getCurrentUser()?.id;
    if ((null != r && n.author?.id === r && L(t), h.A.isChannelTracked(t))) return;
    if (i.isPrivate()) {
        if (u.Ay.isChannelMuted(null, t)) return;
    } else if (u.Ay.isChannelMuted(i.getGuildId(), t) || !(0, a.lx)(n, t, !0)) return;
    let s = i.isPrivate() ? m.B9.INCOMING_DM_MESSAGE : m.B9.INCOMING_MENTION_MESSAGE,
        o = (function (e) {
            if (null == e.timestamp) return Date.now();
            let t = new Date(e.timestamp).getTime();
            return Number.isFinite(t) ? t : Date.now();
        })(n);
    (0, S.Ml)({ channelId: t, source: s, lastActivityAtMs: o, lastMessageId: n.id });
}
function P(e) {
    let { channelId: t, lastMessageId: n } = e,
        i = l.A.getChannel(t);
    D({ channelId: t, guildId: i?.getGuildId?.() ?? i?.guild_id ?? null, messageId: n ?? null });
}
function k(e) {
    let { channelId: t, guildId: n, messageId: i, source: r } = e;
    r !== m.B9.AUTOMATIC_CHANNEL_SELECT && ((y = !0), L(t)), D({ channelId: t, guildId: n, messageId: i });
}
function M(e) {
    let { channelId: t } = e,
        n = R.get(t);
    null != n && (clearTimeout(n), R.delete(t)),
        setTimeout(() => {
            let e = h.A.getSelectedChannelId();
            if ((null == e && (y = !1), null == e || e === t)) return;
            let n = l.A.getChannel(e);
            D({ channelId: e, guildId: n?.getGuildId?.() ?? n?.guild_id ?? null, messageId: null });
        }, 0);
}
function U() {
    for (let [e, t] of R) clearTimeout(t), R.delete(e);
    y = !1;
}
function x(e) {
    let { minimized: t } = e;
    if (!t) return;
    let n = h.A.getSelectedChannelId();
    if (null == n) return;
    let i = l.A.getChannel(n);
    D({ channelId: n, guildId: i?.getGuildId?.() ?? i?.guild_id ?? null, messageId: null });
}
function G(e) {
    let t = l.A.getChannel(e);
    null != t &&
        (0, o.pQ)(t.type) &&
        h.A.getSelectedChannelId() !== e &&
        (0, S.D$)({
            target: { kind: S.bB.CHANNEL, channelId: e, guildId: t.getGuildId(), messageId: null },
            source: m.B9.AUTOMATIC_CHANNEL_SELECT,
            widgetType: null,
        });
}
function V(e) {
    let { channelId: t } = e;
    !p.default.isAnyOverlayRendering() || null == t || ((0, f.isOverlayCurrentlyVisibleAndUnlocked)() && G(t));
}
async function F(e) {
    if (e.locked) {
        let e = h.A.getSelectedChannelId();
        null != e && i.A.ackTextChatChannel(e);
        return;
    }
    let t = await v();
    if (null == t || !p.default.isAnyOverlayRendering()) return;
    let n = h.A.getSelectedChannelId();
    if (null != n && t.hasNotificationForChannel(n)) return;
    let r = null,
        s = t.getMostRecentNotificationChannelId();
    null != s ? (r = s) : y || (r = _.A.getChannelId() ?? null), null != r && (G(r), L(r));
}
class B extends r.A {
    actions = {
        CHANNEL_SELECT: C(V),
        SIDEBAR_VIEW_CHANNEL: C(V),
        MESSAGE_CREATE: C(w),
        VOICE_STATE_UPDATES: C(b),
        VOICE_CHANNEL_SELECT: C(b),
        OVERLAY_SET_INPUT_LOCKED: C(F),
        OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: C(P),
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: C(k),
        OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: C(M),
        OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: C(U),
        OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: C(x),
    };
}
let H = new B();
