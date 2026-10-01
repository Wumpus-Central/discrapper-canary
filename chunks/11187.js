r.d(e, { QL: () => o, mW: () => l });
var n = r(336807),
    i = r(652215);
function l(t) {
    if (t.providerName !== n.v7) return;
    let { thumbnail: e } = t;
    if (null != e) return e.proxyURL ?? e.url ?? e.uri;
}
function o(t, e, r) {
    let n = null != e ? { [e]: 1 } : {},
        { offset: l, limit: o, results: a, totalResults: s } = r ?? {};
    return {
        search_type: i.I4_.GIF,
        load_id: t,
        limit: o,
        offset: l,
        page: null != o && null != l ? Math.floor(l / o) + 1 : 1,
        total_results: s,
        page_results: null != a ? a : null,
        num_modifiers: Object.keys(n).length,
        modifiers: n,
    };
}
