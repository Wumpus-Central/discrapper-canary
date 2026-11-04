r(336807);
var n = r(652215);
r.d(
    t,
    {},
    {
        QL: function (e, t, r) {
            let i = null != t ? { [t]: 1 } : {},
                { offset: l, limit: o, results: a, totalResults: s } = r ?? {};
            return {
                search_type: n.I4_.GIF,
                load_id: e,
                limit: o,
                offset: l,
                page: null != o && null != l ? Math.floor(l / o) + 1 : 1,
                total_results: s,
                page_results: null != a ? a : null,
                num_modifiers: Object.keys(i).length,
                modifiers: i,
            };
        },
        mW: function (e) {
            if ("Klipy" !== e.providerName) return;
            let { thumbnail: t } = e;
            if (null != t) return t.proxyURL ?? t.url ?? t.uri;
        },
    },
);
