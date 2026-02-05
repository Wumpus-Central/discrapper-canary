n.d(t, { O: () => r, Y: () => a });
var i = n(73153),
    s = n(287809);
let r = (e, t) => {
        i.h.dispatch({ type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType: e });
        let n = t ?? s.default.getCurrentUser();
        null != n && i.h.dispatch({ type: "UPDATE_CLIENT_PREMIUM_TYPE", user: n });
    },
    a = (e) => {
        i.h.dispatch({ type: "SET_CREATED_AT_OVERRIDE", createdAt: e });
    };
