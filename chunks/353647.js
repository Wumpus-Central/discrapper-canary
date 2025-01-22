var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(180335);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = new Map(),
    d = new Set(),
    f = null,
    p = !1,
    h = !1;
function _(e) {
    let { userId: n } = e;
    d.add(n);
}
function m(e) {
    let { outbox: n, userId: r } = e;
    c.set(r, {
        ...n,
        lastFetched: Date.now()
    }),
        d.delete(r);
}
function g(e) {
    let { userId: n } = e;
    d.delete(n);
}
function E() {
    (f = null), (p = !0);
}
function v(e) {
    let { entry: n, userId: r } = e;
    f = null;
    let i = c.get(r);
    if (null == i) return !1;
    let a = i.entries.filter((e) => e.id !== n.id);
    c.set(r, {
        ...i,
        entries: a
    }),
        (p = !1);
}
function y(e) {
    let { error: n } = e;
    (f = n), (p = !1);
}
function b() {
    (f = null), (p = !1);
}
function I() {
    (c = new Map()), (d = new Set()), (f = null), (p = !1);
}
function T() {
    I(), (h = !0);
}
function S() {
    I();
}
class A extends (i = o.ZP.Store) {
    getMatchingOutboxEntry(e) {
        let { activity: n, userId: r } = e,
            i = c.get(r);
        if (null != i && null != n) return (0, l.vu)(i.entries, n);
    }
    getUserOutbox(e) {
        return c.get(e);
    }
    isFetchingUserOutbox(e) {
        return d.has(e);
    }
    get deleteOutboxEntryError() {
        return f;
    }
    get isDeletingEntryHistory() {
        return p;
    }
    get hasInitialized() {
        return h;
    }
}
u(A, 'displayName', 'ContentInventoryOutboxStore'),
    (n.Z = new A(s.Z, {
        CONNECTION_OPEN: T,
        LOGOUT: S,
        CONTENT_INVENTORY_FETCH_OUTBOX_START: _,
        CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: m,
        CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: g,
        CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: E,
        CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: v,
        CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: y,
        CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: b
    }));
