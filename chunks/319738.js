n.d(t, {
    KZ: () => x,
    TA: () => p,
    UK: () => h,
}),
    n(415506);
var a = n(990547),
    l = n(570140),
    r = n(893776),
    i = n(681678),
    s = n(598077),
    o = n(573261),
    c = n(439128),
    d = n(163558),
    u = n(981631),
    m = n(484710);
function p(e, t) {
    var n;
    let a = d.Z.getUser(t);
    if (null == a) throw Error("User not found");
    let l = null == (n = d.Z.getPool(e)) ? void 0 : n.password;
    if (null == l) throw Error("Pool password not found");
    if (null == a.email) throw Error("User email not found");
    return r.Z.login({
        login: a.email,
        password: l,
        isMultiAccount: !0,
        source: "generated_test_user",
    }).catch(() => (i.Z.showFailedToast(m.wQ.GENERIC_ERROR), null));
}
async function h(e, t) {
    return await o.Z.get({
        url: u.ANM.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: a.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: n, body: a } = e;
            if (!n) return void i.Z.showFailedToast(m.wQ.GENERIC_ERROR);
            let { generated_pool: r, users: o } = a;
            l.Z.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: c.w.fromServer(r).setPassword(t),
                users: o.map((e) => new s.Z(e)),
            });
        })
        .catch(() => (i.Z.showFailedToast(m.wQ.GENERIC_ERROR), null));
}
function x(e) {
    l.Z.dispatch({
        type: "GENERATED_POOL_REMOVE_FROM_LIST",
        poolId: e,
    });
}
