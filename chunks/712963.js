"use strict";
n.d(t, { r: () => E, w: () => A });
var i = n(435558),
    r = n.n(i),
    a = n(636537),
    s = n(228366),
    l = n(315069),
    o = n(375708);
class d extends l.A {
    id;
    liveBuildId;
    name;
    static createFromServer(e) {
        return new d({ id: e.id, liveBuildId: e.live_build_id, name: e.name });
    }
    constructor(e) {
        super(), (this.id = e.id), (this.liveBuildId = e.liveBuildId), (this.name = e.name);
    }
    getName(e) {
        return null != this.name ? this.name : this.id === e ? o.intl.string(o.t.AHqj6c) : o.intl.string(o.t["62f4nE"]);
    }
}
var c = n(189081),
    u = n(144914),
    _ = n(652215);
async function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.A.entitledBranchIds;
    if (!(0, u.S)() || 0 === e.length) return [];
    let t = r().chunk(e, 50);
    try {
        let e = t.map(async (e) =>
                (
                    await a.Bo.post({
                        url: _.Rsh.APPLICATION_BRANCHES,
                        body: { branch_ids: e },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                ).body.map(d.createFromServer),
            ),
            n = await Promise.all(e),
            i = r().flatten(n);
        return s.h.dispatch({ type: "APPLICATION_BRANCHES_FETCH_SUCCESS", branches: i }), i;
    } catch (t) {
        return s.h.dispatch({ type: "APPLICATION_BRANCHES_FETCH_FAIL", branchIds: e }), [];
    }
}
async function A(e) {
    try {
        let t = await a.Bo.get({ url: _.Rsh.OWNED_APPLICATION_BRANCHES(e), oldFormErrors: !0, rejectWithError: !0 }),
            n = Array.isArray(t.body) ? t.body.map(d.createFromServer) : [];
        return s.h.dispatch({ type: "OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS", applicationId: e, branches: n }), n;
    } catch (t) {
        return s.h.dispatch({ type: "OWNED_APPLICATION_BRANCHES_FETCH_FAIL", applicationId: e }), [];
    }
}
