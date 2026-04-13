s.d(t, { Cf: () => l, Jo: () => c, WD: () => r, X9: () => u, lP: () => o, xF: () => a });
var i = s(954571),
    n = s(652215);
function a(e) {
    let { targetUserId: t, tab: s } = e;
    i.default.track(n.HAw.FRIENDS_LIST_ITEM_CLICKED, { target_user_id: t, tab: s });
}
function r(e) {
    let { targetUserId: t, tab: s } = e;
    i.default.track(n.HAw.FRIENDS_LIST_ITEM_MESSAGE_CLICKED, { target_user_id: t, tab: s });
}
function l(e) {
    let { targetUserId: t, tab: s } = e;
    i.default.track(n.HAw.FRIENDS_LIST_ITEM_VIDEO_CALL_CLICKED, { target_user_id: t, tab: s });
}
function u(e) {
    let { targetUserId: t, tab: s } = e;
    i.default.track(n.HAw.FRIENDS_LIST_ITEM_VOICE_CALL_CLICKED, { target_user_id: t, tab: s });
}
function o(e) {
    let { targetUserId: t, tab: s } = e;
    i.default.track(n.HAw.FRIENDS_LIST_ITEM_REMOVE_FRIEND_CLICKED, { target_user_id: t, tab: s });
}
function c(e) {
    let { targetUserId: t, tab: s } = e;
    i.default.track(n.HAw.FRIENDS_LIST_ITEM_CONTEXT_MENU_INTERACTED, { target_user_id: t, tab: s });
}
