"use strict";
let r;
n.d(t, { A: () => m });
var i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(506774),
    l = n(73153),
    u = n(652215);
let d = "GameLibraryViewStore",
    c = u.tSW.ASCENDING,
    _ = u.DpB.LAST_PLAYED,
    f = !1,
    E = s().debounce(() => {
        (f = !1), p.emitChange();
    }, 200);
class h extends a.Ay.Store {
    static displayName = "GameLibraryViewStore";
    initialize() {
        let e = o.w.get(d) ?? {};
        null != e.sortDirection && null != e.sortKey && ((c = e.sortDirection), (_ = e.sortKey));
    }
    get sortDirection() {
        return c;
    }
    get sortKey() {
        return _;
    }
    get activeRowKey() {
        return r;
    }
    get isNavigatingByKeyboard() {
        return f;
    }
}
let p = new h(l.h, {
        LIBRARY_TABLE_SORT_UPDATE: function (e) {
            let { direction: t, key: n } = e;
            (c = t), (_ = n), o.w.set(d, { sortDirection: c, sortKey: _ });
        },
        LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function (e) {
            let { key: t, isKeyboardEvent: n } = e;
            n && ((f = !0), E()), (r = t);
        },
    }),
    m = p;
