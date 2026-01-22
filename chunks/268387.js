let r;
n.d(t, { A: () => A });
var i,
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(506774),
    c = n(73153),
    u = n(652215);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = "GameLibraryViewStore",
    p = 200,
    _ = u.tSW.ASCENDING,
    h = u.DpB.LAST_PLAYED,
    m = !1,
    g = s().debounce(() => {
        (m = !1), O.emitChange();
    }, p);
function E(e) {
    let { key: t, isKeyboardEvent: n } = e;
    n && ((m = !0), g()), (r = t);
}
function b(e) {
    let { direction: t, key: n } = e;
    (_ = t),
        (h = n),
        l.w.set(f, {
            sortDirection: _,
            sortKey: h,
        });
}
class y extends (i = o.Ay.Store) {
    initialize() {
        var e;
        let t = null != (e = l.w.get(f)) ? e : {};
        null != t.sortDirection && null != t.sortKey && ((_ = t.sortDirection), (h = t.sortKey));
    }
    get sortDirection() {
        return _;
    }
    get sortKey() {
        return h;
    }
    get activeRowKey() {
        return r;
    }
    get isNavigatingByKeyboard() {
        return m;
    }
}
d(y, "displayName", "GameLibraryViewStore");
let O = new y(c.h, {
        LIBRARY_TABLE_SORT_UPDATE: b,
        LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: E,
    }),
    A = O;
