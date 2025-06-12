a.d(e, {
    E8: () => O,
    Wo: () => h,
    og: () => D
});
var r = a(650665),
    _ = a(423850),
    n = a(393523),
    o = a(553062),
    i = a(859502),
    c = a(988097),
    E = a(263449),
    s = a(696486),
    l = a(305625),
    I = a(622916),
    u = a(370541),
    R = a(101284),
    A = a(731889),
    T = a(467510),
    N = a(454463),
    d = a(163162),
    L = a(119128),
    p = a(799033);
let f = {
        ...o.A,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !1,
        enableInp: !0,
        _experiments: {},
        ...p.k3
    },
    O = (t = {}) => {
        (0, i.a)();
        let {
                enableInp: e,
                enableLongTask: a,
                enableLongAnimationFrame: A,
                _experiments: { enableInteractions: T },
                beforeStartSpan: O,
                idleTimeout: g,
                finalTimeout: C,
                childSpanTimeout: y,
                markBackgroundSpan: m,
                traceFetch: v,
                traceXHR: U,
                shouldCreateSpanForRequest: S,
                enableHTTPTimings: G,
                instrumentPageLoad: w,
                instrumentNavigation: b
            } = {
                ...f,
                ...t
            },
            W = (0, r.PR)();
        e && (0, _.N)(), A && PerformanceObserver.supportedEntryTypes.includes('long-animation-frame') ? (0, r.Jk)() : a && (0, r.Fv)(), T && (0, r.sn)();
        let M = {
            name: void 0,
            source: void 0
        };
        function B(t, e) {
            let a = 'pageload' === e.op,
                _ = O ? O(e) : e,
                n = _.attributes || {};
            e.name !== _.name && ((n[c.Zj] = 'custom'), (_.attributes = n)), (M.name = _.name), (M.source = n[c.Zj]);
            let i = (0, o.R)(_, {
                idleTimeout: g,
                finalTimeout: C,
                childSpanTimeout: y,
                disableAutoFinish: a,
                beforeSpanEnd: (t) => {
                    W(), (0, r.f7)(t);
                }
            });
            function E() {
                ['interactive', 'complete'].includes(d.m9.document.readyState) && t.emit('idleSpanEnableAutoFinish', i);
            }
            return (
                a &&
                    d.m9.document &&
                    (d.m9.document.addEventListener('readystatechange', () => {
                        E();
                    }),
                    E()),
                i
            );
        }
        return {
            name: 'BrowserTracing',
            afterAllSetup(t) {
                var a, r, i, A;
                let f,
                    O,
                    W = d.m9.location && d.m9.location.href;
                t.on('startNavigationSpan', (e) => {
                    (0, E.s3)() === t &&
                        (O && !(0, s.XU)(O).timestamp && (N.X && I.kg.log(`[Tracing] Finishing current root span with op: ${(0, s.XU)(O).op}`), O.end()),
                        (O = B(t, {
                            op: 'navigation',
                            ...e
                        })));
                }),
                    t.on('startPageLoadSpan', (e, a = {}) => {
                        if ((0, E.s3)() !== t) return;
                        O && !(0, s.XU)(O).timestamp && (N.X && I.kg.log(`[Tracing] Finishing current root span with op: ${(0, s.XU)(O).op}`), O.end());
                        let r = a.sentryTrace || P('sentry-trace'),
                            _ = a.baggage || P('baggage'),
                            n = (0, u.pT)(r, _);
                        (0, E.nZ)().setPropagationContext(n),
                            (O = B(t, {
                                op: 'pageload',
                                ...e
                            }));
                    }),
                    t.on('spanEnd', (t) => {
                        let e = (0, s.XU)(t).op;
                        if (t !== (0, s.Gx)(t) || ('navigation' !== e && 'pageload' !== e)) return;
                        let a = (0, E.nZ)(),
                            r = a.getPropagationContext();
                        a.setPropagationContext({
                            ...r,
                            sampled: void 0 !== r.sampled ? r.sampled : (0, s.Tt)(t),
                            dsc: r.dsc || (0, l.jC)(t)
                        });
                    }),
                    d.m9.location &&
                        (w &&
                            h(t, {
                                name: d.m9.location.pathname,
                                startTime: R.Z1 ? R.Z1 / 1000 : void 0,
                                attributes: {
                                    [c.Zj]: 'url',
                                    [c.S3]: 'auto.pageload.browser'
                                }
                            }),
                        b &&
                            (0, n.a)(({ to: e, from: a }) => {
                                if (void 0 === a && W && -1 !== W.indexOf(e)) {
                                    W = void 0;
                                    return;
                                }
                                a !== e &&
                                    ((W = void 0),
                                    D(t, {
                                        name: d.m9.location.pathname,
                                        attributes: {
                                            [c.Zj]: 'url',
                                            [c.S3]: 'auto.navigation.browser'
                                        }
                                    }));
                            })),
                    m && (0, L.j)(),
                    T &&
                        ((a = g),
                        (r = C),
                        (i = y),
                        (A = M),
                        d.m9.document &&
                            addEventListener(
                                'click',
                                () => {
                                    let t = 'ui.action.click',
                                        e = (0, s.HN)(),
                                        _ = e && (0, s.Gx)(e);
                                    if (_ && ['navigation', 'pageload'].includes((0, s.XU)(_).op)) {
                                        N.X && I.kg.warn(`[Tracing] Did not create ${t} span because a pageload or navigation span is in progress.`);
                                        return;
                                    }
                                    if ((f && (f.setAttribute(c.ju, 'interactionInterrupted'), f.end(), (f = void 0)), !A.name)) {
                                        N.X && I.kg.warn(`[Tracing] Did not create ${t} transaction because _latestRouteName is missing.`);
                                        return;
                                    }
                                    f = (0, o.R)(
                                        {
                                            name: A.name,
                                            op: t,
                                            attributes: { [c.Zj]: A.source || 'url' }
                                        },
                                        {
                                            idleTimeout: a,
                                            finalTimeout: r,
                                            childSpanTimeout: i
                                        }
                                    );
                                },
                                {
                                    once: !1,
                                    capture: !0
                                }
                            )),
                    e && (0, _.D)(),
                    (0, p.L7)(t, {
                        traceFetch: v,
                        traceXHR: U,
                        tracePropagationTargets: t.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: S,
                        enableHTTPTimings: G
                    });
            }
        };
    };
function h(t, e, a) {
    t.emit('startPageLoadSpan', e, a), (0, E.nZ)().setTransactionName(e.name);
    let r = (0, s.HN)();
    return 'pageload' === (r && (0, s.XU)(r).op) ? r : void 0;
}
function D(t, e) {
    (0, E.aF)().setPropagationContext((0, A.Q)()), (0, E.nZ)().setPropagationContext((0, A.Q)()), t.emit('startNavigationSpan', e), (0, E.nZ)().setTransactionName(e.name);
    let a = (0, s.HN)();
    return 'navigation' === (a && (0, s.XU)(a).op) ? a : void 0;
}
function P(t) {
    let e = (0, T.qT)(`meta[name=${t}]`);
    return e ? e.getAttribute('content') : void 0;
}
