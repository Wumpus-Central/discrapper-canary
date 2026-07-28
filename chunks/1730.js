"use strict";
n.d(t, { o: () => s });
var r = n(766382),
    i = n(49924),
    a = n(492273),
    o = n(582128);
function s(e = {}) {
    let { autoFocus: t = !1, isTextInput: n, within: l } = e,
        u = (0, o.useRef)({ isFocused: !1, isFocusVisible: t || (0, r.pP)() }),
        [c, d] = (0, o.useState)(!1),
        [f, p] = (0, o.useState)(() => u.current.isFocused && u.current.isFocusVisible),
        h = (0, o.useCallback)(() => p(u.current.isFocused && u.current.isFocusVisible), []),
        m = (0, o.useCallback)(
            (e) => {
                (u.current.isFocused = e), d(e), h();
            },
            [h],
        );
    (0, r.K7)(
        (e) => {
            (u.current.isFocusVisible = e), h();
        },
        [],
        { isTextInput: n },
    );
    let { focusProps: g } = (0, i.i)({ isDisabled: l, onFocusChange: m }),
        { focusWithinProps: v } = (0, a.R)({ isDisabled: !l, onFocusWithinChange: m });
    return { isFocused: c, isFocusVisible: f, focusProps: l ? v : g };
}
