let r, i, a;
(n.d(t, { Z: () => T }), n(388685));
var o,
    s = n(442837),
    l = n(570140),
    c = n(372123),
    u = n(594190),
    d = n(283595),
    f = n(780570),
    _ = n(358085),
    p = n(209492),
    h = n(981631);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g() {
    let e = u.ZP.getRunningDiscordApplicationIds();
    for (let t of a.filter((t) => !e.includes(t))) {
        let e = d.Z.getActiveLibraryApplication(t);
        null != e &&
            l.Z.wait(() => {
                try {
                    c.Z(e.id, e.branchId);
                } catch (e) {}
            });
    }
    return ((a = e), !1);
}
function E(e) {
    let { applicationId: t, branchId: n } = e,
        r = (0, f.Tu)(t, n);
    i.add(r);
}
function b(e) {
    let { applicationId: t, branchId: n } = e,
        a = (0, f.Tu)(t, n);
    return (
        i.delete(a),
        (r[a] = {
            type: h.TzF.DONE,
            timestamp: Date.now()
        }),
        !0
    );
}
function y(e) {
    let { state: t } = e;
    for (let e of Object.keys(t)) r[e] = t[e];
}
function O(e) {
    let { applicationId: t, branchId: n, next: a, remote: o } = e,
        s = (0, f.Tu)(t, n);
    ((r[s] = {
        type: h.TzF.CONFLICT,
        next: a,
        remote: o
    }),
        i.delete(s));
}
function v(e) {
    let { applicationId: t, branchId: n } = e,
        a = (0, f.Tu)(t, n);
    ((r[a] = { type: h.TzF.ERROR }), i.delete(a));
}
class I extends (o = s.ZP.Store) {
    initialize() {
        (_.isPlatformEmbedded && p.S(), (r = {}), (i = new Set()), (a = []));
    }
    getState(e, t) {
        return r[(0, f.Tu)(e, t)];
    }
    isSyncing(e, t) {
        let n = (0, f.Tu)(e, t);
        return i.has(n);
    }
}
m(I, 'displayName', 'CloudSyncStore');
let T = new I(l.Z, {
    GAME_CLOUD_SYNC_START: E,
    GAME_CLOUD_SYNC_UPDATE: y,
    GAME_CLOUD_SYNC_COMPLETE: b,
    GAME_CLOUD_SYNC_CONFLICT: O,
    GAME_CLOUD_SYNC_ERROR: v,
    RUNNING_GAMES_CHANGE: g
});
