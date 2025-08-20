n.d(t, {
    C: () => i,
    u: () => a,
});
var r = n(570140);
let i = (e, t) => {
        r.Z.dispatch({
            type: "SET_PREMIUM_TYPE_OVERRIDE",
            premiumType: e,
        }),
            r.Z.dispatch({
                type: "UPDATE_CLIENT_PREMIUM_TYPE",
                user: t,
            });
    },
    a = (e) => {
        r.Z.dispatch({
            type: "SET_CREATED_AT_OVERRIDE",
            createdAt: e,
        });
    };
