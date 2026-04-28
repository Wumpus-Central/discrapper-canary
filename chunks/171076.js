"use strict";
n.d(t, { A: () => H });
var i = n(684013),
    r = n(439372),
    s = n(547),
    a = n(938005),
    o = n(95701),
    l = n(734057),
    _ = n(232835),
    d = n(309010),
    u = n(543465),
    c = n(287809),
    E = n(38405),
    h = n(1193),
    m = n(41984),
    f = n(267355),
    g = n(956753),
    I = n(833551),
    A = n(489277),
    p = n(222506),
    T = n(897720),
    S = n(145567),
    N = n(652215);
let O = (e) => (0, g.U5)(e, "OverlayTextChatAutomaticLifecycleManager"),
    R = new Map(),
    C = null,
    y = !1;
async function D() {
    try {
        return (
            await Promise.all([
                n.e("24199"),
                n.e("57036"),
                n.e("88394"),
                n.e("80527"),
                n.e("21909"),
                n.e("31825"),
                n.e("23353"),
                n.e("96123"),
                n.e("7175"),
                n.e("37249"),
                n.e("14138"),
                n.e("8971"),
                n.e("88017"),
                n.e("77404"),
                n.e("1040"),
                n.e("64615"),
                n.e("17239"),
                n.e("67849"),
                n.e("64492"),
                n.e("20861"),
                n.e("36682"),
                n.e("45723"),
                n.e("56871"),
                n.e("69601"),
                n.e("63191"),
                n.e("51444"),
                n.e("62290"),
                n.e("80973"),
                n.e("99011"),
                n.e("27752"),
                n.e("7679"),
                n.e("49448"),
                n.e("25013"),
                n.e("15683"),
            ]).then(n.bind(n, 21076))
        ).default;
    } catch (e) {
        return E.A.captureException(e), null;
    }
}
function L(e) {
    let { channelId: t, guildId: n, messageId: i } = e;
    if (!I.default.isAnyOverlayRendering() || null == l.A.getChannel(t) || _.A.isReady(t)) return;
    let r = R.get(t);
    null != r && clearTimeout(r);
    let a = setTimeout(() => {
        R.delete(t), _.A.isReady(t) || s.A.fetchMessages({ guildId: n, channelId: t, messageId: i });
    }, 1e3);
    R.set(t, a);
}
async function v(e) {
    let t = await D();
    if (!(null == t || p.A.isInputLocked(A.A.getTargetPID())))
        for (let n of t.getNotificationsForChannel(e, T.zb.TEXT)) i.A.updateNotificationStatus(n.id, N.yFH.DISMISSED);
}
function w() {
    !(function () {
        if (!I.default.isAnyOverlayRendering()) return;
        let e = h.A.getSelectedChannelId();
        if (null == e || e === C) return;
        let t = l.A.getChannel(e);
        null != t &&
            (0, o.pQ)(t.type) &&
            ((C = e), L({ channelId: e, guildId: t?.getGuildId?.() ?? t?.guild_id ?? null, messageId: null }));
    })();
}
function P(e) {
    let { channelId: t, message: n } = e;
    if (!I.default.isAnyOverlayRendering()) return;
    let i = l.A.getChannel(t);
    if (null == i) return;
    let r = c.default.getCurrentUser()?.id;
    if ((null != r && n.author?.id === r && v(t), h.A.isChannelTracked(t))) return;
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
function b(e) {
    let { channelId: t, lastMessageId: n } = e,
        i = l.A.getChannel(t);
    L({ channelId: t, guildId: i?.getGuildId?.() ?? i?.guild_id ?? null, messageId: n ?? null });
}
function k(e) {
    let { channelId: t, guildId: n, messageId: i, source: r } = e;
    r !== m.B9.AUTOMATIC_CHANNEL_SELECT && ((y = !0), v(t)), L({ channelId: t, guildId: n, messageId: i });
}
function U(e) {
    let { channelId: t } = e,
        n = R.get(t);
    null != n && (clearTimeout(n), R.delete(t)),
        setTimeout(() => {
            let e = h.A.getSelectedChannelId();
            if ((null == e && (y = !1), null == e || e === t)) return;
            let n = l.A.getChannel(e);
            L({ channelId: e, guildId: n?.getGuildId?.() ?? n?.guild_id ?? null, messageId: null });
        }, 0);
}
function M() {
    for (let [e, t] of R) clearTimeout(t), R.delete(e);
    y = !1;
}
function G(e) {
    let { minimized: t } = e;
    if (!t) return;
    let n = h.A.getSelectedChannelId();
    if (null == n) return;
    let i = l.A.getChannel(n);
    L({ channelId: n, guildId: i?.getGuildId?.() ?? i?.guild_id ?? null, messageId: null });
}
function x(e) {
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
    !I.default.isAnyOverlayRendering() || null == t || ((0, f.isOverlayCurrentlyVisibleAndUnlocked)() && x(t));
}
async function F(e) {
    if (e.locked) {
        let e = h.A.getSelectedChannelId();
        null != e && i.A.ackTextChatChannel(e);
        return;
    }
    let t = await D();
    if (null == t || !I.default.isAnyOverlayRendering()) return;
    let n = h.A.getSelectedChannelId();
    if (null != n && t.hasNotificationForChannel(n)) return;
    let r = null,
        s = t.getMostRecentNotificationChannelId();
    null != s ? (r = s) : y || (r = d.A.getChannelId() ?? null), null != r && (x(r), v(r));
}
class B extends r.A {
    actions = {
        CHANNEL_SELECT: O(V),
        SIDEBAR_VIEW_CHANNEL: O(V),
        MESSAGE_CREATE: O(P),
        VOICE_STATE_UPDATES: O(w),
        VOICE_CHANNEL_SELECT: O(w),
        OVERLAY_SET_INPUT_LOCKED: O(F),
        OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: O(b),
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: O(k),
        OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: O(U),
        OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: O(M),
        OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: O(G),
    };
}
let H = new B();
