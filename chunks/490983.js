n.d(t, { Z: () => $ }), n(47120);
var i,
    r = n(658722),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(913527),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    f = n(812206),
    _ = n(594190),
    p = n(592745),
    h = n(706454),
    m = n(757266),
    g = n(77498),
    E = n(283595),
    v = n(246946),
    y = n(230307),
    I = n(799777),
    T = n(417363),
    b = n(941128),
    S = n(70956),
    A = n(251625),
    N = n(823379),
    C = n(780570),
    R = n(358085),
    O = n(998502),
    D = n(804739),
    L = n(7956),
    x = n(981631);
function P(e, t, n) {
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
let w = 5,
    M = u()().subtract(1, 'week'),
    k = [],
    U = '',
    G = !1;
function B(e, t) {
    return e.application.name.localeCompare(t.application.name, h.default.locale, { sensitivity: 'base' });
}
function Z(e, t) {
    return null != e && u()(e.createdAt).isAfter(M) && 0 === t;
}
let F = {
        [x.iEv.NAME]: B,
        [x.iEv.PLATFORM]: (e, t, n) => {
            let i = e.libraryApplication.getDistributor(),
                r = t.libraryApplication.getDistributor();
            return i === r ? (n === x.sHY.DESCENDING ? -1 : 1) * B(e, t) : null == i ? 1 : null == r ? -1 : i.localeCompare(r);
        },
        [x.iEv.LAST_PLAYED]: (e, t) => (e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1),
        [x.iEv.ACTIONS]: null
    },
    V = (0, A.oH)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    j = (0, A.oH)((e) => e.filter((e) => null != e.libraryApplication && T.Z.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
    H = (0, A.oH)((e, t) => e.filter((e) => a()(t.toLowerCase(), e.application.name.toLowerCase()))),
    Y = (0, A.oH)((e, t, n, i) => {
        let r = F[t];
        if (null == r) return e;
        let a = [...e].sort(r);
        return n === x.sHY.DESCENDING ? a.reverse() : a;
    }),
    W = (0, A.oH)((e) => e.filter((e) => null != e.libraryApplication && e.libraryApplication.isHidden()));
function K(e, t) {
    let n = y.Z.getCurrentUserStatisticsForApplication(e.id);
    if (null != n) return new Date(n.last_played_at).getTime();
    let i = t[e.id];
    return null != i ? i : 0;
}
function z(e) {
    let { query: t } = e;
    U = t;
}
function q(e, t, n, i, r) {
    if (!r && t.has(e.id)) return null;
    let a = f.Z.getApplication(e.id);
    if (null == a) return null;
    let s = K(a, n);
    return (t.add(e.id), (0, C.Je)(e) || T.Z.isInstalled(e.id, e.branchId))
        ? {
              key: ''.concat(e.id, '-').concat(e.branchId),
              application: a,
              libraryApplication: e,
              lastPlayed: s,
              supportsCloudSync: null != e && T.Z.supportsCloudSync(e.id, e.branchId),
              isNew: Z(e, s),
              isLaunching: p.Z.launchingGames.has(e.id),
              isRunning: i.has(e.id),
              isLaunchable: (0, D.t)({
                  LibraryApplicationStore: E.Z,
                  LaunchableGameStore: p.Z,
                  DispatchApplicationStore: T.Z,
                  ConnectedAppsStore: m.Z,
                  applicationId: e.id,
                  branchId: e.branchId
              }),
              isUpdatingFlags: E.Z.isUpdatingFlags(e.id, e.branchId),
              shouldShowInLibrary: (0, C.d0)(a, e, v.Z),
              defaultAction: (0, L.i)(e, T.Z, b.Z)
          }
        : null;
}
function Q(e, t, n, i) {
    let r = null != e ? f.Z.getApplication(e) : null;
    if (null == r || null == e || t.has(e)) return null;
    let a = K(r, n);
    return (
        t.add(e),
        {
            key: e,
            application: r,
            lastPlayed: a,
            supportsCloudSync: !1,
            isNew: !1,
            isLaunching: p.Z.launchingGames.has(e),
            isRunning: i.has(e),
            isLaunchable: (0, D.t)({
                LibraryApplicationStore: E.Z,
                LaunchableGameStore: p.Z,
                DispatchApplicationStore: T.Z,
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
        i = _.ZP.getGamesSeen(!1, !1).map((e) => {
            let n = g.Z.getGameByGameData(e);
            return null != n ? ((t[n.id] = e.lastFocused * S.Z.Millis.SECOND), n.id) : null;
        }),
        r = Object.values(E.Z.getAllLibraryApplications())
            .map((i) => q(i, n, t, e, !0))
            .filter(N.lm),
        a = [...i.map((i) => Q(i, n, t, e)).filter(N.lm), ...r].sort((e, t) => (e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1));
    return (
        (G = null != g.Z.lastFetched && E.Z.fetched),
        !o().isEqual(a, k) &&
            ((k = a),
            R.isPlatformEmbedded &&
                O.ZP.setSystemTrayApplications(
                    j(k)
                        .map((e) => e.application)
                        .slice(0, w)
                ),
            !0)
    );
}
class J extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([f.Z, g.Z, p.Z, _.ZP, T.Z, b.Z, E.Z, y.Z, v.Z, m.Z], X, 200), this.syncWith([I.Z, h.default], () => !0);
    }
    get applicationFilterQuery() {
        return U;
    }
    get applicationViewItems() {
        return k;
    }
    get launchableApplicationViewItems() {
        return j(k);
    }
    get libraryApplicationViewItems() {
        return V(k);
    }
    get filteredLibraryApplicationViewItems() {
        return H(this.libraryApplicationViewItems, U);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return Y(this.filteredLibraryApplicationViewItems, I.Z.sortKey, I.Z.sortDirection, h.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return W(k);
    }
    get hasFetchedApplications() {
        return G;
    }
}
P(J, 'displayName', 'ApplicationViewStore');
let $ = new J(d.Z, { LIBRARY_APPLICATION_FILTER_UPDATE: z });
