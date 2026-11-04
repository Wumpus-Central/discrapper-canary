var i = n(620632),
    r = n(73153),
    a = n(349435),
    s = n(652215);
n.d(
    t,
    {},
    {
        Ju: function (e) {
            return i.Bo.post({
                url: s.Rsh.ADD_SAFETY_WARNING(e),
                body: { safety_warning_type: a._j.STRANGER_DANGER },
                rejectWithError: (0, i.fT)(),
            });
        },
        WJ: function (e) {
            r.h.dispatch({ type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId: e });
        },
        XR: function (e) {
            return i.Bo.post({ url: s.Rsh.SAFETY_WARNING_FALSE_POSITIVE(e), rejectWithError: (0, i.fT)() });
        },
        bg: function (e) {
            r.h.dispatch({ type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId: e });
        },
        v2: function (e, t, n) {
            r.h.dispatch({ type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId: e, warningId: t, feedbackType: n });
        },
        xi: function (e, t) {
            return (
                r.h.dispatch({ type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId: e, warningIds: t }),
                i.Bo.post({
                    url: s.Rsh.CHANNEL_SAFETY_WARNINGS_ACK(e),
                    body: { warning_ids: t },
                    oldFormErrors: !0,
                    rejectWithError: (0, i.fT)(),
                })
            );
        },
    },
);
