"use strict";
n.d(t, { C1: () => o, S7: () => d, Sw: () => s, tU: () => l });
var i = n(636537),
    r = n(228366),
    a = n(652215);
function s(e, t, n, i) {
    r.h.dispatch({ type: "QUEUE_INTERACTION_COMPONENT_STATE", messageId: e, nonce: t, state: n, componentId: i });
}
function l(e, t) {
    let { data: n, messageId: i, preflight: a, onCreate: s, onSuccess: l, onFailure: o } = t;
    r.h.dispatch({
        type: "INTERACTION_QUEUE",
        data: n,
        nonce: e,
        messageId: i,
        preflight: a,
        onCreate: s,
        onSuccess: l,
        onFailure: o,
    });
}
function o(e, t, n, i) {
    r.h.dispatch({ type: "INTERACTION_FAILURE", nonce: e, errorMessage: n, errorCode: t, status: i });
}
async function d(e, t) {
    let n = await i.Bo.get({
        url: a.Rsh.MESSAGE_INTERACTION_DATA(e, t),
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
    });
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
