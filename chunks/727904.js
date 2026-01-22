n.d(t, {
    A: () => a,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    l = n(627794),
    s = n(789821);

function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 ? arguments[2] : void 0,
        [a, c] = r.useState((0, s.Mv)(t)),
        { errorMessage: o, handleValidateKeywords: d } = (function (e) {
            let [t, n] = r.useState(null);
            return {
                errorMessage: t,
                handleValidateKeywords: r.useMemo(
                    () =>
                        (0, i.debounce)(
                            (t) => {
                                try {
                                    (0, l.wk)(t, e), n(null);
                                } catch (e) {
                                    n(e.message);
                                }
                            },
                            300,
                            {
                                leading: !0,
                                trailing: !0,
                            },
                        ),
                    [e],
                ),
            };
        })(n),
        u = r.useCallback((e) => (0 !== e.length && (0, s.ir)(e) ? (0, s.Mv)((0, s.c_)(e)) : e), []);
    return {
        value: a,
        errorMessage: o,
        onChange: r.useCallback(
            (t) => {
                let n = t.currentTarget.value;
                "insertFromPaste" === t.nativeEvent.inputType && (n = u(n));
                let r = (0, s.c_)(n);
                c(n), e(r), d(r);
            },
            [d, u, e],
        ),
    };
}
