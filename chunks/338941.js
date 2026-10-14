t.d(a, { n: () => m, A: () => E });
var n,
    r = t(582128),
    o = t(17928),
    u = t(956518),
    l = t(950803),
    s = t(85982),
    i = t(627363),
    c = t(878014),
    d = t(869146),
    h = t(625180),
    f = t(91242),
    p = t(457827),
    w = t(705499),
    g = t(165610),
    A = t(652215),
    m =
        (((n = {}).Loading = "loading"),
        (n.AwaitingLaunch = "awaiting-launch"),
        (n.Launched = "launched"),
        (n.RenderingElsewhere = "rendering-elsewhere"),
        (n.NoApplication = "no-application"),
        (n.DoesNotSupportSurface = "does-not-support-surface"),
        (n.Error = "error"),
        n);
function E(e) {
    let { applicationId: a, surface: t, hostWindowKey: n, launch: m } = e,
        {
            frameId: E,
            frameExists: y,
            frameLaunched: F,
            surface: W,
            launchFailure: L,
            setFailed: M,
            lifecycle: b,
        } = (function (e) {
            let { applicationId: a, surface: t, hostWindowKey: n, launch: l } = e,
                s = r.useMemo(() => (0, g.VA)(a, t), [a, t]),
                h = r.useMemo(() => t, [s]),
                p = (0, o.bG)([f.A], () => f.A.getFrame(s), [s]),
                w = (0, o.bG)(
                    [d.A, f.A],
                    () => {
                        var e;
                        if (d.A.getWindowOpen(A.MLl.ACTIVITY_POPOUT) && f.A.getMainFrame()?.id === s) return !0;
                        let a =
                            ((e = f.A.getFrame(s)),
                            (0, g.x1)(e) && null != e.data.hostWindowKey && d.A.getWindowOpen(e.data.hostWindowKey)
                                ? e.data.hostWindowKey
                                : null);
                        return null != a && a !== n;
                    },
                    [s, n],
                ),
                { data: m, isLoading: E } = (0, i.YY)(a),
                y = (0, c.D)(m),
                F = null != (0, u.Ay)(a),
                W = l?.customId,
                [L, M] = r.useState(null),
                b = L?.frameId === s && L.customId === W ? L : null,
                k = r.useCallback((e) => M({ frameId: s, customId: W, error: e }), [s, W]);
            return {
                frameId: s,
                frameExists: null != p,
                frameLaunched: (0, g.x1)(p),
                surface: h,
                launchFailure: b,
                setFailed: k,
                lifecycle:
                    null == m || y
                        ? (0, g.x1)(p)
                            ? w
                                ? { state: "rendering-elsewhere" }
                                : null != m
                                  ? { state: "launched", frame: p, application: m }
                                  : { state: "loading", frame: void 0 }
                            : null != b
                              ? null == m
                                  ? E
                                      ? { state: "loading", frame: void 0 }
                                      : { state: "no-application" }
                                  : { state: "error" }
                              : p?.state === "loading"
                                ? { state: "loading", frame: p }
                                : F
                                  ? { state: "awaiting-launch" }
                                  : { state: "no-application" }
                        : { state: "does-not-support-surface" },
            };
        })({ applicationId: a, surface: t, hostWindowKey: n, launch: m }),
        { state: k } = b;
    return (
        r.useEffect(() => {
            if (null != n && F) return (h.A.attachFrameHostWindow(E, n), () => h.A.detachFrameHostWindow(E, n));
        }, [E, n, F]),
        r.useEffect(() => {
            y &&
                (0, w.w)(E) &&
                h.A.launchFrame({
                    applicationId: a,
                    surface: W,
                    hostWindowKey: n,
                    launch: m,
                    showErrorModal: !1,
                }).catch(M);
        }, [E, y, a, W, n, m, M]),
        r.useEffect(() => {
            "awaiting-launch" === k && e();
            async function e() {
                try {
                    await h.A.launchFrame({
                        applicationId: a,
                        surface: W,
                        hostWindowKey: n,
                        launch: m,
                        showErrorModal: !1,
                    });
                } catch (e) {
                    M(e);
                }
            }
        }, [k, a, W, n, m, M]),
        r.useEffect(() => {
            "error" === k &&
                null != L &&
                (0, l.f)(L.error, a).then((e) => {
                    let { message: a } = e;
                    return (0, s.A)(a);
                });
        }, [k, L, a]),
        r.useEffect(() => {
            "does-not-support-surface" === k && y && (0, p.r)(E);
        }, [k, y, E]),
        b
    );
}
