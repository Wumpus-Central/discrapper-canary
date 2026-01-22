n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(544420),
    u = n(964486),
    d = n(627363),
    f = n(587895),
    p = n(429913),
    _ = n(524799),
    h = n(409626),
    m = n(265565),
    g = n(796812),
    E = n(379979);
function b(e) {
    let { applicationId: t, name: n, setPopoutRef: a, onClose: b, source: y } = e,
        O = (0, p.h)(t),
        A = (0, o.bG)([_.A], () => _.A.getGame(t)),
        {
            isFetching: v,
            fetchFailed: S,
            isFetchingDetectable: I,
            detectableFetchFailed: T,
        } = (0, o.cf)([f.A, _.A], () => ({
            isFetching: f.A.isFetchingApplication(t),
            fetchFailed: f.A.didFetchingApplicationFail(t),
            isFetchingDetectable: _.A.isFetching(t),
            detectableFetchFailed: _.A.didFetchingFail(t),
        })),
        C = i.useRef(null),
        N = i.useMemo(() => (0, h.u9)(), []);
    i.useEffect(() => {
        c.A.getDetectableGamesSupplemental([t]);
    }, [t]);
    let R = i.useCallback(() => {
        d.Ay.fetchApplication(t), c.A.getDetectableGamesSupplemental([t]);
    }, [t]);
    i.useEffect(() => {
        null == a || a(null == C ? void 0 : C.current);
    }, [C, a]),
        (0, u.Ay)(() => {
            var e;
            (0, h.rw)({
                source: y,
                viewId: N,
                applicationId: t,
                gameName: null != (e = null == A ? void 0 : A.name) ? e : "",
                profileType: h.HV.MiniProfile,
            });
        });
    let w = i.useMemo(
        () =>
            v || I
                ? (0, r.jsx)("div", {
                      className: s()(E.k, E.d),
                      children: (0, r.jsx)(l.y$y, {}),
                  })
                : S || T || null == O || null == A
                  ? (0, r.jsx)("div", {
                        className: E.k,
                        children: (0, r.jsx)(m.A, {
                            name: n,
                            onRetry: R,
                        }),
                    })
                  : (0, r.jsx)("div", {
                        className: E.k,
                        children: (0, r.jsx)(g.Ay, {
                            application: O,
                            detectedGame: A,
                            onClose: b,
                        }),
                    }),
        [v, I, S, T, O, A, n, R, b],
    );
    return (0, r.jsx)(l.lGe, {
        ref: C,
        "aria-label": null == O ? void 0 : O.name,
        children: w,
    });
}
