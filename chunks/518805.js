n.d(t, { J: () => _, Y: () => u });
var i = n(582128),
    r = n(855986),
    a = n(620632),
    s = n(73153),
    l = n(243264),
    o = n(929396),
    d = n(652215),
    c = n(649079);
let u = (0, r.UT)(l.A, {
    getQueryId: (e, t) => d.fic.GAME_AUTOCOMPLETE((0, o.C7)(e), t),
    get: (e, t) => l.A.getResults(e, t) ?? null,
    load: (e, t) =>
        (async function (e, t) {
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
        })(e, t),
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
function _(e, t) {
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
                    let i = setTimeout(t, Math.min(200, Math.max(0, 500 - (Date.now() - a.current))));
                    return () => {
                        clearTimeout(i);
                    };
                }, [e]),
                t
            );
        })(a),
        { data: l, error: d, isLoading: _ } = u(s, r),
        [E, A] = i.useState(null),
        f = null != l && null != s ? { query: s, results: l } : null;
    null == a ? null != E && A(null) : null != f && f.results !== E?.results && A(f);
    let h = null != a ? (f ?? E) : null,
        I = h?.query ?? null,
        p = h?.results ?? null,
        [m] = i.useState(() => new c.vn(n, r));
    return (
        i.useEffect(() => {
            m.onQuery(a);
        }, [m, a]),
        i.useEffect(() => {
            null != I && null != p && m.onResults(I, p);
        }, [m, I, p]),
        i.useEffect(() => m.end, [m]),
        { results: p, isLoading: _ || s !== a, error: s === a ? d : null, onSelect: m.select, endSession: m.end }
    );
}
