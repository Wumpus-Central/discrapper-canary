n.d(t, { q: () => s });
var i = n(532309),
    r = n(636592),
    a = n(223615);
function s() {
    let e = i.A.shouldFetch();
    if (e.shouldFetch) return !0;
    if (e.reason !== i.V.CACHE_SHOULD_NOT_FETCH) return !1;
    let t = i.A.getRewardForProgram(r.W.NITRO);
    return !!(0, a.X)(t);
}
