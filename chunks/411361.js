n.d(t, { HW: () => m, LZ: () => d, ao: () => h, k1: () => f });
var r = n(922248),
    i = n(630449),
    o = n(92332),
    a = n(435819),
    s = n(690094),
    l = n(370932),
    c = n(582102);
let u = "_frozenDsc";
function d(e, t) {
    (0, s.my)(e, u, t);
}
function p(e, t) {
    let n = t.getOptions(),
        { publicKey: i } = t.getDsn() || {},
        o = (0, s.Ce)({ environment: n.environment || r.U, release: n.release, public_key: i, trace_id: e });
    return t.emit("createDsc", o), o;
}
function h(e, t) {
    let n = t.getPropagationContext();
    return n.dsc || p(n.traceId, e);
}
function f(e) {
    let t = (0, i.KU)();
    if (!t) return {};
    let n = (0, c.zU)(e),
        r = n[u];
    if (r) return r;
    let s = n.spanContext().traceState,
        d = s && s.get("sentry.dsc"),
        h = d && (0, a.yD)(d);
    if (h) return h;
    let f = p(e.spanContext().traceId, t),
        m = (0, c.et)(n),
        g = m.data || {},
        _ = g[o.sy];
    null != _ && (f.sample_rate = `${_}`);
    let y = g[o.i_],
        v = m.description;
    return (
        "url" !== y && v && (f.transaction = v),
        (0, l.w)() && (f.sampled = String((0, c.pK)(n))),
        t.emit("createDsc", f, n),
        f
    );
}
function m(e) {
    let t = f(e);
    return (0, a.De)(t);
}
