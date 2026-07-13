"use strict";
n.d(t, { At: () => h, F6: () => E, Mx: () => A });
var i = n(247775),
    r = n(636537),
    a = n(228366),
    s = n(830215),
    l = n(626584),
    o = n(280450),
    d = n(174459),
    c = n(274303),
    u = n(652215);
let _ = new l.A("MultiAccountActionCreators");
function E() {
    let e = o.default.getId();
    c.A.getUsers().forEach(async (t) => {
        let n,
            { id: s } = t,
            l = i.getToken(s);
        if (null == l || "" === l)
            return void a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: s });
        a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: s });
        try {
            n = await r.Bo.get({ url: u.Rsh.ME, headers: { authorization: l }, retries: 3, rejectWithError: !1 });
        } catch (t) {
            let e = t?.status === 401 || t?.status === 403;
            a.h.dispatch({
                type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: s,
            });
            return;
        }
        let o = n.body?.id ?? null;
        if (null != o && o !== s) {
            let e = { expected_user_id: s, actual_user_id: o };
            _.log("Found per-user token authentication mismatch", e),
                d.default.track(u.HAw.MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH, e),
                a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: s });
            return;
        }
        e !== s && a.h.dispatch({ type: "USER_UPDATE", user: n.body }),
            a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: s });
    });
}
function A(e, t, n) {
    _.log(`Switching account to ${e}`, { switchSynchronously: t });
    let r = i.getToken(e);
    return null == r
        ? (_.log("Switching accounts failed because there was no token"),
          a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: e }),
          Promise.resolve())
        : (a.h.dispatch({ type: "MULTI_ACCOUNT_SWITCH_START", targetUserId: e, location: n ?? null }),
          s.A.switchAccountToken(r, t));
}
function h(e) {
    a.h.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: e });
}
