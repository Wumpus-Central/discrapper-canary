"use strict";
n.d(t, { K: () => i });
var r = n(64700);
function i(e) {
    let { active: t, options: n, renderOption: i } = e,
        s = "function" == typeof n,
        [a, o] = r.useState({ options: s ? [] : n, query: "", debouncedQuery: "", loading: !1 }),
        { options: l, loading: u, query: d, debouncedQuery: c } = a,
        _ = r.useCallback((e) => o((t) => ({ ...t, loading: s, query: e, debouncedQuery: e })), [s]);
    return (
        r.useEffect(() => {
            t && _("");
        }, [t, _]),
        r.useEffect(() => {
            let e;
            return (
                s
                    ? (o((e) => ({ ...e, loading: !0, debouncedQuery: null })),
                      (e = setTimeout(() => {
                          _(d);
                      }, 500)))
                    : _(d),
                () => {
                    clearTimeout(e);
                }
            );
        }, [s, d, _]),
        r.useEffect(() => {
            let e = !1;
            return (
                ((t && null !== c && s) || !s) &&
                    ("function" == typeof n ? n(c) : Promise.resolve(n)).then((t) => {
                        e || (null != i && (t = t.map(i)), o((e) => ({ ...e, options: t, loading: !1 })));
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, n, c, i, s]),
        {
            options: l,
            loading: u,
            onQueryChange: r.useCallback((e) => {
                o((t) => ({ ...t, query: e }));
            }, []),
        }
    );
}
