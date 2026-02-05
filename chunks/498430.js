"use strict";
n.d(t, { o: () => o });
var r = n(885714),
    i = n(628024),
    a = n(744493),
    s = n(64700);
function o(e = {}) {
    let { autoFocus: t = !1, isTextInput: n, within: l } = e,
        u = (0, s.useRef)({ isFocused: !1, isFocusVisible: t || (0, r.pP)() }),
        [c, d] = (0, s.useState)(!1),
        [_, f] = (0, s.useState)(() => u.current.isFocused && u.current.isFocusVisible),
        p = (0, s.useCallback)(() => f(u.current.isFocused && u.current.isFocusVisible), []),
        h = (0, s.useCallback)(
            (e) => {
                (u.current.isFocused = e), d(e), p();
            },
            [p],
        );
    (0, r.K7)(
        (e) => {
            (u.current.isFocusVisible = e), p();
        },
        [],
        { isTextInput: n },
    );
    let { focusProps: m } = (0, i.i)({ isDisabled: l, onFocusChange: h }),
        { focusWithinProps: g } = (0, a.R)({ isDisabled: !l, onFocusWithinChange: h });
    return { isFocused: c, isFocusVisible: _, focusProps: l ? g : m };
}
