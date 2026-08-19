"use strict";
r.d(t, { o: () => s });
var n = r(766382),
    o = r(49924),
    i = r(492273),
    a = r(582128);
function s(e = {}) {
    let { autoFocus: t = !1, isTextInput: r, within: l } = e,
        u = (0, a.useRef)({ isFocused: !1, isFocusVisible: t || (0, n.pP)() }),
        [c, f] = (0, a.useState)(!1),
        [p, d] = (0, a.useState)(() => u.current.isFocused && u.current.isFocusVisible),
        h = (0, a.useCallback)(() => d(u.current.isFocused && u.current.isFocusVisible), []),
        m = (0, a.useCallback)(
            (e) => {
                (u.current.isFocused = e), f(e), h();
            },
            [h],
        );
    (0, n.K7)(
        (e) => {
            (u.current.isFocusVisible = e), h();
        },
        [],
        { isTextInput: r },
    );
    let { focusProps: v } = (0, o.i)({ isDisabled: l, onFocusChange: m }),
        { focusWithinProps: y } = (0, i.R)({ isDisabled: !l, onFocusWithinChange: m });
    return { isFocused: c, isFocusVisible: p, focusProps: l ? y : v };
}
