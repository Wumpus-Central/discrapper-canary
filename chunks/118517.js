"use strict";
n.d(t, { Jx: () => s, Yf: () => i, vz: () => a });
var r = n(73153);
function i(e) {
    let { message: t, channel: n, shouldMention: i, showMentionToggle: a, source: s } = e;
    r.h.dispatch({
        type: "CREATE_PENDING_REPLY",
        message: t,
        channel: n,
        shouldMention: i,
        showMentionToggle: a,
        source: s,
    });
}
function a(e, t) {
    r.h.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: e, shouldMention: t });
}
function s(e) {
    r.h.dispatch({ type: "DELETE_PENDING_REPLY", channelId: e });
}
