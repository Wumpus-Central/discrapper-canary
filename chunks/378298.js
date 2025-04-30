n.d(t, {
    Dl: () => f,
    Ms: () => l,
    Ot: () => u,
    T: () => s,
    Uj: () => d,
    wS: () => c
});
var r = n(544891),
    i = n(570140),
    o = n(359119),
    a = n(981631);
function s(e, t) {
    return (
        i.Z.dispatch({
            type: 'DISMISS_CHANNEL_SAFETY_WARNINGS',
            channelId: e,
            warningIds: t
        }),
        r.tn.post({
            url: a.ANM.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: { warning_ids: t },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    );
}
function l(e, t, n) {
    i.Z.dispatch({
        type: 'CHANNEL_SAFETY_WARNING_FEEDBACK',
        channelId: e,
        warningId: t,
        feedbackType: n
    });
}
function c(e) {
    i.Z.dispatch({
        type: 'CLEAR_CHANNEL_SAFETY_WARNINGS',
        channelId: e
    });
}
function u(e) {
    i.Z.dispatch({
        type: 'ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP',
        channelId: e
    });
}
function d(e) {
    return r.tn.post({
        url: a.ANM.SAFETY_WARNING_FALSE_POSITIVE(e),
        rejectWithError: !1
    });
}
function f(e) {
    return r.tn.post({
        url: a.ANM.ADD_SAFETY_WARNING(e),
        body: { safety_warning_type: o.pj.STRANGER_DANGER },
        rejectWithError: !1
    });
}
