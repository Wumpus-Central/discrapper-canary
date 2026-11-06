var l = n(682901),
    i = n(652215);
let r = new Map([
    [i.ThZ.FRIEND_ANNIVERSARIES_CHAT, l.np.FRIEND_ANNIVERSARY],
    [i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON, l.np.FRIEND_ANNIVERSARY],
    [i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK, l.np.FRIEND_ANNIVERSARY],
]);
n.d(
    t,
    {},
    {
        $u: function (e) {
            return e === l.np.FRIEND_ANNIVERSARY
                ? {
                      chat: i.ThZ.FRIEND_ANNIVERSARIES_CHAT,
                      actionButton: i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                      actionButtonCoachmark: i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
                  }
                : {};
        },
        NE: function (e) {
            return r.get(e) ?? null;
        },
    },
);
