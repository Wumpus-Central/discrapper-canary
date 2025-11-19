_.d(e, {
    $k: () => d,
    Dp: () => S,
    Gx: () => g,
    HN: () => y,
    HR: () => A,
    Hb: () => T,
    Tt: () => L,
    XU: () => O,
    _4: () => p,
    ed: () => D,
    i0: () => N,
    j5: () => h,
    ve: () => R,
    wy: () => u,
    yc: () => m,
});
var a = _(370336),
    r = _(370541),
    n = _(101284),
    o = _(833873),
    E = _(356442),
    i = _(263449),
    c = _(899195),
    s = _(988097),
    l = _(793373),
    I = _(99342);
let R = 0,
    N = 1;
function A(t) {
    let { spanId: e, traceId: _ } = t.spanContext(),
        { data: r, op: n, parent_span_id: o, status: E, origin: i } = O(t);
    return (0, a.Jr)({
        parent_span_id: o,
        span_id: e,
        trace_id: _,
        data: r,
        op: n,
        status: E,
        origin: i,
    });
}
function u(t) {
    let { spanId: e, traceId: _ } = t.spanContext(),
        { parent_span_id: r } = O(t);
    return (0, a.Jr)({
        parent_span_id: r,
        span_id: e,
        trace_id: _,
    });
}
function T(t) {
    let { traceId: e, spanId: _ } = t.spanContext(),
        a = L(t);
    return (0, r.$p)(e, _, a);
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
function O(t) {
    if ("function" == typeof t.getSpanJSON) return t.getSpanJSON();
    try {
        var e;
        let { spanId: _, traceId: r } = t.spanContext();
        if ((e = t).attributes && e.startTime && e.name && e.endTime && e.status) {
            let { attributes: e, startTime: n, name: o, endTime: E, parentSpanId: i, status: l } = t;
            return (0, a.Jr)({
                span_id: _,
                trace_id: r,
                data: e,
                description: o,
                parent_span_id: i,
                start_timestamp: d(n),
                timestamp: d(E) || void 0,
                status: p(l),
                op: e[s.$J],
                origin: e[s.S3],
                _metrics_summary: (0, c.y)(t),
            });
        }
        return {
            span_id: _,
            trace_id: r,
        };
    } catch (t) {
        return {};
    }
}
function L(t) {
    let { traceFlags: e } = t.spanContext();
    return e === N;
}
function p(t) {
    if (t && t.code !== l.pq) return t.code === l.OP ? "ok" : t.message || "unknown_error";
}
let C = "_sentryChildSpans",
    P = "_sentryRootSpan";
function h(t, e) {
    let _ = t[P] || t;
    (0, a.xp)(e, P, _), t[C] ? t[C].add(e) : (0, a.xp)(t, C, new Set([e]));
}
function D(t, e) {
    t[C] && t[C].delete(e);
}
function S(t) {
    let e = new Set();
    return (
        !(function t(_) {
            if (!e.has(_) && L(_)) for (let a of (e.add(_), _[C] ? Array.from(_[C]) : [])) t(a);
        })(t),
        Array.from(e)
    );
}
function g(t) {
    return t[P] || t;
}
function y() {
    let t = (0, E.c)(),
        e = (0, o.G)(t);
    return e.getActiveSpan ? e.getActiveSpan() : (0, I.Y)((0, i.nZ)());
}
function m(t, e, _, a, r, n) {
    let o = y();
    o && (0, c.V)(o, t, e, _, a, r, n);
}
