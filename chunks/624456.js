n.d(t, {
    M: () => a,
    l: () => s,
});
var r = n(284009),
    i = n.n(r);

function a(e) {
    let t = e.items;
    return i()(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId;
}

function s(e) {
    var t;
    let n = null == e || null == (t = e.renewalMutations) ? void 0 : t.items;
    if (null != n)
        return (
            i()(n.length <= 1, "more than 1 renewal mutation for role subscription"), null == n ? void 0 : n[0].planId
        );
}
