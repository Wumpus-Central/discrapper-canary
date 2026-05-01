s.d(e, { At: () => U, F6: () => d, Mx: () => l });
var r = s(247775),
    u = s(636537),
    i = s(228366),
    n = s(830215),
    a = s(626584),
    c = s(495544),
    o = s(274303),
    A = s(652215);
let T = new a.A("MultiAccountActionCreators");
function d() {
    let t = c.default.getId();
    o.A.getUsers().forEach(async (e) => {
        let s,
            { id: n } = e,
            a = r.getToken(n);
        if (null == a || "" === a)
            return void i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: n });
        i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: n });
        try {
            s = await u.Bo.get({ url: A.Rsh.ME, headers: { authorization: a }, retries: 3, rejectWithError: !1 });
        } catch (e) {
            let t = e?.status === 401 || e?.status === 403;
            i.h.dispatch({
                type: t ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: n,
            });
            return;
        }
        i.h.dispatch({ type: t === n ? "CURRENT_USER_UPDATE" : "USER_UPDATE", user: s.body }),
            i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: n });
    });
}
function l(t, e) {
    T.log(`Switching account to ${t}`, { switchSynchronously: e });
    let s = r.getToken(t);
    return null == s
        ? (T.log("Switching accounts failed because there was no token"),
          i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: t }),
          Promise.resolve())
        : n.A.switchAccountToken(s, e);
}
function U(t) {
    i.h.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: t });
}
