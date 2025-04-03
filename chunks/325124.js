a.d(e, {
    E8: () => h,
    Wo: () => O,
    og: () => D
});
var r = a(650665),
    n = a(423850),
    _ = a(393523),
    o = a(553062),
    i = a(859502),
    c = a(988097),
    s = a(263449),
    E = a(696486),
    l = a(305625),
    u = a(622916),
    I = a(370541),
    R = a(101284),
    d = a(731889),
    A = a(467510),
    f = a(454463),
    p = a(163162),
    N = a(119128),
    T = a(799033);
let L = {
        ...o.A,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !1,
        enableInp: !0,
        _experiments: {},
        ...T.k3
    },
    h = (t = {}) => {
        (0, i.a)();
        let {
                enableInp: e,
                enableLongTask: a,
                enableLongAnimationFrame: d,
                _experiments: { enableInteractions: A },
                beforeStartSpan: h,
                idleTimeout: P,
                finalTimeout: m,
                childSpanTimeout: y,
                markBackgroundSpan: v,
                traceFetch: C,
                traceXHR: S,
                shouldCreateSpanForRequest: G,
                enableHTTPTimings: b,
                instrumentPageLoad: M,
                instrumentNavigation: U
            } = {
                ...L,
                ...t
            },
            w = (0, r.PR)();
        e && (0, n.N)(), d && PerformanceObserver.supportedEntryTypes.includes('long-animation-frame') ? (0, r.Jk)() : a && (0, r.Fv)(), A && (0, r.sn)();
        let B = {
            name: void 0,
            source: void 0
        };
        function W(t, e) {
            let a = 'pageload' === e.op,
                n = h ? h(e) : e,
                _ = n.attributes || {};
            e.name !== n.name && ((_[c.Zj] = 'custom'), (n.attributes = _)), (B.name = n.name), (B.source = _[c.Zj]);
            let i = (0, o.R)(n, {
                idleTimeout: P,
                finalTimeout: m,
                childSpanTimeout: y,
                disableAutoFinish: a,
                beforeSpanEnd: (t) => {
                    w(), (0, r.f7)(t);
                }
            });
            function s() {
                ['interactive', 'complete'].includes(p.m9.document.readyState) && t.emit('idleSpanEnableAutoFinish', i);
            }
            return (
                a &&
                    p.m9.document &&
                    (p.m9.document.addEventListener('readystatechange', () => {
                        s();
                    }),
                    s()),
                i
            );
        }
        return {
            name: 'BrowserTracing',
            afterAllSetup(t) {
                var a, r, i, d;
                let L,
                    h,
                    w = p.m9.location && p.m9.location.href;
                t.on('startNavigationSpan', (e) => {
                    (0, s.s3)() === t &&
                        (h && !(0, E.XU)(h).timestamp && (f.X && u.kg.log(`[Tracing] Finishing current root span with op: ${(0, E.XU)(h).op}`), h.end()),
                        (h = W(t, {
                            op: 'navigation',
                            ...e
                        })));
                }),
                    t.on('startPageLoadSpan', (e, a = {}) => {
                        if ((0, s.s3)() !== t) return;
                        h && !(0, E.XU)(h).timestamp && (f.X && u.kg.log(`[Tracing] Finishing current root span with op: ${(0, E.XU)(h).op}`), h.end());
                        let r = a.sentryTrace || g('sentry-trace'),
                            n = a.baggage || g('baggage'),
                            _ = (0, I.pT)(r, n);
                        (0, s.nZ)().setPropagationContext(_),
                            (h = W(t, {
                                op: 'pageload',
                                ...e
                            }));
                    }),
                    t.on('spanEnd', (t) => {
                        let e = (0, E.XU)(t).op;
                        if (t !== (0, E.Gx)(t) || ('navigation' !== e && 'pageload' !== e)) return;
                        let a = (0, s.nZ)(),
                            r = a.getPropagationContext();
                        a.setPropagationContext({
                            ...r,
                            sampled: void 0 !== r.sampled ? r.sampled : (0, E.Tt)(t),
                            dsc: r.dsc || (0, l.jC)(t)
                        });
                    }),
                    p.m9.location &&
                        (M &&
                            O(t, {
                                name: p.m9.location.pathname,
                                startTime: R.Z1 ? R.Z1 / 1000 : void 0,
                                attributes: {
                                    [c.Zj]: 'url',
                                    [c.S3]: 'auto.pageload.browser'
                                }
                            }),
                        U &&
                            (0, _.a)(({ to: e, from: a }) => {
                                if (void 0 === a && w && -1 !== w.indexOf(e)) {
                                    w = void 0;
                                    return;
                                }
                                a !== e &&
                                    ((w = void 0),
                                    D(t, {
                                        name: p.m9.location.pathname,
                                        attributes: {
                                            [c.Zj]: 'url',
                                            [c.S3]: 'auto.navigation.browser'
                                        }
                                    }));
                            })),
                    v && (0, N.j)(),
                    A &&
                        ((a = P),
                        (r = m),
                        (i = y),
                        (d = B),
                        p.m9.document &&
                            addEventListener(
                                'click',
                                () => {
                                    let t = 'ui.action.click',
                                        e = (0, E.HN)(),
                                        n = e && (0, E.Gx)(e);
                                    if (n && ['navigation', 'pageload'].includes((0, E.XU)(n).op)) {
                                        f.X && u.kg.warn(`[Tracing] Did not create ${t} span because a pageload or navigation span is in progress.`);
                                        return;
                                    }
                                    if ((L && (L.setAttribute(c.ju, 'interactionInterrupted'), L.end(), (L = void 0)), !d.name)) {
                                        f.X && u.kg.warn(`[Tracing] Did not create ${t} transaction because _latestRouteName is missing.`);
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
                    e && (0, n.D)(),
                    (0, T.L7)(t, {
                        traceFetch: C,
                        traceXHR: S,
                        tracePropagationTargets: t.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: G,
                        enableHTTPTimings: b
                    });
            }
        };
    };
function O(t, e, a) {
    t.emit('startPageLoadSpan', e, a), (0, s.nZ)().setTransactionName(e.name);
    let r = (0, E.HN)();
    return 'pageload' === (r && (0, E.XU)(r).op) ? r : void 0;
}
function D(t, e) {
    (0, s.aF)().setPropagationContext((0, d.Q)()), (0, s.nZ)().setPropagationContext((0, d.Q)()), t.emit('startNavigationSpan', e), (0, s.nZ)().setTransactionName(e.name);
    let a = (0, E.HN)();
    return 'navigation' === (a && (0, E.XU)(a).op) ? a : void 0;
}
function g(t) {
    let e = (0, A.qT)(`meta[name=${t}]`);
    return e ? e.getAttribute('content') : void 0;
}
