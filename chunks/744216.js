n.d(t, { p: () => s });
var r = n(73153),
    i = n(661191),
    a = n(652215);
function s(e, t, n) {
    r.h.dispatch({
        type: "MESSAGE_CREATE",
        channelId: e,
        message: o({
            channelId: e,
            requesterUser: t,
            requestToSpeakTimestamp: n,
        }),
        optimistic: !1,
        sendMessageOptions: {},
        isPushNotification: !1,
    });
}
function o(e) {
    let { channelId: t, requesterUser: n, requestToSpeakTimestamp: r } = e;
    return {
        id: i.default.fromTimestamp(Date.parse(r)),
        type: a.lAJ.STAGE_RAISE_HAND,
        flags: a.pr7.EPHEMERAL,
        content: "",
        channel_id: t,
        author: n,
        attachments: [],
        embeds: [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: r,
        state: a.cmJ.SENT,
        tts: !1,
    };
}
