"use strict";
let i, r, a;
n.d(t, { A: () => I });
var s = n(17928),
    l = n(228366),
    o = n(54827),
    d = n(952818),
    c = n(189081),
    u = n(674378),
    _ = n(723702),
    E = n(986120),
    A = n(652215);
class h extends s.Ay.Store {
    static displayName = "CloudSyncStore";
    initialize() {
        this.waitFor(c.A, d.Ay), _.isPlatformEmbedded && E.T(), (i = {}), (r = new Set()), (a = []);
    }
    getState(e, t) {
        return i[(0, u.gW)(e, t)];
    }
    isSyncing(e, t) {
        let n = (0, u.gW)(e, t);
        return r.has(n);
    }
}
let I = new h(l.h, {
    GAME_CLOUD_SYNC_START: function (e) {
        let { applicationId: t, branchId: n } = e,
            i = (0, u.gW)(t, n);
        r.add(i);
    },
    GAME_CLOUD_SYNC_UPDATE: function (e) {
        let { state: t } = e;
        for (let e of Object.keys(t)) i[e] = t[e];
    },
    GAME_CLOUD_SYNC_COMPLETE: function (e) {
        let { applicationId: t, branchId: n } = e,
            a = (0, u.gW)(t, n);
        return r.delete(a), (i[a] = { type: A.VX0.DONE, timestamp: Date.now() }), !0;
    },
    GAME_CLOUD_SYNC_CONFLICT: function (e) {
        let { applicationId: t, branchId: n, next: a, remote: s } = e,
            l = (0, u.gW)(t, n);
        (i[l] = { type: A.VX0.CONFLICT, next: a, remote: s }), r.delete(l);
    },
    GAME_CLOUD_SYNC_ERROR: function (e) {
        let { applicationId: t, branchId: n } = e,
            a = (0, u.gW)(t, n);
        (i[a] = { type: A.VX0.ERROR }), r.delete(a);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = d.Ay.getRunningDiscordApplicationIds();
        for (let t of a.filter((t) => !e.includes(t))) {
            let e = c.A.getActiveLibraryApplication(t);
            null != e &&
                l.h.wait(() => {
                    try {
                        o.O(e.id, e.branchId);
                    } catch (e) {}
                });
        }
        return (a = e), !1;
    },
});
