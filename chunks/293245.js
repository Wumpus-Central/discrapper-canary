let i, r, o;
n.d(e, { Z: () => g }), n(47120);
var l,
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
class N extends (l = c.ZP.Store) {
    initialize() {
        y.isPlatformEmbedded && C.S(), (i = {}), (r = new Set()), (o = []);
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
    (a = 'displayName') in N
        ? Object.defineProperty(N, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[a] = s);
let g = new N(d.Z, {
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
            o = (0, f.Tu)(e, n);
        return (
            r.delete(o),
            (i[o] = {
                type: O.TzF.DONE,
                timestamp: Date.now()
            }),
            !0
        );
    },
    GAME_CLOUD_SYNC_CONFLICT: function (t) {
        let { applicationId: e, branchId: n, next: o, remote: l } = t,
            a = (0, f.Tu)(e, n);
        (i[a] = {
            type: O.TzF.CONFLICT,
            next: o,
            remote: l
        }),
            r.delete(a);
    },
    GAME_CLOUD_SYNC_ERROR: function (t) {
        let { applicationId: e, branchId: n } = t,
            o = (0, f.Tu)(e, n);
        (i[o] = { type: O.TzF.ERROR }), r.delete(o);
    },
    RUNNING_GAMES_CHANGE: function () {
        let t = p.ZP.getRunningDiscordApplicationIds();
        for (let e of o.filter((e) => !t.includes(e))) {
            let t = h.Z.getActiveLibraryApplication(e);
            null != t &&
                d.Z.wait(() => {
                    try {
                        u.Z(t.id, t.branchId);
                    } catch (t) {}
                });
        }
        return (o = t), !1;
    }
});
