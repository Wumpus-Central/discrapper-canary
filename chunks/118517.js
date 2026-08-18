"use strict";
n.d(t, { Jx: () => r, Yf: () => i, vz: () => s });
var l = n(228366);
function i(e) {
    let { message: t, channel: n, shouldMention: i, showMentionToggle: s, source: r, mediaMention: a } = e;
    l.h.dispatch({
        type: "CREATE_PENDING_REPLY",
        message: t,
        channel: n,
        shouldMention: i,
        showMentionToggle: s,
        source: r,
        mediaMention: a,
    });
}
function s(e, t) {
    l.h.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: e, shouldMention: t });
}
function r(e) {
    l.h.dispatch({ type: "DELETE_PENDING_REPLY", channelId: e });
}
