"use strict";
n.d(t, { A: () => j });
var i = n(684013),
    r = n(439372),
    s = n(547),
    a = n(944043),
    o = n(95701),
    l = n(734057),
    u = n(232835),
    c = n(309010),
    d = n(543465),
    _ = n(287809),
    h = n(38405),
    f = n(140069),
    p = n(41984),
    E = n(267355),
    m = n(956753),
    g = n(296027),
    A = n(489277),
    I = n(222506),
    T = n(897720),
    S = n(145567),
    y = n(652215);
function C(e) {
    return (0, m.U5)(e, "OverlayTextChatAutomaticLifecycleManager");
}
let N = new Map(),
    v = null,
    R = !1;
async function O() {
    try {
        return (
            await Promise.all([
                n.e("85820"),
                n.e("74397"),
                n.e("33739"),
                n.e("25753"),
                n.e("99243"),
                n.e("11815"),
                n.e("57925"),
                n.e("54574"),
                n.e("37977"),
                n.e("86672"),
                n.e("18997"),
                n.e("25486"),
                n.e("72877"),
                n.e("97069"),
                n.e("32207"),
                n.e("71467"),
                n.e("36150"),
                n.e("99011"),
                n.e("55266"),
                n.e("49333"),
                n.e("22067"),
                n.e("86262"),
                n.e("27752"),
                n.e("31616"),
                n.e("96766"),
                n.e("60249"),
                n.e("50541"),
                n.e("61750"),
                n.e("96232"),
            ]).then(n.bind(n, 191701))
        ).default;
    } catch (e) {
        return h.A.captureException(e), null;
    }
}
function b(e) {
    let { channelId: t, guildId: n, messageId: i } = e;
    if (!g.default.isAnyOverlayRendering() || null == l.A.getChannel(t) || u.A.isReady(t)) return;
    let r = N.get(t);
    null != r && clearTimeout(r);
    let a = setTimeout(() => {
        N.delete(t), u.A.isReady(t) || s.A.fetchMessages({ guildId: n, channelId: t, messageId: i });
    }, 1e3);
    N.set(t, a);
}
async function D(e) {
    let t = await O();
    if (!(null == t || I.A.isInputLocked(A.A.getTargetPID())))
        for (let n of t.getNotificationsForChannel(e, T.zb.TEXT)) i.A.updateNotificationStatus(n.id, y.yFH.DISMISSED);
}
function L() {
    !(function () {
        if (!g.default.isAnyOverlayRendering()) return;
        let e = f.A.getSelectedChannelId();
        if (null == e || e === v) return;
        let t = l.A.getChannel(e);
        null != t &&
            (0, o.pQ)(t.type) &&
            ((v = e), b({ channelId: e, guildId: t?.getGuildId?.() ?? t?.guild_id ?? null, messageId: null }));
    })();
}
function w(e) {
    let { channelId: t, message: n } = e;
    if (!g.default.isAnyOverlayRendering()) return;
    let i = l.A.getChannel(t);
    if (null == i) return;
    let r = _.default.getCurrentUser()?.id;
    if ((null != r && n.author?.id === r && D(t), f.A.isChannelTracked(t))) return;
    if (i.isPrivate()) {
        if (d.Ay.isChannelMuted(null, t)) return;
    } else if (d.Ay.isChannelMuted(i.getGuildId(), t) || !(0, a.lx)(n, t, !0)) return;
    let s = i.isPrivate() ? p.B9.INCOMING_DM_MESSAGE : p.B9.INCOMING_MENTION_MESSAGE,
        o = (function (e) {
            if (null == e.timestamp) return Date.now();
            let t = new Date(e.timestamp).getTime();
            return Number.isFinite(t) ? t : Date.now();
        })(n);
    (0, S.Ml)({ channelId: t, source: s, lastActivityAtMs: o, lastMessageId: n.id });
}
function M(e) {
    let { channelId: t, lastMessageId: n } = e,
        i = l.A.getChannel(t);
    b({ channelId: t, guildId: i?.getGuildId?.() ?? i?.guild_id ?? null, messageId: n ?? null });
}
function P(e) {
    let { channelId: t, guildId: n, messageId: i, source: r } = e;
    r !== p.B9.AUTOMATIC_CHANNEL_SELECT && ((R = !0), D(t)), b({ channelId: t, guildId: n, messageId: i });
}
function x(e) {
    let { channelId: t } = e,
        n = N.get(t);
    null != n && (clearTimeout(n), N.delete(t)),
        setTimeout(() => {
            let e = f.A.getSelectedChannelId();
            if ((null == e && (R = !1), null == e || e === t)) return;
            let n = l.A.getChannel(e);
            b({ channelId: e, guildId: n?.getGuildId?.() ?? n?.guild_id ?? null, messageId: null });
        }, 0);
}
function k() {
    for (let [e, t] of N) clearTimeout(t), N.delete(e);
    R = !1;
}
function U(e) {
    let { minimized: t } = e;
    if (!t) return;
    let n = f.A.getSelectedChannelId();
    if (null == n) return;
    let i = l.A.getChannel(n);
    b({ channelId: n, guildId: i?.getGuildId?.() ?? i?.guild_id ?? null, messageId: null });
}
function G(e) {
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
function F(e) {
    let { channelId: t } = e;
    !g.default.isAnyOverlayRendering() || null == t || ((0, E.isOverlayCurrentlyVisibleAndUnlocked)() && G(t));
}
async function V(e) {
    if (e.locked) {
        let e = f.A.getSelectedChannelId();
        null != e && i.A.ackTextChatChannel(e);
        return;
    }
    let t = await O();
    if (null == t || !g.default.isAnyOverlayRendering()) return;
    let n = f.A.getSelectedChannelId();
    if (null != n && t.hasNotificationForChannel(n)) return;
    let r = null,
        s = t.getMostRecentNotificationChannelId();
    null != s ? (r = s) : R || (r = c.A.getChannelId() ?? null), null != r && (G(r), D(r));
}
class B extends r.A {
    actions = {
        CHANNEL_SELECT: C(F),
        SIDEBAR_VIEW_CHANNEL: C(F),
        MESSAGE_CREATE: C(w),
        VOICE_STATE_UPDATES: C(L),
        VOICE_CHANNEL_SELECT: C(L),
        OVERLAY_SET_INPUT_LOCKED: C(V),
        OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: C(M),
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: C(P),
        OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: C(x),
        OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: C(k),
        OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: C(U),
    };
}
let j = new B();
