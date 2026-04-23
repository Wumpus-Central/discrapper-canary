n.d(t, { $p: () => S, D$: () => A, Ml: () => c, S$: () => N, bB: () => u, lu: () => T });
var i,
    r = n(228366),
    a = n(308528),
    s = n(684013),
    _ = n(495544),
    l = n(734057),
    o = n(810412),
    E = n(1193),
    d = n(41984);
function c(e) {
    let { channelId: t, source: n, lastActivityAtMs: i = Date.now(), lastMessageId: a } = e;
    return r.h.dispatch({
        type: "OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL",
        channelId: t,
        source: n,
        lastActivityAtMs: i,
        lastMessageId: a,
    });
}
var u = (((i = {}).CHANNEL = "CHANNEL"), (i.DM_USER = "DM_USER"), i);
async function I(e) {
    let { userId: t, existingChannelId: n } = e,
        i = n ?? l.A.getDMFromUserId(t) ?? null;
    if (null != i) return i;
    if (t === _.default.getId()) return null;
    try {
        let e = await a.A.getDMChannel(t);
        if (null != e) return e;
    } catch {}
    try {
        let e = await a.A.ensurePrivateChannel(t);
        if (null != e) return e;
    } catch {}
    return null;
}
async function A(e) {
    let { target: t, source: n, widgetType: i } = e,
        a = "CHANNEL" === t.kind ? t.channelId : await I(t);
    if (null == a) return null;
    let _ = "CHANNEL" === t.kind ? t.guildId : null,
        l = t.messageId ?? null,
        c = E.A.getSelectedChannelId();
    return (
        null != i &&
            n !== d.B9.AUTOMATIC_CHANNEL_SELECT &&
            (null == c
                ? (0, o.YX)(i, { type: o.Z5.TEXT_CHAT, value: o.IP.OPENED_TEXT_CHAT, secondaryValue: n })
                : c !== a && (0, o.YX)(i, { type: o.Z5.TEXT_CHAT, value: o.IP.CHANNEL_SELECTED, secondaryValue: n })),
        null != c && s.A.ackTextChatChannel(c),
        await r.h.dispatch({
            type: "OVERLAY_TEXT_CHAT_SELECT_CHANNEL",
            channelId: a,
            source: n,
            guildId: _,
            messageId: l,
        }),
        a
    );
}
function T(e) {
    let { channelId: t, widgetType: n, secondaryValue: i = "remove_channel" } = e;
    return (
        (0, o.YX)(n, { type: o.Z5.TEXT_CHAT, value: o.IP.CLOSED_TEXT_CHAT, secondaryValue: i }),
        r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_CHANNEL", channelId: t })
    );
}
function S() {
    return r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS" });
}
function N(e) {
    let { minimized: t } = e;
    return r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED", minimized: t });
}
