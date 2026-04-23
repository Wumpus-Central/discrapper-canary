"use strict";
let r;
n.d(t, { A: () => m });
var i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(506774),
    l = n(73153),
    u = n(652215);
let c = "GameLibraryViewStore",
    d = u.tSW.ASCENDING,
    _ = u.DpB.LAST_PLAYED,
    f = !1,
    p = s().debounce(() => {
        (f = !1), E.emitChange();
    }, 200);
class h extends a.Ay.Store {
    static displayName = "GameLibraryViewStore";
    initialize() {
        let e = o.w.get(c) ?? {};
        null != e.sortDirection && null != e.sortKey && ((d = e.sortDirection), (_ = e.sortKey));
    }
    get sortDirection() {
        return d;
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
let E = new h(l.h, {
        LIBRARY_TABLE_SORT_UPDATE: function (e) {
            let { direction: t, key: n } = e;
            (d = t), (_ = n), o.w.set(c, { sortDirection: d, sortKey: _ });
        },
        LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function (e) {
            let { key: t, isKeyboardEvent: n } = e;
            n && ((f = !0), p()), (r = t);
        },
    }),
    m = E;
