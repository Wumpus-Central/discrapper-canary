r.d(t, { QL: () => n, mW: () => l });
var s = r(652215);
function l(e) {
    if ("Klipy" !== e.providerName) return;
    let { thumbnail: t } = e;
    if (null != t) return t.proxyURL ?? t.url ?? t.uri;
}
function n(e, t, r) {
    let l = null != t ? { [t]: 1 } : {},
        { offset: n, limit: i, results: o, totalResults: a } = r ?? {};
    return {
        search_type: s.I4_.GIF,
        load_id: e,
        limit: i,
        offset: n,
        page: null != i && null != n ? Math.floor(n / i) + 1 : 1,
        total_results: a,
        page_results: null != o ? o : null,
        num_modifiers: Object.keys(l).length,
        modifiers: l,
    };
}
