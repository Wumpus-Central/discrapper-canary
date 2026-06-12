"use strict";
n.d(t, { A: () => K });
var i = n(91871),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(989349),
    l = n.n(o),
    u = n(17928),
    c = n(228366),
    d = n(587895),
    _ = n(952818),
    h = n(651743),
    f = n(773669),
    p = n(134861),
    E = n(760751),
    m = n(189081),
    g = n(351906),
    A = n(90165),
    I = n(268387),
    T = n(340829),
    S = n(966846),
    y = n(927813),
    N = n(583613),
    v = n(403362),
    C = n(674378),
    R = n(723702),
    O = n(19575),
    b = n(144914),
    D = n(227841),
    L = n(652215);
let w = l()().subtract(1, "week"),
    M = [],
    P = "",
    x = !1;
function k(e, t) {
    return e.application.name.localeCompare(t.application.name, f.default.locale, { sensitivity: "base" });
}
let U = {
        [L.DpB.NAME]: k,
        [L.DpB.PLATFORM]: (e, t, n) => {
            let i = e.libraryApplication.getDistributor(),
                r = t.libraryApplication.getDistributor();
            return i === r
                ? (n === L.tSW.DESCENDING ? -1 : 1) * k(e, t)
                : null == i
                  ? 1
                  : null == r
                    ? -1
                    : i.localeCompare(r);
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
    F = (0, N.L_)((e) =>
        e.filter(
            (e) =>
                null != e.libraryApplication &&
                T.A.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId),
        ),
    ),
    V = (0, N.L_)((e, t) => e.filter((e) => r()(t.toLowerCase(), e.application.name.toLowerCase()))),
    B = (0, N.L_)((e, t, n, i) => {
        let r = U[t];
        if (null == r) return e;
        let s = [...e].sort(r);
        return n === L.tSW.DESCENDING ? s.reverse() : s;
    }),
    H = (0, N.L_)((e) => e.filter((e) => null != e.libraryApplication && e.libraryApplication.isHidden()));
function j(e, t) {
    let n = A.A.getCurrentUserStatisticsForApplication(e.id);
    if (null != n) return new Date(n.last_played_at).getTime();
    let i = t[e.id];
    return null != i ? i : 0;
}
function Y() {
    let e = new Set(_.Ay.getRunningVerifiedApplicationIds()),
        t = {},
        n = new Set(),
        i = _.Ay.getGamesSeen(!1, !1).map((e) => {
            let n = E.A.findGame(e);
            return null != n ? ((t[n.id] = e.lastFocused * y.A.Millis.SECOND), n.id) : null;
        }),
        r = Object.values(m.A.getAllLibraryApplications())
            .map((i) =>
                (function (e, t, n, i, r) {
                    if (!r && t.has(e.id)) return null;
                    let s = d.A.getApplication(e.id);
                    if (null == s) return null;
                    let a = j(s, n);
                    return (t.add(e.id), (0, C.XZ)(e) || T.A.isInstalled(e.id, e.branchId))
                        ? {
                              key: `${e.id}-${e.branchId}`,
                              application: s,
                              libraryApplication: e,
                              lastPlayed: a,
                              supportsCloudSync: null != e && T.A.supportsCloudSync(e.id, e.branchId),
                              isNew: null != e && l()(e.createdAt).isAfter(w) && 0 === a,
                              isLaunching: h.A.launchingGames.has(e.id),
                              isRunning: i.has(e.id),
                              isLaunchable: (0, b.A)({
                                  LibraryApplicationStore: m.A,
                                  LaunchableGameStore: h.A,
                                  DispatchApplicationStore: T.A,
                                  ConnectedAppsStore: p.A,
                                  applicationId: e.id,
                                  branchId: e.branchId,
                              }),
                              isUpdatingFlags: m.A.isUpdatingFlags(e.id, e.branchId),
                              shouldShowInLibrary: (0, C.Tr)(s, e, g.A),
                              defaultAction: (0, D.F)(e, T.A, S.A),
                          }
                        : null;
                })(i, n, t, e, !0),
            )
            .filter(v.Vq),
        s = [
            ...i
                .map((i) =>
                    (function (e, t, n, i) {
                        let r = null != e ? d.A.getApplication(e) : null;
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
                                isLaunching: h.A.launchingGames.has(e),
                                isRunning: i.has(e),
                                isLaunchable: (0, b.A)({
                                    LibraryApplicationStore: m.A,
                                    LaunchableGameStore: h.A,
                                    DispatchApplicationStore: T.A,
                                    ConnectedAppsStore: p.A,
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
                .filter(v.Vq),
            ...r,
        ].sort((e, t) => (e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1));
    return (
        (x = null != E.A.lastFetched && m.A.fetched),
        !a().isEqual(s, M) &&
            ((M = s),
            R.isPlatformEmbedded &&
                O.Ay.setSystemTrayApplications(
                    F(M)
                        .map((e) => e.application)
                        .slice(0, 5),
                ),
            !0)
    );
}
class W extends u.Ay.Store {
    static displayName = "ApplicationViewStore";
    initialize() {
        this.syncWith([d.A, E.A, h.A, _.Ay, T.A, S.A, m.A, A.A, g.A, p.A], Y, 200),
            this.syncWith([I.A, f.default], () => !0);
    }
    get applicationFilterQuery() {
        return P;
    }
    get applicationViewItems() {
        return M;
    }
    get launchableApplicationViewItems() {
        return F(M);
    }
    get libraryApplicationViewItems() {
        return G(M);
    }
    get filteredLibraryApplicationViewItems() {
        return V(this.libraryApplicationViewItems, P);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return B(this.filteredLibraryApplicationViewItems, I.A.sortKey, I.A.sortDirection, f.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return H(M);
    }
    get hasFetchedApplications() {
        return x;
    }
}
let K = new W(c.h, {
    LIBRARY_APPLICATION_FILTER_UPDATE: function (e) {
        let { query: t } = e;
        P = t;
    },
});
