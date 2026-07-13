let i;
n.d(e, { A: () => d });
var l = n(17928),
    o = n(228366),
    r = n(773669);
function s(t, e) {
    if (0 === t.length) throw Error("No user IDs provided");
    return [...t, ...e].join(",");
}
let u = {};
function a() {
    if (i === r.default.locale) return !1;
    (u = {}), (i = r.default.locale);
}
class c extends l.Ay.Store {
    initialize() {
        this.waitFor(r.default), this.syncWith([r.default], a), (i = r.default.locale);
    }
    getRecommendations(t, e) {
        if (0 !== t.length && 0 !== e.length) return u[s(t, e)];
    }
}
let d = new c(o.h, {
    LOGOUT: function () {
        u = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (t) {
        let { userIds: e, applicationIds: n } = t;
        if (0 === e.length || 0 === n.length) return !1;
        let i = s(e, n);
        u = { ...u, [i]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (t) {
        let { userIds: e, applicationIds: n, data: i } = t;
        if (0 === e.length || 0 === n.length) return !1;
        let l = s(e, n);
        u = { ...u, [l]: { state: "success", data: i, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (t) {
        let { userIds: e, applicationIds: n } = t;
        if (0 === e.length || 0 === n.length) return !1;
        let i = s(e, n);
        if (u[i]?.state === "success") return !1;
        u = { ...u, [i]: { state: "error", fetchedAt: Date.now() } };
    },
});
