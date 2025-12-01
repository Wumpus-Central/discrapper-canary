r.d(t, {
    Mq: () => s,
    Q3: () => _,
    uE: () => c,
});
var n = r(617726),
    a = r(967752),
    i = r(305625),
    o = r(696486);
function _(e, t, r, i) {
    let o = (0, n.HY)(r),
        _ = {
            sent_at: new Date().toISOString(),
            ...(o && { sdk: o }),
            ...(!!i && t && { dsn: (0, a.RA)(t) }),
        },
        s = "aggregates" in e ? [{ type: "sessions" }, e] : [{ type: "session" }, e.toJSON()];
    return (0, n.Jd)(_, [s]);
}
function s(e, t, r, a) {
    var i;
    let o = (0, n.HY)(r),
        _ = e.type && "replay_event" !== e.type ? e.type : "event";
    (i = r && r.sdk) &&
        ((e.sdk = e.sdk || {}),
        (e.sdk.name = e.sdk.name || i.name),
        (e.sdk.version = e.sdk.version || i.version),
        (e.sdk.integrations = [...(e.sdk.integrations || []), ...(i.integrations || [])]),
        (e.sdk.packages = [...(e.sdk.packages || []), ...(i.packages || [])]));
    let s = (0, n.Cd)(e, o, a, t);
    delete e.sdkProcessingMetadata;
    let c = [{ type: _ }, e];
    return (0, n.Jd)(s, [c]);
}
function c(e, t) {
    let r = (0, i.jC)(e[0]),
        _ = t && t.getDsn(),
        s = t && t.getOptions().tunnel,
        c = {
            sent_at: new Date().toISOString(),
            ...(!!r.trace_id && !!r.public_key && { trace: r }),
            ...(!!s && _ && { dsn: (0, a.RA)(_) }),
        },
        E = t && t.getOptions().beforeSendSpan,
        l = E ? (e) => E((0, o.XU)(e)) : (e) => (0, o.XU)(e),
        u = [];
    for (let t of e) {
        let e = l(t);
        e && u.push((0, n.KQ)(e));
    }
    return (0, n.Jd)(c, u);
}
