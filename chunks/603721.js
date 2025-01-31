n.d(t, {
    B0: () => s,
    OG: () => u,
    kz: () => o,
    yr: () => l
});
var i = n(544891),
    r = n(570140),
    a = n(981631);
function s(e, t, n, i) {
    r.Z.dispatch({
        type: 'QUEUE_INTERACTION_COMPONENT_STATE',
        messageId: e,
        nonce: t,
        state: n,
        componentId: i
    });
}
function o(e, t) {
    let { data: n, messageId: i, onCreate: a, onSuccess: s, onFailure: o } = t;
    r.Z.dispatch({
        type: 'INTERACTION_QUEUE',
        data: n,
        nonce: e,
        messageId: i,
        onCreate: a,
        onSuccess: s,
        onFailure: o
    });
}
function l(e, t, n, i) {
    r.Z.dispatch({
        type: 'INTERACTION_FAILURE',
        nonce: e,
        errorMessage: n,
        errorCode: t,
        status: i
    });
}
async function u(e, t) {
    let n = await i.tn.get({
        url: a.ANM.MESSAGE_INTERACTION_DATA(e, t),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    if (!n.ok) return null;
    {
        let i = n.body;
        return (
            r.Z.dispatch({
                type: 'LOAD_MESSAGE_INTERACTION_DATA_SUCCESS',
                channelId: e,
                messageId: t,
                interactionData: i
            }),
            i
        );
    }
}
