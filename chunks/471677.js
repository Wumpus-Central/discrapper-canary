"use strict";
n.d(t, { YK: () => E, fo: () => u, J$: () => A, Mg: () => _ });
var i = n(64700),
    r = n(17928),
    a = n(636537),
    s = n(228366),
    l = n(243264),
    o = n(929396),
    d = n(652215);
async function c(e) {
    let t = (0, o.C7)(e);
    if (null != t) {
        if (l.A.shouldSuppressFetch(t))
            return void s.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: t, results: [] });
        s.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH", query: t });
        try {
            let { body: e } = await a.Bo.get({ url: d.Rsh.GAMES_AUTOCOMPLETE, query: { q: t }, rejectWithError: !1 }),
                n = (e ?? []).map((e) => ({ id: String(e.id), name: e.name, icon: e.icon }));
            s.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: t, results: n });
        } catch (e) {
            throw (s.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query: t }), e);
        }
    }
}
let u = 200,
    _ = 500,
    E = (0, r.UT)(l.A, {
        getQueryId: (e) => d.fic.GAME_AUTOCOMPLETE((0, o.C7)(e)),
        get: (e) => l.A.getResults(e) ?? null,
        load: (e) => c(e),
        getIsLoading: (e) => l.A.isFetching(e),
        retryConfig: {
            retryableErrors: function (e) {
                let t = e.status;
                return null != t && (429 === t || (t >= 500 && 503 !== t));
            },
        },
        staleAfter: 3600,
        failureStaleAfter: 60,
    });
function A(e) {
    let t = (0, o.C7)(e),
        n = (function (e) {
            let [t, n] = i.useState(e),
                r = i.useRef(t),
                a = i.useRef(0);
            return (
                i.useEffect(() => {
                    if (e === r.current) return;
                    function t() {
                        (a.current = Date.now()), (r.current = e), n(e);
                    }
                    if (null == e || null == r.current) return void t();
                    let i = setTimeout(t, Math.min(u, Math.max(0, _ - (Date.now() - a.current))));
                    return () => {
                        clearTimeout(i);
                    };
                }, [e]),
                t
            );
        })(t),
        { data: r, error: a, isLoading: s } = E(n),
        [l, d] = i.useState(null);
    return (
        null == t ? null != l && d(null) : null != r && r !== l && d(r),
        { results: null != t ? (r ?? l) : null, isLoading: s || n !== t, error: n === t ? a : null }
    );
}
