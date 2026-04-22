n.d(t, { A: () => a });
var i = n(64700),
    l = n(735438),
    s = n(627794),
    r = n(789821);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 ? arguments[2] : void 0,
        [a, o] = i.useState((0, r.Mv)(t)),
        { errorMessage: d, handleValidateKeywords: c } = (function (e) {
            let [t, n] = i.useState(null);
            return {
                errorMessage: t,
                handleValidateKeywords: i.useMemo(
                    () =>
                        (0, l.debounce)(
                            (t) => {
                                try {
                                    (0, s.wk)(t, e), n(null);
                                } catch (e) {
                                    n(e.message);
                                }
                            },
                            300,
                            { leading: !0, trailing: !0 },
                        ),
                    [e],
                ),
            };
        })(n),
        u = i.useCallback((e) => (0 !== e.length && (0, r.ir)(e) ? (0, r.Mv)((0, r.c_)(e)) : e), []);
    return {
        value: a,
        errorMessage: d,
        onChange: i.useCallback(
            (t) => {
                let n = t.currentTarget.value;
                "insertFromPaste" === t.nativeEvent.inputType && (n = u(n));
                let i = (0, r.c_)(n);
                o(n), e(i), c(i);
            },
            [c, u, e],
        ),
    };
}
