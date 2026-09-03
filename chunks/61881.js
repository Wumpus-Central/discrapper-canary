n.d(t, { A: () => p }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(287809),
    o = n(403362),
    d = n(321191);
let c = null,
    u = null,
    _ = !1,
    E = { suggestedGamesIds: [], suggestedWishlistGamesIds: [] },
    A = !1,
    h = !1,
    I = !1;
class f extends a.Ay.Store {
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
        let t = new Map(u.map((e) => [e.id, e])),
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
            if (e[t]?.id !== u[t]?.id) {
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
        return _;
    }
    get suggestedFetchError() {
        return A;
    }
    get suggestedFetchIsLoading() {
        return h;
    }
    get suggestedFetchAttempted() {
        return I;
    }
    get suggestedGameIds() {
        return E;
    }
}
let p = new f(s.h, {
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
        (_ = !1), null !== c && ((u = null), (c = null));
    },
    WIDGET_PENDING_SAVE_FAILURE: function (e) {
        _ = !1;
    },
    WIDGET_SUGGESTED_FETCH_SUCCESS: function (e) {
        let { suggestedGamesIds: t, suggestedWishlistGamesIds: n } = e;
        (E.suggestedGamesIds = t), (E.suggestedWishlistGamesIds = n), (h = !1), (A = !1);
    },
    WIDGET_SUGGESTED_FETCH_FAILURE: function () {
        (A = !0), (h = !1);
    },
    WIDGET_SUGGESTED_FETCH_START: function () {
        (h = !0), (A = !1), (I = !0);
    },
    WIDGET_PENDING_CLEAR: function () {
        (c = null), (u = null);
    },
    WIDGET_SUGGESTED_REMOVE_GAME: function (e) {
        let { applicationId: t } = e;
        (E.suggestedGamesIds = E.suggestedGamesIds.filter((e) => e !== t)),
            (E.suggestedWishlistGamesIds = E.suggestedWishlistGamesIds.filter((e) => e !== t));
    },
});
