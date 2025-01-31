n.d(t, {
    A6: () => s,
    fE: () => r,
    qx: () => a
});
var i = n(570140);
function r(e) {
    let { message: t, channel: n, shouldMention: r, showMentionToggle: a, source: s } = e;
    i.Z.dispatch({
        type: 'CREATE_PENDING_REPLY',
        message: t,
        channel: n,
        shouldMention: r,
        showMentionToggle: a,
        source: s
    });
}
function a(e, t) {
    i.Z.dispatch({
        type: 'SET_PENDING_REPLY_SHOULD_MENTION',
        channelId: e,
        shouldMention: t
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'DELETE_PENDING_REPLY',
        channelId: e
    });
}
