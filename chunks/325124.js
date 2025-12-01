r.d(t, {
    E8: () => h,
    Wo: () => D,
    og: () => S,
});
var n = r(650665),
    a = r(423850),
    i = r(393523),
    o = r(553062),
    _ = r(859502),
    s = r(988097),
    c = r(263449),
    E = r(696486),
    l = r(305625),
    u = r(622916),
    d = r(370541),
    I = r(101284),
    p = r(731889),
    R = r(467510),
    T = r(454463),
    A = r(163162),
    N = r(119128),
    f = r(799033);
let O = {
        ...o.A,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !1,
        enableInp: !0,
        _experiments: {},
        ...f.k3,
    },
    h = (e = {}) => {
        (0, _.a)();
        let {
                enableInp: t,
                enableLongTask: r,
                enableLongAnimationFrame: p,
                _experiments: { enableInteractions: R },
                beforeStartSpan: h,
                idleTimeout: C,
                finalTimeout: g,
                childSpanTimeout: m,
                markBackgroundSpan: y,
                traceFetch: P,
                traceXHR: v,
                shouldCreateSpanForRequest: w,
                enableHTTPTimings: G,
                instrumentPageLoad: M,
                instrumentNavigation: b,
            } = {
                ...O,
                ...e,
            },
            U = (0, n.PR)();
        t && (0, a.N)(),
            p && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")
                ? (0, n.Jk)()
                : r && (0, n.Fv)(),
            R && (0, n.sn)();
        let H = {
            name: void 0,
            source: void 0,
        };
        function K(e, t) {
            let r = "pageload" === t.op,
                a = h ? h(t) : t,
                i = a.attributes || {};
            t.name !== a.name && ((i[s.Zj] = "custom"), (a.attributes = i)), (H.name = a.name), (H.source = i[s.Zj]);
            let _ = (0, o.R)(a, {
                idleTimeout: C,
                finalTimeout: g,
                childSpanTimeout: m,
                disableAutoFinish: r,
                beforeSpanEnd: (e) => {
                    U(), (0, n.f7)(e);
                },
            });
            function c() {
                ["interactive", "complete"].includes(A.m9.document.readyState) && e.emit("idleSpanEnableAutoFinish", _);
            }
            return (
                r &&
                    A.m9.document &&
                    (A.m9.document.addEventListener("readystatechange", () => {
                        c();
                    }),
                    c()),
                _
            );
        }
        return {
            name: "BrowserTracing",
            afterAllSetup(e) {
                var r, n, _, p;
                let O,
                    h,
                    U = A.m9.location && A.m9.location.href;
                e.on("startNavigationSpan", (t) => {
                    (0, c.s3)() === e &&
                        (h &&
                            !(0, E.XU)(h).timestamp &&
                            (T.X && u.kg.log(`[Tracing] Finishing current root span with op: ${((0, E.XU))(h).op}`),
                            h.end()),
                        (h = K(e, {
                            op: "navigation",
                            ...t,
                        })));
                }),
                    e.on("startPageLoadSpan", (t, r = {}) => {
                        if ((0, c.s3)() !== e) return;
                        h &&
                            !(0, E.XU)(h).timestamp &&
                            (T.X && u.kg.log(`[Tracing] Finishing current root span with op: ${((0, E.XU))(h).op}`),
                            h.end());
                        let n = r.sentryTrace || L("sentry-trace"),
                            a = r.baggage || L("baggage"),
                            i = (0, d.pT)(n, a);
                        (0, c.nZ)().setPropagationContext(i),
                            (h = K(e, {
                                op: "pageload",
                                ...t,
                            }));
                    }),
                    e.on("spanEnd", (e) => {
                        let t = (0, E.XU)(e).op;
                        if (e !== (0, E.Gx)(e) || ("navigation" !== t && "pageload" !== t)) return;
                        let r = (0, c.nZ)(),
                            n = r.getPropagationContext();
                        r.setPropagationContext({
                            ...n,
                            sampled: void 0 !== n.sampled ? n.sampled : (0, E.Tt)(e),
                            dsc: n.dsc || (0, l.jC)(e),
                        });
                    }),
                    A.m9.location &&
                        (M &&
                            D(e, {
                                name: A.m9.location.pathname,
                                startTime: I.Z1 ? I.Z1 / 1000 : void 0,
                                attributes: {
                                    [s.Zj]: "url",
                                    [s.S3]: "auto.pageload.browser",
                                },
                            }),
                        b &&
                            (0, i.a)(({ to: t, from: r }) => {
                                if (void 0 === r && U && -1 !== U.indexOf(t)) {
                                    U = void 0;
                                    return;
                                }
                                r !== t &&
                                    ((U = void 0),
                                    S(e, {
                                        name: A.m9.location.pathname,
                                        attributes: {
                                            [s.Zj]: "url",
                                            [s.S3]: "auto.navigation.browser",
                                        },
                                    }));
                            })),
                    y && (0, N.j)(),
                    R &&
                        ((r = C),
                        (n = g),
                        (_ = m),
                        (p = H),
                        A.m9.document &&
                            addEventListener(
                                "click",
                                () => {
                                    let e = "ui.action.click",
                                        t = (0, E.HN)(),
                                        a = t && (0, E.Gx)(t);
                                    if (a && ["navigation", "pageload"].includes((0, E.XU)(a).op)) {
                                        T.X &&
                                            u.kg.warn(
                                                `[Tracing] Did not create ${e} span because a pageload or navigation span is in progress.`,
                                            );
                                        return;
                                    }
                                    if (
                                        (O && (O.setAttribute(s.ju, "interactionInterrupted"), O.end(), (O = void 0)),
                                        !p.name)
                                    ) {
                                        T.X &&
                                            u.kg.warn(
                                                `[Tracing] Did not create ${e} transaction because _latestRouteName is missing.`,
                                            );
                                        return;
                                    }
                                    O = (0, o.R)(
                                        {
                                            name: p.name,
                                            op: e,
                                            attributes: { [s.Zj]: p.source || "url" },
                                        },
                                        {
                                            idleTimeout: r,
                                            finalTimeout: n,
                                            childSpanTimeout: _,
                                        },
                                    );
                                },
                                {
                                    once: !1,
                                    capture: !0,
                                },
                            )),
                    t && (0, a.D)(),
                    (0, f.L7)(e, {
                        traceFetch: P,
                        traceXHR: v,
                        tracePropagationTargets: e.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: w,
                        enableHTTPTimings: G,
                    });
            },
        };
    };
function D(e, t, r) {
    e.emit("startPageLoadSpan", t, r), (0, c.nZ)().setTransactionName(t.name);
    let n = (0, E.HN)();
    return "pageload" === (n && (0, E.XU)(n).op) ? n : void 0;
}
function S(e, t) {
    (0, c.aF)().setPropagationContext((0, p.Q)()),
        (0, c.nZ)().setPropagationContext((0, p.Q)()),
        e.emit("startNavigationSpan", t),
        (0, c.nZ)().setTransactionName(t.name);
    let r = (0, E.HN)();
    return "navigation" === (r && (0, E.XU)(r).op) ? r : void 0;
}
function L(e) {
    let t = (0, R.qT)(`meta[name=${e}]`);
    return t ? t.getAttribute("content") : void 0;
}
