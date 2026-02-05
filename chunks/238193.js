n.d(t, { cD: () => p, gs: () => x, sl: () => h });
var a = n(110259),
    s = n(73153),
    i = n(830215),
    l = n(662502),
    r = n(427157),
    o = n(499785),
    d = n(559),
    c = n(624622),
    u = n(652215),
    m = n(835002);
function h(e, t) {
    let n = c.A.getUser(t);
    if (null == n) throw Error("User not found");
    let a = c.A.getPool(e)?.password;
    if (null == a) throw Error("Pool password not found");
    if (null == n.email) throw Error("User email not found");
    return i.A.login({ login: n.email, password: a, isMultiAccount: !0, source: "generated_test_user" }).catch(
        () => (l.A.showFailedToast(m.OB.GENERIC_ERROR), null),
    );
}
async function x(e, t) {
    return await o.A.get({
        url: u.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: a.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: n, body: a } = e;
            if (!n) return void l.A.showFailedToast(m.OB.GENERIC_ERROR);
            let { generated_pool: i, users: o } = a;
            s.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: d.N.fromServer(i).setPassword(t),
                users: o.map((e) => new r.A(e)),
            });
        })
        .catch(() => (l.A.showFailedToast(m.OB.GENERIC_ERROR), null));
}
function p(e) {
    s.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: e });
}
