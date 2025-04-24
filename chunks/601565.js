n.d(t, { Z: () => a }), n(388685), n(35282), n(781311);
var l = n(192379),
    r = n(211266),
    i = n(212819);
function a(e) {
    let { searchOptions: t } = e,
        [n, a] = l.useState({
            results: [],
            query: ''
        }),
        s = (0, r.Z)(() => {
            let e = new i.ZP((e, t) => {
                a({
                    results: e,
                    query: t
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        l.useEffect(() => () => s.destroy(), [s]),
        l.useEffect(() => {
            null != t && t !== s.options && s.setOptions(t);
        }, [s, t]),
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    l.forEach(function (t) {
                        var l;
                        (l = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = l);
                    });
            }
            return e;
        })(
            {
                search: l.useCallback(
                    (e) => {
                        var t;
                        let { query: n, resultTypes: l } = e;
                        (null != s.resultTypes && ((t = s.resultTypes), l.length === t.size && l.every((e) => t.has(e)))) || (s.setResultTypes(l), s.setLimit(1 === l.length ? 50 : 20)), s.search('' === n.trim() ? '' : n);
                    },
                    [s]
                )
            },
            n
        )
    );
}
