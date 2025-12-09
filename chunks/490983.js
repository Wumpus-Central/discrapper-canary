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
    p = n(594190),
    _ = n(592745),
    m = n(706454),
    h = n(757266),
    g = n(77498),
    E = n(283595),
    b = n(246946),
    y = n(230307),
    O = n(799777),
    v = n(417363),
    S = n(941128),
    I = n(70956),
    T = n(251625),
    A = n(823379),
    C = n(780570),
    N = n(358085),
    P = n(998502),
    R = n(804739),
    D = n(7956),
    w = n(981631);
function x(e, t, n) {
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
let L = 5,
    j = c()().subtract(1, "week"),
    M = [],
    k = "",
    U = !1;
function G(e, t) {
    return e.application.name.localeCompare(t.application.name, m.default.locale, { sensitivity: "base" });
}
function Z(e, t) {
    return null != e && c()(e.createdAt).isAfter(j) && 0 === t;
}
let B = {
        [w.iEv.NAME]: G,
        [w.iEv.PLATFORM]: (e, t, n) => {
            let r = e.libraryApplication.getDistributor(),
                i = t.libraryApplication.getDistributor();
            return r === i
                ? (n === w.sHY.DESCENDING ? -1 : 1) * G(e, t)
                : null == r
                  ? 1
                  : null == i
                    ? -1
                    : r.localeCompare(i);
        },
        [w.iEv.LAST_PLAYED]: (e, t) =>
            e.isNew && !t.isNew
                ? -1
                : !e.isNew && t.isNew
                  ? 1
                  : e.lastPlayed === t.lastPlayed
                    ? 0
                    : e.lastPlayed > t.lastPlayed
                      ? -1
                      : 1,
        [w.iEv.ACTIONS]: null,
    },
    F = (0, T.oH)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    V = (0, T.oH)((e) =>
        e.filter(
            (e) =>
                null != e.libraryApplication &&
                v.Z.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId),
        ),
    ),
    H = (0, T.oH)((e, t) => e.filter((e) => a()(t.toLowerCase(), e.application.name.toLowerCase()))),
    Y = (0, T.oH)((e, t, n, r) => {
        let i = B[t];
        if (null == i) return e;
        let a = [...e].sort(i);
        return n === w.sHY.DESCENDING ? a.reverse() : a;
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
    k = t;
}
function q(e, t, n, r, i) {
    if (!i && t.has(e.id)) return null;
    let a = f.Z.getApplication(e.id);
    if (null == a) return null;
    let o = K(a, n);
    return (t.add(e.id), (0, C.Je)(e) || v.Z.isInstalled(e.id, e.branchId))
        ? {
              key: "".concat(e.id, "-").concat(e.branchId),
              application: a,
              libraryApplication: e,
              lastPlayed: o,
              supportsCloudSync: null != e && v.Z.supportsCloudSync(e.id, e.branchId),
              isNew: Z(e, o),
              isLaunching: _.Z.launchingGames.has(e.id),
              isRunning: r.has(e.id),
              isLaunchable: (0, R.t)({
                  LibraryApplicationStore: E.Z,
                  LaunchableGameStore: _.Z,
                  DispatchApplicationStore: v.Z,
                  ConnectedAppsStore: h.Z,
                  applicationId: e.id,
                  branchId: e.branchId,
              }),
              isUpdatingFlags: E.Z.isUpdatingFlags(e.id, e.branchId),
              shouldShowInLibrary: (0, C.d0)(a, e, b.Z),
              defaultAction: (0, D.i)(e, v.Z, S.Z),
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
            isLaunching: _.Z.launchingGames.has(e),
            isRunning: r.has(e),
            isLaunchable: (0, R.t)({
                LibraryApplicationStore: E.Z,
                LaunchableGameStore: _.Z,
                DispatchApplicationStore: v.Z,
                ConnectedAppsStore: h.Z,
                applicationId: e,
                branchId: null,
            }),
            isUpdatingFlags: !1,
            shouldShowInLibrary: !1,
            libraryApplication: null,
            defaultAction: null,
        }
    );
}
function X() {
    let e = new Set(p.ZP.getRunningVerifiedApplicationIds()),
        t = {},
        n = new Set(),
        r = p.ZP.getGamesSeen(!1, !1).map((e) => {
            let n = g.Z.getGameByGameData(e);
            return null != n ? ((t[n.id] = e.lastFocused * I.Z.Millis.SECOND), n.id) : null;
        }),
        i = Object.values(E.Z.getAllLibraryApplications())
            .map((r) => q(r, n, t, e, !0))
            .filter(A.lm),
        a = [...r.map((r) => Q(r, n, t, e)).filter(A.lm), ...i].sort((e, t) =>
            e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
        );
    return (
        (U = null != g.Z.lastFetched && E.Z.fetched),
        !s().isEqual(a, M) &&
            ((M = a),
            N.isPlatformEmbedded &&
                P.ZP.setSystemTrayApplications(
                    V(M)
                        .map((e) => e.application)
                        .slice(0, L),
                ),
            !0)
    );
}
class J extends (r = u.ZP.Store) {
    initialize() {
        this.syncWith([f.Z, g.Z, _.Z, p.ZP, v.Z, S.Z, E.Z, y.Z, b.Z, h.Z], X, 200),
            this.syncWith([O.Z, m.default], () => !0);
    }
    get applicationFilterQuery() {
        return k;
    }
    get applicationViewItems() {
        return M;
    }
    get launchableApplicationViewItems() {
        return V(M);
    }
    get libraryApplicationViewItems() {
        return F(M);
    }
    get filteredLibraryApplicationViewItems() {
        return H(this.libraryApplicationViewItems, k);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return Y(this.filteredLibraryApplicationViewItems, O.Z.sortKey, O.Z.sortDirection, m.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return W(M);
    }
    get hasFetchedApplications() {
        return U;
    }
}
x(J, "displayName", "ApplicationViewStore");
let $ = new J(d.Z, { LIBRARY_APPLICATION_FILTER_UPDATE: z });
