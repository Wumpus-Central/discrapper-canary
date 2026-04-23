n.d(t, { O: () => a, Y: () => r });
var i = n(228366),
    l = n(963852),
    s = n(287809);
let a = (e, t) => {
        i.h.dispatch({ type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType: e });
        let n = t ?? s.default.getCurrentUser();
        null != n &&
            (i.h.dispatch({ type: "UPDATE_CLIENT_PREMIUM_TYPE", user: n }),
            i.h.dispatch({ type: "CURRENT_USER_UPDATE", user: (0, l.Vi)(n) }));
    },
    r = (e) => {
        i.h.dispatch({ type: "SET_CREATED_AT_OVERRIDE", createdAt: e });
    };
