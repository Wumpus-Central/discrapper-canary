"use strict";
n.d(t, { C1: () => l, S7: () => u, Sw: () => a, tU: () => o });
var i = n(636537),
    r = n(228366),
    s = n(652215);
function a(e, t, n, i) {
    r.h.dispatch({ type: "QUEUE_INTERACTION_COMPONENT_STATE", messageId: e, nonce: t, state: n, componentId: i });
}
function o(e, t) {
    let { data: n, messageId: i, preflight: s, onCreate: a, onSuccess: o, onFailure: l } = t;
    r.h.dispatch({
        type: "INTERACTION_QUEUE",
        data: n,
        nonce: e,
        messageId: i,
        preflight: s,
        onCreate: a,
        onSuccess: o,
        onFailure: l,
    });
}
function l(e, t, n, i) {
    r.h.dispatch({ type: "INTERACTION_FAILURE", nonce: e, errorMessage: n, errorCode: t, status: i });
}
async function u(e, t) {
    let n = await i.Bo.get({ url: s.Rsh.MESSAGE_INTERACTION_DATA(e, t), oldFormErrors: !0, rejectWithError: !1 });
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
