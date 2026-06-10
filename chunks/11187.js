r.d(t, { QL: () => l, mW: () => n });
var s = r(652215);
function n(e) {
    if ("Klipy" !== e.providerName) return;
    let { thumbnail: t } = e;
    if (null != t) return t.proxyURL ?? t.url ?? t.uri;
}
function l(e, t, r) {
    let n = null != t ? { [t]: 1 } : {},
        { offset: l, limit: i, results: a, totalResults: o } = r ?? {};
    return {
        search_type: s.I4_.GIF,
        load_id: e,
        limit: i,
        offset: l,
        page: null != i && null != l ? Math.floor(l / i) + 1 : 1,
        total_results: o,
        page_results: null != a ? a : null,
        num_modifiers: Object.keys(n).length,
        modifiers: n,
    };
}
