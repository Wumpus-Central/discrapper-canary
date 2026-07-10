"use strict";
n.d(t, { A: () => H });
var i = n(684013),
    r = n(439372),
    a = n(547),
    s = n(944043),
    l = n(95701),
    o = n(734057),
    d = n(232835),
    c = n(309010),
    u = n(543465),
    _ = n(287809),
    E = n(38405),
    A = n(140069),
    h = n(41984),
    I = n(267355),
    f = n(956753),
    p = n(296027),
    T = n(489277),
    m = n(222506),
    g = n(897720),
    S = n(145567),
    N = n(652215);
function C(e) {
    return (0, f.U5)(e, "OverlayTextChatAutomaticLifecycleManager");
}
let R = new Map(),
    O = null,
    L = !1;
async function D() {
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
                n.e("87183"),
                n.e("35027"),
                n.e("37977"),
                n.e("86672"),
                n.e("54625"),
                n.e("77084"),
                n.e("96137"),
                n.e("35485"),
                n.e("18997"),
                n.e("82069"),
                n.e("34691"),
                n.e("80239"),
                n.e("28752"),
                n.e("78412"),
                n.e("25486"),
                n.e("72877"),
                n.e("36150"),
                n.e("99011"),
                n.e("71467"),
                n.e("97069"),
                n.e("32207"),
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
        return E.A.captureException(e), null;
    }
}
function y(e) {
    let { channelId: t, guildId: n, messageId: i } = e;
    if (!p.default.isAnyOverlayRendering() || null == o.A.getChannel(t) || d.A.isReady(t)) return;
    let r = R.get(t);
    null != r && clearTimeout(r);
    let s = setTimeout(() => {
        R.delete(t), d.A.isReady(t) || a.A.fetchMessages({ guildId: n, channelId: t, messageId: i });
    }, 1e3);
    R.set(t, s);
}
async function v(e) {
    let t = await D();
    if (!(null == t || m.A.isInputLocked(T.A.getTargetPID())))
        for (let n of t.getNotificationsForChannel(e, g.zb.TEXT)) i.A.updateNotificationStatus(n.id, N.yFH.DISMISSED);
}
function b() {
    !(function () {
        if (!p.default.isAnyOverlayRendering()) return;
        let e = A.A.getSelectedChannelId();
        if (null == e || e === O) return;
        let t = o.A.getChannel(e);
        null != t &&
            (0, l.pQ)(t.type) &&
            ((O = e), y({ channelId: e, guildId: t?.getGuildId?.() ?? t?.guild_id ?? null, messageId: null }));
    })();
}
function M(e) {
    let { channelId: t, message: n } = e;
    if (!p.default.isAnyOverlayRendering()) return;
    let i = o.A.getChannel(t);
    if (null == i) return;
    let r = _.default.getCurrentUser()?.id;
    if ((null != r && n.author?.id === r && v(t), A.A.isChannelTracked(t))) return;
    if (i.isPrivate()) {
        if (u.Ay.isChannelMuted(null, t)) return;
    } else if (u.Ay.isChannelMuted(i.getGuildId(), t) || !(0, s.lx)(n, t, !0)) return;
    let a = i.isPrivate() ? h.B9.INCOMING_DM_MESSAGE : h.B9.INCOMING_MENTION_MESSAGE,
        l = (function (e) {
            if (null == e.timestamp) return Date.now();
            let t = new Date(e.timestamp).getTime();
            return Number.isFinite(t) ? t : Date.now();
        })(n);
    (0, S.Ml)({ channelId: t, source: a, lastActivityAtMs: l, lastMessageId: n.id });
}
function P(e) {
    let { channelId: t, lastMessageId: n } = e,
        i = o.A.getChannel(t);
    y({ channelId: t, guildId: i?.getGuildId?.() ?? i?.guild_id ?? null, messageId: n ?? null });
}
function U(e) {
    let { channelId: t, guildId: n, messageId: i, source: r } = e;
    r !== h.B9.AUTOMATIC_CHANNEL_SELECT && ((L = !0), v(t)), y({ channelId: t, guildId: n, messageId: i });
}
function w(e) {
    let { channelId: t } = e,
        n = R.get(t);
    null != n && (clearTimeout(n), R.delete(t)),
        setTimeout(() => {
            let e = A.A.getSelectedChannelId();
            if ((null == e && (L = !1), null == e || e === t)) return;
            let n = o.A.getChannel(e);
            y({ channelId: e, guildId: n?.getGuildId?.() ?? n?.guild_id ?? null, messageId: null });
        }, 0);
}
function G() {
    for (let [e, t] of R) clearTimeout(t), R.delete(e);
    L = !1;
}
function x(e) {
    let { minimized: t } = e;
    if (!t) return;
    let n = A.A.getSelectedChannelId();
    if (null == n) return;
    let i = o.A.getChannel(n);
    y({ channelId: n, guildId: i?.getGuildId?.() ?? i?.guild_id ?? null, messageId: null });
}
function k(e) {
    let t = o.A.getChannel(e);
    null != t &&
        (0, l.pQ)(t.type) &&
        A.A.getSelectedChannelId() !== e &&
        (0, S.D$)({
            target: { kind: S.bB.CHANNEL, channelId: e, guildId: t.getGuildId(), messageId: null },
            source: h.B9.AUTOMATIC_CHANNEL_SELECT,
            widgetType: null,
        });
}
function F(e) {
    let { channelId: t } = e;
    !p.default.isAnyOverlayRendering() || null == t || ((0, I.isOverlayCurrentlyVisibleAndUnlocked)() && k(t));
}
async function V(e) {
    if (e.locked) {
        let e = A.A.getSelectedChannelId();
        null != e && i.A.ackTextChatChannel(e);
        return;
    }
    let t = await D();
    if (null == t || !p.default.isAnyOverlayRendering()) return;
    let n = A.A.getSelectedChannelId();
    if (null != n && t.hasNotificationForChannel(n)) return;
    let r = null,
        a = t.getMostRecentNotificationChannelId();
    null != a ? (r = a) : L || (r = c.A.getChannelId() ?? null), null != r && (k(r), v(r));
}
class B extends r.A {
    actions = {
        CHANNEL_SELECT: C(F),
        SIDEBAR_VIEW_CHANNEL: C(F),
        MESSAGE_CREATE: C(M),
        VOICE_STATE_UPDATES: C(b),
        VOICE_CHANNEL_SELECT: C(b),
        OVERLAY_SET_INPUT_LOCKED: C(V),
        OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: C(P),
        OVERLAY_TEXT_CHAT_SELECT_CHANNEL: C(U),
        OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: C(w),
        OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: C(G),
        OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: C(x),
    };
}
let H = new B();
