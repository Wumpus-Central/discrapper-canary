n.d(t, { Z: () => s }), n(388685), n(35282), n(781311);
var r = n(192379),
    i = n(211266),
    l = n(212819);
function s(e) {
    let { searchOptions: t } = e,
        [n, s] = r.useState({
            results: [],
            query: ''
        }),
        a = (0, i.Z)(() => {
            let e = new l.ZP((e, t) => {
                s({
                    results: e,
                    query: t
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        r.useEffect(() => () => a.destroy(), [a]),
        r.useEffect(() => {
            null != t && t !== a.options && a.setOptions(t);
        }, [a, t]),
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                search: r.useCallback(
                    (e) => {
                        var t;
                        let { query: n, resultTypes: r } = e;
                        (null != a.resultTypes && ((t = a.resultTypes), r.length === t.size && r.every((e) => t.has(e)))) || (a.setResultTypes(r), a.setLimit(1 === r.length ? 50 : 20)), a.search('' === n.trim() ? '' : n);
                    },
                    [a]
                )
            },
            n
        )
    );
}
