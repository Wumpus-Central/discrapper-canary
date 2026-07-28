"use strict";
n.d(t, { A: () => f }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(287809),
    o = n(321191);
let d = null,
    c = null,
    u = !1,
    _ = { suggestedGamesIds: [], suggestedWishlistGamesIds: [] },
    E = !1,
    A = !1,
    h = !1;
class I extends a.Ay.Store {
    initialize() {
        this.waitFor(l.default);
    }
    getPendingWidgets() {
        return d;
    }
    getSaveablePendingWidgets() {
        return null == d ? null : d.filter((e) => !e.isDiscardable());
    }
    hasPendingChanges() {
        return null !== d && (null === c || !r().isEqual(d, c));
    }
    getWidgetUpdates() {
        let e = this.getSaveablePendingWidgets();
        if (null == e || null == c) return { changedWidgets: e ?? [], removedWidgets: [], hasOrderChanges: !1 };
        let t = new Map(c.map((e) => [e.id, e])),
            n = new Map(e.map((e) => [e.id, e])),
            i = [],
            r = [];
        for (let [e, r] of n) {
            let n = t.get(e);
            (null != n && r.isEqual(n)) || i.push(r);
        }
        for (let [e, i] of t) n.has(e) || r.push(i);
        let a = !1;
        for (let t = 0; t < e.length; t++)
            if (e[t]?.id !== c[t]?.id) {
                a = !0;
                break;
            }
        return { changedWidgets: i, removedWidgets: r, hasOrderChanges: a };
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
        return u;
    }
    get suggestedFetchError() {
        return E;
    }
    get suggestedFetchIsLoading() {
        return A;
    }
    get suggestedFetchAttempted() {
        return h;
    }
    get suggestedGameIds() {
        return _;
    }
}
let f = new I(s.h, {
    WIDGET_PENDING_SET: function (e) {
        let { widgets: t } = e;
        if (((d = t), null === c)) {
            let e = l.default.getCurrentUser();
            if (null != e) {
                let t = o.A.getUserProfile(e.id);
                c = t?.widgets ?? [];
            }
        }
    },
    WIDGET_PENDING_SAVE_START: function (e) {
        u = !0;
    },
    WIDGET_PENDING_SAVE_SUCCESS: function (e) {
        (u = !1), null !== d && ((c = null), (d = null));
    },
    WIDGET_PENDING_SAVE_FAILURE: function (e) {
        u = !1;
    },
    WIDGET_SUGGESTED_FETCH_SUCCESS: function (e) {
        let { suggestedGamesIds: t, suggestedWishlistGamesIds: n } = e;
        (_.suggestedGamesIds = t), (_.suggestedWishlistGamesIds = n), (A = !1), (E = !1);
    },
    WIDGET_SUGGESTED_FETCH_FAILURE: function () {
        (E = !0), (A = !1);
    },
    WIDGET_SUGGESTED_FETCH_START: function () {
        (A = !0), (E = !1), (h = !0);
    },
    WIDGET_PENDING_CLEAR: function () {
        (d = null), (c = null);
    },
    WIDGET_SUGGESTED_REMOVE_GAME: function (e) {
        let { applicationId: t } = e;
        (_.suggestedGamesIds = _.suggestedGamesIds.filter((e) => e !== t)),
            (_.suggestedWishlistGamesIds = _.suggestedWishlistGamesIds.filter((e) => e !== t));
    },
});
