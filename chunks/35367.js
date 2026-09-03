t.d(a, { n: () => h, A: () => f });
var n,
    i = t(582128),
    r = t(17928),
    s = t(956518),
    o = t(627363),
    u = t(20015),
    c = t(869146),
    l = t(625180),
    d = t(91242),
    p = t(165610),
    g = t(652215),
    h =
        (((n = {}).Loading = "loading"),
        (n.AwaitingLaunch = "awaiting-launch"),
        (n.Launched = "launched"),
        (n.RenderingElsewhere = "rendering-elsewhere"),
        (n.NoApplication = "no-application"),
        (n.DoesNotSupportSurface = "does-not-support-surface"),
        (n.Error = "error"),
        n);
function f(e) {
    let { applicationId: a, surface: t } = e,
        {
            surface: n,
            setFailed: h,
            lifecycle: f,
        } = (function (e) {
            let { applicationId: a, surface: t } = e,
                n = i.useMemo(() => (0, p.VA)(a, t), [a, t]),
                l = i.useMemo(() => t, [n]),
                h = (0, r.bG)([d.A], () => d.A.getFrame(n), [n]),
                f = (0, r.bG)(
                    [c.A, d.A],
                    () => c.A.getWindowOpen(g.MLl.ACTIVITY_POPOUT) && d.A.getMainFrame()?.id === n,
                    [n],
                ),
                { data: A, isLoading: w } = (0, o.YY)(a),
                m = (0, u.n)(A, g.gfo.EMBEDDED),
                E = null != (0, s.Ay)(a),
                [b, k] = i.useState(null),
                L = b === n;
            return {
                surface: l,
                setFailed: i.useCallback(() => k(n), [n]),
                lifecycle: (0, p.x1)(h)
                    ? f
                        ? { state: "rendering-elsewhere" }
                        : { state: "launched", frame: h }
                    : L
                      ? { state: "error" }
                      : h?.state === "loading"
                        ? { state: "loading", frame: h }
                        : w
                          ? { state: "loading", frame: void 0 }
                          : null != A && E
                            ? m
                                ? { state: "awaiting-launch" }
                                : { state: "does-not-support-surface" }
                            : { state: "no-application" },
            };
        })({ applicationId: a, surface: t }),
        { state: A } = f;
    return (
        i.useEffect(() => {
            "awaiting-launch" === A && e();
            async function e() {
                try {
                    await l.A.launchFrame({ applicationId: a, surface: n });
                } catch {
                    h();
                }
            }
        }, [A, a, n, h]),
        f
    );
}
