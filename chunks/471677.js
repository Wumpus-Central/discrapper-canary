n.d(t, { YK: () => A, fo: () => _, J$: () => h, Mg: () => E });
var i = n(582128),
    r = n(17928),
    a = n(636537),
    s = n(73153),
    l = n(243264),
    o = n(929396),
    d = n(652215);
async function c(e, t) {
    let n = (0, o.C7)(e);
    if (null != n) {
        if (l.A.shouldSuppressFetch(n, t))
            return void s.h.dispatch({
                type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS",
                query: n,
                filterGroup: t,
                results: [],
            });
        s.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH", query: n, filterGroup: t });
        try {
            let { body: e } = await a.Bo.get({
                    url: d.Rsh.GAMES_AUTOCOMPLETE,
                    query: { q: n, filter_group: t },
                    rejectWithError: !1,
                }),
                i = (e ?? []).map((e) => ({
                    id: String(e.id),
                    name: e.name,
                    icon: e.icon,
                    platformAvailability: e.platform_availability,
                }));
            s.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: n, filterGroup: t, results: i });
        } catch (e) {
            throw (s.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query: n, filterGroup: t }), e);
        }
    }
}
var u = n(649079);
let _ = 200,
    E = 500,
    A = (0, r.UT)(l.A, {
        getQueryId: (e, t) => d.fic.GAME_AUTOCOMPLETE((0, o.C7)(e), t),
        get: (e, t) => l.A.getResults(e, t) ?? null,
        load: (e, t) => c(e, t),
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
function h(e, t) {
    let { surface: n, filterGroup: r } = t,
        a = (0, o.C7)(e),
        s = (function (e) {
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
        })(a),
        { data: l, error: d, isLoading: c } = A(s, r),
        [h, f] = i.useState(null),
        I = null != l && null != s ? { query: s, results: l } : null;
    null == a ? null != h && f(null) : null != I && I.results !== h?.results && f(I);
    let p = null != a ? (I ?? h) : null,
        T = p?.query ?? null,
        m = p?.results ?? null,
        [g] = i.useState(() => new u.vn(n, r));
    return (
        i.useEffect(() => {
            g.onQuery(a);
        }, [g, a]),
        i.useEffect(() => {
            null != T && null != m && g.onResults(T, m);
        }, [g, T, m]),
        i.useEffect(() => g.end, [g]),
        { results: m, isLoading: c || s !== a, error: s === a ? d : null, onSelect: g.select, endSession: g.end }
    );
}
