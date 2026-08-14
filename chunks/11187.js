r.d(t, { QL: () => i, mW: () => l });
var s = r(336807),
    n = r(652215);
function l(e) {
    if (e.providerName !== s.v7) return;
    let { thumbnail: t } = e;
    if (null != t) return t.proxyURL ?? t.url ?? t.uri;
}
function i(e, t, r) {
    let s = null != t ? { [t]: 1 } : {},
        { offset: l, limit: i, results: a, totalResults: o } = r ?? {};
    return {
        search_type: n.I4_.GIF,
        load_id: e,
        limit: i,
        offset: l,
        page: null != i && null != l ? Math.floor(l / i) + 1 : 1,
        total_results: o,
        page_results: null != a ? a : null,
        num_modifiers: Object.keys(s).length,
        modifiers: s,
    };
}
