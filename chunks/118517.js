n.d(t, { Jx: () => a, Yf: () => r, vz: () => i });
var l = n(228366);
function r(e) {
    let { message: t, channel: n, shouldMention: r, showMentionToggle: i, source: a, mediaMention: s } = e;
    l.h.dispatch({
        type: "CREATE_PENDING_REPLY",
        message: t,
        channel: n,
        shouldMention: r,
        showMentionToggle: i,
        source: a,
        mediaMention: s,
    });
}
function i(e, t) {
    l.h.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: e, shouldMention: t });
}
function a(e) {
    l.h.dispatch({ type: "DELETE_PENDING_REPLY", channelId: e });
}
