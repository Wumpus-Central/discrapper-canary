n.d(t, { Z: () => $ }), n(47120), n(230036), n(978209);
var r,
    i = n(658722),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
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
    v = n(799777),
    O = n(417363),
    I = n(941128),
    S = n(70956),
    T = n(251625),
    N = n(823379),
    A = n(780570),
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
let F = {
        [D.iEv.NAME]: G,
        [D.iEv.PLATFORM]: (e, t, n) => {
            let r = e.libraryApplication.getDistributor(),
                i = t.libraryApplication.getDistributor();
            return r === i ? (n === D.sHY.DESCENDING ? -1 : 1) * G(e, t) : null == r ? 1 : null == i ? -1 : r.localeCompare(i);
        },
        [D.iEv.LAST_PLAYED]: (e, t) => (e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1),
        [D.iEv.ACTIONS]: null
    },
    V = (0, T.oH)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    Z = (0, T.oH)((e) => e.filter((e) => null != e.libraryApplication && O.Z.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
    H = (0, T.oH)((e, t) => e.filter((e) => o()(t.toLowerCase(), e.application.name.toLowerCase()))),
    W = (0, T.oH)((e, t, n, r) => {
        let i = F[t];
        if (null == i) return e;
        let o = [...e].sort(i);
        return n === D.sHY.DESCENDING ? o.reverse() : o;
    }),
    Y = (0, T.oH)((e) => e.filter((e) => null != e.libraryApplication && e.libraryApplication.isHidden()));
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
    let o = f.Z.getApplication(e.id);
    if (null == o) return null;
    let a = K(o, n);
    return (t.add(e.id), (0, A.Je)(e) || O.Z.isInstalled(e.id, e.branchId))
        ? {
              key: ''.concat(e.id, '-').concat(e.branchId),
              application: o,
              libraryApplication: e,
              lastPlayed: a,
              supportsCloudSync: null != e && O.Z.supportsCloudSync(e.id, e.branchId),
              isNew: B(e, a),
              isLaunching: p.Z.launchingGames.has(e.id),
              isRunning: r.has(e.id),
              isLaunchable: (0, P.t)({
                  LibraryApplicationStore: E.Z,
                  LaunchableGameStore: p.Z,
                  DispatchApplicationStore: O.Z,
                  ConnectedAppsStore: m.Z,
                  applicationId: e.id,
                  branchId: e.branchId
              }),
              isUpdatingFlags: E.Z.isUpdatingFlags(e.id, e.branchId),
              shouldShowInLibrary: (0, A.d0)(o, e, b.Z),
              defaultAction: (0, w.i)(e, O.Z, I.Z)
          }
        : null;
}
function Q(e, t, n, r) {
    let i = null != e ? f.Z.getApplication(e) : null;
    if (null == i || null == e || t.has(e)) return null;
    let o = K(i, n);
    return (
        t.add(e),
        {
            key: e,
            application: i,
            lastPlayed: o,
            supportsCloudSync: !1,
            isNew: !1,
            isLaunching: p.Z.launchingGames.has(e),
            isRunning: r.has(e),
            isLaunchable: (0, P.t)({
                LibraryApplicationStore: E.Z,
                LaunchableGameStore: p.Z,
                DispatchApplicationStore: O.Z,
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
            .filter(N.lm),
        o = [...r.map((r) => Q(r, n, t, e)).filter(N.lm), ...i].sort((e, t) => (e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1));
    return (
        (U = null != g.Z.lastFetched && E.Z.fetched),
        !s().isEqual(o, k) &&
            ((k = o),
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
        this.syncWith([f.Z, g.Z, p.Z, _.ZP, O.Z, I.Z, E.Z, y.Z, b.Z, m.Z], X, 200), this.syncWith([v.Z, h.default], () => !0);
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
        return V(k);
    }
    get filteredLibraryApplicationViewItems() {
        return H(this.libraryApplicationViewItems, j);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return W(this.filteredLibraryApplicationViewItems, v.Z.sortKey, v.Z.sortDirection, h.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return Y(k);
    }
    get hasFetchedApplications() {
        return U;
    }
}
L(J, 'displayName', 'ApplicationViewStore');
let $ = new J(d.Z, { LIBRARY_APPLICATION_FILTER_UPDATE: z });
