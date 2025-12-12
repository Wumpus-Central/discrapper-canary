n.d(t, {
    Mq: () => s,
    Q3: () => _,
    uE: () => c,
});
var r = n(690889),
    i = n(390873),
    a = n(464338),
    o = n(82255);
function _(e, t, n, a) {
    let o = (0, r.HY)(n),
        _ = {
            sent_at: new Date().toISOString(),
            ...(o && { sdk: o }),
            ...(!!a && t && { dsn: (0, i.RA)(t) }),
        },
        s = "aggregates" in e ? [{ type: "sessions" }, e] : [{ type: "session" }, e.toJSON()];
    return (0, r.Jd)(_, [s]);
}
function s(e, t, n, i) {
    var a;
    let o = (0, r.HY)(n),
        _ = e.type && "replay_event" !== e.type ? e.type : "event";
    (a = n && n.sdk) &&
        ((e.sdk = e.sdk || {}),
        (e.sdk.name = e.sdk.name || a.name),
        (e.sdk.version = e.sdk.version || a.version),
        (e.sdk.integrations = [...(e.sdk.integrations || []), ...(a.integrations || [])]),
        (e.sdk.packages = [...(e.sdk.packages || []), ...(a.packages || [])]));
    let s = (0, r.Cd)(e, o, i, t);
    delete e.sdkProcessingMetadata;
    let c = [{ type: _ }, e];
    return (0, r.Jd)(s, [c]);
}
function c(e, t) {
    let n = (0, a.jC)(e[0]),
        _ = t && t.getDsn(),
        s = t && t.getOptions().tunnel,
        c = {
            sent_at: new Date().toISOString(),
            ...(!!n.trace_id && !!n.public_key && { trace: n }),
            ...(!!s && _ && { dsn: (0, i.RA)(_) }),
        },
        E = t && t.getOptions().beforeSendSpan,
        l = E ? (e) => E((0, o.XU)(e)) : (e) => (0, o.XU)(e),
        u = [];
    for (let t of e) {
        let e = l(t);
        e && u.push((0, r.KQ)(e));
    }
    return (0, r.Jd)(c, u);
}
