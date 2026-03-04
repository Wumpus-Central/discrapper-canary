n.d(t, { O: () => l, Y: () => r });
var i = n(73153),
    s = n(963852),
    a = n(287809);
let l = (e, t) => {
        i.h.dispatch({ type: "SET_PREMIUM_TYPE_OVERRIDE", premiumType: e });
        let n = t ?? a.default.getCurrentUser();
        null != n &&
            (i.h.dispatch({ type: "UPDATE_CLIENT_PREMIUM_TYPE", user: n }),
            i.h.dispatch({ type: "CURRENT_USER_UPDATE", user: (0, s.Vi)(n) }));
    },
    r = (e) => {
        i.h.dispatch({ type: "SET_CREATED_AT_OVERRIDE", createdAt: e });
    };
