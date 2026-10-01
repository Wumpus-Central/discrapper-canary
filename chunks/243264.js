n.d(t, { A: () => A });
var i = n(635377),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(986496),
    o = n(929396);
function d(e, t) {
    return `${e}:${t}`;
}
let c = new (r())({ max: 100 }),
    u = new Set(),
    _ = new (r())({ max: 500 });
class E extends a.Ay.Store {
    static displayName = "GameAutocompleteStore";
    getResults(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.u.DEFAULT,
            n = (0, o.C7)(e);
        return null == n ? void 0 : c.peek(d(t, n));
    }
    getClosestResults(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.u.DEFAULT,
            n = (0, o.C7)(e);
        if (null != n)
            for (let e = n.length; e >= 1; e--) {
                let i = c.peek(d(t, n.slice(0, e)));
                if (null != i) return i;
            }
    }
    shouldSuppressFetch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.u.DEFAULT,
            n = (0, o.C7)(e);
        if (null == n) return !1;
        let i = d(t, n);
        return !(c.has(i) || u.has(i)) && (0, o.bC)(n, (e) => c.peek(d(t, e)));
    }
    isFetching(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.u.DEFAULT,
            n = (0, o.C7)(e);
        return null != n && u.has(d(t, n));
    }
    getGameById(e) {
        return _.peek(e);
    }
}
let A = new E(s.h, {
    LOGOUT: function () {
        (c.reset(), (u = new Set()), _.reset());
    },
    GAME_AUTOCOMPLETE_FETCH: function (e) {
        let { query: t, profile: n } = e;
        u.add(d(n, t));
    },
    GAME_AUTOCOMPLETE_FETCH_SUCCESS: function (e) {
        let { query: t, profile: n, results: i } = e,
            r = d(n, t);
        for (let e of (u.delete(r), c.set(r, i), i)) _.set(e.id, e);
    },
    GAME_AUTOCOMPLETE_FETCH_FAILURE: function (e) {
        let { query: t, profile: n } = e;
        u.delete(d(n, t));
    },
});
