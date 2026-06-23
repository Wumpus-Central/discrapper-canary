"use strict";
n.d(t, { $u: () => a, Mi: () => l, NE: () => o });
var i = n(788868),
    r = n(652215);
let s = new Map([
    [r.ThZ.FRIEND_ANNIVERSARIES_CHAT, i.np.FRIEND_ANNIVERSARY],
    [r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON, i.np.FRIEND_ANNIVERSARY],
    [r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK, i.np.FRIEND_ANNIVERSARY],
]);
function a(e) {
    return e === i.np.FRIEND_ANNIVERSARY
        ? {
              chat: r.ThZ.FRIEND_ANNIVERSARIES_CHAT,
              actionButton: r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
              actionButtonCoachmark: r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
          }
        : {};
}
function o(e) {
    return s.get(e) ?? null;
}
function l(e) {
    return i.dr[e] ?? null;
}
