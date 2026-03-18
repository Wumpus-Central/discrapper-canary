"use strict";
let r;
n.d(t, { A: () => h });
var i = n(311907),
    s = n(73153),
    a = n(773669);
function o(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",");
}
let l = {};
function u() {
    l = {};
}
function c(e) {
    let { userIds: t, applicationIds: n } = e;
    if (0 === t.length || 0 === n.length) return !1;
    let r = o(t, n);
    l = { ...l, [r]: { state: "loading" } };
}
function d(e) {
    let { userIds: t, applicationIds: n, data: r } = e;
    if (0 === t.length || 0 === n.length) return !1;
    let i = o(t, n);
    l = { ...l, [i]: { state: "success", data: r, fetchedAt: Date.now() } };
}
function _(e) {
    let { userIds: t, applicationIds: n } = e;
    if (0 === t.length || 0 === n.length) return !1;
    let r = o(t, n);
    if (l[r]?.state === "success") return !1;
    l = { ...l, [r]: { state: "error", fetchedAt: Date.now() } };
}
function f() {
    if (r === a.default.locale) return !1;
    (l = {}), (r = a.default.locale);
}
class p extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default), this.syncWith([a.default], f), (r = a.default.locale);
    }
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return l[o(e, t)];
    }
}
let h = new p(s.h, {
    LOGOUT: u,
    WISHLIST_RECOMMENDATIONS_FETCH_START: c,
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: d,
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: _,
});
