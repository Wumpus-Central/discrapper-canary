a.d(e, {
    $k: () => d,
    Dp: () => g,
    Gx: () => S,
    HN: () => m,
    HR: () => A,
    Hb: () => T,
    Tt: () => p,
    XU: () => L,
    _4: () => O,
    ed: () => D,
    i0: () => u,
    j5: () => C,
    ve: () => R,
    wy: () => N,
    yc: () => v,
});
var r = a(370336),
    _ = a(370541),
    n = a(101284),
    o = a(833873),
    i = a(356442),
    E = a(263449),
    c = a(899195),
    s = a(988097),
    l = a(793373),
    I = a(99342);
let R = 0,
    u = 1;
function A(t) {
    let { spanId: e, traceId: a } = t.spanContext(),
        { data: _, op: n, parent_span_id: o, status: i, origin: E } = L(t);
    return (0, r.Jr)({
        parent_span_id: o,
        span_id: e,
        trace_id: a,
        data: _,
        op: n,
        status: i,
        origin: E,
    });
}
function N(t) {
    let { spanId: e, traceId: a } = t.spanContext(),
        { parent_span_id: _ } = L(t);
    return (0, r.Jr)({
        parent_span_id: _,
        span_id: e,
        trace_id: a,
    });
}
function T(t) {
    let { traceId: e, spanId: a } = t.spanContext(),
        r = p(t);
    return (0, _.$p)(e, a, r);
}
function d(t) {
    return "number" == typeof t
        ? f(t)
        : Array.isArray(t)
          ? t[0] + t[1] / 1000000000
          : t instanceof Date
            ? f(t.getTime())
            : (0, n.ph)();
}
function f(t) {
    return t > 9999999999 ? t / 1000 : t;
}
function L(t) {
    if ("function" == typeof t.getSpanJSON) return t.getSpanJSON();
    try {
        var e;
        let { spanId: a, traceId: _ } = t.spanContext();
        if ((e = t).attributes && e.startTime && e.name && e.endTime && e.status) {
            let { attributes: e, startTime: n, name: o, endTime: i, parentSpanId: E, status: l } = t;
            return (0, r.Jr)({
                span_id: a,
                trace_id: _,
                data: e,
                description: o,
                parent_span_id: E,
                start_timestamp: d(n),
                timestamp: d(i) || void 0,
                status: O(l),
                op: e[s.$J],
                origin: e[s.S3],
                _metrics_summary: (0, c.y)(t),
            });
        }
        return {
            span_id: a,
            trace_id: _,
        };
    } catch (t) {
        return {};
    }
}
function p(t) {
    let { traceFlags: e } = t.spanContext();
    return e === u;
}
function O(t) {
    if (t && t.code !== l.pq) return t.code === l.OP ? "ok" : t.message || "unknown_error";
}
let h = "_sentryChildSpans",
    P = "_sentryRootSpan";
function C(t, e) {
    let a = t[P] || t;
    (0, r.xp)(e, P, a), t[h] ? t[h].add(e) : (0, r.xp)(t, h, new Set([e]));
}
function D(t, e) {
    t[h] && t[h].delete(e);
}
function g(t) {
    let e = new Set();
    return (
        !(function t(a) {
            if (!e.has(a) && p(a)) for (let r of (e.add(a), a[h] ? Array.from(a[h]) : [])) t(r);
        })(t),
        Array.from(e)
    );
}
function S(t) {
    return t[P] || t;
}
function m() {
    let t = (0, i.c)(),
        e = (0, o.G)(t);
    return e.getActiveSpan ? e.getActiveSpan() : (0, I.Y)((0, E.nZ)());
}
function v(t, e, a, r, _, n) {
    let o = m();
    o && (0, c.V)(o, t, e, a, r, _, n);
}
