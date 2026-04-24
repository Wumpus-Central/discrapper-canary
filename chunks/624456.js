n.d(t, { M: () => a, l: () => r });
var i = n(284009),
    l = n.n(i);
function a(e) {
    let t = e.items;
    return l()(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId;
}
function r(e) {
    let t = e?.renewalMutations?.items;
    if (null != t) return l()(t.length <= 1, "more than 1 renewal mutation for role subscription"), t?.[0].planId;
}
