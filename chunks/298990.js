var i = n(73153);
n.d(
    e,
    {},
    {
        Jb: function (t) {
            i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: t });
        },
        b4: function (t) {
            i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", channelId: t });
        },
        oR: function (t) {
            i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: t });
        },
        qf: function (t, e, n) {
            return new Promise((l) => {
                setTimeout(() => {
                    i.h.dispatch({
                        type: "ACTIVITY_INVITE_MODAL_OPEN",
                        activity: t,
                        isPrivate: e,
                        context: n,
                        resolve: l,
                    });
                }, 0);
            });
        },
    },
);
