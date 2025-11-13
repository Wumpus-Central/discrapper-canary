a.d(e, {
    Lh: () => s,
    _l: () => l,
    jC: () => I,
    uc: () => R,
});
var r = a(370336),
    _ = a(285883),
    n = a(559508),
    o = a(263449),
    i = a(988097),
    E = a(696486);
let c = "_frozenDsc";
function s(t, e) {
    (0, r.xp)(t, c, e);
}
function l(t, e) {
    let a = e.getOptions(),
        { publicKey: _ } = e.getDsn() || {},
        o = (0, r.Jr)({
            environment: a.environment || n.J,
            release: a.release,
            public_key: _,
            trace_id: t,
        });
    return e.emit("createDsc", o), o;
}
function I(t) {
    let e = (0, o.s3)();
    if (!e) return {};
    let a = l((0, E.XU)(t).trace_id || "", e),
        r = (0, E.Gx)(t),
        n = r[c];
    if (n) return n;
    let s = r.spanContext().traceState,
        I = s && s.get("sentry.dsc"),
        R = I && (0, _.EN)(I);
    if (R) return R;
    let u = (0, E.XU)(r),
        A = u.data || {},
        N = A[i.TE];
    null != N && (a.sample_rate = `${N}`);
    let T = A[i.Zj],
        d = u.description;
    return "url" !== T && d && (a.transaction = d), (a.sampled = String((0, E.Tt)(r))), e.emit("createDsc", a, r), a;
}
function R(t) {
    let e = I(t);
    return (0, _.IQ)(e);
}
