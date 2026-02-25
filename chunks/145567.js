"use strict";
n.d(t, { $p: () => m, D$: () => p, Ml: () => d, S$: () => E, bB: () => _, lu: () => h });
var r = n(73153),
    i = n(308528),
    s = n(684013),
    a = n(961350),
    o = n(734057),
    l = n(810412),
    u = n(1193),
    c = n(41984);
function d(e) {
    let { channelId: t, source: n, lastActivityAtMs: i = Date.now(), lastMessageId: s } = e;
    return r.h.dispatch({
        type: "OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL",
        channelId: t,
        source: n,
        lastActivityAtMs: i,
        lastMessageId: s,
    });
}
var _ = (function (e) {
    return (e.CHANNEL = "CHANNEL"), (e.DM_USER = "DM_USER"), e;
})({});
async function f(e) {
    let { userId: t, existingChannelId: n } = e,
        r = n ?? o.A.getDMFromUserId(t) ?? null;
    if (null != r) return r;
    if (t === a.default.getId()) return null;
    try {
        let e = await i.A.getDMChannel(t);
        if (null != e) return e;
    } catch {}
    try {
        let e = await i.A.ensurePrivateChannel(t);
        if (null != e) return e;
    } catch {}
    return null;
}
async function p(e) {
    let { target: t, source: n, widgetType: i } = e,
        a = "CHANNEL" === t.kind ? t.channelId : await f(t);
    if (null == a) return null;
    let o = "CHANNEL" === t.kind ? t.guildId : null,
        d = t.messageId ?? null,
        _ = u.A.getSelectedChannelId();
    return (
        null != i &&
            n !== c.B9.AUTOMATIC_CHANNEL_SELECT &&
            (null == _
                ? (0, l.YX)(i, { type: l.Z5.TEXT_CHAT, value: l.IP.OPENED_TEXT_CHAT, secondaryValue: n })
                : _ !== a && (0, l.YX)(i, { type: l.Z5.TEXT_CHAT, value: l.IP.CHANNEL_SELECTED, secondaryValue: n })),
        null != _ && s.A.ackTextChatChannel(_),
        await r.h.dispatch({
            type: "OVERLAY_TEXT_CHAT_SELECT_CHANNEL",
            channelId: a,
            source: n,
            guildId: o,
            messageId: d,
        }),
        a
    );
}
function h(e) {
    let { channelId: t, widgetType: n, secondaryValue: i = "remove_channel" } = e;
    return (
        (0, l.YX)(n, { type: l.Z5.TEXT_CHAT, value: l.IP.CLOSED_TEXT_CHAT, secondaryValue: i }),
        r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_CHANNEL", channelId: t })
    );
}
function m() {
    return r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS" });
}
function E(e) {
    let { minimized: t } = e;
    return r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED", minimized: t });
}
