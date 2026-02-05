"use strict";
n.d(t, { K: () => i });
var r = n(64700);
function i(e) {
    let { active: t, options: n, renderOption: i } = e,
        a = "function" == typeof n,
        [s, o] = r.useState({ options: a ? [] : n, query: "", debouncedQuery: "", loading: !1 }),
        { options: l, loading: u, query: c, debouncedQuery: d } = s,
        _ = r.useCallback((e) => o((t) => ({ ...t, loading: a, query: e, debouncedQuery: e })), [a]);
    return (
        r.useEffect(() => {
            t && _("");
        }, [t, _]),
        r.useEffect(() => {
            let e;
            return (
                a
                    ? (o((e) => ({ ...e, loading: !0, debouncedQuery: null })),
                      (e = setTimeout(() => {
                          _(c);
                      }, 500)))
                    : _(c),
                () => {
                    clearTimeout(e);
                }
            );
        }, [a, c, _]),
        r.useEffect(() => {
            let e = !1;
            function r() {
                return "function" == typeof n ? n(d) : Promise.resolve(n);
            }
            return (
                ((t && null !== d && a) || !a) &&
                    r().then((t) => {
                        e || (null != i && (t = t.map(i)), o((e) => ({ ...e, options: t, loading: !1 })));
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, n, d, i, a]),
        {
            options: l,
            loading: u,
            onQueryChange: r.useCallback((e) => {
                o((t) => ({ ...t, query: e }));
            }, []),
        }
    );
}
