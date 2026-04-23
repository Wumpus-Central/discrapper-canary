"use strict";
n.d(t, { A: () => K });
var i = n(91871),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(989349),
    l = n.n(o),
    d = n(17928),
    _ = n(228366),
    u = n(587895),
    c = n(328153),
    E = n(651743),
    h = n(773669),
    m = n(134861),
    f = n(760751),
    g = n(189081),
    p = n(351906),
    A = n(90165),
    I = n(268387),
    T = n(340829),
    S = n(966846),
    N = n(927813),
    C = n(583613),
    R = n(403362),
    O = n(674378),
    y = n(723702),
    v = n(19575),
    D = n(144914),
    L = n(227841),
    b = n(652215);
let w = l()().subtract(1, "week"),
    P = [],
    k = "",
    M = !1;
function U(e, t) {
    return e.application.name.localeCompare(t.application.name, h.default.locale, { sensitivity: "base" });
}
let x = {
        [b.DpB.NAME]: U,
        [b.DpB.PLATFORM]: (e, t, n) => {
            let i = e.libraryApplication.getDistributor(),
                r = t.libraryApplication.getDistributor();
            return i === r
                ? (n === b.tSW.DESCENDING ? -1 : 1) * U(e, t)
                : null == i
                  ? 1
                  : null == r
                    ? -1
                    : i.localeCompare(r);
        },
        [b.DpB.LAST_PLAYED]: (e, t) =>
            e.isNew && !t.isNew
                ? -1
                : !e.isNew && t.isNew
                  ? 1
                  : e.lastPlayed === t.lastPlayed
                    ? 0
                    : e.lastPlayed > t.lastPlayed
                      ? -1
                      : 1,
        [b.DpB.ACTIONS]: null,
    },
    G = (0, C.L_)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    V = (0, C.L_)((e) =>
        e.filter(
            (e) =>
                null != e.libraryApplication &&
                T.A.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId),
        ),
    ),
    F = (0, C.L_)((e, t) => e.filter((e) => r()(t.toLowerCase(), e.application.name.toLowerCase()))),
    B = (0, C.L_)((e, t, n, i) => {
        let r = x[t];
        if (null == r) return e;
        let s = [...e].sort(r);
        return n === b.tSW.DESCENDING ? s.reverse() : s;
    }),
    H = (0, C.L_)((e) => e.filter((e) => null != e.libraryApplication && e.libraryApplication.isHidden()));
function j(e, t) {
    let n = A.A.getCurrentUserStatisticsForApplication(e.id);
    if (null != n) return new Date(n.last_played_at).getTime();
    let i = t[e.id];
    return null != i ? i : 0;
}
function W() {
    let e = new Set(c.Ay.getRunningVerifiedApplicationIds()),
        t = {},
        n = new Set(),
        i = c.Ay.getGamesSeen(!1, !1).map((e) => {
            let n = f.A.findGame(e);
            return null != n ? ((t[n.id] = e.lastFocused * N.A.Millis.SECOND), n.id) : null;
        }),
        r = Object.values(g.A.getAllLibraryApplications())
            .map((i) =>
                (function (e, t, n, i, r) {
                    if (!r && t.has(e.id)) return null;
                    let s = u.A.getApplication(e.id);
                    if (null == s) return null;
                    let a = j(s, n);
                    return (t.add(e.id), (0, O.XZ)(e) || T.A.isInstalled(e.id, e.branchId))
                        ? {
                              key: `${e.id}-${e.branchId}`,
                              application: s,
                              libraryApplication: e,
                              lastPlayed: a,
                              supportsCloudSync: null != e && T.A.supportsCloudSync(e.id, e.branchId),
                              isNew: null != e && l()(e.createdAt).isAfter(w) && 0 === a,
                              isLaunching: E.A.launchingGames.has(e.id),
                              isRunning: i.has(e.id),
                              isLaunchable: (0, D.A)({
                                  LibraryApplicationStore: g.A,
                                  LaunchableGameStore: E.A,
                                  DispatchApplicationStore: T.A,
                                  ConnectedAppsStore: m.A,
                                  applicationId: e.id,
                                  branchId: e.branchId,
                              }),
                              isUpdatingFlags: g.A.isUpdatingFlags(e.id, e.branchId),
                              shouldShowInLibrary: (0, O.Tr)(s, e, p.A),
                              defaultAction: (0, L.F)(e, T.A, S.A),
                          }
                        : null;
                })(i, n, t, e, !0),
            )
            .filter(R.Vq),
        s = [
            ...i
                .map((i) =>
                    (function (e, t, n, i) {
                        let r = null != e ? u.A.getApplication(e) : null;
                        if (null == r || null == e || t.has(e)) return null;
                        let s = j(r, n);
                        return (
                            t.add(e),
                            {
                                key: e,
                                application: r,
                                lastPlayed: s,
                                supportsCloudSync: !1,
                                isNew: !1,
                                isLaunching: E.A.launchingGames.has(e),
                                isRunning: i.has(e),
                                isLaunchable: (0, D.A)({
                                    LibraryApplicationStore: g.A,
                                    LaunchableGameStore: E.A,
                                    DispatchApplicationStore: T.A,
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
                    })(i, n, t, e),
                )
                .filter(R.Vq),
            ...r,
        ].sort((e, t) => (e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1));
    return (
        (M = null != f.A.lastFetched && g.A.fetched),
        !a().isEqual(s, P) &&
            ((P = s),
            y.isPlatformEmbedded &&
                v.Ay.setSystemTrayApplications(
                    V(P)
                        .map((e) => e.application)
                        .slice(0, 5),
                ),
            !0)
    );
}
class Y extends d.Ay.Store {
    static displayName = "ApplicationViewStore";
    initialize() {
        this.syncWith([u.A, f.A, E.A, c.Ay, T.A, S.A, g.A, A.A, p.A, m.A], W, 200),
            this.syncWith([I.A, h.default], () => !0);
    }
    get applicationFilterQuery() {
        return k;
    }
    get applicationViewItems() {
        return P;
    }
    get launchableApplicationViewItems() {
        return V(P);
    }
    get libraryApplicationViewItems() {
        return G(P);
    }
    get filteredLibraryApplicationViewItems() {
        return F(this.libraryApplicationViewItems, k);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return B(this.filteredLibraryApplicationViewItems, I.A.sortKey, I.A.sortDirection, h.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return H(P);
    }
    get hasFetchedApplications() {
        return M;
    }
}
let K = new Y(_.h, {
    LIBRARY_APPLICATION_FILTER_UPDATE: function (e) {
        let { query: t } = e;
        k = t;
    },
});
