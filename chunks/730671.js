n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379),
    r = n(392711),
    l = n(236413),
    s = n(422303);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 ? arguments[2] : void 0,
        [a, o] = i.useState((0, s.se)(t)),
        { errorMessage: c, handleValidateKeywords: d } = (function (e) {
            let [t, n] = i.useState(null),
                s = i.useRef(null);
            return {
                errorMessage: t,
                handleValidateKeywords: i.useCallback(
                    () =>
                        (0, r.debounce)(
                            (t) => {
                                clearTimeout(s.current),
                                    (s.current = setTimeout(() => {
                                        try {
                                            (0, l.km)(t, e), n(null);
                                        } catch (e) {
                                            n(e.message);
                                        }
                                        clearTimeout(s.current);
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
        u = i.useCallback((e) => (0 !== e.length && (0, s.kU)(e) ? (0, s.se)((0, s.Ac)(e)) : e), []);
    return {
        value: a,
        errorMessage: c,
        onChange: i.useCallback(
            (t) => {
                let n = t.currentTarget.value;
                'insertFromPaste' === t.nativeEvent.inputType && (n = u(n));
                let i = (0, s.Ac)(n);
                o(n), e(i), d()(i);
            },
            [d, u, e]
        )
    };
}
