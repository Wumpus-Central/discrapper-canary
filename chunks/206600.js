t.d(a, { A: () => w, n: () => g });
var n,
    r = t(582128),
    i = t(17928),
    o = t(956518),
    u = t(627363),
    s = t(878014),
    l = t(869146),
    c = t(625180),
    d = t(91242),
    h = t(759829),
    f = t(409397),
    p = t(165610),
    A = t(652215),
    g =
        (((n = {}).Loading = "loading"),
        (n.AwaitingLaunch = "awaiting-launch"),
        (n.Launched = "launched"),
        (n.RenderingElsewhere = "rendering-elsewhere"),
        (n.NoApplication = "no-application"),
        (n.DoesNotSupportSurface = "does-not-support-surface"),
        (n.Error = "error"),
        n);
function w(e) {
    let { applicationId: a, surface: t, hostWindowKey: n } = e,
        {
            frameId: g,
            frameLaunched: w,
            surface: m,
            setFailed: y,
            lifecycle: W,
        } = (function (e) {
            let { applicationId: a, surface: t, hostWindowKey: n } = e,
                c = r.useMemo(() => (0, p.VA)(a, t), [a, t]),
                g = r.useMemo(() => t, [c]),
                w = (0, h.A)(c),
                m = (0, i.bG)(
                    [l.A, d.A],
                    () => {
                        if (l.A.getWindowOpen(A.MLl.ACTIVITY_POPOUT) && d.A.getMainFrame()?.id === c) return !0;
                        let e = (0, f.A)(d.A.getFrame(c));
                        return null != e && e !== n;
                    },
                    [c, n],
                ),
                { data: y, isLoading: W } = (0, u.YY)(a),
                F = (0, s.D)(y),
                L = null != (0, o.Ay)(a),
                [b, k] = r.useState(null),
                v = b === c,
                C = r.useCallback(() => k(c), [c]);
            return {
                frameId: c,
                frameLaunched: (0, p.x1)(w),
                surface: g,
                setFailed: C,
                lifecycle: (0, p.x1)(w)
                    ? m
                        ? { state: "rendering-elsewhere" }
                        : null != y
                          ? { state: "launched", frame: w, application: y }
                          : { state: "loading", frame: void 0 }
                    : v
                      ? { state: "error" }
                      : w?.state === "loading"
                        ? { state: "loading", frame: w }
                        : W
                          ? { state: "loading", frame: void 0 }
                          : null != y && L
                            ? F
                                ? { state: "awaiting-launch" }
                                : { state: "does-not-support-surface" }
                            : { state: "no-application" },
            };
        })({ applicationId: a, surface: t, hostWindowKey: n }),
        { state: F } = W;
    return (
        r.useEffect(() => {
            if (null != n && w) return (c.A.attachFrameHostWindow(g, n), () => c.A.detachFrameHostWindow(g, n));
        }, [g, n, w]),
        r.useEffect(() => {
            "awaiting-launch" === F && e();
            async function e() {
                try {
                    await c.A.launchFrame({ applicationId: a, surface: m, hostWindowKey: n });
                } catch {
                    y();
                }
            }
        }, [F, a, m, n, y]),
        W
    );
}
