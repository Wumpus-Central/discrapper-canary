a.d(e, {
    Lh: () => E,
    _l: () => l,
    jC: () => u,
    uc: () => I
});
var r = a(370336),
    n = a(285883),
    _ = a(559508),
    o = a(263449),
    i = a(988097),
    c = a(696486);
let s = '_frozenDsc';
function E(t, e) {
    (0, r.xp)(t, s, e);
}
function l(t, e) {
    let a = e.getOptions(),
        { publicKey: n } = e.getDsn() || {},
        o = (0, r.Jr)({
            environment: a.environment || _.J,
            release: a.release,
            public_key: n,
            trace_id: t
        });
    return e.emit('createDsc', o), o;
}
function u(t) {
    let e = (0, o.s3)();
    if (!e) return {};
    let a = l((0, c.XU)(t).trace_id || '', e),
        r = (0, c.Gx)(t),
        _ = r[s];
    if (_) return _;
    let E = r.spanContext().traceState,
        u = E && E.get('sentry.dsc'),
        I = u && (0, n.EN)(u);
    if (I) return I;
    let R = (0, c.XU)(r),
        d = R.data || {},
        A = d[i.TE];
    null != A && (a.sample_rate = `${A}`);
    let f = d[i.Zj],
        p = R.description;
    return 'url' !== f && p && (a.transaction = p), (a.sampled = String((0, c.Tt)(r))), e.emit('createDsc', a, r), a;
}
function I(t) {
    let e = u(t);
    return (0, n.IQ)(e);
}
