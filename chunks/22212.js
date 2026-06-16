n.d(t, { Cf: () => a, Jo: () => _, WD: () => c, X9: () => o, Yq: () => u, lP: () => d, xF: () => r });
var i = n(174459),
    l = n(652215);
function s(e) {
    let { targetUserId: t, tab: n, actionType: s } = e;
    i.default.track(l.HAw.FRIENDS_LIST_ITEM_ACTION, { target_user_id: t, tab: n, action_type: s });
}
function r(e) {
    let { targetUserId: t, tab: n } = e;
    s({ targetUserId: t, tab: n, actionType: "row_clicked" });
}
function c(e) {
    let { targetUserId: t, tab: n } = e;
    s({ targetUserId: t, tab: n, actionType: "message_clicked" });
}
function a(e) {
    let { targetUserId: t, tab: n } = e;
    s({ targetUserId: t, tab: n, actionType: "video_call_clicked" });
}
function o(e) {
    let { targetUserId: t, tab: n } = e;
    s({ targetUserId: t, tab: n, actionType: "voice_call_clicked" });
}
function d(e) {
    let { targetUserId: t, tab: n } = e;
    s({ targetUserId: t, tab: n, actionType: "remove_friend_clicked" });
}
function _(e) {
    let { targetUserId: t, tab: n } = e;
    s({ targetUserId: t, tab: n, actionType: "context_menu_interacted" });
}
function u(e) {
    let { analyticsLocation: t, noteLength: n } = e;
    i.default.track(l.HAw.FRIEND_REQUEST_NOTE_VIEWED, { location: t, note_length: n });
}
