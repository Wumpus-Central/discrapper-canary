n.d(t, {
    V: () => s,
    W: () => r
});
var i = n(512722),
    l = n.n(i);
function r(e) {
    let t = e.items;
    return l()(1 === t.length, 'more than 1 subscription item for role subscription'), t[0].planId;
}
function s(e) {
    var t;
    let n = null == e ? void 0 : null === (t = e.renewalMutations) || void 0 === t ? void 0 : t.items;
    if (null != n) return l()(n.length <= 1, 'more than 1 renewal mutation for role subscription'), null == n ? void 0 : n[0].planId;
}
