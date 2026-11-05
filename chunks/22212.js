var i = n(129230),
    l = n(652215);
function s(e) {
    let { targetUserId: t, tab: n, actionType: s } = e;
    i.default.track(l.HAw.FRIENDS_LIST_ITEM_ACTION, { target_user_id: t, tab: n, action_type: s });
}
n.d(
    t,
    {},
    {
        Cf: function (e) {
            let { targetUserId: t, tab: n } = e;
            s({ targetUserId: t, tab: n, actionType: "video_call_clicked" });
        },
        Jo: function (e) {
            let { targetUserId: t, tab: n } = e;
            s({ targetUserId: t, tab: n, actionType: "context_menu_interacted" });
        },
        WD: function (e) {
            let { targetUserId: t, tab: n } = e;
            s({ targetUserId: t, tab: n, actionType: "message_clicked" });
        },
        X9: function (e) {
            let { targetUserId: t, tab: n } = e;
            s({ targetUserId: t, tab: n, actionType: "voice_call_clicked" });
        },
        Yq: function (e) {
            let { analyticsLocation: t, noteLength: n } = e;
            i.default.track(l.HAw.FRIEND_REQUEST_NOTE_VIEWED, { location: t, note_length: n });
        },
        lP: function (e) {
            let { targetUserId: t, tab: n } = e;
            s({ targetUserId: t, tab: n, actionType: "remove_friend_clicked" });
        },
        xF: function (e) {
            let { targetUserId: t, tab: n } = e;
            s({ targetUserId: t, tab: n, actionType: "row_clicked" });
        },
    },
);
