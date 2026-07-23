"use strict";
n.d(t, { A: () => _ });
var i = n(635377),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(929396);
let o = new (r())({ max: 100 }),
    d = new Set(),
    c = new (r())({ max: 500 });
class u extends a.Ay.Store {
    static displayName = "GameAutocompleteStore";
    getResults(e) {
        let t = (0, l.C7)(e);
        return null == t ? void 0 : o.peek(t);
    }
    getClosestResults(e) {
        let t = (0, l.C7)(e);
        if (null == t) return;
        let n = o.peek(t);
        if (null != n) return n;
        for (let e = t.length - 1; e >= 1; e--) {
            let n = o.peek(t.slice(0, e));
            if (null != n) return n;
        }
    }
    shouldSuppressFetch(e) {
        let t = (0, l.C7)(e);
        return !(null == t || o.has(t) || d.has(t)) && (0, l.bC)(t, (e) => o.peek(e));
    }
    isFetching(e) {
        let t = (0, l.C7)(e);
        return null != t && d.has(t);
    }
    getGameById(e) {
        return c.peek(e);
    }
}
let _ = new u(s.h, {
    LOGOUT: function () {
        o.reset(), (d = new Set()), c.reset();
    },
    GAME_AUTOCOMPLETE_FETCH: function (e) {
        let { query: t } = e;
        d.add(t);
    },
    GAME_AUTOCOMPLETE_FETCH_SUCCESS: function (e) {
        let { query: t, results: n } = e;
        for (let e of (d.delete(t), o.set(t, n), n)) c.set(e.id, e);
    },
    GAME_AUTOCOMPLETE_FETCH_FAILURE: function (e) {
        let { query: t } = e;
        d.delete(t);
    },
});
