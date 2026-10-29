r.d(t, { o: () => s });
var n = r(478793),
    i = r(454101),
    o = r(371716),
    a = r(582128);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { autoFocus: t = !1, isTextInput: r, within: s } = e,
        l = (0, a.useRef)({ isFocused: !1, isFocusVisible: t || (0, n.pP)() }),
        [u, c] = (0, a.useState)(!1),
        [f, d] = (0, a.useState)(() => l.current.isFocused && l.current.isFocusVisible),
        p = (0, a.useCallback)(() => d(l.current.isFocused && l.current.isFocusVisible), []),
        h = (0, a.useCallback)(
            (e) => {
                ((l.current.isFocused = e), (l.current.isFocusVisible = (0, n.pP)()), c(e), p());
            },
            [p],
        );
    (0, n.K7)(
        (e) => {
            ((l.current.isFocusVisible = e), p());
        },
        [r, u],
        { enabled: u, isTextInput: r },
    );
    let { focusProps: m } = (0, i.i)({ isDisabled: s, onFocusChange: h }),
        { focusWithinProps: v } = (0, o.R)({ isDisabled: !s, onFocusWithinChange: h });
    return { isFocused: u, isFocusVisible: f, focusProps: s ? v : m };
}
