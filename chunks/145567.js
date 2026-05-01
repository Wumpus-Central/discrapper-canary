"use strict";
n.d(t, { $p: () => m, D$: () => p, Ml: () => _, S$: () => g, bB: () => f, lu: () => E });
var i,
    r = n(228366),
    s = n(308528),
    a = n(684013),
    o = n(495544),
    l = n(734057),
    u = n(810412),
    c = n(140069),
    d = n(41984);
function _(e) {
    let { channelId: t, source: n, lastActivityAtMs: i = Date.now(), lastMessageId: s } = e;
    return r.h.dispatch({
        type: "OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL",
        channelId: t,
        source: n,
        lastActivityAtMs: i,
        lastMessageId: s,
    });
}
var f = (((i = {}).CHANNEL = "CHANNEL"), (i.DM_USER = "DM_USER"), i);
async function h(e) {
    let { userId: t, existingChannelId: n } = e,
        i = n ?? l.A.getDMFromUserId(t) ?? null;
    if (null != i) return i;
    if (t === o.default.getId()) return null;
    try {
        let e = await s.A.getDMChannel(t);
        if (null != e) return e;
    } catch {}
    try {
        let e = await s.A.ensurePrivateChannel(t);
        if (null != e) return e;
    } catch {}
    return null;
}
async function p(e) {
    let { target: t, source: n, widgetType: i } = e,
        s = "CHANNEL" === t.kind ? t.channelId : await h(t);
    if (null == s) return null;
    let o = "CHANNEL" === t.kind ? t.guildId : null,
        l = t.messageId ?? null,
        _ = c.A.getSelectedChannelId();
    return (
        null != i &&
            n !== d.B9.AUTOMATIC_CHANNEL_SELECT &&
            (null == _
                ? (0, u.YX)(i, { type: u.Z5.TEXT_CHAT, value: u.IP.OPENED_TEXT_CHAT, secondaryValue: n })
                : _ !== s && (0, u.YX)(i, { type: u.Z5.TEXT_CHAT, value: u.IP.CHANNEL_SELECTED, secondaryValue: n })),
        null != _ && a.A.ackTextChatChannel(_),
        await r.h.dispatch({
            type: "OVERLAY_TEXT_CHAT_SELECT_CHANNEL",
            channelId: s,
            source: n,
            guildId: o,
            messageId: l,
        }),
        s
    );
}
function E(e) {
    let { channelId: t, widgetType: n, secondaryValue: i = "remove_channel" } = e;
    return (
        (0, u.YX)(n, { type: u.Z5.TEXT_CHAT, value: u.IP.CLOSED_TEXT_CHAT, secondaryValue: i }),
        r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_CHANNEL", channelId: t })
    );
}
function m() {
    return r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS" });
}
function g(e) {
    let { minimized: t } = e;
    return r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED", minimized: t });
}
