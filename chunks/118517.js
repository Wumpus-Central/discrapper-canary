s.d(l, { Jx: () => n, Yf: () => t, vz: () => i });
var a = s(73153);
function t(e) {
    let { message: l, channel: s, shouldMention: t, showMentionToggle: i, source: n, mediaMention: r } = e;
    a.h.dispatch({
        type: "CREATE_PENDING_REPLY",
        message: l,
        channel: s,
        shouldMention: t,
        showMentionToggle: i,
        source: n,
        mediaMention: r,
    });
}
function i(e, l) {
    a.h.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: e, shouldMention: l });
}
function n(e) {
    a.h.dispatch({ type: "DELETE_PENDING_REPLY", channelId: e });
}
