n.d(t, {
    E8: () => S,
    Wo: () => L,
    og: () => g,
});
var r = n(390138),
    i = n(573617),
    a = n(106260),
    o = n(192990),
    _ = n(600400),
    s = n(8062),
    c = n(509440),
    E = n(82255),
    l = n(464338),
    u = n(606093),
    d = n(98076),
    p = n(490990),
    f = n(343573),
    I = n(974352),
    T = n(309063),
    R = n(549040),
    A = n(889929),
    N = n(497000),
    h = n(958113);
let O = {
        ...o.A,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !0,
        enableInp: !0,
        _experiments: {},
        ...h.k3,
    },
    S = (e = {}) => {
        (0, _.a)();
        let {
                enableInp: t,
                enableLongTask: n,
                enableLongAnimationFrame: I,
                _experiments: { enableInteractions: T, enableStandaloneClsSpans: S },
                beforeStartSpan: D,
                idleTimeout: C,
                finalTimeout: y,
                childSpanTimeout: P,
                markBackgroundSpan: v,
                traceFetch: b,
                traceXHR: M,
                shouldCreateSpanForRequest: w,
                enableHTTPTimings: U,
                instrumentPageLoad: G,
                instrumentNavigation: H,
            } = {
                ...O,
                ...e,
            },
            B = (0, r.PR)({ recordClsStandaloneSpans: S || !1 });
        t && (0, i.N)(),
            I &&
            u.n.PerformanceObserver &&
            PerformanceObserver.supportedEntryTypes &&
            PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")
                ? (0, r.Jk)()
                : n && (0, r.Fv)(),
            T && (0, r.sn)();
        let k = {
            name: void 0,
            source: void 0,
        };
        function K(e, t) {
            let n = "pageload" === t.op,
                i = D ? D(t) : t,
                a = i.attributes || {};
            t.name !== i.name && ((a[s.Zj] = "custom"), (i.attributes = a)), (k.name = i.name), (k.source = a[s.Zj]);
            let _ = (0, o.R)(i, {
                idleTimeout: C,
                finalTimeout: y,
                childSpanTimeout: P,
                disableAutoFinish: n,
                beforeSpanEnd: (e) => {
                    B(), (0, r.f7)(e, { recordClsOnPageloadSpan: !S });
                },
            });
            function c() {
                ["interactive", "complete"].includes(A.m9.document.readyState) && e.emit("idleSpanEnableAutoFinish", _);
            }
            return (
                n &&
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
                var n, r, _, u;
                let I,
                    O,
                    S = A.m9.location && A.m9.location.href;
                e.on("startNavigationSpan", (t) => {
                    (0, c.s3)() === e &&
                        (O &&
                            !(0, E.XU)(O).timestamp &&
                            (R.X && d.kg.log(`[Tracing] Finishing current root span with op: ${((0, E.XU))(O).op}`),
                            O.end()),
                        (O = K(e, {
                            op: "navigation",
                            ...t,
                        })));
                }),
                    e.on("startPageLoadSpan", (t, n = {}) => {
                        if ((0, c.s3)() !== e) return;
                        O &&
                            !(0, E.XU)(O).timestamp &&
                            (R.X && d.kg.log(`[Tracing] Finishing current root span with op: ${((0, E.XU))(O).op}`),
                            O.end());
                        let r = n.sentryTrace || m("sentry-trace"),
                            i = n.baggage || m("baggage"),
                            a = (0, p.pT)(r, i);
                        (0, c.nZ)().setPropagationContext(a),
                            (O = K(e, {
                                op: "pageload",
                                ...t,
                            }));
                    }),
                    e.on("spanEnd", (e) => {
                        let t = (0, E.XU)(e).op;
                        if (e !== (0, E.Gx)(e) || ("navigation" !== t && "pageload" !== t)) return;
                        let n = (0, c.nZ)(),
                            r = n.getPropagationContext();
                        n.setPropagationContext({
                            ...r,
                            sampled: void 0 !== r.sampled ? r.sampled : (0, E.Tt)(e),
                            dsc: r.dsc || (0, l.jC)(e),
                        });
                    }),
                    A.m9.location &&
                        (G &&
                            L(e, {
                                name: A.m9.location.pathname,
                                startTime: f.Z1 ? f.Z1 / 1000 : void 0,
                                attributes: {
                                    [s.Zj]: "url",
                                    [s.S3]: "auto.pageload.browser",
                                },
                            }),
                        H &&
                            (0, a.a)(({ to: t, from: n }) => {
                                if (void 0 === n && S && -1 !== S.indexOf(t)) {
                                    S = void 0;
                                    return;
                                }
                                n !== t &&
                                    ((S = void 0),
                                    g(e, {
                                        name: A.m9.location.pathname,
                                        attributes: {
                                            [s.Zj]: "url",
                                            [s.S3]: "auto.navigation.browser",
                                        },
                                    }));
                            })),
                    v && (0, N.j)(),
                    T &&
                        ((n = C),
                        (r = y),
                        (_ = P),
                        (u = k),
                        A.m9.document &&
                            addEventListener(
                                "click",
                                () => {
                                    let e = "ui.action.click",
                                        t = (0, E.HN)(),
                                        i = t && (0, E.Gx)(t);
                                    if (i && ["navigation", "pageload"].includes((0, E.XU)(i).op)) {
                                        R.X &&
                                            d.kg.warn(
                                                `[Tracing] Did not create ${e} span because a pageload or navigation span is in progress.`,
                                            );
                                        return;
                                    }
                                    if (
                                        (I && (I.setAttribute(s.ju, "interactionInterrupted"), I.end(), (I = void 0)),
                                        !u.name)
                                    ) {
                                        R.X &&
                                            d.kg.warn(
                                                `[Tracing] Did not create ${e} transaction because _latestRouteName is missing.`,
                                            );
                                        return;
                                    }
                                    I = (0, o.R)(
                                        {
                                            name: u.name,
                                            op: e,
                                            attributes: { [s.Zj]: u.source || "url" },
                                        },
                                        {
                                            idleTimeout: n,
                                            finalTimeout: r,
                                            childSpanTimeout: _,
                                        },
                                    );
                                },
                                {
                                    once: !1,
                                    capture: !0,
                                },
                            )),
                    t && (0, i.D)(),
                    (0, h.L7)(e, {
                        traceFetch: b,
                        traceXHR: M,
                        tracePropagationTargets: e.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: w,
                        enableHTTPTimings: U,
                    });
            },
        };
    };
function L(e, t, n) {
    e.emit("startPageLoadSpan", t, n), (0, c.nZ)().setTransactionName(t.name);
    let r = (0, E.HN)();
    return "pageload" === (r && (0, E.XU)(r).op) ? r : void 0;
}
function g(e, t) {
    (0, c.aF)().setPropagationContext((0, I.Q)()),
        (0, c.nZ)().setPropagationContext((0, I.Q)()),
        e.emit("startNavigationSpan", t),
        (0, c.nZ)().setTransactionName(t.name);
    let n = (0, E.HN)();
    return "navigation" === (n && (0, E.XU)(n).op) ? n : void 0;
}
function m(e) {
    let t = (0, T.qT)(`meta[name=${e}]`);
    return t ? t.getAttribute("content") : void 0;
}
