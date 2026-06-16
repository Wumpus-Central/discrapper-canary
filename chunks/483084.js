"use strict";
n.d(t, { K: () => r });
var i = n(64700);
function r(e) {
    let { active: t, options: n, renderOption: r } = e,
        s = "function" == typeof n,
        [a, o] = i.useState({ options: s ? [] : n, query: "", debouncedQuery: "", loading: !1 }),
        { options: l, loading: u, query: c, debouncedQuery: d } = a,
        _ = i.useCallback((e) => o((t) => ({ ...t, loading: s, query: e, debouncedQuery: e })), [s]);
    return (
        i.useEffect(() => {
            t && _("");
        }, [t, _]),
        i.useEffect(() => {
            let e;
            return (
                s
                    ? (o((e) => ({ ...e, loading: !0, debouncedQuery: null })),
                      (e = setTimeout(() => {
                          _(c);
                      }, 500)))
                    : _(c),
                () => {
                    clearTimeout(e);
                }
            );
        }, [s, c, _]),
        i.useEffect(() => {
            let e = !1;
            return (
                ((t && null !== d && s) || !s) &&
                    ("function" == typeof n ? n(d) : Promise.resolve(n)).then((t) => {
                        e || (null != r && (t = t.map(r)), o((e) => ({ ...e, options: t, loading: !1 })));
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, n, d, r, s]),
        {
            options: l,
            loading: u,
            onQueryChange: i.useCallback((e) => {
                o((t) => ({ ...t, query: e }));
            }, []),
        }
    );
}
