let r, n;
a.d(e, {
    Fv: () => h,
    Jk: () => O,
    PR: () => L,
    f7: () => g,
    sn: () => D
});
var _ = a(696486),
    o = a(152228),
    i = a(988097),
    c = a(241225),
    s = a(101284),
    E = a(467510),
    l = a(622916),
    u = a(873567),
    I = a(665909),
    R = a(395848),
    d = a(501684),
    A = a(108185),
    f = a(896247),
    p = a(416987);
let N = 0,
    T = {};
function L() {
    let t = (0, A.QV)();
    if (t && s.Z1) {
        t.mark && R.m.performance.mark('sentry-tracing-init');
        let e = (0, d.to)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                if (!e) return;
                let a = (0, A.XL)(s.Z1),
                    r = (0, A.XL)(e.startTime);
                I.X && l.kg.log('[Measurements] Adding FID'),
                    (T.fid = {
                        value: t.value,
                        unit: 'millisecond'
                    }),
                    (T['mark.fid'] = {
                        value: a + r,
                        unit: 'second'
                    });
            }),
            a = (0, d.PR)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                e &&
                    (I.X && l.kg.log('[Measurements] Adding CLS'),
                    (T.cls = {
                        value: t.value,
                        unit: ''
                    }),
                    (n = e));
            }, !0),
            _ = (0, d.$A)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                e &&
                    (I.X && l.kg.log('[Measurements] Adding LCP'),
                    (T.lcp = {
                        value: t.value,
                        unit: 'millisecond'
                    }),
                    (r = e));
            }, !0),
            o = (0, d._4)(({ metric: t }) => {
                t.entries[t.entries.length - 1] &&
                    (I.X && l.kg.log('[Measurements] Adding TTFB'),
                    (T.ttfb = {
                        value: t.value,
                        unit: 'millisecond'
                    }));
            });
        return () => {
            e(), a(), _(), o();
        };
    }
    return () => void 0;
}
function h() {
    (0, d._j)('longtask', ({ entries: t }) => {
        for (let e of t) {
            if (!(0, _.HN)()) return;
            let t = (0, A.XL)(s.Z1 + e.startTime),
                a = (0, A.XL)(e.duration),
                r = (0, o.qp)({
                    name: 'Main UI thread blocked',
                    op: 'ui.long-task',
                    startTime: t,
                    attributes: { [i.S3]: 'auto.ui.browser.metrics' }
                });
            r && r.end(t + a);
        }
    });
}
function O() {
    new PerformanceObserver((t) => {
        for (let e of t.getEntries()) {
            if (!(0, _.HN)() || !e.scripts[0]) return;
            let t = (0, A.XL)(s.Z1 + e.startTime),
                a = (0, A.XL)(e.duration),
                r = { [i.S3]: 'auto.ui.browser.metrics' },
                n = e.scripts[0];
            if (n) {
                let { invoker: t, invokerType: e, sourceURL: a, sourceFunctionName: _, sourceCharPosition: o } = n;
                (r['browser.script.invoker'] = t), (r['browser.script.invoker_type'] = e), a && (r['code.filepath'] = a), _ && (r['code.function'] = _), -1 !== o && (r['browser.script.source_char_position'] = o);
            }
            let c = (0, o.qp)({
                name: 'Main UI thread blocked',
                op: 'ui.long-animation-frame',
                startTime: t,
                attributes: r
            });
            c && c.end(t + a);
        }
    }).observe({
        type: 'long-animation-frame',
        buffered: !0
    });
}
function D() {
    (0, d._j)('event', ({ entries: t }) => {
        for (let e of t) {
            if (!(0, _.HN)()) return;
            if ('click' === e.name) {
                let t = (0, A.XL)(s.Z1 + e.startTime),
                    a = (0, A.XL)(e.duration),
                    r = {
                        name: (0, E.Rt)(e.target),
                        op: `ui.interaction.${e.name}`,
                        startTime: t,
                        attributes: { [i.S3]: 'auto.ui.browser.metrics' }
                    },
                    n = (0, E.iY)(e.target);
                n && (r.attributes['ui.component_name'] = n);
                let _ = (0, o.qp)(r);
                _ && _.end(t + a);
            }
        }
    });
}
function g(t) {
    let e = (0, A.QV)();
    if (!e || !R.m.performance.getEntries || !s.Z1) return;
    I.X && l.kg.log('[Tracing] Adding & adjusting spans using Performance API');
    let a = (0, A.XL)(s.Z1),
        o = e.getEntries(),
        { op: d, start_timestamp: L } = (0, _.XU)(t);
    if (
        (o.slice(N).forEach((e) => {
            let r = (0, A.XL)(e.startTime),
                n = (0, A.XL)(Math.max(0, e.duration));
            if ('navigation' !== d || !L || !(a + r < L))
                switch (e.entryType) {
                    case 'navigation':
                        var _, o, c;
                        (_ = t),
                            (o = e),
                            (c = a),
                            ['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach((t) => {
                                P(_, o, t, c);
                            }),
                            P(_, o, 'secureConnection', c, 'TLS/SSL', 'connectEnd'),
                            P(_, o, 'fetch', c, 'cache', 'domainLookupStart'),
                            P(_, o, 'domainLookup', c, 'DNS'),
                            (function (t, e, a) {
                                let r = a + (0, A.XL)(e.requestStart),
                                    n = a + (0, A.XL)(e.responseEnd),
                                    _ = a + (0, A.XL)(e.responseStart);
                                e.responseEnd &&
                                    ((0, A.Y)(t, r, n, {
                                        op: 'browser',
                                        name: 'request',
                                        attributes: { [i.S3]: 'auto.ui.browser.metrics' }
                                    }),
                                    (0, A.Y)(t, _, n, {
                                        op: 'browser',
                                        name: 'response',
                                        attributes: { [i.S3]: 'auto.ui.browser.metrics' }
                                    }));
                            })(_, o, c);
                        break;
                    case 'mark':
                    case 'paint':
                    case 'measure': {
                        var s = t,
                            E = e,
                            N = r,
                            h = n,
                            O = a;
                        let _ = (0, f.W)(),
                            o = O + Math.max(N, (0, A.XL)(_ ? _.requestStart : 0)),
                            c = O + N,
                            u = { [i.S3]: 'auto.resource.browser.metrics' };
                        o !== c && ((u['sentry.browser.measure_happened_before_request'] = !0), (u['sentry.browser.measure_start_time'] = o)),
                            (0, A.Y)(s, o, c + h, {
                                name: E.name,
                                op: E.entryType,
                                attributes: u
                            });
                        let R = (0, p.Y)(),
                            d = e.startTime < R.firstHiddenTime;
                        'first-paint' === e.name &&
                            d &&
                            (I.X && l.kg.log('[Measurements] Adding FP'),
                            (T.fp = {
                                value: e.startTime,
                                unit: 'millisecond'
                            })),
                            'first-contentful-paint' === e.name &&
                                d &&
                                (I.X && l.kg.log('[Measurements] Adding FCP'),
                                (T.fcp = {
                                    value: e.startTime,
                                    unit: 'millisecond'
                                }));
                        break;
                    }
                    case 'resource':
                        !(function (t, e, a, r, n, _) {
                            if ('xmlhttprequest' === e.initiatorType || 'fetch' === e.initiatorType) return;
                            let o = (0, u.en)(a),
                                c = { [i.S3]: 'auto.resource.browser.metrics' };
                            m(c, e, 'transferSize', 'http.response_transfer_size'), m(c, e, 'encodedBodySize', 'http.response_content_length'), m(c, e, 'decodedBodySize', 'http.decoded_response_content_length'), 'renderBlockingStatus' in e && (c['resource.render_blocking_status'] = e.renderBlockingStatus), o.protocol && (c['url.scheme'] = o.protocol.split(':').pop()), o.host && (c['server.address'] = o.host), (c['url.same_origin'] = a.includes(R.m.location.origin));
                            let s = _ + r;
                            (0, A.Y)(t, s, s + n, {
                                name: a.replace(R.m.location.origin, ''),
                                op: e.initiatorType ? `resource.${e.initiatorType}` : 'resource.other',
                                attributes: c
                            });
                        })(t, e, e.name, r, n, a);
                }
        }),
        (N = Math.max(o.length - 1, 0)),
        (function (t) {
            let e = R.m.navigator;
            if (!e) return;
            let a = e.connection;
            a &&
                (a.effectiveType && t.setAttribute('effectiveConnectionType', a.effectiveType),
                a.type && t.setAttribute('connectionType', a.type),
                (0, A.nl)(a.rtt) &&
                    (T['connection.rtt'] = {
                        value: a.rtt,
                        unit: 'millisecond'
                    })),
                (0, A.nl)(e.deviceMemory) && t.setAttribute('deviceMemory', `${e.deviceMemory} GB`),
                (0, A.nl)(e.hardwareConcurrency) && t.setAttribute('hardwareConcurrency', String(e.hardwareConcurrency));
        })(t),
        'pageload' === d)
    ) {
        var h;
        (function (t) {
            let e = (0, f.W)();
            if (!e) return;
            let { responseStart: a, requestStart: r } = e;
            r <= a &&
                (I.X && l.kg.log('[Measurements] Adding TTFB Request Time'),
                (t['ttfb.requestTime'] = {
                    value: a - r,
                    unit: 'millisecond'
                }));
        })(T),
            ['fcp', 'fp', 'lcp'].forEach((t) => {
                let e = T[t];
                if (!e || !L || a >= L) return;
                let r = e.value,
                    n = Math.abs((a + (0, A.XL)(r) - L) * 1000),
                    _ = n - r;
                I.X && l.kg.log(`[Measurements] Normalized ${t} from ${r} to ${n} (${_})`), (e.value = n);
            });
        let e = T['mark.fid'];
        e &&
            T.fid &&
            ((0, A.Y)(t, e.value, e.value + (0, A.XL)(T.fid.value), {
                name: 'first input delay',
                op: 'ui.action',
                attributes: { [i.S3]: 'auto.ui.browser.metrics' }
            }),
            delete T['mark.fid']),
            'fcp' in T || delete T.cls,
            Object.entries(T).forEach(([t, e]) => {
                (0, c.o)(t, e.value, e.unit);
            }),
            (h = t),
            r && (I.X && l.kg.log('[Measurements] Adding LCP Data'), r.element && h.setAttribute('lcp.element', (0, E.Rt)(r.element)), r.id && h.setAttribute('lcp.id', r.id), r.url && h.setAttribute('lcp.url', r.url.trim().slice(0, 200)), h.setAttribute('lcp.size', r.size)),
            n && n.sources && (I.X && l.kg.log('[Measurements] Adding CLS Data'), n.sources.forEach((t, e) => h.setAttribute(`cls.source.${e + 1}`, (0, E.Rt)(t.node))));
    }
    (r = void 0), (n = void 0), (T = {});
}
function P(t, e, a, r, n, _) {
    let o = _ ? e[_] : e[`${a}End`],
        c = e[`${a}Start`];
    c &&
        o &&
        (0, A.Y)(t, r + (0, A.XL)(c), r + (0, A.XL)(o), {
            op: 'browser',
            name: n || a,
            attributes: { [i.S3]: 'auto.ui.browser.metrics' }
        });
}
function m(t, e, a, r) {
    let n = e[a];
    null != n && n < 2147483647 && (t[r] = n);
}
