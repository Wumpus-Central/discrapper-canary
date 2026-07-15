"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    a = n(929396);
let s = new Map(),
    l = new Set();
class o extends i.Ay.Store {
    static displayName = "GameAutocompleteStore";
    getResults(e) {
        let t = (0, a.C7)(e);
        return null == t ? void 0 : s.get(t);
    }
    getClosestResults(e) {
        let t = (0, a.C7)(e);
        if (null == t) return;
        let n = s.get(t);
        if (null != n) return n;
        for (let e = t.length - 1; e >= 1; e--) {
            let n = s.get(t.slice(0, e));
            if (null != n) return n;
        }
    }
    isFetching(e) {
        let t = (0, a.C7)(e);
        return null != t && l.has(t);
    }
}
let d = new o(r.h, {
    LOGOUT: function () {
        (s = new Map()), (l = new Set());
    },
    GAME_AUTOCOMPLETE_FETCH: function (e) {
        let { query: t } = e;
        l.add(t);
    },
    GAME_AUTOCOMPLETE_FETCH_SUCCESS: function (e) {
        let { query: t, results: n } = e;
        for (l.delete(t), s.delete(t), s.set(t, n); s.size > 100; ) {
            let e = s.keys().next().value;
            if (null == e) break;
            s.delete(e);
        }
    },
    GAME_AUTOCOMPLETE_FETCH_FAILURE: function (e) {
        let { query: t } = e;
        l.delete(t);
    },
});
