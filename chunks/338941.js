t.d(a, { n: () => A, A: () => m });
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
    g = t(165610),
    w = t(652215),
    A =
        (((n = {}).Loading = "loading"),
        (n.AwaitingLaunch = "awaiting-launch"),
        (n.Launched = "launched"),
        (n.RenderingElsewhere = "rendering-elsewhere"),
        (n.NoApplication = "no-application"),
        (n.DoesNotSupportSurface = "does-not-support-surface"),
        (n.Error = "error"),
        n);
function m(e) {
    let { applicationId: a, surface: t, hostWindowKey: n, launch: A } = e,
        {
            frameId: m,
            frameExists: E,
            frameLaunched: y,
            surface: W,
            launchFailure: F,
            setFailed: L,
            lifecycle: b,
        } = (function (e) {
            let { applicationId: a, surface: t, hostWindowKey: n, launch: l } = e,
                s = r.useMemo(() => (0, g.VA)(a, t), [a, t]),
                h = r.useMemo(() => t, [s]),
                p = (0, o.bG)([f.A], () => f.A.getFrame(s), [s]),
                A = (0, o.bG)(
                    [d.A, f.A],
                    () => {
                        var e;
                        if (d.A.getWindowOpen(w.MLl.ACTIVITY_POPOUT) && f.A.getMainFrame()?.id === s) return !0;
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
                W = null != (0, u.Ay)(a),
                F = l?.customId,
                [L, b] = r.useState(null),
                k = L?.frameId === s && L.customId === F ? L : null,
                I = r.useCallback((e) => b({ frameId: s, customId: F, error: e }), [s, F]);
            return {
                frameId: s,
                frameExists: null != p,
                frameLaunched: (0, g.x1)(p),
                surface: h,
                launchFailure: k,
                setFailed: I,
                lifecycle:
                    null == m || y
                        ? (0, g.x1)(p)
                            ? A
                                ? { state: "rendering-elsewhere" }
                                : null != m
                                  ? { state: "launched", frame: p, application: m }
                                  : { state: "loading", frame: void 0 }
                            : null != k
                              ? null == m
                                  ? E
                                      ? { state: "loading", frame: void 0 }
                                      : { state: "no-application" }
                                  : { state: "error" }
                              : p?.state === "loading"
                                ? { state: "loading", frame: p }
                                : W
                                  ? { state: "awaiting-launch" }
                                  : { state: "no-application" }
                        : { state: "does-not-support-surface" },
            };
        })({ applicationId: a, surface: t, hostWindowKey: n, launch: A }),
        { state: k } = b;
    return (
        r.useEffect(() => {
            if (null != n && y) return (h.A.attachFrameHostWindow(m, n), () => h.A.detachFrameHostWindow(m, n));
        }, [m, n, y]),
        r.useEffect(() => {
            "awaiting-launch" === k && e();
            async function e() {
                try {
                    await h.A.launchFrame({
                        applicationId: a,
                        surface: W,
                        hostWindowKey: n,
                        launch: A,
                        showErrorModal: !1,
                    });
                } catch (e) {
                    L(e);
                }
            }
        }, [k, a, W, n, A, L]),
        r.useEffect(() => {
            "error" === k &&
                null != F &&
                (0, l.f)(F.error, a).then((e) => {
                    let { message: a } = e;
                    return (0, s.A)(a);
                });
        }, [k, F, a]),
        r.useEffect(() => {
            "does-not-support-surface" === k && E && (0, p.r)(m);
        }, [k, E, m]),
        b
    );
}
