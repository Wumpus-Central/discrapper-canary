"use strict";
i.d(e, { A: () => o });
var n = i(311907),
    s = i(73153);
function r(t, e) {
    if (0 === t.length) throw Error("No user IDs provided");
    return [...t, ...e].join(",");
}
let l = {};
class a extends n.Ay.Store {
    getRecommendations(t, e) {
        if (0 !== t.length && 0 !== e.length) return l[r(t, e)];
    }
}
let o = new a(s.h, {
    LOGOUT: function () {
        l = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (t) {
        let { userIds: e, applicationIds: i } = t;
        if (0 === e.length || 0 === i.length) return !1;
        let n = r(e, i);
        l = { ...l, [n]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (t) {
        let { userIds: e, applicationIds: i, data: n } = t;
        if (0 === e.length || 0 === i.length) return !1;
        let s = r(e, i);
        l = { ...l, [s]: { state: "success", data: n, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (t) {
        let { userIds: e, applicationIds: i } = t;
        if (0 === e.length || 0 === i.length) return !1;
        let n = r(e, i);
        if (l[n]?.state === "success") return !1;
        l = { ...l, [n]: { state: "error", fetchedAt: Date.now() } };
    },
});
