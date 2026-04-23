"use strict";
n.d(t, { A: () => a });
var r = n(73153),
    i = n(31717),
    s = n(399263);
let a = {
    cancel(e, t) {
        r.h.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId: e, file: t });
        let n = s.A.getMessageForFile(t.id);
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
