r.d(e, { At: () => U, F6: () => l, Mx: () => _ });
var s = r(247775),
    u = r(636537),
    i = r(228366),
    a = r(830215),
    n = r(626584),
    c = r(495544),
    A = r(174459),
    T = r(274303),
    o = r(652215);
let d = new n.A("MultiAccountActionCreators");
function l() {
    let t = c.default.getId();
    T.A.getUsers().forEach(async (e) => {
        let r,
            { id: a } = e,
            n = s.getToken(a);
        if (null == n || "" === n)
            return void i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: a });
        i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: a });
        try {
            r = await u.Bo.get({ url: o.Rsh.ME, headers: { authorization: n }, retries: 3, rejectWithError: !1 });
        } catch (e) {
            let t = e?.status === 401 || e?.status === 403;
            i.h.dispatch({
                type: t ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: a,
            });
            return;
        }
        let c = r.body?.id ?? null;
        if (null != c && c !== a) {
            let t = { expected_user_id: a, actual_user_id: c };
            d.log("Found per-user token authentication mismatch", t),
                A.default.track(o.HAw.MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH, t),
                i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: a });
            return;
        }
        t !== a && i.h.dispatch({ type: "USER_UPDATE", user: r.body }),
            i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: a });
    });
}
function _(t, e, r) {
    d.log(`Switching account to ${t}`, { switchSynchronously: e });
    let u = s.getToken(t);
    return null == u
        ? (d.log("Switching accounts failed because there was no token"),
          i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: t }),
          Promise.resolve())
        : (i.h.dispatch({ type: "MULTI_ACCOUNT_SWITCH_START", targetUserId: t, location: r ?? null }),
          a.A.switchAccountToken(u, e));
}
function U(t) {
    i.h.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: t });
}
