"use strict";
n.d(t, { A: () => H });
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
    E = n(41984),
    p = n(267355),
    m = n(956753),
    g = n(296027),
    A = n(489277),
    I = n(222506),
    T = n(897720),
    S = n(145567),
    N = n(652215);
function C(e) {
    return (0, m.U5)(e, "OverlayTextChatAutomaticLifecycleManager");
}
let y = new Map(),
    O = null,
    R = !1;
async function v() {
    try {
        return (
            await Promise.all([
                n.e("41916"),
                n.e("23017"),
                n.e("74387"),
                n.e("92417"),
                n.e("58127"),
                n.e("68515"),
                n.e("14603"),
                n.e("36252"),
                n.e("88804"),
                n.e("28041"),
                n.e("89001"),
                n.e("42535"),
                n.e("23045"),
                n.e("73350"),
                n.e("35027"),
                n.e("37977"),
                n.e("86672"),
                n.e("54625"),
                n.e("77084"),
                n.e("96137"),
                n.e("35485"),
                n.e("82069"),
                n.e("34691"),
                n.e("18997"),
                n.e("80239"),
                n.e("28752"),
                n.e("78412"),
                n.e("25486"),
                n.e("72877"),
                n.e("71467"),
                n.e("97069"),
                n.e("32207"),
                n.e("36150"),
                n.e("99011"),
                n.e("22067"),
                n.e("55266"),
                n.e("49333"),
                n.e("86262"),
                n.e("80077"),
                n.e("30878"),
                n.e("9528"),
                n.e("10147"),
                n.e("60249"),
                n.e("72922"),
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
    let r = y.get(t);
    null != r && clearTimeout(r);
    let a = setTimeout(() => {
        y.delete(t), u.A.isReady(t) || s.A.fetchMessages({ guildId: n, channelId: t, messageId: i });
    }, 1e3);
    y.set(t, a);
}
async function L(e) {
    let t = await v();
    if (!(null == t || I.A.isInputLocked(A.A.getTargetPID())))
        for (let n of t.getNotificationsForChannel(e, T.zb.TEXT)) i.A.updateNotificationStatus(n.id, N.yFH.DISMISSED);
}
function D() {
    !(function () {
        if (!g.default.isAnyOverlayRendering()) return;
        let e = f.A.getSelectedChannelId();
        if (null == e || e === O) return;
        let t = l.A.getChannel(e);
        null != t &&
            (0, o.pQ)(t.type) &&
            ((O = e), b({ channelId: e, guildId: t?.getGuildId?.() ?? t?.guild_id ?? null, messageId: null }));
    })();
}
function w(e) {
    let { channelId: t, message: n } = e;
    if (!g.default.isAnyOverlayRendering()) return;
    let i = l.A.getChannel(t);
    if (null == i) return;
    let r = _.default.getCurrentUser()?.id;
    if ((null != r && n.author?.id === r && L(t), f.A.isChannelTracked(t))) return;
    if (i.isPrivate()) {
        if (d.Ay.isChannelMuted(null, t)) return;
    } else if (d.Ay.isChannelMuted(i.getGuildId(), t) || !(0, a.lx)(n, t, !0)) return;
    let s = i.isPrivate() ? E.B9.INCOMING_DM_MESSAGE : E.B9.INCOMING_MENTION_MESSAGE,
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
    b({ channelId: t, guildId: i?.getGuildId?.() ?? i?.guild_id ?? null, messageId: n ?? null });
}
function M(e) {
    let { channelId: t, guildId: n, messageId: i, source: r } = e;
    r !== E.B9.AUTOMATIC_CHANNEL_SELECT && ((R = !0), L(t)), b({ channelId: t, guildId: n, messageId: i });
}
function x(e) {
    let { channelId: t } = e,
        n = y.get(t);
    null != n && (clearTimeout(n), y.delete(t)),
        setTimeout(() => {
            let e = f.A.getSelectedChannelId();
            if ((null == e && (R = !1), null == e || e === t)) return;
            let n = l.A.getChannel(e);
            b({ channelId: e, guildId: n?.getGuildId?.() ?? n?.guild_id ?? null, messageId: null });
        }, 0);
}
function U() {
    for (let [e, t] of y) clearTimeout(t), y.delete(e);
    R = !1;
}
function k(e) {
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
            source: E.B9.AUTOMATIC_CHANNEL_SELECT,
            widgetType: null,
        });
}
function V(e) {
    let { channelId: t } = e;
    !g.default.isAnyOverlayRendering() || null == t || ((0, p.isOverlayCurrentlyVisibleAndUnlocked)() && G(t));
}
async function F(e) {
    if (e.locked) {
        let e = f.A.getSelectedChannelId();
        null != e && i.A.ackTextChatChannel(e);
        return;
    }
    let t = await v();
    if (null == t || !g.default.isAnyOverlayRendering()) return;
    let n = f.A.getSelectedChannelId();
    if (null != n && t.hasNotificationForChannel(n)) return;
    let r = null,
        s = t.getMostRecentNotificationChannelId();
    null != s ? (r = s) : R || (r = c.A.getChannelId() ?? null), null != r && (G(r), L(r));
}
class B extends r.A {
    actions = {
        CHANNEL_SELECT: C(V),
        SIDEBAR_VIEW_CHANNEL: C(V),
        MESSAGE_CREATE: C(w),
        VOICE_STATE_UPDATES: C(D),
        VOICE_CHANNEL_SELECT: C(D),
        OVERLAY_SET_INPUT_LOCKED: C(F),
        OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: C(P),
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: C(M),
        OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: C(x),
        OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: C(U),
        OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: C(k),
    };
}
let H = new B();
