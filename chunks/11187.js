"use strict";
n.d(t, { QL: () => o, mW: () => s });
var r = n(652215);
function i(e) {
    return "Klipy" === e;
}
function a(e) {
    return i(e);
}
function s(e) {
    if (!a(e.providerName)) return;
    let { thumbnail: t } = e;
    if (null != t) return t.proxyURL ?? t.url ?? t.uri;
}
function o(e, t, n) {
    let i = null != t ? { [t]: 1 } : {},
        { offset: a, limit: s, results: o, totalResults: l } = n ?? {};
    return {
        search_type: r.I4_.GIF,
        load_id: e,
        limit: s,
        offset: a,
        page: null != s && null != a ? Math.floor(a / s) + 1 : 1,
        total_results: l,
        page_results: null != o ? o : null,
        num_modifiers: Object.keys(i).length,
        modifiers: i,
    };
}
