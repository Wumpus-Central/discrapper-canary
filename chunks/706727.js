var i = n(620632),
    r = n(73153),
    a = n(652215);
n.d(
    t,
    {},
    {
        C1: function (e, t, n, i) {
            r.h.dispatch({ type: "INTERACTION_FAILURE", nonce: e, errorMessage: n, errorCode: t, status: i });
        },
        S7: async function (e, t) {
            let n = (
                await i.Bo.get({
                    url: a.Rsh.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0,
                    rejectWithError: (0, i.fT)(),
                })
            ).body;
            return (
                r.h.dispatch({
                    type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                    channelId: e,
                    messageId: t,
                    interactionData: n,
                }),
                n
            );
        },
        Sw: function (e, t, n, i) {
            r.h.dispatch({
                type: "QUEUE_INTERACTION_COMPONENT_STATE",
                messageId: e,
                nonce: t,
                state: n,
                componentId: i,
            });
        },
        tU: function (e, t) {
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
        },
    },
);
