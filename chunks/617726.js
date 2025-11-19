_.d(e, {
    BO: () => i,
    Cd: () => f,
    HY: () => d,
    Jd: () => E,
    KQ: () => N,
    R: () => s,
    V$: () => I,
    f4: () => R,
    gv: () => c,
    mL: () => T,
    zQ: () => A,
});
var a = _(967752),
    r = _(202811),
    n = _(370336),
    o = _(899517);
function E(t, e = []) {
    return [t, e];
}
function i(t, e) {
    let [_, a] = t;
    return [_, [...a, e]];
}
function c(t, e) {
    for (let _ of t[1]) {
        let t = _[0].type;
        if (e(_, t)) return !0;
    }
    return !1;
}
function s(t, e) {
    return c(t, (t, _) => e.includes(_));
}
function l(t) {
    return o.n.__SENTRY__ && o.n.__SENTRY__.encodePolyfill
        ? o.n.__SENTRY__.encodePolyfill(t)
        : new TextEncoder().encode(t);
}
function I(t) {
    let [e, _] = t,
        a = JSON.stringify(e);
    function n(t) {
        "string" == typeof a ? (a = "string" == typeof t ? a + t : [l(a), t]) : a.push("string" == typeof t ? l(t) : t);
    }
    for (let t of _) {
        let [e, _] = t;
        if (
            (n(`
${JSON.stringify(e)}
`),
            "string" == typeof _ || _ instanceof Uint8Array)
        )
            n(_);
        else {
            let t;
            try {
                t = JSON.stringify(_);
            } catch (e) {
                t = JSON.stringify((0, r.Fv)(_));
            }
            n(t);
        }
    }
    return "string" == typeof a
        ? a
        : (function (t) {
              let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
                  _ = 0;
              for (let a of t) e.set(a, _), (_ += a.length);
              return e;
          })(a);
}
function R(t) {
    let e = "string" == typeof t ? l(t) : t;
    function _(t) {
        let _ = e.subarray(0, t);
        return (e = e.subarray(t + 1)), _;
    }
    function a() {
        var t;
        let a = e.indexOf(10);
        return (
            a < 0 && (a = e.length),
            JSON.parse(
                ((t = _(a)),
                o.n.__SENTRY__ && o.n.__SENTRY__.decodePolyfill
                    ? o.n.__SENTRY__.decodePolyfill(t)
                    : new TextDecoder().decode(t)),
            )
        );
    }
    let r = a(),
        n = [];
    for (; e.length; ) {
        let t = a(),
            e = "number" == typeof t.length ? t.length : void 0;
        n.push([t, e ? _(e) : a()]);
    }
    return [r, n];
}
function N(t) {
    return [{ type: "span" }, t];
}
function A(t) {
    let e = "string" == typeof t.data ? l(t.data) : t.data;
    return [
        (0, n.Jr)({
            type: "attachment",
            length: e.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType,
        }),
        e,
    ];
}
let u = {
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
function T(t) {
    return u[t];
}
function d(t) {
    if (!t || !t.sdk) return;
    let { name: e, version: _ } = t.sdk;
    return {
        name: e,
        version: _,
    };
}
function f(t, e, _, r) {
    let o = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: t.event_id,
        sent_at: new Date().toISOString(),
        ...(e && { sdk: e }),
        ...(!!_ && r && { dsn: (0, a.RA)(r) }),
        ...(o && { trace: (0, n.Jr)({ ...o }) }),
    };
}
