n.d(t, { q: () => c });
var i = n(649852),
    r = n.n(i),
    a = n(243264),
    s = n(929396),
    l = n(649079),
    o = n(471677);
let d = r()(
    (e) => {
        o.YK.fetchMany([e]);
    },
    o.fo,
    { leading: !0, maxWait: o.Mg },
);
function c(e, t) {
    let n = null != t ? (0, l.$g)(t) : null;
    n?.onQuery(e);
    let i = (0, s.C7)(e);
    if (null == i) return null;
    d(i);
    let r = a.A.getClosestResults(i),
        o = (r?.results ?? []).filter(s.qS);
    return (null != r && n?.onResults(r.query, o), o);
}
