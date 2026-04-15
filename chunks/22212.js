i.d(t, { Cf: () => o, Jo: () => h, WD: () => l, X9: () => u, lP: () => c, xF: () => r });
var s = i(954571),
    n = i(652215);
function a(e) {
    let { targetUserId: t, tab: i, actionType: a } = e;
    s.default.track(n.HAw.FRIENDS_LIST_ITEM_ACTION, { target_user_id: t, tab: i, action_type: a });
}
function r(e) {
    let { targetUserId: t, tab: i } = e;
    a({ targetUserId: t, tab: i, actionType: "row_clicked" });
}
function l(e) {
    let { targetUserId: t, tab: i } = e;
    a({ targetUserId: t, tab: i, actionType: "message_clicked" });
}
function o(e) {
    let { targetUserId: t, tab: i } = e;
    a({ targetUserId: t, tab: i, actionType: "video_call_clicked" });
}
function u(e) {
    let { targetUserId: t, tab: i } = e;
    a({ targetUserId: t, tab: i, actionType: "voice_call_clicked" });
}
function c(e) {
    let { targetUserId: t, tab: i } = e;
    a({ targetUserId: t, tab: i, actionType: "remove_friend_clicked" });
}
function h(e) {
    let { targetUserId: t, tab: i } = e;
    a({ targetUserId: t, tab: i, actionType: "context_menu_interacted" });
}
