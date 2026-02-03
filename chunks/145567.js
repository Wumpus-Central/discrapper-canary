n.d(t, {
    D$: () => d,
    Ml: () => l,
    S$: () => p,
    bB: () => c,
    lu: () => f,
});
var r = n(73153),
    i = n(308528),
    a = n(734057),
    o = n(810412),
    s = n(187667);

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
var c = (function (e) {
    return (e.CHANNEL = "CHANNEL"), (e.DM_USER = "DM_USER"), e;
})({});
async function u(e) {
    var t;
    let { userId: n, existingChannelId: r } = e,
        o = null != (t = null != r ? r : a.A.getDMFromUserId(n)) ? t : null;
    if (null != o) return o;
    try {
        return await i.A.getDMChannel(n);
    } catch (e) {
        return null;
    }
}
async function d(e) {
    var t;
    let { target: n, source: i, widgetType: a } = e,
        l = "CHANNEL" === n.kind ? n.channelId : await u(n);
    if (null == l) return null;
    let c = "CHANNEL" === n.kind ? n.guildId : null,
        d = null != (t = n.messageId) ? t : null,
        f = s.A.getSelectedChannelId();
    return (
        null != a &&
            (null == f
                ? (0, o.YX)(a, {
                      type: o.Z5.TEXT_CHAT,
                      value: o.IP.OPENED_TEXT_CHAT,
                      secondaryValue: i,
                  })
                : f !== l &&
                  (0, o.YX)(a, {
                      type: o.Z5.TEXT_CHAT,
                      value: o.IP.CHANNEL_SELECTED,
                      secondaryValue: i,
                  })),
        await r.h.dispatch({
            type: "OVERLAY_TEXT_CHAT_SELECT_CHANNEL",
            channelId: l,
            source: i,
            guildId: c,
            messageId: d,
        }),
        l
    );
}

function f(e) {
    let { channelId: t, widgetType: n, secondaryValue: i = "remove_channel" } = e;
    return (
        (0, o.YX)(n, {
            type: o.Z5.TEXT_CHAT,
            value: o.IP.CLOSED_TEXT_CHAT,
            secondaryValue: i,
        }),
        r.h.dispatch({
            type: "OVERLAY_TEXT_CHAT_REMOVE_CHANNEL",
            channelId: t,
        })
    );
}

function p(e) {
    let { minimized: t } = e;
    return r.h.dispatch({
        type: "OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED",
        minimized: t,
    });
}
