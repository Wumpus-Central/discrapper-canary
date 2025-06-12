a.d(e, {
    Lh: () => s,
    _l: () => l,
    jC: () => I,
    uc: () => u
});
var r = a(370336),
    _ = a(285883),
    n = a(559508),
    o = a(263449),
    i = a(988097),
    c = a(696486);
let E = '_frozenDsc';
function s(t, e) {
    (0, r.xp)(t, E, e);
}
function l(t, e) {
    let a = e.getOptions(),
        { publicKey: _ } = e.getDsn() || {},
        o = (0, r.Jr)({
            environment: a.environment || n.J,
            release: a.release,
            public_key: _,
            trace_id: t
        });
    return e.emit('createDsc', o), o;
}
function I(t) {
    let e = (0, o.s3)();
    if (!e) return {};
    let a = l((0, c.XU)(t).trace_id || '', e),
        r = (0, c.Gx)(t),
        n = r[E];
    if (n) return n;
    let s = r.spanContext().traceState,
        I = s && s.get('sentry.dsc'),
        u = I && (0, _.EN)(I);
    if (u) return u;
    let R = (0, c.XU)(r),
        A = R.data || {},
        T = A[i.TE];
    null != T && (a.sample_rate = `${T}`);
    let N = A[i.Zj],
        d = R.description;
    return 'url' !== N && d && (a.transaction = d), (a.sampled = String((0, c.Tt)(r))), e.emit('createDsc', a, r), a;
}
function u(t) {
    let e = I(t);
    return (0, _.IQ)(e);
}
