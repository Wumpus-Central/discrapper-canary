n.d(t, { A: () => K });
var i = n(91871),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(536637),
    o = n.n(l),
    d = n(17928),
    c = n(228366),
    u = n(587895),
    _ = n(952818),
    E = n(651743),
    A = n(773669),
    h = n(134861),
    I = n(760751),
    f = n(189081),
    p = n(351906),
    T = n(90165),
    m = n(268387),
    g = n(340829),
    S = n(966846),
    N = n(927813),
    C = n(583613),
    O = n(403362),
    R = n(674378),
    L = n(723702),
    y = n(19575),
    D = n(144914),
    v = n(227841),
    b = n(652215);
let M = o()().subtract(1, "week"),
    P = [],
    U = "",
    w = !1;
function G(e, t) {
    return e.application.name.localeCompare(t.application.name, A.default.locale, { sensitivity: "base" });
}
let x = {
        [b.DpB.NAME]: G,
        [b.DpB.PLATFORM]: (e, t, n) => {
            let i = e.libraryApplication.getDistributor(),
                r = t.libraryApplication.getDistributor();
            return i === r
                ? (n === b.tSW.DESCENDING ? -1 : 1) * G(e, t)
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
    k = (0, C.L_)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    F = (0, C.L_)((e) =>
        e.filter(
            (e) =>
                null != e.libraryApplication &&
                g.A.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId),
        ),
    ),
    V = (0, C.L_)((e, t) => e.filter((e) => r()(t.toLowerCase(), e.application.name.toLowerCase()))),
    B = (0, C.L_)((e, t, n, i) => {
        let r = x[t];
        if (null == r) return e;
        let a = [...e].sort(r);
        return n === b.tSW.DESCENDING ? a.reverse() : a;
    }),
    H = (0, C.L_)((e) => e.filter((e) => null != e.libraryApplication && e.libraryApplication.isHidden()));
function j(e, t) {
    let n = T.A.getCurrentUserStatisticsForApplication(e.id);
    if (null != n) return new Date(n.last_played_at).getTime();
    let i = t[e.id];
    return null != i ? i : 0;
}
function W() {
    let e = new Set(_.Ay.getRunningVerifiedApplicationIds()),
        t = {},
        n = new Set(),
        i = _.Ay.getGamesSeen(!1, !1).map((e) => {
            let n = I.A.findGame(e);
            return null != n ? ((t[n.id] = e.lastFocused * N.A.Millis.SECOND), n.id) : null;
        }),
        r = Object.values(f.A.getAllLibraryApplications())
            .map((i) =>
                (function (e, t, n, i, r) {
                    if (!r && t.has(e.id)) return null;
                    let a = u.A.getApplication(e.id);
                    if (null == a) return null;
                    let s = j(a, n);
                    return (t.add(e.id), (0, R.XZ)(e) || g.A.isInstalled(e.id, e.branchId))
                        ? {
                              key: `${e.id}-${e.branchId}`,
                              application: a,
                              libraryApplication: e,
                              lastPlayed: s,
                              supportsCloudSync: null != e && g.A.supportsCloudSync(e.id, e.branchId),
                              isNew: null != e && o()(e.createdAt).isAfter(M) && 0 === s,
                              isLaunching: E.A.launchingGames.has(e.id),
                              isRunning: i.has(e.id),
                              isLaunchable: (0, D.A)({
                                  LibraryApplicationStore: f.A,
                                  LaunchableGameStore: E.A,
                                  DispatchApplicationStore: g.A,
                                  ConnectedAppsStore: h.A,
                                  applicationId: e.id,
                                  branchId: e.branchId,
                              }),
                              isUpdatingFlags: f.A.isUpdatingFlags(e.id, e.branchId),
                              shouldShowInLibrary: (0, R.Tr)(a, e, p.A),
                              defaultAction: (0, v.F)(e, g.A, S.A),
                          }
                        : null;
                })(i, n, t, e, !0),
            )
            .filter(O.Vq),
        a = [
            ...i
                .map((i) =>
                    (function (e, t, n, i) {
                        let r = null != e ? u.A.getApplication(e) : null;
                        if (null == r || null == e || t.has(e)) return null;
                        let a = j(r, n);
                        return (
                            t.add(e),
                            {
                                key: e,
                                application: r,
                                lastPlayed: a,
                                supportsCloudSync: !1,
                                isNew: !1,
                                isLaunching: E.A.launchingGames.has(e),
                                isRunning: i.has(e),
                                isLaunchable: (0, D.A)({
                                    LibraryApplicationStore: f.A,
                                    LaunchableGameStore: E.A,
                                    DispatchApplicationStore: g.A,
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
                    })(i, n, t, e),
                )
                .filter(O.Vq),
            ...r,
        ].sort((e, t) => (e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1));
    return (
        (w = null != I.A.lastFetched && f.A.fetched),
        !s().isEqual(a, P) &&
            ((P = a),
            L.isPlatformEmbedded &&
                y.Ay.setSystemTrayApplications(
                    F(P)
                        .map((e) => e.application)
                        .slice(0, 5),
                ),
            !0)
    );
}
class Y extends d.Ay.Store {
    static displayName = "ApplicationViewStore";
    initialize() {
        this.syncWith([u.A, I.A, E.A, _.Ay, g.A, S.A, f.A, T.A, p.A, h.A], W, 200),
            this.syncWith([m.A, A.default], () => !0);
    }
    get applicationFilterQuery() {
        return U;
    }
    get applicationViewItems() {
        return P;
    }
    get launchableApplicationViewItems() {
        return F(P);
    }
    get libraryApplicationViewItems() {
        return k(P);
    }
    get filteredLibraryApplicationViewItems() {
        return V(this.libraryApplicationViewItems, U);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return B(this.filteredLibraryApplicationViewItems, m.A.sortKey, m.A.sortDirection, A.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return H(P);
    }
    get hasFetchedApplications() {
        return w;
    }
}
let K = new Y(c.h, {
    LIBRARY_APPLICATION_FILTER_UPDATE: function (e) {
        let { query: t } = e;
        U = t;
    },
});
