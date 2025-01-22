r.d(n, {
    F: function () {
        return l;
    },
    n: function () {
        return u;
    }
});
var i = r(47120);
var a = r(474936),
    o = r(981631);
let s = new Set([o.Sbl.FRIEND_ANNIVERSARIES_CHAT, o.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON, o.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK]);
function l(e) {
    if (e === a.hX.FRIEND_ANNIVERSARY)
        return {
            chat: o.Sbl.FRIEND_ANNIVERSARIES_CHAT,
            actionButton: o.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
            actionButtonCoachmark: o.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK
        };
    return {};
}
function u(e) {
    return s.has(e);
}
