a.d(e, {
    $k: () => p,
    Dp: () => m,
    Gx: () => y,
    HN: () => v,
    HR: () => d,
    Hb: () => f,
    Tt: () => L,
    XU: () => T,
    _4: () => h,
    ed: () => P,
    i0: () => R,
    j5: () => g,
    ve: () => I,
    wy: () => A,
    yc: () => C
});
var r = a(370336),
    n = a(370541),
    _ = a(101284),
    o = a(833873),
    i = a(356442),
    c = a(263449),
    s = a(899195),
    E = a(988097),
    l = a(793373),
    u = a(99342);
let I = 0,
    R = 1;
function d(t) {
    let { spanId: e, traceId: a } = t.spanContext(),
        { data: n, op: _, parent_span_id: o, status: i, origin: c } = T(t);
    return (0, r.Jr)({
        parent_span_id: o,
        span_id: e,
        trace_id: a,
        data: n,
        op: _,
        status: i,
        origin: c
    });
}
function A(t) {
    let { spanId: e, traceId: a } = t.spanContext(),
        { parent_span_id: n } = T(t);
    return (0, r.Jr)({
        parent_span_id: n,
        span_id: e,
        trace_id: a
    });
}
function f(t) {
    let { traceId: e, spanId: a } = t.spanContext(),
        r = L(t);
    return (0, n.$p)(e, a, r);
}
function p(t) {
    return 'number' == typeof t ? N(t) : Array.isArray(t) ? t[0] + t[1] / 1000000000 : t instanceof Date ? N(t.getTime()) : (0, _.ph)();
}
function N(t) {
    return t > 9999999999 ? t / 1000 : t;
}
function T(t) {
    if ('function' == typeof t.getSpanJSON) return t.getSpanJSON();
    try {
        var e;
        let { spanId: a, traceId: n } = t.spanContext();
        if ((e = t).attributes && e.startTime && e.name && e.endTime && e.status) {
            let { attributes: e, startTime: _, name: o, endTime: i, parentSpanId: c, status: l } = t;
            return (0, r.Jr)({
                span_id: a,
                trace_id: n,
                data: e,
                description: o,
                parent_span_id: c,
                start_timestamp: p(_),
                timestamp: p(i) || void 0,
                status: h(l),
                op: e[E.$J],
                origin: e[E.S3],
                _metrics_summary: (0, s.y)(t)
            });
        }
        return {
            span_id: a,
            trace_id: n
        };
    } catch (t) {
        return {};
    }
}
function L(t) {
    let { traceFlags: e } = t.spanContext();
    return e === R;
}
function h(t) {
    if (t && t.code !== l.pq) return t.code === l.OP ? 'ok' : t.message || 'unknown_error';
}
let O = '_sentryChildSpans',
    D = '_sentryRootSpan';
function g(t, e) {
    let a = t[D] || t;
    (0, r.xp)(e, D, a), t[O] ? t[O].add(e) : (0, r.xp)(t, O, new Set([e]));
}
function P(t, e) {
    t[O] && t[O].delete(e);
}
function m(t) {
    let e = new Set();
    return (
        !(function t(a) {
            if (!e.has(a) && L(a)) for (let r of (e.add(a), a[O] ? Array.from(a[O]) : [])) t(r);
        })(t),
        Array.from(e)
    );
}
function y(t) {
    return t[D] || t;
}
function v() {
    let t = (0, i.c)(),
        e = (0, o.G)(t);
    return e.getActiveSpan ? e.getActiveSpan() : (0, u.Y)((0, c.nZ)());
}
function C(t, e, a, r, n, _) {
    let o = v();
    o && (0, s.V)(o, t, e, a, r, n, _);
}
