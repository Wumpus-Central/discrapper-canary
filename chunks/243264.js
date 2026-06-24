"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    s = n(929396);
let a = new Map(),
    o = new Set(),
    l = new Set();
class u extends i.Ay.Store {
    static displayName = "GameAutocompleteStore";
    getResults(e) {
        let t = (0, s.C7)(e);
        return null == t ? void 0 : a.get(t);
    }
    getClosestResults(e) {
        let t = (0, s.C7)(e);
        if (null == t) return;
        let n = a.get(t);
        if (null != n) return n;
        for (let e = t.length - 1; e >= 1; e--) {
            let n = a.get(t.slice(0, e));
            if (null != n) return n;
        }
    }
    isFetching(e) {
        let t = (0, s.C7)(e);
        return null != t && o.has(t);
    }
    didFetchFail(e) {
        let t = (0, s.C7)(e);
        return null != t && l.has(t);
    }
}
let c = new u(r.h, {
    LOGOUT: function () {
        (a = new Map()), (o = new Set()), (l = new Set());
    },
    GAME_AUTOCOMPLETE_FETCH: function (e) {
        let { query: t } = e;
        o.add(t), l.delete(t);
    },
    GAME_AUTOCOMPLETE_FETCH_SUCCESS: function (e) {
        let { query: t, results: n } = e;
        for (o.delete(t), l.delete(t), a.delete(t), a.set(t, n); a.size > 100; ) {
            let e = a.keys().next().value;
            if (null == e) break;
            a.delete(e);
        }
    },
    GAME_AUTOCOMPLETE_FETCH_FAILURE: function (e) {
        let { query: t } = e;
        o.delete(t), l.add(t);
    },
});
