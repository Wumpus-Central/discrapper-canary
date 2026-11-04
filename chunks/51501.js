var I = A(682901),
    E = A(652215);
let _ = new Map([
    [E.ThZ.FRIEND_ANNIVERSARIES_CHAT, I.np.FRIEND_ANNIVERSARY],
    [E.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON, I.np.FRIEND_ANNIVERSARY],
    [E.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK, I.np.FRIEND_ANNIVERSARY],
]);
A.d(
    R,
    {},
    {
        $u: function (N) {
            return N === I.np.FRIEND_ANNIVERSARY
                ? {
                      chat: E.ThZ.FRIEND_ANNIVERSARIES_CHAT,
                      actionButton: E.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                      actionButtonCoachmark: E.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
                  }
                : {};
        },
        NE: function (N) {
            return _.get(N) ?? null;
        },
    },
);
