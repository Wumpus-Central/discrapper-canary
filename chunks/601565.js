n.d(t, { Z: () => s }), n(388685), n(35282), n(781311);
var r = n(192379),
    l = n(211266),
    i = n(212819);
function s(e) {
    let { searchOptions: t } = e,
        [n, s] = r.useState({
            results: [],
            query: ''
        }),
        o = (0, l.Z)(() => {
            let e = new i.ZP((e, t) => {
                s({
                    results: e,
                    query: t
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        r.useEffect(() => () => o.destroy(), [o]),
        r.useEffect(() => {
            null != t && t !== o.options && o.setOptions(t);
        }, [o, t]),
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
                        (null != o.resultTypes && ((t = o.resultTypes), r.length === t.size && r.every((e) => t.has(e)))) || (o.setResultTypes(r), o.setLimit(1 === r.length ? 50 : 20)), o.search('' === n.trim() ? '' : n);
                    },
                    [o]
                )
            },
            n
        )
    );
}
