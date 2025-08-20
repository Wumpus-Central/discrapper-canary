n.d(t, {
    HJ: () => f,
    Zd: () => p,
    yD: () => _,
});
var r = n(213919),
    i = n(544891),
    a = n(570140),
    o = n(893776),
    s = n(710845),
    l = n(314897),
    c = n(726745),
    u = n(981631);
let d = new s.Z("MultiAccountActionCreators");
function f() {
    let e = l.default.getId();
    c.Z.getUsers().forEach(async (t) => {
        let n,
            { id: o } = t,
            s = r.getToken(o);
        if (null == s || "" === s)
            return void a.Z.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                userId: o,
            });
        a.Z.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
            userId: o,
        });
        try {
            n = await i.tn.get({
                url: u.ANM.ME,
                headers: { authorization: s },
                retries: 3,
                rejectWithError: !1,
            });
        } catch (t) {
            let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
            a.Z.dispatch({
                type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: o,
            });
            return;
        }
        a.Z.dispatch({
            type: e === o ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
            user: n.body,
        }),
            a.Z.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: o,
            });
    });
}
function _(e, t) {
    d.log("Switching account to ".concat(e), { switchSynchronously: t });
    let n = r.getToken(e);
    return null == n
        ? (d.log("Switching accounts failed because there was no token"),
          a.Z.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: e,
          }),
          Promise.resolve())
        : o.Z.switchAccountToken(n, t);
}
function p(e) {
    a.Z.dispatch({
        type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
        userId: e,
    });
}
