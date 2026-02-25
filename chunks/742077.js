"use strict";
n.d(t, { A: () => X });
var r = n(91871),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
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
    E = n(189081),
    g = n(351906),
    A = n(90165),
    I = n(268387),
    T = n(194871),
    S = n(966846),
    y = n(927813),
    v = n(583613),
    N = n(403362),
    C = n(674378),
    b = n(723702),
    R = n(837921),
    O = n(144914),
    D = n(227841),
    L = n(652215);
let w = 5,
    x = l()().subtract(1, "week"),
    M = [],
    P = "",
    k = !1;
function U(e, t) {
    return e.application.name.localeCompare(t.application.name, p.default.locale, { sensitivity: "base" });
}
function G(e, t) {
    return null != e && l()(e.createdAt).isAfter(x) && 0 === t;
}
let F = {
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
    V = (0, v.L_)((e) => e.filter((e) => null != e.libraryApplication && e.shouldShowInLibrary)),
    B = (0, v.L_)((e) =>
        e.filter(
            (e) =>
                null != e.libraryApplication &&
                T.A.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId),
        ),
    ),
    H = (0, v.L_)((e, t) => e.filter((e) => i()(t.toLowerCase(), e.application.name.toLowerCase()))),
    j = (0, v.L_)((e, t, n, r) => {
        let i = F[t];
        if (null == i) return e;
        let s = [...e].sort(i);
        return n === L.tSW.DESCENDING ? s.reverse() : s;
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
    P = t;
}
function z(e, t, n, r, i) {
    if (!i && t.has(e.id)) return null;
    let s = d.A.getApplication(e.id);
    if (null == s) return null;
    let a = W(s, n);
    return (t.add(e.id), (0, C.XZ)(e) || T.A.isInstalled(e.id, e.branchId))
        ? {
              key: `${e.id}-${e.branchId}`,
              application: s,
              libraryApplication: e,
              lastPlayed: a,
              supportsCloudSync: null != e && T.A.supportsCloudSync(e.id, e.branchId),
              isNew: G(e, a),
              isLaunching: f.A.launchingGames.has(e.id),
              isRunning: r.has(e.id),
              isLaunchable: (0, O.A)({
                  LibraryApplicationStore: E.A,
                  LaunchableGameStore: f.A,
                  DispatchApplicationStore: T.A,
                  ConnectedAppsStore: h.A,
                  applicationId: e.id,
                  branchId: e.branchId,
              }),
              isUpdatingFlags: E.A.isUpdatingFlags(e.id, e.branchId),
              shouldShowInLibrary: (0, C.Tr)(s, e, g.A),
              defaultAction: (0, D.F)(e, T.A, S.A),
          }
        : null;
}
function $(e, t, n, r) {
    let i = null != e ? d.A.getApplication(e) : null;
    if (null == i || null == e || t.has(e)) return null;
    let s = W(i, n);
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
            isLaunchable: (0, O.A)({
                LibraryApplicationStore: E.A,
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
            let n = m.A.findGame(e);
            return null != n ? ((t[n.id] = e.lastFocused * y.A.Millis.SECOND), n.id) : null;
        }),
        i = Object.values(E.A.getAllLibraryApplications())
            .map((r) => z(r, n, t, e, !0))
            .filter(N.Vq),
        s = [...r.map((r) => $(r, n, t, e)).filter(N.Vq), ...i].sort((e, t) =>
            e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
        );
    return (
        (k = null != m.A.lastFetched && E.A.fetched),
        !a().isEqual(s, M) &&
            ((M = s),
            b.isPlatformEmbedded &&
                R.Ay.setSystemTrayApplications(
                    B(M)
                        .map((e) => e.application)
                        .slice(0, w),
                ),
            !0)
    );
}
class Z extends u.Ay.Store {
    static displayName = "ApplicationViewStore";
    initialize() {
        this.syncWith([d.A, m.A, f.A, _.Ay, T.A, S.A, E.A, A.A, g.A, h.A], q, 200),
            this.syncWith([I.A, p.default], () => !0);
    }
    get applicationFilterQuery() {
        return P;
    }
    get applicationViewItems() {
        return M;
    }
    get launchableApplicationViewItems() {
        return B(M);
    }
    get libraryApplicationViewItems() {
        return V(M);
    }
    get filteredLibraryApplicationViewItems() {
        return H(this.libraryApplicationViewItems, P);
    }
    get sortedFilteredLibraryApplicationViewItems() {
        return j(this.filteredLibraryApplicationViewItems, I.A.sortKey, I.A.sortDirection, p.default.locale);
    }
    get hiddenLibraryApplicationViewItems() {
        return Y(M);
    }
    get hasFetchedApplications() {
        return k;
    }
}
let X = new Z(c.h, { LIBRARY_APPLICATION_FILTER_UPDATE: K });
