n.d(t, { A: () => c });
var l = n(17928),
    r = n(228366),
    u = n(929396);
let i = new Map(),
    a = new Set(),
    s = new Set();
class o extends l.Ay.Store {
    static displayName = "GameAutocompleteStore";
    getResults(e) {
        let t = (0, u.C7)(e);
        return null == t ? void 0 : i.get(t);
    }
    getClosestResults(e) {
        let t = (0, u.C7)(e);
        if (null == t) return;
        let n = i.get(t);
        if (null != n) return n;
        for (let e = t.length - 1; e >= 1; e--) {
            let n = i.get(t.slice(0, e));
            if (null != n) return n;
        }
    }
    isFetching(e) {
        let t = (0, u.C7)(e);
        return null != t && a.has(t);
    }
    didFetchFail(e) {
        let t = (0, u.C7)(e);
        return null != t && s.has(t);
    }
}
let c = new o(r.h, {
    LOGOUT: function () {
        (i = new Map()), (a = new Set()), (s = new Set());
    },
    GAME_AUTOCOMPLETE_FETCH: function (e) {
        let { query: t } = e;
        a.add(t), s.delete(t);
    },
    GAME_AUTOCOMPLETE_FETCH_SUCCESS: function (e) {
        let { query: t, results: n } = e;
        for (a.delete(t), s.delete(t), i.delete(t), i.set(t, n); i.size > 100; ) {
            let e = i.keys().next().value;
            if (null == e) break;
            i.delete(e);
        }
    },
    GAME_AUTOCOMPLETE_FETCH_FAILURE: function (e) {
        let { query: t } = e;
        a.delete(t), s.add(t);
    },
});
