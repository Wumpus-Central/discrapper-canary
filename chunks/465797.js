let r, i, a;
n.d(t, { A: () => S }), n(896048);
var s,
    o = n(311907),
    l = n(73153),
    c = n(54827),
    u = n(15285),
    d = n(189081),
    f = n(674378),
    p = n(723702),
    _ = n(986120),
    h = n(652215);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g() {
    let e = u.Ay.getRunningDiscordApplicationIds();
    for (let t of a.filter((t) => !e.includes(t))) {
        let e = d.A.getActiveLibraryApplication(t);
        null != e &&
            l.h.wait(() => {
                try {
                    c.O(e.id, e.branchId);
                } catch (e) {}
            });
    }
    return (a = e), !1;
}
function E(e) {
    let { applicationId: t, branchId: n } = e,
        r = (0, f.gW)(t, n);
    i.add(r);
}
function b(e) {
    let { applicationId: t, branchId: n } = e,
        a = (0, f.gW)(t, n);
    return (
        i.delete(a),
        (r[a] = {
            type: h.VX0.DONE,
            timestamp: Date.now(),
        }),
        !0
    );
}
function y(e) {
    let { state: t } = e;
    for (let e of Object.keys(t)) r[e] = t[e];
}
function O(e) {
    let { applicationId: t, branchId: n, next: a, remote: s } = e,
        o = (0, f.gW)(t, n);
    (r[o] = {
        type: h.VX0.CONFLICT,
        next: a,
        remote: s,
    }),
        i.delete(o);
}
function A(e) {
    let { applicationId: t, branchId: n } = e,
        a = (0, f.gW)(t, n);
    (r[a] = { type: h.VX0.ERROR }), i.delete(a);
}
class v extends (s = o.Ay.Store) {
    initialize() {
        this.waitFor(d.A, u.Ay), p.isPlatformEmbedded && _.T(), (r = {}), (i = new Set()), (a = []);
    }
    getState(e, t) {
        return r[(0, f.gW)(e, t)];
    }
    isSyncing(e, t) {
        let n = (0, f.gW)(e, t);
        return i.has(n);
    }
}
m(v, "displayName", "CloudSyncStore");
let S = new v(l.h, {
    GAME_CLOUD_SYNC_START: E,
    GAME_CLOUD_SYNC_UPDATE: y,
    GAME_CLOUD_SYNC_COMPLETE: b,
    GAME_CLOUD_SYNC_CONFLICT: O,
    GAME_CLOUD_SYNC_ERROR: A,
    RUNNING_GAMES_CHANGE: g,
});
