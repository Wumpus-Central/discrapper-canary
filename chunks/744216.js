"use strict";
n.d(t, { p: () => a });
var r = n(73153),
    i = n(661191),
    s = n(652215);
function a(e, t, n) {
    r.h.dispatch({
        type: "MESSAGE_CREATE",
        channelId: e,
        message: (function (e) {
            let { channelId: t, requesterUser: n, requestToSpeakTimestamp: r } = e;
            return {
                id: i.default.fromTimestamp(Date.parse(r)),
                type: s.lAJ.STAGE_RAISE_HAND,
                flags: s.pr7.EPHEMERAL,
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
                state: s.cmJ.SENT,
                tts: !1,
            };
        })({ channelId: e, requesterUser: t, requestToSpeakTimestamp: n }),
        optimistic: !1,
        sendMessageOptions: {},
        isPushNotification: !1,
    });
}
