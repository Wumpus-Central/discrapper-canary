r.d(t, { QL: () => o, mW: () => l });
var n = r(336807),
    i = r(652215);
function l(e) {
    if (e.providerName !== n.v7) return;
    let { thumbnail: t } = e;
    if (null != t) return t.proxyURL ?? t.url ?? t.uri;
}
function o(e, t, r) {
    let n = null != t ? { [t]: 1 } : {},
        { offset: l, limit: o, results: a, totalResults: s } = r ?? {};
    return {
        search_type: i.I4_.GIF,
        load_id: e,
        limit: o,
        offset: l,
        page: null != o && null != l ? Math.floor(l / o) + 1 : 1,
        total_results: s,
        page_results: null != a ? a : null,
        num_modifiers: Object.keys(n).length,
        modifiers: n,
    };
}
