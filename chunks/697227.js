n.d(t, {
    V: () => o,
    W: () => l
});
var r = n(512722),
    i = n.n(r);
function l(e) {
    let t = e.items;
    return i()(1 === t.length, 'more than 1 subscription item for role subscription'), t[0].planId;
}
function o(e) {
    var t;
    let n = null == e || null == (t = e.renewalMutations) ? void 0 : t.items;
    if (null != n) return i()(n.length <= 1, 'more than 1 renewal mutation for role subscription'), null == n ? void 0 : n[0].planId;
}
