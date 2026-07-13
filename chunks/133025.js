"use strict";
let i;
n.d(t, { A: () => u });
var r = n(17928),
    a = n(228366),
    s = n(773669);
function l(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",");
}
let o = {};
function d() {
    if (i === s.default.locale) return !1;
    (o = {}), (i = s.default.locale);
}
class c extends r.Ay.Store {
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], d), (i = s.default.locale);
    }
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return o[l(e, t)];
    }
}
let u = new c(a.h, {
    LOGOUT: function () {
        o = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let i = l(t, n);
        o = { ...o, [i]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let { userIds: t, applicationIds: n, data: i } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let r = l(t, n);
        o = { ...o, [r]: { state: "success", data: i, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let i = l(t, n);
        if (o[i]?.state === "success") return !1;
        o = { ...o, [i]: { state: "error", fetchedAt: Date.now() } };
    },
});
