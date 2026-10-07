s.d(e, { Jx: () => i, Yf: () => t, vz: () => n });
var a = s(73153);
function t(l) {
    let { message: e, channel: s, shouldMention: t, showMentionToggle: n, source: i, mediaMention: r } = l;
    a.h.dispatch({
        type: "CREATE_PENDING_REPLY",
        message: e,
        channel: s,
        shouldMention: t,
        showMentionToggle: n,
        source: i,
        mediaMention: r,
    });
}
function n(l, e) {
    a.h.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: l, shouldMention: e });
}
function i(l) {
    a.h.dispatch({ type: "DELETE_PENDING_REPLY", channelId: l });
}
