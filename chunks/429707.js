"use strict";
n.d(t, { At: () => h, F6: () => _, Mx: () => f });
var i = n(247775),
    r = n(636537),
    s = n(228366),
    a = n(830215),
    o = n(626584),
    l = n(495544),
    u = n(274303),
    c = n(652215);
let d = new o.A("MultiAccountActionCreators");
function _() {
    let e = l.default.getId();
    u.A.getUsers().forEach(async (t) => {
        let n,
            { id: a } = t,
            o = i.getToken(a);
        if (null == o || "" === o)
            return void s.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: a });
        s.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: a });
        try {
            n = await r.Bo.get({ url: c.Rsh.ME, headers: { authorization: o }, retries: 3, rejectWithError: !1 });
        } catch (t) {
            let e = t?.status === 401 || t?.status === 403;
            s.h.dispatch({
                type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: a,
            });
            return;
        }
        e !== a && s.h.dispatch({ type: "USER_UPDATE", user: n.body }),
            s.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: a });
    });
}
function f(e, t) {
    d.log(`Switching account to ${e}`, { switchSynchronously: t });
    let n = i.getToken(e);
    return null == n
        ? (d.log("Switching accounts failed because there was no token"),
          s.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: e }),
          Promise.resolve())
        : a.A.switchAccountToken(n, t);
}
function h(e) {
    s.h.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: e });
}
