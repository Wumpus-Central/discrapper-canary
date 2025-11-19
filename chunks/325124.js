_.d(e, {
    E8: () => p,
    Wo: () => C,
    og: () => P,
});
var a = _(650665),
    r = _(423850),
    n = _(393523),
    o = _(553062),
    E = _(859502),
    i = _(988097),
    c = _(263449),
    s = _(696486),
    l = _(305625),
    I = _(622916),
    R = _(370541),
    N = _(101284),
    A = _(731889),
    u = _(467510),
    T = _(454463),
    d = _(163162),
    f = _(119128),
    O = _(799033);
let L = {
        ...o.A,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !1,
        enableInp: !0,
        _experiments: {},
        ...O.k3,
    },
    p = (t = {}) => {
        (0, E.a)();
        let {
                enableInp: e,
                enableLongTask: _,
                enableLongAnimationFrame: A,
                _experiments: { enableInteractions: u },
                beforeStartSpan: p,
                idleTimeout: D,
                finalTimeout: S,
                childSpanTimeout: g,
                markBackgroundSpan: y,
                traceFetch: m,
                traceXHR: G,
                shouldCreateSpanForRequest: v,
                enableHTTPTimings: U,
                instrumentPageLoad: W,
                instrumentNavigation: b,
            } = {
                ...L,
                ...t,
            },
            w = (0, a.PR)();
        e && (0, r.N)(),
            A && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")
                ? (0, a.Jk)()
                : _ && (0, a.Fv)(),
            u && (0, a.sn)();
        let M = {
            name: void 0,
            source: void 0,
        };
        function Y(t, e) {
            let _ = "pageload" === e.op,
                r = p ? p(e) : e,
                n = r.attributes || {};
            e.name !== r.name && ((n[i.Zj] = "custom"), (r.attributes = n)), (M.name = r.name), (M.source = n[i.Zj]);
            let E = (0, o.R)(r, {
                idleTimeout: D,
                finalTimeout: S,
                childSpanTimeout: g,
                disableAutoFinish: _,
                beforeSpanEnd: (t) => {
                    w(), (0, a.f7)(t);
                },
            });
            function c() {
                ["interactive", "complete"].includes(d.m9.document.readyState) && t.emit("idleSpanEnableAutoFinish", E);
            }
            return (
                _ &&
                    d.m9.document &&
                    (d.m9.document.addEventListener("readystatechange", () => {
                        c();
                    }),
                    c()),
                E
            );
        }
        return {
            name: "BrowserTracing",
            afterAllSetup(t) {
                var _, a, E, A;
                let L,
                    p,
                    w = d.m9.location && d.m9.location.href;
                t.on("startNavigationSpan", (e) => {
                    (0, c.s3)() === t &&
                        (p &&
                            !(0, s.XU)(p).timestamp &&
                            (T.X && I.kg.log(`[Tracing] Finishing current root span with op: ${((0, s.XU))(p).op}`),
                            p.end()),
                        (p = Y(t, {
                            op: "navigation",
                            ...e,
                        })));
                }),
                    t.on("startPageLoadSpan", (e, _ = {}) => {
                        if ((0, c.s3)() !== t) return;
                        p &&
                            !(0, s.XU)(p).timestamp &&
                            (T.X && I.kg.log(`[Tracing] Finishing current root span with op: ${((0, s.XU))(p).op}`),
                            p.end());
                        let a = _.sentryTrace || h("sentry-trace"),
                            r = _.baggage || h("baggage"),
                            n = (0, R.pT)(a, r);
                        (0, c.nZ)().setPropagationContext(n),
                            (p = Y(t, {
                                op: "pageload",
                                ...e,
                            }));
                    }),
                    t.on("spanEnd", (t) => {
                        let e = (0, s.XU)(t).op;
                        if (t !== (0, s.Gx)(t) || ("navigation" !== e && "pageload" !== e)) return;
                        let _ = (0, c.nZ)(),
                            a = _.getPropagationContext();
                        _.setPropagationContext({
                            ...a,
                            sampled: void 0 !== a.sampled ? a.sampled : (0, s.Tt)(t),
                            dsc: a.dsc || (0, l.jC)(t),
                        });
                    }),
                    d.m9.location &&
                        (W &&
                            C(t, {
                                name: d.m9.location.pathname,
                                startTime: N.Z1 ? N.Z1 / 1000 : void 0,
                                attributes: {
                                    [i.Zj]: "url",
                                    [i.S3]: "auto.pageload.browser",
                                },
                            }),
                        b &&
                            (0, n.a)(({ to: e, from: _ }) => {
                                if (void 0 === _ && w && -1 !== w.indexOf(e)) {
                                    w = void 0;
                                    return;
                                }
                                _ !== e &&
                                    ((w = void 0),
                                    P(t, {
                                        name: d.m9.location.pathname,
                                        attributes: {
                                            [i.Zj]: "url",
                                            [i.S3]: "auto.navigation.browser",
                                        },
                                    }));
                            })),
                    y && (0, f.j)(),
                    u &&
                        ((_ = D),
                        (a = S),
                        (E = g),
                        (A = M),
                        d.m9.document &&
                            addEventListener(
                                "click",
                                () => {
                                    let t = "ui.action.click",
                                        e = (0, s.HN)(),
                                        r = e && (0, s.Gx)(e);
                                    if (r && ["navigation", "pageload"].includes((0, s.XU)(r).op)) {
                                        T.X &&
                                            I.kg.warn(
                                                `[Tracing] Did not create ${t} span because a pageload or navigation span is in progress.`,
                                            );
                                        return;
                                    }
                                    if (
                                        (L && (L.setAttribute(i.ju, "interactionInterrupted"), L.end(), (L = void 0)),
                                        !A.name)
                                    ) {
                                        T.X &&
                                            I.kg.warn(
                                                `[Tracing] Did not create ${t} transaction because _latestRouteName is missing.`,
                                            );
                                        return;
                                    }
                                    L = (0, o.R)(
                                        {
                                            name: A.name,
                                            op: t,
                                            attributes: { [i.Zj]: A.source || "url" },
                                        },
                                        {
                                            idleTimeout: _,
                                            finalTimeout: a,
                                            childSpanTimeout: E,
                                        },
                                    );
                                },
                                {
                                    once: !1,
                                    capture: !0,
                                },
                            )),
                    e && (0, r.D)(),
                    (0, O.L7)(t, {
                        traceFetch: m,
                        traceXHR: G,
                        tracePropagationTargets: t.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: v,
                        enableHTTPTimings: U,
                    });
            },
        };
    };
function C(t, e, _) {
    t.emit("startPageLoadSpan", e, _), (0, c.nZ)().setTransactionName(e.name);
    let a = (0, s.HN)();
    return "pageload" === (a && (0, s.XU)(a).op) ? a : void 0;
}
function P(t, e) {
    (0, c.aF)().setPropagationContext((0, A.Q)()),
        (0, c.nZ)().setPropagationContext((0, A.Q)()),
        t.emit("startNavigationSpan", e),
        (0, c.nZ)().setTransactionName(e.name);
    let _ = (0, s.HN)();
    return "navigation" === (_ && (0, s.XU)(_).op) ? _ : void 0;
}
function h(t) {
    let e = (0, u.qT)(`meta[name=${t}]`);
    return e ? e.getAttribute("content") : void 0;
}
