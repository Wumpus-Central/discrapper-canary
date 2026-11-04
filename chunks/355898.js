var t = l(73153);
l.d(
    s,
    {},
    {
        M: function (e, s) {
            t.h.dispatch({
                type: "GAME_UPSELL_DISMISS",
                applicationIds: e,
                dismissedAt: Date.now(),
                dismissibleContent: s,
            });
        },
        e: function (e, s) {
            t.h.dispatch({ type: "GAME_UPSELL_DISMISS_CLEAR", applicationId: e, dismissibleContent: s });
        },
    },
);
