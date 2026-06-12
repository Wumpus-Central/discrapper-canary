"use strict";
n.d(t, { r: () => h, w: () => f });
var i = n(735438),
    r = n.n(i),
    s = n(636537),
    a = n(228366),
    o = n(315069),
    l = n(375708);
class u extends o.A {
    id;
    liveBuildId;
    name;
    static createFromServer(e) {
        return new u({ id: e.id, liveBuildId: e.live_build_id, name: e.name });
    }
    constructor(e) {
        super(), (this.id = e.id), (this.liveBuildId = e.liveBuildId), (this.name = e.name);
    }
    getName(e) {
        return null != this.name ? this.name : this.id === e ? l.intl.string(l.t.AHqj6c) : l.intl.string(l.t["62f4nE"]);
    }
}
var c = n(189081),
    d = n(144914),
    _ = n(652215);
async function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.A.entitledBranchIds;
    if (!(0, d.S)() || 0 === e.length) return [];
    let t = r().chunk(e, 50);
    try {
        let e = t.map(async (e) =>
                (
                    await s.Bo.post({
                        url: _.Rsh.APPLICATION_BRANCHES,
                        body: { branch_ids: e },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                ).body.map(u.createFromServer),
            ),
            n = await Promise.all(e),
            i = r().flatten(n);
        return a.h.dispatch({ type: "APPLICATION_BRANCHES_FETCH_SUCCESS", branches: i }), i;
    } catch (t) {
        return a.h.dispatch({ type: "APPLICATION_BRANCHES_FETCH_FAIL", branchIds: e }), [];
    }
}
async function f(e) {
    try {
        let t = await s.Bo.get({ url: _.Rsh.OWNED_APPLICATION_BRANCHES(e), oldFormErrors: !0, rejectWithError: !0 }),
            n = Array.isArray(t.body) ? t.body.map(u.createFromServer) : [];
        return a.h.dispatch({ type: "OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS", applicationId: e, branches: n }), n;
    } catch (t) {
        return a.h.dispatch({ type: "OWNED_APPLICATION_BRANCHES_FETCH_FAIL", applicationId: e }), [];
    }
}
