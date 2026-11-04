var r = n(922248),
    i = n(630449),
    o = n(92332),
    a = n(435819),
    s = n(690094),
    l = n(370932),
    c = n(582102);
let u = "_frozenDsc";
function d(e, t) {
    let n = t.getOptions(),
        { publicKey: i } = t.getDsn() || {},
        o = (0, s.Ce)({ environment: n.environment || r.U, release: n.release, public_key: i, trace_id: e });
    return (t.emit("createDsc", o), o);
}
function p(e) {
    let t = (0, i.KU)();
    if (!t) return {};
    let n = (0, c.zU)(e),
        r = n[u];
    if (r) return r;
    let s = n.spanContext().traceState,
        p = s && s.get("sentry.dsc"),
        h = p && (0, a.yD)(p);
    if (h) return h;
    let f = d(e.spanContext().traceId, t),
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
n.d(
    t,
    {},
    {
        HW: function (e) {
            let t = p(e);
            return (0, a.De)(t);
        },
        LZ: function (e, t) {
            (0, s.my)(e, u, t);
        },
        ao: function (e, t) {
            let n = t.getPropagationContext();
            return n.dsc || d(n.traceId, e);
        },
        k1: p,
    },
);
