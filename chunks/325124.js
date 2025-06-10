a.d(e, {
    E8: () => h,
    Wo: () => O,
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
    u = a(622916),
    I = a(370541),
    R = a(101284),
    d = a(731889),
    N = a(467510),
    A = a(454463),
    f = a(163162),
    T = a(119128),
    p = a(799033);
let L = {
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
    h = (t = {}) => {
        (0, i.a)();
        let {
                enableInp: e,
                enableLongTask: a,
                enableLongAnimationFrame: d,
                _experiments: { enableInteractions: N },
                beforeStartSpan: h,
                idleTimeout: P,
                finalTimeout: y,
                childSpanTimeout: C,
                markBackgroundSpan: m,
                traceFetch: v,
                traceXHR: S,
                shouldCreateSpanForRequest: U,
                enableHTTPTimings: G,
                instrumentPageLoad: b,
                instrumentNavigation: w
            } = {
                ...L,
                ...t
            },
            M = (0, r.PR)();
        e && (0, _.N)(), d && PerformanceObserver.supportedEntryTypes.includes('long-animation-frame') ? (0, r.Jk)() : a && (0, r.Fv)(), N && (0, r.sn)();
        let W = {
            name: void 0,
            source: void 0
        };
        function B(t, e) {
            let a = 'pageload' === e.op,
                _ = h ? h(e) : e,
                n = _.attributes || {};
            e.name !== _.name && ((n[c.Zj] = 'custom'), (_.attributes = n)), (W.name = _.name), (W.source = n[c.Zj]);
            let i = (0, o.R)(_, {
                idleTimeout: P,
                finalTimeout: y,
                childSpanTimeout: C,
                disableAutoFinish: a,
                beforeSpanEnd: (t) => {
                    M(), (0, r.f7)(t);
                }
            });
            function E() {
                ['interactive', 'complete'].includes(f.m9.document.readyState) && t.emit('idleSpanEnableAutoFinish', i);
            }
            return (
                a &&
                    f.m9.document &&
                    (f.m9.document.addEventListener('readystatechange', () => {
                        E();
                    }),
                    E()),
                i
            );
        }
        return {
            name: 'BrowserTracing',
            afterAllSetup(t) {
                var a, r, i, d;
                let L,
                    h,
                    M = f.m9.location && f.m9.location.href;
                t.on('startNavigationSpan', (e) => {
                    (0, E.s3)() === t &&
                        (h && !(0, s.XU)(h).timestamp && (A.X && u.kg.log(`[Tracing] Finishing current root span with op: ${(0, s.XU)(h).op}`), h.end()),
                        (h = B(t, {
                            op: 'navigation',
                            ...e
                        })));
                }),
                    t.on('startPageLoadSpan', (e, a = {}) => {
                        if ((0, E.s3)() !== t) return;
                        h && !(0, s.XU)(h).timestamp && (A.X && u.kg.log(`[Tracing] Finishing current root span with op: ${(0, s.XU)(h).op}`), h.end());
                        let r = a.sentryTrace || g('sentry-trace'),
                            _ = a.baggage || g('baggage'),
                            n = (0, I.pT)(r, _);
                        (0, E.nZ)().setPropagationContext(n),
                            (h = B(t, {
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
                    f.m9.location &&
                        (b &&
                            O(t, {
                                name: f.m9.location.pathname,
                                startTime: R.Z1 ? R.Z1 / 1000 : void 0,
                                attributes: {
                                    [c.Zj]: 'url',
                                    [c.S3]: 'auto.pageload.browser'
                                }
                            }),
                        w &&
                            (0, n.a)(({ to: e, from: a }) => {
                                if (void 0 === a && M && -1 !== M.indexOf(e)) {
                                    M = void 0;
                                    return;
                                }
                                a !== e &&
                                    ((M = void 0),
                                    D(t, {
                                        name: f.m9.location.pathname,
                                        attributes: {
                                            [c.Zj]: 'url',
                                            [c.S3]: 'auto.navigation.browser'
                                        }
                                    }));
                            })),
                    m && (0, T.j)(),
                    N &&
                        ((a = P),
                        (r = y),
                        (i = C),
                        (d = W),
                        f.m9.document &&
                            addEventListener(
                                'click',
                                () => {
                                    let t = 'ui.action.click',
                                        e = (0, s.HN)(),
                                        _ = e && (0, s.Gx)(e);
                                    if (_ && ['navigation', 'pageload'].includes((0, s.XU)(_).op)) {
                                        A.X && u.kg.warn(`[Tracing] Did not create ${t} span because a pageload or navigation span is in progress.`);
                                        return;
                                    }
                                    if ((L && (L.setAttribute(c.ju, 'interactionInterrupted'), L.end(), (L = void 0)), !d.name)) {
                                        A.X && u.kg.warn(`[Tracing] Did not create ${t} transaction because _latestRouteName is missing.`);
                                        return;
                                    }
                                    L = (0, o.R)(
                                        {
                                            name: d.name,
                                            op: t,
                                            attributes: { [c.Zj]: d.source || 'url' }
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
                        traceXHR: S,
                        tracePropagationTargets: t.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: U,
                        enableHTTPTimings: G
                    });
            }
        };
    };
function O(t, e, a) {
    t.emit('startPageLoadSpan', e, a), (0, E.nZ)().setTransactionName(e.name);
    let r = (0, s.HN)();
    return 'pageload' === (r && (0, s.XU)(r).op) ? r : void 0;
}
function D(t, e) {
    (0, E.aF)().setPropagationContext((0, d.Q)()), (0, E.nZ)().setPropagationContext((0, d.Q)()), t.emit('startNavigationSpan', e), (0, E.nZ)().setTransactionName(e.name);
    let a = (0, s.HN)();
    return 'navigation' === (a && (0, s.XU)(a).op) ? a : void 0;
}
function g(t) {
    let e = (0, N.qT)(`meta[name=${t}]`);
    return e ? e.getAttribute('content') : void 0;
}
