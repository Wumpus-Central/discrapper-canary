n.d(t, {
    A: () => J,
}),
    n(896048),
    n(638769),
    n(264879);
var r,
    i = n(91871),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(989349),
    c = n.n(l),
    u = n(311907),
    d = n(73153),
    f = n(587895),
    p = n(15285),
    _ = n(651743),
    h = n(773669),
    m = n(134861),
    g = n(760751),
    E = n(189081),
    b = n(351906),
    y = n(90165),
    O = n(268387),
    A = n(194871),
    v = n(966846),
    S = n(927813),
    I = n(583613),
    T = n(403362),
    C = n(674378),
    N = n(723702),
    R = n(837921),
    w = n(144914),
    P = n(227841),
    D = n(652215);

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
    return e.application.name.localeCompare(t.application.name, h.default.locale, {
        sensitivity: "base",
    });
}

function V(e, t) {
    return null != e && c()(e.createdAt).isAfter(j) && 0 === t;
}
let F = {
        [D.DpB.NAME]: G,
        [D.DpB.PLATFORM]: (e, t, n) => {
            let r = e.libraryApplication.getDistributor(),
                i = t.libraryApplication.getDistributor();
            return r === i
                ? (n === D.tSW.DESCENDING ? -1 : 1) * G(e, t)
                : null == r
                  ? 1
                  : null == i
                    ? -1
                    : r.localeCompare(i);
        },
        [D.DpB.LAST_PLAYED]: (e, t) =>
            e.isNew && !t.isNew
                ? -1
                : !e.isNew && t.isNew
                  ? 1
                  : e.lastPlayed === t.lastPlayed
                    ? 0
                    : e.lastPlayed > t.lastPlayed
                      ? -1
                      : 1,
        [D.DpB.ACTIONS]: null,
    },
    B = (0, I.L_)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    H = (0, I.L_)((e) =>
        e.filter(
            (e) =>
                null != e.libraryApplication &&
                A.A.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId),
        ),
    ),
    Y = (0, I.L_)((e, t) => e.filter((e) => a()(t.toLowerCase(), e.application.name.toLowerCase()))),
    W = (0, I.L_)((e, t, n, r) => {
        let i = F[t];
        if (null == i) return e;
        let a = [...e].sort(i);
        return n === D.tSW.DESCENDING ? a.reverse() : a;
    }),
    K = (0, I.L_)((e) => e.filter((e) => null != e.libraryApplication && e.libraryApplication.isHidden()));

function z(e, t) {
    let n = y.A.getCurrentUserStatisticsForApplication(e.id);
    if (null != n) return new Date(n.last_played_at).getTime();
    let r = t[e.id];
    return null != r ? r : 0;
}

function q(e) {
    let { query: t } = e;
    k = t;
}

function X(e, t, n, r, i) {
    if (!i && t.has(e.id)) return null;
    let a = f.A.getApplication(e.id);
    if (null == a) return null;
    let s = z(a, n);
    return (t.add(e.id), (0, C.XZ)(e) || A.A.isInstalled(e.id, e.branchId))
        ? {
              key: "".concat(e.id, "-").concat(e.branchId),
              application: a,
              libraryApplication: e,
              lastPlayed: s,
              supportsCloudSync: null != e && A.A.supportsCloudSync(e.id, e.branchId),
              isNew: V(e, s),
              isLaunching: _.A.launchingGames.has(e.id),
              isRunning: r.has(e.id),
              isLaunchable: (0, w.A)({
                  LibraryApplicationStore: E.A,
                  LaunchableGameStore: _.A,
                  DispatchApplicationStore: A.A,
                  ConnectedAppsStore: m.A,
                  applicationId: e.id,
                  branchId: e.branchId,
              }),
              isUpdatingFlags: E.A.isUpdatingFlags(e.id, e.branchId),
              shouldShowInLibrary: (0, C.Tr)(a, e, b.A),
              defaultAction: (0, P.F)(e, A.A, v.A),
          }
        : null;
}

function Z(e, t, n, r) {
    let i = null != e ? f.A.getApplication(e) : null;
    if (null == i || null == e || t.has(e)) return null;
    let a = z(i, n);
    return (
        t.add(e),
        {
            key: e,
            application: i,
            lastPlayed: a,
            supportsCloudSync: !1,
            isNew: !1,
            isLaunching: _.A.launchingGames.has(e),
            isRunning: r.has(e),
            isLaunchable: (0, w.A)({
                LibraryApplicationStore: E.A,
                LaunchableGameStore: _.A,
                DispatchApplicationStore: A.A,
                ConnectedAppsStore: m.A,
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

function Q() {
    let e = new Set(p.Ay.getRunningVerifiedApplicationIds()),
        t = {},
        n = new Set(),
        r = p.Ay.getGamesSeen(!1, !1).map((e) => {
            let n = g.A.getGameByGameData(e);
            return null != n ? ((t[n.id] = e.lastFocused * S.A.Millis.SECOND), n.id) : null;
        }),
        i = Object.values(E.A.getAllLibraryApplications())
            .map((r) => X(r, n, t, e, !0))
            .filter(T.Vq),
        a = [...r.map((r) => Z(r, n, t, e)).filter(T.Vq), ...i].sort((e, t) =>
            e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
        );
    return (
        (U = null != g.A.lastFetched && E.A.fetched),
        !o().isEqual(a, M) &&
            ((M = a),
            N.isPlatformEmbedded &&
                R.Ay.setSystemTrayApplications(
                    H(M)
                        .map((e) => e.application)
                        .slice(0, L),
                ),
            !0)
    );
}
class $ extends (r = u.Ay.Store) {
    initialize() {
        this.syncWith([f.A, g.A, _.A, p.Ay, A.A, v.A, E.A, y.A, b.A, m.A], Q, 200),
            this.syncWith([O.A, h.default], () => !0);
    }
    get applicationFilterQuery() {
        return k;
    }
    get applicationViewItems() {
        return M;
    }
    get launchableApplicationViewItems() {
        return H(M);
    }
    get libraryApplicationViewItems() {
        return B(M);
    }
    get filteredLibraryApplicationViewItems() {
        return Y(this.libraryApplicationViewItems, k);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return W(this.filteredLibraryApplicationViewItems, O.A.sortKey, O.A.sortDirection, h.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return K(M);
    }
    get hasFetchedApplications() {
        return U;
    }
}
x($, "displayName", "ApplicationViewStore");
let J = new $(d.h, {
    LIBRARY_APPLICATION_FILTER_UPDATE: q,
});
