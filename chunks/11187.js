"use strict";
n.d(t, { QL: () => s, mW: () => i });
var r = n(652215);
function i(e) {
    if ("Klipy" !== e.providerName) return;
    let { thumbnail: t } = e;
    if (null != t) return t.proxyURL ?? t.url ?? t.uri;
}
function s(e, t, n) {
    let i = null != t ? { [t]: 1 } : {},
        { offset: s, limit: a, results: o, totalResults: l } = n ?? {};
    return {
        search_type: r.I4_.GIF,
        load_id: e,
        limit: a,
        offset: s,
        page: null != a && null != s ? Math.floor(s / a) + 1 : 1,
        total_results: l,
        page_results: null != o ? o : null,
        num_modifiers: Object.keys(i).length,
        modifiers: i,
    };
}
