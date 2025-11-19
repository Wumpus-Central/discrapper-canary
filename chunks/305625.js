_.d(e, {
    Lh: () => s,
    _l: () => l,
    jC: () => I,
    uc: () => R,
});
var a = _(370336),
    r = _(285883),
    n = _(559508),
    o = _(263449),
    E = _(988097),
    i = _(696486);
let c = "_frozenDsc";
function s(t, e) {
    (0, a.xp)(t, c, e);
}
function l(t, e) {
    let _ = e.getOptions(),
        { publicKey: r } = e.getDsn() || {},
        o = (0, a.Jr)({
            environment: _.environment || n.J,
            release: _.release,
            public_key: r,
            trace_id: t,
        });
    return e.emit("createDsc", o), o;
}
function I(t) {
    let e = (0, o.s3)();
    if (!e) return {};
    let _ = l((0, i.XU)(t).trace_id || "", e),
        a = (0, i.Gx)(t),
        n = a[c];
    if (n) return n;
    let s = a.spanContext().traceState,
        I = s && s.get("sentry.dsc"),
        R = I && (0, r.EN)(I);
    if (R) return R;
    let N = (0, i.XU)(a),
        A = N.data || {},
        u = A[E.TE];
    null != u && (_.sample_rate = `${u}`);
    let T = A[E.Zj],
        d = N.description;
    return "url" !== T && d && (_.transaction = d), (_.sampled = String((0, i.Tt)(a))), e.emit("createDsc", _, a), _;
}
function R(t) {
    let e = I(t);
    return (0, r.IQ)(e);
}
