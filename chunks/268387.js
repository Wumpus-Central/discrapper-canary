let i;
n.d(t, { A: () => f });
var r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(506774),
    o = n(228366),
    d = n(652215);
let c = "GameLibraryViewStore",
    u = d.tSW.ASCENDING,
    _ = d.DpB.LAST_PLAYED,
    E = !1,
    A = a().debounce(() => {
        (E = !1), I.emitChange();
    }, 200);
class h extends s.Ay.Store {
    static displayName = "GameLibraryViewStore";
    initialize() {
        let e = l.w.get(c) ?? {};
        null != e.sortDirection && null != e.sortKey && ((u = e.sortDirection), (_ = e.sortKey));
    }
    get sortDirection() {
        return u;
    }
    get sortKey() {
        return _;
    }
    get activeRowKey() {
        return i;
    }
    get isNavigatingByKeyboard() {
        return E;
    }
}
let I = new h(o.h, {
        LIBRARY_TABLE_SORT_UPDATE: function (e) {
            let { direction: t, key: n } = e;
            (u = t), (_ = n), l.w.set(c, { sortDirection: u, sortKey: _ });
        },
        LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function (e) {
            let { key: t, isKeyboardEvent: n } = e;
            n && ((E = !0), A()), (i = t);
        },
    }),
    f = I;
