n.d(t, { M: () => i, l: () => a });
var l = n(284009),
    r = n.n(l);
function i(e) {
    let t = e.items;
    return r()(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId;
}
function a(e) {
    let t = e?.renewalMutations?.items;
    if (null != t) return r()(t.length <= 1, "more than 1 renewal mutation for role subscription"), t?.[0].planId;
}
