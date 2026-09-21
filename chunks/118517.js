n.d(t, { Jx: () => a, Yf: () => l, vz: () => u });
var r = n(228366);
function l(e) {
    let { message: t, channel: n, shouldMention: l, showMentionToggle: u, source: a, mediaMention: i } = e;
    r.h.dispatch({
        type: "CREATE_PENDING_REPLY",
        message: t,
        channel: n,
        shouldMention: l,
        showMentionToggle: u,
        source: a,
        mediaMention: i,
    });
}
function u(e, t) {
    r.h.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: e, shouldMention: t });
}
function a(e) {
    r.h.dispatch({ type: "DELETE_PENDING_REPLY", channelId: e });
}
