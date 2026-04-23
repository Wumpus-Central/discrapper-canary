n.d(t, { C1: () => l, S7: () => o, Sw: () => s, tU: () => _ });
var i = n(636537),
    r = n(228366),
    a = n(652215);
function s(e, t, n, i) {
    r.h.dispatch({ type: "QUEUE_INTERACTION_COMPONENT_STATE", messageId: e, nonce: t, state: n, componentId: i });
}
function _(e, t) {
    let { data: n, messageId: i, preflight: a, onCreate: s, onSuccess: _, onFailure: l } = t;
    r.h.dispatch({
        type: "INTERACTION_QUEUE",
        data: n,
        nonce: e,
        messageId: i,
        preflight: a,
        onCreate: s,
        onSuccess: _,
        onFailure: l,
    });
}
function l(e, t, n, i) {
    r.h.dispatch({ type: "INTERACTION_FAILURE", nonce: e, errorMessage: n, errorCode: t, status: i });
}
async function o(e, t) {
    let n = await i.Bo.get({ url: a.Rsh.MESSAGE_INTERACTION_DATA(e, t), oldFormErrors: !0, rejectWithError: !1 });
    if (!n.ok) return null;
    {
        let i = n.body;
        return (
            r.h.dispatch({
                type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                channelId: e,
                messageId: t,
                interactionData: i,
            }),
            i
        );
    }
}
