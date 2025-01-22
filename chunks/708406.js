r.d(n, {
    _: function () {
        return a;
    }
});
var i = r(981631);
function a(e, n, r) {
    let a = null != n ? { [n]: 1 } : {},
        { offset: o, limit: s, results: l, totalResults: u } = null != r ? r : {};
    return {
        search_type: i.aib.GIF,
        load_id: e,
        limit: s,
        offset: o,
        page: null != s && null != o ? Math.floor(o / s) + 1 : 1,
        total_results: u,
        page_results: null != l ? l : null,
        num_modifiers: Object.keys(a).length,
        modifiers: a
    };
}
