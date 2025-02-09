n.d(t, { Z: () => S }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(180335);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = new Map(),
    u = new Set(),
    c = null,
    d = !1,
    f = !1;
function _(e) {
    let { userId: t } = e;
    u.add(t);
}
function p(e) {
    let { outbox: t, userId: n } = e;
    l.set(n, {
        ...t,
        lastFetched: Date.now()
    }),
        u.delete(n);
}
function h(e) {
    let { userId: t } = e;
    u.delete(t);
}
function m() {
    (c = null), (d = !0);
}
function g(e) {
    let { entry: t, userId: n } = e;
    c = null;
    let i = l.get(n);
    if (null == i) return !1;
    let r = i.entries.filter((e) => e.id !== t.id);
    l.set(n, {
        ...i,
        entries: r
    }),
        (d = !1);
}
function E(e) {
    let { error: t } = e;
    (c = t), (d = !1);
}
function v() {
    (c = null), (d = !1);
}
function y() {
    (l = new Map()), (u = new Set()), (c = null), (d = !1);
}
function I() {
    y(), (f = !0);
}
function T() {
    y();
}
class b extends (i = r.ZP.Store) {
    getMatchingOutboxEntry(e) {
        let { activity: t, userId: n } = e,
            i = l.get(n);
        if (null != i && null != t) return (0, s.vu)(i.entries, t);
    }
    getUserOutbox(e) {
        return l.get(e);
    }
    isFetchingUserOutbox(e) {
        return u.has(e);
    }
    get deleteOutboxEntryError() {
        return c;
    }
    get isDeletingEntryHistory() {
        return d;
    }
    get hasInitialized() {
        return f;
    }
}
o(b, 'displayName', 'ContentInventoryOutboxStore');
let S = new b(a.Z, {
    CONNECTION_OPEN: I,
    LOGOUT: T,
    CONTENT_INVENTORY_FETCH_OUTBOX_START: _,
    CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: p,
    CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: h,
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: m,
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: g,
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: E,
    CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: v
});
