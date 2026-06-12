"use strict";
let i, r, s;
n.d(t, { A: () => E });
var a = n(17928),
    o = n(228366),
    l = n(54827),
    u = n(952818),
    c = n(189081),
    d = n(674378),
    _ = n(723702),
    h = n(986120),
    f = n(652215);
class p extends a.Ay.Store {
    static displayName = "CloudSyncStore";
    initialize() {
        this.waitFor(c.A, u.Ay), _.isPlatformEmbedded && h.T(), (i = {}), (r = new Set()), (s = []);
    }
    getState(e, t) {
        return i[(0, d.gW)(e, t)];
    }
    isSyncing(e, t) {
        let n = (0, d.gW)(e, t);
        return r.has(n);
    }
}
let E = new p(o.h, {
    GAME_CLOUD_SYNC_START: function (e) {
        let { applicationId: t, branchId: n } = e,
            i = (0, d.gW)(t, n);
        r.add(i);
    },
    GAME_CLOUD_SYNC_UPDATE: function (e) {
        let { state: t } = e;
        for (let e of Object.keys(t)) i[e] = t[e];
    },
    GAME_CLOUD_SYNC_COMPLETE: function (e) {
        let { applicationId: t, branchId: n } = e,
            s = (0, d.gW)(t, n);
        return r.delete(s), (i[s] = { type: f.VX0.DONE, timestamp: Date.now() }), !0;
    },
    GAME_CLOUD_SYNC_CONFLICT: function (e) {
        let { applicationId: t, branchId: n, next: s, remote: a } = e,
            o = (0, d.gW)(t, n);
        (i[o] = { type: f.VX0.CONFLICT, next: s, remote: a }), r.delete(o);
    },
    GAME_CLOUD_SYNC_ERROR: function (e) {
        let { applicationId: t, branchId: n } = e,
            s = (0, d.gW)(t, n);
        (i[s] = { type: f.VX0.ERROR }), r.delete(s);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = u.Ay.getRunningDiscordApplicationIds();
        for (let t of s.filter((t) => !e.includes(t))) {
            let e = c.A.getActiveLibraryApplication(t);
            null != e &&
                o.h.wait(() => {
                    try {
                        l.O(e.id, e.branchId);
                    } catch (e) {}
                });
        }
        return (s = e), !1;
    },
});
