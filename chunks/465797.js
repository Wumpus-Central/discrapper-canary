"use strict";
let r, i, a;
n.d(t, { A: () => y });
var s = n(311907),
    o = n(73153),
    l = n(54827),
    u = n(15285),
    c = n(189081),
    d = n(674378),
    _ = n(723702),
    f = n(986120),
    p = n(652215);
function h() {
    let e = u.Ay.getRunningDiscordApplicationIds();
    for (let t of a.filter((t) => !e.includes(t))) {
        let e = c.A.getActiveLibraryApplication(t);
        null != e &&
            o.h.wait(() => {
                try {
                    l.O(e.id, e.branchId);
                } catch (e) {}
            });
    }
    return (a = e), !1;
}
function m(e) {
    let { applicationId: t, branchId: n } = e,
        r = (0, d.gW)(t, n);
    i.add(r);
}
function g(e) {
    let { applicationId: t, branchId: n } = e,
        a = (0, d.gW)(t, n);
    return i.delete(a), (r[a] = { type: p.VX0.DONE, timestamp: Date.now() }), !0;
}
function E(e) {
    let { state: t } = e;
    for (let e of Object.keys(t)) r[e] = t[e];
}
function A(e) {
    let { applicationId: t, branchId: n, next: a, remote: s } = e,
        o = (0, d.gW)(t, n);
    (r[o] = { type: p.VX0.CONFLICT, next: a, remote: s }), i.delete(o);
}
function I(e) {
    let { applicationId: t, branchId: n } = e,
        a = (0, d.gW)(t, n);
    (r[a] = { type: p.VX0.ERROR }), i.delete(a);
}
class T extends s.Ay.Store {
    static displayName = "CloudSyncStore";
    initialize() {
        this.waitFor(c.A, u.Ay), _.isPlatformEmbedded && f.T(), (r = {}), (i = new Set()), (a = []);
    }
    getState(e, t) {
        return r[(0, d.gW)(e, t)];
    }
    isSyncing(e, t) {
        let n = (0, d.gW)(e, t);
        return i.has(n);
    }
}
let y = new T(o.h, {
    GAME_CLOUD_SYNC_START: m,
    GAME_CLOUD_SYNC_UPDATE: E,
    GAME_CLOUD_SYNC_COMPLETE: g,
    GAME_CLOUD_SYNC_CONFLICT: A,
    GAME_CLOUD_SYNC_ERROR: I,
    RUNNING_GAMES_CHANGE: h,
});
