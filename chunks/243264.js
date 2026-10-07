n.d(t, { A: () => E });
var i = n(635377),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(929396);
function o(e, t) {
    return `${e}:${t}`;
}
let d = new (r())({ max: 100 }),
    c = new Set(),
    u = new (r())({ max: 500 });
class _ extends a.Ay.Store {
    static displayName = "GameAutocompleteStore";
    getResults(e, t) {
        let n = (0, l.C7)(e);
        return null == n ? void 0 : d.peek(o(t, n));
    }
    getClosestResults(e, t) {
        let n = (0, l.C7)(e);
        if (null != n)
            for (let e = n.length; e >= 1; e--) {
                let i = n.slice(0, e),
                    r = d.peek(o(t, i));
                if (null != r) return { query: i, results: r };
            }
    }
    shouldSuppressFetch(e, t) {
        let n = (0, l.C7)(e);
        if (null == n) return !1;
        let i = o(t, n);
        return !(d.has(i) || c.has(i)) && (0, l.bC)(n, (e) => d.peek(o(t, e)));
    }
    isFetching(e, t) {
        let n = (0, l.C7)(e);
        return null != n && c.has(o(t, n));
    }
    getGameById(e) {
        return u.peek(e);
    }
}
let E = new _(s.h, {
    LOGOUT: function () {
        (d.reset(), (c = new Set()), u.reset());
    },
    GAME_AUTOCOMPLETE_FETCH: function (e) {
        let { query: t, filterGroup: n } = e;
        c.add(o(n, t));
    },
    GAME_AUTOCOMPLETE_FETCH_SUCCESS: function (e) {
        let { query: t, filterGroup: n, results: i } = e,
            r = o(n, t);
        for (let e of (c.delete(r), d.set(r, i), i)) u.set(e.id, e);
    },
    GAME_AUTOCOMPLETE_FETCH_FAILURE: function (e) {
        let { query: t, filterGroup: n } = e;
        c.delete(o(n, t));
    },
});
