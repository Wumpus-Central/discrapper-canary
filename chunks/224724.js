n.d(t, { Z: () => C }), n(388685), n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(442837),
    o = n(570140),
    s = n(594174),
    l = n(621853);
let c = null,
    u = null,
    d = !1,
    f = {
        suggestedGamesIds: [],
        suggestedWishlistGamesIds: [],
    },
    p = !1,
    _ = !1,
    m = !1;
function h(e) {
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
    (f.suggestedGamesIds = t), (f.suggestedWishlistGamesIds = n), (_ = !1), (p = !1);
}
function b() {
    (p = !0), (_ = !1);
}
function y() {
    (_ = !0), (p = !1), (m = !0);
}
function O(e) {
    d = !0;
}
function v(e) {
    (d = !1), null !== c && ((u = null), (c = null));
}
function S(e) {
    d = !1;
}
function I(e) {
    let { applicationId: t } = e;
    (f.suggestedGamesIds = f.suggestedGamesIds.filter((e) => e !== t)),
        (f.suggestedWishlistGamesIds = f.suggestedWishlistGamesIds.filter((e) => e !== t));
}
class T extends a.ZP.Store {
    initialize() {
        this.waitFor(s.default);
    }
    getPendingWidgets() {
        return c;
    }
    getSaveablePendingWidgets() {
        return null == c ? null : c.filter((e) => !e.isDiscardable());
    }
    hasPendingChanges() {
        return null !== c && (null === u || !i().isEqual(c, u));
    }
    getWidgetUpdates() {
        let e = this.getSaveablePendingWidgets();
        if (null == e || null == u)
            return {
                changedWidgets: null != e ? e : [],
                removedWidgets: [],
                hasOrderChanges: !1,
            };
        let t = new Map(u.map((e) => [e.id, e])),
            n = new Map(e.map((e) => [e.id, e])),
            r = [],
            i = [];
        for (let [e, i] of n) {
            let n = t.get(e);
            (null != n && i.isEqual(n)) || r.push(i);
        }
        for (let [e, r] of t) n.has(e) || i.push(r);
        let a = !1;
        for (let t = 0; t < e.length; t++) {
            var o, s;
            if ((null == (o = e[t]) ? void 0 : o.id) !== (null == (s = u[t]) ? void 0 : s.id)) {
                a = !0;
                break;
            }
        }
        return {
            changedWidgets: r,
            removedWidgets: i,
            hasOrderChanges: a,
        };
    }
    getChangedWidgets() {
        let { changedWidgets: e } = this.getWidgetUpdates();
        return e;
    }
    getRemovedWidgets() {
        let { removedWidgets: e } = this.getWidgetUpdates();
        return e;
    }
    hasUnsavedChanges() {
        let { changedWidgets: e, removedWidgets: t, hasOrderChanges: n } = this.getWidgetUpdates();
        return e.length > 0 || t.length > 0 || n;
    }
    canSaveChanges() {
        let e = this.getSaveablePendingWidgets();
        return null != e && e.every((e) => e.isValid());
    }
    get isSubmitting() {
        return d;
    }
    get suggestedFetchError() {
        return p;
    }
    get suggestedFetchIsLoading() {
        return _;
    }
    get suggestedFetchAttempted() {
        return m;
    }
    get suggestedGameIds() {
        return f;
    }
}
let C = new T(o.Z, {
    WIDGET_PENDING_SET: h,
    WIDGET_PENDING_SAVE_START: O,
    WIDGET_PENDING_SAVE_SUCCESS: v,
    WIDGET_PENDING_SAVE_FAILURE: S,
    WIDGET_SUGGESTED_FETCH_SUCCESS: E,
    WIDGET_SUGGESTED_FETCH_FAILURE: b,
    WIDGET_SUGGESTED_FETCH_START: y,
    WIDGET_PENDING_CLEAR: g,
    WIDGET_SUGGESTED_REMOVE_GAME: I,
});
