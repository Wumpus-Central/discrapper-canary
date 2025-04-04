a.d(e, {
    Mq: () => c,
    Q3: () => i,
    uE: () => s
});
var r = a(617726),
    n = a(967752),
    _ = a(305625),
    o = a(696486);
function i(t, e, a, _) {
    let o = (0, r.HY)(a),
        i = {
            sent_at: new Date().toISOString(),
            ...(o && { sdk: o }),
            ...(!!_ && e && { dsn: (0, n.RA)(e) })
        },
        c = 'aggregates' in t ? [{ type: 'sessions' }, t] : [{ type: 'session' }, t.toJSON()];
    return (0, r.Jd)(i, [c]);
}
function c(t, e, a, n) {
    var _;
    let o = (0, r.HY)(a),
        i = t.type && 'replay_event' !== t.type ? t.type : 'event';
    (_ = a && a.sdk) && ((t.sdk = t.sdk || {}), (t.sdk.name = t.sdk.name || _.name), (t.sdk.version = t.sdk.version || _.version), (t.sdk.integrations = [...(t.sdk.integrations || []), ...(_.integrations || [])]), (t.sdk.packages = [...(t.sdk.packages || []), ...(_.packages || [])]));
    let c = (0, r.Cd)(t, o, n, e);
    delete t.sdkProcessingMetadata;
    let s = [{ type: i }, t];
    return (0, r.Jd)(c, [s]);
}
function s(t, e) {
    let a = (0, _.jC)(t[0]),
        i = e && e.getDsn(),
        c = e && e.getOptions().tunnel,
        s = {
            sent_at: new Date().toISOString(),
            ...(!!a.trace_id && !!a.public_key && { trace: a }),
            ...(!!c && i && { dsn: (0, n.RA)(i) })
        },
        E = e && e.getOptions().beforeSendSpan,
        l = E ? (t) => E((0, o.XU)(t)) : (t) => (0, o.XU)(t),
        u = [];
    for (let e of t) {
        let t = l(e);
        t && u.push((0, r.KQ)(t));
    }
    return (0, r.Jd)(s, u);
}
