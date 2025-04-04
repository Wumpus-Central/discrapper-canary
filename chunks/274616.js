n.d(t, {
    Z: () => _,
    o: () => f
}),
    n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(544891),
    a = n(570140),
    s = n(503013),
    l = n(283595),
    c = n(804739),
    u = n(981631);
let d = 50;
async function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Z.entitledBranchIds;
    if (!(0, c.Q)() || 0 === e.length) return [];
    let t = i().chunk(e, d);
    try {
        let e = t.map(async (e) =>
                (
                    await o.tn.post({
                        url: u.ANM.APPLICATION_BRANCHES,
                        body: { branch_ids: e },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                ).body.map(s.Z.createFromServer)
            ),
            n = await Promise.all(e),
            r = i().flatten(n);
        return (
            a.Z.dispatch({
                type: 'APPLICATION_BRANCHES_FETCH_SUCCESS',
                branches: r
            }),
            r
        );
    } catch (t) {
        return (
            a.Z.dispatch({
                type: 'APPLICATION_BRANCHES_FETCH_FAIL',
                branchIds: e
            }),
            []
        );
    }
}
async function _(e) {
    try {
        let t = await o.tn.get({
                url: u.ANM.OWNED_APPLICATION_BRANCHES(e),
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            n = Array.isArray(t.body) ? t.body.map(s.Z.createFromServer) : [];
        return (
            a.Z.dispatch({
                type: 'OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS',
                applicationId: e,
                branches: n
            }),
            n
        );
    } catch (t) {
        return (
            a.Z.dispatch({
                type: 'OWNED_APPLICATION_BRANCHES_FETCH_FAIL',
                applicationId: e
            }),
            []
        );
    }
}
