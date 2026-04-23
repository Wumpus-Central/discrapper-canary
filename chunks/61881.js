"use strict";
n.d(t, { A: () => g }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(287809),
    l = n(841595);
let d = null,
    _ = null,
    u = !1,
    c = { suggestedGamesIds: [], suggestedWishlistGamesIds: [] },
    E = !1,
    h = !1,
    m = !1;
class f extends s.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    getPendingWidgets() {
        return d;
    }
    getSaveablePendingWidgets() {
        return null == d ? null : d.filter((e) => !e.isDiscardable());
    }
    hasPendingChanges() {
        return null !== d && (null === _ || !r().isEqual(d, _));
    }
    getWidgetUpdates() {
        let e = this.getSaveablePendingWidgets();
        if (null == e || null == _) return { changedWidgets: e ?? [], removedWidgets: [], hasOrderChanges: !1 };
        let t = new Map(_.map((e) => [e.id, e])),
            n = new Map(e.map((e) => [e.id, e])),
            i = [],
            r = [];
        for (let [e, r] of n) {
            let n = t.get(e);
            (null != n && r.isEqual(n)) || i.push(r);
        }
        for (let [e, i] of t) n.has(e) || r.push(i);
        let s = !1;
        for (let t = 0; t < e.length; t++)
            if (e[t]?.id !== _[t]?.id) {
                s = !0;
                break;
            }
        return { changedWidgets: i, removedWidgets: r, hasOrderChanges: s };
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
        return h;
    }
    get suggestedFetchAttempted() {
        return m;
    }
    get suggestedGameIds() {
        return c;
    }
}
let g = new f(a.h, {
    WIDGET_PENDING_SET: function (e) {
        let { widgets: t } = e;
        if (((d = t), null === _)) {
            let e = o.default.getCurrentUser();
            if (null != e) {
                let t = l.A.getUserProfile(e.id);
                _ = t?.widgets ?? [];
            }
        }
    },
    WIDGET_PENDING_SAVE_START: function (e) {
        u = !0;
    },
    WIDGET_PENDING_SAVE_SUCCESS: function (e) {
        (u = !1), null !== d && ((_ = null), (d = null));
    },
    WIDGET_PENDING_SAVE_FAILURE: function (e) {
        u = !1;
    },
    WIDGET_SUGGESTED_FETCH_SUCCESS: function (e) {
        let { suggestedGamesIds: t, suggestedWishlistGamesIds: n } = e;
        (c.suggestedGamesIds = t), (c.suggestedWishlistGamesIds = n), (h = !1), (E = !1);
    },
    WIDGET_SUGGESTED_FETCH_FAILURE: function () {
        (E = !0), (h = !1);
    },
    WIDGET_SUGGESTED_FETCH_START: function () {
        (h = !0), (E = !1), (m = !0);
    },
    WIDGET_PENDING_CLEAR: function () {
        (d = null), (_ = null);
    },
    WIDGET_SUGGESTED_REMOVE_GAME: function (e) {
        let { applicationId: t } = e;
        (c.suggestedGamesIds = c.suggestedGamesIds.filter((e) => e !== t)),
            (c.suggestedWishlistGamesIds = c.suggestedWishlistGamesIds.filter((e) => e !== t));
    },
});
