"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(964486),
    c = n(627363),
    d = n(587895),
    _ = n(429913),
    f = n(885151),
    p = n(409626),
    h = n(265565),
    m = n(796812),
    E = n(379979);
function g(e) {
    let { applicationId: t, name: n, setPopoutRef: s, onClose: g, source: A } = e,
        I = (0, _.h)(t),
        { data: T, isLoading: S, error: y, refetch: v } = (0, f.k)(t),
        N = T?.supplementalData ?? null,
        C = null != y,
        { isFetching: R, fetchFailed: O } = (0, o.cf)([d.A], () => ({
            isFetching: d.A.isFetchingApplication(t),
            fetchFailed: d.A.didFetchingApplicationFail(t),
        })),
        b = i.useRef(null),
        D = i.useMemo(() => (0, p.u9)(), []),
        L = i.useCallback(() => {
            c.Ay.fetchApplication(t), v();
        }, [t, v]);
    i.useEffect(() => {
        s?.(b?.current);
    }, [b, s]),
        (0, u.Ay)(() => {
            (0, p.rw)({
                source: A,
                viewId: D,
                applicationId: t,
                gameName: N?.name ?? "",
                profileType: p.HV.MiniProfile,
            });
        });
    let w = i.useMemo(
        () =>
            R || S
                ? (0, r.jsx)("div", { className: a()(E.k, E.d), children: (0, r.jsx)(l.y$y, {}) })
                : O || C || null == I || null == N
                  ? (0, r.jsx)("div", { className: E.k, children: (0, r.jsx)(h.A, { name: n, onRetry: L }) })
                  : (0, r.jsx)("div", {
                        className: E.k,
                        children: (0, r.jsx)(m.Ay, { application: I, detectedGame: N, onClose: g }),
                    }),
        [R, S, O, C, I, N, n, L, g],
    );
    return (0, r.jsx)(l.lGe, { ref: b, "aria-label": I?.name, children: w });
}
