"use strict";
let r, i, s;
n.d(t, { A: () => E });
var a = n(311907),
    o = n(73153),
    l = n(54827),
    u = n(15285),
    c = n(189081),
    d = n(674378),
    _ = n(723702),
    f = n(986120),
    p = n(652215);
class h extends a.Ay.Store {
    static displayName = "CloudSyncStore";
    initialize() {
        this.waitFor(c.A, u.Ay), _.isPlatformEmbedded && f.T(), (r = {}), (i = new Set()), (s = []);
    }
    getState(e, t) {
        return r[(0, d.gW)(e, t)];
    }
    isSyncing(e, t) {
        let n = (0, d.gW)(e, t);
        return i.has(n);
    }
}
let E = new h(o.h, {
    GAME_CLOUD_SYNC_START: function (e) {
        let { applicationId: t, branchId: n } = e,
            r = (0, d.gW)(t, n);
        i.add(r);
    },
    GAME_CLOUD_SYNC_UPDATE: function (e) {
        let { state: t } = e;
        for (let e of Object.keys(t)) r[e] = t[e];
    },
    GAME_CLOUD_SYNC_COMPLETE: function (e) {
        let { applicationId: t, branchId: n } = e,
            s = (0, d.gW)(t, n);
        return i.delete(s), (r[s] = { type: p.VX0.DONE, timestamp: Date.now() }), !0;
    },
    GAME_CLOUD_SYNC_CONFLICT: function (e) {
        let { applicationId: t, branchId: n, next: s, remote: a } = e,
            o = (0, d.gW)(t, n);
        (r[o] = { type: p.VX0.CONFLICT, next: s, remote: a }), i.delete(o);
    },
    GAME_CLOUD_SYNC_ERROR: function (e) {
        let { applicationId: t, branchId: n } = e,
            s = (0, d.gW)(t, n);
        (r[s] = { type: p.VX0.ERROR }), i.delete(s);
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
