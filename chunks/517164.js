"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(73153),
    s = n(83971);
let a = new Map(),
    o = new Set(),
    l = null,
    u = !1,
    c = !1;
function d() {
    (a = new Map()), (o = new Set()), (l = null), (u = !1);
}
class _ extends r.Ay.Store {
    static displayName = "ContentInventoryOutboxStore";
    getMatchingOutboxEntry(e) {
        let { activity: t, userId: n } = e,
            r = a.get(n);
        if (null != r && null != t) return (0, s.nU)(r.entries, t);
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
        return u;
    }
    get hasInitialized() {
        return c;
    }
}
let f = new _(i.h, {
    CONNECTION_OPEN: function () {
        d(), (c = !0);
    },
    LOGOUT: function () {
        d();
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
        (l = null), (u = !0);
    },
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: function (e) {
        let { entry: t, userId: n } = e;
        l = null;
        let r = a.get(n);
        if (null == r) return !1;
        let i = r.entries.filter((e) => e.id !== t.id);
        a.set(n, { ...r, entries: i }), (u = !1);
    },
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: function (e) {
        let { error: t } = e;
        (l = t), (u = !1);
    },
    CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: function () {
        (l = null), (u = !1);
    },
});
