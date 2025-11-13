a.d(e, {
    E8: () => O,
    Wo: () => h,
    og: () => P,
});
var r = a(650665),
    _ = a(423850),
    n = a(393523),
    o = a(553062),
    i = a(859502),
    E = a(988097),
    c = a(263449),
    s = a(696486),
    l = a(305625),
    I = a(622916),
    R = a(370541),
    u = a(101284),
    A = a(731889),
    N = a(467510),
    T = a(454463),
    d = a(163162),
    f = a(119128),
    L = a(799033);
let p = {
        ...o.A,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !1,
        enableInp: !0,
        _experiments: {},
        ...L.k3,
    },
    O = (t = {}) => {
        (0, i.a)();
        let {
                enableInp: e,
                enableLongTask: a,
                enableLongAnimationFrame: A,
                _experiments: { enableInteractions: N },
                beforeStartSpan: O,
                idleTimeout: D,
                finalTimeout: g,
                childSpanTimeout: S,
                markBackgroundSpan: m,
                traceFetch: v,
                traceXHR: y,
                shouldCreateSpanForRequest: U,
                enableHTTPTimings: G,
                instrumentPageLoad: W,
                instrumentNavigation: b,
            } = {
                ...p,
                ...t,
            },
            M = (0, r.PR)();
        e && (0, _.N)(),
            A && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")
                ? (0, r.Jk)()
                : a && (0, r.Fv)(),
            N && (0, r.sn)();
        let w = {
            name: void 0,
            source: void 0,
        };
        function B(t, e) {
            let a = "pageload" === e.op,
                _ = O ? O(e) : e,
                n = _.attributes || {};
            e.name !== _.name && ((n[E.Zj] = "custom"), (_.attributes = n)), (w.name = _.name), (w.source = n[E.Zj]);
            let i = (0, o.R)(_, {
                idleTimeout: D,
                finalTimeout: g,
                childSpanTimeout: S,
                disableAutoFinish: a,
                beforeSpanEnd: (t) => {
                    M(), (0, r.f7)(t);
                },
            });
            function c() {
                ["interactive", "complete"].includes(d.m9.document.readyState) && t.emit("idleSpanEnableAutoFinish", i);
            }
            return (
                a &&
                    d.m9.document &&
                    (d.m9.document.addEventListener("readystatechange", () => {
                        c();
                    }),
                    c()),
                i
            );
        }
        return {
            name: "BrowserTracing",
            afterAllSetup(t) {
                var a, r, i, A;
                let p,
                    O,
                    M = d.m9.location && d.m9.location.href;
                t.on("startNavigationSpan", (e) => {
                    (0, c.s3)() === t &&
                        (O &&
                            !(0, s.XU)(O).timestamp &&
                            (T.X && I.kg.log(`[Tracing] Finishing current root span with op: ${((0, s.XU))(O).op}`),
                            O.end()),
                        (O = B(t, {
                            op: "navigation",
                            ...e,
                        })));
                }),
                    t.on("startPageLoadSpan", (e, a = {}) => {
                        if ((0, c.s3)() !== t) return;
                        O &&
                            !(0, s.XU)(O).timestamp &&
                            (T.X && I.kg.log(`[Tracing] Finishing current root span with op: ${((0, s.XU))(O).op}`),
                            O.end());
                        let r = a.sentryTrace || C("sentry-trace"),
                            _ = a.baggage || C("baggage"),
                            n = (0, R.pT)(r, _);
                        (0, c.nZ)().setPropagationContext(n),
                            (O = B(t, {
                                op: "pageload",
                                ...e,
                            }));
                    }),
                    t.on("spanEnd", (t) => {
                        let e = (0, s.XU)(t).op;
                        if (t !== (0, s.Gx)(t) || ("navigation" !== e && "pageload" !== e)) return;
                        let a = (0, c.nZ)(),
                            r = a.getPropagationContext();
                        a.setPropagationContext({
                            ...r,
                            sampled: void 0 !== r.sampled ? r.sampled : (0, s.Tt)(t),
                            dsc: r.dsc || (0, l.jC)(t),
                        });
                    }),
                    d.m9.location &&
                        (W &&
                            h(t, {
                                name: d.m9.location.pathname,
                                startTime: u.Z1 ? u.Z1 / 1000 : void 0,
                                attributes: {
                                    [E.Zj]: "url",
                                    [E.S3]: "auto.pageload.browser",
                                },
                            }),
                        b &&
                            (0, n.a)(({ to: e, from: a }) => {
                                if (void 0 === a && M && -1 !== M.indexOf(e)) {
                                    M = void 0;
                                    return;
                                }
                                a !== e &&
                                    ((M = void 0),
                                    P(t, {
                                        name: d.m9.location.pathname,
                                        attributes: {
                                            [E.Zj]: "url",
                                            [E.S3]: "auto.navigation.browser",
                                        },
                                    }));
                            })),
                    m && (0, f.j)(),
                    N &&
                        ((a = D),
                        (r = g),
                        (i = S),
                        (A = w),
                        d.m9.document &&
                            addEventListener(
                                "click",
                                () => {
                                    let t = "ui.action.click",
                                        e = (0, s.HN)(),
                                        _ = e && (0, s.Gx)(e);
                                    if (_ && ["navigation", "pageload"].includes((0, s.XU)(_).op)) {
                                        T.X &&
                                            I.kg.warn(
                                                `[Tracing] Did not create ${t} span because a pageload or navigation span is in progress.`,
                                            );
                                        return;
                                    }
                                    if (
                                        (p && (p.setAttribute(E.ju, "interactionInterrupted"), p.end(), (p = void 0)),
                                        !A.name)
                                    ) {
                                        T.X &&
                                            I.kg.warn(
                                                `[Tracing] Did not create ${t} transaction because _latestRouteName is missing.`,
                                            );
                                        return;
                                    }
                                    p = (0, o.R)(
                                        {
                                            name: A.name,
                                            op: t,
                                            attributes: { [E.Zj]: A.source || "url" },
                                        },
                                        {
                                            idleTimeout: a,
                                            finalTimeout: r,
                                            childSpanTimeout: i,
                                        },
                                    );
                                },
                                {
                                    once: !1,
                                    capture: !0,
                                },
                            )),
                    e && (0, _.D)(),
                    (0, L.L7)(t, {
                        traceFetch: v,
                        traceXHR: y,
                        tracePropagationTargets: t.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: U,
                        enableHTTPTimings: G,
                    });
            },
        };
    };
function h(t, e, a) {
    t.emit("startPageLoadSpan", e, a), (0, c.nZ)().setTransactionName(e.name);
    let r = (0, s.HN)();
    return "pageload" === (r && (0, s.XU)(r).op) ? r : void 0;
}
function P(t, e) {
    (0, c.aF)().setPropagationContext((0, A.Q)()),
        (0, c.nZ)().setPropagationContext((0, A.Q)()),
        t.emit("startNavigationSpan", e),
        (0, c.nZ)().setTransactionName(e.name);
    let a = (0, s.HN)();
    return "navigation" === (a && (0, s.XU)(a).op) ? a : void 0;
}
function C(t) {
    let e = (0, N.qT)(`meta[name=${t}]`);
    return e ? e.getAttribute("content") : void 0;
}
