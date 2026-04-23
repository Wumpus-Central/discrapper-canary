"use strict";
n.d(t, {
    Bk: () => D,
    CC: () => f,
    Ck: () => _,
    Hu: () => T,
    Qh: () => v,
    VS: () => I,
    aO: () => m,
    cI: () => b,
    et: () => S,
    kX: () => y,
    pK: () => E,
    r2: () => R,
    xO: () => M,
    xl: () => A,
    yW: () => k,
    zQ: () => N,
    zU: () => O,
});
var r = n(657829),
    i = n(75109),
    o = n(630449),
    a = n(991854),
    s = n(92332),
    l = n(272469),
    c = n(690094),
    u = n(834932),
    d = n(83220),
    p = n(697043),
    h = n(286788);
let f = 0,
    m = 1,
    g = !1;
function _(e) {
    let { spanId: t, traceId: n } = e.spanContext(),
        { data: r, op: i, parent_span_id: o, status: a, origin: s } = S(e);
    return (0, c.Ce)({ parent_span_id: o, span_id: t, trace_id: n, data: r, op: i, status: a, origin: s });
}
function y(e) {
    let { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
        i = r ? t : S(e).parent_span_id,
        o = r ? (0, u.ZF)() : t;
    return (0, c.Ce)({ parent_span_id: i, span_id: o, trace_id: n });
}
function v(e) {
    let { traceId: t, spanId: n } = e.spanContext(),
        r = E(e);
    return (0, p.TC)(t, n, r);
}
function b(e) {
    return "number" == typeof e
        ? w(e)
        : Array.isArray(e)
          ? e[0] + e[1] / 1e9
          : e instanceof Date
            ? w(e.getTime())
            : (0, d.zf)();
}
function w(e) {
    return e > 0x2540be3ff ? e / 1e3 : e;
}
function S(e) {
    if ("function" == typeof e.getSpanJSON) return e.getSpanJSON();
    try {
        var t;
        let { spanId: n, traceId: r } = e.spanContext();
        if ((t = e).attributes && t.startTime && t.name && t.endTime && t.status) {
            let { attributes: t, startTime: i, name: o, endTime: l, parentSpanId: u, status: d } = e;
            return (0, c.Ce)({
                span_id: n,
                trace_id: r,
                data: t,
                description: o,
                parent_span_id: u,
                start_timestamp: b(i),
                timestamp: b(l) || void 0,
                status: k(d),
                op: t[s.uT],
                origin: t[s.JD],
                _metrics_summary: (0, a.g)(e),
            });
        }
        return { span_id: n, trace_id: r };
    } catch (e) {
        return {};
    }
}
function E(e) {
    let { traceFlags: t } = e.spanContext();
    return t === m;
}
function k(e) {
    if (e && 0 !== e.code) return 1 === e.code ? "ok" : e.message || "unknown_error";
}
let x = "_sentryChildSpans",
    C = "_sentryRootSpan";
function T(e, t) {
    let n = e[C] || e;
    (0, c.my)(t, C, n), e[x] ? e[x].add(t) : (0, c.my)(e, x, new Set([t]));
}
function I(e, t) {
    e[x] && e[x].delete(t);
}
function M(e) {
    let t = new Set();
    return (
        !(function e(n) {
            if (!t.has(n) && E(n)) for (let r of (t.add(n), n[x] ? Array.from(n[x]) : [])) e(r);
        })(e),
        Array.from(t)
    );
}
function O(e) {
    return e[C] || e;
}
function D() {
    let e = (0, i.E)(),
        t = (0, r.h)(e);
    return t.getActiveSpan ? t.getActiveSpan() : (0, h.f)((0, o.o5)());
}
function R(e, t, n, r, i, o) {
    let s = D();
    s && (0, a.X)(s, e, t, n, r, i, o);
}
function A() {
    g ||
        ((0, l.pq)(() => {
            console.warn(
                "[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.",
            );
        }),
        (g = !0));
}
function N(e, t) {
    e.updateName(t), e.setAttributes({ [s.i_]: "custom", [s.Le]: t });
}
