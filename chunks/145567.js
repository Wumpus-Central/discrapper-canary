n.d(t, {
    D$: () => s,
    Ml: () => o,
    S$: () => c,
    lu: () => l,
});
var r = n(73153),
    i = n(810412),
    a = n(187667);

function o(e) {
    let { channelId: t, source: n, lastActivityAtMs: i = Date.now(), lastMessageId: a } = e;
    return r.h.dispatch({
        type: "OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL",
        channelId: t,
        source: n,
        lastActivityAtMs: i,
        lastMessageId: a,
    });
}

function s(e) {
    let { channelId: t, source: n, guildId: o, messageId: s, widgetType: l } = e,
        c = a.A.getSelectedChannelId();
    return (
        null == c
            ? (0, i.YX)(l, {
                  type: i.Z5.TEXT_CHAT,
                  value: i.IP.OPENED_TEXT_CHAT,
                  secondaryValue: n,
              })
            : c !== t &&
              (0, i.YX)(l, {
                  type: i.Z5.TEXT_CHAT,
                  value: i.IP.CHANNEL_SELECTED,
                  secondaryValue: n,
              }),
        r.h.dispatch({
            type: "OVERLAY_TEXT_CHAT_SELECT_CHANNEL",
            channelId: t,
            source: n,
            guildId: o,
            messageId: s,
        })
    );
}

function l(e) {
    let { channelId: t, widgetType: n, secondaryValue: a = "remove_channel" } = e;
    return (
        (0, i.YX)(n, {
            type: i.Z5.TEXT_CHAT,
            value: i.IP.CLOSED_TEXT_CHAT,
            secondaryValue: a,
        }),
        r.h.dispatch({
            type: "OVERLAY_TEXT_CHAT_REMOVE_CHANNEL",
            channelId: t,
        })
    );
}

function c(e) {
    let { minimized: t } = e;
    return r.h.dispatch({
        type: "OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED",
        minimized: t,
    });
}
