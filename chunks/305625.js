a.d(e, {
    Lh: () => E,
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
let s = '_frozenDsc';
function E(t, e) {
    (0, r.xp)(t, s, e);
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
        n = r[s];
    if (n) return n;
    let E = r.spanContext().traceState,
        u = E && E.get('sentry.dsc'),
        I = u && (0, _.EN)(u);
    if (I) return I;
    let d = (0, c.XU)(r),
        R = d.data || {},
        N = R[i.TE];
    null != N && (a.sample_rate = `${N}`);
    let f = R[i.Zj],
        A = d.description;
    return 'url' !== f && A && (a.transaction = A), (a.sampled = String((0, c.Tt)(r))), e.emit('createDsc', a, r), a;
}
function I(t) {
    let e = u(t);
    return (0, _.IQ)(e);
}
