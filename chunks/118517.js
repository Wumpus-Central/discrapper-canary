n.d(t, { Jx: () => s, Yf: () => r, vz: () => a });
var i = n(73153);
function r(e) {
    let { message: t, channel: n, shouldMention: r, showMentionToggle: a, source: s, mediaMention: l } = e;
    i.h.dispatch({
        type: "CREATE_PENDING_REPLY",
        message: t,
        channel: n,
        shouldMention: r,
        showMentionToggle: a,
        source: s,
        mediaMention: l,
    });
}
function a(e, t) {
    i.h.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: e, shouldMention: t });
}
function s(e) {
    i.h.dispatch({ type: "DELETE_PENDING_REPLY", channelId: e });
}
