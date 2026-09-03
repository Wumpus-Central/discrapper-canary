r.d(t, { o: () => s });
var n = r(225801),
    i = r(67669),
    o = r(761412),
    a = r(582128);
function s(e = {}) {
    let { autoFocus: t = !1, isTextInput: r, within: l } = e,
        u = (0, a.useRef)({ isFocused: !1, isFocusVisible: t || (0, n.pP)() }),
        [c, f] = (0, a.useState)(!1),
        [d, p] = (0, a.useState)(() => u.current.isFocused && u.current.isFocusVisible),
        h = (0, a.useCallback)(() => p(u.current.isFocused && u.current.isFocusVisible), []),
        m = (0, a.useCallback)(
            (e) => {
                (u.current.isFocused = e), (u.current.isFocusVisible = (0, n.pP)()), f(e), h();
            },
            [h],
        );
    (0, n.K7)(
        (e) => {
            (u.current.isFocusVisible = e), h();
        },
        [r, c],
        { enabled: c, isTextInput: r },
    );
    let { focusProps: v } = (0, i.i)({ isDisabled: l, onFocusChange: m }),
        { focusWithinProps: y } = (0, o.R)({ isDisabled: !l, onFocusWithinChange: m });
    return { isFocused: c, isFocusVisible: d, focusProps: l ? y : v };
}
