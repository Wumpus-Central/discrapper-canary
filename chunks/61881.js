n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(73153),
    l = n(287809),
    o = n(403362),
    d = n(851767);
let c = null,
    u = null,
    _ = !1,
    E = { suggestedGamesIds: [], suggestedWishlistGamesIds: [] },
    A = !1,
    f = !1,
    h = !1;
class I extends a.Ay.Store {
    initialize() {
        this.waitFor(l.default);
    }
    getPendingWidgets() {
        return c;
    }
    getSaveablePendingWidgets() {
        return null == c
            ? null
            : c
                  .map((e) => (e.isUpdatable() ? e : u?.find((t) => t.getUniqueKey() === e.getUniqueKey())))
                  .filter(o.Vq)
                  .filter((e) => !e.isDiscardable());
    }
    hasPendingChanges() {
        return null !== c && (null === u || !r().isEqual(c, u));
    }
    getWidgetUpdates() {
        let e = this.getSaveablePendingWidgets();
        if (null == e || null == u) return { changedWidgets: e ?? [], removedWidgets: [], hasOrderChanges: !1 };
        let t = (e) => e.id ?? e.getUniqueKey(),
            n = new Map(u.map((e) => [t(e), e])),
            i = new Map(e.map((e) => [t(e), e])),
            r = [],
            a = [];
        for (let [e, t] of i) {
            let i = n.get(e);
            (null != i && t.isEqual(i)) || r.push(t);
        }
        for (let [e, t] of n) i.has(e) || a.push(t);
        let s = !1;
        for (let [n, i] of e.entries()) {
            let e = u[n];
            if (null == e || t(i) !== t(e)) {
                s = !0;
                break;
            }
        }
        return { changedWidgets: r, removedWidgets: a, hasOrderChanges: s };
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
        return _;
    }
    get suggestedFetchError() {
        return A;
    }
    get suggestedFetchIsLoading() {
        return f;
    }
    get suggestedFetchAttempted() {
        return h;
    }
    get suggestedGameIds() {
        return E;
    }
}
let p = new I(s.h, {
    WIDGET_PENDING_SET: function (e) {
        let { widgets: t } = e;
        if (((c = t), null === u)) {
            let e = l.default.getCurrentUser();
            if (null != e) {
                let t = d.A.getUserProfile(e.id);
                u = t?.widgets ?? [];
            }
        }
    },
    WIDGET_PENDING_SAVE_START: function (e) {
        _ = !0;
    },
    WIDGET_PENDING_SAVE_SUCCESS: function (e) {
        ((_ = !1), null !== c && ((u = null), (c = null)));
    },
    WIDGET_PENDING_SAVE_FAILURE: function (e) {
        _ = !1;
    },
    WIDGET_SUGGESTED_FETCH_SUCCESS: function (e) {
        let { suggestedGamesIds: t, suggestedWishlistGamesIds: n } = e;
        ((E.suggestedGamesIds = t), (E.suggestedWishlistGamesIds = n), (f = !1), (A = !1));
    },
    WIDGET_SUGGESTED_FETCH_FAILURE: function () {
        ((A = !0), (f = !1));
    },
    WIDGET_SUGGESTED_FETCH_START: function () {
        ((f = !0), (A = !1), (h = !0));
    },
    WIDGET_PENDING_CLEAR: function () {
        ((c = null), (u = null));
    },
    WIDGET_SUGGESTED_REMOVE_GAME: function (e) {
        let { applicationId: t } = e;
        ((E.suggestedGamesIds = E.suggestedGamesIds.filter((e) => e !== t)),
            (E.suggestedWishlistGamesIds = E.suggestedWishlistGamesIds.filter((e) => e !== t)));
    },
});
n.d(t, {}, { A: p });
