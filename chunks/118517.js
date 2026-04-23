"use strict";
n.d(t, { Jx: () => a, Yf: () => r, vz: () => s });
var i = n(228366);
function r(e) {
    let { message: t, channel: n, shouldMention: r, showMentionToggle: s, source: a } = e;
    i.h.dispatch({
        type: "CREATE_PENDING_REPLY",
        message: t,
        channel: n,
        shouldMention: r,
        showMentionToggle: s,
        source: a,
    });
}
function s(e, t) {
    i.h.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: e, shouldMention: t });
}
function a(e) {
    i.h.dispatch({ type: "DELETE_PENDING_REPLY", channelId: e });
}
