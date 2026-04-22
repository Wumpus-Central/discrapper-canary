"use strict";
let r, i, s;
n.d(t, { A: () => p });
var a = n(311907),
    o = n(73153),
    l = n(54827),
    u = n(15285),
    d = n(189081),
    c = n(674378),
    _ = n(723702),
    f = n(986120),
    E = n(652215);
class h extends a.Ay.Store {
    static displayName = "CloudSyncStore";
    initialize() {
        this.waitFor(d.A, u.Ay), _.isPlatformEmbedded && f.T(), (r = {}), (i = new Set()), (s = []);
    }
    getState(e, t) {
        return r[(0, c.gW)(e, t)];
    }
    isSyncing(e, t) {
        let n = (0, c.gW)(e, t);
        return i.has(n);
    }
}
let p = new h(o.h, {
    GAME_CLOUD_SYNC_START: function (e) {
        let { applicationId: t, branchId: n } = e,
            r = (0, c.gW)(t, n);
        i.add(r);
    },
    GAME_CLOUD_SYNC_UPDATE: function (e) {
        let { state: t } = e;
        for (let e of Object.keys(t)) r[e] = t[e];
    },
    GAME_CLOUD_SYNC_COMPLETE: function (e) {
        let { applicationId: t, branchId: n } = e,
            s = (0, c.gW)(t, n);
        return i.delete(s), (r[s] = { type: E.VX0.DONE, timestamp: Date.now() }), !0;
    },
    GAME_CLOUD_SYNC_CONFLICT: function (e) {
        let { applicationId: t, branchId: n, next: s, remote: a } = e,
            o = (0, c.gW)(t, n);
        (r[o] = { type: E.VX0.CONFLICT, next: s, remote: a }), i.delete(o);
    },
    GAME_CLOUD_SYNC_ERROR: function (e) {
        let { applicationId: t, branchId: n } = e,
            s = (0, c.gW)(t, n);
        (r[s] = { type: E.VX0.ERROR }), i.delete(s);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = u.Ay.getRunningDiscordApplicationIds();
        for (let t of s.filter((t) => !e.includes(t))) {
            let e = d.A.getActiveLibraryApplication(t);
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
