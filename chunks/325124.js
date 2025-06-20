a.d(e, {
    E8: () => h,
    Wo: () => O,
    og: () => P
});
var r = a(650665),
    _ = a(423850),
    n = a(393523),
    o = a(553062),
    i = a(859502),
    c = a(988097),
    s = a(263449),
    E = a(696486),
    l = a(305625),
    u = a(622916),
    I = a(370541),
    d = a(101284),
    R = a(731889),
    N = a(467510),
    f = a(454463),
    A = a(163162),
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
                enableLongAnimationFrame: R,
                _experiments: { enableInteractions: N },
                beforeStartSpan: h,
                idleTimeout: D,
                finalTimeout: C,
                childSpanTimeout: v,
                markBackgroundSpan: m,
                traceFetch: y,
                traceXHR: S,
                shouldCreateSpanForRequest: U,
                enableHTTPTimings: b,
                instrumentPageLoad: G,
                instrumentNavigation: W
            } = {
                ...L,
                ...t
            },
            w = (0, r.PR)();
        e && (0, _.N)(), R && PerformanceObserver.supportedEntryTypes.includes('long-animation-frame') ? (0, r.Jk)() : a && (0, r.Fv)(), N && (0, r.sn)();
        let M = {
            name: void 0,
            source: void 0
        };
        function B(t, e) {
            let a = 'pageload' === e.op,
                _ = h ? h(e) : e,
                n = _.attributes || {};
            e.name !== _.name && ((n[c.Zj] = 'custom'), (_.attributes = n)), (M.name = _.name), (M.source = n[c.Zj]);
            let i = (0, o.R)(_, {
                idleTimeout: D,
                finalTimeout: C,
                childSpanTimeout: v,
                disableAutoFinish: a,
                beforeSpanEnd: (t) => {
                    w(), (0, r.f7)(t);
                }
            });
            function s() {
                ['interactive', 'complete'].includes(A.m9.document.readyState) && t.emit('idleSpanEnableAutoFinish', i);
            }
            return (
                a &&
                    A.m9.document &&
                    (A.m9.document.addEventListener('readystatechange', () => {
                        s();
                    }),
                    s()),
                i
            );
        }
        return {
            name: 'BrowserTracing',
            afterAllSetup(t) {
                var a, r, i, R;
                let L,
                    h,
                    w = A.m9.location && A.m9.location.href;
                t.on('startNavigationSpan', (e) => {
                    (0, s.s3)() === t &&
                        (h && !(0, E.XU)(h).timestamp && (f.X && u.kg.log(`[Tracing] Finishing current root span with op: ${(0, E.XU)(h).op}`), h.end()),
                        (h = B(t, {
                            op: 'navigation',
                            ...e
                        })));
                }),
                    t.on('startPageLoadSpan', (e, a = {}) => {
                        if ((0, s.s3)() !== t) return;
                        h && !(0, E.XU)(h).timestamp && (f.X && u.kg.log(`[Tracing] Finishing current root span with op: ${(0, E.XU)(h).op}`), h.end());
                        let r = a.sentryTrace || g('sentry-trace'),
                            _ = a.baggage || g('baggage'),
                            n = (0, I.pT)(r, _);
                        (0, s.nZ)().setPropagationContext(n),
                            (h = B(t, {
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
                    A.m9.location &&
                        (G &&
                            O(t, {
                                name: A.m9.location.pathname,
                                startTime: d.Z1 ? d.Z1 / 1000 : void 0,
                                attributes: {
                                    [c.Zj]: 'url',
                                    [c.S3]: 'auto.pageload.browser'
                                }
                            }),
                        W &&
                            (0, n.a)(({ to: e, from: a }) => {
                                if (void 0 === a && w && -1 !== w.indexOf(e)) {
                                    w = void 0;
                                    return;
                                }
                                a !== e &&
                                    ((w = void 0),
                                    P(t, {
                                        name: A.m9.location.pathname,
                                        attributes: {
                                            [c.Zj]: 'url',
                                            [c.S3]: 'auto.navigation.browser'
                                        }
                                    }));
                            })),
                    m && (0, T.j)(),
                    N &&
                        ((a = D),
                        (r = C),
                        (i = v),
                        (R = M),
                        A.m9.document &&
                            addEventListener(
                                'click',
                                () => {
                                    let t = 'ui.action.click',
                                        e = (0, E.HN)(),
                                        _ = e && (0, E.Gx)(e);
                                    if (_ && ['navigation', 'pageload'].includes((0, E.XU)(_).op)) {
                                        f.X && u.kg.warn(`[Tracing] Did not create ${t} span because a pageload or navigation span is in progress.`);
                                        return;
                                    }
                                    if ((L && (L.setAttribute(c.ju, 'interactionInterrupted'), L.end(), (L = void 0)), !R.name)) {
                                        f.X && u.kg.warn(`[Tracing] Did not create ${t} transaction because _latestRouteName is missing.`);
                                        return;
                                    }
                                    L = (0, o.R)(
                                        {
                                            name: R.name,
                                            op: t,
                                            attributes: { [c.Zj]: R.source || 'url' }
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
                        traceFetch: y,
                        traceXHR: S,
                        tracePropagationTargets: t.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: U,
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
function P(t, e) {
    (0, s.aF)().setPropagationContext((0, R.Q)()), (0, s.nZ)().setPropagationContext((0, R.Q)()), t.emit('startNavigationSpan', e), (0, s.nZ)().setTransactionName(e.name);
    let a = (0, E.HN)();
    return 'navigation' === (a && (0, E.XU)(a).op) ? a : void 0;
}
function g(t) {
    let e = (0, N.qT)(`meta[name=${t}]`);
    return e ? e.getAttribute('content') : void 0;
}
