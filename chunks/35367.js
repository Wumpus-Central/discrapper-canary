t.d(a, { n: () => E, A: () => F });
var n,
    r = t(582128),
    u = t(17928),
    l = t(956518),
    o = t(950803),
    s = t(85982),
    c = t(627363),
    i = t(878014),
    d = t(869146),
    f = t(625180),
    h = t(91242),
    p = t(457827),
    A = t(705499),
    g = t(409397),
    m = t(165610),
    w = t(652215),
    E =
        (((n = {}).Loading = "loading"),
        (n.AwaitingLaunch = "awaiting-launch"),
        (n.Launched = "launched"),
        (n.RenderingElsewhere = "rendering-elsewhere"),
        (n.NoApplication = "no-application"),
        (n.DoesNotSupportSurface = "does-not-support-surface"),
        (n.Error = "error"),
        n);
function F(e) {
    let { applicationId: a, surface: t, hostWindowKey: n, launch: E } = e,
        {
            frameId: F,
            frameExists: L,
            frameLaunched: M,
            surface: b,
            launchFailure: k,
            setFailed: I,
            lifecycle: y,
        } = (function (e) {
            let { applicationId: a, surface: t, hostWindowKey: n, launch: o } = e,
                s = r.useMemo(() => (0, m.VA)(a, t), [a, t]),
                f = r.useMemo(() => t, [s]),
                p = (0, u.bG)([h.A], () => h.A.getFrame(s), [s]),
                A = (0, u.bG)(
                    [d.A, h.A],
                    () => {
                        if (d.A.getWindowOpen(w.MLl.ACTIVITY_POPOUT) && h.A.getMainFrame()?.id === s) return !0;
                        let e = (0, g.A)(h.A.getFrame(s));
                        return null != e && e !== n;
                    },
                    [s, n],
                ),
                { data: E, isLoading: F } = (0, c.YY)(a),
                L = (0, i.D)(E),
                M = null != (0, l.Ay)(a),
                b = o?.customId,
                [k, I] = r.useState(null),
                y = k?.frameId === s && k.customId === b ? k : null,
                C = r.useCallback((e) => I({ frameId: s, customId: b, error: e }), [s, b]);
            return {
                frameId: s,
                frameExists: null != p,
                frameLaunched: (0, m.x1)(p),
                surface: f,
                launchFailure: y,
                setFailed: C,
                lifecycle:
                    null == E || L
                        ? (0, m.x1)(p)
                            ? A
                                ? { state: "rendering-elsewhere" }
                                : null != E
                                  ? { state: "launched", frame: p, application: E }
                                  : { state: "loading", frame: void 0 }
                            : null != y
                              ? null == E
                                  ? F
                                      ? { state: "loading", frame: void 0 }
                                      : { state: "no-application" }
                                  : { state: "error" }
                              : p?.state === "loading"
                                ? { state: "loading", frame: p }
                                : M
                                  ? { state: "awaiting-launch" }
                                  : { state: "no-application" }
                        : { state: "does-not-support-surface" },
            };
        })({ applicationId: a, surface: t, hostWindowKey: n, launch: E }),
        { state: C } = y;
    return (
        r.useEffect(() => {
            if (null != n && M) return (f.A.attachFrameHostWindow(F, n), () => f.A.detachFrameHostWindow(F, n));
        }, [F, n, M]),
        r.useEffect(() => {
            L &&
                (0, A.wY)(F) &&
                f.A.launchFrame({
                    applicationId: a,
                    surface: b,
                    hostWindowKey: n,
                    launch: E,
                    showErrorModal: !1,
                }).catch(I);
        }, [F, L, a, b, n, E, I]),
        r.useEffect(() => {
            "awaiting-launch" === C && e();
            async function e() {
                try {
                    await f.A.launchFrame({
                        applicationId: a,
                        surface: b,
                        hostWindowKey: n,
                        launch: E,
                        showErrorModal: !1,
                    });
                } catch (e) {
                    I(e);
                }
            }
        }, [C, a, b, n, E, I]),
        r.useEffect(() => {
            "error" === C &&
                null != k &&
                (0, o.f)(k.error, a).then((e) => {
                    let { message: a } = e;
                    return (0, s.A)(a);
                });
        }, [C, k, a]),
        r.useEffect(() => {
            "does-not-support-surface" === C && L && (0, p.r)(F);
        }, [C, L, F]),
        y
    );
}
