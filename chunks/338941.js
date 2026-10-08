t.d(a, { n: () => A, A: () => m });
var n,
    r = t(582128),
    o = t(17928),
    l = t(956518),
    u = t(950803),
    s = t(85982),
    i = t(627363),
    c = t(878014),
    d = t(869146),
    f = t(625180),
    h = t(91242),
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
    let { applicationId: a, surface: t, hostWindowKey: n } = e,
        {
            frameId: A,
            frameExists: m,
            frameLaunched: E,
            surface: y,
            launchFailure: W,
            setFailed: F,
            lifecycle: L,
        } = (function (e) {
            let { applicationId: a, surface: t, hostWindowKey: n } = e,
                u = r.useMemo(() => (0, g.VA)(a, t), [a, t]),
                s = r.useMemo(() => t, [u]),
                f = (0, o.bG)([h.A], () => h.A.getFrame(u), [u]),
                p = (0, o.bG)(
                    [d.A, h.A],
                    () => {
                        var e;
                        if (d.A.getWindowOpen(w.MLl.ACTIVITY_POPOUT) && h.A.getMainFrame()?.id === u) return !0;
                        let a =
                            ((e = h.A.getFrame(u)),
                            (0, g.x1)(e) && null != e.data.hostWindowKey && d.A.getWindowOpen(e.data.hostWindowKey)
                                ? e.data.hostWindowKey
                                : null);
                        return null != a && a !== n;
                    },
                    [u, n],
                ),
                { data: A, isLoading: m } = (0, i.YY)(a),
                E = (0, c.D)(A),
                y = null != (0, l.Ay)(a),
                [W, F] = r.useState(null),
                L = W?.frameId === u ? W : null,
                b = r.useCallback((e) => F({ frameId: u, error: e }), [u]);
            return {
                frameId: u,
                frameExists: null != f,
                frameLaunched: (0, g.x1)(f),
                surface: s,
                launchFailure: L,
                setFailed: b,
                lifecycle:
                    null == A || E
                        ? (0, g.x1)(f)
                            ? p
                                ? { state: "rendering-elsewhere" }
                                : null != A
                                  ? { state: "launched", frame: f, application: A }
                                  : { state: "loading", frame: void 0 }
                            : null != L
                              ? null == A
                                  ? m
                                      ? { state: "loading", frame: void 0 }
                                      : { state: "no-application" }
                                  : { state: "error" }
                              : f?.state === "loading"
                                ? { state: "loading", frame: f }
                                : y
                                  ? { state: "awaiting-launch" }
                                  : { state: "no-application" }
                        : { state: "does-not-support-surface" },
            };
        })({ applicationId: a, surface: t, hostWindowKey: n }),
        { state: b } = L;
    return (
        r.useEffect(() => {
            if (null != n && E) return (f.A.attachFrameHostWindow(A, n), () => f.A.detachFrameHostWindow(A, n));
        }, [A, n, E]),
        r.useEffect(() => {
            "awaiting-launch" === b && e();
            async function e() {
                try {
                    await f.A.launchFrame({ applicationId: a, surface: y, hostWindowKey: n, showErrorModal: !1 });
                } catch (e) {
                    F(e);
                }
            }
        }, [b, a, y, n, F]),
        r.useEffect(() => {
            "error" === b &&
                null != W &&
                (0, u.f)(W.error, a).then((e) => {
                    let { message: a } = e;
                    return (0, s.A)(a);
                });
        }, [b, W, a]),
        r.useEffect(() => {
            "does-not-support-surface" === b && m && (0, p.r)(A);
        }, [b, m, A]),
        L
    );
}
