i.d(t, { O: () => r, Y: () => a });
var n = i(228366),
    s = i(963852),
    l = i(287809);
let r = (e, t) => {
        n.h.dispatch({ type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType: e });
        let i = t ?? l.default.getCurrentUser();
        null != i &&
            (n.h.dispatch({ type: "UPDATE_CLIENT_PREMIUM_TYPE", user: i }),
            n.h.dispatch({ type: "CURRENT_USER_UPDATE", user: (0, s.Vi)(i) }));
    },
    a = (e) => {
        n.h.dispatch({ type: "SET_CREATED_AT_OVERRIDE", createdAt: e });
    };
