n.d(t, { $g: () => c, vn: () => o });
var i = n(174459),
    r = n(986496),
    a = n(929396),
    s = n(652215);
function l(e) {
    return (e?.results ?? []).slice(0, 10).map((e) => e.id);
}
class o {
    surface;
    profile;
    state = null;
    selectedQuery = null;
    constructor(e, t = r.u.DEFAULT) {
        ((this.surface = e), (this.profile = t));
    }
    onQuery = (e) => {
        let t = (0, a.C7)(e);
        if (null == t) {
            ((this.selectedQuery = null), null != this.state && (this.state.query = null));
            return;
        }
        if (t === this.selectedQuery) return;
        this.selectedQuery = null;
        let n = Date.now();
        null != this.state && n - this.state.lastActivityAt > 6e4 && this.endAt(this.state.lastActivityAt);
        let r = (this.state ??= {
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
        ((r.query = t),
            (r.lastQuery = t),
            (r.maxQueryLength = Math.max(r.maxQueryLength, t.length)),
            (r.lastActivityAt = n));
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
        let { displayed: r } = t,
            o = r?.results.findIndex((t) => t.id === e) ?? -1;
        ((this.selectedQuery = (0, a.C7)(r?.results[o]?.name)),
            i.default.track(s.HAw.GAME_SEARCH_RESULT_SELECTED, {
                search_session_id: t.id,
                surface: this.surface,
                profile: this.profile,
                query: t.query,
                query_length: t.query.length,
                results_query: r?.query ?? null,
                results_stale: r?.query !== t.query,
                game_id: e,
                result_index: o,
                num_results: r?.results.length ?? 0,
                result_game_ids: l(r),
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
                i.default.track(s.HAw.GAME_SEARCH_SESSION_ENDED, {
                    search_session_id: t.id,
                    surface: this.surface,
                    profile: this.profile,
                    query: t.lastQuery,
                    query_length: t.lastQuery.length,
                    max_query_length: t.maxQueryLength,
                    results_query: t.displayed?.query ?? null,
                    num_results: t.displayed?.results.length ?? 0,
                    result_game_ids: l(t.displayed),
                    saw_any_results: t.sawAnyResults,
                    num_result_sets: t.numResultSets,
                    num_selections: t.numSelections,
                    duration_ms: e - t.startedAt,
                }));
    }
}
let d = new Map();
function c(e) {
    let t = d.get(e);
    return (null == t && ((t = new o(e)), d.set(e, t)), t);
}
