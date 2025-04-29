n.d(t, {
    B0: () => a,
    OG: () => c,
    kz: () => s,
    yr: () => l
});
var r = n(544891),
    i = n(570140),
    o = n(981631);
function a(e, t, n, r) {
    i.Z.dispatch({
        type: 'QUEUE_INTERACTION_COMPONENT_STATE',
        messageId: e,
        nonce: t,
        state: n,
        componentId: r
    });
}
function s(e, t) {
    let { data: n, messageId: r, onCreate: o, onSuccess: a, onFailure: s } = t;
    i.Z.dispatch({
        type: 'INTERACTION_QUEUE',
        data: n,
        nonce: e,
        messageId: r,
        onCreate: o,
        onSuccess: a,
        onFailure: s
    });
}
function l(e, t, n, r) {
    i.Z.dispatch({
        type: 'INTERACTION_FAILURE',
        nonce: e,
        errorMessage: n,
        errorCode: t,
        status: r
    });
}
async function c(e, t) {
    let n = await r.tn.get({
        url: o.ANM.MESSAGE_INTERACTION_DATA(e, t),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    if (!n.ok) return null;
    {
        let r = n.body;
        return (
            i.Z.dispatch({
                type: 'LOAD_MESSAGE_INTERACTION_DATA_SUCCESS',
                channelId: e,
                messageId: t,
                interactionData: r
            }),
            r
        );
    }
}
