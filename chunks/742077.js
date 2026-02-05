"use strict";
n.d(t, { A: () => Q });
var r = n(91871),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    u = n(311907),
    c = n(73153),
    d = n(587895),
    _ = n(15285),
    f = n(651743),
    p = n(773669),
    h = n(134861),
    m = n(760751),
    g = n(189081),
    E = n(351906),
    A = n(90165),
    I = n(268387),
    T = n(194871),
    y = n(966846),
    S = n(927813),
    v = n(583613),
    C = n(403362),
    b = n(674378),
    N = n(723702),
    R = n(837921),
    O = n(144914),
    D = n(227841),
    L = n(652215);
let w = 5,
    x = l()().subtract(1, "week"),
    P = [],
    M = "",
    k = !1;
function U(e, t) {
    return e.application.name.localeCompare(t.application.name, p.default.locale, { sensitivity: "base" });
}
function G(e, t) {
    return null != e && l()(e.createdAt).isAfter(x) && 0 === t;
}
let V = {
        [L.DpB.NAME]: U,
        [L.DpB.PLATFORM]: (e, t, n) => {
            let r = e.libraryApplication.getDistributor(),
                i = t.libraryApplication.getDistributor();
            return r === i
                ? (n === L.tSW.DESCENDING ? -1 : 1) * U(e, t)
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
    F = (0, v.L_)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    B = (0, v.L_)((e) =>
        e.filter(
            (e) =>
                null != e.libraryApplication &&
                T.A.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId),
        ),
    ),
    j = (0, v.L_)((e, t) => e.filter((e) => i()(t.toLowerCase(), e.application.name.toLowerCase()))),
    H = (0, v.L_)((e, t, n, r) => {
        let i = V[t];
        if (null == i) return e;
        let a = [...e].sort(i);
        return n === L.tSW.DESCENDING ? a.reverse() : a;
    }),
    Y = (0, v.L_)((e) => e.filter((e) => null != e.libraryApplication && e.libraryApplication.isHidden()));
function W(e, t) {
    let n = A.A.getCurrentUserStatisticsForApplication(e.id);
    if (null != n) return new Date(n.last_played_at).getTime();
    let r = t[e.id];
    return null != r ? r : 0;
}
function K(e) {
    let { query: t } = e;
    M = t;
}
function z(e, t, n, r, i) {
    if (!i && t.has(e.id)) return null;
    let a = d.A.getApplication(e.id);
    if (null == a) return null;
    let s = W(a, n);
    return (t.add(e.id), (0, b.XZ)(e) || T.A.isInstalled(e.id, e.branchId))
        ? {
              key: `${e.id}-${e.branchId}`,
              application: a,
              libraryApplication: e,
              lastPlayed: s,
              supportsCloudSync: null != e && T.A.supportsCloudSync(e.id, e.branchId),
              isNew: G(e, s),
              isLaunching: f.A.launchingGames.has(e.id),
              isRunning: r.has(e.id),
              isLaunchable: (0, O.A)({
                  LibraryApplicationStore: g.A,
                  LaunchableGameStore: f.A,
                  DispatchApplicationStore: T.A,
                  ConnectedAppsStore: h.A,
                  applicationId: e.id,
                  branchId: e.branchId,
              }),
              isUpdatingFlags: g.A.isUpdatingFlags(e.id, e.branchId),
              shouldShowInLibrary: (0, b.Tr)(a, e, E.A),
              defaultAction: (0, D.F)(e, T.A, y.A),
          }
        : null;
}
function $(e, t, n, r) {
    let i = null != e ? d.A.getApplication(e) : null;
    if (null == i || null == e || t.has(e)) return null;
    let a = W(i, n);
    return (
        t.add(e),
        {
            key: e,
            application: i,
            lastPlayed: a,
            supportsCloudSync: !1,
            isNew: !1,
            isLaunching: f.A.launchingGames.has(e),
            isRunning: r.has(e),
            isLaunchable: (0, O.A)({
                LibraryApplicationStore: g.A,
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
}
function q() {
    let e = new Set(_.Ay.getRunningVerifiedApplicationIds()),
        t = {},
        n = new Set(),
        r = _.Ay.getGamesSeen(!1, !1).map((e) => {
            let n = m.A.getGameByGameData(e);
            return null != n ? ((t[n.id] = e.lastFocused * S.A.Millis.SECOND), n.id) : null;
        }),
        i = Object.values(g.A.getAllLibraryApplications())
            .map((r) => z(r, n, t, e, !0))
            .filter(C.Vq),
        a = [...r.map((r) => $(r, n, t, e)).filter(C.Vq), ...i].sort((e, t) =>
            e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
        );
    return (
        (k = null != m.A.lastFetched && g.A.fetched),
        !s().isEqual(a, P) &&
            ((P = a),
            N.isPlatformEmbedded &&
                R.Ay.setSystemTrayApplications(
                    B(P)
                        .map((e) => e.application)
                        .slice(0, w),
                ),
            !0)
    );
}
class Z extends u.Ay.Store {
    static displayName = "ApplicationViewStore";
    initialize() {
        this.syncWith([d.A, m.A, f.A, _.Ay, T.A, y.A, g.A, A.A, E.A, h.A], q, 200),
            this.syncWith([I.A, p.default], () => !0);
    }
    get applicationFilterQuery() {
        return M;
    }
    get applicationViewItems() {
        return P;
    }
    get launchableApplicationViewItems() {
        return B(P);
    }
    get libraryApplicationViewItems() {
        return F(P);
    }
    get filteredLibraryApplicationViewItems() {
        return j(this.libraryApplicationViewItems, M);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return H(this.filteredLibraryApplicationViewItems, I.A.sortKey, I.A.sortDirection, p.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return Y(P);
    }
    get hasFetchedApplications() {
        return k;
    }
}
let Q = new Z(c.h, { LIBRARY_APPLICATION_FILTER_UPDATE: K });
