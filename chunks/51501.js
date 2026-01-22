n.d(t, {
    $: () => s,
    W: () => o,
}),
    n(896048);
var r = n(788868),
    i = n(652215);
let a = new Set([
    i.ThZ.FRIEND_ANNIVERSARIES_CHAT,
    i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
    i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
]);

function s(e) {
    return e === r.np.FRIEND_ANNIVERSARY
        ? {
              chat: i.ThZ.FRIEND_ANNIVERSARIES_CHAT,
              actionButton: i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
              actionButtonCoachmark: i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
          }
        : {};
}

function o(e) {
    return a.has(e);
}
