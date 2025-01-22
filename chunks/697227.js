e.d(n, {
    V: function () {
        return u;
    },
    W: function () {
        return l;
    }
});
var i = e(512722),
    r = e.n(i);
function l(t) {
    let n = t.items;
    return r()(1 === n.length, 'more than 1 subscription item for role subscription'), n[0].planId;
}
function u(t) {
    var n;
    let e = null == t ? void 0 : null === (n = t.renewalMutations) || void 0 === n ? void 0 : n.items;
    if (null != e) return r()(e.length <= 1, 'more than 1 renewal mutation for role subscription'), null == e ? void 0 : e[0].planId;
}
