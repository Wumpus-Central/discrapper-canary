n.d(t, {
    BO: () => s,
    Cd: () => A,
    HY: () => R,
    Jd: () => _,
    KQ: () => p,
    R: () => E,
    V$: () => u,
    f4: () => d,
    gv: () => c,
    mL: () => T,
    zQ: () => f,
});
var r = n(390873),
    i = n(847572),
    a = n(886649),
    o = n(606093);
function _(e, t = []) {
    return [e, t];
}
function s(e, t) {
    let [n, r] = e;
    return [n, [...r, t]];
}
function c(e, t) {
    for (let n of e[1]) {
        let e = n[0].type;
        if (t(n, e)) return !0;
    }
    return !1;
}
function E(e, t) {
    return c(e, (e, n) => t.includes(n));
}
function l(e) {
    return o.n.__SENTRY__ && o.n.__SENTRY__.encodePolyfill
        ? o.n.__SENTRY__.encodePolyfill(e)
        : new TextEncoder().encode(e);
}
function u(e) {
    let [t, n] = e,
        r = JSON.stringify(t);
    function a(e) {
        "string" == typeof r ? (r = "string" == typeof e ? r + e : [l(r), e]) : r.push("string" == typeof e ? l(e) : e);
    }
    for (let e of n) {
        let [t, n] = e;
        if (
            (a(`
${JSON.stringify(t)}
`),
            "string" == typeof n || n instanceof Uint8Array)
        )
            a(n);
        else {
            let e;
            try {
                e = JSON.stringify(n);
            } catch (t) {
                e = JSON.stringify((0, i.Fv)(n));
            }
            a(e);
        }
    }
    return "string" == typeof r
        ? r
        : (function (e) {
              let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                  n = 0;
              for (let r of e) t.set(r, n), (n += r.length);
              return t;
          })(r);
}
function d(e) {
    let t = "string" == typeof e ? l(e) : e;
    function n(e) {
        let n = t.subarray(0, e);
        return (t = t.subarray(e + 1)), n;
    }
    function r() {
        var e;
        let r = t.indexOf(10);
        return (
            r < 0 && (r = t.length),
            JSON.parse(
                ((e = n(r)),
                o.n.__SENTRY__ && o.n.__SENTRY__.decodePolyfill
                    ? o.n.__SENTRY__.decodePolyfill(e)
                    : new TextDecoder().decode(e)),
            )
        );
    }
    let i = r(),
        a = [];
    for (; t.length; ) {
        let e = r(),
            t = "number" == typeof e.length ? e.length : void 0;
        a.push([e, t ? n(t) : r()]);
    }
    return [i, a];
}
function p(e) {
    return [{ type: "span" }, e];
}
function f(e) {
    let t = "string" == typeof e.data ? l(e.data) : e.data;
    return [
        (0, a.Jr)({
            type: "attachment",
            length: t.length,
            filename: e.filename,
            content_type: e.contentType,
            attachment_type: e.attachmentType,
        }),
        t,
    ];
}
let I = {
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
    return I[e];
}
function R(e) {
    if (!e || !e.sdk) return;
    let { name: t, version: n } = e.sdk;
    return {
        name: t,
        version: n,
    };
}
function A(e, t, n, i) {
    let o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...(t && { sdk: t }),
        ...(!!n && i && { dsn: (0, r.RA)(i) }),
        ...(o && { trace: (0, a.Jr)({ ...o }) }),
    };
}
