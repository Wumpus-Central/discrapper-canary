"use strict";
n.d(t, { YK: () => h, fo: () => d, J$: () => f, Mg: () => _ });
var i = n(64700),
    r = n(17928),
    s = n(636537),
    a = n(228366),
    o = n(929396),
    l = n(652215);
async function u(e) {
    let t = (0, o.C7)(e);
    if (null != t) {
        a.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH", query: t });
        try {
            let { body: e } = await s.Bo.get({ url: l.Rsh.GAMES_AUTOCOMPLETE, query: { q: t }, rejectWithError: !1 }),
                n = (e ?? []).map((e) => ({ id: String(e.id), name: e.name, icon_hash: e.icon_hash }));
            a.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: t, results: n });
        } catch (e) {
            throw (a.h.dispatch({ type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query: t }), e);
        }
    }
}
var c = n(243264);
let d = 200,
    _ = 500,
    h = (0, r.UT)(c.A, {
        getQueryId: (e) => l.fic.GAME_AUTOCOMPLETE((0, o.C7)(e)),
        get: (e) => c.A.getResults(e) ?? null,
        load: (e) => u(e),
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
    let t = (0, o.C7)(e),
        n = (function (e) {
            let [t, n] = i.useState(e),
                r = i.useRef(t),
                s = i.useRef(0);
            return (
                i.useEffect(() => {
                    if (e === r.current) return;
                    function t() {
                        (s.current = Date.now()), (r.current = e), n(e);
                    }
                    if (null == e || null == r.current) return void t();
                    let i = setTimeout(t, Math.min(d, Math.max(0, _ - (Date.now() - s.current))));
                    return () => {
                        clearTimeout(i);
                    };
                }, [e]),
                t
            );
        })(t),
        { data: r, error: s, isLoading: a } = h(n),
        [l, u] = i.useState(null);
    return (
        null == t ? null != l && u(null) : null != r && r !== l && u(r),
        { results: null != t ? (r ?? l) : null, isLoading: a || n !== t, error: n === t ? s : null }
    );
}
