n.d(t, { $p: () => h, D$: () => I, Ml: () => E, S$: () => S, bB: () => u, lu: () => T });
var i,
    a = n(228366),
    r = n(308528),
    s = n(684013),
    l = n(495544),
    o = n(734057),
    d = n(810412),
    c = n(1193),
    _ = n(41984);
function E(e) {
    let { channelId: t, source: n, lastActivityAtMs: i = Date.now(), lastMessageId: r } = e;
    return a.h.dispatch({
        type: "OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL",
        channelId: t,
        source: n,
        lastActivityAtMs: i,
        lastMessageId: r,
    });
}
var u = (((i = {}).CHANNEL = "CHANNEL"), (i.DM_USER = "DM_USER"), i);
async function A(e) {
    let { userId: t, existingChannelId: n } = e,
        i = n ?? o.A.getDMFromUserId(t) ?? null;
    if (null != i) return i;
    if (t === l.default.getId()) return null;
    try {
        let e = await r.A.getDMChannel(t);
        if (null != e) return e;
    } catch {}
    try {
        let e = await r.A.ensurePrivateChannel(t);
        if (null != e) return e;
    } catch {}
    return null;
}
async function I(e) {
    let { target: t, source: n, widgetType: i } = e,
        r = "CHANNEL" === t.kind ? t.channelId : await A(t);
    if (null == r) return null;
    let l = "CHANNEL" === t.kind ? t.guildId : null,
        o = t.messageId ?? null,
        E = c.A.getSelectedChannelId();
    return (
        null != i &&
            n !== _.B9.AUTOMATIC_CHANNEL_SELECT &&
            (null == E
                ? (0, d.YX)(i, { type: d.Z5.TEXT_CHAT, value: d.IP.OPENED_TEXT_CHAT, secondaryValue: n })
                : E !== r && (0, d.YX)(i, { type: d.Z5.TEXT_CHAT, value: d.IP.CHANNEL_SELECTED, secondaryValue: n })),
        null != E && s.A.ackTextChatChannel(E),
        await a.h.dispatch({
            type: "OVERLAY_TEXT_CHAT_SELECT_CHANNEL",
            channelId: r,
            source: n,
            guildId: l,
            messageId: o,
        }),
        r
    );
}
function T(e) {
    let { channelId: t, widgetType: n, secondaryValue: i = "remove_channel" } = e;
    return (
        (0, d.YX)(n, { type: d.Z5.TEXT_CHAT, value: d.IP.CLOSED_TEXT_CHAT, secondaryValue: i }),
        a.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_CHANNEL", channelId: t })
    );
}
function h() {
    return a.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS" });
}
function S(e) {
    let { minimized: t } = e;
    return a.h.dispatch({ type: "OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED", minimized: t });
}
