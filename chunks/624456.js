"use strict";
n.d(t, { M: () => a, l: () => s });
var r = n(284009),
    i = n.n(r);
function a(e) {
    let t = e.items;
    return i()(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId;
}
function s(e) {
    let t = e?.renewalMutations?.items;
    if (null != t) return i()(t.length <= 1, "more than 1 renewal mutation for role subscription"), t?.[0].planId;
}
