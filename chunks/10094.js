n.d(t, {
    O: () => i,
    Y: () => a,
});
var r = n(73153);
let i = (e, t) => {
        r.h.dispatch({
            type: "SET_PREMIUM_TYPE_OVERRIDE",
            premiumType: e,
        }),
            r.h.dispatch({
                type: "UPDATE_CLIENT_PREMIUM_TYPE",
                user: t,
            });
    },
    a = (e) => {
        r.h.dispatch({
            type: "SET_CREATED_AT_OVERRIDE",
            createdAt: e,
        });
    };
