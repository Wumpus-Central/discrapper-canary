"use strict";
n.d(t, { LE: () => s, V7: () => l, lu: () => c });
var r = n(411361),
    i = n(608768),
    o = n(847745),
    a = n(582102);
function s(e, t, n, r) {
    let a = (0, o.Cj)(n),
        s = { sent_at: new Date().toISOString(), ...(a && { sdk: a }), ...(!!r && t && { dsn: (0, i.SB)(t) }) },
        l = "aggregates" in e ? [{ type: "sessions" }, e] : [{ type: "session" }, e.toJSON()];
    return (0, o.h4)(s, [l]);
}
function l(e, t, n, r) {
    var i;
    let a = (0, o.Cj)(n),
        s = e.type && "replay_event" !== e.type ? e.type : "event";
    (i = n && n.sdk) &&
        ((e.sdk = e.sdk || {}),
        (e.sdk.name = e.sdk.name || i.name),
        (e.sdk.version = e.sdk.version || i.version),
        (e.sdk.integrations = [...(e.sdk.integrations || []), ...(i.integrations || [])]),
        (e.sdk.packages = [...(e.sdk.packages || []), ...(i.packages || [])]));
    let l = (0, o.n2)(e, a, r, t);
    delete e.sdkProcessingMetadata;
    let c = [{ type: s }, e];
    return (0, o.h4)(l, [c]);
}
function c(e, t) {
    let n = (0, r.k1)(e[0]),
        s = t && t.getDsn(),
        l = t && t.getOptions().tunnel,
        c = {
            sent_at: new Date().toISOString(),
            ...(!!n.trace_id && !!n.public_key && { trace: n }),
            ...(!!l && s && { dsn: (0, i.SB)(s) }),
        },
        u = t && t.getOptions().beforeSendSpan,
        d = u
            ? (e) => {
                  let t = u((0, a.et)(e));
                  return t || (0, a.xl)(), t;
              }
            : (e) => (0, a.et)(e),
        p = [];
    for (let t of e) {
        let e = d(t);
        e && p.push((0, o.y5)(e));
    }
    return (0, o.h4)(c, p);
}
