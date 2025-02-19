n.d(t, { Z: () => i }), n(47120), n(301563), n(566702);
var a = n(192379),
    r = n(211266),
    l = n(212819);
function i(e) {
    let { searchOptions: t } = e,
        [n, i] = a.useState({
            results: [],
            query: ''
        }),
        s = (0, r.Z)(() => {
            let e = new l.ZP((e, t) => {
                i({
                    results: e,
                    query: t
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        a.useEffect(() => () => s.destroy(), [s]),
        a.useEffect(() => {
            null != t && t !== s.options && s.setOptions(t);
        }, [s, t]),
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    a.forEach(function (t) {
                        var a;
                        (a = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = a);
                    });
            }
            return e;
        })(
            {
                search: a.useCallback(
                    (e) => {
                        var t;
                        let { query: n, resultTypes: a } = e;
                        (null == s.resultTypes || ((t = s.resultTypes), !(a.length === t.size && a.every((e) => t.has(e))))) && (s.setResultTypes(a), s.setLimit(1 === a.length ? 50 : 20)), s.search('' === n.trim() ? '' : n);
                    },
                    [s]
                )
            },
            n
        )
    );
}
