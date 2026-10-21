t.d(a, { n: () => w, A: () => E });
var n,
    r = t(582128),
    u = t(17928),
    l = t(956518),
    o = t(950803),
    s = t(85982),
    i = t(627363),
    c = t(878014),
    d = t(869146),
    f = t(625180),
    h = t(91242),
    p = t(457827),
    g = t(409397),
    A = t(165610),
    m = t(652215),
    w =
        (((n = {}).Loading = "loading"),
        (n.AwaitingLaunch = "awaiting-launch"),
        (n.Launched = "launched"),
        (n.RenderingElsewhere = "rendering-elsewhere"),
        (n.NoApplication = "no-application"),
        (n.DoesNotSupportSurface = "does-not-support-surface"),
        (n.Error = "error"),
        n);
function E(e) {
    let { applicationId: a, surface: t, hostWindowKey: n, launch: w } = e,
        {
            frameId: E,
            frameExists: F,
            frameLaunched: L,
            surface: b,
            launchFailure: k,
            setFailed: I,
            lifecycle: M,
        } = (function (e) {
            let { applicationId: a, surface: t, hostWindowKey: n, launch: o } = e,
                s = r.useMemo(() => (0, A.VA)(a, t), [a, t]),
                f = r.useMemo(() => t, [s]),
                p = (0, u.bG)([h.A], () => h.A.getFrame(s), [s]),
                w = (0, u.bG)(
                    [d.A, h.A],
                    () => {
                        if (d.A.getWindowOpen(m.MLl.ACTIVITY_POPOUT) && h.A.getMainFrame()?.id === s) return !0;
                        let e = (0, g.A)(h.A.getFrame(s));
                        return null != e && e !== n;
                    },
                    [s, n],
                ),
                { data: E, isLoading: F } = (0, i.YY)(a),
                L = (0, c.D)(E),
                b = null != (0, l.Ay)(a),
                k = o?.customId,
                [I, M] = r.useState(null),
                y = I?.frameId === s && I.customId === k ? I : null,
                C = r.useCallback((e) => M({ frameId: s, customId: k, error: e }), [s, k]);
            return {
                frameId: s,
                frameExists: null != p,
                frameLaunched: (0, A.x1)(p),
                surface: f,
                launchFailure: y,
                setFailed: C,
                lifecycle:
                    null == E || L
                        ? (0, A.x1)(p)
                            ? w
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
                                : b
                                  ? { state: "awaiting-launch" }
                                  : { state: "no-application" }
                        : { state: "does-not-support-surface" },
            };
        })({ applicationId: a, surface: t, hostWindowKey: n, launch: w }),
        { state: y } = M;
    return (
        r.useEffect(() => {
            if (null != n && L) return (f.A.attachFrameHostWindow(E, n), () => f.A.detachFrameHostWindow(E, n));
        }, [E, n, L]),
        r.useEffect(() => {
            "awaiting-launch" === y && e();
            async function e() {
                try {
                    await f.A.launchFrame({
                        applicationId: a,
                        surface: b,
                        hostWindowKey: n,
                        launch: w,
                        showErrorModal: !1,
                    });
                } catch (e) {
                    I(e);
                }
            }
        }, [y, a, b, n, w, I]),
        r.useEffect(() => {
            "error" === y &&
                null != k &&
                (0, o.f)(k.error, a).then((e) => {
                    let { message: a } = e;
                    return (0, s.A)(a);
                });
        }, [y, k, a]),
        r.useEffect(() => {
            "does-not-support-surface" === y && F && (0, p.r)(E);
        }, [y, F, E]),
        M
    );
}
