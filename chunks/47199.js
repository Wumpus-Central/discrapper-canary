"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(544420),
    c = n(964486),
    d = n(627363),
    _ = n(587895),
    f = n(429913),
    p = n(524799),
    h = n(409626),
    m = n(265565),
    g = n(796812),
    E = n(379979);
function A(e) {
    let { applicationId: t, name: n, setPopoutRef: a, onClose: A, source: I } = e,
        T = (0, f.h)(t),
        y = (0, o.bG)([p.A], () => p.A.getGame(t)),
        {
            isFetching: S,
            fetchFailed: v,
            isFetchingDetectable: C,
            detectableFetchFailed: b,
        } = (0, o.cf)([_.A, p.A], () => ({
            isFetching: _.A.isFetchingApplication(t),
            fetchFailed: _.A.didFetchingApplicationFail(t),
            isFetchingDetectable: p.A.isFetching(t),
            detectableFetchFailed: p.A.didFetchingFail(t),
        })),
        N = i.useRef(null),
        R = i.useMemo(() => (0, h.u9)(), []);
    i.useEffect(() => {
        u.A.getDetectableGamesSupplemental([t]);
    }, [t]);
    let O = i.useCallback(() => {
        d.Ay.fetchApplication(t), u.A.getDetectableGamesSupplemental([t]);
    }, [t]);
    i.useEffect(() => {
        a?.(N?.current);
    }, [N, a]),
        (0, c.Ay)(() => {
            (0, h.rw)({
                source: I,
                viewId: R,
                applicationId: t,
                gameName: y?.name ?? "",
                profileType: h.HV.MiniProfile,
            });
        });
    let D = i.useMemo(
        () =>
            S || C
                ? (0, r.jsx)("div", { className: s()(E.k, E.d), children: (0, r.jsx)(l.y$y, {}) })
                : v || b || null == T || null == y
                  ? (0, r.jsx)("div", { className: E.k, children: (0, r.jsx)(m.A, { name: n, onRetry: O }) })
                  : (0, r.jsx)("div", {
                        className: E.k,
                        children: (0, r.jsx)(g.Ay, { application: T, detectedGame: y, onClose: A }),
                    }),
        [S, C, v, b, T, y, n, O, A],
    );
    return (0, r.jsx)(l.lGe, { ref: N, "aria-label": T?.name, children: D });
}
