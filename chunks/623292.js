n.d(t, {
    A6: () => o,
    fE: () => i,
    qx: () => a
});
var r = n(570140);
function i(e) {
    let { message: t, channel: n, shouldMention: i, showMentionToggle: a, source: o } = e;
    r.Z.dispatch({
        type: 'CREATE_PENDING_REPLY',
        message: t,
        channel: n,
        shouldMention: i,
        showMentionToggle: a,
        source: o
    });
}
function a(e, t) {
    r.Z.dispatch({
        type: 'SET_PENDING_REPLY_SHOULD_MENTION',
        channelId: e,
        shouldMention: t
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'DELETE_PENDING_REPLY',
        channelId: e
    });
}
