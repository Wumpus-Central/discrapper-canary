n.d(t, { YK: () => A, fo: () => _, J$: () => h, Mg: () => E });
var i = n(582128),
    r = n(17928),
    a = n(636537),
    s = n(73153),
    l = n(243264),
    o = n(986496),
    d = n(929396),
    c = n(652215);
async function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.u.DEFAULT,
        n = (0, d.C7)(e);
    if (null != n) {
        if (l.A.shouldSuppressFetch(n, t))
            return void s.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: n, profile: t, results: [] });
        s.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH", query: n, profile: t });
        try {
            let { body: e } = await a.Bo.get({ url: c.Rsh.GAMES_AUTOCOMPLETE, query: { q: n }, rejectWithError: !1 }),
                i = (e ?? []).map((e) => ({
                    id: String(e.id),
                    name: e.name,
                    icon: e.icon,
                    platformAvailability: e.platform_availability,
                }));
            s.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: n, profile: t, results: i });
        } catch (e) {
            throw (s.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query: n, profile: t }), e);
        }
    }
}
let _ = 200,
    E = 500,
    A = (0, r.UT)(l.A, {
        getQueryId: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.u.DEFAULT;
            return c.fic.GAME_AUTOCOMPLETE((0, d.C7)(e), t);
        },
        get: (e, t) => l.A.getResults(e, t) ?? null,
        load: (e, t) => u(e, t),
        getIsLoading: (e, t) => l.A.isFetching(e, t),
        retryConfig: {
            retryableErrors: function (e) {
                let t = e.status;
                return null != t && (429 === t || (t >= 500 && 503 !== t));
            },
        },
        staleAfter: 3600,
        failureStaleAfter: 60,
    });
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.u.DEFAULT,
        n = (0, d.C7)(e),
        r = (function (e) {
            let [t, n] = i.useState(e),
                r = i.useRef(t),
                a = i.useRef(0);
            return (
                i.useEffect(() => {
                    if (e === r.current) return;
                    function t() {
                        ((a.current = Date.now()), (r.current = e), n(e));
                    }
                    if (null == e || null == r.current) return void t();
                    let i = setTimeout(t, Math.min(_, Math.max(0, E - (Date.now() - a.current))));
                    return () => {
                        clearTimeout(i);
                    };
                }, [e]),
                t
            );
        })(n),
        { data: a, error: s, isLoading: l } = A(r, t),
        [c, u] = i.useState(null);
    return (
        null == n ? null != c && u(null) : null != a && a !== c && u(a),
        { results: null != n ? (a ?? c) : null, isLoading: l || r !== n, error: r === n ? s : null }
    );
}
