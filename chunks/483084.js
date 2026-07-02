"use strict";
n.d(t, { K: () => s });
var i = n(64700),
    r = n(715022);
function s(e) {
    let { active: t, options: n, renderOption: s } = e,
        a = "function" == typeof n,
        [o, l] = i.useState({ options: a ? [] : n, query: "", debouncedQuery: "", loading: !1 }),
        { options: u, loading: d, query: c, debouncedQuery: _ } = o,
        h = i.useCallback((e) => l((t) => ({ ...t, loading: a, query: e, debouncedQuery: e })), [a]);
    i.useEffect(() => {
        t && h("");
    }, [t, h]),
        i.useEffect(() => {
            let e;
            return (
                a
                    ? (l((e) => ({ ...e, loading: !0, debouncedQuery: null })),
                      (e = setTimeout(() => {
                          h(c);
                      }, 500)))
                    : h(c),
                () => {
                    clearTimeout(e);
                }
            );
        }, [a, c, h]),
        i.useEffect(() => {
            let e = !1;
            return (
                ((t && null !== _ && a) || !a) &&
                    ("function" == typeof n ? n(_) : Promise.resolve(n)).then((t) => {
                        e || (null != s && (t = t.map(s)), l((e) => ({ ...e, options: t, loading: !1 })));
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, n, _, s, a]);
    let f = i.useCallback((e) => {
            l((t) => ({ ...t, query: e }));
        }, []),
        { flatOptions: E, groups: p } = i.useMemo(() => (0, r.yG)(u), [u]);
    return { options: E, groups: p, loading: d, onQueryChange: f };
}
