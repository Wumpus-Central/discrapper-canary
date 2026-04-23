"use strict";
let i, r, s;
n.d(t, { A: () => f });
var a = n(17928),
    o = n(228366),
    l = n(54827),
    d = n(328153),
    _ = n(189081),
    u = n(674378),
    c = n(723702),
    E = n(986120),
    h = n(652215);
class m extends a.Ay.Store {
    static displayName = "CloudSyncStore";
    initialize() {
        this.waitFor(_.A, d.Ay), c.isPlatformEmbedded && E.T(), (i = {}), (r = new Set()), (s = []);
    }
    getState(e, t) {
        return i[(0, u.gW)(e, t)];
    }
    isSyncing(e, t) {
        let n = (0, u.gW)(e, t);
        return r.has(n);
    }
}
let f = new m(o.h, {
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
            s = (0, u.gW)(t, n);
        return r.delete(s), (i[s] = { type: h.VX0.DONE, timestamp: Date.now() }), !0;
    },
    GAME_CLOUD_SYNC_CONFLICT: function (e) {
        let { applicationId: t, branchId: n, next: s, remote: a } = e,
            o = (0, u.gW)(t, n);
        (i[o] = { type: h.VX0.CONFLICT, next: s, remote: a }), r.delete(o);
    },
    GAME_CLOUD_SYNC_ERROR: function (e) {
        let { applicationId: t, branchId: n } = e,
            s = (0, u.gW)(t, n);
        (i[s] = { type: h.VX0.ERROR }), r.delete(s);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = d.Ay.getRunningDiscordApplicationIds();
        for (let t of s.filter((t) => !e.includes(t))) {
            let e = _.A.getActiveLibraryApplication(t);
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
