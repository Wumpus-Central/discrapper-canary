"use strict";
n.d(t, { A: () => y });
var r = n(311907),
    i = n(73153),
    a = n(83971);
let s = new Map(),
    o = new Set(),
    l = null,
    u = !1,
    c = !1;
function d(e) {
    let { userId: t } = e;
    o.add(t);
}
function _(e) {
    let { outbox: t, userId: n } = e;
    s.set(n, { ...t, lastFetched: Date.now() }), o.delete(n);
}
function f(e) {
    let { userId: t } = e;
    o.delete(t);
}
function p() {
    (l = null), (u = !0);
}
function h(e) {
    let { entry: t, userId: n } = e;
    l = null;
    let r = s.get(n);
    if (null == r) return !1;
    let i = r.entries.filter((e) => e.id !== t.id);
    s.set(n, { ...r, entries: i }), (u = !1);
}
function m(e) {
    let { error: t } = e;
    (l = t), (u = !1);
}
function g() {
    (l = null), (u = !1);
}
function E() {
    (s = new Map()), (o = new Set()), (l = null), (u = !1);
}
function A() {
    E(), (c = !0);
}
function I() {
    E();
}
class T extends r.Ay.Store {
    static displayName = "ContentInventoryOutboxStore";
    getMatchingOutboxEntry(e) {
        let { activity: t, userId: n } = e,
            r = s.get(n);
        if (null != r && null != t) return (0, a.nU)(r.entries, t);
    }
    getUserOutbox(e) {
        return s.get(e);
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
let y = new T(i.h, {
    CONNECTION_OPEN: A,
    LOGOUT: I,
    CONTENT_INVENTORY_FETCH_OUTBOX_START: d,
    CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: _,
    CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: f,
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: p,
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: h,
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: m,
    CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: g,
});
