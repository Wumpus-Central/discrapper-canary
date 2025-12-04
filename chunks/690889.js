r.d(t, {
    BO: () => s,
    Cd: () => N,
    HY: () => A,
    Jd: () => _,
    KQ: () => I,
    R: () => E,
    V$: () => u,
    f4: () => d,
    gv: () => c,
    mL: () => T,
    zQ: () => p,
});
var n = r(390873),
    a = r(847572),
    i = r(886649),
    o = r(606093);
function _(e, t = []) {
    return [e, t];
}
function s(e, t) {
    let [r, n] = e;
    return [r, [...n, t]];
}
function c(e, t) {
    for (let r of e[1]) {
        let e = r[0].type;
        if (t(r, e)) return !0;
    }
    return !1;
}
function E(e, t) {
    return c(e, (e, r) => t.includes(r));
}
function l(e) {
    return o.n.__SENTRY__ && o.n.__SENTRY__.encodePolyfill
        ? o.n.__SENTRY__.encodePolyfill(e)
        : new TextEncoder().encode(e);
}
function u(e) {
    let [t, r] = e,
        n = JSON.stringify(t);
    function i(e) {
        "string" == typeof n ? (n = "string" == typeof e ? n + e : [l(n), e]) : n.push("string" == typeof e ? l(e) : e);
    }
    for (let e of r) {
        let [t, r] = e;
        if (
            (i(`
${JSON.stringify(t)}
`),
            "string" == typeof r || r instanceof Uint8Array)
        )
            i(r);
        else {
            let e;
            try {
                e = JSON.stringify(r);
            } catch (t) {
                e = JSON.stringify((0, a.Fv)(r));
            }
            i(e);
        }
    }
    return "string" == typeof n
        ? n
        : (function (e) {
              let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                  r = 0;
              for (let n of e) t.set(n, r), (r += n.length);
              return t;
          })(n);
}
function d(e) {
    let t = "string" == typeof e ? l(e) : e;
    function r(e) {
        let r = t.subarray(0, e);
        return (t = t.subarray(e + 1)), r;
    }
    function n() {
        var e;
        let n = t.indexOf(10);
        return (
            n < 0 && (n = t.length),
            JSON.parse(
                ((e = r(n)),
                o.n.__SENTRY__ && o.n.__SENTRY__.decodePolyfill
                    ? o.n.__SENTRY__.decodePolyfill(e)
                    : new TextDecoder().decode(e)),
            )
        );
    }
    let a = n(),
        i = [];
    for (; t.length; ) {
        let e = n(),
            t = "number" == typeof e.length ? e.length : void 0;
        i.push([e, t ? r(t) : n()]);
    }
    return [a, i];
}
function I(e) {
    return [{ type: "span" }, e];
}
function p(e) {
    let t = "string" == typeof e.data ? l(e.data) : e.data;
    return [
        (0, i.Jr)({
            type: "attachment",
            length: t.length,
            filename: e.filename,
            content_type: e.contentType,
            attachment_type: e.attachmentType,
        }),
        t,
    ];
}
let R = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket",
};
function T(e) {
    return R[e];
}
function A(e) {
    if (!e || !e.sdk) return;
    let { name: t, version: r } = e.sdk;
    return {
        name: t,
        version: r,
    };
}
function N(e, t, r, a) {
    let o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...(t && { sdk: t }),
        ...(!!r && a && { dsn: (0, n.RA)(a) }),
        ...(o && { trace: (0, i.Jr)({ ...o }) }),
    };
}
