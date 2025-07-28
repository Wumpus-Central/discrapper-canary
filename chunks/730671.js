(n.d(t, { Z: () => s }), n(388685));
var r = n(73800),
    i = n(392711),
    l = n(236413),
    a = n(422303);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 ? arguments[2] : void 0,
        [s, o] = r.useState((0, a.se)(t)),
        { errorMessage: c, handleValidateKeywords: d } = (function (e) {
            let [t, n] = r.useState(null),
                a = r.useRef(null);
            return {
                errorMessage: t,
                handleValidateKeywords: r.useCallback(
                    () =>
                        (0, i.debounce)(
                            (t) => {
                                (clearTimeout(a.current),
                                    (a.current = setTimeout(() => {
                                        try {
                                            ((0, l.km)(t, e), n(null));
                                        } catch (e) {
                                            n(e.message);
                                        }
                                        clearTimeout(a.current);
                                    }, 500)));
                            },
                            300,
                            {
                                leading: !0,
                                trailing: !0
                            }
                        ),
                    [e]
                )
            };
        })(n),
        u = r.useCallback((e) => (0 !== e.length && (0, a.kU)(e) ? (0, a.se)((0, a.Ac)(e)) : e), []);
    return {
        value: s,
        errorMessage: c,
        onChange: r.useCallback(
            (t) => {
                let n = t.currentTarget.value;
                'insertFromPaste' === t.nativeEvent.inputType && (n = u(n));
                let r = (0, a.Ac)(n);
                (o(n), e(r), d()(r));
            },
            [d, u, e]
        )
    };
}
