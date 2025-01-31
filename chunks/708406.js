n.d(t, { _: () => r });
var i = n(981631);
function r(e, t, n) {
    let r = null != t ? { [t]: 1 } : {},
        { offset: a, limit: s, results: o, totalResults: l } = null != n ? n : {};
    return {
        search_type: i.aib.GIF,
        load_id: e,
        limit: s,
        offset: a,
        page: null != s && null != a ? Math.floor(a / s) + 1 : 1,
        total_results: l,
        page_results: null != o ? o : null,
        num_modifiers: Object.keys(r).length,
        modifiers: r
    };
}
