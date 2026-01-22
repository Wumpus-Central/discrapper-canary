n.d(t, {
    At: () => h,
    F6: () => m,
    Mx: () => p,
});
var a = n(247775),
    l = n(562465),
    i = n(73153),
    r = n(830215),
    s = n(626584),
    o = n(961350),
    c = n(274303),
    d = n(652215);
let u = new s.A("MultiAccountActionCreators");
function m() {
    let e = o.default.getId();
    c.A.getUsers().forEach(async (t) => {
        let n,
            { id: r } = t,
            s = a.getToken(r);
        if (null == s || "" === s)
            return void i.h.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                userId: r,
            });
        i.h.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
            userId: r,
        });
        try {
            n = await l.Bo.get({
                url: d.Rsh.ME,
                headers: { authorization: s },
                retries: 3,
                rejectWithError: !1,
            });
        } catch (t) {
            let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
            i.h.dispatch({
                type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: r,
            });
            return;
        }
        i.h.dispatch({
            type: e === r ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
            user: n.body,
        }),
            i.h.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: r,
            });
    });
}
function p(e, t) {
    u.log("Switching account to ".concat(e), { switchSynchronously: t });
    let n = a.getToken(e);
    return null == n
        ? (u.log("Switching accounts failed because there was no token"),
          i.h.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: e,
          }),
          Promise.resolve())
        : r.A.switchAccountToken(n, t);
}
function h(e) {
    i.h.dispatch({
        type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
        userId: e,
    });
}
