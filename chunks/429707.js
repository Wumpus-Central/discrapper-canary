var s = r(247775),
    n = r(620632),
    a = r(73153),
    i = r(830215),
    u = r(626584),
    c = r(46653),
    A = r(129230),
    o = r(274303),
    d = r(652215);
let T = new u.A("MultiAccountActionCreators");
r.d(
    e,
    {},
    {
        At: function (t) {
            a.h.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: t });
        },
        F6: function () {
            let t = c.default.getId();
            o.A.getUsers().forEach(async (e) => {
                let r,
                    { id: i } = e,
                    u = s.getToken(i);
                if (null == u || "" === u)
                    return void a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: i });
                a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: i });
                try {
                    r = await n.Bo.get({
                        url: d.Rsh.ME,
                        headers: { authorization: u },
                        retries: 3,
                        rejectWithError: !1,
                    });
                } catch (e) {
                    let t = e?.status === 401 || e?.status === 403;
                    a.h.dispatch({
                        type: t ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                        userId: i,
                    });
                    return;
                }
                let c = r.body?.id ?? null;
                if (null != c && c !== i) {
                    let t = { expected_user_id: i, actual_user_id: c };
                    (T.log("Found per-user token authentication mismatch", t),
                        A.default.track(d.HAw.MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH, t),
                        a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: i }));
                    return;
                }
                (t !== i && a.h.dispatch({ type: "USER_UPDATE", user: r.body }),
                    a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: i }));
            });
        },
        Mx: function (t, e, r) {
            T.log(`Switching account to ${t}`, { switchSynchronously: e });
            let n = s.getToken(t);
            return null == n
                ? (T.log("Switching accounts failed because there was no token"),
                  a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: t }),
                  Promise.resolve())
                : (a.h.dispatch({ type: "MULTI_ACCOUNT_SWITCH_START", targetUserId: t, location: r ?? null }),
                  i.A.switchAccountToken(n, e));
        },
    },
);
