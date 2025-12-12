n.d(t, {
    Lh: () => E,
    _l: () => l,
    jC: () => u,
    uc: () => d,
});
var r = n(886649),
    i = n(288101),
    a = n(180932),
    o = n(509440),
    _ = n(8062),
    s = n(82255);
let c = "_frozenDsc";
function E(e, t) {
    (0, r.xp)(e, c, t);
}
function l(e, t) {
    let n = t.getOptions(),
        { publicKey: i } = t.getDsn() || {},
        o = (0, r.Jr)({
            environment: n.environment || a.J,
            release: n.release,
            public_key: i,
            trace_id: e,
        });
    return t.emit("createDsc", o), o;
}
function u(e) {
    let t = (0, o.s3)();
    if (!t) return {};
    let n = l((0, s.XU)(e).trace_id || "", t),
        r = (0, s.Gx)(e),
        a = r[c];
    if (a) return a;
    let E = r.spanContext().traceState,
        u = E && E.get("sentry.dsc"),
        d = u && (0, i.EN)(u);
    if (d) return d;
    let p = (0, s.XU)(r),
        f = p.data || {},
        I = f[_.TE];
    null != I && (n.sample_rate = `${I}`);
    let T = f[_.Zj],
        R = p.description;
    return "url" !== T && R && (n.transaction = R), (n.sampled = String((0, s.Tt)(r))), t.emit("createDsc", n, r), n;
}
function d(e) {
    let t = u(e);
    return (0, i.IQ)(t);
}
