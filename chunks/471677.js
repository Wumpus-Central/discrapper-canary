n.d(t, { YK: () => h, fo: () => d, J$: () => f, Mg: () => E });
var l = n(64700),
    r = n(17928),
    u = n(636537),
    i = n(228366),
    a = n(929396),
    s = n(652215);
async function o(e) {
    let t = (0, a.C7)(e);
    if (null != t) {
        i.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH", query: t });
        try {
            let { body: e } = await u.Bo.get({ url: s.Rsh.GAMES_AUTOCOMPLETE, query: { q: t }, rejectWithError: !1 }),
                n = (e ?? []).map((e) => ({ id: String(e.id), name: e.name, icon_hash: e.icon_hash }));
            i.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: t, results: n });
        } catch (e) {
            throw (i.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query: t }), e);
        }
    }
}
var c = n(243264);
let d = 200,
    E = 500,
    h = (0, r.UT)(c.A, {
        getQueryId: (e) => s.fic.GAME_AUTOCOMPLETE((0, a.C7)(e)),
        get: (e) => c.A.getResults(e) ?? null,
        load: (e) => o(e),
        getIsLoading: (e) => c.A.isFetching(e),
        retryConfig: {
            retryableErrors: function (e) {
                let t = e.status;
                return null != t && (429 === t || (t >= 500 && 503 !== t));
            },
        },
        staleAfter: 3600,
        failureStaleAfter: 60,
    });
function f(e) {
    let t = (0, a.C7)(e),
        n = (function (e) {
            let [t, n] = l.useState(e),
                r = l.useRef(t),
                u = l.useRef(0);
            return (
                l.useEffect(() => {
                    if (e === r.current) return;
                    let t = () => {
                        (u.current = Date.now()), (r.current = e), n(e);
                    };
                    if (null == e || null == r.current) return void t();
                    let l = setTimeout(t, Math.min(d, Math.max(0, E - (Date.now() - u.current))));
                    return () => {
                        clearTimeout(l);
                    };
                }, [e]),
                t
            );
        })(t),
        { data: r, error: u, isLoading: i } = h(n),
        [s, o] = l.useState(null);
    return (
        null == t ? null != s && o(null) : null != r && r !== s && o(r),
        { results: null != t ? (r ?? s) : null, isLoading: i || n !== t, error: n === t ? u : null }
    );
}
