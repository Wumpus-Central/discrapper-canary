let a;
n.d(t, { A: () => u });
var l = n(311907),
    i = n(73153),
    r = n(773669);
function s(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",");
}
let o = {};
function d() {
    if (a === r.default.locale) return !1;
    (o = {}), (a = r.default.locale);
}
class c extends l.Ay.Store {
    initialize() {
        this.waitFor(r.default), this.syncWith([r.default], d), (a = r.default.locale);
    }
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return o[s(e, t)];
    }
}
let u = new c(i.h, {
    LOGOUT: function () {
        o = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let a = s(t, n);
        o = { ...o, [a]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let { userIds: t, applicationIds: n, data: a } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let l = s(t, n);
        o = { ...o, [l]: { state: "success", data: a, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let a = s(t, n);
        if (o[a]?.state === "success") return !1;
        o = { ...o, [a]: { state: "error", fetchedAt: Date.now() } };
    },
});
