"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    s = n(83971);
let a = new Map(),
    o = new Set(),
    l = null,
    d = !1,
    _ = !1;
function u() {
    (a = new Map()), (o = new Set()), (l = null), (d = !1);
}
class c extends i.Ay.Store {
    static displayName = "ContentInventoryOutboxStore";
    getMatchingOutboxEntry(e) {
        let { activity: t, userId: n } = e,
            i = a.get(n);
        if (null != i && null != t) return (0, s.nU)(i.entries, t);
    }
    getUserOutbox(e) {
        return a.get(e);
    }
    isFetchingUserOutbox(e) {
        return o.has(e);
    }
    get deleteOutboxEntryError() {
        return l;
    }
    get isDeletingEntryHistory() {
        return d;
    }
    get hasInitialized() {
        return _;
    }
}
let E = new c(r.h, {
    CONNECTION_OPEN: function () {
        u(), (_ = !0);
    },
    LOGOUT: function () {
        u();
    },
    CONTENT_INVENTORY_FETCH_OUTBOX_START: function (e) {
        let { userId: t } = e;
        o.add(t);
    },
    CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: function (e) {
        let { outbox: t, userId: n } = e;
        a.set(n, { ...t, lastFetched: Date.now() }), o.delete(n);
    },
    CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: function (e) {
        let { userId: t } = e;
        o.delete(t);
    },
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: function () {
        (l = null), (d = !0);
    },
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: function (e) {
        let { entry: t, userId: n } = e;
        l = null;
        let i = a.get(n);
        if (null == i) return !1;
        let r = i.entries.filter((e) => e.id !== t.id);
        a.set(n, { ...i, entries: r }), (d = !1);
    },
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: function (e) {
        let { error: t } = e;
        (l = t), (d = !1);
    },
    CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: function () {
        (l = null), (d = !1);
    },
});
