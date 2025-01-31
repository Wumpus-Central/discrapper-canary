let i, l, a;
n.d(e, { Z: () => g }), n(47120);
var s,
    o,
    r,
    c = n(442837),
    d = n(570140),
    u = n(372123),
    p = n(594190),
    h = n(283595),
    f = n(780570),
    C = n(358085),
    y = n(209492),
    N = n(981631);
class m extends (s = c.ZP.Store) {
    initialize() {
        C.isPlatformEmbedded && y.S(), (i = {}), (l = new Set()), (a = []);
    }
    getState(t, e) {
        return i[(0, f.Tu)(t, e)];
    }
    isSyncing(t, e) {
        let n = (0, f.Tu)(t, e);
        return l.has(n);
    }
}
(r = 'CloudSyncStore'),
    (o = 'displayName') in m
        ? Object.defineProperty(m, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[o] = r);
let g = new m(d.Z, {
    GAME_CLOUD_SYNC_START: function (t) {
        let { applicationId: e, branchId: n } = t,
            i = (0, f.Tu)(e, n);
        l.add(i);
    },
    GAME_CLOUD_SYNC_UPDATE: function (t) {
        let { state: e } = t;
        for (let t of Object.keys(e)) i[t] = e[t];
    },
    GAME_CLOUD_SYNC_COMPLETE: function (t) {
        let { applicationId: e, branchId: n } = t,
            a = (0, f.Tu)(e, n);
        return (
            l.delete(a),
            (i[a] = {
                type: N.TzF.DONE,
                timestamp: Date.now()
            }),
            !0
        );
    },
    GAME_CLOUD_SYNC_CONFLICT: function (t) {
        let { applicationId: e, branchId: n, next: a, remote: s } = t,
            o = (0, f.Tu)(e, n);
        (i[o] = {
            type: N.TzF.CONFLICT,
            next: a,
            remote: s
        }),
            l.delete(o);
    },
    GAME_CLOUD_SYNC_ERROR: function (t) {
        let { applicationId: e, branchId: n } = t,
            a = (0, f.Tu)(e, n);
        (i[a] = { type: N.TzF.ERROR }), l.delete(a);
    },
    RUNNING_GAMES_CHANGE: function () {
        let t = p.ZP.getRunningDiscordApplicationIds();
        for (let e of a.filter((e) => !t.includes(e))) {
            let t = h.Z.getActiveLibraryApplication(e);
            null != t &&
                d.Z.wait(() => {
                    try {
                        u.Z(t.id, t.branchId);
                    } catch (t) {}
                });
        }
        return (a = t), !1;
    }
});
