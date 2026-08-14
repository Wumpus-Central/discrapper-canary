n.d(t, { Jx: () => i, Yf: () => r, vz: () => s });
var l = n(228366);
function r(e) {
    let { message: t, channel: n, shouldMention: r, showMentionToggle: s, source: i, mediaMention: a } = e;
    l.h.dispatch({
        type: "CREATE_PENDING_REPLY",
        message: t,
        channel: n,
        shouldMention: r,
        showMentionToggle: s,
        source: i,
        mediaMention: a,
    });
}
function s(e, t) {
    l.h.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: e, shouldMention: t });
}
function i(e) {
    l.h.dispatch({ type: "DELETE_PENDING_REPLY", channelId: e });
}
