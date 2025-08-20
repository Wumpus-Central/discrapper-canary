n.d(t, { Z: () => N }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(442837),
    o = n(570140),
    s = n(594174),
    l = n(621853),
    c = n(86419);
let u = null,
    d = null,
    f = !1,
    _ = {
        suggestedGamesIds: [],
        suggestedWishlistGamesIds: [],
    },
    p = !1,
    h = !1,
    m = !1;
function g(e) {
    let { widgets: t } = e;
    if (((u = t), null === d)) {
        let e = s.default.getCurrentUser();
        if (null != e) {
            var n;
            let t = l.Z.getUserProfile(e.id);
            d = null != (n = null == t ? void 0 : t.widgets) ? n : [];
        }
    }
}
function E() {
    (u = null), (d = null);
}
function b(e) {
    let { suggestedGamesIds: t, suggestedWishlistGamesIds: n } = e;
    (_.suggestedGamesIds = t), (_.suggestedWishlistGamesIds = n), (h = !1), (p = !1);
}
function y() {
    (p = !0), (h = !1);
}
function O() {
    (h = !0), (p = !1), (m = !0);
}
function v(e) {
    f = !0;
}
function I(e) {
    (f = !1), null !== u && ((d = null), (u = null));
}
function T(e) {
    f = !1;
}
function S(e) {
    let { applicationId: t } = e;
    (_.suggestedGamesIds = _.suggestedGamesIds.filter((e) => e !== t)),
        (_.suggestedWishlistGamesIds = _.suggestedWishlistGamesIds.filter((e) => e !== t));
}
class A extends a.ZP.Store {
    getPendingWidgets() {
        return u;
    }
    getSaveablePendingWidgets() {
        return null == u ? null : u.filter((e) => e.games.length > 0);
    }
    hasPendingChanges() {
        return null !== u && (null === d || !i().isEqual(u, d));
    }
    hasSaveablePendingChanges() {
        if (null == u) return !1;
        if (null == d) return !0;
        let e = new Map(d.map((e) => [e.id, e])),
            t = new Map(u.map((e) => [e.id, e]));
        for (let [n, r] of t) {
            let t = e.get(n);
            if (null == t) {
                if (r.games.length > 0) return !0;
            } else if (!(0, c.ou)(r.games, t.games, r.type)) return !0;
        }
        for (let [n] of e) if (!t.has(n)) return !0;
        return !1;
    }
    get isSubmitting() {
        return f;
    }
    get suggestedFetchError() {
        return p;
    }
    get suggestedFetchIsLoading() {
        return h;
    }
    get suggestedFetchAttempted() {
        return m;
    }
    get suggestedGameIds() {
        return _;
    }
}
let N = new A(o.Z, {
    WIDGET_PENDING_SET: g,
    WIDGET_PENDING_SAVE_START: v,
    WIDGET_PENDING_SAVE_SUCCESS: I,
    WIDGET_PENDING_SAVE_FAILURE: T,
    WIDGET_SUGGESTED_FETCH_SUCCESS: b,
    WIDGET_SUGGESTED_FETCH_FAILURE: y,
    WIDGET_SUGGESTED_FETCH_START: O,
    WIDGET_PENDING_CLEAR: E,
    WIDGET_SUGGESTED_REMOVE_GAME: S,
});
