"use strict";
n.d(t, { At: () => m, F6: () => _, Mx: () => h });
var i = n(247775),
    s = n(562465),
    r = n(73153),
    l = n(830215),
    a = n(626584),
    o = n(961350),
    c = n(274303),
    d = n(652215);
let u = new a.A("MultiAccountActionCreators");
function _() {
    let e = o.default.getId();
    c.A.getUsers().forEach(async (t) => {
        let n,
            { id: l } = t,
            a = i.getToken(l);
        if (null == a || "" === a)
            return void r.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: l });
        r.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: l });
        try {
            n = await s.Bo.get({ url: d.Rsh.ME, headers: { authorization: a }, retries: 3, rejectWithError: !1 });
        } catch (t) {
            let e = t?.status === 401 || t?.status === 403;
            r.h.dispatch({
                type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: l,
            });
            return;
        }
        r.h.dispatch({ type: e === l ? "CURRENT_USER_UPDATE" : "USER_UPDATE", user: n.body }),
            r.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: l });
    });
}
function h(e, t) {
    u.log(`Switching account to ${e}`, { switchSynchronously: t });
    let n = i.getToken(e);
    return null == n
        ? (u.log("Switching accounts failed because there was no token"),
          r.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: e }),
          Promise.resolve())
        : l.A.switchAccountToken(n, t);
}
function m(e) {
    r.h.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: e });
}
