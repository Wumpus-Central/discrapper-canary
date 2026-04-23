"use strict";
n.d(t, { $: () => a, W: () => o });
var r = n(788868),
    i = n(652215);
let s = new Set([
    i.ThZ.FRIEND_ANNIVERSARIES_CHAT,
    i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
    i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
]);
function a(e) {
    return e === r.np.FRIEND_ANNIVERSARY
        ? {
              chat: i.ThZ.FRIEND_ANNIVERSARIES_CHAT,
              actionButton: i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
              actionButtonCoachmark: i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
          }
        : {};
}
function o(e) {
    return s.has(e);
}
