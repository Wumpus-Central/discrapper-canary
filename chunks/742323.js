r.d(t, {
    E8: () => S,
    Wo: () => D,
    og: () => C,
});
var n = r(390138),
    a = r(573617),
    i = r(106260),
    o = r(192990),
    _ = r(600400),
    s = r(8062),
    c = r(509440),
    E = r(82255),
    l = r(464338),
    u = r(606093),
    d = r(98076),
    I = r(490990),
    p = r(343573),
    R = r(974352),
    T = r(309063),
    A = r(549040),
    f = r(889929),
    N = r(497000),
    O = r(958113);
let h = {
        ...o.A,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !0,
        enableInp: !0,
        _experiments: {},
        ...O.k3,
    },
    S = (e = {}) => {
        (0, _.a)();
        let {
                enableInp: t,
                enableLongTask: r,
                enableLongAnimationFrame: R,
                _experiments: { enableInteractions: T, enableStandaloneClsSpans: S },
                beforeStartSpan: g,
                idleTimeout: m,
                finalTimeout: y,
                childSpanTimeout: P,
                markBackgroundSpan: v,
                traceFetch: M,
                traceXHR: w,
                shouldCreateSpanForRequest: G,
                enableHTTPTimings: b,
                instrumentPageLoad: U,
                instrumentNavigation: H,
            } = {
                ...h,
                ...e,
            },
            K = (0, n.PR)({ recordClsStandaloneSpans: S || !1 });
        t && (0, a.N)(),
            R &&
            u.n.PerformanceObserver &&
            PerformanceObserver.supportedEntryTypes &&
            PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")
                ? (0, n.Jk)()
                : r && (0, n.Fv)(),
            T && (0, n.sn)();
        let W = {
            name: void 0,
            source: void 0,
        };
        function B(e, t) {
            let r = "pageload" === t.op,
                a = g ? g(t) : t,
                i = a.attributes || {};
            t.name !== a.name && ((i[s.Zj] = "custom"), (a.attributes = i)), (W.name = a.name), (W.source = i[s.Zj]);
            let _ = (0, o.R)(a, {
                idleTimeout: m,
                finalTimeout: y,
                childSpanTimeout: P,
                disableAutoFinish: r,
                beforeSpanEnd: (e) => {
                    K(), (0, n.f7)(e, { recordClsOnPageloadSpan: !S });
                },
            });
            function c() {
                ["interactive", "complete"].includes(f.m9.document.readyState) && e.emit("idleSpanEnableAutoFinish", _);
            }
            return (
                r &&
                    f.m9.document &&
                    (f.m9.document.addEventListener("readystatechange", () => {
                        c();
                    }),
                    c()),
                _
            );
        }
        return {
            name: "BrowserTracing",
            afterAllSetup(e) {
                var r, n, _, u;
                let R,
                    h,
                    S = f.m9.location && f.m9.location.href;
                e.on("startNavigationSpan", (t) => {
                    (0, c.s3)() === e &&
                        (h &&
                            !(0, E.XU)(h).timestamp &&
                            (A.X && d.kg.log(`[Tracing] Finishing current root span with op: ${((0, E.XU))(h).op}`),
                            h.end()),
                        (h = B(e, {
                            op: "navigation",
                            ...t,
                        })));
                }),
                    e.on("startPageLoadSpan", (t, r = {}) => {
                        if ((0, c.s3)() !== e) return;
                        h &&
                            !(0, E.XU)(h).timestamp &&
                            (A.X && d.kg.log(`[Tracing] Finishing current root span with op: ${((0, E.XU))(h).op}`),
                            h.end());
                        let n = r.sentryTrace || L("sentry-trace"),
                            a = r.baggage || L("baggage"),
                            i = (0, I.pT)(n, a);
                        (0, c.nZ)().setPropagationContext(i),
                            (h = B(e, {
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
                    f.m9.location &&
                        (U &&
                            D(e, {
                                name: f.m9.location.pathname,
                                startTime: p.Z1 ? p.Z1 / 1000 : void 0,
                                attributes: {
                                    [s.Zj]: "url",
                                    [s.S3]: "auto.pageload.browser",
                                },
                            }),
                        H &&
                            (0, i.a)(({ to: t, from: r }) => {
                                if (void 0 === r && S && -1 !== S.indexOf(t)) {
                                    S = void 0;
                                    return;
                                }
                                r !== t &&
                                    ((S = void 0),
                                    C(e, {
                                        name: f.m9.location.pathname,
                                        attributes: {
                                            [s.Zj]: "url",
                                            [s.S3]: "auto.navigation.browser",
                                        },
                                    }));
                            })),
                    v && (0, N.j)(),
                    T &&
                        ((r = m),
                        (n = y),
                        (_ = P),
                        (u = W),
                        f.m9.document &&
                            addEventListener(
                                "click",
                                () => {
                                    let e = "ui.action.click",
                                        t = (0, E.HN)(),
                                        a = t && (0, E.Gx)(t);
                                    if (a && ["navigation", "pageload"].includes((0, E.XU)(a).op)) {
                                        A.X &&
                                            d.kg.warn(
                                                `[Tracing] Did not create ${e} span because a pageload or navigation span is in progress.`,
                                            );
                                        return;
                                    }
                                    if (
                                        (R && (R.setAttribute(s.ju, "interactionInterrupted"), R.end(), (R = void 0)),
                                        !u.name)
                                    ) {
                                        A.X &&
                                            d.kg.warn(
                                                `[Tracing] Did not create ${e} transaction because _latestRouteName is missing.`,
                                            );
                                        return;
                                    }
                                    R = (0, o.R)(
                                        {
                                            name: u.name,
                                            op: e,
                                            attributes: { [s.Zj]: u.source || "url" },
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
                    (0, O.L7)(e, {
                        traceFetch: M,
                        traceXHR: w,
                        tracePropagationTargets: e.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: G,
                        enableHTTPTimings: b,
                    });
            },
        };
    };
function D(e, t, r) {
    e.emit("startPageLoadSpan", t, r), (0, c.nZ)().setTransactionName(t.name);
    let n = (0, E.HN)();
    return "pageload" === (n && (0, E.XU)(n).op) ? n : void 0;
}
function C(e, t) {
    (0, c.aF)().setPropagationContext((0, R.Q)()),
        (0, c.nZ)().setPropagationContext((0, R.Q)()),
        e.emit("startNavigationSpan", t),
        (0, c.nZ)().setTransactionName(t.name);
    let r = (0, E.HN)();
    return "navigation" === (r && (0, E.XU)(r).op) ? r : void 0;
}
function L(e) {
    let t = (0, T.qT)(`meta[name=${e}]`);
    return t ? t.getAttribute("content") : void 0;
}
