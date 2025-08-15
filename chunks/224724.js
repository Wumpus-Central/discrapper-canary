n.d(t, { Z: () => A });
var r = n(392711),
    i = n.n(r),
    o = n(442837),
    a = n(570140),
    s = n(594174),
    l = n(621853);
let c = null,
    u = null,
    d = !1,
    f = {
        suggestedGamesIds: [],
        suggestedWishlistGamesIds: [],
    },
    _ = !1,
    p = !1,
    h = !1;
function m(e) {
    let { widgets: t } = e;
    if (((c = t), null === u)) {
        let e = s.default.getCurrentUser();
        if (null != e) {
            var n;
            let t = l.Z.getUserProfile(e.id);
            u = null != (n = null == t ? void 0 : t.widgets) ? n : [];
        }
    }
}
function g() {
    (c = null), (u = null);
}
function E(e) {
    let { suggestedGamesIds: t, suggestedWishlistGamesIds: n } = e;
    (f.suggestedGamesIds = t), (f.suggestedWishlistGamesIds = n), (p = !1), (_ = !1);
}
function b() {
    (_ = !0), (p = !1);
}
function y() {
    (p = !0), (_ = !1), (h = !0);
}
function O(e) {
    d = !0;
}
function v(e) {
    (d = !1), null !== c && ((u = c), (c = null));
}
function I(e) {
    d = !1;
}
function T(e) {
    let { applicationId: t } = e;
    (f.suggestedGamesIds = f.suggestedGamesIds.filter((e) => e !== t)),
        (f.suggestedWishlistGamesIds = f.suggestedWishlistGamesIds.filter((e) => e !== t));
}
class S extends o.ZP.Store {
    getPendingWidgets() {
        return c;
    }
    hasPendingChanges() {
        return null !== c && (null === u || !i().isEqual(c, u));
    }
    get isSubmitting() {
        return d;
    }
    get suggestedFetchError() {
        return _;
    }
    get suggestedFetchIsLoading() {
        return p;
    }
    get suggestedFetchAttempted() {
        return h;
    }
    get suggestedGameIds() {
        return f;
    }
}
let A = new S(a.Z, {
    WIDGET_PENDING_SET: m,
    WIDGET_PENDING_SAVE_START: O,
    WIDGET_PENDING_SAVE_SUCCESS: v,
    WIDGET_PENDING_SAVE_FAILURE: I,
    WIDGET_SUGGESTED_FETCH_SUCCESS: E,
    WIDGET_SUGGESTED_FETCH_FAILURE: b,
    WIDGET_SUGGESTED_FETCH_START: y,
    WIDGET_PENDING_CLEAR: g,
    WIDGET_SUGGESTED_REMOVE_GAME: T,
});
