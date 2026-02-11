"use strict";
n.d(t, { $p: () => p, D$: () => _, Ml: () => u, S$: () => h, bB: () => c, lu: () => f });
var r = n(73153),
    i = n(308528),
    a = n(961350),
    s = n(734057),
    o = n(810412),
    l = n(187667);
function u(e) {
    let { channelId: t, source: n, lastActivityAtMs: i = Date.now(), lastMessageId: a } = e;
    return r.h.dispatch({
        type: "OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL",
        channelId: t,
        source: n,
        lastActivityAtMs: i,
        lastMessageId: a,
    });
}
var c = (function (e) {
    return (e.CHANNEL = "CHANNEL"), (e.DM_USER = "DM_USER"), e;
})({});
async function d(e) {
    let { userId: t, existingChannelId: n } = e,
        r = n ?? s.A.getDMFromUserId(t) ?? null;
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
async function _(e) {
    let { target: t, source: n, widgetType: i } = e,
        a = "CHANNEL" === t.kind ? t.channelId : await d(t);
    if (null == a) return null;
    let s = "CHANNEL" === t.kind ? t.guildId : null,
        u = t.messageId ?? null,
        c = l.A.getSelectedChannelId();
    return (
        null != i &&
            (null == c
                ? (0, o.YX)(i, { type: o.Z5.TEXT_CHAT, value: o.IP.OPENED_TEXT_CHAT, secondaryValue: n })
                : c !== a && (0, o.YX)(i, { type: o.Z5.TEXT_CHAT, value: o.IP.CHANNEL_SELECTED, secondaryValue: n })),
        await r.h.dispatch({
            type: "OVERLAY_TEXT_CHAT_SELECT_CHANNEL",
            channelId: a,
            source: n,
            guildId: s,
            messageId: u,
        }),
        a
    );
}
function f(e) {
    let { channelId: t, widgetType: n, secondaryValue: i = "remove_channel" } = e;
    return (
        (0, o.YX)(n, { type: o.Z5.TEXT_CHAT, value: o.IP.CLOSED_TEXT_CHAT, secondaryValue: i }),
        r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_CHANNEL", channelId: t })
    );
}
function p() {
    return r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS" });
}
function h(e) {
    let { minimized: t } = e;
    return r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED", minimized: t });
}
