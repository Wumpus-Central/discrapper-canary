n.d(t, { Z: () => a }), n(388685);
var r = n(192379),
    i = n(392711),
    s = n(236413),
    l = n(422303);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 ? arguments[2] : void 0,
        [a, o] = r.useState((0, l.se)(t)),
        { errorMessage: c, handleValidateKeywords: d } = (function (e) {
            let [t, n] = r.useState(null),
                l = r.useRef(null);
            return {
                errorMessage: t,
                handleValidateKeywords: r.useCallback(
                    () =>
                        (0, i.debounce)(
                            (t) => {
                                clearTimeout(l.current),
                                    (l.current = setTimeout(() => {
                                        try {
                                            (0, s.km)(t, e), n(null);
                                        } catch (e) {
                                            n(e.message);
                                        }
                                        clearTimeout(l.current);
                                    }, 500));
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
        u = r.useCallback((e) => (0 !== e.length && (0, l.kU)(e) ? (0, l.se)((0, l.Ac)(e)) : e), []);
    return {
        value: a,
        errorMessage: c,
        onChange: r.useCallback(
            (t) => {
                let n = t.currentTarget.value;
                'insertFromPaste' === t.nativeEvent.inputType && (n = u(n));
                let r = (0, l.Ac)(n);
                o(n), e(r), d()(r);
            },
            [d, u, e]
        )
    };
}
