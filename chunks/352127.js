n.d(t, { Cf: () => s, WD: () => l, X9: () => o, lP: () => d, xF: () => r });
var i = n(954571),
    a = n(652215);
function r(e) {
    let { targetUserId: t, tab: n } = e;
    i.default.track(a.HAw.FRIENDS_LIST_ITEM_CLICKED, { target_user_id: t, tab: n });
}
function l(e) {
    let { targetUserId: t, tab: n } = e;
    i.default.track(a.HAw.FRIENDS_LIST_ITEM_MESSAGE_CLICKED, { target_user_id: t, tab: n });
}
function s(e) {
    let { targetUserId: t, tab: n } = e;
    i.default.track(a.HAw.FRIENDS_LIST_ITEM_VIDEO_CALL_CLICKED, { target_user_id: t, tab: n });
}
function o(e) {
    let { targetUserId: t, tab: n } = e;
    i.default.track(a.HAw.FRIENDS_LIST_ITEM_VOICE_CALL_CLICKED, { target_user_id: t, tab: n });
}
function d(e) {
    let { targetUserId: t, tab: n } = e;
    i.default.track(a.HAw.FRIENDS_LIST_ITEM_REMOVE_FRIEND_CLICKED, { target_user_id: t, tab: n });
}
