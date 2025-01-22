r.d(n, {
    A6: function () {
        return s;
    },
    fE: function () {
        return a;
    },
    qx: function () {
        return o;
    }
});
var i = r(570140);
function a(e) {
    let { message: n, channel: r, shouldMention: a, showMentionToggle: o, source: s } = e;
    i.Z.dispatch({
        type: 'CREATE_PENDING_REPLY',
        message: n,
        channel: r,
        shouldMention: a,
        showMentionToggle: o,
        source: s
    });
}
function o(e, n) {
    i.Z.dispatch({
        type: 'SET_PENDING_REPLY_SHOULD_MENTION',
        channelId: e,
        shouldMention: n
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'DELETE_PENDING_REPLY',
        channelId: e
    });
}
