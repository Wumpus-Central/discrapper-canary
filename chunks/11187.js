r(336807);
var n = r(652215);
r.d(
    e,
    {},
    {
        QL: function (t, e, r) {
            let i = null != e ? { [e]: 1 } : {},
                { offset: l, limit: o, results: a, totalResults: s } = r ?? {};
            return {
                search_type: n.I4_.GIF,
                load_id: t,
                limit: o,
                offset: l,
                page: null != o && null != l ? Math.floor(l / o) + 1 : 1,
                total_results: s,
                page_results: null != a ? a : null,
                num_modifiers: Object.keys(i).length,
                modifiers: i,
            };
        },
        mW: function (t) {
            if ("Klipy" !== t.providerName) return;
            let { thumbnail: e } = t;
            if (null != e) return e.proxyURL ?? e.url ?? e.uri;
        },
    },
);
