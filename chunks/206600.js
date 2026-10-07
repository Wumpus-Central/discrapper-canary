t.d(a, { A: () => y, n: () => E });
var n,
    r = t(582128),
    o = t(17928),
    u = t(956518),
    l = t(950803),
    i = t(574152),
    s = t(627363),
    c = t(878014),
    d = t(869146),
    f = t(625180),
    h = t(91242),
    p = t(580954),
    A = t(759829),
    g = t(409397),
    w = t(165610),
    m = t(652215),
    E =
        (((n = {}).Loading = "loading"),
        (n.AwaitingLaunch = "awaiting-launch"),
        (n.Launched = "launched"),
        (n.RenderingElsewhere = "rendering-elsewhere"),
        (n.NoApplication = "no-application"),
        (n.DoesNotSupportSurface = "does-not-support-surface"),
        (n.Error = "error"),
        n);
function y(e) {
    let { applicationId: a, surface: t, hostWindowKey: n } = e,
        {
            frameId: E,
            frameExists: y,
            frameLaunched: F,
            surface: L,
            launchFailure: W,
            setFailed: v,
            lifecycle: M,
        } = (function (e) {
            let { applicationId: a, surface: t, hostWindowKey: n } = e,
                l = r.useMemo(() => (0, w.VA)(a, t), [a, t]),
                i = r.useMemo(() => t, [l]),
                f = (0, A.A)(l),
                p = (0, o.bG)(
                    [d.A, h.A],
                    () => {
                        if (d.A.getWindowOpen(m.MLl.ACTIVITY_POPOUT) && h.A.getMainFrame()?.id === l) return !0;
                        let e = (0, g.A)(h.A.getFrame(l));
                        return null != e && e !== n;
                    },
                    [l, n],
                ),
                { data: E, isLoading: y } = (0, s.YY)(a),
                F = (0, c.D)(E),
                L = null != (0, u.Ay)(a),
                [W, v] = r.useState(null),
                M = W?.frameId === l ? W : null,
                b = r.useCallback((e) => v({ frameId: l, error: e }), [l]);
            return {
                frameId: l,
                frameExists: null != f,
                frameLaunched: (0, w.x1)(f),
                surface: i,
                launchFailure: M,
                setFailed: b,
                lifecycle:
                    null == E || F
                        ? (0, w.x1)(f)
                            ? p
                                ? { state: "rendering-elsewhere" }
                                : null != E
                                  ? { state: "launched", frame: f, application: E }
                                  : { state: "loading", frame: void 0 }
                            : null != M
                              ? null == E
                                  ? y
                                      ? { state: "loading", frame: void 0 }
                                      : { state: "no-application" }
                                  : { state: "error" }
                              : f?.state === "loading"
                                ? { state: "loading", frame: f }
                                : L
                                  ? { state: "awaiting-launch" }
                                  : { state: "no-application" }
                        : { state: "does-not-support-surface" },
            };
        })({ applicationId: a, surface: t, hostWindowKey: n }),
        { state: b } = M;
    return (
        r.useEffect(() => {
            if (null != n && F) return (f.A.attachFrameHostWindow(E, n), () => f.A.detachFrameHostWindow(E, n));
        }, [E, n, F]),
        r.useEffect(() => {
            "awaiting-launch" === b && e();
            async function e() {
                try {
                    await f.A.launchFrame({ applicationId: a, surface: L, hostWindowKey: n, showErrorModal: !1 });
                } catch (e) {
                    v(e);
                }
            }
        }, [b, a, L, n, v]),
        r.useEffect(() => {
            "error" === b &&
                null != W &&
                (0, l.f)(W.error, a).then((e) => {
                    let { message: a } = e;
                    return (0, i.A)().showLaunchErrorModal(a);
                });
        }, [b, W, a]),
        r.useEffect(() => {
            "does-not-support-surface" === b && y && (0, p.A)().leaveFrame(E);
        }, [b, y, E]),
        M
    );
}
