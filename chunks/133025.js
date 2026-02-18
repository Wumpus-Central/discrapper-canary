"use strict";
i.d(t, { A: () => o });
var n = i(311907),
    s = i(73153);
function r(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",");
}
let l = {};
class a extends n.Ay.Store {
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return l[r(e, t)];
    }
}
let o = new a(s.h, {
    LOGOUT: function () {
        l = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (e) {
        let { userIds: t, applicationIds: i } = e;
        if (0 === t.length || 0 === i.length) return !1;
        let n = r(t, i);
        l = { ...l, [n]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let { userIds: t, applicationIds: i, data: n } = e;
        if (0 === t.length || 0 === i.length) return !1;
        let s = r(t, i);
        l = { ...l, [s]: { state: "success", data: n, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (e) {
        let { userIds: t, applicationIds: i } = e;
        if (0 === t.length || 0 === i.length) return !1;
        let n = r(t, i);
        if (l[n]?.state === "success") return !1;
        l = { ...l, [n]: { state: "error", fetchedAt: Date.now() } };
    },
});
