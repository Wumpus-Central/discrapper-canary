n.d(t, { A: () => u });
var s = n(311907),
    r = n(73153);
function i(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",");
}
let l = {};
class o extends s.Ay.Store {
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return l[i(e, t)];
    }
}
let u = new o(r.h, {
    LOGOUT: function () {
        l = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let s = i(t, n);
        l = { ...l, [s]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let { userIds: t, applicationIds: n, data: s } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let r = i(t, n);
        l = { ...l, [r]: { state: "success", data: s, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let s = i(t, n);
        if (l[s]?.state === "success") return !1;
        l = { ...l, [s]: { state: "error", fetchedAt: Date.now() } };
    },
});
