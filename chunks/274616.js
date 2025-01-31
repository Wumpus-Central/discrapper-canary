n.d(t, {
    Z: () => _,
    o: () => f
}),
    n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(544891),
    s = n(570140),
    o = n(503013),
    l = n(283595),
    u = n(804739),
    c = n(981631);
let d = 50;
async function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Z.entitledBranchIds;
    if (!(0, u.Q)() || 0 === e.length) return [];
    let t = r().chunk(e, d);
    try {
        let e = t.map(async (e) =>
                (
                    await a.tn.post({
                        url: c.ANM.APPLICATION_BRANCHES,
                        body: { branch_ids: e },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                ).body.map(o.Z.createFromServer)
            ),
            n = await Promise.all(e),
            i = r().flatten(n);
        return (
            s.Z.dispatch({
                type: 'APPLICATION_BRANCHES_FETCH_SUCCESS',
                branches: i
            }),
            i
        );
    } catch (t) {
        return (
            s.Z.dispatch({
                type: 'APPLICATION_BRANCHES_FETCH_FAIL',
                branchIds: e
            }),
            []
        );
    }
}
async function _(e) {
    try {
        let t = await a.tn.get({
                url: c.ANM.OWNED_APPLICATION_BRANCHES(e),
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            n = Array.isArray(t.body) ? t.body.map(o.Z.createFromServer) : [];
        return (
            s.Z.dispatch({
                type: 'OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS',
                applicationId: e,
                branches: n
            }),
            n
        );
    } catch (t) {
        return (
            s.Z.dispatch({
                type: 'OWNED_APPLICATION_BRANCHES_FETCH_FAIL',
                applicationId: e
            }),
            []
        );
    }
}
