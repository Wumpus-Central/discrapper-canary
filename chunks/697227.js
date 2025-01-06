n.d(e, {
    V: function () {
        return o;
    },
    W: function () {
        return l;
    }
});
var i = n(512722),
    r = n.n(i);
function l(t) {
    let e = t.items;
    return r()(1 === e.length, 'more than 1 subscription item for role subscription'), e[0].planId;
}
function o(t) {
    var e;
    let n = null == t ? void 0 : null === (e = t.renewalMutations) || void 0 === e ? void 0 : e.items;
    if (null != n) return r()(n.length <= 1, 'more than 1 renewal mutation for role subscription'), null == n ? void 0 : n[0].planId;
}
