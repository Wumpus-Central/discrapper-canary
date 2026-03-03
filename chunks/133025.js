"use strict";
n.d(t, { A: () => o });
var i = n(311907),
    s = n(73153);
function r(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",");
}
let a = {};
class l extends i.Ay.Store {
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return a[r(e, t)];
    }
}
let o = new l(s.h, {
    LOGOUT: function () {
        a = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let i = r(t, n);
        a = { ...a, [i]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let { userIds: t, applicationIds: n, data: i } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let s = r(t, n);
        a = { ...a, [s]: { state: "success", data: i, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let i = r(t, n);
        if (a[i]?.state === "success") return !1;
        a = { ...a, [i]: { state: "error", fetchedAt: Date.now() } };
    },
});
