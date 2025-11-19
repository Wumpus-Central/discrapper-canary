_.d(e, {
    Mq: () => i,
    Q3: () => E,
    uE: () => c,
});
var a = _(617726),
    r = _(967752),
    n = _(305625),
    o = _(696486);
function E(t, e, _, n) {
    let o = (0, a.HY)(_),
        E = {
            sent_at: new Date().toISOString(),
            ...(o && { sdk: o }),
            ...(!!n && e && { dsn: (0, r.RA)(e) }),
        },
        i = "aggregates" in t ? [{ type: "sessions" }, t] : [{ type: "session" }, t.toJSON()];
    return (0, a.Jd)(E, [i]);
}
function i(t, e, _, r) {
    var n;
    let o = (0, a.HY)(_),
        E = t.type && "replay_event" !== t.type ? t.type : "event";
    (n = _ && _.sdk) &&
        ((t.sdk = t.sdk || {}),
        (t.sdk.name = t.sdk.name || n.name),
        (t.sdk.version = t.sdk.version || n.version),
        (t.sdk.integrations = [...(t.sdk.integrations || []), ...(n.integrations || [])]),
        (t.sdk.packages = [...(t.sdk.packages || []), ...(n.packages || [])]));
    let i = (0, a.Cd)(t, o, r, e);
    delete t.sdkProcessingMetadata;
    let c = [{ type: E }, t];
    return (0, a.Jd)(i, [c]);
}
function c(t, e) {
    let _ = (0, n.jC)(t[0]),
        E = e && e.getDsn(),
        i = e && e.getOptions().tunnel,
        c = {
            sent_at: new Date().toISOString(),
            ...(!!_.trace_id && !!_.public_key && { trace: _ }),
            ...(!!i && E && { dsn: (0, r.RA)(E) }),
        },
        s = e && e.getOptions().beforeSendSpan,
        l = s ? (t) => s((0, o.XU)(t)) : (t) => (0, o.XU)(t),
        I = [];
    for (let e of t) {
        let t = l(e);
        t && I.push((0, a.KQ)(t));
    }
    return (0, a.Jd)(c, I);
}
