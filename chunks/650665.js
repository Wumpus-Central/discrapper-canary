let r, n;
a.d(e, {
    Fv: () => h,
    Jk: () => O,
    PR: () => L,
    f7: () => g,
    sn: () => D
});
var o = a(696486),
    _ = a(152228),
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
    f = a(474264),
    p = a(416987);
let T = 0,
    N = {};
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
                    (N.fid = {
                        value: t.value,
                        unit: 'millisecond'
                    }),
                    (N['mark.fid'] = {
                        value: a + r,
                        unit: 'second'
                    });
            }),
            a = (0, d.PR)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                e &&
                    (I.X && l.kg.log('[Measurements] Adding CLS'),
                    (N.cls = {
                        value: t.value,
                        unit: ''
                    }),
                    (n = e));
            }, !0),
            o = (0, d.$A)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                e &&
                    (I.X && l.kg.log('[Measurements] Adding LCP'),
                    (N.lcp = {
                        value: t.value,
                        unit: 'millisecond'
                    }),
                    (r = e));
            }, !0),
            _ = (0, d._4)(({ metric: t }) => {
                t.entries[t.entries.length - 1] &&
                    (I.X && l.kg.log('[Measurements] Adding TTFB'),
                    (N.ttfb = {
                        value: t.value,
                        unit: 'millisecond'
                    }));
            });
        return () => {
            e(), a(), o(), _();
        };
    }
    return () => void 0;
}
function h() {
    (0, d._j)('longtask', ({ entries: t }) => {
        for (let e of t) {
            if (!(0, o.HN)()) return;
            let t = (0, A.XL)(s.Z1 + e.startTime),
                a = (0, A.XL)(e.duration),
                r = (0, _.qp)({
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
            if (!(0, o.HN)() || !e.scripts[0]) return;
            let t = (0, A.XL)(s.Z1 + e.startTime),
                a = (0, A.XL)(e.duration),
                r = { [i.S3]: 'auto.ui.browser.metrics' },
                n = e.scripts[0];
            if (n) {
                let { invoker: t, invokerType: e, sourceURL: a, sourceFunctionName: o, sourceCharPosition: _ } = n;
                (r['browser.script.invoker'] = t), (r['browser.script.invoker_type'] = e), a && (r['code.filepath'] = a), o && (r['code.function'] = o), -1 !== _ && (r['browser.script.source_char_position'] = _);
            }
            let c = (0, _.qp)({
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
            if (!(0, o.HN)()) return;
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
                let o = (0, _.qp)(r);
                o && o.end(t + a);
            }
        }
    });
}
function g(t) {
    let e = (0, A.QV)();
    if (!e || !R.m.performance.getEntries || !s.Z1) return;
    I.X && l.kg.log('[Tracing] Adding & adjusting spans using Performance API');
    let a = (0, A.XL)(s.Z1),
        _ = e.getEntries(),
        { op: d, start_timestamp: L } = (0, o.XU)(t);
    if (
        (_.slice(T).forEach((e) => {
            let r = (0, A.XL)(e.startTime),
                n = (0, A.XL)(Math.max(0, e.duration));
            if ('navigation' !== d || !L || !(a + r < L))
                switch (e.entryType) {
                    case 'navigation':
                        var o, _, c;
                        (o = t),
                            (_ = e),
                            (c = a),
                            ['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach((t) => {
                                m(o, _, t, c);
                            }),
                            m(o, _, 'secureConnection', c, 'TLS/SSL', 'connectEnd'),
                            m(o, _, 'fetch', c, 'cache', 'domainLookupStart'),
                            m(o, _, 'domainLookup', c, 'DNS'),
                            (function (t, e, a) {
                                let r = a + (0, A.XL)(e.requestStart),
                                    n = a + (0, A.XL)(e.responseEnd),
                                    o = a + (0, A.XL)(e.responseStart);
                                e.responseEnd &&
                                    ((0, A.Y)(t, r, n, {
                                        op: 'browser',
                                        name: 'request',
                                        attributes: { [i.S3]: 'auto.ui.browser.metrics' }
                                    }),
                                    (0, A.Y)(t, o, n, {
                                        op: 'browser',
                                        name: 'response',
                                        attributes: { [i.S3]: 'auto.ui.browser.metrics' }
                                    }));
                            })(o, _, c);
                        break;
                    case 'mark':
                    case 'paint':
                    case 'measure': {
                        (function (t, e, a, r, n) {
                            let o = (0, f.W)(),
                                _ = n + Math.max(a, (0, A.XL)(o ? o.requestStart : 0)),
                                c = n + a,
                                s = { [i.S3]: 'auto.resource.browser.metrics' };
                            _ !== c && ((s['sentry.browser.measure_happened_before_request'] = !0), (s['sentry.browser.measure_start_time'] = _)),
                                (0, A.Y)(t, _, c + r, {
                                    name: e.name,
                                    op: e.entryType,
                                    attributes: s
                                });
                        })(t, e, r, n, a);
                        let o = (0, p.Y)(),
                            _ = e.startTime < o.firstHiddenTime;
                        'first-paint' === e.name &&
                            _ &&
                            (I.X && l.kg.log('[Measurements] Adding FP'),
                            (N.fp = {
                                value: e.startTime,
                                unit: 'millisecond'
                            })),
                            'first-contentful-paint' === e.name &&
                                _ &&
                                (I.X && l.kg.log('[Measurements] Adding FCP'),
                                (N.fcp = {
                                    value: e.startTime,
                                    unit: 'millisecond'
                                }));
                        break;
                    }
                    case 'resource':
                        (function (t, e, a, r, n, o) {
                            if ('xmlhttprequest' === e.initiatorType || 'fetch' === e.initiatorType) return;
                            let _ = (0, u.en)(a),
                                c = { [i.S3]: 'auto.resource.browser.metrics' };
                            y(c, e, 'transferSize', 'http.response_transfer_size'), y(c, e, 'encodedBodySize', 'http.response_content_length'), y(c, e, 'decodedBodySize', 'http.decoded_response_content_length'), 'renderBlockingStatus' in e && (c['resource.render_blocking_status'] = e.renderBlockingStatus), _.protocol && (c['url.scheme'] = _.protocol.split(':').pop()), _.host && (c['server.address'] = _.host), (c['url.same_origin'] = a.includes(R.m.location.origin));
                            let s = o + r;
                            (0, A.Y)(t, s, s + n, {
                                name: a.replace(R.m.location.origin, ''),
                                op: e.initiatorType ? `resource.${e.initiatorType}` : 'resource.other',
                                attributes: c
                            });
                        })(t, e, e.name, r, n, a);
                }
        }),
        (T = Math.max(_.length - 1, 0)),
        (function (t) {
            let e = R.m.navigator;
            if (!e) return;
            let a = e.connection;
            a &&
                (a.effectiveType && t.setAttribute('effectiveConnectionType', a.effectiveType),
                a.type && t.setAttribute('connectionType', a.type),
                (0, A.nl)(a.rtt) &&
                    (N['connection.rtt'] = {
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
        })(N),
            ['fcp', 'fp', 'lcp'].forEach((t) => {
                let e = N[t];
                if (!e || !L || a >= L) return;
                let r = e.value,
                    n = Math.abs((a + (0, A.XL)(r) - L) * 1000),
                    o = n - r;
                I.X && l.kg.log(`[Measurements] Normalized ${t} from ${r} to ${n} (${o})`), (e.value = n);
            });
        let e = N['mark.fid'];
        e &&
            N.fid &&
            ((0, A.Y)(t, e.value, e.value + (0, A.XL)(N.fid.value), {
                name: 'first input delay',
                op: 'ui.action',
                attributes: { [i.S3]: 'auto.ui.browser.metrics' }
            }),
            delete N['mark.fid']),
            'fcp' in N || delete N.cls,
            Object.entries(N).forEach(([t, e]) => {
                (0, c.o)(t, e.value, e.unit);
            }),
            (h = t),
            r && (I.X && l.kg.log('[Measurements] Adding LCP Data'), r.element && h.setAttribute('lcp.element', (0, E.Rt)(r.element)), r.id && h.setAttribute('lcp.id', r.id), r.url && h.setAttribute('lcp.url', r.url.trim().slice(0, 200)), h.setAttribute('lcp.size', r.size)),
            n && n.sources && (I.X && l.kg.log('[Measurements] Adding CLS Data'), n.sources.forEach((t, e) => h.setAttribute(`cls.source.${e + 1}`, (0, E.Rt)(t.node))));
    }
    (r = void 0), (n = void 0), (N = {});
}
function m(t, e, a, r, n, o) {
    let _ = o ? e[o] : e[`${a}End`],
        c = e[`${a}Start`];
    c &&
        _ &&
        (0, A.Y)(t, r + (0, A.XL)(c), r + (0, A.XL)(_), {
            op: 'browser',
            name: n || a,
            attributes: { [i.S3]: 'auto.ui.browser.metrics' }
        });
}
function y(t, e, a, r) {
    let n = e[a];
    null != n && n < 2147483647 && (t[r] = n);
}
