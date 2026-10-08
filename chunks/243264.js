n.d(t, { A: () => h });
var i = n(635377),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(927813),
    o = n(929396);
let d = l.A.Millis.HOUR;
function c(e, t) {
    return `${e}:${t}`;
}
let u = new (r())({ max: 100, maxAge: d }),
    _ = new Set(),
    E = new (r())({ max: 500, maxAge: d });
class A extends a.Ay.Store {
    static displayName = "GameAutocompleteStore";
    getResults(e, t) {
        let n = (0, o.C7)(e);
        return null == n ? void 0 : u.peek(c(t, n));
    }
    getClosestResults(e, t) {
        let n = (0, o.C7)(e);
        if (null != n)
            for (let e = n.length; e >= 1; e--) {
                let i = n.slice(0, e),
                    r = u.peek(c(t, i));
                if (null != r) return { query: i, results: r };
            }
    }
    shouldSuppressFetch(e, t) {
        let n = (0, o.C7)(e);
        if (null == n) return !1;
        let i = c(t, n);
        return !(u.has(i) || _.has(i)) && (0, o.bC)(n, (e) => u.peek(c(t, e)));
    }
    isFetching(e, t) {
        let n = (0, o.C7)(e);
        return null != n && _.has(c(t, n));
    }
    getGameById(e) {
        return E.peek(e);
    }
}
let h = new A(s.h, {
    LOGOUT: function () {
        (u.reset(), (_ = new Set()), E.reset());
    },
    GAME_AUTOCOMPLETE_FETCH: function (e) {
        let { query: t, filterGroup: n } = e;
        _.add(c(n, t));
    },
    GAME_AUTOCOMPLETE_FETCH_SUCCESS: function (e) {
        let { query: t, filterGroup: n, results: i } = e,
            r = c(n, t);
        for (let e of (_.delete(r), u.set(r, i), i)) E.set(e.id, e);
    },
    GAME_AUTOCOMPLETE_FETCH_FAILURE: function (e) {
        let { query: t, filterGroup: n } = e;
        _.delete(c(n, t));
    },
});
