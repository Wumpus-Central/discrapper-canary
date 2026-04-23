n.d(t, { At: () => m, F6: () => p, Mx: () => h });
var i = n(247775),
    s = n(562465),
    l = n(73153),
    a = n(830215),
    r = n(626584),
    o = n(961350),
    d = n(274303),
    c = n(652215);
let u = new r.A("MultiAccountActionCreators");
function p() {
    let e = o.default.getId();
    d.A.getUsers().forEach(async (t) => {
        let n,
            { id: a } = t,
            r = i.getToken(a);
        if (null == r || "" === r)
            return void l.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: a });
        l.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: a });
        try {
            n = await s.Bo.get({ url: c.Rsh.ME, headers: { authorization: r }, retries: 3, rejectWithError: !1 });
        } catch (t) {
            let e = t?.status === 401 || t?.status === 403;
            l.h.dispatch({
                type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: a,
            });
            return;
        }
        l.h.dispatch({ type: e === a ? "CURRENT_USER_UPDATE" : "USER_UPDATE", user: n.body }),
            l.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: a });
    });
}
function h(e, t) {
    u.log(`Switching account to ${e}`, { switchSynchronously: t });
    let n = i.getToken(e);
    return null == n
        ? (u.log("Switching accounts failed because there was no token"),
          l.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: e }),
          Promise.resolve())
        : a.A.switchAccountToken(n, t);
}
function m(e) {
    l.h.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: e });
}
