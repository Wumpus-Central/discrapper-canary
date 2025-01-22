n.d(t, {
    V: function () {
        return o;
    },
    W: function () {
        return l;
    }
});
var i = n(512722),
    r = n.n(i);
function l(e) {
    let t = e.items;
    return r()(1 === t.length, 'more than 1 subscription item for role subscription'), t[0].planId;
}
function o(e) {
    var t;
    let n = null == e ? void 0 : null === (t = e.renewalMutations) || void 0 === t ? void 0 : t.items;
    if (null != n) return r()(n.length <= 1, 'more than 1 renewal mutation for role subscription'), null == n ? void 0 : n[0].planId;
}
