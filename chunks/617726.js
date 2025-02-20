a.d(e, {
    BO: () => c,
    Cd: () => T,
    HY: () => p,
    Jd: () => i,
    KQ: () => R,
    R: () => E,
    V$: () => u,
    f4: () => I,
    gv: () => s,
    mL: () => f,
    zQ: () => d
});
var r = a(967752),
    n = a(202811),
    o = a(370336),
    _ = a(899517);
function i(t, e = []) {
    return [t, e];
}
function c(t, e) {
    let [a, r] = t;
    return [a, [...r, e]];
}
function s(t, e) {
    for (let a of t[1]) {
        let t = a[0].type;
        if (e(a, t)) return !0;
    }
    return !1;
}
function E(t, e) {
    return s(t, (t, a) => e.includes(a));
}
function l(t) {
    return _.n.__SENTRY__ && _.n.__SENTRY__.encodePolyfill ? _.n.__SENTRY__.encodePolyfill(t) : new TextEncoder().encode(t);
}
function u(t) {
    let [e, a] = t,
        r = JSON.stringify(e);
    function o(t) {
        'string' == typeof r ? (r = 'string' == typeof t ? r + t : [l(r), t]) : r.push('string' == typeof t ? l(t) : t);
    }
    for (let t of a) {
        let [e, a] = t;
        if (
            (o(`
${JSON.stringify(e)}
`),
            'string' == typeof a || a instanceof Uint8Array)
        )
            o(a);
        else {
            let t;
            try {
                t = JSON.stringify(a);
            } catch (e) {
                t = JSON.stringify((0, n.Fv)(a));
            }
            o(t);
        }
    }
    return 'string' == typeof r
        ? r
        : (function (t) {
              let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
                  a = 0;
              for (let r of t) e.set(r, a), (a += r.length);
              return e;
          })(r);
}
function I(t) {
    let e = 'string' == typeof t ? l(t) : t;
    function a(t) {
        let a = e.subarray(0, t);
        return (e = e.subarray(t + 1)), a;
    }
    function r() {
        var t;
        let r = e.indexOf(10);
        return r < 0 && (r = e.length), JSON.parse(((t = a(r)), _.n.__SENTRY__ && _.n.__SENTRY__.decodePolyfill ? _.n.__SENTRY__.decodePolyfill(t) : new TextDecoder().decode(t)));
    }
    let n = r(),
        o = [];
    for (; e.length; ) {
        let t = r(),
            e = 'number' == typeof t.length ? t.length : void 0;
        o.push([t, e ? a(e) : r()]);
    }
    return [n, o];
}
function R(t) {
    return [{ type: 'span' }, t];
}
function d(t) {
    let e = 'string' == typeof t.data ? l(t.data) : t.data;
    return [
        (0, o.Jr)({
            type: 'attachment',
            length: e.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }),
        e
    ];
}
let A = {
    session: 'session',
    sessions: 'session',
    attachment: 'attachment',
    transaction: 'transaction',
    event: 'error',
    client_report: 'internal',
    user_report: 'default',
    profile: 'profile',
    profile_chunk: 'profile',
    replay_event: 'replay',
    replay_recording: 'replay',
    check_in: 'monitor',
    feedback: 'feedback',
    span: 'span',
    statsd: 'metric_bucket'
};
function f(t) {
    return A[t];
}
function p(t) {
    if (!t || !t.sdk) return;
    let { name: e, version: a } = t.sdk;
    return {
        name: e,
        version: a
    };
}
function T(t, e, a, n) {
    let _ = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: t.event_id,
        sent_at: new Date().toISOString(),
        ...(e && { sdk: e }),
        ...(!!a && n && { dsn: (0, r.RA)(n) }),
        ...(_ && { trace: (0, o.Jr)({ ..._ }) })
    };
}
