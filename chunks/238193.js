a.d(t, { cD: () => x, gs: () => p, sl: () => h });
var n = a(110259),
    l = a(73153),
    i = a(830215),
    s = a(662502),
    r = a(427157),
    o = a(499785),
    d = a(559),
    c = a(624622),
    u = a(652215),
    m = a(835002);
function h(e, t) {
    let a = c.A.getUser(t);
    if (null == a) throw Error("User not found");
    let n = c.A.getPool(e)?.password;
    if (null == n) throw Error("Pool password not found");
    if (null == a.email) throw Error("User email not found");
    return i.A.login({ login: a.email, password: n, isMultiAccount: !0, source: "generated_test_user" }).catch(
        () => (s.A.showFailedToast(m.OB.GENERIC_ERROR), null),
    );
}
async function p(e, t) {
    return await o.A.get({
        url: u.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: n.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void s.A.showFailedToast(m.OB.GENERIC_ERROR);
            let { generated_pool: i, users: o } = n;
            l.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: d.N.fromServer(i).setPassword(t),
                users: o.map((e) => new r.A(e)),
            });
        })
        .catch(() => (s.A.showFailedToast(m.OB.GENERIC_ERROR), null));
}
function x(e) {
    l.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: e });
}
