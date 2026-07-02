r.d(e, { At: () => U, F6: () => l, Mx: () => _ });
var s = r(247775),
    u = r(636537),
    i = r(228366),
    n = r(830215),
    a = r(626584),
    c = r(495544),
    A = r(174459),
    o = r(274303),
    T = r(652215);
let d = new a.A("MultiAccountActionCreators");
function l() {
    let t = c.default.getId();
    o.A.getUsers().forEach(async (e) => {
        let r,
            { id: n } = e,
            a = s.getToken(n);
        if (null == a || "" === a)
            return void i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: n });
        i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: n });
        try {
            r = await u.Bo.get({ url: T.Rsh.ME, headers: { authorization: a }, retries: 3, rejectWithError: !1 });
        } catch (e) {
            let t = e?.status === 401 || e?.status === 403;
            i.h.dispatch({
                type: t ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: n,
            });
            return;
        }
        let c = r.body?.id ?? null;
        if (null != c && c !== n) {
            let t = { expected_user_id: n, actual_user_id: c };
            d.log("Found per-user token authentication mismatch", t),
                A.default.track(T.HAw.MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH, t),
                i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: n });
            return;
        }
        t !== n && i.h.dispatch({ type: "USER_UPDATE", user: r.body }),
            i.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: n });
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
          n.A.switchAccountToken(u, e));
}
function U(t) {
    i.h.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: t });
}
