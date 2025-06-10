a.d(e, {
    $k: () => f,
    Dp: () => C,
    Gx: () => y,
    HN: () => m,
    HR: () => N,
    Hb: () => A,
    Tt: () => L,
    XU: () => p,
    _4: () => h,
    ed: () => P,
    i0: () => R,
    j5: () => g,
    ve: () => I,
    wy: () => d,
    yc: () => v
});
var r = a(370336),
    _ = a(370541),
    n = a(101284),
    o = a(833873),
    i = a(356442),
    c = a(263449),
    E = a(899195),
    s = a(988097),
    l = a(793373),
    u = a(99342);
let I = 0,
    R = 1;
function N(t) {
    let { spanId: e, traceId: a } = t.spanContext(),
        { data: _, op: n, parent_span_id: o, status: i, origin: c } = p(t);
    return (0, r.Jr)({
        parent_span_id: o,
        span_id: e,
        trace_id: a,
        data: _,
        op: n,
        status: i,
        origin: c
    });
}
function d(t) {
    let { spanId: e, traceId: a } = t.spanContext(),
        { parent_span_id: _ } = p(t);
    return (0, r.Jr)({
        parent_span_id: _,
        span_id: e,
        trace_id: a
    });
}
function A(t) {
    let { traceId: e, spanId: a } = t.spanContext(),
        r = L(t);
    return (0, _.$p)(e, a, r);
}
function f(t) {
    return 'number' == typeof t ? T(t) : Array.isArray(t) ? t[0] + t[1] / 1000000000 : t instanceof Date ? T(t.getTime()) : (0, n.ph)();
}
function T(t) {
    return t > 9999999999 ? t / 1000 : t;
}
function p(t) {
    if ('function' == typeof t.getSpanJSON) return t.getSpanJSON();
    try {
        var e;
        let { spanId: a, traceId: _ } = t.spanContext();
        if ((e = t).attributes && e.startTime && e.name && e.endTime && e.status) {
            let { attributes: e, startTime: n, name: o, endTime: i, parentSpanId: c, status: l } = t;
            return (0, r.Jr)({
                span_id: a,
                trace_id: _,
                data: e,
                description: o,
                parent_span_id: c,
                start_timestamp: f(n),
                timestamp: f(i) || void 0,
                status: h(l),
                op: e[s.$J],
                origin: e[s.S3],
                _metrics_summary: (0, E.y)(t)
            });
        }
        return {
            span_id: a,
            trace_id: _
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
function C(t) {
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
function m() {
    let t = (0, i.c)(),
        e = (0, o.G)(t);
    return e.getActiveSpan ? e.getActiveSpan() : (0, u.Y)((0, c.nZ)());
}
function v(t, e, a, r, _, n) {
    let o = m();
    o && (0, E.V)(o, t, e, a, r, _, n);
}
