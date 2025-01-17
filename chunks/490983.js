var i,
    a = r(47120);
var s = r(658722),
    o = r.n(s),
    l = r(392711),
    u = r.n(l),
    c = r(913527),
    d = r.n(c),
    f = r(442837),
    _ = r(570140),
    h = r(812206),
    p = r(594190),
    m = r(592745),
    g = r(706454),
    E = r(757266),
    v = r(77498),
    I = r(283595),
    T = r(246946),
    b = r(230307),
    y = r(799777),
    S = r(417363),
    A = r(941128),
    N = r(70956),
    C = r(251625),
    R = r(823379),
    O = r(780570),
    D = r(358085),
    L = r(998502),
    x = r(804739),
    w = r(7956),
    P = r(981631);
function M(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let k = 5,
    U = d()().subtract(1, 'week'),
    B = [],
    G = '',
    Z = !1;
function F(e, n) {
    return e.application.name.localeCompare(n.application.name, g.default.locale, { sensitivity: 'base' });
}
function V(e, n) {
    return null != e && d()(e.createdAt).isAfter(U) && 0 === n;
}
let j = {
        [P.iEv.NAME]: F,
        [P.iEv.PLATFORM]: (e, n, r) => {
            let i = e.libraryApplication.getDistributor(),
                a = n.libraryApplication.getDistributor();
            return i === a ? (r === P.sHY.DESCENDING ? -1 : 1) * F(e, n) : null == i ? 1 : null == a ? -1 : i.localeCompare(a);
        },
        [P.iEv.LAST_PLAYED]: (e, n) => (e.isNew && !n.isNew ? -1 : !e.isNew && n.isNew ? 1 : e.lastPlayed === n.lastPlayed ? 0 : e.lastPlayed > n.lastPlayed ? -1 : 1),
        [P.iEv.ACTIONS]: null
    },
    H = (0, C.oH)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    Y = (0, C.oH)((e) => e.filter((e) => null != e.libraryApplication && S.Z.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
    W = (0, C.oH)((e, n) => e.filter((e) => o()(n.toLowerCase(), e.application.name.toLowerCase()))),
    K = (0, C.oH)((e, n, r, i) => {
        let a = j[n];
        if (null == a) return e;
        let s = [...e].sort(a);
        return r === P.sHY.DESCENDING ? s.reverse() : s;
    }),
    z = (0, C.oH)((e) => e.filter((e) => null != e.libraryApplication && e.libraryApplication.isHidden()));
function q(e, n) {
    let r = b.Z.getCurrentUserStatisticsForApplication(e.id);
    if (null != r) return new Date(r.last_played_at).getTime();
    let i = n[e.id];
    return null != i ? i : 0;
}
function Q(e) {
    let { query: n } = e;
    G = n;
}
function X(e, n, r, i, a) {
    if (!a && n.has(e.id)) return null;
    let s = h.Z.getApplication(e.id);
    if (null == s) return null;
    let o = q(s, r);
    return (n.add(e.id), (0, O.Je)(e) || S.Z.isInstalled(e.id, e.branchId))
        ? {
              key: ''.concat(e.id, '-').concat(e.branchId),
              application: s,
              libraryApplication: e,
              lastPlayed: o,
              supportsCloudSync: null != e && S.Z.supportsCloudSync(e.id, e.branchId),
              isNew: V(e, o),
              isLaunching: m.Z.launchingGames.has(e.id),
              isRunning: i.has(e.id),
              isLaunchable: (0, x.t)({
                  LibraryApplicationStore: I.Z,
                  LaunchableGameStore: m.Z,
                  DispatchApplicationStore: S.Z,
                  ConnectedAppsStore: E.Z,
                  applicationId: e.id,
                  branchId: e.branchId
              }),
              isUpdatingFlags: I.Z.isUpdatingFlags(e.id, e.branchId),
              shouldShowInLibrary: (0, O.d0)(s, e, T.Z),
              defaultAction: (0, w.i)(e, S.Z, A.Z)
          }
        : null;
}
function J(e, n, r, i) {
    let a = null != e ? h.Z.getApplication(e) : null;
    if (null == a || null == e || n.has(e)) return null;
    let s = q(a, r);
    return (
        n.add(e),
        {
            key: e,
            application: a,
            lastPlayed: s,
            supportsCloudSync: !1,
            isNew: !1,
            isLaunching: m.Z.launchingGames.has(e),
            isRunning: i.has(e),
            isLaunchable: (0, x.t)({
                LibraryApplicationStore: I.Z,
                LaunchableGameStore: m.Z,
                DispatchApplicationStore: S.Z,
                ConnectedAppsStore: E.Z,
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
function $() {
    let e = new Set(p.ZP.getRunningVerifiedApplicationIds()),
        n = {},
        r = new Set(),
        i = p.ZP.getGamesSeen(!1, !1).map((e) => {
            let r = v.Z.getGameByGameData(e);
            return null != r ? ((n[r.id] = e.lastFocused * N.Z.Millis.SECOND), r.id) : null;
        }),
        a = Object.values(I.Z.getAllLibraryApplications())
            .map((i) => X(i, r, n, e, !0))
            .filter(R.lm),
        s = [...i.map((i) => J(i, r, n, e)).filter(R.lm), ...a].sort((e, n) => (e.lastPlayed === n.lastPlayed ? 0 : e.lastPlayed > n.lastPlayed ? -1 : 1));
    return (
        (Z = null != v.Z.lastFetched && I.Z.fetched),
        !u().isEqual(s, B) &&
            ((B = s),
            D.isPlatformEmbedded &&
                L.ZP.setSystemTrayApplications(
                    Y(B)
                        .map((e) => e.application)
                        .slice(0, k)
                ),
            !0)
    );
}
class ee extends (i = f.ZP.Store) {
    initialize() {
        this.syncWith([h.Z, v.Z, m.Z, p.ZP, S.Z, A.Z, I.Z, b.Z, T.Z, E.Z], $, 200), this.syncWith([y.Z, g.default], () => !0);
    }
    get applicationFilterQuery() {
        return G;
    }
    get applicationViewItems() {
        return B;
    }
    get launchableApplicationViewItems() {
        return Y(B);
    }
    get libraryApplicationViewItems() {
        return H(B);
    }
    get filteredLibraryApplicationViewItems() {
        return W(this.libraryApplicationViewItems, G);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return K(this.filteredLibraryApplicationViewItems, y.Z.sortKey, y.Z.sortDirection, g.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return z(B);
    }
    get hasFetchedApplications() {
        return Z;
    }
}
M(ee, 'displayName', 'ApplicationViewStore'), (n.Z = new ee(_.Z, { LIBRARY_APPLICATION_FILTER_UPDATE: Q }));
