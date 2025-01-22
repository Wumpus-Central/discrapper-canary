r.d(n, {
    B0: function () {
        return s;
    },
    OG: function () {
        return c;
    },
    kz: function () {
        return l;
    },
    yr: function () {
        return u;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(981631);
function s(e, n, r, i) {
    a.Z.dispatch({
        type: 'QUEUE_INTERACTION_COMPONENT_STATE',
        messageId: e,
        nonce: n,
        state: r,
        componentId: i
    });
}
function l(e, n) {
    let { data: r, messageId: i, onCreate: o, onSuccess: s, onFailure: l } = n;
    a.Z.dispatch({
        type: 'INTERACTION_QUEUE',
        data: r,
        nonce: e,
        messageId: i,
        onCreate: o,
        onSuccess: s,
        onFailure: l
    });
}
function u(e, n, r, i) {
    a.Z.dispatch({
        type: 'INTERACTION_FAILURE',
        nonce: e,
        errorMessage: r,
        errorCode: n,
        status: i
    });
}
async function c(e, n) {
    let r = await i.tn.get({
        url: o.ANM.MESSAGE_INTERACTION_DATA(e, n),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    if (!r.ok) return null;
    {
        let i = r.body;
        return (
            a.Z.dispatch({
                type: 'LOAD_MESSAGE_INTERACTION_DATA_SUCCESS',
                channelId: e,
                messageId: n,
                interactionData: i
            }),
            i
        );
    }
}
