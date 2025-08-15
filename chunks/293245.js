let i, r, l;
n.d(e, { Z: () => m }), n(388685);
var o,
    a,
    c = n(442837),
    s = n(570140),
    d = n(372123),
    u = n(594190),
    p = n(283595),
    h = n(780570),
    f = n(358085),
    y = n(209492),
    C = n(981631);
class O extends (o = c.ZP.Store) {
    initialize() {
        f.isPlatformEmbedded && y.S(), (i = {}), (r = new Set()), (l = []);
    }
    getState(t, e) {
        return i[(0, h.Tu)(t, e)];
    }
    isSyncing(t, e) {
        let n = (0, h.Tu)(t, e);
        return r.has(n);
    }
}
(a = "displayName") in O
    ? Object.defineProperty(O, a, {
          value: "CloudSyncStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (O[a] = "CloudSyncStore");
let m = new O(s.Z, {
    GAME_CLOUD_SYNC_START: function (t) {
        let { applicationId: e, branchId: n } = t,
            i = (0, h.Tu)(e, n);
        r.add(i);
    },
    GAME_CLOUD_SYNC_UPDATE: function (t) {
        let { state: e } = t;
        for (let t of Object.keys(e)) i[t] = e[t];
    },
    GAME_CLOUD_SYNC_COMPLETE: function (t) {
        let { applicationId: e, branchId: n } = t,
            l = (0, h.Tu)(e, n);
        return (
            r.delete(l),
            (i[l] = {
                type: C.TzF.DONE,
                timestamp: Date.now(),
            }),
            !0
        );
    },
    GAME_CLOUD_SYNC_CONFLICT: function (t) {
        let { applicationId: e, branchId: n, next: l, remote: o } = t,
            a = (0, h.Tu)(e, n);
        (i[a] = {
            type: C.TzF.CONFLICT,
            next: l,
            remote: o,
        }),
            r.delete(a);
    },
    GAME_CLOUD_SYNC_ERROR: function (t) {
        let { applicationId: e, branchId: n } = t,
            l = (0, h.Tu)(e, n);
        (i[l] = { type: C.TzF.ERROR }), r.delete(l);
    },
    RUNNING_GAMES_CHANGE: function () {
        let t = u.ZP.getRunningDiscordApplicationIds();
        for (let e of l.filter((e) => !t.includes(e))) {
            let t = p.Z.getActiveLibraryApplication(e);
            null != t &&
                s.Z.wait(() => {
                    try {
                        d.Z(t.id, t.branchId);
                    } catch (t) {}
                });
        }
        return (l = t), !1;
    },
});
