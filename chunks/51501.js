A.d(R, { $u: () => T, NE: () => n });
var I = A(202541),
    E = A(652215);
let _ = new Map([
    [E.ThZ.FRIEND_ANNIVERSARIES_CHAT, I.np.FRIEND_ANNIVERSARY],
    [E.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON, I.np.FRIEND_ANNIVERSARY],
    [E.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK, I.np.FRIEND_ANNIVERSARY],
]);
function T(N) {
    return N === I.np.FRIEND_ANNIVERSARY
        ? {
              chat: E.ThZ.FRIEND_ANNIVERSARIES_CHAT,
              actionButton: E.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
              actionButtonCoachmark: E.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
          }
        : {};
}
function n(N) {
    return _.get(N) ?? null;
}
