"use strict";
n.d(t, { C1: () => l, S7: () => u, Sw: () => a, tU: () => o });
var r = n(562465),
    i = n(73153),
    s = n(652215);
function a(e, t, n, r) {
    i.h.dispatch({ type: "QUEUE_INTERACTION_COMPONENT_STATE", messageId: e, nonce: t, state: n, componentId: r });
}
function o(e, t) {
    let { data: n, messageId: r, preflight: s, onCreate: a, onSuccess: o, onFailure: l } = t;
    i.h.dispatch({
        type: "INTERACTION_QUEUE",
        data: n,
        nonce: e,
        messageId: r,
        preflight: s,
        onCreate: a,
        onSuccess: o,
        onFailure: l,
    });
}
function l(e, t, n, r) {
    i.h.dispatch({ type: "INTERACTION_FAILURE", nonce: e, errorMessage: n, errorCode: t, status: r });
}
async function u(e, t) {
    let n = await r.Bo.get({ url: s.Rsh.MESSAGE_INTERACTION_DATA(e, t), oldFormErrors: !0, rejectWithError: !1 });
    if (!n.ok) return null;
    {
        let r = n.body;
        return (
            i.h.dispatch({
                type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                channelId: e,
                messageId: t,
                interactionData: r,
            }),
            r
        );
    }
}
