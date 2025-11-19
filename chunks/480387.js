n.d(t, {
    HJ: () => m,
    Zd: () => h,
    yD: () => p,
});
var a = n(213919),
    l = n(544891),
    i = n(570140),
    r = n(893776),
    s = n(710845),
    o = n(314897),
    c = n(726745),
    d = n(981631);
let u = new s.Z("MultiAccountActionCreators");
function m() {
    let e = o.default.getId();
    c.Z.getUsers().forEach(async (t) => {
        let n,
            { id: r } = t,
            s = a.getToken(r);
        if (null == s || "" === s)
            return void i.Z.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                userId: r,
            });
        i.Z.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
            userId: r,
        });
        try {
            n = await l.tn.get({
                url: d.ANM.ME,
                headers: { authorization: s },
                retries: 3,
                rejectWithError: !1,
            });
        } catch (t) {
            let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
            i.Z.dispatch({
                type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: r,
            });
            return;
        }
        i.Z.dispatch({
            type: e === r ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
            user: n.body,
        }),
            i.Z.dispatch({
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
          i.Z.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: e,
          }),
          Promise.resolve())
        : r.Z.switchAccountToken(n, t);
}
function h(e) {
    i.Z.dispatch({
        type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
        userId: e,
    });
}
