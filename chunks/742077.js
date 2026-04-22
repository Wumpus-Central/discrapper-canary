"use strict";
n.d(t, { A: () => K });
var r = n(91871),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(989349),
    l = n.n(o),
    u = n(311907),
    d = n(73153),
    c = n(587895),
    _ = n(15285),
    f = n(651743),
    E = n(773669),
    h = n(134861),
    p = n(760751),
    m = n(189081),
    g = n(351906),
    A = n(90165),
    I = n(268387),
    T = n(194871),
    S = n(966846),
    y = n(927813),
    N = n(583613),
    O = n(403362),
    R = n(674378),
    v = n(723702),
    C = n(837921),
    b = n(144914),
    D = n(227841),
    L = n(652215);
let w = l()().subtract(1, "week"),
    M = [],
    P = "",
    U = !1;
function k(e, t) {
    return e.application.name.localeCompare(t.application.name, E.default.locale, { sensitivity: "base" });
}
let x = {
        [L.DpB.NAME]: k,
        [L.DpB.PLATFORM]: (e, t, n) => {
            let r = e.libraryApplication.getDistributor(),
                i = t.libraryApplication.getDistributor();
            return r === i
                ? (n === L.tSW.DESCENDING ? -1 : 1) * k(e, t)
                : null == r
                  ? 1
                  : null == i
                    ? -1
                    : r.localeCompare(i);
        },
        [L.DpB.LAST_PLAYED]: (e, t) =>
            e.isNew && !t.isNew
                ? -1
                : !e.isNew && t.isNew
                  ? 1
                  : e.lastPlayed === t.lastPlayed
                    ? 0
                    : e.lastPlayed > t.lastPlayed
                      ? -1
                      : 1,
        [L.DpB.ACTIONS]: null,
    },
    G = (0, N.L_)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    V = (0, N.L_)((e) =>
        e.filter(
            (e) =>
                null != e.libraryApplication &&
                T.A.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId),
        ),
    ),
    F = (0, N.L_)((e, t) => e.filter((e) => i()(t.toLowerCase(), e.application.name.toLowerCase()))),
    B = (0, N.L_)((e, t, n, r) => {
        let i = x[t];
        if (null == i) return e;
        let s = [...e].sort(i);
        return n === L.tSW.DESCENDING ? s.reverse() : s;
    }),
    H = (0, N.L_)((e) => e.filter((e) => null != e.libraryApplication && e.libraryApplication.isHidden()));
function Y(e, t) {
    let n = A.A.getCurrentUserStatisticsForApplication(e.id);
    if (null != n) return new Date(n.last_played_at).getTime();
    let r = t[e.id];
    return null != r ? r : 0;
}
function W() {
    let e = new Set(_.Ay.getRunningVerifiedApplicationIds()),
        t = {},
        n = new Set(),
        r = _.Ay.getGamesSeen(!1, !1).map((e) => {
            let n = p.A.findGame(e);
            return null != n ? ((t[n.id] = e.lastFocused * y.A.Millis.SECOND), n.id) : null;
        }),
        i = Object.values(m.A.getAllLibraryApplications())
            .map((r) =>
                (function (e, t, n, r, i) {
                    if (!i && t.has(e.id)) return null;
                    let s = c.A.getApplication(e.id);
                    if (null == s) return null;
                    let a = Y(s, n);
                    return (t.add(e.id), (0, R.XZ)(e) || T.A.isInstalled(e.id, e.branchId))
                        ? {
                              key: `${e.id}-${e.branchId}`,
                              application: s,
                              libraryApplication: e,
                              lastPlayed: a,
                              supportsCloudSync: null != e && T.A.supportsCloudSync(e.id, e.branchId),
                              isNew: null != e && l()(e.createdAt).isAfter(w) && 0 === a,
                              isLaunching: f.A.launchingGames.has(e.id),
                              isRunning: r.has(e.id),
                              isLaunchable: (0, b.A)({
                                  LibraryApplicationStore: m.A,
                                  LaunchableGameStore: f.A,
                                  DispatchApplicationStore: T.A,
                                  ConnectedAppsStore: h.A,
                                  applicationId: e.id,
                                  branchId: e.branchId,
                              }),
                              isUpdatingFlags: m.A.isUpdatingFlags(e.id, e.branchId),
                              shouldShowInLibrary: (0, R.Tr)(s, e, g.A),
                              defaultAction: (0, D.F)(e, T.A, S.A),
                          }
                        : null;
                })(r, n, t, e, !0),
            )
            .filter(O.Vq),
        s = [
            ...r
                .map((r) =>
                    (function (e, t, n, r) {
                        let i = null != e ? c.A.getApplication(e) : null;
                        if (null == i || null == e || t.has(e)) return null;
                        let s = Y(i, n);
                        return (
                            t.add(e),
                            {
                                key: e,
                                application: i,
                                lastPlayed: s,
                                supportsCloudSync: !1,
                                isNew: !1,
                                isLaunching: f.A.launchingGames.has(e),
                                isRunning: r.has(e),
                                isLaunchable: (0, b.A)({
                                    LibraryApplicationStore: m.A,
                                    LaunchableGameStore: f.A,
                                    DispatchApplicationStore: T.A,
                                    ConnectedAppsStore: h.A,
                                    applicationId: e,
                                    branchId: null,
                                }),
                                isUpdatingFlags: !1,
                                shouldShowInLibrary: !1,
                                libraryApplication: null,
                                defaultAction: null,
                            }
                        );
                    })(r, n, t, e),
                )
                .filter(O.Vq),
            ...i,
        ].sort((e, t) => (e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1));
    return (
        (U = null != p.A.lastFetched && m.A.fetched),
        !a().isEqual(s, M) &&
            ((M = s),
            v.isPlatformEmbedded &&
                C.Ay.setSystemTrayApplications(
                    V(M)
                        .map((e) => e.application)
                        .slice(0, 5),
                ),
            !0)
    );
}
class j extends u.Ay.Store {
    static displayName = "ApplicationViewStore";
    initialize() {
        this.syncWith([c.A, p.A, f.A, _.Ay, T.A, S.A, m.A, A.A, g.A, h.A], W, 200),
            this.syncWith([I.A, E.default], () => !0);
    }
    get applicationFilterQuery() {
        return P;
    }
    get applicationViewItems() {
        return M;
    }
    get launchableApplicationViewItems() {
        return V(M);
    }
    get libraryApplicationViewItems() {
        return G(M);
    }
    get filteredLibraryApplicationViewItems() {
        return F(this.libraryApplicationViewItems, P);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return B(this.filteredLibraryApplicationViewItems, I.A.sortKey, I.A.sortDirection, E.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return H(M);
    }
    get hasFetchedApplications() {
        return U;
    }
}
let K = new j(d.h, {
    LIBRARY_APPLICATION_FILTER_UPDATE: function (e) {
        let { query: t } = e;
        P = t;
    },
});
