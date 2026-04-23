let l;
n.d(t, { A: () => u });
var a = n(311907),
    i = n(73153),
    r = n(773669);
function s(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",");
}
let o = {};
function c() {
    if (l === r.default.locale) return !1;
    (o = {}), (l = r.default.locale);
}
class d extends a.Ay.Store {
    initialize() {
        this.waitFor(r.default), this.syncWith([r.default], c), (l = r.default.locale);
    }
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return o[s(e, t)];
    }
}
let u = new d(i.h, {
    LOGOUT: function () {
        o = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let l = s(t, n);
        o = { ...o, [l]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let { userIds: t, applicationIds: n, data: l } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let a = s(t, n);
        o = { ...o, [a]: { state: "success", data: l, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let l = s(t, n);
        if (o[l]?.state === "success") return !1;
        o = { ...o, [l]: { state: "error", fetchedAt: Date.now() } };
    },
});
