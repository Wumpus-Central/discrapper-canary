"use strict";
n.d(t, { Jx: () => a, Yf: () => i, vz: () => s });
var r = n(73153);
function i(e) {
    let { message: t, channel: n, shouldMention: i, showMentionToggle: s, source: a } = e;
    r.h.dispatch({
        type: "CREATE_PENDING_REPLY",
        message: t,
        channel: n,
        shouldMention: i,
        showMentionToggle: s,
        source: a,
    });
}
function s(e, t) {
    r.h.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: e, shouldMention: t });
}
function a(e) {
    r.h.dispatch({ type: "DELETE_PENDING_REPLY", channelId: e });
}
