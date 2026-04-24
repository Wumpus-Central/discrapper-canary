n.d(t, { $: () => i, W: () => a });
var l = n(788868),
    r = n(652215);
let u = new Set([
    r.ThZ.FRIEND_ANNIVERSARIES_CHAT,
    r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
    r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
]);
function i(e) {
    return e === l.np.FRIEND_ANNIVERSARY
        ? {
              chat: r.ThZ.FRIEND_ANNIVERSARIES_CHAT,
              actionButton: r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
              actionButtonCoachmark: r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
          }
        : {};
}
function a(e) {
    return u.has(e);
}
