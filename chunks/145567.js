"use strict";
n.d(t, { D$: () => d, Ml: () => l, S$: () => f, bB: () => u, lu: () => _ });
var r = n(73153),
    i = n(308528),
    a = n(734057),
    s = n(810412),
    o = n(187667);
function l(e) {
    let { channelId: t, source: n, lastActivityAtMs: i = Date.now(), lastMessageId: a } = e;
    return r.h.dispatch({
        type: "OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL",
        channelId: t,
        source: n,
        lastActivityAtMs: i,
        lastMessageId: a,
    });
}
var u = (function (e) {
    return (e.CHANNEL = "CHANNEL"), (e.DM_USER = "DM_USER"), e;
})({});
async function c(e) {
    let { userId: t, existingChannelId: n } = e,
        r = n ?? a.A.getDMFromUserId(t) ?? null;
    if (null != r) return r;
    try {
        return await i.A.getDMChannel(t);
    } catch {
        return null;
    }
}
async function d(e) {
    let { target: t, source: n, widgetType: i } = e,
        a = "CHANNEL" === t.kind ? t.channelId : await c(t);
    if (null == a) return null;
    let l = "CHANNEL" === t.kind ? t.guildId : null,
        u = t.messageId ?? null,
        d = o.A.getSelectedChannelId();
    return (
        null != i &&
            (null == d
                ? (0, s.YX)(i, { type: s.Z5.TEXT_CHAT, value: s.IP.OPENED_TEXT_CHAT, secondaryValue: n })
                : d !== a && (0, s.YX)(i, { type: s.Z5.TEXT_CHAT, value: s.IP.CHANNEL_SELECTED, secondaryValue: n })),
        await r.h.dispatch({
            type: "OVERLAY_TEXT_CHAT_SELECT_CHANNEL",
            channelId: a,
            source: n,
            guildId: l,
            messageId: u,
        }),
        a
    );
}
function _(e) {
    let { channelId: t, widgetType: n, secondaryValue: i = "remove_channel" } = e;
    return (
        (0, s.YX)(n, { type: s.Z5.TEXT_CHAT, value: s.IP.CLOSED_TEXT_CHAT, secondaryValue: i }),
        r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_CHANNEL", channelId: t })
    );
}
function f(e) {
    let { minimized: t } = e;
    return r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED", minimized: t });
}
