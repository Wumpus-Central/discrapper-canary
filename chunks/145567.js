"use strict";
n.d(t, { $p: () => m, D$: () => h, Ml: () => _, S$: () => g, bB: () => f, lu: () => p });
var r,
    i = n(73153),
    s = n(308528),
    a = n(684013),
    o = n(961350),
    l = n(734057),
    u = n(810412),
    d = n(1193),
    c = n(41984);
function _(e) {
    let { channelId: t, source: n, lastActivityAtMs: r = Date.now(), lastMessageId: s } = e;
    return i.h.dispatch({
        type: "OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL",
        channelId: t,
        source: n,
        lastActivityAtMs: r,
        lastMessageId: s,
    });
}
var f = (((r = {}).CHANNEL = "CHANNEL"), (r.DM_USER = "DM_USER"), r);
async function E(e) {
    let { userId: t, existingChannelId: n } = e,
        r = n ?? l.A.getDMFromUserId(t) ?? null;
    if (null != r) return r;
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
async function h(e) {
    let { target: t, source: n, widgetType: r } = e,
        s = "CHANNEL" === t.kind ? t.channelId : await E(t);
    if (null == s) return null;
    let o = "CHANNEL" === t.kind ? t.guildId : null,
        l = t.messageId ?? null,
        _ = d.A.getSelectedChannelId();
    return (
        null != r &&
            n !== c.B9.AUTOMATIC_CHANNEL_SELECT &&
            (null == _
                ? (0, u.YX)(r, { type: u.Z5.TEXT_CHAT, value: u.IP.OPENED_TEXT_CHAT, secondaryValue: n })
                : _ !== s && (0, u.YX)(r, { type: u.Z5.TEXT_CHAT, value: u.IP.CHANNEL_SELECTED, secondaryValue: n })),
        null != _ && a.A.ackTextChatChannel(_),
        await i.h.dispatch({
            type: "OVERLAY_TEXT_CHAT_SELECT_CHANNEL",
            channelId: s,
            source: n,
            guildId: o,
            messageId: l,
        }),
        s
    );
}
function p(e) {
    let { channelId: t, widgetType: n, secondaryValue: r = "remove_channel" } = e;
    return (
        (0, u.YX)(n, { type: u.Z5.TEXT_CHAT, value: u.IP.CLOSED_TEXT_CHAT, secondaryValue: r }),
        i.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_CHANNEL", channelId: t })
    );
}
function m() {
    return i.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS" });
}
function g(e) {
    let { minimized: t } = e;
    return i.h.dispatch({ type: "OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED", minimized: t });
}
