n.d(t, { Z: () => A }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(180335);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = new Map(),
    f = new Set(),
    p = null,
    _ = !1,
    h = !1;
function m(e) {
    let { userId: t } = e;
    f.add(t);
}
function g(e) {
    let { outbox: t, userId: n } = e;
    d.set(n, u(l({}, t), { lastFetched: Date.now() })), f.delete(n);
}
function E(e) {
    let { userId: t } = e;
    f.delete(t);
}
function v() {
    (p = null), (_ = !0);
}
function b(e) {
    let { entry: t, userId: n } = e;
    p = null;
    let r = d.get(n);
    if (null == r) return !1;
    let i = r.entries.filter((e) => e.id !== t.id);
    d.set(n, u(l({}, r), { entries: i })), (_ = !1);
}
function y(e) {
    let { error: t } = e;
    (p = t), (_ = !1);
}
function O() {
    (p = null), (_ = !1);
}
function S() {
    (d = new Map()), (f = new Set()), (p = null), (_ = !1);
}
function I() {
    S(), (h = !0);
}
function T() {
    S();
}
class N extends (r = i.ZP.Store) {
    getMatchingOutboxEntry(e) {
        let { activity: t, userId: n } = e,
            r = d.get(n);
        if (null != r && null != t) return (0, a.vu)(r.entries, t);
    }
    getUserOutbox(e) {
        return d.get(e);
    }
    isFetchingUserOutbox(e) {
        return f.has(e);
    }
    get deleteOutboxEntryError() {
        return p;
    }
    get isDeletingEntryHistory() {
        return _;
    }
    get hasInitialized() {
        return h;
    }
}
s(N, 'displayName', 'ContentInventoryOutboxStore');
let A = new N(o.Z, {
    CONNECTION_OPEN: I,
    LOGOUT: T,
    CONTENT_INVENTORY_FETCH_OUTBOX_START: m,
    CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: g,
    CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: E,
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: v,
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: b,
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: y,
    CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: O
});
