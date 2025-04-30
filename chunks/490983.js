n.d(t, { Z: () => $ }), n(388685), n(642613), n(583741);
var r,
    i = n(658722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(913527),
    c = n.n(l),
    u = n(442837),
    d = n(570140),
    f = n(812206),
    _ = n(594190),
    p = n(592745),
    h = n(706454),
    m = n(757266),
    g = n(77498),
    E = n(283595),
    b = n(246946),
    y = n(230307),
    O = n(799777),
    v = n(417363),
    I = n(941128),
    S = n(70956),
    T = n(251625),
    A = n(823379),
    N = n(780570),
    C = n(358085),
    R = n(998502),
    P = n(804739),
    w = n(7956),
    D = n(981631);
function L(e, t, n) {
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
let x = 5,
    M = c()().subtract(1, 'week'),
    k = [],
    j = '',
    U = !1;
function G(e, t) {
    return e.application.name.localeCompare(t.application.name, h.default.locale, { sensitivity: 'base' });
}
function B(e, t) {
    return null != e && c()(e.createdAt).isAfter(M) && 0 === t;
}
let V = {
        [D.iEv.NAME]: G,
        [D.iEv.PLATFORM]: (e, t, n) => {
            let r = e.libraryApplication.getDistributor(),
                i = t.libraryApplication.getDistributor();
            return r === i ? (n === D.sHY.DESCENDING ? -1 : 1) * G(e, t) : null == r ? 1 : null == i ? -1 : r.localeCompare(i);
        },
        [D.iEv.LAST_PLAYED]: (e, t) => (e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1),
        [D.iEv.ACTIONS]: null
    },
    F = (0, T.oH)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    Z = (0, T.oH)((e) => e.filter((e) => null != e.libraryApplication && v.Z.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
    H = (0, T.oH)((e, t) => e.filter((e) => a()(t.toLowerCase(), e.application.name.toLowerCase()))),
    Y = (0, T.oH)((e, t, n, r) => {
        let i = V[t];
        if (null == i) return e;
        let a = [...e].sort(i);
        return n === D.sHY.DESCENDING ? a.reverse() : a;
    }),
    W = (0, T.oH)((e) => e.filter((e) => null != e.libraryApplication && e.libraryApplication.isHidden()));
function K(e, t) {
    let n = y.Z.getCurrentUserStatisticsForApplication(e.id);
    if (null != n) return new Date(n.last_played_at).getTime();
    let r = t[e.id];
    return null != r ? r : 0;
}
function z(e) {
    let { query: t } = e;
    j = t;
}
function q(e, t, n, r, i) {
    if (!i && t.has(e.id)) return null;
    let a = f.Z.getApplication(e.id);
    if (null == a) return null;
    let o = K(a, n);
    return (t.add(e.id), (0, N.Je)(e) || v.Z.isInstalled(e.id, e.branchId))
        ? {
              key: ''.concat(e.id, '-').concat(e.branchId),
              application: a,
              libraryApplication: e,
              lastPlayed: o,
              supportsCloudSync: null != e && v.Z.supportsCloudSync(e.id, e.branchId),
              isNew: B(e, o),
              isLaunching: p.Z.launchingGames.has(e.id),
              isRunning: r.has(e.id),
              isLaunchable: (0, P.t)({
                  LibraryApplicationStore: E.Z,
                  LaunchableGameStore: p.Z,
                  DispatchApplicationStore: v.Z,
                  ConnectedAppsStore: m.Z,
                  applicationId: e.id,
                  branchId: e.branchId
              }),
              isUpdatingFlags: E.Z.isUpdatingFlags(e.id, e.branchId),
              shouldShowInLibrary: (0, N.d0)(a, e, b.Z),
              defaultAction: (0, w.i)(e, v.Z, I.Z)
          }
        : null;
}
function Q(e, t, n, r) {
    let i = null != e ? f.Z.getApplication(e) : null;
    if (null == i || null == e || t.has(e)) return null;
    let a = K(i, n);
    return (
        t.add(e),
        {
            key: e,
            application: i,
            lastPlayed: a,
            supportsCloudSync: !1,
            isNew: !1,
            isLaunching: p.Z.launchingGames.has(e),
            isRunning: r.has(e),
            isLaunchable: (0, P.t)({
                LibraryApplicationStore: E.Z,
                LaunchableGameStore: p.Z,
                DispatchApplicationStore: v.Z,
                ConnectedAppsStore: m.Z,
                applicationId: e,
                branchId: null
            }),
            isUpdatingFlags: !1,
            shouldShowInLibrary: !1,
            libraryApplication: null,
            defaultAction: null
        }
    );
}
function X() {
    let e = new Set(_.ZP.getRunningVerifiedApplicationIds()),
        t = {},
        n = new Set(),
        r = _.ZP.getGamesSeen(!1, !1).map((e) => {
            let n = g.Z.getGameByGameData(e);
            return null != n ? ((t[n.id] = e.lastFocused * S.Z.Millis.SECOND), n.id) : null;
        }),
        i = Object.values(E.Z.getAllLibraryApplications())
            .map((r) => q(r, n, t, e, !0))
            .filter(A.lm),
        a = [...r.map((r) => Q(r, n, t, e)).filter(A.lm), ...i].sort((e, t) => (e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1));
    return (
        (U = null != g.Z.lastFetched && E.Z.fetched),
        !s().isEqual(a, k) &&
            ((k = a),
            C.isPlatformEmbedded &&
                R.ZP.setSystemTrayApplications(
                    Z(k)
                        .map((e) => e.application)
                        .slice(0, x)
                ),
            !0)
    );
}
class J extends (r = u.ZP.Store) {
    initialize() {
        this.syncWith([f.Z, g.Z, p.Z, _.ZP, v.Z, I.Z, E.Z, y.Z, b.Z, m.Z], X, 200), this.syncWith([O.Z, h.default], () => !0);
    }
    get applicationFilterQuery() {
        return j;
    }
    get applicationViewItems() {
        return k;
    }
    get launchableApplicationViewItems() {
        return Z(k);
    }
    get libraryApplicationViewItems() {
        return F(k);
    }
    get filteredLibraryApplicationViewItems() {
        return H(this.libraryApplicationViewItems, j);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return Y(this.filteredLibraryApplicationViewItems, O.Z.sortKey, O.Z.sortDirection, h.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return W(k);
    }
    get hasFetchedApplications() {
        return U;
    }
}
L(J, 'displayName', 'ApplicationViewStore');
let $ = new J(d.Z, { LIBRARY_APPLICATION_FILTER_UPDATE: z });
