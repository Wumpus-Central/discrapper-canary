n.d(t, { Z: () => a }), n(47120), n(301563), n(566702);
var r = n(192379),
    l = n(211266),
    s = n(212819);
function a(e) {
    let { searchOptions: t } = e,
        [n, a] = r.useState({
            results: [],
            query: ''
        }),
        i = (0, l.Z)(() => {
            let e = new s.ZP((e, t) => {
                a({
                    results: e,
                    query: t
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        r.useEffect(() => () => i.destroy(), [i]),
        r.useEffect(() => {
            null != t && t !== i.options && i.setOptions(t);
        }, [i, t]),
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
                        (null != i.resultTypes && ((t = i.resultTypes), r.length === t.size && r.every((e) => t.has(e)))) || (i.setResultTypes(r), i.setLimit(1 === r.length ? 50 : 20)), i.search('' === n.trim() ? '' : n);
                    },
                    [i]
                )
            },
            n
        )
    );
}
