r.d(t, {
    Lh: () => E,
    _l: () => l,
    jC: () => u,
    uc: () => d,
});
var n = r(370336),
    a = r(285883),
    i = r(559508),
    o = r(263449),
    _ = r(988097),
    s = r(696486);
let c = "_frozenDsc";
function E(e, t) {
    (0, n.xp)(e, c, t);
}
function l(e, t) {
    let r = t.getOptions(),
        { publicKey: a } = t.getDsn() || {},
        o = (0, n.Jr)({
            environment: r.environment || i.J,
            release: r.release,
            public_key: a,
            trace_id: e,
        });
    return t.emit("createDsc", o), o;
}
function u(e) {
    let t = (0, o.s3)();
    if (!t) return {};
    let r = l((0, s.XU)(e).trace_id || "", t),
        n = (0, s.Gx)(e),
        i = n[c];
    if (i) return i;
    let E = n.spanContext().traceState,
        u = E && E.get("sentry.dsc"),
        d = u && (0, a.EN)(u);
    if (d) return d;
    let I = (0, s.XU)(n),
        p = I.data || {},
        R = p[_.TE];
    null != R && (r.sample_rate = `${R}`);
    let T = p[_.Zj],
        A = I.description;
    return "url" !== T && A && (r.transaction = A), (r.sampled = String((0, s.Tt)(n))), t.emit("createDsc", r, n), r;
}
function d(e) {
    let t = u(e);
    return (0, a.IQ)(t);
}
