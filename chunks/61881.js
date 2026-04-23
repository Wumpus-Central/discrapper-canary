"use strict";
n.d(t, { A: () => m }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(287809),
    l = n(622543);
let u = null,
    c = null,
    d = !1,
    _ = { suggestedGamesIds: [], suggestedWishlistGamesIds: [] },
    f = !1,
    p = !1,
    h = !1;
class E extends s.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    getPendingWidgets() {
        return u;
    }
    getSaveablePendingWidgets() {
        return null == u ? null : u.filter((e) => !e.isDiscardable());
    }
    hasPendingChanges() {
        return null !== u && (null === c || !i().isEqual(u, c));
    }
    getWidgetUpdates() {
        let e = this.getSaveablePendingWidgets();
        if (null == e || null == c) return { changedWidgets: e ?? [], removedWidgets: [], hasOrderChanges: !1 };
        let t = new Map(c.map((e) => [e.id, e])),
            n = new Map(e.map((e) => [e.id, e])),
            r = [],
            i = [];
        for (let [e, i] of n) {
            let n = t.get(e);
            (null != n && i.isEqual(n)) || r.push(i);
        }
        for (let [e, r] of t) n.has(e) || i.push(r);
        let s = !1;
        for (let t = 0; t < e.length; t++)
            if (e[t]?.id !== c[t]?.id) {
                s = !0;
                break;
            }
        return { changedWidgets: r, removedWidgets: i, hasOrderChanges: s };
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
        return f;
    }
    get suggestedFetchIsLoading() {
        return p;
    }
    get suggestedFetchAttempted() {
        return h;
    }
    get suggestedGameIds() {
        return _;
    }
}
let m = new E(a.h, {
    WIDGET_PENDING_SET: function (e) {
        let { widgets: t } = e;
        if (((u = t), null === c)) {
            let e = o.default.getCurrentUser();
            if (null != e) {
                let t = l.A.getUserProfile(e.id);
                c = t?.widgets ?? [];
            }
        }
    },
    WIDGET_PENDING_SAVE_START: function (e) {
        d = !0;
    },
    WIDGET_PENDING_SAVE_SUCCESS: function (e) {
        (d = !1), null !== u && ((c = null), (u = null));
    },
    WIDGET_PENDING_SAVE_FAILURE: function (e) {
        d = !1;
    },
    WIDGET_SUGGESTED_FETCH_SUCCESS: function (e) {
        let { suggestedGamesIds: t, suggestedWishlistGamesIds: n } = e;
        (_.suggestedGamesIds = t), (_.suggestedWishlistGamesIds = n), (p = !1), (f = !1);
    },
    WIDGET_SUGGESTED_FETCH_FAILURE: function () {
        (f = !0), (p = !1);
    },
    WIDGET_SUGGESTED_FETCH_START: function () {
        (p = !0), (f = !1), (h = !0);
    },
    WIDGET_PENDING_CLEAR: function () {
        (u = null), (c = null);
    },
    WIDGET_SUGGESTED_REMOVE_GAME: function (e) {
        let { applicationId: t } = e;
        (_.suggestedGamesIds = _.suggestedGamesIds.filter((e) => e !== t)),
            (_.suggestedWishlistGamesIds = _.suggestedWishlistGamesIds.filter((e) => e !== t));
    },
});
