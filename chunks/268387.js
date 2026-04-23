"use strict";
let i;
n.d(t, { A: () => g });
var r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(506774),
    l = n(228366),
    d = n(652215);
let _ = "GameLibraryViewStore",
    u = d.tSW.ASCENDING,
    c = d.DpB.LAST_PLAYED,
    E = !1,
    h = s().debounce(() => {
        (E = !1), f.emitChange();
    }, 200);
class m extends a.Ay.Store {
    static displayName = "GameLibraryViewStore";
    initialize() {
        let e = o.w.get(_) ?? {};
        null != e.sortDirection && null != e.sortKey && ((u = e.sortDirection), (c = e.sortKey));
    }
    get sortDirection() {
        return u;
    }
    get sortKey() {
        return c;
    }
    get activeRowKey() {
        return i;
    }
    get isNavigatingByKeyboard() {
        return E;
    }
}
let f = new m(l.h, {
        LIBRARY_TABLE_SORT_UPDATE: function (e) {
            let { direction: t, key: n } = e;
            (u = t), (c = n), o.w.set(_, { sortDirection: u, sortKey: c });
        },
        LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function (e) {
            let { key: t, isKeyboardEvent: n } = e;
            n && ((E = !0), h()), (i = t);
        },
    }),
    g = f;
