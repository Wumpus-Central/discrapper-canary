"use strict";
n.d(t, { At: () => E, F6: () => h, Mx: () => f });
var i = n(247775),
    r = n(636537),
    s = n(228366),
    a = n(830215),
    o = n(626584),
    l = n(280450),
    u = n(174459),
    c = n(274303),
    d = n(652215);
let _ = new o.A("MultiAccountActionCreators");
function h() {
    let e = l.default.getId();
    c.A.getUsers().forEach(async (t) => {
        let n,
            { id: a } = t,
            o = i.getToken(a);
        if (null == o || "" === o)
            return void s.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: a });
        s.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: a });
        try {
            n = await r.Bo.get({ url: d.Rsh.ME, headers: { authorization: o }, retries: 3, rejectWithError: !1 });
        } catch (t) {
            let e = t?.status === 401 || t?.status === 403;
            s.h.dispatch({
                type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: a,
            });
            return;
        }
        let l = n.body?.id ?? null;
        if (null != l && l !== a) {
            let e = { expected_user_id: a, actual_user_id: l };
            _.log("Found per-user token authentication mismatch", e),
                u.default.track(d.HAw.MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH, e),
                s.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: a });
            return;
        }
        e !== a && s.h.dispatch({ type: "USER_UPDATE", user: n.body }),
            s.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: a });
    });
}
function f(e, t, n) {
    _.log(`Switching account to ${e}`, { switchSynchronously: t });
    let r = i.getToken(e);
    return null == r
        ? (_.log("Switching accounts failed because there was no token"),
          s.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: e }),
          Promise.resolve())
        : (s.h.dispatch({ type: "MULTI_ACCOUNT_SWITCH_START", targetUserId: e, location: n ?? null }),
          a.A.switchAccountToken(r, t));
}
function E(e) {
    s.h.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: e });
}
