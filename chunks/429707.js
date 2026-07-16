r.d(e, { At: () => U, F6: () => d, Mx: () => _ });
var n = r(247775),
    s = r(636537),
    u = r(228366),
    i = r(830215),
    a = r(626584),
    c = r(280450),
    A = r(174459),
    o = r(274303),
    l = r(652215);
let T = new a.A("MultiAccountActionCreators");
function d() {
    let t = c.default.getId();
    o.A.getUsers().forEach(async (e) => {
        let r,
            { id: i } = e,
            a = n.getToken(i);
        if (null == a || "" === a)
            return void u.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: i });
        u.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: i });
        try {
            r = await s.Bo.get({ url: l.Rsh.ME, headers: { authorization: a }, retries: 3, rejectWithError: !1 });
        } catch (e) {
            let t = e?.status === 401 || e?.status === 403;
            u.h.dispatch({
                type: t ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: i,
            });
            return;
        }
        let c = r.body?.id ?? null;
        if (null != c && c !== i) {
            let t = { expected_user_id: i, actual_user_id: c };
            T.log("Found per-user token authentication mismatch", t),
                A.default.track(l.HAw.MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH, t),
                u.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: i });
            return;
        }
        t !== i && u.h.dispatch({ type: "USER_UPDATE", user: r.body }),
            u.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: i });
    });
}
function _(t, e, r) {
    T.log(`Switching account to ${t}`, { switchSynchronously: e });
    let s = n.getToken(t);
    return null == s
        ? (T.log("Switching accounts failed because there was no token"),
          u.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: t }),
          Promise.resolve())
        : (u.h.dispatch({ type: "MULTI_ACCOUNT_SWITCH_START", targetUserId: t, location: r ?? null }),
          i.A.switchAccountToken(s, e));
}
function U(t) {
    u.h.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: t });
}
