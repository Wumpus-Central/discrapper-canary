n.d(t, { Z: () => o }), n(388685), n(35282), n(781311);
var r = n(647438),
    i = n(211266),
    l = n(212819);
function o(e) {
    let { searchOptions: t } = e,
        [n, o] = r.useState({
            results: [],
            query: "",
        }),
        s = (0, i.Z)(() => {
            let e = new l.ZP((e, t) => {
                o({
                    results: e,
                    query: t,
                });
            });
            return e.setLimit(20), e.search(""), e;
        });
    return (
        r.useEffect(() => () => s.destroy(), [s]),
        r.useEffect(() => {
            null != t && t !== s.options && s.setOptions(t);
        }, [s, t]),
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
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
                        (null != s.resultTypes &&
                            ((t = s.resultTypes), r.length === t.size && r.every((e) => t.has(e)))) ||
                            (s.setResultTypes(r), s.setLimit(1 === r.length ? 50 : 20)),
                            s.search("" === n.trim() ? "" : n);
                    },
                    [s],
                ),
            },
            n,
        )
    );
}
