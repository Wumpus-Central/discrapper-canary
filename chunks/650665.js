let r, _;
a.d(e, {
    Fv: () => h,
    Jk: () => O,
    PR: () => L,
    f7: () => g,
    sn: () => P
});
var n = a(696486),
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
    N = a(108185),
    f = a(896247),
    A = a(416987);
let T = 0,
    p = {};
function L() {
    let t = (0, N.QV)();
    if (t && s.Z1) {
        t.mark && R.m.performance.mark('sentry-tracing-init');
        let e = (0, d.to)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                if (!e) return;
                let a = (0, N.XL)(s.Z1),
                    r = (0, N.XL)(e.startTime);
                (I.X && l.kg.log('[Measurements] Adding FID'),
                    (p.fid = {
                        value: t.value,
                        unit: 'millisecond'
                    }),
                    (p['mark.fid'] = {
                        value: a + r,
                        unit: 'second'
                    }));
            }),
            a = (0, d.PR)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                e &&
                    (I.X && l.kg.log('[Measurements] Adding CLS'),
                    (p.cls = {
                        value: t.value,
                        unit: ''
                    }),
                    (_ = e));
            }, !0),
            n = (0, d.$A)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                e &&
                    (I.X && l.kg.log('[Measurements] Adding LCP'),
                    (p.lcp = {
                        value: t.value,
                        unit: 'millisecond'
                    }),
                    (r = e));
            }, !0),
            o = (0, d._4)(({ metric: t }) => {
                t.entries[t.entries.length - 1] &&
                    (I.X && l.kg.log('[Measurements] Adding TTFB'),
                    (p.ttfb = {
                        value: t.value,
                        unit: 'millisecond'
                    }));
            });
        return () => {
            (e(), a(), n(), o());
        };
    }
    return () => void 0;
}
function h() {
    (0, d._j)('longtask', ({ entries: t }) => {
        for (let e of t) {
            if (!(0, n.HN)()) return;
            let t = (0, N.XL)(s.Z1 + e.startTime),
                a = (0, N.XL)(e.duration),
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
            if (!(0, n.HN)() || !e.scripts[0]) return;
            let t = (0, N.XL)(s.Z1 + e.startTime),
                a = (0, N.XL)(e.duration),
                r = { [i.S3]: 'auto.ui.browser.metrics' },
                _ = e.scripts[0];
            if (_) {
                let { invoker: t, invokerType: e, sourceURL: a, sourceFunctionName: n, sourceCharPosition: o } = _;
                ((r['browser.script.invoker'] = t), (r['browser.script.invoker_type'] = e), a && (r['code.filepath'] = a), n && (r['code.function'] = n), -1 !== o && (r['browser.script.source_char_position'] = o));
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
function P() {
    (0, d._j)('event', ({ entries: t }) => {
        for (let e of t) {
            if (!(0, n.HN)()) return;
            if ('click' === e.name) {
                let t = (0, N.XL)(s.Z1 + e.startTime),
                    a = (0, N.XL)(e.duration),
                    r = {
                        name: (0, E.Rt)(e.target),
                        op: `ui.interaction.${e.name}`,
                        startTime: t,
                        attributes: { [i.S3]: 'auto.ui.browser.metrics' }
                    },
                    _ = (0, E.iY)(e.target);
                _ && (r.attributes['ui.component_name'] = _);
                let n = (0, o.qp)(r);
                n && n.end(t + a);
            }
        }
    });
}
function g(t) {
    let e = (0, N.QV)();
    if (!e || !R.m.performance.getEntries || !s.Z1) return;
    I.X && l.kg.log('[Tracing] Adding & adjusting spans using Performance API');
    let a = (0, N.XL)(s.Z1),
        o = e.getEntries(),
        { op: d, start_timestamp: L } = (0, n.XU)(t);
    if (
        (o.slice(T).forEach((e) => {
            let r = (0, N.XL)(e.startTime),
                _ = (0, N.XL)(Math.max(0, e.duration));
            if ('navigation' !== d || !L || !(a + r < L))
                switch (e.entryType) {
                    case 'navigation':
                        var n, o, c;
                        ((n = t),
                            (o = e),
                            (c = a),
                            ['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach((t) => {
                                D(n, o, t, c);
                            }),
                            D(n, o, 'secureConnection', c, 'TLS/SSL', 'connectEnd'),
                            D(n, o, 'fetch', c, 'cache', 'domainLookupStart'),
                            D(n, o, 'domainLookup', c, 'DNS'),
                            (function (t, e, a) {
                                let r = a + (0, N.XL)(e.requestStart),
                                    _ = a + (0, N.XL)(e.responseEnd),
                                    n = a + (0, N.XL)(e.responseStart);
                                e.responseEnd &&
                                    ((0, N.Y)(t, r, _, {
                                        op: 'browser',
                                        name: 'request',
                                        attributes: { [i.S3]: 'auto.ui.browser.metrics' }
                                    }),
                                    (0, N.Y)(t, n, _, {
                                        op: 'browser',
                                        name: 'response',
                                        attributes: { [i.S3]: 'auto.ui.browser.metrics' }
                                    }));
                            })(n, o, c));
                        break;
                    case 'mark':
                    case 'paint':
                    case 'measure': {
                        var s = t,
                            E = e,
                            T = r,
                            h = _,
                            O = a;
                        let n = (0, f.W)(),
                            o = O + Math.max(T, (0, N.XL)(n ? n.requestStart : 0)),
                            c = O + T,
                            u = { [i.S3]: 'auto.resource.browser.metrics' };
                        (o !== c && ((u['sentry.browser.measure_happened_before_request'] = !0), (u['sentry.browser.measure_start_time'] = o)),
                            (0, N.Y)(s, o, c + h, {
                                name: E.name,
                                op: E.entryType,
                                attributes: u
                            }));
                        let R = (0, A.Y)(),
                            d = e.startTime < R.firstHiddenTime;
                        ('first-paint' === e.name &&
                            d &&
                            (I.X && l.kg.log('[Measurements] Adding FP'),
                            (p.fp = {
                                value: e.startTime,
                                unit: 'millisecond'
                            })),
                            'first-contentful-paint' === e.name &&
                                d &&
                                (I.X && l.kg.log('[Measurements] Adding FCP'),
                                (p.fcp = {
                                    value: e.startTime,
                                    unit: 'millisecond'
                                })));
                        break;
                    }
                    case 'resource':
                        !(function (t, e, a, r, _, n) {
                            if ('xmlhttprequest' === e.initiatorType || 'fetch' === e.initiatorType) return;
                            let o = (0, u.en)(a),
                                c = { [i.S3]: 'auto.resource.browser.metrics' };
                            (C(c, e, 'transferSize', 'http.response_transfer_size'), C(c, e, 'encodedBodySize', 'http.response_content_length'), C(c, e, 'decodedBodySize', 'http.decoded_response_content_length'), 'renderBlockingStatus' in e && (c['resource.render_blocking_status'] = e.renderBlockingStatus), o.protocol && (c['url.scheme'] = o.protocol.split(':').pop()), o.host && (c['server.address'] = o.host), (c['url.same_origin'] = a.includes(R.m.location.origin)));
                            let s = n + r;
                            (0, N.Y)(t, s, s + _, {
                                name: a.replace(R.m.location.origin, ''),
                                op: e.initiatorType ? `resource.${e.initiatorType}` : 'resource.other',
                                attributes: c
                            });
                        })(t, e, e.name, r, _, a);
                }
        }),
        (T = Math.max(o.length - 1, 0)),
        (function (t) {
            let e = R.m.navigator;
            if (!e) return;
            let a = e.connection;
            (a &&
                (a.effectiveType && t.setAttribute('effectiveConnectionType', a.effectiveType),
                a.type && t.setAttribute('connectionType', a.type),
                (0, N.nl)(a.rtt) &&
                    (p['connection.rtt'] = {
                        value: a.rtt,
                        unit: 'millisecond'
                    })),
                (0, N.nl)(e.deviceMemory) && t.setAttribute('deviceMemory', `${e.deviceMemory} GB`),
                (0, N.nl)(e.hardwareConcurrency) && t.setAttribute('hardwareConcurrency', String(e.hardwareConcurrency)));
        })(t),
        'pageload' === d)
    ) {
        var h;
        ((function (t) {
            let e = (0, f.W)();
            if (!e) return;
            let { responseStart: a, requestStart: r } = e;
            r <= a &&
                (I.X && l.kg.log('[Measurements] Adding TTFB Request Time'),
                (t['ttfb.requestTime'] = {
                    value: a - r,
                    unit: 'millisecond'
                }));
        })(p),
            ['fcp', 'fp', 'lcp'].forEach((t) => {
                let e = p[t];
                if (!e || !L || a >= L) return;
                let r = e.value,
                    _ = Math.abs((a + (0, N.XL)(r) - L) * 1000),
                    n = _ - r;
                (I.X && l.kg.log(`[Measurements] Normalized ${t} from ${r} to ${_} (${n})`), (e.value = _));
            }));
        let e = p['mark.fid'];
        (e &&
            p.fid &&
            ((0, N.Y)(t, e.value, e.value + (0, N.XL)(p.fid.value), {
                name: 'first input delay',
                op: 'ui.action',
                attributes: { [i.S3]: 'auto.ui.browser.metrics' }
            }),
            delete p['mark.fid']),
            'fcp' in p || delete p.cls,
            Object.entries(p).forEach(([t, e]) => {
                (0, c.o)(t, e.value, e.unit);
            }),
            (h = t),
            r && (I.X && l.kg.log('[Measurements] Adding LCP Data'), r.element && h.setAttribute('lcp.element', (0, E.Rt)(r.element)), r.id && h.setAttribute('lcp.id', r.id), r.url && h.setAttribute('lcp.url', r.url.trim().slice(0, 200)), h.setAttribute('lcp.size', r.size)),
            _ && _.sources && (I.X && l.kg.log('[Measurements] Adding CLS Data'), _.sources.forEach((t, e) => h.setAttribute(`cls.source.${e + 1}`, (0, E.Rt)(t.node)))));
    }
    ((r = void 0), (_ = void 0), (p = {}));
}
function D(t, e, a, r, _, n) {
    let o = n ? e[n] : e[`${a}End`],
        c = e[`${a}Start`];
    c &&
        o &&
        (0, N.Y)(t, r + (0, N.XL)(c), r + (0, N.XL)(o), {
            op: 'browser',
            name: _ || a,
            attributes: { [i.S3]: 'auto.ui.browser.metrics' }
        });
}
function C(t, e, a, r) {
    let _ = e[a];
    null != _ && _ < 2147483647 && (t[r] = _);
}
