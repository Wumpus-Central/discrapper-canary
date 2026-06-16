"use strict";
n.d(t, { QL: () => r, mW: () => i });
var l = n(652215);
function i(e) {
    if ("Klipy" !== e.providerName) return;
    let { thumbnail: t } = e;
    if (null != t) return t.proxyURL ?? t.url ?? t.uri;
}
function r(e, t, n) {
    let i = null != t ? { [t]: 1 } : {},
        { offset: r, limit: s, results: a, totalResults: o } = n ?? {};
    return {
        search_type: l.I4_.GIF,
        load_id: e,
        limit: s,
        offset: r,
        page: null != s && null != r ? Math.floor(r / s) + 1 : 1,
        total_results: o,
        page_results: null != a ? a : null,
        num_modifiers: Object.keys(i).length,
        modifiers: i,
    };
}
