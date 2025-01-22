r.d(n, {
    Dl: function () {
        return p;
    },
    Ms: function () {
        return u;
    },
    Ot: function () {
        return d;
    },
    T: function () {
        return l;
    },
    Uj: function () {
        return f;
    },
    wS: function () {
        return c;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(359119),
    s = r(981631);
function l(e, n) {
    return (
        a.Z.dispatch({
            type: 'DISMISS_CHANNEL_SAFETY_WARNINGS',
            channelId: e,
            warningIds: n
        }),
        i.tn.post({
            url: s.ANM.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: { warning_ids: n },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    );
}
function u(e, n, r) {
    a.Z.dispatch({
        type: 'CHANNEL_SAFETY_WARNING_FEEDBACK',
        channelId: e,
        warningId: n,
        feedbackType: r
    });
}
function c(e) {
    a.Z.dispatch({
        type: 'CLEAR_CHANNEL_SAFETY_WARNINGS',
        channelId: e
    });
}
function d(e) {
    a.Z.dispatch({
        type: 'ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP',
        channelId: e
    });
}
function f(e) {
    return i.tn.post({
        url: s.ANM.SAFETY_WARNING_FALSE_POSITIVE(e),
        rejectWithError: !1
    });
}
function p(e) {
    return i.tn.post({
        url: s.ANM.ADD_SAFETY_WARNING(e),
        body: { safety_warning_type: o.pj.STRANGER_DANGER },
        rejectWithError: !1
    });
}
