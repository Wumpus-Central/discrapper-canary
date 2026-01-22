n.d(t, {
    O: () => a,
    Y: () => s,
});
var r = n(73153),
    i = n(287809);
let a = (e, t) => {
        r.h.dispatch({
            type: "SET_PREMIUM_TYPE_OVERRIDE",
            premiumType: e,
        });
        let n = null != t ? t : i.default.getCurrentUser();
        null != n &&
            r.h.dispatch({
                type: "UPDATE_CLIENT_PREMIUM_TYPE",
                user: n,
            });
    },
    s = (e) => {
        r.h.dispatch({
            type: "SET_CREATED_AT_OVERRIDE",
            createdAt: e,
        });
    };
