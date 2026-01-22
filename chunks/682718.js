n.d(t, {
    A: () => s,
});
var r = n(73153),
    i = n(31717),
    a = n(399263);
let s = {
    cancel(e, t) {
        r.h.dispatch({
            type: "UPLOAD_CANCEL_REQUEST",
            channelId: e,
            file: t,
        });
        let n = a.A.getMessageForFile(t.id);
        null == n ||
            ("" === i.A.getDraft(n.channel_id, i.C.ChannelMessage) &&
                r.h.dispatch({
                    type: "DRAFT_SAVE",
                    channelId: n.channel_id,
                    draft: n.content,
                    draftType: i.C.ChannelMessage,
                }));
    },
};
