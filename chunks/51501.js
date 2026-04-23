n.d(t, { $: () => s, W: () => a });
var i = n(788868),
    r = n(652215);
let l = new Set([
    r.ThZ.FRIEND_ANNIVERSARIES_CHAT,
    r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
    r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
]);
function s(e) {
    return e === i.np.FRIEND_ANNIVERSARY
        ? {
              chat: r.ThZ.FRIEND_ANNIVERSARIES_CHAT,
              actionButton: r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
              actionButtonCoachmark: r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
          }
        : {};
}
function a(e) {
    return l.has(e);
}
