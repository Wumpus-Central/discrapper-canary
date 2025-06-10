a.d(e, {
    Lh: () => s,
    _l: () => l,
    jC: () => u,
    uc: () => I
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
function u(t) {
    let e = (0, o.s3)();
    if (!e) return {};
    let a = l((0, c.XU)(t).trace_id || '', e),
        r = (0, c.Gx)(t),
        n = r[E];
    if (n) return n;
    let s = r.spanContext().traceState,
        u = s && s.get('sentry.dsc'),
        I = u && (0, _.EN)(u);
    if (I) return I;
    let R = (0, c.XU)(r),
        d = R.data || {},
        N = d[i.TE];
    null != N && (a.sample_rate = `${N}`);
    let A = d[i.Zj],
        f = R.description;
    return 'url' !== A && f && (a.transaction = f), (a.sampled = String((0, c.Tt)(r))), e.emit('createDsc', a, r), a;
}
function I(t) {
    let e = u(t);
    return (0, _.IQ)(e);
}
