n.d(t, { $: () => r, W: () => s });
var l = n(788868),
    i = n(652215);
let a = new Set([
    i.ThZ.FRIEND_ANNIVERSARIES_CHAT,
    i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
    i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
]);
function r(e) {
    return e === l.np.FRIEND_ANNIVERSARY
        ? {
              chat: i.ThZ.FRIEND_ANNIVERSARIES_CHAT,
              actionButton: i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
              actionButtonCoachmark: i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
          }
        : {};
}
function s(e) {
    return a.has(e);
}
