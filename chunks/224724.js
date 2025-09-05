n.d(t, { Z: () => N }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(442837),
    o = n(570140),
    s = n(594174),
    l = n(836197),
    c = n(621853),
    u = n(86419);
let d = null,
    f = null,
    _ = !1,
    p = {
        suggestedGamesIds: [],
        suggestedWishlistGamesIds: [],
    },
    h = !1,
    m = !1,
    g = !1;
function E(e) {
    let { widgets: t } = e;
    if (((d = t), null === f)) {
        let e = s.default.getCurrentUser();
        if (null != e) {
            var n;
            let t = c.Z.getUserProfile(e.id);
            f = null != (n = null == t ? void 0 : t.widgets) ? n : [];
        }
    }
}
function b() {
    (d = null), (f = null);
}
function y(e) {
    let { suggestedGamesIds: t, suggestedWishlistGamesIds: n } = e;
    (p.suggestedGamesIds = t), (p.suggestedWishlistGamesIds = n), (m = !1), (h = !1);
}
function O() {
    (h = !0), (m = !1);
}
function v() {
    (m = !0), (h = !1), (g = !0);
}
function I(e) {
    _ = !0;
}
function T(e) {
    (_ = !1), null !== d && ((f = null), (d = null));
}
function S(e) {
    _ = !1;
}
function A(e) {
    let { applicationId: t } = e;
    (p.suggestedGamesIds = p.suggestedGamesIds.filter((e) => e !== t)),
        (p.suggestedWishlistGamesIds = p.suggestedWishlistGamesIds.filter((e) => e !== t));
}
class C extends a.ZP.Store {
    getPendingWidgets() {
        return d;
    }
    getSaveablePendingWidgets() {
        return null == d ? null : d.filter((e) => !(0, l.W)(e) || e.games.length > 0);
    }
    hasPendingChanges() {
        return null !== d && (null === f || !i().isEqual(d, f));
    }
    hasSaveablePendingChanges() {
        let e = this.getSaveablePendingWidgets();
        if (null == e) return !1;
        if (null == f) return !0;
        let t = new Map(f.map((e) => [e.id, e])),
            n = new Map(e.map((e) => [e.id, e]));
        for (let [e, r] of n) {
            let n = t.get(e);
            if (null == n || ((0, l.W)(r) && (0, l.W)(n) && !(0, u.ou)(r.games, n.games, r.type))) return !0;
        }
        for (let [e] of t) if (!n.has(e)) return !0;
        for (let t = 0; t < e.length; t++) {
            var r, i;
            if ((null == (r = e[t]) ? void 0 : r.id) !== (null == (i = f[t]) ? void 0 : i.id)) return !0;
        }
        return !1;
    }
    get isSubmitting() {
        return _;
    }
    get suggestedFetchError() {
        return h;
    }
    get suggestedFetchIsLoading() {
        return m;
    }
    get suggestedFetchAttempted() {
        return g;
    }
    get suggestedGameIds() {
        return p;
    }
}
let N = new C(o.Z, {
    WIDGET_PENDING_SET: E,
    WIDGET_PENDING_SAVE_START: I,
    WIDGET_PENDING_SAVE_SUCCESS: T,
    WIDGET_PENDING_SAVE_FAILURE: S,
    WIDGET_SUGGESTED_FETCH_SUCCESS: y,
    WIDGET_SUGGESTED_FETCH_FAILURE: O,
    WIDGET_SUGGESTED_FETCH_START: v,
    WIDGET_PENDING_CLEAR: b,
    WIDGET_SUGGESTED_REMOVE_GAME: A,
});
