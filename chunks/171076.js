"use strict";
n.d(t, { A: () => H });
var i = n(684013),
    r = n(439372),
    s = n(547),
    a = n(938005),
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
let N = (e) => (0, m.U5)(e, "OverlayTextChatAutomaticLifecycleManager"),
    v = new Map(),
    C = null,
    R = !1;
async function O() {
    try {
        return (
            await Promise.all([
                n.e("59913"),
                n.e("45553"),
                n.e("42657"),
                n.e("2677"),
                n.e("57093"),
                n.e("32285"),
                n.e("33950"),
                n.e("54926"),
                n.e("11171"),
                n.e("22467"),
                n.e("5517"),
                n.e("74107"),
                n.e("87550"),
                n.e("55644"),
                n.e("75430"),
                n.e("71934"),
                n.e("72365"),
                n.e("33063"),
                n.e("28379"),
                n.e("39995"),
                n.e("25568"),
                n.e("394"),
                n.e("16261"),
                n.e("41475"),
                n.e("28758"),
                n.e("91680"),
                n.e("57036"),
                n.e("57174"),
                n.e("98839"),
                n.e("24199"),
                n.e("207"),
                n.e("54048"),
                n.e("88941"),
                n.e("61379"),
                n.e("34530"),
                n.e("43039"),
                n.e("25693"),
                n.e("32606"),
                n.e("28154"),
                n.e("48804"),
                n.e("21690"),
                n.e("4369"),
                n.e("32817"),
                n.e("55112"),
                n.e("699"),
                n.e("13681"),
                n.e("53729"),
                n.e("10004"),
                n.e("55314"),
                n.e("89094"),
                n.e("29177"),
                n.e("32551"),
                n.e("62680"),
                n.e("63437"),
                n.e("87306"),
                n.e("23353"),
                n.e("50015"),
                n.e("38835"),
                n.e("99666"),
                n.e("41043"),
                n.e("11523"),
                n.e("44695"),
                n.e("18441"),
                n.e("44376"),
                n.e("31644"),
                n.e("45723"),
                n.e("70697"),
                n.e("18546"),
                n.e("53930"),
                n.e("31390"),
                n.e("98125"),
                n.e("21825"),
                n.e("90244"),
                n.e("18943"),
                n.e("17225"),
                n.e("70653"),
                n.e("96123"),
                n.e("8892"),
                n.e("31825"),
                n.e("36320"),
                n.e("20320"),
                n.e("84967"),
                n.e("47017"),
                n.e("90889"),
                n.e("99657"),
                n.e("26780"),
                n.e("44265"),
                n.e("99141"),
                n.e("84103"),
                n.e("88077"),
                n.e("21435"),
                n.e("62875"),
                n.e("30920"),
                n.e("99941"),
                n.e("25990"),
                n.e("33902"),
                n.e("11527"),
                n.e("63095"),
                n.e("52266"),
                n.e("68647"),
                n.e("92583"),
                n.e("39810"),
                n.e("63070"),
                n.e("64615"),
                n.e("96443"),
                n.e("75134"),
                n.e("57598"),
                n.e("55184"),
                n.e("23216"),
                n.e("87079"),
                n.e("18401"),
                n.e("25637"),
                n.e("32079"),
                n.e("14805"),
                n.e("1555"),
                n.e("73547"),
                n.e("24761"),
                n.e("43300"),
                n.e("99593"),
                n.e("84456"),
                n.e("47555"),
                n.e("61935"),
                n.e("99999"),
                n.e("5501"),
                n.e("62168"),
                n.e("69875"),
                n.e("58157"),
                n.e("23891"),
                n.e("86949"),
                n.e("22380"),
                n.e("15754"),
                n.e("90191"),
                n.e("35027"),
                n.e("37977"),
                n.e("53614"),
                n.e("31145"),
                n.e("71577"),
                n.e("51243"),
                n.e("52073"),
                n.e("9915"),
                n.e("53374"),
                n.e("93158"),
                n.e("88740"),
                n.e("51130"),
                n.e("58428"),
                n.e("32823"),
                n.e("34691"),
                n.e("92731"),
                n.e("77084"),
                n.e("85901"),
                n.e("5131"),
                n.e("86672"),
                n.e("95093"),
                n.e("96137"),
                n.e("21570"),
                n.e("78412"),
                n.e("18997"),
                n.e("80239"),
                n.e("28752"),
                n.e("25486"),
                n.e("72877"),
                n.e("97069"),
                n.e("32207"),
                n.e("71467"),
                n.e("36150"),
                n.e("99011"),
                n.e("22067"),
                n.e("55266"),
                n.e("49333"),
                n.e("86262"),
                n.e("27752"),
                n.e("31616"),
                n.e("10147"),
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
    let r = v.get(t);
    null != r && clearTimeout(r);
    let a = setTimeout(() => {
        v.delete(t), u.A.isReady(t) || s.A.fetchMessages({ guildId: n, channelId: t, messageId: i });
    }, 1e3);
    v.set(t, a);
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
        n = v.get(t);
    null != n && (clearTimeout(n), v.delete(t)),
        setTimeout(() => {
            let e = f.A.getSelectedChannelId();
            if ((null == e && (R = !1), null == e || e === t)) return;
            let n = l.A.getChannel(e);
            b({ channelId: e, guildId: n?.getGuildId?.() ?? n?.guild_id ?? null, messageId: null });
        }, 0);
}
function k() {
    for (let [e, t] of v) clearTimeout(t), v.delete(e);
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
