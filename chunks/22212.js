var i = n(129230),
    s = n(652215);
function r(e) {
    let { targetUserId: t, tab: n, actionType: r } = e;
    i.default.track(s.HAw.FRIENDS_LIST_ITEM_ACTION, { target_user_id: t, tab: n, action_type: r });
}
n.d(
    t,
    {},
    {
        Cf: function (e) {
            let { targetUserId: t, tab: n } = e;
            r({ targetUserId: t, tab: n, actionType: "video_call_clicked" });
        },
        Jo: function (e) {
            let { targetUserId: t, tab: n } = e;
            r({ targetUserId: t, tab: n, actionType: "context_menu_interacted" });
        },
        WD: function (e) {
            let { targetUserId: t, tab: n } = e;
            r({ targetUserId: t, tab: n, actionType: "message_clicked" });
        },
        X9: function (e) {
            let { targetUserId: t, tab: n } = e;
            r({ targetUserId: t, tab: n, actionType: "voice_call_clicked" });
        },
        Yq: function (e) {
            let { analyticsLocation: t, noteLength: n } = e;
            i.default.track(s.HAw.FRIEND_REQUEST_NOTE_VIEWED, { location: t, note_length: n });
        },
        lP: function (e) {
            let { targetUserId: t, tab: n } = e;
            r({ targetUserId: t, tab: n, actionType: "remove_friend_clicked" });
        },
        xF: function (e) {
            let { targetUserId: t, tab: n } = e;
            r({ targetUserId: t, tab: n, actionType: "row_clicked" });
        },
    },
);
