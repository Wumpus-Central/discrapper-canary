n.d(t, { o: () => o });
var r = n(885714),
    i = n(628024),
    a = n(744493),
    s = n(64700);
function o(e = {}) {
    let { autoFocus: t = !1, isTextInput: n, within: l } = e,
        c = (0, s.useRef)({
            isFocused: !1,
            isFocusVisible: t || (0, r.pP)(),
        }),
        [u, d] = (0, s.useState)(!1),
        [f, p] = (0, s.useState)(() => c.current.isFocused && c.current.isFocusVisible),
        _ = (0, s.useCallback)(() => p(c.current.isFocused && c.current.isFocusVisible), []),
        h = (0, s.useCallback)(
            (e) => {
                (c.current.isFocused = e), d(e), _();
            },
            [_],
        );
    (0, r.K7)(
        (e) => {
            (c.current.isFocusVisible = e), _();
        },
        [],
        { isTextInput: n },
    );
    let { focusProps: m } = (0, i.i)({
            isDisabled: l,
            onFocusChange: h,
        }),
        { focusWithinProps: g } = (0, a.R)({
            isDisabled: !l,
            onFocusWithinChange: h,
        });
    return {
        isFocused: u,
        isFocusVisible: f,
        focusProps: l ? g : m,
    };
}
