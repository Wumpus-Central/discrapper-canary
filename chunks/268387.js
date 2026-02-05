"use strict";
let r;
n.d(t, { A: () => I });
var i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(506774),
    l = n(73153),
    u = n(652215);
let c = "GameLibraryViewStore",
    d = 200,
    _ = u.tSW.ASCENDING,
    f = u.DpB.LAST_PLAYED,
    p = !1,
    h = a().debounce(() => {
        (p = !1), A.emitChange();
    }, d);
function m(e) {
    let { key: t, isKeyboardEvent: n } = e;
    n && ((p = !0), h()), (r = t);
}
function g(e) {
    let { direction: t, key: n } = e;
    (_ = t), (f = n), o.w.set(c, { sortDirection: _, sortKey: f });
}
class E extends s.Ay.Store {
    static displayName = "GameLibraryViewStore";
    initialize() {
        let e = o.w.get(c) ?? {};
        null != e.sortDirection && null != e.sortKey && ((_ = e.sortDirection), (f = e.sortKey));
    }
    get sortDirection() {
        return _;
    }
    get sortKey() {
        return f;
    }
    get activeRowKey() {
        return r;
    }
    get isNavigatingByKeyboard() {
        return p;
    }
}
let A = new E(l.h, { LIBRARY_TABLE_SORT_UPDATE: g, LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: m }),
    I = A;
