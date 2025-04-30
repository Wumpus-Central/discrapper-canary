n.d(t, { _: () => i });
var r = n(981631);
function i(e, t, n) {
    let i = null != t ? { [t]: 1 } : {},
        { offset: a, limit: o, results: s, totalResults: l } = null != n ? n : {};
    return {
        search_type: r.aib.GIF,
        load_id: e,
        limit: o,
        offset: a,
        page: null != o && null != a ? Math.floor(a / o) + 1 : 1,
        total_results: l,
        page_results: null != s ? s : null,
        num_modifiers: Object.keys(i).length,
        modifiers: i
    };
}
