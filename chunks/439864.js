n.d(t, { q: () => c });
var i = n(649852),
    r = n.n(i),
    a = n(243264),
    s = n(929396),
    l = n(649079),
    o = n(471677);
let d = r()(
    (e, t) => {
        o.YK.fetchMany([e, t]);
    },
    o.fo,
    { leading: !0, maxWait: o.Mg },
);
function c(e, t, n) {
    let i = null != n ? (0, l.$g)(n, t) : null;
    i?.onQuery(e);
    let r = (0, s.C7)(e);
    if (null == r) return null;
    d(r, t);
    let o = a.A.getClosestResults(r, t),
        c = (o?.results ?? []).filter(s.qS);
    return (null != o && i?.onResults(o.query, c), c);
}
