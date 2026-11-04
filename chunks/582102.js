var r = n(143803),
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
let f = !1;
function m(e) {
    return "number" == typeof e
        ? g(e)
        : Array.isArray(e)
          ? e[0] + e[1] / 1e9
          : e instanceof Date
            ? g(e.getTime())
            : (0, d.zf)();
}
function g(e) {
    return e > 0x2540be3ff ? e / 1e3 : e;
}
function _(e) {
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
                start_timestamp: m(i),
                timestamp: m(l) || void 0,
                status: v(d),
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
function y(e) {
    let { traceFlags: t } = e.spanContext();
    return 1 === t;
}
function v(e) {
    if (e && 0 !== e.code) return 1 === e.code ? "ok" : e.message || "unknown_error";
}
let b = "_sentryChildSpans",
    S = "_sentryRootSpan";
function w() {
    let e = (0, i.E)(),
        t = (0, r.h)(e);
    return t.getActiveSpan ? t.getActiveSpan() : (0, h.f)((0, o.o5)());
}
n.d(
    t,
    {},
    {
        Bk: w,
        Ck: function (e) {
            let { spanId: t, traceId: n } = e.spanContext(),
                { data: r, op: i, parent_span_id: o, status: a, origin: s } = _(e);
            return (0, c.Ce)({ parent_span_id: o, span_id: t, trace_id: n, data: r, op: i, status: a, origin: s });
        },
        Hu: function (e, t) {
            let n = e[S] || e;
            ((0, c.my)(t, S, n), e[b] ? e[b].add(t) : (0, c.my)(e, b, new Set([t])));
        },
        Qh: function (e) {
            let { traceId: t, spanId: n } = e.spanContext(),
                r = y(e);
            return (0, p.TC)(t, n, r);
        },
        VS: function (e, t) {
            e[b] && e[b].delete(t);
        },
        cI: m,
        et: _,
        kX: function (e) {
            let { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
                i = r ? t : _(e).parent_span_id,
                o = r ? (0, u.ZF)() : t;
            return (0, c.Ce)({ parent_span_id: i, span_id: o, trace_id: n });
        },
        pK: y,
        r2: function (e, t, n, r, i, o) {
            let s = w();
            s && (0, a.X)(s, e, t, n, r, i, o);
        },
        xO: function (e) {
            let t = new Set();
            return (
                !(function e(n) {
                    if (!t.has(n) && y(n)) for (let r of (t.add(n), n[b] ? Array.from(n[b]) : [])) e(r);
                })(e),
                Array.from(t)
            );
        },
        xl: function () {
            f ||
                ((0, l.pq)(() => {
                    console.warn(
                        "[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.",
                    );
                }),
                (f = !0));
        },
        yW: v,
        zQ: function (e, t) {
            (e.updateName(t), e.setAttributes({ [s.i_]: "custom", [s.Le]: t }));
        },
        zU: function (e) {
            return e[S] || e;
        },
    },
);
