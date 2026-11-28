var n,
    r = t(582128),
    u = t(855986),
    l = t(956518),
    o = t(872142),
    s = t(85982),
    i = t(627363),
    c = t(878014),
    d = t(869146),
    f = t(625180),
    h = t(91242),
    p = t(457827),
    A = t(759829),
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
t.d(
    a,
    {},
    {
        A: function (e) {
            let { applicationId: a, surface: t, hostWindowKey: n, launch: E } = e,
                {
                    frameId: F,
                    frameExists: L,
                    frameLaunched: b,
                    surface: k,
                    launchFailure: I,
                    setFailed: M,
                    lifecycle: v,
                } = (function (e) {
                    let { applicationId: a, surface: t, hostWindowKey: n, launch: o } = e,
                        s = r.useMemo(() => (0, m.VA)(a, t), [a, t]),
                        f = r.useMemo(() => t, [s]),
                        p = (0, A.A)(s),
                        E = (0, u.bG)(
                            [d.A, h.A],
                            () => {
                                if (d.A.getWindowOpen(w.MLl.ACTIVITY_POPOUT) && h.A.getMainFrame()?.id === s) return !0;
                                let e = (0, g.A)(h.A.getFrame(s));
                                return null != e && e !== n;
                            },
                            [s, n],
                        ),
                        { data: F, isLoading: L } = (0, i.YY)(a),
                        b = (0, c.D)(F),
                        k = null != (0, l.Ay)(a),
                        I = o?.customId,
                        [M, v] = r.useState(null),
                        y = M?.frameId === s && M.customId === I ? M : null,
                        C = r.useCallback((e) => v({ frameId: s, customId: I, error: e }), [s, I]);
                    return {
                        frameId: s,
                        frameExists: null != p,
                        frameLaunched: (0, m.x1)(p),
                        surface: f,
                        launchFailure: y,
                        setFailed: C,
                        lifecycle:
                            null == F || b
                                ? (0, m.x1)(p)
                                    ? E
                                        ? { state: "rendering-elsewhere" }
                                        : null != F
                                          ? { state: "launched", frame: p, application: F }
                                          : { state: "loading", frame: void 0 }
                                    : null != y
                                      ? null == F
                                          ? L
                                              ? { state: "loading", frame: void 0 }
                                              : { state: "no-application" }
                                          : { state: "error" }
                                      : p?.state === "loading"
                                        ? { state: "loading", frame: p }
                                        : k
                                          ? { state: "awaiting-launch" }
                                          : { state: "no-application" }
                                : { state: "does-not-support-surface" },
                    };
                })({ applicationId: a, surface: t, hostWindowKey: n, launch: E }),
                { state: y } = v;
            return (
                r.useEffect(() => {
                    if (null != n && b) return (f.A.attachFrameHostWindow(F, n), () => f.A.detachFrameHostWindow(F, n));
                }, [F, n, b]),
                r.useEffect(() => {
                    "awaiting-launch" === y &&
                        (async function () {
                            try {
                                await f.A.launchFrame({
                                    applicationId: a,
                                    surface: k,
                                    hostWindowKey: n,
                                    launch: E,
                                    showErrorModal: !1,
                                });
                            } catch (e) {
                                M(e);
                            }
                        })();
                }, [y, a, k, n, E, M]),
                r.useEffect(() => {
                    "error" === y &&
                        null != I &&
                        (0, o.f)(I.error, a).then((e) => {
                            let { message: a } = e;
                            return (0, s.A)(a);
                        });
                }, [y, I, a]),
                r.useEffect(() => {
                    "does-not-support-surface" === y && L && (0, p.r)(F);
                }, [y, L, F]),
                v
            );
        },
        n: E,
    },
);
