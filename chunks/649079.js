n.d(t, { $g: () => d, vn: () => l });
var i = n(174459),
    r = n(929396),
    a = n(652215);
function s(e) {
    return (e?.results ?? []).slice(0, 10).map((e) => e.id);
}
class l {
    surface;
    filterGroup;
    state = null;
    selectedQuery = null;
    constructor(e, t) {
        ((this.surface = e), (this.filterGroup = t));
    }
    onQuery = (e) => {
        let t = (0, r.C7)(e);
        if (null == t) {
            ((this.selectedQuery = null), null != this.state && (this.state.query = null));
            return;
        }
        if (t === this.selectedQuery) return;
        this.selectedQuery = null;
        let n = Date.now();
        null != this.state && n - this.state.lastActivityAt > 6e4 && this.endAt(this.state.lastActivityAt);
        let a = (this.state ??= {
            id: (0, i.getNewAnalyticsLoadId)(),
            startedAt: n,
            lastActivityAt: n,
            query: null,
            lastQuery: t,
            maxQueryLength: 0,
            displayed: null,
            sawAnyResults: !1,
            numResultSets: 0,
            numSelections: 0,
        });
        ((a.query = t),
            (a.lastQuery = t),
            (a.maxQueryLength = Math.max(a.maxQueryLength, t.length)),
            (a.lastActivityAt = n));
    };
    onResults = (e, t) => {
        var n;
        let i = this.state;
        null != i &&
            null != i.query &&
            e !== this.selectedQuery &&
            !(
                null != i.displayed &&
                ((n = i.displayed),
                n.query === e && n.results.length === t.length && n.results.every((e, n) => e.id === t[n].id))
            ) &&
            ((i.displayed = { query: e, results: t }), i.numResultSets++, t.length > 0 && (i.sawAnyResults = !0));
    };
    select = (e) => {
        let t = this.state;
        if (null == t || null == t.query) return;
        let n = Date.now();
        (t.numSelections++, (t.lastActivityAt = n));
        let { displayed: l } = t,
            o = l?.results.findIndex((t) => t.id === e) ?? -1;
        ((this.selectedQuery = (0, r.C7)(l?.results[o]?.name)),
            i.default.track(a.HAw.GAME_SEARCH_RESULT_SELECTED, {
                search_session_id: t.id,
                surface: this.surface,
                filter_group: this.filterGroup,
                query: t.query,
                query_length: t.query.length,
                results_query: l?.query ?? null,
                results_stale: l?.query !== t.query,
                game_id: e,
                result_index: o,
                num_results: l?.results.length ?? 0,
                result_game_ids: s(l),
                num_result_sets: t.numResultSets,
                selection_number: t.numSelections,
                ms_since_session_start: n - t.startedAt,
            }));
    };
    end = () => {
        this.endAt(Date.now());
    };
    endAt(e) {
        let t = this.state;
        ((this.state = null),
            (this.selectedQuery = null),
            null != t &&
                i.default.track(a.HAw.GAME_SEARCH_SESSION_ENDED, {
                    search_session_id: t.id,
                    surface: this.surface,
                    filter_group: this.filterGroup,
                    query: t.lastQuery,
                    query_length: t.lastQuery.length,
                    max_query_length: t.maxQueryLength,
                    results_query: t.displayed?.query ?? null,
                    num_results: t.displayed?.results.length ?? 0,
                    result_game_ids: s(t.displayed),
                    saw_any_results: t.sawAnyResults,
                    num_result_sets: t.numResultSets,
                    num_selections: t.numSelections,
                    duration_ms: e - t.startedAt,
                }));
    }
}
let o = new Map();
function d(e, t) {
    let n = o.get(e);
    return (null == n && ((n = new l(e, t)), o.set(e, n)), n);
}
