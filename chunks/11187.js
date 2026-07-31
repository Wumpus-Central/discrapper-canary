"use strict";
n.d(t, { QL: () => s, mW: () => a });
var i = n(336807),
    r = n(652215);
function a(e) {
    if (e.providerName !== i.v7) return;
    let { thumbnail: t } = e;
    if (null != t) return t.proxyURL ?? t.url ?? t.uri;
}
function s(e, t, n) {
    let i = null != t ? { [t]: 1 } : {},
        { offset: a, limit: s, results: l, totalResults: o } = n ?? {};
    return {
        search_type: r.I4_.GIF,
        load_id: e,
        limit: s,
        offset: a,
        page: null != s && null != a ? Math.floor(a / s) + 1 : 1,
        total_results: o,
        page_results: null != l ? l : null,
        num_modifiers: Object.keys(i).length,
        modifiers: i,
    };
}
