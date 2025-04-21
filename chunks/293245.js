let i, r, l;
n.d(e, { Z: () => b }), n(388685);
var o,
    a,
    s,
    c = n(442837),
    d = n(570140),
    u = n(372123),
    p = n(594190),
    h = n(283595),
    f = n(780570),
    y = n(358085),
    C = n(209492),
    O = n(981631);
class g extends (o = c.ZP.Store) {
    initialize() {
        y.isPlatformEmbedded && C.S(), (i = {}), (r = new Set()), (l = []);
    }
    getState(t, e) {
        return i[(0, f.Tu)(t, e)];
    }
    isSyncing(t, e) {
        let n = (0, f.Tu)(t, e);
        return r.has(n);
    }
}
(s = 'CloudSyncStore'),
    (a = 'displayName') in g
        ? Object.defineProperty(g, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[a] = s);
let b = new g(d.Z, {
    GAME_CLOUD_SYNC_START: function (t) {
        let { applicationId: e, branchId: n } = t,
            i = (0, f.Tu)(e, n);
        r.add(i);
    },
    GAME_CLOUD_SYNC_UPDATE: function (t) {
        let { state: e } = t;
        for (let t of Object.keys(e)) i[t] = e[t];
    },
    GAME_CLOUD_SYNC_COMPLETE: function (t) {
        let { applicationId: e, branchId: n } = t,
            l = (0, f.Tu)(e, n);
        return (
            r.delete(l),
            (i[l] = {
                type: O.TzF.DONE,
                timestamp: Date.now()
            }),
            !0
        );
    },
    GAME_CLOUD_SYNC_CONFLICT: function (t) {
        let { applicationId: e, branchId: n, next: l, remote: o } = t,
            a = (0, f.Tu)(e, n);
        (i[a] = {
            type: O.TzF.CONFLICT,
            next: l,
            remote: o
        }),
            r.delete(a);
    },
    GAME_CLOUD_SYNC_ERROR: function (t) {
        let { applicationId: e, branchId: n } = t,
            l = (0, f.Tu)(e, n);
        (i[l] = { type: O.TzF.ERROR }), r.delete(l);
    },
    RUNNING_GAMES_CHANGE: function () {
        let t = p.ZP.getRunningDiscordApplicationIds();
        for (let e of l.filter((e) => !t.includes(e))) {
            let t = h.Z.getActiveLibraryApplication(e);
            null != t &&
                d.Z.wait(() => {
                    try {
                        u.Z(t.id, t.branchId);
                    } catch (t) {}
                });
        }
        return (l = t), !1;
    }
});
