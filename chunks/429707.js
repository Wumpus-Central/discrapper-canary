var n = r(247775),
    s = r(620632),
    a = r(73153),
    i = r(830215),
    u = r(626584),
    c = r(46653),
    A = r(309010),
    o = r(129230),
    d = r(274303),
    l = r(652215);
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
            d.A.getUsers().forEach(async (e) => {
                let r,
                    { id: i } = e,
                    u = n.getToken(i);
                if (null == u || "" === u)
                    return void a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: i });
                a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: i });
                try {
                    r = await s.Bo.get({
                        url: l.Rsh.ME,
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
                        o.default.track(l.HAw.MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH, t),
                        a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: i }));
                    return;
                }
                (t !== i && a.h.dispatch({ type: "USER_UPDATE", user: r.body }),
                    a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: i }));
            });
        },
        Mx: function (t, e, r) {
            T.log(`Switching account to ${t}`, { switchSynchronously: e });
            let s = n.getToken(t);
            return null == s
                ? (T.log("Switching accounts failed because there was no token"),
                  a.h.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: t }),
                  Promise.resolve())
                : (a.h.dispatch({
                      type: "MULTI_ACCOUNT_SWITCH_START",
                      targetUserId: t,
                      location: r ?? null,
                      lastChannelId: A.Ay.getCurrentlySelectedChannelId(),
                  }),
                  i.A.switchAccountToken(s, e));
        },
    },
);
